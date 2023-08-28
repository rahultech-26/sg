import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import {useNavigate } from "react-router-dom";
import AddProduce1 from "./AddProduce1";
import AddMark1 from "./AddMark1";
import AddGodown1 from "./AddGodown1";
import AddTulai1 from "./AddTulai1";
import AddFarm1 from "./AddFarm1";
function AddMandiPurchase() {
  const localData = localStorage.getItem("editMandiPurchaseData")
  const parseData = localData?JSON.parse(localData):[]
  let one = React.createRef();
  let two = React.createRef();
  let three = React.createRef();
  let four = React.createRef();
  let five = React.createRef();
  let six = React.createRef();
  let seven = React.createRef();
  let eight = React.createRef();
  let nine = React.createRef();
  let ten = React.createRef();
  let eleven = React.createRef();
  let twelve = React.createRef();
  let thirteen = React.createRef();
  let fourteen = React.createRef();
  let fifteen = React.createRef();
  let sixteen = React.createRef();
  let seventeen = React.createRef();
  let eightteen = React.createRef();
  let nineteen = React.createRef();
  let twenty = React.createRef();
  let twentyone = React.createRef();
  let twentytwo = React.createRef();
  let twentythree = React.createRef();
  let twentyfour = React.createRef();
  let twentyfive = React.createRef();
  let twentysix = React.createRef();
  let twentyseven = React.createRef();
  let twentyeight = React.createRef();
  function handleKeyUp(e) {
    e.which = e.which || e.keyCode;

    if (e.which == 13) {
      switch (e.target.id) {
        case "input-one":{if(postData.farmNo||postData.farmNo!==""){
          two.current.focus();}}
          break;
        case "input-two":
          three.current.focus();
          break;
        case "input-three":
          four.current.focus();
          break;
        case "input-four":
          five.current.focus();
          break;
        case "input-five":
          six.current.focus();
          break;
        case "input-six":
          {
            if (postData.anubandhNo && postData.anubandhNo !== "") {
              seven.current.focus();
            }
          }
          break;
        case "input-seven":
          eight.current.focus();
          break;
        case "input-eight":
          nine.current.focus();
          break;
        case "input-nine":
          ten.current.focus();
          break;
        case "input-ten":{if(postData.sellerName||postData.sellerName!==""){
          eleven.current.focus();}}
          break;
        case "input-eleven":
          twelve.current.focus();
          break;
        case "input-twelve":
          thirteen.current.focus();
          break;
        case "input-thirteen":
          fourteen.current.focus();
          break;
        case "input-fourteen":
          fifteen.current.focus();
          break;
        case "input-fifteen":{if(actualWeight!==""){
          sixteen.current.focus();}}
          break;
        case "input-sixteen":{if(ratePerQuantal!==""){
          seventeen.current.focus();}}
          break;
        case "input-seventeen":
          eightteen.current.focus();
          break;
        case "input-eightteen":
          nineteen.current.focus();
          break;
        case "input-nineteen":
          {
            if (
              (postData.cashPayment - totalPayment() === 0) &
              (postData.cashPayment < 200001)
            ) {
              twentyseven.current.focus();
            } else if (postData.cashPayment - totalPayment() === 0) {
              twentysix.current.focus();
            } else {
              twenty.current.focus();
            }
          }
          break;
        case "input-twenty":
          twentyone.current.focus();
          break;
        case "input-twentyone":
          twentytwo.current.focus();
          break;
        case "input-twentytwo":
          twentythree.current.focus();
          break;
        case "input-twentythree":
          twentyfour.current.focus();
          break;
        case "input-twentyfour":
          twentyfive.current.focus();
          break;
        case "input-twentyfive":
          {
            if (postData.cashPayment < 200001) {
              twentyseven.current.focus();
            } else {
              twentysix.current.focus();
            }
          }
          break;
        case "input-twentysix":
          twentyseven.current.focus();
          break;
        case "input-twentyseven":
          one.current.focus();
          break;

        default:
          break;
      }
    }
  }

  const [listIndex, setListIndex] = useState("");
  useEffect(() => {

    getFarmData();
    getProduceData();
    getGodownData();
    getMarkData();
    getProduceTypeData();
    getBankData();
    getTulaiData();
    getBookletNumber();
  }, []);
  const date = new Date();
  const dd = date.getDate();
  const ndd = dd < 10 ? `0${dd}` : dd;
  const mm = date.getMonth() + 1;
  const nmm = mm < 10 ? `0${mm}` : mm;
  const yy = date.getFullYear();
  const finalDate = `${yy}-${nmm}-${ndd}`;
  const localDate = localStorage.getItem("localpdate");
  const localDate1 = localDate ? localDate : finalDate;
  const [localDate2, setLocalDate2] = useState(localDate1);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [village, setVillage] = useState("");
  const [postData, setPostData] = useState(parseData);
  const ddmmyy = (x) => {
    const date = x?.split("-").reverse().join("/");
    return date;
  };
  const totalPayment = () => {
    const payment = postData.itemList
      .map((j) => j.totalAmount)
      .reduce((a, b) => a + b, 0);
    return payment;
  };


  const firmLocal = localStorage.getItem("mandiPurchseFirmlocal")
  const parseFirmLocalData=firmLocal? JSON.parse(firmLocal):[]

  const produceLocal =localStorage.getItem("mandiPurchseProducelocal")
  const parseProduceLocalData =produceLocal? JSON.parse(produceLocal):[]

  const godownLocal =localStorage.getItem("mandiPurchseGodownlocal")
  const parseGodownLocalData =godownLocal? JSON.parse(godownLocal):[]

  const markLocal =localStorage.getItem("mandiPurchseMarklocal")
  const parseMarkLocalData =markLocal?JSON.parse(markLocal):[]

  const produceTypeLocal =localStorage.getItem("mandiPurchseProduceTypelocal")
  const parseProduceTypeLocalData =produceTypeLocal?JSON.parse(produceTypeLocal):[]

  const bankLocal =localStorage.getItem("mandiPurchseBanklocal")
  const parseBankLocalData =bankLocal?JSON.parse(bankLocal):[]

  const tulaiLocal =localStorage.getItem("mandiPurchseTulailocal")
  const parseTulaiLocalData =tulaiLocal? JSON.parse(tulaiLocal):[]


  const [validator, setValidator] = useState(false);
  const [validator1, setValidator1] = useState(false);
  const [isSubmit, setIsSubmit] = useState(true);
  const [farmList, setFarmList] = useState(parseFirmLocalData);
  const [produceList, setProduceList] = useState(parseProduceLocalData);
  const [godownList, setGodownList] = useState(parseGodownLocalData);
  const [markList, setMarkList] = useState(parseMarkLocalData);
  const [produceTypeList, setProduceTypeList] = useState(parseProduceTypeLocalData);
  const [bankList, setBankList] = useState(parseBankLocalData);
  const [tulaiList, setTulaiList] = useState(parseTulaiLocalData);



  const getFarmData = () => {
    axios.get(baseUrl + "farm").then((res) => {
      setFarmList(res.data.data)
    localStorage.setItem("mandiPurchseFirmlocal",JSON.stringify(res.data.data))
    }
      );
  };
  const getProduceData = () => {
    axios.get(baseUrl + "yield").then((res) => {setProduceList(res.data.data)
      localStorage.setItem("mandiPurchseProducelocal",JSON.stringify(res.data.data))
    });
  };
  const getGodownData = () => {
    axios.get(baseUrl + "godown").then((res) => {setGodownList(res.data.data)
      localStorage.setItem("mandiPurchseGodownlocal",JSON.stringify(res.data.data))
    });
  };
  const getMarkData = () => {
    axios.get(baseUrl + "mark").then((res) => {setMarkList(res.data.data)
      localStorage.setItem("mandiPurchseMarklocal",JSON.stringify(res.data.data))
    });
  };
  const getProduceTypeData = () => {
    axios
      .get(baseUrl + "producetype")
      .then((res) => {setProduceTypeList(res.data.data)
        localStorage.setItem("mandiPurchseProduceTypelocal",JSON.stringify(res.data.data))
      });
  };
  const getBankData = () => {
    axios.get(baseUrl + "bank").then((res) => {setBankList(res.data.data)
      localStorage.setItem("mandiPurchseBanklocal",JSON.stringify(res.data.data))
    });
  };
  const getTulaiData = () => {
    axios.get(baseUrl + "tulai").then((res) => {setTulaiList(res.data.data)
      localStorage.setItem("mandiPurchseTulailocal",JSON.stringify(res.data.data))
    });
  };

  const addItemtoList = () => {
    if (
      (produceName !== "") &
      (produceType !== "") &
      (mark !== "") &
      (godown !== "") &
      (admitWeight !== "") &
      (ratePerQuantal !== "") &
      (tulaiId !== "")
    ) {
      const item = {
        yieldName: produceName,
        produceType: produceType,
        mark: mark,
        godown: godown,
        bagCount: totalBagCount(),
        admitWeight: admitWeight,
        kattaWeight: kattaWeight,
        actualWeight: actualWeight,
        ratePerQuantal: ratePerQuantal,
        totalBag: totalBagRound(),
        tulaiId: tulaiId,
        tulaiRate: tulaiRate,
        totalTulai: totalTulaiRate(),
        labourRate: labourRate,
        totalLabour: totalLabourRate(),
        totalAmount: totalPrice(),
      };

      if (listIndex === "") {
        const list = [...postData.itemList, item];
        const total = list
          .map((i) => i.totalAmount)
          .reduce((a, b) => +a + +b, 0);
        setPostData({
          ...postData,
          itemList: [...postData.itemList, item],
          cashPayment: total,
          remaining: "",
        });
      } else {
        const list = postData.itemList.map((i, n) =>
          n == listIndex ? item : i
        );
        const total = list
          .map((i) => i.totalAmount)
          .reduce((a, b) => +a + +b, 0);
        setPostData({
          ...postData,
          itemList: postData.itemList.map((i, n) =>
            n == listIndex ? item : i
          ),
          cashPayment: total,
          remaining: "",
        });
        setListIndex("");
      }
      setActualWeight("");
      setproduceId("");
      setproduceName("");
      setratePerQuantal("");
      settulaiId("");
      setproduceType("");
      setmark("");
      setgodown("");
      settulaiRate("");
      setlabourRate("");
      setValidator1(false);
    } else {
      setValidator1(true);
    }
  };

  const [produceId, setproduceId] = useState("");
  const [produceName, setproduceName] = useState("");
  const [produceType, setproduceType] = useState("");
  const [mark, setmark] = useState("");
  const [godown, setgodown] = useState("");
  const [kattaWeight, setkattaWeight] = useState("");
  const [actualWeight, setActualWeight] = useState("");
  const [ratePerQuantal, setratePerQuantal] = useState("");
  const [tulaiId, settulaiId] = useState("");
  const [tulaiRate, settulaiRate] = useState("");
  const [labourRate, setlabourRate] = useState("");
  const [admitWeight, setAdmitWeight] = useState(90);
  const totalBagCount = () => {
    const total = (actualWeight * 100) / admitWeight;
    return isNaN(total) ? 0 : Math.floor(total);
  };
  const totalBagRound = () => {
    const total = (actualWeight * 100) / admitWeight;
    return isNaN(total) ? 0 : Math.ceil(total);
  };
  const totalTulaiRate = () => {
    const total = tulaiRate * totalBagRound();
    return isNaN(total) ? 0 : Math.round(total);
  };
  const totalLabourRate = () => {
    const total = labourRate * totalBagRound();
    return isNaN(total) ? 0 : Math.round(total);
  };
  const totalPrice = () => {
    const total =
      actualWeight * ratePerQuantal - totalLabourRate() - totalTulaiRate();
    return isNaN(total) ? 0 : Math.ceil(total);
  };

  const postAllData = () => {
    if (postBookData.pageNo === 101) {
      axios
        .put(baseUrl + "mandipurchase/"+postData._id, {
          ...postData,
          sellerNameHindi: text,
          bookletNo: postBook.bookletNo,
          pageNo: 1,
        })
        .then(() => navigate("/mandipurchase"));
    } else {
      if(postData.farmNo!==""&postData.anubandhNo!==""&postData.mobileNo!==""&postData.itemList!==[]&postData.village!==""&postData.sellerName!==""){
  
      setIsPrinting(true);
      setTimeout(() => {
        window.print();
      }, 100);
      setTimeout(() => {
       setIsPrinting(false)
      }, 100);
      axios
        .put(baseUrl + "mandipurchase/"+postData._id, {
          ...postData,
          sellerNameHindi: text,
          bookletNo: postBookData.bookletNo,
          pageNo: postBookData.pageNo,
        })
        .then(() => navigate("/mandipurchase"));}
        else{setValidator(true);alert("field is required")}
    }
  };

  const [isHindi, setIsHindi] = useState(false);
  const getHindi = () => {
    axios
      .get(`https://www.google.com/inputtools/request?ime=transliteration_en_hi&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${postData.sellerName}`)
      .then((res) => setText(res.data[1][0][1][0]));
  };
  const getHindi1 = (x) => {
    
    axios
      .get(`https://www.google.com/inputtools/request?ime=transliteration_en_hi&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${x}`)
      .then((res) => setPostData({...postData,village:res.data[1][0][1][0]}));
  };

  useEffect(() => {
    if (postData.sellerName !== "") {
      const timeout = setTimeout(() => {
        getHindi();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [postData.sellerName]);
  useEffect(() => {
    if (postData.village !== "") {
      const timeout = setTimeout(() => {
        getHindi1(postData.village);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [postData.village]);

  

  const [postBookData, setPostBookData] = useState({});
  const getBookletNumber = () => {
    axios
      .get(baseUrl + "bookletno")
      .then((res) => setPostBookData(res.data.data[0]));
  };
  const [postBook, setPostBook] = useState({ pageNo: 1 });
  const updateBookletNumber = () => {
    axios.put(baseUrl + "bookletno/64b10a3ae58d8e917ef0b55e", {
      ...postBook,
      pageNo: 2,
    });
  };
  const updateBookletPage = () => {
    axios
      .put(baseUrl + "bookletno/64b10a3ae58d8e917ef0b55e", {
        pageNo: +postBookData.pageNo + 1,
      })
      .then(() => getBookletNumber());
  };
  const [isPrinting, setIsPrinting] = useState(false);
  const [isAppProduce, setIsAppProduce] = useState(false);
  const [isAppGodown, setIsAppGodown] = useState(false);
  const [isAppMark, setIsAppMark] = useState(false);
  const [isAppTulai, setIsAppTulai] = useState(false);
  const [isAppFarm, setIsAppFarm] = useState(false);
  const propProduceFn = () => {
    getProduceData();
  };
  const propGodownFn = () => {
    getGodownData();
  };
  const propMarkFn = () => {
    getMarkData();
  };
  const propTulaiFn = () => {
    getTulaiData();
  };
  const propFarmFn = () => {
    getFarmData();
  };
  return (
    <>
      {isAppProduce && (
        <div
          className="table-responsive scrollhide"
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddProduce1
            setIsAppProduce={setIsAppProduce}
            propProduceFn={propProduceFn}
            produceList={produceList}
          />
        </div>
      )}
      {isAppGodown && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddGodown1
            setIsAppGodown={setIsAppGodown}
            propGodownFn={propGodownFn}
            godownList={godownList}
          />
        </div>
      )}
      {isAppMark && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddMark1
            setIsAppMark={setIsAppMark}
            propMarkFn={propMarkFn}
            markList={markList}
          />
        </div>
      )}
      {isAppTulai && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddTulai1
            setIsAppTulai={setIsAppTulai}
            propTulaiFn={propTulaiFn}
            tulaiList={tulaiList}
          />
        </div>
      )}
      {isAppFarm && (
        <div
          className="table-responsive scrollhide"
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddFarm1
            setIsAppFarm={setIsAppFarm}
            propFarmFn={propFarmFn}
            farmList={farmList}
          />
        </div>
      )}
      <div>
        {isPrinting ? ( 
          <div
            style={{
              height: 500,
              width: "80%",
              marginLeft: "10%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 80,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: 80,
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label style={{ fontSize: 10,color:"black" }}>
                  प्रारूप-चार (उपविधि 17(4) के अंतर्गत)
                </label>
                <h5 style={{ fontSize: 13 ,color:"black" }}>
                  कार्यालय कृषि उपज मण्डी समिति, रतलाम जिला रतलाम (म.प्र.)
                </h5>
                <label style={{ fontSize: 10,color:"black"  }}>भुगतान पत्रक</label>
              </div>
            </div>

            <div style={{ height: 30, width: "100%", display: "flex" }}>
              <div
                style={{
                  height: 30,
                  width: "70%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <h5 style={{ fontSize: 10,color:"black"}}>
                  पुस्तिका क्रमांक: <label>{postBookData.bookletNo}</label>
                </h5>
                <h5 style={{ fontSize: 10,color:"black"}}>
                  अनु. क्र. : {postBookData.pageNo}
                </h5>
                <h5 style={{ fontSize: 10,color:"black"}}>
                  दिनांक : {ddmmyy(postData.date)}{" "}
                </h5>
              </div>
            </div>

            <div style={{ height: 20, width: "100%", display: "flex" }}>
              <div
                style={{
                  height: 20,
                  width: "70%", 
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: 12,color:"black"  }}>
                  क्रेता का नाम एवं लाइसेंस नंबर{" "}
                </label>
                :
                <label style={{ fontSize: 12,color:"black",color:"black"   }}>
                  {postData.farmNameHindi} - {postData.licenceNo}
                </label>
              </div>
            </div>

            <div style={{ height: 20, width: "100%", display: "flex" }}>
              <div
                style={{
                  height: 20,
                  width: "70%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: 12,color:"black"  }}>
                  विक्रेता / कृषक का अनुबंध पत्रक क्रमांक / सौदा पत्रक क्रमांक :
                </label>
                <label style={{ fontSize: 12 ,color:"black" }}>{postData.anubandhNo}</label>
                <label style={{ marginLeft: 30, fontSize: 12,color:"black"  }}>
                  तोल पर्ची क्र..
                </label>
              </div>
            </div>

            <div style={{ height: 20, width: "100%", display: "flex" }}>
              <div
                style={{
                  height: 20,
                  width: "70%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: 12,color:"black"  }}>
                  विक्रेता / कृषक का नाम :
                </label>
                <label style={{ fontSize: 12,color:"black"  }}>
                  {text}, पता-{postData.village} Mob- {postData.mobileNo}
                </label>
              </div>
            </div>

            <div style={{ height: 145, width: "100%", display: "flex" }}>
              <div
                style={{
                  width: "100%",
                  height: 145,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 70,
                    backgroundColor: "white",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      height: 70,
                      width: "14%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black"  }}>
                      कृषि उपज की नाम किस्म / वैरायटी
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "10%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      अनुबंध / सौदा पत्रक के आधार पर वजन एवं पात्रों की
                      संख्या
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "7%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      तौल पर्ची के आधार वास्तविक वजन
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "10%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      कृषि उपज की दर प्रति क्विंटल
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "8%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>कृषि उपज की मूल्य</label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "10%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      विलंबन से भुगतान की दशा में अतिरिक्त भुगतान
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "8%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>कुल मूल्य</label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "9%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      उपविधि के अनुसार तुलाई हम्माली की दर
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "7%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      कुल तैलाई जो मूल्य में से काटी जाएगी
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "7%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      कल हम्माली जो मूल्य में से काटी जाएगी
                    </label>
                  </div>
                  <div
                    style={{
                      height: 70,
                      width: "10%",
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: 12,color:"black" }}>
                      विक्रेता को भुगतान की गयी राशि
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 25,
                    backgroundColor: "white",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      height: 25,
                      width: "14%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "10%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "7%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "10%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "8%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "10%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "8%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "9%",
                      border: "1px solid black",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        height: 25,
                        width: "50%",
                        textAlign: "center",
                        fontSize: 10,color:"black"
                      }}
                    >
                      हम्माली
                    </div>
                    <div
                      style={{
                        height: 25,
                        width: "50%",
                        borderLeft: "2px solid black",
                        textAlign: "center",
                        fontSize: 10,color:"black"
                      }}
                    >
                      तैलाई
                    </div>
                  </div>
                  <div
                    style={{
                      height: 25,
                      width: "7%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "7%",
                      border: "1px solid black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 25,
                      width: "10%",
                      border: "1px solid black",
                    }}
                  ></div>
                </div>
                {postData?.itemList?.map((i) => (
                  <div
                    style={{
                      width: "100%",
                      height: 30,
                      backgroundColor: "white",
                      display: "flex",color:"black"
                    }}
                  >
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "14%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.yieldName}/{i.produceType}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "10%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.totalBag}/{i.admitWeight}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "7%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.actualWeight}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "10%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.ratePerQuantal}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "8%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i?.actualWeight * i?.ratePerQuantal}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "10%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "8%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i?.actualWeight * i?.ratePerQuantal}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "9%",
                        border: "1px solid black",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          height: 30,
                          fontSize: 10,
                          width: "50%",
                          textAlign: "center",
                        }}
                      >
                        {i.labourRate}
                      </div>
                      <div
                        style={{
                          height: 30,
                          fontSize: 10,
                          width: "50%",
                          borderLeft: "2px solid black",
                          textAlign: "center",
                        }}
                      >
                        {i?.tulaiRate}
                      </div>
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "7%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.totalTulai}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "7%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.totalLabour}
                    </div>
                    <div
                      style={{
                        height: 30,
                        fontSize: 10,
                        width: "10%",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      {i.totalAmount}
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    width: "100%",
                    height: 20,
                    backgroundColor: "white",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      height: 20,
                      width: "100%",
                      border: "1px solid black",
                      display: "flex",
                      fontSize: 10,
                    }}
                  >
                    <div style={{ height: 20, width: "70%" }}></div>
                    <div
                      style={{
                        height: 20,
                        width: "30%",
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <label style={{ fontWeight: "bold",color:"black" }}>
                        कुल भुगतान राशि :
                      </label>
                      <label style={{ fontWeight: "bold",color:"black" }}>
                        {postData?.itemList[0]?.totalAmount}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: 40, width: "100%" }}>
              <div style={{ height: 40, width: "100%", display: "flex" }}>
                <div
                  style={{
                    height: 40,
                    width: "72%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label style={{ fontWeight: "bold", fontSize: 10,color:"black" }}>
                    क्या कृषि उपज "जैविक उत्पाद" है? हाँ / नहीं
                  </label>
                  <label style={{ fontSize: 13,color:"black" }}>
                    नगद भुगतान राशि ₹{postData?.itemList[0]?.totalAmount}
                  </label>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "28%",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  <label style={{color:"black"}}>
                    क्या कृषि उपज ग्रेडिंग/सोटिंग की हुई है? हाँ / नहीं
                  </label>
                </div>
              </div>
            </div>

            <div style={{ height: 10, width: "100%" }}>
              <div style={{ height: 10, width: "100%", display: "flex" }}>
                <div
                  style={{
                    height: 10,
                    width: "72%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label style={{ fontWeight: "bold", fontSize: 10,color:"black" }}>
                    क्रेता के हस्ताक्षर
                  </label>
                </div>
                <div
                  style={{
                    height: 10,
                    width: "28%",
                    fontWeight: "bold",
                    fontSize: 10,
                  }}
                >
                  <label style={{color:"black"}}>विक्रेता के भुगतान प्राप्ति के हस्ताक्षर</label>
                </div>
              </div>
            </div>

            <div style={{ height: 70, width: "100%" }}>
              <div
                style={{
                  height: 70,
                  width: "100%",
                  display: "flex",
                  fontSize: 8,
                }}
              >
                <label style={{color:"black"}}>
                  नोट : (1) मध्यप्रदेश कृषि उपज मंडी अधिनियम, 1972 की धारा 37
                  (2) (क)- मंडी प्रांगन में क्रय की गयी कृषि उपज की कीमत का
                  भुगतान विक्रेता को उसी दिन मंडी प्रांगण में किया जायेगा | धारा
                  (37) (2) (ख)-यदि क्रेता खंड (क) के अधीन भुगतान नहीं करता है तो
                  वह विक्रेता को देय कृषि उपज की कुल कीमत के एक प्रतिशत प्रतिदिन
                  की दर से अतिरिक्त भुगतान पांच दिन के भीतर करने का दायी होगा।
                  धारा 37 (2) (ग)- यदि क्रेता उपरोक्त खंड (क) तथा (ख) के अधीन
                  विक्रेता को भुगतान के साथ अतिरिक्त भुगतान ऐसे क्रय के दिन से
                  पांच दिन के भीतर नहीं करता है तो उसकी अनुज्ञप्ति उठवे दिन को
                  रद्द कर दी गयी समझी जाएगी और उसे या उसके नातेदार (धरा 11 की
                  उपधारा (1) के खंड (क) के स्पष्टीकरण के विनिर्दिष्ट अभिप्रेत
                  अनुसार ) को ऐसे रद्दीकरण के तारिख से एक वर्ष की कालावधि के लिए
                  इस अधिनियम के अधीन कोई अनुज्ञप्ति मंजूर नहीं की जाएगी। (2)
                  क्रेता द्वारा विक्रेता / कृषक को किसी भी स्थिति में भुगतान
                  हेतु चेक जारी नहीं किये जा सकेंगे। (3) आरटीजीएस / एनइएफटी /
                  ऑनलाइन बैंकिंग में माध्यम से राशि विक्रेता / कृषक के खाते में
                  स्थानान्तरण के प्रमाणीकरण स्वरूप सम्बंधित बैंक की जमा
                  पर्ची/रसीद व यूटीआर नंबर सलंग्न करे |
                </label>
              </div>
            </div>
          </div>
) : (  
          <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
              <Sidebar />
              <div className="layout-page">
                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="row my-4">
                    <div className="col">
                      {/* <h6> Collapsible Section </h6> */}
                      <div className="accordion">
                        {/* Delivery Address */}
                        {/* <h4>Seller Info </h4> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: 200,
                            height: 30,
                            alignItems: "center",
                          }}
                        >
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: 13,
                            }}
                          >
                            हिंदी
                          </label>
                          <div
                            onClick={() => setIsHindi(!isHindi)}
                            style={{
                              height: 20,
                              width: 50,
                              borderRadius: 10,
                              border: "1px solid black",
                              backgroundColor: isHindi ? "yellowgreen" : "",
                              transition: ".5s",
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                          >
                            <button
                              style={{
                                height: 18,
                                width: 18,
                                borderRadius: "50%",
                                border: "1px solid black",
                                marginLeft: isHindi ? 30 : 0,
                                transition: ".5s",
                              }}
                            ></button>
                          </div>
                          <label
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: 13,
                            }}
                          >
                            English
                          </label>
                        </div>
                        <div className="card accordion-item">
                          <div
                            id="collapseDeliveryAddress"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingDeliveryAddress"
                            data-bs-parent="#collapsibleSection"
                          >
                            {/* <h5 class="card-header">Sale Form</h5> */}
                            <div className="accordion-body">
                              <div className="row g-3">
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppFarm(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; Farm No
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppFarm(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; फर्म नं
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        autoFocus
                                        id={"input-one"}
                                        onKeyUp={handleKeyUp}
                                        ref={one}
                                        type="number"
                                        value={postData.farmNo}
                                        onChange={(e) => {
                                          setPostData({
                                            ...postData,
                                            farmNo: e.target.value,
                                            farmName: farmList.filter(
                                              (i) => i.farmNo === e.target.value
                                            )[0]?.farmName,
                                            farmNameHindi: farmList.filter(
                                              (i) => i.farmNo === e.target.value
                                            )[0]?.farmNameHindi,
                                            licenceNo:
                                              farmList.filter(
                                                (i) =>
                                                  i.farmNo === e.target.value
                                              )[0]?.mandiLicenceNo +
                                              "/" +
                                              farmList.filter(
                                                (i) =>
                                                  i.farmNo === e.target.value
                                              )[0]?.manNo,
                                          });
                                        }}
                                        className="form-control"
                                      />
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.farmNo === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Date
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        दिनांक
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        id={"input-two"}
                                        onKeyUp={handleKeyUp}
                                        ref={two}
                                        type="date"
                                        value={postData.date}
                                        onChange={(e) => {
                                          setPostData({
                                            ...postData,
                                            date: e.target.value,
                                          });
                                          setLocalDate2(e.target.value);
                                          localStorage.setItem(
                                            "localpdate",
                                            e.target.value
                                          );
                                        }}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-4 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Purchase Type
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-4 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        खरीदी प्रकार
                                      </label>
                                    )}
                                    <div className="col-sm-8">
                                      <select
                                        ref={three}
                                        value={postData.tradeType}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            four.current.focus();
                                          }
                                        }}
                                        onChange={(e) => {
                                          four.current.focus();
                                          setPostData({
                                            ...postData,
                                            tradeType: e.target.value,
                                          });
                                        }}
                                        className="form-select"
                                      >
                                        <option>Anubandh</option>
                                        <option>Sauda</option>
                                        <option>Mandi Out</option>
                                      </select>
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.tradeType === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Book number
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        पुस्तिका क्रमांक
                                      </label>
                                    )}
                                    <div className="col-sm-4">
                                      {postBookData.pageNo !== 101 ? (
                                        <input
                                          id={"input-four"}
                                          onKeyUp={handleKeyUp}
                                          ref={four}
                                          type="number"
                                          value={postBookData.bookletNo}
                                          className="form-control"
                                          onChange={(e) =>
                                            setPostBook({
                                              ...postBook,
                                              bookletNo: e.target.value,
                                            })
                                          }
                                        ></input>
                                      ) : (
                                        <input
                                          id="input-four"
                                          onKeyUp={handleKeyUp}
                                          ref={four}
                                          type="number"
                                          value={postBook.bookletNo}
                                          onChange={(e) =>
                                            setPostBook({
                                              ...postBook,
                                              bookletNo: e.target.value,
                                            })
                                          }
                                          className="form-select"
                                        ></input>
                                      )}
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.bookletNo === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                    /
                                    <div className="col-sm-4">
                                      {postBookData.pageNo !== 101 ? (
                                        <input
                                          id={"input-five"}
                                          onKeyUp={handleKeyUp}
                                          ref={five}
                                          value={postBookData.pageNo}
                                          className="form-control"
                                        ></input>
                                      ) : (
                                        <input
                                          id={"input-five"}
                                          onKeyUp={handleKeyUp}
                                          ref={five}
                                          type="number"
                                          disabled
                                          value={1}
                                          className="form-control"
                                        ></input>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-2 col-form-label text-sm-end"
                                        htmlFor="collapsible-Broker"
                                      >
                                        Firm Name
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-2 col-form-label text-sm-end"
                                        htmlFor="collapsible-Broker"
                                      >
                                        फर्म नाम{" "}
                                      </label>
                                    )}
                                    <div className="col-sm-10">
                                      <input
                                        disabled
                                        value={postData.farmName}
                                        id="collapsible-Broker"
                                        className=" form-control"
                                        data-allow-clear="true"
                                      ></input>
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.brokerName === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-2 col-form-label text-sm-end"
                                        htmlFor="collapsible-Party"
                                      >
                                        Licence No.
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-2 col-form-label text-sm-end"
                                        htmlFor="collapsible-Party"
                                      >
                                        लाइसेंस नंबर
                                      </label>
                                    )}
                                    <div className="col-sm-10">
                                      <input
                                        disabled
                                        value={postData.licenceNo}
                                        onChange={(e) =>
                                          setPostData({
                                            ...postData,
                                            licenceNo: e.target.value,
                                          })
                                        }
                                        className=" form-control"
                                      ></input>
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.partyName === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="cd"
                                      >
                                        Contract/Deal Number
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="cd"
                                      >
                                        अनुबंध/सौदा नंबर{" "}
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        id={"input-six"}
                                        onKeyUp={handleKeyUp}
                                        ref={six}
                                        value={postData.anubandhNo}
                                        onChange={(e) =>
                                          setPostData({
                                            ...postData,
                                            anubandhNo: e.target.value,
                                          })
                                        }
                                        className="form-control"
                                      ></input>
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.anubandhNo === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="FREIGHTCONDITION"
                                      >
                                        Mobile No.
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                      >
                                        मोबाइल नंबर
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        id={"input-seven"}
                                        onKeyUp={handleKeyUp}
                                        ref={seven}
                                        type="number"
                                        value={postData.mobileNo}
                                        className=" form-control"
                                        onChange={(e) => {
                                          if (e.target.value < 10000000000) {
                                            setPostData({
                                              ...postData,
                                              mobileNo: e.target.value,
                                            });
                                          }
                                        }}
                                      ></input>
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.mobileNo < 999999999)&(postData?.mobileNo ==="")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-FREIGHT"
                                      >
                                        Village
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-FREIGHT"
                                      >
                                        गाँव
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <div>

                                      <input
                                      id={"input-eight"}
                                      onKeyUp={handleKeyUp}
                                      ref={eight}
                                    className="form-control"
                                   value={postData.village}
                                        onChange={(e)=>setPostData({...postData,village:e.target.value})}/> 
                                      </div>
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.village === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="RATE"
                                      >
                                        Aadhar No.
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="RATE"
                                      >
                                        आधार न.
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        id={"input-nine"}
                                        onKeyUp={handleKeyUp}
                                        ref={nine}
                                        value={postData.aadharNo}
                                        onChange={(e) => {
                                          if (e.target.value < 1000000000000) {
                                            setPostData({
                                              ...postData,
                                              aadharNo: e.target.value,
                                            });
                                          }
                                        }}
                                        type="number"
                                        className="form-control"
                                      />
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.aadharNo < 100000000000)& (postData?.aadharNo ==="")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                      >
                                        Vendor Name
                                        <br />
                                        (English)
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                      >
                                        विक्रेता का नाम <br />
                                        (English)
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        id={"input-ten"}
                                        onKeyUp={handleKeyUp}
                                        ref={ten}
                                        value={postData.sellerName}
                                        onChange={(e) =>
                                          setPostData({
                                            ...postData,
                                            sellerName: e.target.value,
                                          })
                                        }
                                        className="form-control"
                                      />
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.sellerName === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                      >
                                        Vendor Name
                                        <br />
                                        (हिंदी)
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-3 col-form-label text-sm-end"
                                      >
                                        विक्रेता का नाम
                                        <br />
                                        (हिंदी)
                                      </label>
                                    )}
                                    <div className="col-sm-9">
                                      <input
                                        value={text}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              height: 1,
                              backgroundColor: "black",
                            }}
                          ></div>
                          <div
                            id="collapseDeliveryAddress"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingDeliveryAddress"
                            data-bs-parent="#collapsibleSection"
                          >
                            {/* <h5 class="card-header">Sale Form</h5> */}
                            <div className="accordion-body">
                              <div className="row g-3">
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppProduce(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; Produce Name
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 20,
                                            position: "absolute",
                                            left: 40,
                                          }}
                                          onClick={() => setIsAppProduce(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; उपज का नाम
                                      </label>
                                    )}
                                    <div className="col-sm-12">
                                      <div className="row">
                                        <div className="col-sm-4">
                                          <input
                                            style={{
                                              borderColor:
                                                validator & (produceId === "")
                                                  ? "red"
                                                  : "",
                                            }}
                                            id={"input-eleven"}
                                            onKeyUp={handleKeyUp}
                                            ref={eleven}
                                            value={produceId}
                                            onChange={(e) => {
                                              setproduceId(e.target.value);
                                              setproduceName(
                                                produceList.filter(
                                                  (i) =>
                                                    i.yieldId === e.target.value
                                                )[0]?.yieldName
                                              );
                                              setproduceType(
                                                produceList.filter(
                                                  (i) =>
                                                    i.yieldId === e.target.value
                                                )[0]?.yieldNameHindi
                                              );
                                            }}
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="col-sm-7">
                                          <input
                                            disabled
                                            value={produceName}
                                            className="form-control"
                                          />
                                          <span
                                            style={{
                                              display:
                                                validator &
                                                (postData?.saudaDate === "")
                                                  ? ""
                                                  : "none",
                                              color: "red",
                                            }}
                                          >
                                            * feild is required
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="row">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Produce Type
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        उपज का प्रकार
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        disabled
                                        value={produceType}
                                        onChange={(e) => {
                                          setproduceType(e.target.value);
                                        }}
                                        className="form-control"
                                      ></input>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppMark(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; Mark
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppMark(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; मार्क
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <select
                                        style={{
                                          borderColor:
                                            validator1 & (mark === "")
                                              ? "red"
                                              : "",
                                        }}
                                        id={"input-twelve"}
                                        onKeyUp={handleKeyUp}
                                        ref={twelve}
                                        value={mark}
                                        onChange={(e) => {
                                          thirteen.current.focus();
                                          setmark(e.target.value);
                                        }}
                                        className="form-select"
                                      >
                                        <option value={""} disabled selected>
                                          --Select--
                                        </option>
                                        {markList.map((i) => (
                                          <option>{i.mark}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppGodown(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; Godown
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppGodown(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; गोदाम
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <select
                                        style={{
                                          borderColor:
                                            validator1 & (godown === "")
                                              ? "red"
                                              : "",
                                        }}
                                        id={"input-thirteen"}
                                        onKeyUp={handleKeyUp}
                                        ref={thirteen}
                                        value={godown}
                                        onChange={(e) => {
                                          fourteen.current.focus();
                                          setgodown(e.target.value);
                                        }}
                                        className="form-select"
                                      >
                                        <option selected disabled value={""}>
                                          --Select--
                                        </option>
                                        {godownList.map((i) => (
                                          <option>{i.godownName}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Bag Count
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        बोरे नग{" "}
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        type="number"
                                        disabled
                                        value={totalBagCount()}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Admit Weight
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        भर्ती बजन{" "}
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        style={{
                                          borderColor:
                                            validator1 & (admitWeight === "")
                                              ? "red"
                                              : "",
                                        }}
                                        id={"input-fourteen"}
                                        onKeyUp={handleKeyUp}
                                        ref={fourteen}
                                        type="number"
                                        value={
                                          listIndex !== ""
                                            ? postData.itemList.admitWeight
                                            : admitWeight
                                        }
                                        onChange={(e) => {
                                          setAdmitWeight(e.target.value);
                                        }}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Katta Weight
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        कट्टा वजन{" "}
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        type="number"
                                        disabled
                                        value={kattaWeight}
                                        onChange={(e) => {
                                          setkattaWeight(e.target.value);
                                        }}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Actual Weight
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        वास्तविक वजन
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        style={{
                                          borderColor:
                                            validator1 & (actualWeight === "")
                                              ? "red"
                                              : "",
                                        }}
                                        id={"input-fifteen"}
                                        onKeyUp={handleKeyUp}
                                        ref={fifteen}
                                        type="number"
                                        value={actualWeight}
                                        onChange={(e) => {
                                          setActualWeight(e.target.value);
                                        }}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Rate(Per QTL)
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        दर प्र. किं.
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        style={{
                                          borderColor:
                                            validator1 & (ratePerQuantal === "")
                                              ? "red"
                                              : "",
                                        }}
                                        id={"input-sixteen"}
                                        onKeyUp={handleKeyUp}
                                        ref={sixteen}
                                        type="number"
                                        value={ratePerQuantal}
                                        onChange={(e) => {
                                          setratePerQuantal(e.target.value);
                                        }}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Total Bag
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        कुल बोरे{" "}
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        type="number"
                                        disabled
                                        value={totalBagRound()}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppTulai(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; Tulai Id
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        <label
                                          style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: 13,
                                          }}
                                          onClick={() => setIsAppTulai(true)}
                                        >
                                          +
                                        </label>
                                        &nbsp; तुलाई Id
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        style={{
                                          borderColor:
                                            validator1 & (tulaiId === "")
                                              ? "red"
                                              : "",
                                        }}
                                        id={"input-seventeen"}
                                        onKeyUp={handleKeyUp}
                                        ref={seventeen}
                                        type="number"
                                        value={tulaiId}
                                        onChange={(e) => {
                                          if (e.target.value === "") {
                                            settulaiId("");
                                            settulaiRate("");
                                            setlabourRate("");
                                          } else {
                                            settulaiId(e.target.value);
                                            settulaiRate(
                                              tulaiList.filter(
                                                (i) =>
                                                  i.tulaiId === e.target.value
                                              )[0]?.tulaiRate
                                            );
                                            setlabourRate(
                                              tulaiList.filter(
                                                (i) =>
                                                  i.tulaiId === e.target.value
                                              )[0]?.labourRate
                                            );
                                          }
                                        }}
                                        className="form-control"
                                      />
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.saudaDate === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Total Tulai
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        कुल तुलाई
                                      </label>
                                    )}
                                    <div className="col-sm-12">
                                      <div className="row">
                                        <div className="col-sm-6">
                                          <input
                                            disabled
                                            value={tulaiRate}
                                            className="form-control"
                                          />
                                          <span
                                            style={{
                                              display:
                                                validator &
                                                (postData?.saudaDate === "")
                                                  ? ""
                                                  : "none",
                                              color: "red",
                                            }}
                                          >
                                            * feild is required
                                          </span>
                                        </div>
                                        <div className="col-sm-6">
                                          <input
                                            type="number"
                                            disabled
                                            value={totalTulaiRate()}
                                            className="form-control"
                                          />
                                          <span
                                            style={{
                                              display:
                                                validator &
                                                (postData?.saudaDate === "")
                                                  ? ""
                                                  : "none",
                                              color: "red",
                                            }}
                                          >
                                            * feild is required
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Total Labour
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        कुल हमाली
                                      </label>
                                    )}
                                    <div className="col-sm-12">
                                      <div className="row">
                                        <div className="col-sm-6">
                                          <input
                                            disabled
                                            onChange={(e) =>
                                              setlabourRate(e.target.value)
                                            }
                                            value={labourRate}
                                            className="form-control"
                                          />
                                          <span
                                            style={{
                                              display:
                                                validator &
                                                (postData?.saudaDate === "")
                                                  ? ""
                                                  : "none",
                                              color: "red",
                                            }}
                                          >
                                            * feild is required
                                          </span>
                                        </div>
                                        <div className="col-sm-6">
                                          <input
                                            type="number"
                                            disabled
                                            value={totalLabourRate()}
                                            className="form-control"
                                          />
                                          <span
                                            style={{
                                              display:
                                                validator &
                                                (postData?.saudaDate === "")
                                                  ? ""
                                                  : "none",
                                              color: "red",
                                            }}
                                          >
                                            * feild is required
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    {isHindi ? (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        Total Amount
                                      </label>
                                    ) : (
                                      <label
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 13,
                                        }}
                                        className="col-sm-12 col-form-label text-sm-center"
                                        htmlFor="collapsible-Sauda"
                                      >
                                        कुल भुगतान राशि{" "}
                                      </label>
                                    )}

                                    <div className="col-sm-12">
                                      <input
                                        type="number"
                                        disabled
                                        value={totalPrice()}
                                        className="form-control"
                                      />
                                      <span
                                        style={{
                                          display:
                                            validator &
                                            (postData?.saudaDate === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="col">
                                    <label
                                      style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: 13,
                                      }}
                                      className="col-sm-4 "
                                      htmlFor="collapsible-Sauda"
                                    ></label>

                                    <div className="col-sm-5 d-flex">
                                      <button
                                        id={"input-eightteen"}
                                        onKeyUp={handleKeyUp}
                                        ref={eightteen}
                                        onClick={() => addItemtoList()}
                                        className="btn btn-outline-success"
                                      >
                                        {listIndex === "" ? "Add" : "Update"}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="table-responsive">
                                  <table className="table table-striped table-bordered">
                                    <thead>
                                      <tr className="table-warning">
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          S No.
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          उपज का नाम{" "}
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          प्रकार
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          मार्क
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          गोदाम
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          वास्तविक वजन
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          दर
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          कुल मूल्य
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          बोर
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          कुल तुलाई{" "}
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          कुल हम्माली
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          भुगतान राशि{" "}
                                        </th>
                                        <th
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          ACTION
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                      {postData.itemList.map((i, n) => (
                                        <tr>
                                          <td
                                            className="td"
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          ></td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.yieldName}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.produceType}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.mark}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.godown}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.actualWeight}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.ratePerQuantal}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {Math.round(
                                              i.ratePerQuantal * i.actualWeight
                                            )}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.totalBag}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {Math.round(i.totalTulai)}
                                          </td>
                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {Math.round(i.totalLabour)}
                                          </td>

                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            {i.totalAmount}
                                          </td>

                                          <td
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                          >
                                            <div className="">
                                              <a>
                                                <i
                                                  onClick={() => {
                                                    const list =
                                                      postData.itemList.filter(
                                                        (x, y) => y !== n
                                                      );
                                                    const total = list
                                                      .map((i) => i.totalAmount)
                                                      .reduce(
                                                        (a, b) => +a + +b,
                                                        0
                                                      );
                                                    setPostData({
                                                      ...postData,
                                                      itemList:
                                                        postData.itemList.filter(
                                                          (x, y) => y !== n
                                                        ),
                                                      cashPayment: total,
                                                      remaining: "",
                                                    });
                                                  }}
                                                  className="bx bx-trash me-1"
                                                />
                                              </a>
                                              <a>
                                                <i
                                                  onClick={() => {
                                                    setListIndex(n);
                                                    setproduceId(i.yieldId);
                                                    setproduceName(i.yieldName);
                                                    setproduceType(
                                                      i.produceType
                                                    );
                                                    setmark(i.mark);
                                                    setgodown(i.godown);
                                                    setAdmitWeight(
                                                      i.admitWeight
                                                    );
                                                    setkattaWeight(
                                                      i.kattaWeight
                                                    );
                                                    setActualWeight(
                                                      i.actualWeight
                                                    );
                                                    setratePerQuantal(
                                                      i.ratePerQuantal
                                                    );
                                                    settulaiId(i.tulaiId);
                                                    settulaiRate(i.tulaiRate);
                                                    setlabourRate(i.labourRate);
                                                  }}
                                                  className="bx bx-edit me-1"
                                                />
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                      <tr className="table-success">
                                        <td colSpan={3}>
                                          <h6
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            कुल भुगतान राशि{" "}
                                          </h6>
                                        </td>

                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td
                                          style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: 13,
                                          }}
                                        >
                                          {totalPayment()}
                                        </td>

                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>

                                <div
                                  id="collapseDeliveryAddress"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="headingDeliveryAddress"
                                  data-bs-parent="#collapsibleSection"
                                >
                                  {/* <h5 class="card-header">Sale Form</h5> */}
                                  <div className="accordion-body">
                                    <div className="row g-3">
                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Sauda"
                                            >
                                              Cash Payment
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Sauda"
                                            >
                                              नकद भुगतान
                                            </label>
                                          )}
                                          <div className="col-sm-9 ">
                                            <input
                                              id={"input-nineteen"}
                                              onKeyUp={handleKeyUp}
                                              ref={nineteen}
                                              type="number"
                                              value={postData.cashPayment}
                                              onChange={(e) =>
                                                setPostData({
                                                  ...postData,
                                                  cashPayment: e.target.value,
                                                  remaining:
                                                    totalPayment() -
                                                    e.target.value,
                                                })
                                              }
                                              className="form-control"
                                            />
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.saudaDate === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Sauda"
                                            >
                                              Remaining
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Sauda"
                                            >
                                              शेष
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <input
                                              type="number"
                                              disabled
                                              value={postData.remaining}
                                              className="form-control"
                                            />
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.saudaDate === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Sauda"
                                            >
                                              Payment Date
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Sauda"
                                            >
                                              भुगतान वचन दिनांक
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <input
                                              disabled
                                              value={postData.date}
                                              type="date"
                                              onChange={(e) =>
                                                setPostData({
                                                  ...postData,
                                                  paymentDate: e.target.value,
                                                })
                                              }
                                              className="form-control"
                                            />
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.saudaDate === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Broker"
                                            >
                                              Remaining Payment Type
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Broker"
                                            >
                                              शेष भुगतान प्रकार{" "}
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <select
                                              id={"input-twenty"}
                                              onKeyUp={handleKeyUp}
                                              ref={twenty}
                                              value={
                                                postData.remainingPaymentType
                                              }
                                              disabled={
                                                postData.cashPayment -
                                                  totalPayment() ===
                                                0
                                              }
                                              onChange={(e) => {
                                                twentyone.current.focus();
                                                setPostData({
                                                  ...postData,
                                                  remainingPaymentType:
                                                    e.target.value,
                                                });
                                              }}
                                              className=" form-select"
                                              data-allow-clear="true"
                                            >
                                              <option value="" selected>
                                                --Select--
                                              </option>
                                              <option>NEFT/RTGS</option>
                                            </select>
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.brokerName === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              Ledger
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              लेजर
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <input
                                              id={"input-twentyone"}
                                              onKeyUp={handleKeyUp}
                                              ref={twentyone}
                                              disabled={
                                                postData.cashPayment -
                                                  totalPayment() ===
                                                0
                                              }
                                              value={postData.bankLedger}
                                              onChange={(e) =>
                                                setPostData({
                                                  ...postData,
                                                  bankLedger: e.target.value,
                                                })
                                              }
                                              className=" form-control"
                                            ></input>
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.partyName === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row">
                                          <label
                                            style={{
                                              color: "black",
                                              fontWeight: "bold",
                                              fontSize: 13,
                                            }}
                                            className="col-sm-3 col-form-label text-sm-end"
                                            htmlFor="cd"
                                          >
                                            IFSC Code
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              id={"input-twentytwo"}
                                              onKeyUp={handleKeyUp}
                                              ref={twentytwo}
                                              disabled={
                                                postData.cashPayment -
                                                  totalPayment() ===
                                                0
                                              }
                                              value={postData.ifscCode}
                                              onChange={(e) => {
                                                if (
                                                  e.target.value.length < 12
                                                ) {
                                                  setPostData({
                                                    ...postData,
                                                    ifscCode: e.target.value,
                                                  });
                                                }
                                              }}
                                              className="form-control"
                                            ></input>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="FREIGHTCONDITION"
                                            >
                                              Account Number
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="FREIGHTCONDITION"
                                            >
                                              खाता संख्या
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <input
                                              id={"input-twentythree"}
                                              onKeyUp={handleKeyUp}
                                              ref={twentythree}
                                              disabled={
                                                postData.cashPayment -
                                                  totalPayment() ===
                                                0
                                              }
                                              value={postData.accountNo}
                                              onChange={(e) =>
                                                setPostData({
                                                  ...postData,
                                                  accountNo: e.target.value,
                                                })
                                              }
                                              className="form-control"
                                            ></input>
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.freightCondition ===
                                                    "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-FREIGHT"
                                            >
                                              Bank <br />
                                              (Farmer)
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-FREIGHT"
                                            >
                                              बैंक <br />
                                              (कृषक)
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <input
                                              id={"input-twentyfour"}
                                              onKeyUp={handleKeyUp}
                                              ref={twentyfour}
                                              disabled={
                                                postData.cashPayment -
                                                  totalPayment() ===
                                                0
                                              }
                                              value={postData.bankFarmer}
                                              onChange={(e) =>
                                                setPostData({
                                                  ...postData,
                                                  bankFarmer: e.target.value,
                                                })
                                              }
                                              type="text"
                                              className="form-control"
                                            />
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.freight === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-4">
                                        <div className="row">
                                          {isHindi ? (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="RATE"
                                            >
                                              Branch
                                            </label>
                                          ) : (
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="RATE"
                                            >
                                              शाखा
                                            </label>
                                          )}
                                          <div className="col-sm-9">
                                            <input
                                              id={"input-twentyfive"}
                                              onKeyUp={handleKeyUp}
                                              ref={twentyfive}
                                              disabled={
                                                postData.cashPayment -
                                                  totalPayment() ===
                                                0
                                              }
                                              value={postData.branch}
                                              className="form-control"
                                              onChange={(e) =>
                                                setPostData({
                                                  ...postData,
                                                  branch: e.target.value,
                                                })
                                              }
                                            />
                                            <span
                                              style={{
                                                display:
                                                  validator &
                                                  (postData?.rate === "")
                                                    ? ""
                                                    : "none",
                                                color: "red",
                                              }}
                                            >
                                              * feild is required
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-4">
                                        <div className="row">
                                          <div className="col-sm-12">
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-12 col-form-label text-sm-center"
                                            >
                                              {" "}
                                              <input
                                                id={"input-twentysix"}
                                                onKeyUp={handleKeyUp}
                                                ref={twentysix}
                                                checked={
                                                  postData.cashPayment < 200001
                                                    ? true
                                                    : postData.verified
                                                }
                                                onClick={() =>
                                                  setPostData({
                                                    ...postData,
                                                    verified:
                                                      !postData.verified,
                                                  })
                                                }
                                                className="col-sm-2"
                                                type="checkbox"
                                              />
                                              Verified by Mandi for cash
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="row"></div>
                                      </div>

                                      <div className="mt-4 text-center">
                                        <a>
                                          <button
                                            id={"input-twentyseven"}
                                            onKeyUp={handleKeyUp}
                                            ref={twentyseven}
                                            disabled={!isSubmit}
                                            type="submit"
                                            className="btn btn-outline-success me-sm-3 me-1"
                                            onClick={() => {
                                             
                                              setTimeout(() => {
                                                postAllData();
                                              }, 100);
                                            }}
                                          >
                                            Update
                                          </button>
                                        </a>
                                        <button
                                          type="reset"
                                          className="btn btn-label-secondary"
                                          onClick={() =>
                                            navigate("/MandiPurchase")
                                          }
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />

                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-overlay layout-menu-toggle" />
            {/* Drag Target Area To SlideIn Menu On Small Screens */}
            <div className="drag-target" />
          </div>
           )}  
      </div>
    </>
  );
}

export default AddMandiPurchase;
