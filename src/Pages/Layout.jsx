import React from "react";
import "./Layout.scss";

export const Layout = () => {
	return (
		<div className='container-grid'>
			<div className='header'>Ini adalah header</div>
			<div className='content-left'>Konten di sisi kiri</div>
			<div className='content-center'>Konten di sisi tengah</div>
			<div className='content-right'>Konten di sisi kanan</div>
			<div className='footer'>Ini adalah footer</div>
		</div>
	);
};
