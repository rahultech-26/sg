import React from 'react'
import {HashRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AddParty from './Pages/AddParty'
import EditParty from './Pages/EditParty'
import PartyTabel from './Pages/PartyTabel'
import AddBroker from './Pages/AddBroker'
import EditBroker from './Pages/EditBroker'
import BrokerTabel from './Pages/BrokerTabel'
import MandiPurchase from './Pages/MandiPurchase'
import MandiSale from './Pages/MandiSale'
import PartyPurchase from './Pages/PartyPurchase'
import ThirdPartyPurchase from './Pages/ThirdPartyPurchase'
import AddMandiPurchase from './Pages/AddMandiPurchase'
import EditMandiPurchase from './Pages/EditMandiPurchase'
import ViewMandiPurchase from './Pages/ViewMandiPurchase'
import AddThirdPartyPurchase from './Pages/AddThirdPartyPurchase'
import EditThirdPartyPurchase from './Pages/EditThirdPartyPurchase'
import ViewThirdPartyPurchase from './Pages/ViewThirdPartyPurchase'
import AddPartyPurchase from './Pages/AddPartyPurchase'
import EditPartyPurchase from './Pages/EditPartyPurchase'
import ViewPartyPurchase from './Pages/ViewPartyPurchase'
import AddFarm from './Pages/AddFarm'
import EditFarm from './Pages/EditFarm'
import FarmTable from './Pages/FarmTable'
import AddMandiSale from './Pages/AddMandiSale'
import ProduceTabel from './Pages/ProduceTabel'
import AddProduce from './Pages/AddProduce'
import EditProduce from './Pages/EditProduce'
import AddGodown from './Pages/AddGodown'
import GodownTabel from './Pages/GodownTabel'
import EditGodown from './Pages/EditGodown'
import TulaiTabel from './Pages/TulaiTabel'
import AddTulai from './Pages/AddTulai'
import EditTulai from './Pages/EditTulai'
import BrandTabel from './Pages/BrandTabel'
import AddBrand from './Pages/AddBrand'
import EditBrand from './Pages/EditBrand'
import BankTable from './Pages/BankTable'
import AddBank from './Pages/AddBank'
import EditBank from './Pages/EditBank'
import MarkTable from './Pages/MarkTable'
import AddMark from './Pages/AddMark'
import EditMark from './Pages/EditMark'
import ProduceTypeTable from './Pages/ProduceTypeTable'
import AddProduceType from './Pages/AddProduceType'
import EditProduceType from './Pages/EditProduceType'
import PartySaiyyad from './Pages/PartySaiyyad'
import BrokerSaiyyad from './Pages/BrokerSaiyyad'
import AddPartySaiyyad from './Pages/AddPartySaiyyad'
import AddBrokerSaiyyad from './Pages/AddBrokerSaiyyad'
import EditPartySaiyyad from './Pages/EditPartySaiyyad'
import EditBrokerSaiyyad from './Pages/EditBrokerSaiyyad'
import EditMandiSale from './Pages/EditMandiSale'
import AddBardanaMark from './Pages/AddBardanaMark'
import BardanaMarkTable from './Pages/BardanaMarkTable'
import EditBardanaMark from './Pages/EditBardanaMark'
import Parchi from './Pages/Parchi'
import Parchi1 from './Pages/Parchi1'
import Purchasereport from './Pages/Purchasereport'
import Salereport from './Pages/Salereport'
import Salereportsummary from './Pages/Salereportsummary'
import Parchi2 from './Pages/Parchi2'
import Brand_MarkReport from './Pages/Brand_MarkReport'
import TallyExport from './Pages/TallyExport'
import ParchaseReportDetails from './Pages/ParchaseReportDetails'
import Order from './Pages/Order'
import AddOrder from './Pages/AddOrder'
import Stock from './Pages/StockPurchase'
import AddStock from './Pages/AddStockPurchase'
import Stock1 from './Pages/StockSorting'
import AddStock1 from './Pages/AddStockSorting'
import RoleAdd from './Pages/RoleAdd'
import RoleEdit from './Pages/RoleEdit'
import RoleTable from './Pages/RoleTable'
import Production from './Pages/Production'
import AddProduction from './Pages/AddProduction'
import UserTable from './Pages/UserTable'
import UserRegister from './Pages/UserRegister'
import PktSaleReport from './Pages/PktSaleReport'

function App() {
  return (
    <HashRouter>
      <Routes>
       
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/AddParty' element={<AddParty/>}></Route>
        <Route path='/EditParty' element={<EditParty/>}></Route>
        <Route path='/PartyTabel' element={<PartyTabel/>}></Route>
        <Route path='/AddBroker' element={<AddBroker/>}></Route>
        <Route path='/EditBroker' element={<EditBroker/>}></Route>
        <Route path='/BrokerTabel' element={<BrokerTabel/>}></Route>
        <Route path='/ViewThirdPartyPurchase' element={<ViewThirdPartyPurchase/>}></Route>
        <Route path='/EditThirdPartyPurchase' element={<EditThirdPartyPurchase/>}></Route>
        <Route path='/AddThirdPartyPurchase' element={<AddThirdPartyPurchase/>}></Route>
        <Route path='/ViewPartyPurchase' element={<ViewPartyPurchase/>}></Route>
        <Route path='/EditPartyPurchase' element={<EditPartyPurchase/>}></Route>
        <Route path='/AddPartyPurchase' element={<AddPartyPurchase/>}></Route>
        <Route path='/ViewMandiPurchase' element={<ViewMandiPurchase/>}></Route>
        <Route path='/EditMandiPurchase' element={<EditMandiPurchase/>}></Route>
        <Route path='/AddMandiPurchase' element={<AddMandiPurchase/>}></Route>
        <Route path='/AddMandiSale' element={<AddMandiSale/>}></Route>
        <Route path='/MandiPurchase' element={<MandiPurchase/>}></Route>
        <Route path='/MandiSale' element={<MandiSale/>}></Route>
        <Route path='/PartyPurchase' element={<PartyPurchase/>}></Route>
        <Route path='/ThirdPartyPurchase' element={<ThirdPartyPurchase/>}></Route>
        <Route path='/AddFarm' element={<AddFarm/>}></Route>
        <Route path='/EditFarm' element={<EditFarm/>}></Route>
        <Route path='/FarmTable' element={<FarmTable/>}></Route>
        <Route path='/ProduceTabel' element={<ProduceTabel/>}></Route>
        <Route path='/AddProduce' element={<AddProduce/>}></Route>
        <Route path='/EditProduce' element={<EditProduce/>}></Route>
        <Route path='/AddGodown' element={<AddGodown/>}></Route>
        <Route path='/GodownTabel' element={<GodownTabel/>}></Route>
        <Route path='/EditGodown' element={<EditGodown/>}></Route>
        <Route path='/TulaiTabel' element={<TulaiTabel/>}></Route>
        <Route path='/AddTulai' element={<AddTulai/>}></Route>
        <Route path='/EditTulai' element={<EditTulai/>}></Route>
        <Route path='/BrandTabel' element={<BrandTabel/>}></Route>
        <Route path='/AddBrand' element={<AddBrand/>}></Route>
        <Route path='/EditBrand' element={<EditBrand/>}></Route>
        <Route path='/BankTable' element={<BankTable/>}></Route>
        <Route path='/AddBank' element={<AddBank/>}></Route>
        <Route path='/EditBank' element={<EditBank/>}></Route>
        <Route path='/MarkTable' element={<MarkTable/>}></Route>
        <Route path='/AddMark' element={<AddMark/>}></Route>
        <Route path='/EditMark' element={<EditMark/>}></Route>
        <Route path='/ProduceTypeTable' element={<ProduceTypeTable/>}></Route>
        <Route path='/AddProduceType' element={<AddProduceType/>}></Route>
        <Route path='/EditProduceType' element={<EditProduceType/>}></Route>

        <Route path='/PartySaiyyad' element={<PartySaiyyad/>}></Route>
        <Route path='/BrokerSaiyyad' element={<BrokerSaiyyad/>}></Route>
        <Route path='/AddPartySaiyyad' element={<AddPartySaiyyad/>}></Route>
        <Route path='/AddBrokerSaiyyad' element={<AddBrokerSaiyyad/>}></Route>
        <Route path='/EditPartySaiyyad' element={<EditPartySaiyyad/>}></Route>
        <Route path='/EditBrokerSaiyyad' element={<EditBrokerSaiyyad/>}></Route>
        <Route path='/EditMandiSale' element={<EditMandiSale/>}></Route>
        <Route path='/BardanaMarkTable' element={<BardanaMarkTable/>}></Route>
        <Route path='/AddBardanaMark' element={<AddBardanaMark/>}></Route>
        <Route path='/EditBardanaMark' element={<EditBardanaMark/>}></Route>
        <Route path='/Parchi' element={<Parchi/>}></Route>
        <Route path='/Parchi1' element={<Parchi1/>}></Route>
        <Route path='/Salereport' element={<Salereport/>}></Route>
        <Route path='/Purchasereport' element={<Purchasereport/>}></Route>
        <Route path='/Salereportsummary' element={<Salereportsummary/>}></Route>
        <Route path='/BrandMarkReport' element={<Brand_MarkReport/>}></Route>
        <Route path='/Parchi2' element={<Parchi2/>}></Route>
        <Route path='/TallyExport' element={<TallyExport/>}></Route>
        <Route path='/ParchaseReportDetails' element={<ParchaseReportDetails/>}></Route>
        <Route path='/Order' element={<Order/>}></Route>
        <Route path='/AddOrder' element={<AddOrder/>}></Route>
        <Route path='/Stock' element={<Stock/>}></Route>
        <Route path='/AddStock' element={<AddStock/>}></Route>
        <Route path='/Stock1' element={<Stock1/>}></Route>
        <Route path='/AddStock1' element={<AddStock1/>}></Route>
        <Route path='/RoleAdd' element={<RoleAdd/>}></Route>
        <Route path='/RoleEdit' element={<RoleEdit/>}></Route>
        <Route path='/RoleTable' element={<RoleTable/>}></Route>
        <Route path='/Production' element={<Production/>}></Route>
        <Route path='/AddProduction' element={<AddProduction/>}></Route>
        <Route path='/UserTable' element={<UserTable/>}></Route>
        <Route path='/UserRegister' element={<UserRegister/>}></Route>
        <Route path='/PktSaleReport' element={<PktSaleReport/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App