import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { json, useNavigate } from "react-router-dom";
import AddFarm1 from "./AddFarm1";
import AddPartySaiyyad1 from "./AddPartySaiyyad1";
import AddBrokerSaiyyad1 from "./AddBrokerSaiyyad1";
import AddMark1 from "./AddMark1";
import AddGodown1 from "./AddGodown1";
import AddBrand1 from "./AddBrand1";
import AddProduce1 from "./AddProduce1";
import AddBardanaMark1 from "./AddBardanaMark1";
import AddTransporter from "./AddTransporter";
import tin from "./tin.json";
function AddMandiSale() {
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
  let twentynine = React.createRef();
  let thirty = React.createRef();
  let thirtyone = React.createRef();
  let thirtytwo = React.createRef();
  let thirtythree = React.createRef();
  let thirtyfour = React.createRef();
  let thirtyfive = React.createRef();
  let thirtysix = React.createRef();
  let thirtyseven = React.createRef();
  let thirtyeight = React.createRef();
  let thirtynine = React.createRef();
  let fourty = React.createRef();
  let fourtyone = React.createRef();
  let fourtytwo = React.createRef();
  let fourtythree = React.createRef();
  let fourtyfour = React.createRef();
  let fourtyfive = React.createRef();
  let fourtysix = React.createRef();
  let fourtyseven = React.createRef();
  let fourtyeight = React.createRef();
  let fourtynine = React.createRef();
  let fifty = React.createRef();
  function handleKeyUp(e) {
    e.which = e.which || e.keyCode;

    if (e.which == 13) {
      switch (e.target.id) {
        case "input-one":
          two.current.focus();
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
          seven.current.focus();

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
        case "input-ten":
          eleven.current.focus();
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
        case "input-fifteen":
          sixteen.current.focus();
          break;
        case "input-sixteen":
          seventeen.current.focus();
          break;
        case "input-seventeen":
          eightteen.current.focus();
          break;
        case "input-eightteen":
          nineteen.current.focus();
          break;
        case "input-nineteen":
          twenty.current.focus();
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
          twentysix.current.focus();
          break;
        case "input-twentysix":
          twentyseven.current.focus();
          break;
        case "input-twentyseven":
          {
            if (bag !== "") {
              twentyeight.current.focus();
            }
          }
          break;
        case "input-twentyeight":
          twentynine.current.focus();
          break;
        case "input-twentynine":
          thirty.current.focus();
          break;
        case "input-thirty":
          thirtyone.current.focus();
          break;
        case "input-thirtyone":
          {
            if (ratePerQuantal !== "") {
              thirtytwo.current.focus();
            }
          }
          break;
        case "input-thirtytwo":
          thirtythree.current.focus();
          break;
        case "input-thirtythree":
              thirtyfour.current.focus();
          break;
        case "input-thirtyfour":
          thirtyfive.current.focus();
          break;
        case "input-thirtyfive":
          thirtysix.current.focus();

          break;
        case "input-thirtysix":
          thirtyseven.current.focus();
          break;
        case "input-thirtyseven":
          thirtyeight.current.focus();
          break;
        case "input-thirtyeight":
          {
            if (getStockBalance() < 5000000) {
              fourty.current.focus();
            } else {
              thirtynine.current.focus();
            }
          }
          break;
        case "input-thirtynine":
          fourty.current.focus();
          break;
        case "input-fourty":
          fourtyone.current.focus();
          break;
        case "input-fourtyone":
          fourtytwo.current.focus();
          break;
        case "input-fourtytwo":
          fourtythree.current.focus();
          break;
        case "input-fourtythree":
          fourtyfour.current.focus();
          break;
        case "input-fourtyfour":
          fourtyfive.current.focus();
          break;
        case "input-fourtyfive":
          fourtysix.current.focus();
          break;
        case "input-fourtysix":
          fourtyseven.current.focus();
          break;
        case "input-fourtyseven":
          fourtyeight.current.focus();
          break;
        case "input-fourtyeight":
          fourtynine.current.focus();
          break;
        case "input-fourtynine":
          fifty.current.focus();
          break;

        default:
          break;
      }
    }
  }
  const [listIndex, setListIndex] = useState("");
  useEffect(() => {
    getMark();
    getGodown();
    getBrand();
    getSaleParty();
    getSaleBroker();
    getFarm();
    getmandiSale();
    getUpaj();
    getBardanaMark();
    getTransporter();
    getUnderGroup();
  }, []);
  const coverter = require("number-to-words");
  const date = new Date();
  const dd = date.getDate();
  const ndd = dd < 10 ? `0${dd}` : dd;
  const mm = date.getMonth() + 1;
  const nmm = mm < 10 ? `0${mm}` : mm;
  const yy = date.getFullYear();
  const finalDate = `${yy}-${nmm}-${ndd}`;
  const navigate = useNavigate();
  const ddmmyy = (x) => {
    const date = x.split("-").reverse().join("/");
    return date;
  };
  const [postData, setPostData] = useState({
    itemList: [],
    date: finalDate,
    tcsPer: 0,
    tcs: 0,
    cgstRate:"0",
    sgstRate:"0",
    igstRate:"0",
  });

  const [validator, setValidator] = useState(false);
  const [isSubmit, setIsSubmit] = useState(true);
  const [isAppFarm, setIsAppFarm] = useState(false);
  const [isAppCustomer, setIsAppCustomer] = useState(false);
  const [isAppBroker, setIsAppBroker] = useState(false);
  const [isAppMark, setIsAppMark] = useState(false);
  const [isAppProduce, setIsAppProduce] = useState(false);
  const [isAppGodown, setIsAppGodown] = useState(false);
  const [isAppBrand, setIsAppBrand] = useState(false);
  const [isAppBardanaMark, setIsAppBardanaMark] = useState(false);
  const [isAppTransporter, setIsAppTransporter] = useState(false);
  const [isTransport, setIsTransport] = useState(false);

  const [list, setList] = useState([]);
  const getmandiSale = () => {
    axios.get(baseUrl + "mandisale").then((res) => setList(res.data.data));
  };
  const [mark, setMark] = useState("");
  const [godown, setGodown] = useState("");
  const [bag, setBag] = useState("");
  const [brand, setBrand] = useState("");
  const [bardanaMark, setBardanaMark] = useState("");
  const [admitWeight, setAdmitWeight] = useState("");
  const [katta, setKatta] = useState("");
  const [weight, setWeight] = useState("");
  const [actualWeight, setActualWeight] = useState("");
  const [bardanaWeight, setBardanaWeight] = useState("");
  const [totalWeight, setTotalWeight] = useState("");
  const [ratePerQuantal, setRatePerQuantal] = useState("");
  const [amount, setAmount] = useState("");
  const [produceId, setproduceId] = useState("");
  const [produceName, setproduceName] = useState("");
  const [sgst, setSgst] = useState("");
  const [cgst, setCgst] = useState("");
  const [igst, setIgst] = useState("");
  const [billNo, setBillNo] = useState("");

  const mandiSaleMarkLocal = localStorage.getItem("mandiSaleMarkLocal");
  const parseSaleMarkData = mandiSaleMarkLocal
    ? JSON.parse(mandiSaleMarkLocal)
    : [];

  const mandiSaleGodownLocal = localStorage.getItem("mandiSaleGodownLocal");
  const parseSaleGodownData = mandiSaleGodownLocal
    ? JSON.parse(mandiSaleGodownLocal)
    : [];

  const mandiSaleundergroupLocal = localStorage.getItem(
    "mandiSaleundergroupLocal"
  );
  const parseSaleUnderGroupData = mandiSaleundergroupLocal
    ? JSON.parse(mandiSaleundergroupLocal)
    : [];

  const mandiSaleTransporterLocal = localStorage.getItem(
    "mandiSaleTransporterLocal"
  );
  const parseSaleTransporterLocal = mandiSaleTransporterLocal
    ? JSON.parse(mandiSaleTransporterLocal)
    : [];

  const mandiSaleBrandLocal = localStorage.getItem("mandiSaleBrandLocal");
  const parseSaleBrandLocal = mandiSaleBrandLocal
    ? JSON.parse(mandiSaleBrandLocal)
    : [];

  const mandiSalePartyLocal = localStorage.getItem("mandiSalePartyLocal");
  const parseSalePartyLocal = mandiSalePartyLocal
    ? JSON.parse(mandiSalePartyLocal)
    : [];

  const mandiSaleBrokerLocal = localStorage.getItem("mandiSaleBrokerLocal");
  const parseSaleBrokerLocal = mandiSaleBrokerLocal
    ? JSON.parse(mandiSaleBrokerLocal)
    : [];

  const mandiSaleFarmLocal = localStorage.getItem("mandiSaleFarmLocal");
  const parseSaleFarmLocal = mandiSaleFarmLocal
    ? JSON.parse(mandiSaleFarmLocal)
    : [];

  const mandiSaleUpajLocal = localStorage.getItem("mandiSaleUpajLocal");
  const parseSaleUpajLocal = mandiSaleUpajLocal
    ? JSON.parse(mandiSaleUpajLocal)
    : [];

  const mandiSaleBardanamarkLocal = localStorage.getItem(
    "mandiSaleBardanamarkLocal"
  );
  const parseSaleBardanamarkLocal = mandiSaleBardanamarkLocal
    ? JSON.parse(mandiSaleBardanamarkLocal)
    : [];

  const [markList, setMarkList] = useState(parseSaleMarkData);
  const [godownList, setGodownList] = useState(parseSaleGodownData);
  const [brandList, setBrandList] = useState(parseSaleBrandLocal);
  const [brokerList, setBrokerList] = useState(parseSaleBrokerLocal);
  const [partyList, setPartyList] = useState(parseSalePartyLocal);
  const [farmList, setFarmList] = useState(parseSaleFarmLocal);
  const [upajList, setUpajList] = useState(parseSaleUpajLocal);
  const [transporterList, setTransporterList] = useState(
    parseSaleTransporterLocal
  );
  const [bardanaList, setBardanaList] = useState(parseSaleBardanamarkLocal);
  const [underGroupList, setUnderGroupList] = useState(parseSaleUnderGroupData);
  const [isHindi, setIsHindi] = useState(false);

  const getMark = () => {
    axios.get(baseUrl + "mark").then((res) => {
      setMarkList(res.data.data);
      localStorage.setItem("mandiSaleMarkLocal", JSON.stringify(res.data.data));
    });
  };

  const getGodown = () => {
    axios.get(baseUrl + "godown").then((res) => {
      setGodownList(res.data.data);
      localStorage.setItem(
        "mandiSaleGodownLocal",
        JSON.stringify(res.data.data)
      );
    });
  };
  const getUnderGroup = () => {
    axios.get(baseUrl + "undergroup").then((res) => {
      setUnderGroupList(res.data.data);
      localStorage.setItem(
        "mandiSaleundergroupLocal",
        JSON.stringify(res.data.data)
      );
    });
  };
  const getTransporter = () => {
    axios.get(baseUrl + "transporter").then((res) => {
      setTransporterList(res.data.data);
      localStorage.setItem(
        "mandiSaleTransporterLocal",
        JSON.stringify(res.data.data)
      );
    });
  };

  const getBrand = () => {
    axios.get(baseUrl + "brand").then((res) => {
      setBrandList(res.data.data);
      localStorage.setItem(
        "mandiSaleBrandLocal",
        JSON.stringify(res.data.data)
      );
    });
  };
  const getSaleParty = () => {
    axios.get(baseUrl + "partysaiyyad").then((res) => {
      setPartyList(res.data.data);
      localStorage.setItem(
        "mandiSalePartyLocal",
        JSON.stringify(res.data.data)
      );
    });
  };
  const [partyId, setPartyId] = useState("");
  const updateBroker = () => {
    const item = { broker: postData.broker };
    axios.put(baseUrl + "partysaiyyad/" + partyId, item);
  };
  const getSaleBroker = () => {
    axios.get(baseUrl + "brokersaiyyad").then((res) => {
      setBrokerList(res.data.data);
      localStorage.setItem(
        "mandiSaleBrokerLocal",
        JSON.stringify(res.data.data)
      );
    });
  };

  const getFarm = () => {
    axios.get(baseUrl + "farm").then((res) => {
      setFarmList(res.data.data);
      localStorage.setItem("mandiSalefarmLocal", JSON.stringify(res.data.data));
    });
  };
  const getUpaj = () => {
    axios.get(baseUrl + "yield").then((res) => {
      setUpajList(res.data.data);
      localStorage.setItem("mandiSaleUpajLocal", JSON.stringify(res.data.data));
    });
  };
  const getBardanaMark = () => {
    axios.get(baseUrl + "bardanamark").then((res) => {
      setBardanaList(res.data.data);
      localStorage.setItem(
        "mandiSaleBardanamarkLocal",
        JSON.stringify(res.data.data)
      );
    });
  };

  const addItemtoList = () => {
    if (
      (produceId !== "") &
      (mark !== "") &
      (godown !== "") &
      (brand !== "") &
      (bardanaMark !== "") &
      (bag !== "") &
      (admitWeight !== "") &
      (ratePerQuantal !== "")
    ) {
      const item = {
        mark: mark,
        godown: godown,
        bag: bag,
        brand: brand,
        bardanaMark: bardanaMark,
        admitWeight: admitWeight,
        katta: katta,
        weight: weight11(),
        actualWeight: weight11(),
        bardanaWeight: bardanaWeight,
        totalWeight: netWeight(),
        ratePerQuantal: ratePerQuantal,
        amount: totalRate(),
        produceId: produceId,
        produceName: produceName,
        cgst: cgst,
        sgst: sgst,
        igst: igst,
      };
      if (listIndex === "") {
        setPostData({ ...postData, itemList: [...postData.itemList, item] });
      } else {
        setPostData({
          ...postData,
          itemList: postData.itemList.map((i, n) =>
            n == listIndex ? item : i
          ),
        });
        setListIndex("");
      }
    } else {
      setValidator(true);
    }

    setMark("");
    setGodown("");
    setBag("");
    setBrand("");
    setBardanaMark("");
    setKatta("");
    setWeight("");
    setActualWeight("");
    setBardanaWeight("");
    setTotalWeight("");
    setRatePerQuantal("");
    setAmount("");
    setSgst("");
    setCgst("");
    setIgst("");
  };

  const postSaleData = () => {
    axios
      .post(baseUrl + "mandisale", {
        ...postData,
        billNumber: billNo,
        discount: cashDiscount(),
        sgst: totalSgst(),
        cgst: totalCgst(),
        igst: totalIgst(),
        sgstRate: postData.sgstRate !== "" ? postData.sgstRate : 0,
        cgstRate: postData.cgstRate !== "" ? postData.cgstRate : 0,
        igstRate: postData.igstRate !== "" ? postData.igstRate : 0,
        tcsPer: postData.tcsPer,
        tcs: totalTcs(),
        totalFreight: totalFreight(),
        roundOff: (
          Math.round(finalTotalAmount() + totalTcs()) -
          (finalTotalAmount() + totalTcs())
        ).toFixed(2),
        lastAmount:
          postData?.itemList?.map((j) => +j.amount).reduce((a, b) => a + b, 0) -
          cashDiscount() +
          (postData.advanceFreight ? +postData.advanceFreight : 0) +
          totalCgst() +
          totalSgst() +
          totalIgst(),
      })
      .then(() => {
        getmandiSale();
        setPostData({
          transporterName: postData.transporterName,
          truckNo: postData.truckNo,
          driverName: postData.driverName,
          driverMobileNo: postData.driverMobileNo,
          driverLicenceNo: postData.driverLicenceNo,
          biltiNo: postData.biltiNo,
          contractNo: postData.contractNo,
          anugyaNo: postData.anugyaNo,
          ewayBillNo: postData.ewayBillNo,
          itemList: [],
          date: finalDate,
          billingFarm: "",
          partyName: "",
          brokerName: "",
          billNo: "",
          brokerType: "",
          brokerRate: "",
          discountRate: "",
          freightRate: "",
          cgstRate: "",
          sgstRate: "",
          igstRate: "",
          advanceFreight: "",
        });
      });
  };

  const weight11 = () => {
    const value = (admitWeight * bag) / 100;
    return value;
  };

  const netWeight = () => {
    const net = (admitWeight * bag) / 100 - bardanaWeight / 1000;
    return net;
  };

  const totalRate = () => {
    const total =
      ((admitWeight * bag) / 100 - bardanaWeight / 1000) * ratePerQuantal;
    return total;
  };

  const totalFreight = () => {
    const value =
      postData.freightRate *
      postData.itemList.map((j) => +j.totalWeight).reduce((a, b) => +a + +b, 0);
    return isNaN(value) ? 0 : value;
  };
  const getBillNo = (x) => {
    const newList = list.filter((i) => i.billingFarm === x);
    const billNumber =
      newList.length > 0 ? +newList[newList.length - 1].billNumber + 1 : 1;
    setBillNo(billNumber);
  };
  const [isPrinting, setIsPrinting] = useState(false);
  const cashDiscount = () => {
    const disCount =
      (postData.itemList.map((j) => +j.amount).reduce((a, b) => a + b, 0) *
        (postData.discountRate ? postData.discountRate : "")) /
      100;
    return disCount;
  };
  const totalCgst = () => {
    const total =
      (postData.cgstRate *
        postData?.itemList
          ?.map((i) => i.amount - cashDiscount() || 0)
          .reduce((a, b) => +a + +b, 0)) /
      100;
    return total;
  };
  const totalSgst = () => {
    const total =
      (postData.sgstRate *
        postData?.itemList
          ?.map((i) => i.amount - cashDiscount() || 0)
          .reduce((a, b) => +a + +b, 0)) /
      100;
    return total;
  };
  const totalIgst = () => {
    const total =
      (postData.igstRate *
        postData?.itemList
          ?.map((i) => i.amount - cashDiscount() || 0)
          .reduce((a, b) => +a + +b, 0)) /
      100;
    return total;
  };
  const totalTcs = () => {
    if (getStockBalance() < 5000000) {
      return 0;
    } else {
      const total = (postData.tcsPer * finalTotalAmount()) / 100;
      return total;
    }
  };
  const getHsn = (x) => {
    const hsn = upajList.filter((i) => i.yieldName === x)[0]?.hsnCode;
    return hsn;
  };
  const propFarmFn = () => {
    getFarm();
  };
  const propCustomerFn = () => {
    getSaleParty();
  };
  const propBrokerFn = () => {
    getSaleBroker();
  };
  const propMarkFn = () => {
    getMark();
  };
  const propGodownFn = () => {
    getGodown();
  };
  const propBrandFn = () => {
    getBrand();
  };
  const propBardanaMarkFn = () => {
    getBardanaMark();
  };
  const propTransporterFn = () => {
    getTransporter();
  };
  const propProduceFn = () => {
    getUpaj();
  };
  const propUnderGropuFn = () => {
    getUnderGroup();
  };
  const getStockBalance = () => {
    const newList = list
      .filter((i) => i.party === postData.party)
      .map((j) => j.lastAmount)
      .reduce((a, b) => +a + +b, 0);
    return newList;
  };
  const finalTotalAmount = () => {
    const total =
      postData?.itemList?.map((j) => +j.amount).reduce((a, b) => a + b, 0) -
      cashDiscount() +
      (postData.advanceFreight ? +postData.advanceFreight : 0) +
      totalCgst() +
      totalSgst() +
      totalIgst();
    return isNaN(total) ? 0 : total;
  };
  return (
    <div>
      {isAppProduce && (
        <div
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
            produceList={upajList}
          />
        </div>
      )}
      {isAppBrand && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddBrand1
            setIsAppBrand={setIsAppBrand}
            propBrandFn={propBrandFn}
            brandList={brandList}
          />
        </div>
      )}
      {isAppBardanaMark && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <AddBardanaMark1
            setIsAppBardanaMark={setIsAppBardanaMark}
            propBardanaMarkFn={propBardanaMarkFn}
            bardanaList={bardanaList}
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
      {isAppBroker && (
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
          <AddBrokerSaiyyad1
            setIsAppBroker={setIsAppBroker}
            propBrokerFn={propBrokerFn}
            brokerList={brokerList}
          />
        </div>
      )}
      {isAppCustomer && (
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
          <AddPartySaiyyad1
            setIsAppCustomer={setIsAppCustomer}
            propCustomerFn={propCustomerFn}
            propUnderGropuFn={propUnderGropuFn}
            partyList={partyList}
            brokerList={brokerList}
            underGroupList={underGroupList}
          />
        </div>
      )}
      {isAppTransporter && (
        <div
          className="table-responsive scrollhide"
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 120,
          }}
        >
          <AddTransporter
            setIsAppTransporter={setIsAppTransporter}
            propTransporterFn={propTransporterFn}
            transporterList={transporterList}
            brokerList={brokerList}
            underGroupList={underGroupList}
          />
        </div>
      )}

      {isTransport && (
        <div
          className="table-responsive scrollhide"
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <div className="layout-wrapper layout-content-navbar">
              <div className="layout-container">
                <div className="layout-page">
                  <div className="container-xxl flex-grow-q container-p-y">
                    {/* Content */}
                    {/* Collapsible Section */}
                    <div className="row my-2">
                      <div className="col">
                        {/* <h6> Collapsible Section </h6> */}
                        <div className="accordion">
                          {/* Delivery Address */}
                          <div className="card accordion-item">
                            <div
                              id="collapseDeliveryAddress"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingDeliveryAddress"
                              data-bs-parent="#collapsibleSection"
                            >
                              {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                              <div className="accordion-body">
                                <div className="row g-3">
                                  <div className="col-md-12">
                                    <div className="accordion-body">
                                      <div className="row g-1">
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              माल पाने वाले का नाम
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-five"}
                                                onKeyUp={handleKeyUp}
                                                ref={five}
                                                value={postData.party}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              पता
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-six"}
                                                onKeyUp={handleKeyUp}
                                                ref={six}
                                                value={postData.partyAddress}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              पिन कोड
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-seven"}
                                                onKeyUp={handleKeyUp}
                                                ref={seven}
                                                value={postData.partyPinCode}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              शहर
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-eight"}
                                                onKeyUp={handleKeyUp}
                                                ref={eight}
                                                value={postData.partyCity}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              राज्य
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-nine"}
                                                onKeyUp={handleKeyUp}
                                                ref={nine}
                                                value={postData.partyState}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              GSTIN
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-ten"}
                                                onKeyUp={handleKeyUp}
                                                ref={ten}
                                                value={postData.partyGstin}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <b>ट्रांसपोर्ट डिटेल्स </b>

                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              <label
                                                style={{
                                                  color: "green",
                                                  fontWeight: "bolder",
                                                  fontSize: 13,
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  setIsAppTransporter(true)
                                                }
                                              >
                                                +
                                              </label>
                                              &nbsp; ट्रांसपोर्टर
                                            </label>
                                            <div className="col-sm-8">
                                              <select
                                                id={"input-eleven"}
                                                onKeyUp={handleKeyUp}
                                                ref={eleven}
                                                value={postData.transporterName}
                                                onChange={(e) => {
                                                  twelve.current.focus();
                                                  setPostData({
                                                    ...postData,
                                                    transporterName:
                                                      e.target.value,
                                                  });
                                                }}
                                                type="text"
                                                className="form-select"
                                              >
                                                <option selected value={""}>
                                                  --Select--
                                                </option>
                                                {transporterList?.map((i) => (
                                                  <option>{i.partyName}</option>
                                                ))}
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              ट्रक नं०
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-twelve"}
                                                onKeyUp={handleKeyUp}
                                                ref={twelve}
                                                value={postData.truckNo}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    truckNo: e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              ड्राइवर का नाम
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-thirteen"}
                                                onKeyUp={handleKeyUp}
                                                ref={thirteen}
                                                value={postData.driverName}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    driverName: e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              ड्राइवर लाइसेंस नं०
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-fourteen"}
                                                onKeyUp={handleKeyUp}
                                                ref={fourteen}
                                                value={postData.driverLicenceNo}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    driverLicenceNo:
                                                      e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              ड्राइवर मोबाइल नं०
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-fifteen"}
                                                onKeyUp={handleKeyUp}
                                                ref={fifteen}
                                                value={postData.driverMobileNo}
                                                onChange={(e) => {
                                                  if (
                                                    e.target.value < 10000000000
                                                  ) {
                                                    setPostData({
                                                      ...postData,
                                                      driverMobileNo:
                                                        e.target.value,
                                                    });
                                                  }
                                                }}
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              बिल्टी नं०
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-sixteen"}
                                                onKeyUp={handleKeyUp}
                                                ref={sixteen}
                                                value={postData.biltiNo}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    biltiNo: e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              कॉन्ट्रैक्ट नं०
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-seventeen"}
                                                onKeyUp={handleKeyUp}
                                                ref={seventeen}
                                                value={postData.contractNo}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    contractNo: e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              अनुज्ञा नं०
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-eightteen"}
                                                onKeyUp={handleKeyUp}
                                                ref={eightteen}
                                                value={postData.anugyaNo}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    anugyaNo: e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <label
                                              className="col-sm-3 col-form-label text-sm-end"
                                              htmlFor="collapsible-Party"
                                            >
                                              Eway Bill No.
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                id={"input-nineteen"}
                                                onKeyUp={handleKeyUp}
                                                ref={nineteen}
                                                value={postData.ewayBillNo}
                                                onChange={(e) =>
                                                  setPostData({
                                                    ...postData,
                                                    ewayBillNo: e.target.value,
                                                  })
                                                }
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 text-center">
                              <button
                                ref={twenty}
                                onClick={() => {
                                  twentytwo.current.focus();
                                  setIsTransport(false);
                                }}
                                type="submit"
                                className="btn btn-success me-sm-3 me-1"
                              >
                                Save
                              </button>

                              <button
                                onClick={() => setIsTransport(false)}
                                className="btn btn-info"
                              >
                                Back
                              </button>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout-overlay layout-menu-toggle" />
              {/* Drag Target Area To SlideIn Menu On Small Screens */}
              <div className="drag-target" />
            </div>
          </div>
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
      {isPrinting ? (
        <div style={{ backgroundColor: "white", color: "black" }}>
          <br />
          <div
            style={{
              height: 1100,
              backgroundColor: "white",
              width: "80%",
              border: "1px solid black",
              marginLeft: "10%",
            }}
          >
            <div
              style={{
                height: 40,
                width: "100%",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <span style={{ fontSize: 22, fontWeight: "bold" }}>
                Bill Of Supply
              </span>
              <span style={{ fontSize: 15, position: "absolute", right: 10 }}>
                (ORIGINAL FOR RECIPIENT)
              </span>
            </div>

            <div
              style={{
                height: 400,
                width: "100%",
                border: "1px solid black",
                display: "flex",
              }}
            >
              <div
                style={{ height: 400, width: "50%", border: "1px solid black" }}
              >
                <div
                  style={{
                    height: 150,
                    width: "100%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                    lineHeight: "140%",
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {postData.billingFarm}
                  </span>
                  <br />
                  <span style={{ fontSize: 13 }}>
                    {" "}
                    {
                      farmList.filter(
                        (i) => i.farmName === postData?.billingFarm
                      )[0]?.address
                    }
                  </span>
                  <br />
                  <div
                    style={{
                      fontSize: 13,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "25%", lineHeight: "140%" }}>
                      <span>StateName</span>
                      <br />
                      <span>GSTIN</span>
                      <br />
                      <span>Contact No.</span>
                      <br />
                      <span>Email</span>
                      <br />
                      <span>TAN No.</span>
                      <br />
                    </div>
                    <div style={{ width: "5%", lineHeight: "140%" }}>
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                    </div>
                    <div style={{ width: "70%", lineHeight: "140%" }}>
                      <span>
                        {
                          farmList.filter(
                            (i) => i.farmName === postData?.billingFarm
                          )[0]?.state
                        }
                        , Code :
                        {
                          tin.filter(
                            (i) =>
                              i.sn ===
                              farmList.filter(
                                (i) => i.farmName === postData?.billingFarm
                              )[0]?.state
                          )[0]?.tin
                        }
                        {
                          farmList.filter(
                            (i) => i.farmName === postData?.billingFarm
                          )[0]?.stateCode
                        }
                      </span>
                      <br />
                      <span>
                        {
                          farmList.filter(
                            (i) => i.farmName === postData?.billingFarm
                          )[0]?.gstin
                        }
                      </span>
                      <br />
                      <span>
                        {
                          farmList.filter(
                            (i) => i.farmName === postData?.billingFarm
                          )[0]?.mobileNo1
                        }
                      </span>
                      <br />
                      <span>
                        {
                          farmList.filter(
                            (i) => i.farmName === postData?.billingFarm
                          )[0]?.email
                        }
                      </span>
                      <br />
                      <span>
                        {
                          farmList.filter(
                            (i) => i.farmName === postData?.billingFarm
                          )[0]?.tanNo
                        }
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: 150,
                    width: "100%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                    lineHeight: "140%",
                  }}
                >
                  <span style={{ fontSize: 12 }}>Consignee</span>
                  <br />
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    {postData.party}
                  </span>
                  <br />
                  <span style={{ fontSize: 11 }}>
                    {
                      partyList.filter((i) => i.partyName === postData.party)[0]
                        ?.street
                    }
                  </span>
                  <br />
                  <div
                    style={{
                      fontSize: 13,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "25%", lineHeight: "140%" }}>
                      <span>StateName</span>
                      <br />
                      <span>Contact No.</span>
                      <br />
                      <span>GSTIN</span>
                      <br />
                    </div>
                    <div style={{ width: "5%", lineHeight: "140%" }}>
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                    </div>
                    <div style={{ width: "70%", lineHeight: "140%" }}>
                      <span>
                        {
                          partyList.filter(
                            (i) => i.partyName === postData.party
                          )[0]?.state
                        }
                        , Code :{" "}
                        {
                          tin.filter(
                            (i) =>
                              i.sn ===
                              partyList.filter(
                                (i) => i.partyName === postData.party
                              )[0]?.state
                          )[0]?.tin
                        }
                      </span>
                      <br />
                      <span>
                        {
                          partyList.filter(
                            (i) => i.partyName === postData.party
                          )[0]?.whatsAppNo
                        }
                      </span>
                      <br />
                      <span>
                        {
                          partyList.filter(
                            (i) => i.partyName === postData.party
                          )[0]?.gst
                        }
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: 100,
                    width: "100%",
                    paddingLeft: 10,
                    lineHeight: "110%",
                  }}
                >
                  <span style={{ fontSize: 12 }}>Shipping</span>
                  <br />
                  <span style={{ fontSize: 11, fontWeight: "bold" }}>
                    {postData.party}
                  </span>
                  <br />
                  <span style={{ fontSize: 13 }}>
                    {
                      partyList.filter((i) => i.partyName === postData.party)[0]
                        ?.street
                    }
                  </span>
                  <br />
                  <div
                    style={{
                      fontSize: 13,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "25%", lineHeight: "140%" }}>
                      <span>GSTIN</span>
                      <br />
                      <span>StateName</span>
                      <br />
                    </div>
                    <div style={{ width: "5%", lineHeight: "140%" }}>
                      <span>:</span>
                      <br />
                      <span>:</span>
                      <br />
                    </div>
                    <div style={{ width: "70%", lineHeight: "140%" }}>
                      <span>
                        {
                          partyList.filter(
                            (i) => i.partyName === postData.party
                          )[0]?.gst
                        }
                      </span>
                      <br />
                      <span>
                        {
                          partyList.filter(
                            (i) => i.partyName === postData.party
                          )[0]?.state
                        }
                        , Code :
                        {
                          tin.filter(
                            (i) =>
                              i.sn ===
                              partyList.filter(
                                (i) => i.partyName === postData.party
                              )[0]?.state
                          )[0]?.tin
                        }
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: 400,
                  width: "50%",
                  border: "1px solid black",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    borderRight: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Invoice / Bill no.</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {yy}-{yy + 1 - 2000}/
                    {postData.billingFarm?.trim() === "SAIYYAD TRADERS"
                      ? "ST"
                      : ""}
                    {postData.billingFarm?.trim() === "SUNRISE FOODS"
                      ? "SUN"
                      : ""}
                    {postData.billingFarm?.trim() ===
                    "SADBHAWANA FOODS AND FLOUR MILL"
                      ? "SB"
                      : ""}
                    {postData.billingFarm?.trim() === "S R AGRO" ? "SR" : ""}
                    {postData.billingFarm?.trim() === "S M FOODS" ? "SM" : ""}
                    {postData.billingFarm?.trim() === "STAR TRADERS"
                      ? "STAR"
                      : ""}
                    -{billNo < 10 ? `0${billNo}` : billNo}
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Date</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {ddmmyy(postData.date)}
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                    borderRight: "1px solid black",
                  }}
                >
                  <span>Mandi Licence</span>
                  <br />
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    {
                      farmList.filter(
                        (i) => i.farmName === postData?.billingFarm?.trim()
                      )[0]?.mandiLicenceNo
                    }
                    /
                    {
                      farmList.filter(
                        (i) => i.farmName === postData?.billingFarm?.trim()
                      )[0]?.manNo
                    }
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>FSSAI</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {
                      farmList.filter(
                        (i) => i.farmName === postData?.billingFarm?.trim()
                      )[0]?.fssai
                    }
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "100%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Transport</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {postData.transporterName}
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                    borderRight: "1px solid black",
                  }}
                >
                  <span>Vehicle No.</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>{postData.truckNo}</span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Mandi NOC No.</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}></span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "100%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Broker</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>{postData.broker}</span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                    borderRight: "1px solid black",
                  }}
                >
                  <span>Contract No.</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {postData.contractNo}
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>EWay Bill No.</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {postData.ewayBillNo}
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                    borderRight: "1px solid black",
                  }}
                >
                  <span>Freight Per Qt.</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Rs {postData?.freightRate ? postData?.freightRate : 0} /-
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderBottom: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Total Freight</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Rs {Math.round(totalFreight())} /-
                  </span>
                </div>
                <div
                  style={{
                    height: 49,
                    width: "50%",
                    borderRight: "1px solid black",
                    paddingLeft: 10,
                  }}
                >
                  <span>Advance</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Rs {postData?.advanceFreight ? postData?.advanceFreight : 0}{" "}
                    /-
                  </span>
                </div>
                <div style={{ height: 49, width: "50%", paddingLeft: 10 }}>
                  <span>To Pay</span>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Rs {Math.round(totalFreight() - postData.advanceFreight)} /-
                  </span>
                </div>{" "}
              </div>
            </div>

            <div
              style={{
                height: 330,
                width: "100%",
                border: "1px solid black",
                borderBottom: "3px solid black",
              }}
            >
              <div
                style={{
                  height: 40,
                  width: "100%",
                  borderBottom: "3px solid black ",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: "4%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 12 }}>S No.</span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "28%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 12 }}>Description of Goods</span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "10%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 12 }}> HSN Code</span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "10%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 12 }}>GST rate</span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "12%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                    lineHeight: "100%",
                  }}
                >
                  <span style={{ fontSize: 12 }}>
                    Quantity <br />
                    (Bags/Pckg.)
                  </span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "16%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 12 }}>Rate Per Qt</span>
                </div>
                <div style={{ height: 40, width: "16%", textAlign: "center" }}>
                  <span style={{ fontSize: 12 }}>Amount</span>
                </div>
              </div>
              <div
                style={{
                  height: 250,
                  width: "100%",
                  borderBottom: "3px solid black",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: 250,
                    width: "4%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {postData.itemList.map((i, n) => (
                    <>
                      <span>{n + 1}</span>
                      <br />
                    </>
                  ))}
                </div>
                <div
                  style={{
                    height: 250,
                    width: "28%",
                    borderRight: "3px solid black",
                    paddingLeft: 10,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: 175 }}>
                    {postData.itemList.map((i) => (
                      <>
                        <span style={{ fontWeight: "bold" }}>
                          {i.produceName}
                        </span>
                        <br />
                        <span>{i.brand}</span>
                        <br />
                      </>
                    ))}
                  </div>
                  <div
                    style={{
                      height: 75,
                      width: "98%",
                      lineHeight: "100%",
                      textAlign: "end",
                    }}
                  >
                    {postData.advanceFreight &&
                      postData.advanceFreight !== 0 && (
                        <>
                          <b style={{ fontSize: 13 }}>Freight(Ad.)</b>
                          <br />
                        </>
                      )}
                    {postData.igstRate && postData.igstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>IGST</b>
                        <br />
                      </>
                    )}
                    {postData.discountRate && postData.discountRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>Discount</b>
                        <br />
                      </>
                    )}
                    {postData.cgstRate && postData.cgstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>CGST</b>
                        <br />
                      </>
                    )}
                    {postData.sgstRate && postData.sgstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>SGST</b>
                        <br />
                      </>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    height: 250,
                    width: "10%",
                    borderRight: "3px solid black",
                    textAlign: "center",
                    paddingRight: 10,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {postData.itemList.map((i) => (
                    <>
                      <span>{getHsn(i.produceName)}</span>
                      <br />
                    </>
                  ))}
                </div>
                <div
                  style={{
                    height: 250,
                    width: "10%",
                    borderRight: "3px solid black",
                    textAlign: "end",
                    paddingRight: 10,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: 175 }}>
                    {postData.itemList.map((i) => (
                      <>
                        <span>
                          {" "}
                          {+postData.sgstRate +
                            +postData.cgstRate +
                            +postData.igstRate}{" "}
                          %
                        </span>
                        <br />
                        <br />
                      </>
                    ))}
                  </div>
                  <div
                    style={{
                      height: 75,
                      width: "98%",
                      lineHeight: "100%",
                      textAlign: "end",
                    }}
                  >
                    {postData.advanceFreight &&
                      postData.advanceFreight !== 0 && (
                        <>
                          <b style={{ fontSize: 13 }}>
                            {postData.advanceFreight}
                          </b>
                          <br />
                        </>
                      )}
                    {postData.igstRate && postData.igstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>{postData.igstRate}%</b>
                        <br />
                      </>
                    )}
                    {postData.discountRate && postData.discountRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>{postData.discountRate}%</b>
                        <br />
                      </>
                    )}
                    {postData.cgstRate && postData.cgstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>{postData.cgstRate}%</b>
                        <br />
                      </>
                    )}
                    {postData.sgstRate && postData.sgstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>{postData.sgstRate}%</b>
                        <br />
                      </>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    height: 250,
                    width: "12%",
                    borderRight: "3px solid black",
                    textAlign: "end",
                    paddingRight: 10,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {postData.itemList.map((i) => (
                    <>
                      <span style={{ fontWeight: "bold" }}>{i.weight} Qt</span>

                      <span>
                        {i.bag}/{i.admitWeight}
                      </span>
                    </>
                  ))}
                </div>

                <div
                  style={{
                    height: 250,
                    width: "16%",
                    borderRight: "3px solid black",
                    textAlign: "end",
                    paddingRight: 10,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  {postData.itemList.map((i) => (
                    <>
                      <span>{i.ratePerQuantal}.00</span>
                      <br />
                    </>
                  ))}
                </div>
                <div
                  style={{
                    height: 250,
                    width: "18%",
                    textAlign: "end",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div style={{ height: 150 }}>
                    {postData.itemList.map((i) => (
                      <>
                        <span style={{ fontWeight: "bold" }}>
                          {i.amount.toFixed(2)}
                        </span>
                        <br />
                        <br />
                      </>
                    ))}
                  </div>
                  <div
                    style={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "black",
                    }}
                  ></div>
                  <div
                    style={{
                      height: 100,
                      width: "96%",
                      lineHeight: "100%",
                      textAlign: "end",
                    }}
                  >
                    <>
                      <b style={{ fontSize: 13 }}>
                        {" "}
                        {postData.itemList
                          .map((i) => i.amount)
                          .reduce((a, b) => +a + +b, 0)
                          ?.toFixed(2)}
                      </b>
                      <br />
                      <br />
                    </>

                    {postData.advanceFreight && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>
                          {postData.advanceFreight}
                        </b>
                        <br />
                      </>
                    )}
                    {postData.igstRate && postData.igstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>{totalIgst().toFixed(2)}</b>
                        <br />
                      </>
                    )}
                    {postData.discountRate && postData.discountRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>
                          -{cashDiscount().toFixed(2)}
                        </b>
                        <br />
                      </>
                    )}
                    {postData.cgstRate && postData.cgstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>{totalCgst().toFixed(2)}</b>
                        <br />
                      </>
                    )}
                    {postData.sgstRate && postData.sgstRate !== "0" && (
                      <>
                        {" "}
                        <b style={{ fontSize: 13 }}>
                          {+totalSgst().toFixed(2)}
                        </b>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: 40,
                  width: "100%",
                  borderBottom: "3px solid black ",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: "32%",
                    borderRight: "3px solid black",
                    textAlign: "end",
                    paddingRight: 15,
                  }}
                >
                  <span>Total</span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "32%",
                    borderRight: "3px solid black",
                    textAlign: "end",
                    paddingRight: 15,
                    lineHeight: "100%",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {postData.itemList
                      .map((i) => i.weight)
                      .reduce((a, b) => +a + +b, 0)}{" "}
                    Qt
                  </span>
                  <br />
                  <span>
                    {postData.itemList
                      .map((i) => i.bag)
                      .reduce((a, b) => +a + +b, 0)}{" "}
                    Bag(s)
                  </span>
                </div>
                <div
                  style={{
                    height: 40,
                    width: "16%",
                    textAlign: "end",
                    paddingRight: 10,
                    borderRight: "3px solid black",
                  }}
                ></div>
                <div style={{ height: 40, width: "16%", textAlign: "end" }}>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    ₹ {finalTotalAmount().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                height: 80,
                width: "100%",
                borderBottom: "3px solid black",
                paddingLeft: 10,
              }}
            >
              <span>Amount Chargeable (In Words)</span>
              <br />
              <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                {coverter.toWords(finalTotalAmount())} Only
              </span>
              <br />
              <span>Narration</span>
            </div>
            <div
              style={{
                height: 70,
                width: "100%",
                borderBottom: "3px solid black",
                lineHeight: "100%",
                paddingLeft: 10,
              }}
            >
              <div style={{ width: "100%", textAlign: "center" }}>
                : Bank Details :
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {
                  farmList.filter(
                    (i) => i.farmName === postData?.billingFarm?.trim()
                  )[0]?.bank
                }
              </span>
              <br />
              <span style={{ fontSize: 13, fontWeight: "bold" }}>
                Account No. :{" "}
                {
                  farmList.filter(
                    (i) => i.farmName === postData?.billingFarm?.trim()
                  )[0]?.accountNo
                }
              </span>
              <br />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                IFSC Code :{" "}
                {
                  farmList.filter(
                    (i) => i.farmName === postData?.billingFarm?.trim()
                  )[0]?.ifsc
                }
              </span>
              <br />
            </div>

            <div
              style={{
                height: 130,
                width: "100%",
                borderBottom: "3px solid black",
                display: "flex",
              }}
            >
              <div
                style={{
                  height: 130,
                  width: "70%",
                  borderRight: "3px solid black",
                  paddingLeft: 10,
                  lineHeight: "110%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  : Terms & Coonditions :
                </div>
                <span>GOODS ONCE SOLD WILL NOT BE TAKEN BACK.</span>
                <br />
                <span>
                  WE ARE NOT RESPONSIBLE AFTER TAKING RECEIPT OG GOODS.
                </span>
                <br />
                <span>
                  ALL CLAIM SHALL BE MADE IN WRITING SO AS TO REACH THE SELLER
                  NOT LATER THAN 7 DAYS.
                </span>
                <br />
                <span>E. & O.E. SUBJECT TO RATLAM JURISDICTION</span>
              </div>
              <div
                style={{
                  height: 130,
                  width: "30%",
                  textAlign: "center",
                  lineHeight: "110%",
                }}
              >
                <span style={{ fontSize: 11 }}>
                  Certified that the particulars given above are true and
                  correct
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    textTransform: "capitalize",
                  }}
                >
                  For : {postData.billingFarm}
                </span>
                <br />
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>Authorised Signatory</span>
              </div>
            </div>

            <div
              style={{
                height: 50,
                width: "100%",
                borderBottom: "3px solid black",
                paddingLeft: 10,
                paddingRight: 10,
                lineHeight: "90%",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: 10 }}>
                Disclaimer : GOODS SOLD UNDER THIS INVOICE BEAR UNREGISTERED
                BRAND NAME & I/WE HEREBY VOLUNTARILY FOREGO ANY ACTIONABLE CLAIM
                OR ENFORCEABLE RIGHT IN RESPACT OF THESE BRAND NAMES - EXEMPT
                SUPPLY UNDER GST CHARGEABLE TO 0% TAX.
              </span>
            </div>
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            {" "}
            <span>This is a computer generated invoice.</span>{" "}
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
                      <h4>Customer Info</h4>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: 200,
                          height: 30,
                          alignItems: "center",
                        }}
                      >
                        <label>हिंदी</label>
                        <div
                          onClick={() => setIsHindi(!isHindi)}
                          style={{
                            height: 20,
                            width: 50,
                            borderRadius: 10,
                            border: "2px solid grey",
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
                              border: "2px solid grey",
                              marginLeft: isHindi ? 28 : 0,
                              transition: ".5s",
                            }}
                          ></button>
                        </div>
                        <label>English</label>
                      </div>
                      <button className="btn btn-outline-success">Sale</button>
                      <button className="btn btn-outline-success">SOS</button>
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
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Sauda"
                                    >
                                      Date
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Sauda"
                                    >
                                      दिनांक
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <input
                                      autoFocus
                                      id={"input-one"}
                                      onKeyUp={handleKeyUp}
                                      ref={one}
                                      type="date"
                                      value={postData.date}
                                      onChange={(e) =>
                                        setPostData({
                                          ...postData,
                                          date: e.target.value,
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

                              <div className="col-md-3">
                                <div className="row">
                                  {isHindi ? (
                                    <label
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
                                      &nbsp; Billing Farm
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Sauda"
                                    >
                                      <label
                                        style={{
                                          color: "green",
                                          fontWeight: "bolder",
                                          fontSize: 13,
                                          cursor: "pointer",
                                        }}
                                        onClick={() => setIsAppFarm(true)}
                                      >
                                        +
                                      </label>
                                      &nbsp; बिलिंग फार्म{" "}
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <select
                                      id={"input-two"}
                                      onKeyUp={handleKeyUp}
                                      ref={two}
                                      value={postData.billingFarm}
                                      onChange={(e) => {
                                        three.current.focus();
                                        getBillNo(e.target.value);
                                        setPostData({
                                          ...postData,
                                          billingFarm: e.target.value,
                                        });
                                      }}
                                      className="form-select"
                                    >
                                      <option selected disabled value={""}>
                                        --select--
                                      </option>
                                      {farmList.map((i) => (
                                        <option>{i.farmName}</option>
                                      ))}
                                    </select>
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

                              <div className="col-md-3">
                                <div className="row">
                                  {isHindi ? (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Broker"
                                    >
                                      Customer
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Broker"
                                    >
                                      <label
                                        style={{
                                          color: "green",
                                          fontWeight: "bolder",
                                          fontSize: 13,
                                          cursor: "pointer",
                                        }}
                                        onClick={() => setIsAppCustomer(true)}
                                      >
                                        +
                                      </label>
                                      कस्टमर
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <select
                                      id={"input-three"}
                                      onKeyUp={handleKeyUp}
                                      ref={three}
                                      value={postData.party}
                                      onChange={(e) => {
                                        four.current.focus();
                                        setproduceId("");
                                        setproduceName("");
                                        setPostData({
                                          ...postData,
                                          party: e.target.value,
                                          partyAddress: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].street,
                                          broker: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].broker,
                                          partyPinCode: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].pincode,
                                          partyCity: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].city,
                                          partyState: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].state,
                                          supplyPoint: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].state,
                                          turnOver: getStockBalance(),
                                          partyGstin: partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0].gst,
                                          tcs:
                                            partyList.filter(
                                              (i) =>
                                                i.partyName === e.target.value
                                            )[0].taxType === "TCS"
                                              ? "0.10"
                                              : 0,
                                        });
                                        setPartyId(
                                          partyList.filter(
                                            (i) =>
                                              i.partyName === e.target.value
                                          )[0]._id
                                        );
                                      }}
                                      className=" form-select"
                                      data-allow-clear="true"
                                    >
                                      <option selected disabled value={""}>
                                        --select--
                                      </option>
                                      {partyList.map((i) => (
                                        <option>{i.partyName}</option>
                                      ))}
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

                              <div className="col-md-3">
                                <div className="row">
                                  <div className="col-sm-12"></div>
                                  <div className="col-sm-12">
                                    <button
                                      id={"input-four"}
                                      onKeyUp={handleKeyUp}
                                      ref={four}
                                      onClick={() => setIsTransport(true)}
                                      className="btn btn-success"
                                    >
                                      Add Transport Detail
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="row">
                                  {isHindi ? (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Party"
                                    >
                                      <label
                                        style={{
                                          color: "green",
                                          fontWeight: "bolder",
                                          fontSize: 13,
                                          cursor: "pointer",
                                        }}
                                        onClick={() => setIsAppBroker(true)}
                                      >
                                        +
                                      </label>
                                      Broker
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Party"
                                    >
                                      <label
                                        style={{
                                          color: "green",
                                          fontWeight: "bolder",
                                          fontSize: 13,
                                          cursor: "pointer",
                                        }}
                                        onClick={() => setIsAppBroker(true)}
                                      >
                                        +
                                      </label>
                                      दलाल
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <select
                                      id={"input-twentyone"}
                                      onKeyUp={handleKeyUp}
                                      ref={twentyone}
                                      value={postData.broker}
                                      onChange={(e) =>
                                        setPostData({
                                          ...postData,
                                          broker: e.target.value,
                                        })
                                      }
                                      className=" form-select"
                                    >
                                      <option value={""}>--Select--</option>
                                      <option>No Broker</option>
                                      {brokerList.map((i) => (
                                        <option>{i.brokerName}</option>
                                      ))}
                                    </select>
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
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Sauda"
                                    >
                                      Bill No
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="collapsible-Sauda"
                                    >
                                      बिल न.{" "}
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <input
                                      disabled
                                      value={billNo}
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
                              <div className="col-md-3">
                                <div className="row">
                                  {isHindi ? (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="cd"
                                    >
                                      Stock Balance
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="cd"
                                    >
                                      स्टॉक बैलेंस{" "}
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <input
                                      disabled
                                      value={getStockBalance().toFixed(2)}
                                      className="form-control"
                                    ></input>
                                    <span
                                      style={{
                                        display:
                                          validator &
                                          (postData?.cashDiscount === "")
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
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="cd"
                                    >
                                      Supply Point
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="cd"
                                    >
                                      आपूर्ति स्थल{" "}
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <input
                                      disabled
                                      value={postData.supplyPoint}
                                      onChange={(e) =>
                                        setPostData({
                                          ...postData,
                                          supplyPoint: e.target.value,
                                        })
                                      }
                                      className="form-select"
                                    ></input>
                                    <span
                                      style={{
                                        display:
                                          validator &
                                          (postData?.cashDiscount === "")
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
                                  <label
                                    className="col-sm-3 col-form-label text-sm-end"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    ID
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      id={"input-twentytwo"}
                                      onKeyUp={handleKeyUp}
                                      ref={twentytwo}
                                      value={produceId}
                                      style={{
                                        borderColor:
                                          validator & (produceId === "")
                                            ? "red"
                                            : "",
                                      }}
                                      onChange={(e) => {
                                        setproduceId(e.target.value);
                                        setproduceName(
                                          upajList.filter(
                                            (i) => i.yieldId === e.target.value
                                          )[0]?.yieldName
                                        );
                                        
                                      }}
                                      className="form-control"
                                    ></input>
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

                              <div className="col-md-3">
                                <div className="row">
                                  {isHindi ? (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="cd"
                                    >
                                      <label
                                        style={{
                                          color: "green",
                                          fontWeight: "bolder",
                                          fontSize: 13,
                                          cursor: "pointer",
                                        }}
                                        onClick={() => setIsAppProduce(true)}
                                      >
                                        +
                                      </label>
                                      &nbsp; Produce Name
                                    </label>
                                  ) : (
                                    <label
                                      className="col-sm-3 col-form-label text-sm-end"
                                      htmlFor="cd"
                                    >
                                      <label
                                        style={{
                                          color: "green",
                                          fontWeight: "bolder",
                                          fontSize: 13,
                                          cursor: "pointer",
                                        }}
                                        onClick={() => setIsAppProduce(true)}
                                      >
                                        +
                                      </label>
                                      &nbsp; उपज का नाम
                                    </label>
                                  )}
                                  <div className="col-sm-9">
                                    <input
                                      value={produceName}
                                      onChange={(e) =>
                                        setPostData({
                                          ...postData,
                                          produceName: e.target.value,
                                        })
                                      }
                                      className="form-control"
                                    ></input>
                                    <span
                                      style={{
                                        display:
                                          validator &
                                          (postData?.cashDiscount === "")
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
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: 1,
                            backgroundColor: "black",
                          }}
                        ></div>
                        {/* <h5 class="card-header">Sale Form</h5> */}

                        <div className="accordion-body">
                          <div className="row g-3">
                            <div className="col-md-2">
                              <div className="col">
                                {isHindi ? (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppMark(true)}
                                    >
                                      +
                                    </label>
                                    Mark
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppMark(true)}
                                    >
                                      +
                                    </label>
                                    मार्क
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <select
                                    style={{
                                      borderColor:
                                        validator & (mark === "") ? "red" : "",
                                    }}
                                    id={"input-twentythree"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentythree}
                                    value={mark}
                                    onChange={(e) => {
                                      setMark(e.target.value);
                                      twentyfour.current.focus();
                                    }}
                                    className="form-select"
                                  >
                                    <option disabled selected value={""}>
                                      --select--
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppGodown(true)}
                                    >
                                      +
                                    </label>
                                    Godown
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppGodown(true)}
                                    >
                                      +
                                    </label>
                                    गोदाम
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <select
                                    id={"input-twentyfour"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentyfour}
                                    value={godown}
                                    onChange={(e) => {
                                      setGodown(e.target.value);
                                      twentyfive.current.focus();
                                    }}
                                    className="form-select"
                                    style={{
                                      borderColor:
                                        validator & (godown === "")
                                          ? "red"
                                          : "",
                                    }}
                                  >
                                    <option value={""} selected disabled>
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppBrand(true)}
                                    >
                                      +
                                    </label>
                                    Brand
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppBrand(true)}
                                    >
                                      +
                                    </label>
                                    ब्रांड{" "}
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <select
                                    id={"input-twentyfive"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentyfive}
                                    value={brand}
                                    onChange={(e) => {
                                      setBrand(e.target.value);
                                      twentysix.current.focus();
                                    }}
                                    className="form-select"
                                    style={{
                                      borderColor:
                                        validator & (brand === "") ? "red" : "",
                                    }}
                                  >
                                    <option disabled selected value={""}>
                                      --Select--
                                    </option>
                                    {brandList.map((i) => (
                                      <option>{i.brandName}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="col">
                                {isHindi ? (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppBardanaMark(true)}
                                    >
                                      +
                                    </label>
                                    Bardana Mark
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    <label
                                      style={{
                                        color: "green",
                                        fontWeight: "bolder",
                                        fontSize: 13,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setIsAppBardanaMark(true)}
                                    >
                                      +
                                    </label>
                                    बारदाना मार्क{" "}
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <select
                                    id={"input-twentysix"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentysix}
                                    value={bardanaMark}
                                    onChange={(e) => {
                                      setBardanaMark(e.target.value);
                                      twentyseven.current.focus();
                                    }}
                                    className="form-select"
                                    style={{
                                      borderColor:
                                        validator & (bardanaMark === "")
                                          ? "red"
                                          : "",
                                    }}
                                  >
                                    <option>--Select--</option>
                                    {bardanaList.map((i) => (
                                      <option>{i.bardanaMark}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="col">
                                {isHindi ? (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Bag
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    बोरे
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    id={"input-twentyseven"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentyseven}
                                    value={bag}
                                    type="number"
                                    onChange={(e) => setBag(e.target.value)}
                                    className="form-control"
                                    style={{
                                      borderColor:
                                        validator & (bag === "") ? "red" : "",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="col">
                                {isHindi ? (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    admit Weight(KG)
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    भर्ती
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    id={"input-twentyeight"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentyeight}
                                    value={admitWeight}
                                    type="number"
                                    style={{
                                      borderColor:
                                        validator & (admitWeight === "")
                                          ? "red"
                                          : "",
                                    }}
                                    onChange={(e) =>
                                      setAdmitWeight(e.target.value)
                                    }
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="col">
                                {isHindi ? (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Katta
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    कट्टा
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    disabled
                                    type="number"
                                    value={katta}
                                    onChange={(e) => setKatta(e.target.value)}
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Weight
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    वजन
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    type="number"
                                    disabled
                                    value={weight11()}
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Actual Weight
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    वास्तविक वजन
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    id={"input-twentynine"}
                                    onKeyUp={handleKeyUp}
                                    ref={twentynine}
                                    type="number"
                                    value={weight11()}
                                    onChange={(e) =>
                                      setActualWeight(e.target.value)
                                    }
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Bardana Weight(GM)
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    बारदाना वजन
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    id={"input-thirty"}
                                    onKeyUp={handleKeyUp}
                                    ref={thirty}
                                    type="number"
                                    value={bardanaWeight}
                                    onChange={(e) =>
                                      setBardanaWeight(e.target.value)
                                    }
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Total Weight
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    नेट वजन{" "}
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    type="number"
                                    disabled
                                    value={netWeight()}
                                    onChange={(e) =>
                                      setTotalWeight(e.target.value)
                                    }
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Rate(Per QTL)
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    रेट प्र. क़{" "}
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    id={"input-thirtyone"}
                                    onKeyUp={handleKeyUp}
                                    ref={thirtyone}
                                    type="number"
                                    style={{
                                      borderColor:
                                        validator & (ratePerQuantal === "")
                                          ? "red"
                                          : "",
                                    }}
                                    value={ratePerQuantal}
                                    onChange={(e) =>
                                      setRatePerQuantal(e.target.value)
                                    }
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    Amount
                                  </label>
                                ) : (
                                  <label
                                    className="col-sm-12 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  >
                                    मूल्य
                                  </label>
                                )}

                                <div className="col-sm-12">
                                  <input
                                    type="number"
                                    disabled
                                    value={totalRate().toFixed(2)}
                                    className="form-control"
                                  />
                                  <span
                                    style={{
                                      display:
                                        validator & (postData?.saudaDate === "")
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
                              <div className="col">
                                {isHindi ? (
                                  <label
                                    className="col-sm-9 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  ></label>
                                ) : (
                                  <label
                                    className="col-sm-2 col-form-label text-sm-center"
                                    htmlFor="collapsible-Sauda"
                                  ></label>
                                )}

                                <div className="col-sm-5">
                                  <button
                                    id={"input-thirtytwo"}
                                    onKeyUp={handleKeyUp}
                                    ref={thirtytwo}
                                    style={{ width: "100%" }}
                                    onClick={() => addItemtoList()}
                                    className="col-sm-3 btn btn-success"
                                  >
                                    {listIndex !== "" ? "Update" : "Add"}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="table-responsive">
                              <table className="table table-striped table-bordered">
                                <thead>
                                  <tr className="table-warning">
                                    <th>मार्क</th>
                                    <th>गोदाम</th>
                                    <th>बारदाना मार्क</th>
                                    <th>बोरे</th>
                                    <th>भर्ती</th>
                                    <th>कट्टा</th>
                                    <th>वजन</th>
                                    <th>वास्तविक बारदाना </th>
                                    <th>बारदाना बारदाना</th>
                                    <th>नेट वजन</th>
                                    <th>दर</th>
                                    <th>मूल्य</th>
                                    <th>ACTION</th>
                                  </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                  {postData.itemList?.map((i, n) => (
                                    <tr>
                                      <td>{i.mark}</td>
                                      <td>{i.godown}</td>
                                      <td>{i.bardanaMark}</td>
                                      <td>{i.bag}</td>
                                      <td>{i.admitWeight}</td>
                                      <td>{i.katta}</td>
                                      <td>{i.weight}</td>
                                      <td>{i.actualWeight}</td>
                                      <td>{i.bardanaWeight}</td>
                                      <td>{i.totalWeight}</td>
                                      <td>{i.ratePerQuantal}</td>
                                      <td>{i.amount}</td>

                                      <td>
                                        <div className="">
                                          <a>
                                            <i
                                              onClick={() =>
                                                setPostData({
                                                  ...postData,
                                                  itemList:
                                                    postData.itemList.filter(
                                                      (x, y) => y !== n
                                                    ),
                                                })
                                              }
                                              className="bx bx-trash me-1"
                                            />
                                          </a>
                                          <a>
                                            <i
                                              onClick={() => {
                                                setListIndex(n);
                                                setMark(i.mark);
                                                setGodown(i.godown);
                                                setBag(i.bag);
                                                setBrand(i.brand);
                                                setBardanaMark(i.bardanaMark);
                                                setAdmitWeight(i.admitWeight);
                                                setKatta(i.katta);
                                                setBardanaWeight(
                                                  i.bardanaWeight
                                                );
                                                setRatePerQuantal(
                                                  i.ratePerQuantal
                                                );
                                                setproduceId(i.produceId);
                                                setproduceName(i.produceName);
                                                setCgst(i.cgst);
                                                setSgst(i.sgst);
                                                setIgst(i.igst);
                                              }}
                                              className="bx bx-edit me-1"
                                            />
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}

                                  <tr className="table-success">
                                    <td>
                                      <h6>कुल</h6>
                                    </td>

                                    <td></td>
                                    <td></td>
                                    <td>
                                      {postData.itemList
                                        .map((j) => +j.bag)
                                        .reduce((a, b) => a + b, 0)}
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                      {postData.itemList
                                        .map((j) => +j.actualWeight)
                                        .reduce((a, b) => a + b, 0)}
                                    </td>
                                    <td></td>
                                    <td>
                                      {postData.itemList
                                        .map((j) => +j.totalWeight)
                                        .reduce((a, b) => a + b, 0)}
                                    </td>
                                    <td></td>
                                    <td>
                                      {postData.itemList
                                        .map((j) => +j.amount)
                                        .reduce((a, b) => a + b, 0)}
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
                                  <div className="col-md-6">
                                    <div className="row">
                                      {isHindi ? (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          Cash Discount %
                                        </label>
                                      ) : (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          डिस्काउंट %{" "}
                                        </label>
                                      )}
                                      <div className="col-sm-4">
                                        <input
                                          id={"input-thirtythree"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtythree}
                                          type="number"
                                          value={postData.discountRate}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              discountRate: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                        />
                                        <span
                                          style={{
                                            display:
                                              validator &
                                              (postData?.quantity === "")
                                                ? ""
                                                : "none",
                                            color: "red",
                                          }}
                                        >
                                          * feild is required
                                        </span>
                                      </div>
                                      <div className="col-sm-4">
                                        <input
                                          type="number"
                                          value={cashDiscount().toFixed(2)}
                                          disabled
                                          className="form-control"
                                        />
                                        <span
                                          style={{
                                            display:
                                              validator &
                                              (postData?.quantity === "")
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
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          Total Amount
                                        </label>
                                      ) : (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          {" "}
                                          कुल योग{" "}
                                        </label>
                                      )}
                                      <div className="col-sm-9">
                                        <input
                                          disabled
                                          type="number"
                                          value={(
                                            postData?.itemList
                                              ?.map((j) => +j.amount)
                                              .reduce((a, b) => a + b, 0) -
                                            cashDiscount()
                                          ).toFixed(2)}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              totalSum: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className="col-md-4">
                                    <div className="row">
                                      <label className="col-sm-3 col-form-label text-sm-end">
                                        CGST
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          id={"input-thirtyfour"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtyfour}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              cgstRate: e.target.value,
                                            })
                                          }
                                          value={postData.cgstRate}
                                          type="number"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-sm-5">
                                        <input
                                          disabled
                                          type="number"
                                          value={totalCgst().toFixed(2)}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row">
                                      <label className="col-sm-3 col-form-label text-sm-end">
                                        SGST
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          id={"input-thirtyfive"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtyfive}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              sgstRate: e.target.value,
                                            })
                                          }
                                          value={postData.sgstRate}
                                          type="number"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-sm-5">
                                        <input
                                          disabled
                                          type="number"
                                          value={totalSgst().toFixed(2)}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row">
                                      <label className="col-sm-3 col-form-label text-sm-end">
                                        IGST
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          id={"input-thirtysix"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtysix}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              igstRate: e.target.value,
                                            })
                                          }
                                          value={postData.igstRate}
                                          disabled={
                                            postData.supplyPoint ===
                                            "Madhya Pradesh"
                                          }
                                          type="number"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-sm-5">
                                        <input
                                          disabled
                                          value={totalIgst().toFixed(2)}
                                          type="number"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="row">
                                      {isHindi ? (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          Freight Rate
                                        </label>
                                      ) : (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          भाड़ा दर
                                        </label>
                                      )}
                                      <div className="col-sm-9">
                                        <input
                                          id={"input-thirtyseven"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtyseven}
                                          type="number"
                                          value={postData.freightRate}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              freightRate: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row">
                                      {isHindi ? (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          Total Freight भाड़ा
                                        </label>
                                      ) : (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          कुल भाड़ा
                                        </label>
                                      )}
                                      <div className="col-sm-9">
                                        <input
                                          disabled
                                          type="number"
                                          value={totalFreight().toFixed(2)}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row">
                                      {isHindi ? (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          Freight (Advance)
                                        </label>
                                      ) : (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          भाड़ा (एडवांस)
                                        </label>
                                      )}
                                      <div className="col-sm-9">
                                        <input
                                          id={"input-thirtyeight"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtyeight}
                                          type="number"
                                          value={postData.advanceFreight}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              advanceFreight: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="row">
                                      <label className="col-sm-3 col-form-label text-sm-end">
                                        TCS
                                      </label>
                                      <div className="col-sm-4">
                                        <input
                                          id={"input-thirtynine"}
                                          onKeyUp={handleKeyUp}
                                          ref={thirtynine}
                                          disabled={getStockBalance() < 5000000}
                                          value={postData.tcsPer}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              tcsPer: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          type="number"
                                        />
                                      </div>
                                      <div className="col-sm-5">
                                        <input
                                          disabled
                                          value={totalTcs().toFixed(2)}
                                          type="number"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="row">
                                      <label className="col-sm-3 col-form-label text-sm-end">
                                        Round Off
                                      </label>
                                      <div className="col-sm-9">
                                        <input
                                          id={"input-fourty"}
                                          onKeyUp={handleKeyUp}
                                          ref={fourty}
                                          type="number"
                                          value={(
                                            Math.round(
                                              finalTotalAmount() + totalTcs()
                                            ) -
                                            (finalTotalAmount() + totalTcs())
                                          ).toFixed(2)}
                                          onChange={(e) =>
                                            setPostData({
                                              ...postData,
                                              roundOff: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="row">
                                      {isHindi ? (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          Final Amount
                                        </label>
                                      ) : (
                                        <label className="col-sm-3 col-form-label text-sm-end">
                                          अंतिम राशि{" "}
                                        </label>
                                      )}
                                      <div className="col-sm-9">
                                        <input
                                          id={"input-fourtyone"}
                                          onKeyUp={handleKeyUp}
                                          ref={fourtyone}
                                          type="number"
                                          value={Math.round(
                                            finalTotalAmount() + totalTcs()
                                          )}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4 text-center">
                                    <a>
                                      <button
                                        id={"input-fourtytwo"}
                                        onKeyUp={handleKeyUp}
                                        ref={fourtytwo}
                                        disabled={!isSubmit}
                                        type="submit"
                                        className="btn btn-success me-sm-3 me-1"
                                        onClick={() => {
                                          updateBroker();
                                          setIsPrinting(true);
                                          setTimeout(() => {
                                            window.print();
                                          }, 100);
                                          setTimeout(() => {
                                            {
                                              postSaleData();
                                              setIsPrinting(false);
                                            }
                                          }, 100);
                                        }}
                                      >
                                        Submit
                                      </button>
                                    </a>
                                    <button
                                      type="reset"
                                      className="btn btn-label-secondary"
                                      onClick={() => navigate("/Mandisale")}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Drag Target Area To SlideIn Menu On Small Screens */}
        </div>
      )} 
    </div>
  );
}

export default AddMandiSale;
