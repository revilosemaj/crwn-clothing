import React from "react";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectory } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
    <div className="directory-menu" >
        { sections.map(({ id, ...otherSectionsProps }) => (
            <MenuItem key={id} { ...otherSectionsProps } />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections : selectDirectory
});

export default connect(mapStateToProps)(Directory);