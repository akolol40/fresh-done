import { JSX , Fragment} from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Layout(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
   <div className="wrapper">
        <div className="container">
            <div className="ant-spin-nested-loading">
                <div className="invoiceBlock">
                    {props.children}
                </div>
            </div>
        </div>
   </div>
  );
}
