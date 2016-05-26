import {Styles} from "./";
import {DocumentDefaults} from "./defaults";
import {ParagraphPropertiesDefaults} from "./defaults/paragraph-properties";
import {RunPropertiesDefaults} from "./defaults/run-properties";
import {Heading1Style, Heading2Style, TitleStyle, Heading3Style, Heading4Style, Heading5Style, Heading6Style, ListParagraph} from "./style";
// import {StyleAttributes} from "./style/attributes";
import {ParagraphProperties} from "../docx/paragraph/properties";
import {RunProperties} from "../docx/run/properties";
import {Color, Size, Italics} from "../docx/run/formatting";

export class DefaultStylesFactory {

    newInstance(): Styles {
        let styles = new Styles();
        styles.push(new DocumentDefaults());

        let titleStyle = new TitleStyle();
        titleStyle.addRunProperty(new Size(56));
        styles.push(titleStyle);

        let heading1Style = new Heading1Style();
        heading1Style.addRunProperty(new Color("2E74B5"));
        heading1Style.addRunProperty(new Size(32));
        styles.push(heading1Style);

        let heading2Style = new Heading2Style();
        heading2Style.addRunProperty(new Color("2E74B5"));
        heading2Style.addRunProperty(new Size(26));
        styles.push(heading2Style);

        let heading3Style = new Heading3Style();
        heading3Style.addRunProperty(new Color("1F4D78"));
        heading3Style.addRunProperty(new Size(24));
        styles.push(heading3Style);

        let heading4Style = new Heading4Style();
        heading4Style.addRunProperty(new Color("2E74B5"));
        heading4Style.addRunProperty(new Italics());
        styles.push(heading4Style);

        let heading5Style = new Heading5Style();
        heading5Style.addRunProperty(new Color("2E74B5"));
        styles.push(heading5Style);

        let heading6Style = new Heading6Style();
        heading6Style.addRunProperty(new Color("1F4D78"));
        styles.push(heading6Style);

        let listParagraph = new ListParagraph();
        // listParagraph.addParagraphProperty();
        styles.push(listParagraph);

        // console.log(JSON.stringify(styles, null, "  "));
        return styles;
    }
}