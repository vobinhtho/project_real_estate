import React, { useEffect, useState } from 'react'
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';


const {
	Bold,
	Italic,
	Underline,
	AlignLeft,
	AlignRight,
	AlignCenter,
	Indent,
	Outdent,
	OrderedList,
	UnorderedList,
	Undo,
	Redo,
	Link,
	Unlink,
	FindAndReplace, 
	Pdf, 
	Print
  } = EditorTools;

  const CustomPdf = props => (
	<Pdf
	  {...props}
	  savePdfOptions={{
		fileName: "Contract",
		paperSize: "A4",
		margin: "2cm",
	  }}
	/>
  );

  const useStyles = makeStyles({
	content:{
		marginTop:50,
		marginRight:600,
		marginLeft:250,
		marginBottom:50
	}
  });
  

const ContractForm =()=>{
	const classes = useStyles();

	const { id } = useParams();

	const contracts = useSelector((state) => (id ? state.contracts.find((nv) => nv._id === id) : null));

	const [contractData, setContractData] = useState({
		type_of_contract: '', 
		name_of_real_estate: '', 
		value: 0,
		percent: 0,
		commision:'', 
		employeeid:'619e6d80b383dcd0b33a6b0f',
		realestateid:id,
		CIDA:'',
		addressA:'',
		phone_numberA:'',
		representA:'',
		addressB:'',
		phone_numberB:'',
		representB:'',
		CIDB:'',
	   // date:ngay,
		status:'true',
	});
	useEffect(() => {
		if (contracts) setContractData(contracts);
	  });
	
	const content = `
	<p style="margin-top:8px; margin-bottom:8px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">C&Ocirc;NG TY BẤT ĐỘNG SẢN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CỘNG H&Ograve;A X&Atilde; HỘI CHỦ NGHĨA VIỆT NAM</span></b></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; margin-left:302px; text-indent:-8.0cm"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">&nbsp;&nbsp;&nbsp; THE DREAM HOUSE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Độc lập - Tự do - Hạnh ph&uacute;c</span></b></span></span></p>

<p style="margin-top:8px; margin-bottom:8px">&nbsp;</p>

<p style="margin-bottom:8px"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Số: 1 /HDQC<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b><i>Cần Thơ, ng&agrave;y&nbsp;&nbsp; th&aacute;ng&nbsp;&nbsp; năm&nbsp;&nbsp;&nbsp; </i></span></span></span></span></p>

<p align="center" style="margin-top:8px; margin-bottom:8px; text-align:center">&nbsp;</p>

<p align="center" style="margin-top:8px; margin-bottom:8px; text-align:center"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">HỢP ĐỒNG MUA B&Aacute;N BẤT ĐỘNG SẢN</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><i><span style="color:black">- Căn cứ Bộ luật d&acirc;n sự Nước Cộng h&ograve;a x&atilde; hội chủ nghĩa Việt Nam 2015.</span></i></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><i><span style="color:black">- Căn cứ Luật kinh doanh bất động sản 2014.</span></i></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><i><span style="color:black">- Căn cứ luật đất đai số 45/2013/QH13.</span></i></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><i><span style="color:black">- Căn cứ luật số 36/2005/SH11 ng&agrave;y 14 th&aacute;ng 6 năm 2005 về thương mại.</span></i></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><i><span style="color:black">- Căn cứ v&agrave;o đơn đăng k&yacute; quảng c&aacute;o BĐS của &Ocirc;ng/B&agrave;: V&otilde; B&igrave;nh Thơ</span></i></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">H&ocirc;m nay, ng&agrave;y 9/12/2021, tại Đường 3/2, phường Xu&acirc;n Kh&aacute;nh, Quận Ninh Kiều, Th&agrave;nh Phố Cần Thơ ch&uacute;ng t&ocirc;i gồm:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">ĐƠN VỊ NHẬN DỊCH VỤ (B&Ecirc;N A)</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">C&Ocirc;NG TY BẤT ĐỘNG SẢN THE DREAM HOUSE</span></b></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Địa chỉ:</span> <span style="color:black">X&atilde; Ph&uacute; T&acirc;n, Huyện Ch&acirc;u Th&agrave;nh, Tỉnh Hậu Giang</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Điện thoại: 09874561022&nbsp; </span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Đại diện: V&otilde; B&igrave;nh Thơ</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">CMND: 0364145263</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">B&Ecirc;N THU&Ecirc; (B&Ecirc;N B)</span></b></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Địa chỉ:</span> <span style="color:black">Hẻm 76, 3/2, Xu&acirc;n Kh&aacute;nh, Ninh Kiều, Cần Thơ</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Điện thoại: 012401258993</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Đại diện: V&otilde; B&igrave;nh Thơ</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="tab-stops:dotted 432.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">CMND: 03674125896</span></span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Hai b&ecirc;n đồng &yacute; k&yacute; kết hợp đồng mua b&aacute;n bất động sản với c&aacute;c điều khoản sau:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 1: Nội dung thỏa thuận</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">B&ecirc;n A bằng văn bản n&agrave;y c&ugrave;ng với những cam kết sau đ&acirc;y b&aacute;n cho b&ecirc;n B Bất động sản c&oacute; địa chỉ như tr&ecirc;n v&agrave; đồng &yacute; nhượng quyền sử dụng đất c&oacute; nh&agrave; ở nằm trong khu&ocirc;n vi&ecirc;n được x&aacute;c định bởi c&aacute;c giấy tờ đ&atilde; n&ecirc;u tr&ecirc;n.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Đặc điểm của Bất động sản:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Vị tr&iacute;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Diện t&iacute;ch: ..........m2 đất .................m2 x&acirc;y dựng &hellip;&hellip;tầng</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">&nbsp;(Mặt tiền: &hellip;&hellip;...m, chiều d&agrave;i: &hellip;&hellip;m, s&acirc;n vườn: &hellip;&hellip;m2)</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Đặc điểm đường giao th&ocirc;ng:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Hướng nh&agrave;:&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Loại nh&agrave;/đất: &nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Nội thất:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">&nbsp; Số ph&ograve;ng ngủ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ph&ograve;ng kh&aacute;ch:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ph&ograve;ng ăn:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">&nbsp; Số ph&ograve;ng WC:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gara &ocirc; t&ocirc;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ph&ograve;ng bếp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Kết cấu:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Vật liệu ho&agrave;n thiện:&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">-&nbsp; Tiện nghi: </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Điện:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nước:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Điều h&ograve;a:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Điện thoại:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Internet:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kh&aacute;c:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- T&igrave;nh trạng ph&aacute;p l&yacute;:&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Hiện trạng: Đang ở </span><span style="font-family:Wingdings"><span style="color:black">o</span></span><span style="color:black">&nbsp;&nbsp; Cho thu&ecirc; </span><span style="font-family:Wingdings"><span style="color:black">o</span></span><span style="color:black">&nbsp;&nbsp; Kh&aacute;c:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 2: Tr&aacute;ch nhiệm của c&aacute;c b&ecirc;n</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">C&aacute;c th&agrave;nh vi&ecirc;n b&ecirc;n B li&ecirc;n đới c&ugrave;ng chịu tr&aacute;ch nhiệm về quyền lợi v&agrave; nghĩa vụ của m&igrave;nh khi được mua. B&ecirc;n B chấp nhận mọi quy định về địa dịch th&ocirc;ng h&agrave;nh đ&atilde; c&oacute; v&agrave; sẽ c&oacute;, c&aacute;c quy định về lộ giới, quy hoạch x&acirc;y dựng, chỉnh trạng đ&ocirc; thị, quy hoạch sử dụng đất v&igrave; lợi &iacute;ch quốc gia c&ugrave;ng to&agrave;n bộ những rủi ro hoặc thiệt hại sẽ xảy ra, trừ những điều ph&aacute;p luật cấm mua b&aacute;n chuyển dịch m&agrave; b&ecirc;n A cố t&igrave;nh giấu diếm b&ecirc;n B.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">B&ecirc;n B sẽ đ&oacute;ng đủ mọi thứ thuế theo quy định đối với Bất động sản đ&atilde; mua b&aacute;n chuyển nhượng bởi hợp đồng n&agrave;y kể từ ng&agrave;y thực sự l&agrave;m chủ sở hữu theo quy định kh&aacute;c nếu c&oacute;.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 3: Phương thức thanh to&aacute;n, thời gian v&agrave; địa điểm thanh to&aacute;n tiền mua b&aacute;n bất động sản, thời gian giao nhận bất động sản</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Phương thức thanh to&aacute;n, thời gian v&agrave; địa điểm giao nhận tiền:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Đợt 1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Đợt 2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">B&ecirc;n A đ&atilde; nhận đủ số tiền ................................................................................ do b&ecirc;n B giao.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Thời gian v&agrave; điều kiện giao nhận Bất động sản:</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Thời gian giao bất động sản:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Điều kiện giao bất động sản:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">B&ecirc;n A phải c&oacute; tr&aacute;ch nhiệm di chuyển người v&agrave; đồ vật ra khỏi nh&agrave; trước khi giao</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">nh&agrave; cho b&ecirc;n B, b&ecirc;n A phải giao đầy đủ nh&agrave; c&ugrave;ng với c&aacute;c tiện nghi như đồng hồ điện nước, c&aacute;c c&ocirc;ng tr&igrave;nh phụ sẵn c&oacute;.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">B&ecirc;n A đảm bảo cho b&ecirc;n B về mặt ph&aacute;p l&yacute; v&agrave; tr&ecirc;n thực tế được hưởng quyền sở hữu thực sự.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 4: Quyền v&agrave; nghĩa vụ của B&ecirc;n A</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">B&ecirc;n A giao nh&agrave; đ&uacute;ng t&igrave;nh trạng hiện hữu v&agrave; đ&uacute;ng thời hạn đ&atilde; quy định trong hợp đồng, đồng thời giao đủ to&agrave;n bộ hồ sơ c&oacute; li&ecirc;n quan đến Bất động sản n&oacute;i tr&ecirc;n cho b&ecirc;n B, c&ugrave;ng với c&aacute;c điều kiện đ&atilde; n&ecirc;u ở Điều 3.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Nhận tiền của b&ecirc;n B theo phương thức đ&atilde; thỏa thuận trong hợp đồng n&agrave;y.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Phải bảo quản Bất động sản đ&atilde; chuyển nhượng trong thời gian chưa giao giao cho b&ecirc;n B, kh&ocirc;ng được thế chấp, cho thu&ecirc; hoặc hứa b&aacute;n cho người kh&aacute;c.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">C&oacute; nghĩa vụ đ&oacute;ng g&oacute;p c&aacute;c loại thuế theo quy định để tạo điều kiện thuận lợi cho b&ecirc;n B tiến h&agrave;nh đăng k&yacute; trước bạ sang b&ecirc;n cơ quan c&oacute; thẩm quyền.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 5: Quyền v&agrave; nghĩa vụ của B&ecirc;n B</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Được nhận bất động sản theo t&igrave;nh trạng đ&atilde; quy định trong hợp đồng v&agrave; được nhận to&agrave;n bộ hồ sơ về Bất động sản.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Trả đủ tiền chuyển nhượng cho b&ecirc;n A theo thỏa thuận đ&atilde; ghi trong hợp đồng.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Đ&oacute;ng thuế trước bạ đầy đủ v&agrave; đăng bộ theo quy định.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 6: Cam kết của c&aacute;c b&ecirc;n</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Cam kết của b&ecirc;n A</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- B&ecirc;n A cam kết về t&igrave;nh trạng sở hữu của bất động sản: Bất động sản n&ecirc;u trong hợp đồng n&agrave;y l&agrave; thuộc quyền sở hữu hợp ph&aacute;p của b&ecirc;n A, kh&ocirc;ng phải do b&ecirc;n A đứng t&ecirc;n thay người kh&aacute;c.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Bất động sản b&ecirc;n A chuyển nhượng kh&ocirc;ng thuộc diện xử l&yacute; theo c&aacute;c ch&iacute;nh s&aacute;ch cải tạo của Nh&agrave; nước.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Nh&agrave; v&agrave; đất trong khu&ocirc;n vi&ecirc;n kh&ocirc;ng bị tranh chấp về quyền sở hữu v&agrave; quyền sử dụng.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Bất động sản kh&ocirc;ng bị xử l&yacute; bằng c&aacute;c quyết định của cơ quan Nh&agrave; nước c&oacute; thẩm quyền m&agrave; chủ sở hữu chưa chấp h&agrave;nh.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Bất động sản kh&ocirc;ng bị buộc phải bỏ dở theo quyết định của cơ quan c&oacute; thẩm quyền.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Trong trường hợp b&ecirc;n A đem b&aacute;n bất động sản m&agrave; đang bị vướng một trong những điều đ&atilde; cam kết tr&ecirc;n đ&acirc;y do đ&oacute; đ&atilde; g&acirc;y thiệt hại cho b&ecirc;n B, b&ecirc;n A cam kết sẽ ho&agrave;n trả đủ ngay lập tức tiền b&aacute;n cho b&ecirc;n B v&agrave; sẽ bồi thường cho b&ecirc;n B theo thỏa thuận của hai b&ecirc;n. Trong trường hợp hai b&ecirc;n kh&ocirc;ng thỏa thuận được th&igrave; b&ecirc;n B c&oacute; quyền khởi kiện ra T&ograve;a &aacute;n v&agrave; b&ecirc;n A phải bồi thường cho b&ecirc;n B theo ph&aacute;n quyết của T&ograve;a &aacute;n.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">Cam kết của b&ecirc;n B</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Đ&atilde; xem x&eacute;t r&otilde; t&igrave;nh trạng hiện hữu của Bất động sản bao gồm cả giấy tờ chủ quyền bất động sản v&agrave; bằng l&ograve;ng nhận, đồng thời cam kết kh&ocirc;ng khiếu nại g&igrave;.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- T&ocirc;n trọng mọi địa dịch th&ocirc;ng h&agrave;nh cũ v&agrave; mới theo quy định của ph&aacute;p luật(nếu c&oacute;).</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><b><span style="color:black">Điều 7: Điều khoản chung</span></b></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Hai b&ecirc;n cam kết thực hiện đầy đủ c&aacute;c điều khoản đ&atilde; ghi trong hợp đồng, trường hợp ph&aacute;t sinh tranh chấp, hai b&ecirc;n c&ugrave;ng nhau thương lượng giải quyết, nếu hai b&ecirc;n kh&ocirc;ng tự giải quyết được th&igrave; được quyền đưa đến cơ quan T&ograve;a &aacute;n để y&ecirc;u cầu giải quyết theo quy định của ph&aacute;p luật.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Mọi sửa đổi, bổ sung hợp đồng n&agrave;y chỉ c&oacute; gi&aacute; trị khi được lập bằng văn bản v&agrave; do hai b&ecirc;n k&yacute; t&ecirc;n.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px; text-align:justify"><span style="font-size:12pt"><span style="line-height:130%"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">- Hợp đồng được lập th&agrave;nh 02 bản, mỗi b&ecirc;n giữ một bản c&oacute; gi&aacute; trị ph&aacute;p l&yacute; như nhau.</span></span></span></span></p>

<p style="margin-top:8px; margin-bottom:8px">&nbsp;</p>

<p style="margin-top:8px; margin-bottom:8px; text-indent:36.0pt"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>B&Ecirc;N A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B&Ecirc;N B</b></span></span></span></p>

<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><i><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (K&yacute; v&agrave; ghi r&otilde; họ t&ecirc;n)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (K&yacute; v&agrave; ghi r&otilde; họ t&ecirc;n)</span></i></span></span></p>

<p>&nbsp;</p>

	
	
	`;


	return(
		<div className={classes.content}>
		<Editor
        tools={[
          [Bold, Italic, Underline],
          [Undo, Redo],
          [Link, Unlink],
          [AlignLeft, AlignCenter, AlignRight],
          [OrderedList, UnorderedList, Indent, Outdent],
		  [FindAndReplace, CustomPdf, Print]
        ]}
        contentStyle={{ height: 800 }}
        defaultContent={content}

      	/>

		</div>
	)
}
export default ContractForm;