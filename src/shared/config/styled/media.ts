import { generateMedia } from "styled-media-query";

import { Theme } from "./theme.ts";

const BREAKPOINT_SM = 480;
const BREAKPOINT_MD = 768;
const BREAKPOINT_LG = 1280;

interface Breakpoints {
  mobile: string;
  tablet: string;
  laptop: string;
}

export const media = generateMedia<Breakpoints, Theme>({
  mobile: `${BREAKPOINT_SM}px`,
  tablet: `${BREAKPOINT_MD}px`,
  laptop: `${BREAKPOINT_LG}px`,
});
