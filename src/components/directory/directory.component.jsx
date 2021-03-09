import React from "react";
import { DirectoryMenu } from "./directory.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectory } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
    <DirectoryMenu>
        { sections.map(({ id, ...otherSectionsProps }) => (
            <MenuItem key={id} { ...otherSectionsProps } />
        ))}
    </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
    sections : selectDirectory
});

export default connect(mapStateToProps)(Directory);