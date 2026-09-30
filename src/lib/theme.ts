export interface ScholarTheme {
  style: "editorial" | "classical";
  primaryColor: string;
  accentColor: string;
  surfaceColor: string;
  headingFont: string;
  bodyFont: string;
  arabicFont: string;
  amharicFont: string;
  radius: "none" | "sm" | "md";
  navigation: "topbar" | "sidebar";
}

export const EDITORIAL_THEME: ScholarTheme = {
  style: "editorial",
  primaryColor: "#2D3436",
  accentColor: "#1B5E20",
  surfaceColor: "#FAF8F5",
  headingFont: "Manrope",
  bodyFont: "Inter",
  arabicFont: "Amiri",
  amharicFont: "Noto Sans Ethiopic",
  radius: "sm",
  navigation: "topbar",
};

export const CLASSICAL_THEME: ScholarTheme = {
  style: "classical",
  primaryColor: "#1A1A1A",
  accentColor: "#800020",
  surfaceColor: "#FFFFFF",
  headingFont: "Playfair Display",
  bodyFont: "Source Serif 4",
  arabicFont: "Amiri",
  amharicFont: "Noto Sans Ethiopic",
  radius: "none",
  navigation: "topbar",
};
