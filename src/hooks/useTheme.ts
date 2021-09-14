import { IBasePearlTheme } from "./../theme/src/types";
import { useContext } from "react";
import { IThemeContext, themeContext } from "../theme/src/themeContext";

/**
 * Hook to get access to the active theme object, active color mode, and a function to toggle the active theme
 */
export const useTheme = <Theme extends IBasePearlTheme = IBasePearlTheme>() =>
  useContext(themeContext) as IThemeContext<Theme>;
