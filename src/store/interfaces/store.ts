import { ThemeState } from "../../core/theme/slice";
import { AuthState } from "../../pages/Auth/interfaces";
import { IArticleState } from "../../pages/Home/Article/interfaces";
import { ToasterState } from "../../slices/toaster.slice";

export interface RootState {
    auth: AuthState;
    toaster: ToasterState;
    articles: IArticleState;
    theme: ThemeState
}
