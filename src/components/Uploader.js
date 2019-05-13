// this page should replace todos/new rails view

import React, { Component } from "react";
import ActiveStorageProvider from "react-activestorage-provider";

class Uploader extends Component {
  state = {
    picture: null
  };
  render() {
    return (
      <ActiveStorageProvider
        endpoint={{
          path: "/todos",
          model: "todo",
          host: "localhost:3002",
          attribute: "picture",
          method: "POST"
        }}
        onSubmit={todo => this.setState({ picture: todo.picture })}
        render={({ handleUpload, uploads, ready }) => (
          <div>
            <input
              type="file"
              disabled={!ready}
              onChange={e => handleUpload(e.currentTarget.files)}
            />

            {uploads.map(upload => {
              switch (upload.state) {
                case "waiting":
                  return (
                    <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  );
                case "uploading":
                  return (
                    <p key={upload.id}>
                      Uploading {upload.file.name}: {upload.progress}%
                    </p>
                  );
                case "error":
                  return (
                    <p key={upload.id}>
                      Error uploading {upload.file.name}: {upload.error}
                    </p>
                  );
                case "finished":
                  return (
                    <p key={upload.id}>Finished uploading {upload.file.name}</p>
                  );
              }
            })}
          </div>
        )}
      />
    );
  }
}

export default Uploader;
