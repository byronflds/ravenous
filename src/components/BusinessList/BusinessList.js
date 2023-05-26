import React from "react";
import Business from "../Business/Business.js"
import styles from "./BusinessList.module.css";

function BusinessList(){
	return (
	<div className={styles.BusinessList}>
	<Business />
	<Business />
	<Business />
	<Business />
	<Business />
	<Business />
	</div>
);
}


export default BusinessList;