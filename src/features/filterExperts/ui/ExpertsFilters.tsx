import { ReactElement, memo, useCallback, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  FiltersForm,
  setFilters,
  useGetDefaultFilters,
  useGetFiltersOptions,
} from "src/entities/expert";
import { Button, Select } from "src/shared/ui";
import { useAppDispatch } from "src/shared/hooks";

import { formMap } from "../model/constants/form.ts";
import { AgeLabel, Form, GridItem } from "./ExpertsFilters.styled.ts";

const defaultValues: FiltersForm = { ageFrom: 18, ageTo: 99 };

export const ExpertsFilters = memo(function ExpertsFilters(): ReactElement {
  const dispatch = useAppDispatch();
  const filterOptions = useGetFiltersOptions();
  const values = useGetDefaultFilters();
  const { handleSubmit: onSubmit, reset, control } = useForm<FiltersForm>({ defaultValues });

  const handleSubmitForm: SubmitHandler<FiltersForm> = useCallback(
    (data) => {
      dispatch(setFilters(data));
    },
    [dispatch],
  );

  useEffect(() => {
    reset(values);
  }, [values, reset]);

  return (
    <div>
      <Form onSubmit={onSubmit(handleSubmitForm)}>
        {formMap.map(({ name, title, placeholder, prefix, secondItem }) => {
          return (
            <GridItem $full={!secondItem} key={name}>
              {!!title && !!secondItem && <AgeLabel left={true} label={title} />}

              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <Select
                    title={secondItem ? "" : title}
                    leftTitle={name === "ageFrom"}
                    prefix={prefix}
                    placeholder={placeholder}
                    value={field.value}
                    options={filterOptions[name]}
                    onChange={field.onChange}
                  />
                )}
              />

              {secondItem && (
                <Controller
                  name={secondItem.name}
                  control={control}
                  render={({ field }) => (
                    <Select
                      prefix={secondItem.prefix}
                      value={field.value}
                      options={filterOptions[secondItem.name]}
                      onChange={field.onChange}
                    />
                  )}
                />
              )}
            </GridItem>
          );
        })}

        <Button type="submit">Показать анкеты</Button>
      </Form>
    </div>
  );
});
