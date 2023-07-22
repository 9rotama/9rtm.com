export type ColorValue = `#${string}`;

type ButtonTheme = {
  backgroundColor: ColorValue;
  backgroundColorHover: ColorValue;
  innerColor: ColorValue;
  borderColor?: ColorValue;
};

export type Themes = {
  global: {
    textColor: ColorValue;
    backgroundColor: ColorValue;
    tooltip: {
      text: ColorValue;
      background: ColorValue;
    };
  };
  background: {
    pattern: {
      backgroundColor: ColorValue;
      patternColor: ColorValue;
    };
    kaomoji: ColorValue;
  };
  home: {
    title: {
      gradientTop: ColorValue;
      gradientDown: ColorValue;
      shadowColor: ColorValue;
      shineColor: ColorValue;
    };
    snsLinkButton: {
      backgroundColor: ColorValue;
      innerColor: ColorValue;
    };
  };
  header: {
    backgroundColor: ColorValue;
    menuButton: {
      passive: ButtonTheme;
      active: ButtonTheme;
    };
    bgShowSwitch: {
      passive: ButtonTheme;
      active: ButtonTheme;
    };
  };
  contextbox: {
    iconColor: ColorValue;
    iconBgColor: ColorValue;
    headingBorderColor: ColorValue;
    backgroundColor: ColorValue;
    linkButton: ButtonTheme;
    card: {
      backgroundColor: ColorValue;
      backgroundColorHover: ColorValue;
      innerColor: ColorValue;
      teamIconColor: ColorValue;
      shadowColor: ColorValue;
    };
  };
  footer: {
    textColor: ColorValue;
  };
};

const PrimaryDark = "#252A34";
const SecondaryDark = "#263657";
const PrimaryLight = "#d0dde9";

export const LightTheme: Themes = {
  global: {
    textColor: PrimaryDark,
    backgroundColor: PrimaryLight,
    tooltip: {
      text: "#FFFFFF",
      background: "#252f60ee",
    },
  },
  background: {
    pattern: {
      backgroundColor: "#dbecfb",
      patternColor: "#acc8e3",
    },
    kaomoji: "#cfe0fb",
  },
  home: {
    title: {
      gradientTop: PrimaryDark,
      gradientDown: "#7b8495",
      shadowColor: "#fff",
      shineColor: "#ffffff80",
    },
    snsLinkButton: {
      backgroundColor: "#eff6fadd",
      innerColor: "#253a60a0",
    },
  },
  header: {
    backgroundColor: "#e3ecf470",
    menuButton: {
      passive: {
        backgroundColor: "#00000000",
        backgroundColorHover: `${PrimaryDark}20`,
        innerColor: PrimaryDark,
        borderColor: `${PrimaryDark}50`,
      },
      active: {
        backgroundColor: PrimaryDark,
        backgroundColorHover: PrimaryDark,
        innerColor: PrimaryLight,
        borderColor: `${PrimaryDark}50`,
      },
    },
    bgShowSwitch: {
      passive: {
        backgroundColor: "#00000000",
        backgroundColorHover: `${PrimaryDark}20`,
        innerColor: PrimaryDark,
        borderColor: `${PrimaryDark}42`,
      },
      active: {
        backgroundColor: SecondaryDark,
        backgroundColorHover: "#11141a",
        innerColor: PrimaryLight,
        borderColor: `${PrimaryDark}42`,
      },
    },
  },
  contextbox: {
    iconColor: PrimaryLight,
    iconBgColor: PrimaryDark,
    backgroundColor: "#e3ecf4ee",
    headingBorderColor: `${PrimaryDark}55`,
    linkButton: {
      backgroundColor: PrimaryDark,
      backgroundColorHover: `#090b0d`,
      innerColor: PrimaryLight,
    },
    card: {
      backgroundColor: "#f5faff",
      backgroundColorHover: "#ffffff",
      innerColor: PrimaryDark,
      teamIconColor: "#252f6022",
      shadowColor: "#252a3422",
    },
  },
  footer: {
    textColor: `${PrimaryDark}99`,
  },
};

export const DarkTheme: Themes = {
  global: {
    textColor: PrimaryLight,
    backgroundColor: PrimaryDark,
    tooltip: {
      text: "#FFFFFF",
      background: "#252f60ee",
    },
  },
  background: {
    pattern: {
      backgroundColor: "#455f76",
      patternColor: "#272f37",
    },
    kaomoji: "#9dabb6",
  },
  home: {
    title: {
      gradientTop: PrimaryLight,
      gradientDown: "#7b8495",
      shadowColor: "#00000000",
      shineColor: "#25343f80",
    },
    snsLinkButton: {
      backgroundColor: "#121d329f",
      innerColor: "#eff6fadd",
    },
  },
  header: {
    backgroundColor: "#111e29a0",
    menuButton: {
      passive: {
        backgroundColor: "#00000000",
        backgroundColorHover: `${PrimaryLight}20`,
        innerColor: PrimaryLight,
        borderColor: `${PrimaryLight}50`,
      },
      active: {
        backgroundColor: PrimaryLight,
        backgroundColorHover: PrimaryLight,
        innerColor: PrimaryDark,
        borderColor: `${PrimaryLight}50`,
      },
    },
    bgShowSwitch: {
      passive: {
        backgroundColor: "#00000000",
        backgroundColorHover: `${PrimaryLight}20`,
        innerColor: PrimaryLight,
        borderColor: `${PrimaryLight}42`,
      },
      active: {
        backgroundColor: PrimaryLight,
        backgroundColorHover: "#eff2f7",
        innerColor: PrimaryDark,
        borderColor: `${PrimaryLight}42`,
      },
    },
  },
  contextbox: {
    iconColor: PrimaryDark,
    iconBgColor: PrimaryLight,
    backgroundColor: "#13222fd8",
    headingBorderColor: `${PrimaryLight}55`,
    linkButton: {
      backgroundColor: PrimaryLight,
      backgroundColorHover: `#eff2f7"`,
      innerColor: PrimaryDark,
    },
    card: {
      backgroundColor: PrimaryDark,
      backgroundColorHover: PrimaryDark,
      innerColor: PrimaryLight,
      teamIconColor: "#8ea1b238",
      shadowColor: "#10141b9c",
    },
  },
  footer: {
    textColor: `${PrimaryDark}99`,
  },
};
