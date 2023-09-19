import React$1, { createContext, useState, useContext, useEffect, Fragment } from 'react';
import moment from 'moment';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

var ChatContext = createContext({
  isChatOpen: false,
  setIsChatOpen: function setIsChatOpen() {}
});
var ChatProvider = function ChatProvider(_ref) {
  var children = _ref.children;
  var _useState = useState(false),
    isChatOpen = _useState[0],
    setIsChatOpen = _useState[1];
  var value = {
    isChatOpen: isChatOpen,
    setIsChatOpen: setIsChatOpen
  };
  return /*#__PURE__*/React$1.createElement(ChatContext.Provider, {
    value: value
  }, children);
};

var styles = {"root":"_39IQj","message":"_1mXIm","message_title":"_3sxfE","message_body":"_1iYf5","triangle_top_right":"_3Oyio","message_time":"_3--Dl"};

var defaultProps = {
  companyName: 'Support',
  message: "Hello! \uD83D\uDC4B\uD83C\uDFFC \n\nWhat can we do for you?"
};
var ChatBox = function ChatBox(_ref) {
  var _ref$companyName = _ref.companyName,
    companyName = _ref$companyName === void 0 ? defaultProps.companyName : _ref$companyName,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? defaultProps.message : _ref$message;
  var time = moment().startOf('hour').fromNow();
  return /*#__PURE__*/React.createElement("div", {
    className: styles.root
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.message
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.triangle_top_right
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.message_title
  }, companyName), /*#__PURE__*/React.createElement("p", {
    className: styles.message_body
  }, message), /*#__PURE__*/React.createElement("span", {
    className: styles.message_time
  }, time)));
};

var styles$1 = {"root":"_2uc4w","close_btn":"_lI8mw","logo":"_3jDIS","texts":"_3trGj","texts_h1":"_3XZUa","texts_span":"_Muogh"};

var defaultProps$1 = {
  companyName: 'Support',
  replyTimeText: 'Typically replies within a day'
};
var Header = function Header(_ref) {
  var CompanyIcon = _ref.CompanyIcon,
    _ref$companyName = _ref.companyName,
    companyName = _ref$companyName === void 0 ? defaultProps$1.companyName : _ref$companyName,
    _ref$replyTimeText = _ref.replyTimeText,
    replyTimeText = _ref$replyTimeText === void 0 ? defaultProps$1.replyTimeText : _ref$replyTimeText;
  var _useContext = useContext(ChatContext),
    setIsChatOpen = _useContext.setIsChatOpen;
  var handleOpen = function handleOpen() {
    setIsChatOpen(false);
  };
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$1.root
  }, /*#__PURE__*/React$1.createElement("span", {
    className: styles$1.close_btn,
    onClick: handleOpen
  }, /*#__PURE__*/React$1.createElement(AiOutlineClose, null)), /*#__PURE__*/React$1.createElement("div", {
    className: styles$1.logo
  }, CompanyIcon && /*#__PURE__*/React$1.createElement(CompanyIcon, null) || /*#__PURE__*/React$1.createElement(BiSupport, null)), /*#__PURE__*/React$1.createElement("div", {
    className: styles$1.texts
  }, /*#__PURE__*/React$1.createElement("span", {
    className: styles$1.texts_h1
  }, companyName), /*#__PURE__*/React$1.createElement("span", {
    className: styles$1.texts_span
  }, replyTimeText)));
};

var styles$2 = {"root":"_3XP0H","input":"_siqLL","button":"_3twZq"};

var defaultProps$2 = {
  sendButtonText: 'Send',
  inputPlaceHolder: 'Type a message'
};
var SendButton = function SendButton(_ref) {
  var phoneNumber = _ref.phoneNumber,
    _ref$inputPlaceHolder = _ref.inputPlaceHolder,
    inputPlaceHolder = _ref$inputPlaceHolder === void 0 ? defaultProps$2.inputPlaceHolder : _ref$inputPlaceHolder,
    _ref$sendButtonText = _ref.sendButtonText,
    sendButtonText = _ref$sendButtonText === void 0 ? defaultProps$2.sendButtonText : _ref$sendButtonText;
  var _useState = useState(''),
    message = _useState[0],
    setMessage = _useState[1];
  var handleClick = function handleClick() {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number');
      return false;
    }
    window.open("https://wa.me/" + phoneNumber + "?text=" + message);
    setMessage('');
  };
  var handleChange = function handleChange(e) {
    setMessage(e.target.value);
  };
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$2.root
  }, /*#__PURE__*/React$1.createElement("form", {
    onSubmit: handleClick
  }, /*#__PURE__*/React$1.createElement("input", {
    placeholder: inputPlaceHolder,
    className: styles$2.input,
    onChange: handleChange,
    value: message
  }), /*#__PURE__*/React$1.createElement("button", {
    type: "submit",
    className: styles$2.button,
    onClick: handleClick
  }, sendButtonText)));
};

var styles$3 = {"root":"_2qp0Z"};

var WaButton = function WaButton() {
  var _useContext = useContext(ChatContext),
    isChatOpen = _useContext.isChatOpen,
    setIsChatOpen = _useContext.setIsChatOpen;
  var handleOpen = function handleOpen() {
    setIsChatOpen(!isChatOpen);
  };
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.root,
    onClick: handleOpen
  }, /*#__PURE__*/React$1.createElement(FaWhatsapp, null));
};

var styles$4 = {"root":"_1yCVn","open":"_1qse9","customTransition":"_2-Apl","close":"_--3fm"};

var App = function App(props) {
  var _useContext = useContext(ChatContext),
    isChatOpen = _useContext.isChatOpen,
    setIsChatOpen = _useContext.setIsChatOpen;
  useEffect(function () {
    if (props.open) {
      setIsChatOpen(true);
    }
  }, []);
  return /*#__PURE__*/React$1.createElement(Fragment, null, /*#__PURE__*/React$1.createElement("div", {
    className: styles$4.root + " " + (isChatOpen ? styles$4.open : styles$4.close)
  }, /*#__PURE__*/React$1.createElement(Header, props), /*#__PURE__*/React$1.createElement(ChatBox, props), /*#__PURE__*/React$1.createElement(SendButton, props)), /*#__PURE__*/React$1.createElement(WaButton, null));
};

var WhatsAppWidget = function WhatsAppWidget(props) {
  return /*#__PURE__*/React$1.createElement(ChatProvider, null, /*#__PURE__*/React$1.createElement(App, props));
};

export { WhatsAppWidget };
//# sourceMappingURL=index.modern.js.map
