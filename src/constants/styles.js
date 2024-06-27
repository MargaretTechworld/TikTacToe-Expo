import { StyleSheet } from "react-native";
import { colours } from "./colours";

export const styles = StyleSheet.create({
  boardContainer: {
    padding: 20,
    backgroundColor: colours.tangerine,
    borderRadius: 5,
    marginTop: 60,
    marginBottom: 60,
    borderWidth: 2,
    borderColor: colours.navyBlue,
  },
  messageContainer: {
    backgroundColor: colours.charcoal,
    marginTop: 13,
    marginBottom: 13,
    borderRadius: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: colours.navyBlue,
    maxHeight: 400, 
  },
  messageTextContainer: {
    maxHeight: 400, 
  },
  title: {
    backgroundColor: colours.forestGreen,
    padding: 18,
    borderRadius: 8,
    color: colours.white,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  itemStyles: {
    borderWidth: 1.5,
    borderColor: colours.navyBlue,
    backgroundColor: "#238000",
    padding: 5,
    flex: 1,
  },
  itemText: {
    fontSize: 54,
    fontWeight: 700,
    textAlign: "center",
    color: colours.lemon,
  },
  messageText: {
    color: colours.white,
    fontSize: 12.5,
  },
  gameButton: {
    backgroundColor: colours.navyBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
  },
  buttonLabel: {
    color: colours.white,
    fontSize: 20,
    fontWeight: "600",
  },
  screenContainer: {
    padding: 15,
    height: "100%",
  },
  innerContainer: {
    padding: 20,
    backgroundColor: colours.lightGrey,
    height: "100%",
  },
  buttonSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});