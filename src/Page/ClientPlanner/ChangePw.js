import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function ChangePw(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [url, setURL] = useState("");

  const addLink = () => {
    console.log("child labor");
    props.onAddLinkProps(name, url, tags);
    setModal(false);
    setName("");
    setURL("");
    setTags([]);
  };

  const onTagChange = (i, e) => {
    console.log(i, "index");
    console.log(e, "event");
    console.log("doing something for tags");
    const newTags = tags.slice();
    newTags[i] = {
      name: e.currentTarget.value,
    };
    console.log('onTagchange', newTags)
    setTags(newTags);
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => {
          console.log("clicked");
          setModal(!modal);
        }}
      >
        Add Link
      </Button>
      <Modal show={modal}>
        <Modal.Header>Add Link Form</Modal.Header>
        <Modal.Body>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <label>URL:</label>
          <br />
          <input
            type="text"
            value={url}
            onChange={(e) => setURL(e.currentTarget.value)}
          />
          <br />
          <label>Tags:</label>
          <br />
          {/* Do not need the inline conditional? */}
          {tags && tags.length > 0
            ? tags.map((tag, i) => {
                return (
                  <input
                    key={i}
                    type="text"
                    value={tag.name}
                    onChange={(e) => onTagChange(i, e)}
                  />
                );
              })
            : "No Tags"}
          <br />
          <Button
            variant="secondary"
            onClick={() => setTags(tags.concat([{ name: "" }]))}
          >
            Add Tag
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addLink}>
            Submit
          </Button>
          <Button color="danger" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
