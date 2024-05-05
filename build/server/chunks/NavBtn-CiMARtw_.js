import { c as create_ssr_component, d as add_attribute, b as escape } from './ssr-fIbI7xQ0.js';

class Icons {
  static ADD = " ➕";
  static BALANCE = "⚖️";
  static BARCHART = "📊";
  static BOOK = "📘";
  static BOOKS = "📚";
  static BUS = "🚌";
  static BULB = "💡";
  static CAR = "🚗";
  static CHARTUP = "📈";
  static CHARTDOWN = "📉";
  static CLOCK = "⏱️";
  static COG = "⚙";
  static COMPUTER = "💻";
  static CODE = "📟";
  static COLD = "🥶";
  static CROSS = "❌";
  static DARK = "🌃";
  static DEL = "🗑️";
  static DOOR = "🚪";
  static DOWN = "↓";
  static EMAIL = "📧";
  static EYE = "👁️";
  static EYES = "👀";
  static EXPLOSION = "💥";
  static FILESBOX = "🗃️";
  static FLOWER = "🌸";
  static FROWNFACE = "☹️";
  static HAMMER_AND_WRENCH = "🛠️";
  static HEART = "❤️";
  static HIDE = "🙈";
  static HOT = "🔥";
  static HOURGLASS = "⌛";
  static HOUSE = "🏠";
  static ICE = "🧊";
  static KEY = "🔑";
  static LOCK = "🔒";
  static LEFT = "←";
  static MAGNIFYING_GLASS = "🔍";
  static MANAGER = "💼";
  static MCQ = "🔱";
  static MESSAGE = "📨";
  static MICROSCOPE = "🔬";
  static NET = "🌐";
  static NOTES = "📋";
  static NUMBER = "❶";
  static PALETTE = "🎨";
  static PENCIL = " ✏️";
  static PHONE = "📱";
  static QUESTIONMARK = "❓";
  static RULER = "📏";
  static RIGHT = "→";
  static RECYCLE = "♻️";
  static RUN = "🏃";
  static ROCKET = "🚀";
  static SAVE = "💾";
  static SMILYFACE = "😊";
  static SPEAKER = "📢";
  static STAIRS = "🪜";
  static STAR = "⭐";
  static START = "▶";
  static STOP = "||";
  static STUDENT = "👨‍🎓";
  static STUDENTCAP = "🎓";
  static SUN = "☀️";
  static SUBTRACT = "➖";
  static TAG = "🏷️";
  static TEAM = "🧑‍🤝‍🧑";
  static TICK = "✔️";
  static TEMPRATURE = "🌡️";
  static TEMPLATE = "📜";
  static TEST = "🧪";
  static TEXT = "📃";
  static THUMBSUP = "👍";
  static THUMBSDOWN = "👎";
  static TRIANGULAR_RULER = "📐";
  static TREE = "🌳";
  static TV = "📺";
  static WRENCH = "🔧";
  static UP = "↑";
  // add more icons here
}
const HdgWithIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "📜" } = $$props;
  let { bgColor = "bg-blue-800" } = $$props;
  let { size = 2 } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div${add_attribute("class", `inline-flex  justify-center ${bgColor} text-white rounded-md p-2  px-8 m-2`, 0)}><span${add_attribute("class", `text-${size}xl`, 0)}>${escape(icon)}</span> 
    <span${add_attribute("class", `text-${size}xl`, 0)}>${slots.default ? slots.default({}) : ``}</span></div>`;
});
const NavBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "https://google.com" } = $$props;
  let { icon = "🧪" } = $$props;
  let { title = "Menu" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="w-15 hover:bg-gray-700 rounded-md"><a${add_attribute("href", `${url}`, 0)}><button class="w-full flex flex-col items-center p-2 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">${escape(icon)}</span> <span class="text-xs font-md text-white">${escape(title)}</span></button></a></div>`;
});

export { HdgWithIcon as H, Icons as I, NavBtn as N };
//# sourceMappingURL=NavBtn-CiMARtw_.js.map
