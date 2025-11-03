import {
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// node_modules/remix-utils/browser/react/use-hydrated.js
var import_react = __toESM(require_react());
var hydrating = true;
function useHydrated() {
  let [hydrated, setHydrated] = (0, import_react.useState)(() => !hydrating);
  (0, import_react.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

export {
  useHydrated
};
//# sourceMappingURL=/build/_shared/chunk-KATHKNLH.js.map
