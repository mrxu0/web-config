import { hasPackage } from "./utils/dealPackage";
import { debugError } from "./utils/debug";
import { eslintAllConfig } from "./core/eslintConfig";
import { prettierAllConfig } from "./core/prettierConfig";
import { stylelintAllConfig } from "./core/stylelintConfig";

//  检测命令执行的位置是否是项目的根目录，判断依据未是否有 package.json
if (!hasPackage()) {
  debugError(
    "检测命令执行的位置是否是项目的根目录，判断依据未是否有 package.json"
  );
}

eslintAllConfig();
prettierAllConfig();
stylelintAllConfig();
