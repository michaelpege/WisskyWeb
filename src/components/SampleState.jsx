import React, {useState, useEffect, useRef} from "react";
import "./hooks.scss";

export const SampleState = () => {
	const [num, setNum] = useState(0);

	const changeNum = (val) => {
		setNum((prev) => prev + val);
	};

	useEffect(() => {
		console.log("PAGE LOADED!!");
	}, []);

	useEffect(() => {
		console.log("ELEMEN BERUBAH!");
	}, [num]);

	const uploadBtn = useRef(null);

	const triggerUpload = () => {
		uploadBtn.current.click();
	};

	return (
		<div>
			<h1>Current Number : {num}</h1>
			<div className='control'>
				<div onClick={() => changeNum(1)}>ADD</div>
				<div onClick={() => changeNum(-1)}>DECREASE</div>
			</div>

			<input className='hidden' type='file' ref={uploadBtn} />
			<div className='upload-btn' onClick={() => triggerUpload()}>
				Upload
			</div>
		</div>
	);
};
