define("st/components/midi_button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = MidiButton;

  function MidiButton(props) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.preventDefault();
        props.pickMidi();
      },
      className: "midi_button"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "/static/svg/midi.svg",
      alt: "MIDI"
    }), /*#__PURE__*/React.createElement("span", {
      className: "current_input_name"
    }, props.midiInput ? props.midiInput.name : "Select device")));
  }
});

