/** @jsx jsx */
import { jsx } from "@emotion/core";
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import { Button, Icon, Popup } from "semantic-ui-react";

const Notes = () => {
  const [noteText, setNoteText] = useState("");
  const [expandedNote, setExpandedNote] = useState(false);
  const defaultNoteWidth = 275;
  const defaultNoteHeight = 250;
  return (
    <Grid container justify="center" className="InfoStorageNotes">
      <Grid item xs={12}>
        <div>
          <div css={{ position: "absolute", left: expandedNote ? 500 : 400 }}>
            <Button
              circular
              color="pink"
              size="small"
              animated="fade"
              onClick={() => setExpandedNote(!expandedNote)}>
              <Button.Content visible>
                <Icon
                  name={
                    expandedNote
                      ? "minus square outline"
                      : "expand arrows alternate"
                  }
                />
              </Button.Content>
              <Button.Content hidden>
                {expandedNote ? "shrink" : "enlarge"}
              </Button.Content>
            </Button>
          </div>
          <textarea
            css={{
              width: expandedNote ? defaultNoteWidth * 1.5 : defaultNoteWidth,
              height: expandedNote
                ? defaultNoteHeight * 1.5
                : defaultNoteHeight,
              resize: "none",
              outline: "none",
              lineHeight: 1.5,
              margin: 20,
              minHeight: expandedNote
                ? defaultNoteHeight * 1.5
                : defaultNoteHeight,
              maxHeight: expandedNote
                ? defaultNoteHeight * 1.5
                : defaultNoteHeight,
              padding: 20,
              position: "relative",
              border: "1px solid #E8E8E8",
              fontSize: "1em",
              borderBottomRightRadius: "60px 5px",
              display: "inline-block",
              background: "#ffff88" /* Old browsers */,
              background:
                "-moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%)" /* FF3.6+ */,
              background:
                "-webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6))" /* Chrome,Safari4+ */,
              background:
                "-webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* Chrome10+,Safari5.1+ */,
              background:
                "-o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* Opera 11.10+ */,
              background:
                "-ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* IE10+ */,
              background:
                "linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* W3C */,
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 )"
            }}
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            placeholder="Add your notes here..."
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Notes;
