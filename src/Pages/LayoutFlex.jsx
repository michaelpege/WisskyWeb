import React from "react";
import "./LayoutFlex.scss";

export const LayoutFlex = () => {
	return (
		<div className='container'>
			<div className='header'>Ini adalah header</div>
			<div className='content'>
				<div className='content-center'>Konten di sisi tengah</div>
				<div className='content-left'>Konten di sisi kiri</div>
				<div className='content-right'>Konten di sisi kanan</div>
			</div>
			<div className='footer'>Ini adalah footer</div>
		</div>
	);
};
