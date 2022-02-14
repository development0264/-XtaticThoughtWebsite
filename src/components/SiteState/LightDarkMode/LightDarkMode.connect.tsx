import { connect } from "react-redux";
import { setDarkMode } from "../state/actions";
import LightDarkMode from "./LightDarkMode";

const mapStateToProps = state => ({
  darkMode: state.siteState.darkMode
});

const mapDispatchToProps = {
  setDarkMode
};

export default connect(mapStateToProps, mapDispatchToProps)(LightDarkMode);
