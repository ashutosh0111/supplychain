//SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0 ;

import "../Ownership/Ownable.sol" ;
import "../Access/Manufacturer.sol";
import "../Access/Distributor.sol";
//import "../Access/Wholesaler.sol";
import "../Access/Retailer.sol";
import "../Access/Consumer.sol";

contract  Supplychain is 
    Ownable,
    Manufacturer , 
    Distributor,
   
    Retailer, 
    Consumer {
        address owner ;
        uint256 productCode;
        uint256 stockUnit;
        mapping ( uint256 =>Item ) items ;
       // mapping(uint256 => txBlocks) itemsHistory;
        enum state{
        ProducedByManufacturer, // 0
        ForSaleByManufacturer, // 1
        PurchasedByDistributor, // 2
        ShippedByManufacturer, // 3
        ReceivedByDistributor , // 4
        
        ForSaleByDistributor, // 5
        PurchasedByRetailer,
        ShippedByDistributor, // 7
        
       
       
        
        ReceivedByRetailer, // 12
        ForSaleByRetailer, // 13
        PurchasedByConsumer, // 14
        ShippedByRetailer , //15
        ReceivedByConsumer //16

                
        

    }
        state constant defaultState = state.ProducedByManufacturer;
        

        struct Item {
            uint256 stockUnit;
            uint256 productCode;
            uint256 expiryDate;
            uint256 manufacturingDate;
            address ownerID;
            address manufacturerID;
            uint256 productID;
            string productInfo;
            state itemState ;
            uint256 productPrice;
            uint256 productSliced;
            address distributorID;
           // address wholesalerID;
            address retailerID;
            address consumerID;
           uint256 productQuantity;
          //  uint256 buyedQuantity;
           





        }

      //   struct txBlocks { 
      //   uint256 MTD; // block of ManufacturerToDistributor 
      //   uint256 DTW; // block of DistributorToWholesaler
      //   uint256 WTR ;// block of WholesalerTo Retailer 
      //   uint256 RTC; // block of RetailerToConsumer
       
      // }

      

      // event  ProducedByManufacturer(uint256 productCode ); // 0
     // event  ForSaleByManufacturer (uint256 productCode );// 1
     // event  PurchasedByDistributor (uint256 productCode ); // 2
     // event  ShippedByManufacturer (uint256 productCode ); // 3
     // event  ReceivedByDistributor (uint256 productCode ); // 4
    
     // event  ForSaleByDistributor(uint256 productCode ); // 5
    //  event  PurchasedByWholesaler (uint256 productCode ); // 6
     // event  ShippedByDistributor (uint256 productCode ); // 7
     // event  ReceivedByWholesaler (uint256 productCode ); // 8
    //  event  ForSaleByWholesaler (uint256 productCode ); // 9
     // event  PurchasedByRetailer (uint256 productCode ); // 10
    //  event ShippedByWholesaler(uint256 productCode); //11
     // event  ReceivedByRetailer (uint256 productCode ); // 12
     // event  ForSaleByRetailer (uint256 productCode );// 13
     // event  PurchasedByConsumer  (uint256 productCode );// 14
    //  event ShippedByRetailer(uint256 productCode);//15
    // event ReceivedByConsumer(uint256 productCode);//16


            // Define a modifer that checks to see if _msgSender() == owner of the contract
    modifier only_Owner() {
        require(_msgSender() == owner);
        _;
    }

    // Define a modifer that verifies the Caller
    modifier verifyCaller(address _address) {
        require(_msgSender() == _address);
        _;
    }

    // Define a modifier that checks if the paid amount is sufficient to cover the price
    modifier paidEnough(uint256 _price) {
        require(msg.value >= _price);
        _;
    }

    // Define a modifier that checks the price and refunds the remaining balance
    modifier checkValue(uint256 _productCode, address payable addressToFund) {
        uint256 _price = items[_productCode].productPrice;
        uint256 amountToReturn = msg.value - _price;
        addressToFund.transfer(amountToReturn);
        _;
    }

      modifier _ProducedByManufacturer (uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ProducedByManufacturer) ;
          _;
        } //0
         
        
        modifier _ForSaleByManufacturer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ForSaleByManufacturer) ;
          _;
        }  //1 
        modifier _PurchasedByDistributor(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.PurchasedByDistributor) ;
          _;
        } // 2
        modifier _ShippedByManufacturer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ShippedByManufacturer) ;
          _;
        }  // 3
        modifier _ReceivedByDistributor(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ReceivedByDistributor) ;
          _;
        }  // 4

        // modifier _ProcessedByDistributor(uint256 _ProductCode){
        //   require (items[ _ProductCode].itemState == state.ProcessedByDistributor);
        //   _;
        // }// 5
        modifier _ForSaleByDistributor(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ForSaleByDistributor) ;
          _;
        }  // 5
        // modifier _PurchasedByWholesaler (uint256 _ProductCode){
        //   require(items[_ProductCode].itemState == state.PurchasedByWholesaler) ;
        //   _;
        // }  // 6
        modifier _ShippedByDistributor(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ShippedByDistributor) ;
          _;
        }  // 7
        // modifier _ReceivedByWholesaler(uint256 _ProductCode){
        //   require(items[_ProductCode].itemState == state.ReceivedByWholesaler) ;
        //   _;
        // }  // 8

        // modifier _ProcessedByWholesaler(uint256 _ProductCode){
        //   require (items[ _ProductCode].itemState == state.ProcessedByWholesaler);
        //   _;
        // } //10

        //  modifier _ForSaleByWholesaler(uint256 _ProductCode){
        //   require(items[_ProductCode].itemState == state.ForSaleByWholesaler) ;
        //   _;
        // }  // 9

        modifier _PurchasedByRetailer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.PurchasedByRetailer) ;
          _;
        }  // 10

        // modifier _ShippedByWholesaler(uint256 _ProduceCode){
        //   require(items[_ProduceCode].itemState == state.ShippedByWholesaler );
        //   _;
        // } //11
        modifier _ReceivedByRetailer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ReceivedByRetailer) ;
          _;
        }  // 12

        //  modifier _ProcessedByRetailer(uint256 _ProductCode){
        //   require (items[ _ProductCode].itemState == state.ProcessedByRetailer);
        //   _;
        // } // 13

        modifier _ForSaleByRetailer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ForSaleByRetailer) ;
          _;
        }  // 13
        modifier _PurchasedByConsumer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.PurchasedByConsumer) ;
          _;
        }  // 14
        modifier _ShippedByRetailer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ShippedByRetailer);
          _;
        }//15
        modifier _ReceivedByConsumer(uint256 _ProductCode){
          require(items[_ProductCode].itemState == state.ReceivedByConsumer) ;
          _;
        }  // 16


        modifier _CheckQuantity(uint _ProductQuantityForSale  ,  uint256 _QuantityInStock){
          require(_ProductQuantityForSale  <= _QuantityInStock );
          _;
        }

        constructor()
                  public 
                  payable {        
                  owner = _msgSender();        
                  stockUnit = 1;        
                productCode = 1;    
          }
   
        

        function kill() public {
        if (_msgSender() == owner) {
            address payable ownerAddressPayable = _make_payable(owner);
            selfdestruct(ownerAddressPayable);
        }
    }

    

    // allows you to convert an address into a payable address
    function _make_payable(address x) internal pure returns (address payable) {
        return payable(address(uint160(x)));
    }
    
// struct Directory {
//     address myAddress;
//     string myInfo;
// }

struct ForAddingOnSupplychain {
    address myAddress;
    uint8 myRole;
  //  uint104 myLisenceNo;
}

 //Directory[] public directory;
 
ForAddingOnSupplychain[]  foraddingonsupplychain;

function AddMe(
    address myAddress,
    uint8 myRole
   // uint104 myLisenceNo
   
)
public
payable 
 {
    //directory.push(Directory(myAddress, myInfo));
    foraddingonsupplychain.push(ForAddingOnSupplychain(myAddress, myRole));
}



    struct ItemProduced{
      address producedby;
      uint256 producedcode;
      //string producedinfo;
    }

    ItemProduced[] itemproduced;

  struct ItemOnSale{
    uint256 onsaleproduct;
    address onsaleby;
    uint256 onsalequantity;
    uint256 onsaleprice;

  }
  ItemOnSale[] itemonsalebymanufacturer ;
  ItemOnSale[] itemonsalebydistributor ;
  //ItemOnSale[] itemonsalebywholesaler ;
  ItemOnSale[] itemonsalebyretailer;


  struct ItemPurchased{
    uint256 purchasedproduct;
    address purchasedby ;
    uint256 timestamp;

  }
  ItemPurchased[] itempurchasedbydistributor;
  //ItemPurchased[] itempurchasedbywholesaler;
  ItemPurchased[] itempurchasedbyretailer;
  ItemPurchased[] itempurchasedbyconsumer;


  struct ItemShipped{
    uint256 shippedproduct;
    address shippedby ;
    address shippedto;
    uint256 timestamp;
  }  

  ItemShipped[] itemshippedbymanufacturer;  
 // ItemShipped[] itemshippedbywholesaler;  
  ItemShipped[] itemshippedbydistributor;  
  ItemShipped[] itemshippedbyretailer;  
   


  struct ItemReceived{
    uint256 receivedproduct;
    address receivedby ;
    uint256 timestamp;
  }
  ItemReceived[] itemreceivedbydistributor;
 // ItemReceived[] itemreceivedbywholesaler;
  ItemReceived[] itemreceivedbyretailer;
  ItemReceived[] itemreceivedbyconsumer;


        
        // 0th sate of supply chain produced by manufacturer 

        function ProduceItemByManufacturer(
          uint256 _productCode,
          string memory  _productInfo,
          uint256    _expiryDate,
          uint256   _manufacturingDate,
          uint256 _price,
          uint256 _productQuantity 
        )
        public 
        onlyManufacturer
        {
         
          address distributorID;
         // address wholesalerID;
          address retailerID;
          address consumerID;
          
          Item memory newProduce;
          newProduce.manufacturerID = _msgSender();
          newProduce.stockUnit = stockUnit;
          newProduce.productCode = _productCode;
          newProduce.ownerID = _msgSender();
          newProduce.productInfo = _productInfo;
          newProduce.productPrice = _price;
          newProduce.productID = _productCode+stockUnit;
          newProduce.itemState = defaultState;
          newProduce.expiryDate = _expiryDate;
          newProduce.manufacturingDate= _manufacturingDate;
          newProduce.productQuantity =_productQuantity;


         // newProduce.wholesalerID = wholesalerID;
          newProduce.distributorID = distributorID;
          newProduce.retailerID = retailerID;
          newProduce.consumerID = consumerID;
          newProduce.productSliced = 0;
          
          items[_productCode] = newProduce ;
          //uint256  placeholder;
          //txBlocks memory txBlock;
          
          // txBlock.MTD = placeholder; // assign placeholder values
          // txBlock.DTW = placeholder;
          // txBlock.WTR = placeholder;
          // txBlock.RTC = placeholder;
          // itemsHistory[productCode] = txBlock;

          stockUnit++;
          itemproduced.push(ItemProduced(_msgSender() , _productCode ));
        // emit ProducedByManufacturer(productCode);
        }

         // 1st stage  sell by manufacturer 

        function sellItemByManufacturer(uint256 _productCode, uint256 _price , uint256  _productQuantity)
        public
        onlyManufacturer 
         _ProducedByManufacturer (_productCode)// check items state has been produced
        verifyCaller(items[_productCode].ownerID) // check _msgSender() is owner
    {
        items[_productCode].itemState = state.ForSaleByManufacturer;
        items[_productCode].productPrice = _price;
        items[_productCode].productQuantity =  _productQuantity;

        itemonsalebymanufacturer.push(ItemOnSale(_productCode ,_msgSender() ,  _productQuantity , _price));
       // emit ForSaleByManufacturer(_productCode);
    }


    function purchaseItemByDistributor(uint256 _productCode)
        public
        payable
        onlyDistributor // check _msgSender() belongs to distributorRole
        _ForSaleByManufacturer(_productCode) // check items state is for ForSaleByManufacturer
        paidEnough(items[_productCode].productPrice) // check if distributor sent enough Ether for product
       checkValue(_productCode, payable(_msgSender())) // check if overpayed return remaing funds back to _msgSender()
    {
        address payable ownerAddressPayable = _make_payable(
            items[_productCode].manufacturerID
        ); 
        ownerAddressPayable.transfer(items[_productCode].productPrice); // transfer funds from distributor to manufacturer
        items[_productCode].ownerID = _msgSender(); // update owner
        items[_productCode].distributorID = _msgSender(); // update distributor
        items[_productCode].itemState = state.PurchasedByDistributor; // update state
       // itemsHistory[_productCode].MTD = block.number; // add block number

       itempurchasedbydistributor.push(ItemPurchased( _productCode, _msgSender() , block.timestamp));
     //   emit PurchasedByDistributor(_productCode);
    }



   /* 3rd step in supplychain
  Allows Manufacturer  to ship product purchased by distributor
  */
    function shippedItemByManufacturer(uint256 _productCode)
        public
        payable
        onlyManufacturer
       _PurchasedByDistributor(_productCode)
        verifyCaller(items[_productCode].manufacturerID) // check _msgSender() is origin Manufatcurer 
    {
        items[_productCode].itemState = state.ShippedByManufacturer; // update state

        itemshippedbymanufacturer.push(ItemShipped(_productCode , _msgSender() ,items[_productCode].distributorID , block.timestamp ));
       // emit ShippedByManufacturer(_productCode);

        }

/*
         4th step in supplychain
  Allows distributor to receive product
  */
    function receivedItemByDistributor(uint256 _productCode)
        public
        onlyDistributor // check _msgSender() belongs to DistributorRole
        _ShippedByManufacturer(_productCode)
        verifyCaller(items[_productCode].ownerID) // check _msgSender() is owner
    {
        items[_productCode].itemState = state.ReceivedByDistributor; // update state

        itemreceivedbydistributor.push(ItemReceived(_productCode , _msgSender() , block.timestamp));
      //  emit ReceivedByDistributor(_productCode);
    }

    // // 5th stage is processing by distributer into slices 

    // function processedItemByDistributor(uint256 _productCode , uint256 slices)
    // public
    //  onlyDistributor 
    //  _ReceivedByDistributor(_productCode)
    //  verifyCaller (items[_productCode].ownerID){
    //    items[_productCode].itemState = state.ProcessedByDistributor;
    //    items[_productCode].productSliced = slices;
    //    emit ProcessedByDistributor(_productCode);


    //  }

     // 5th stage sell item by distributor 

     function sellItemByDistributor(uint256 _productCode, uint _price , uint256 _productQuantity)
     public 
     onlyDistributor
     _ReceivedByDistributor(_productCode)
      _CheckQuantity( _productQuantity, items[_productCode].productQuantity  )
     
     verifyCaller(items[_productCode].ownerID){
       items[_productCode].itemState = state.ForSaleByDistributor;
       items[_productCode].productPrice = _price;
       items[_productCode].productQuantity =  _productQuantity;
      itemonsalebydistributor.push(ItemOnSale(_productCode ,_msgSender() ,  _productQuantity , _price));

   //    emit ForSaleByDistributor(_productCode);
     }

  

     // 10th stage item purchased by retailer 
      function purchaseItemByRetailer(uint256 _productCode)
        public
        payable
        onlyRetailer
        _ForSaleByDistributor(_productCode)
        paidEnough(items[_productCode].productPrice) 
       // checkValue(_productCode, payable(_msgSender()))
       {

        address payable ownerAddressPayable = _make_payable(
            items[_productCode].distributorID
        ); 
        ownerAddressPayable.transfer(items[_productCode].productPrice); 
        items[_productCode].ownerID = _msgSender(); // update owner
        items[_productCode].retailerID = _msgSender();
        items[_productCode].itemState = state.PurchasedByRetailer; // update state
        //itemsHistory[_productCode].WTR = block.number; // add block number
       itempurchasedbyretailer.push(ItemPurchased( _productCode, _msgSender() , block.timestamp));

      //  emit PurchasedByRetailer(_productCode);
    }

    function shippedItemByDistributor(uint256 _productCode)
        public
        payable
        onlyDistributor
       _PurchasedByRetailer(_productCode)
        verifyCaller(items[_productCode].distributorID) // check _msgSender()  
    {
        items[_productCode].itemState = state.ShippedByDistributor; // update state

        itemshippedbydistributor.push(ItemShipped(_productCode , _msgSender() ,items[_productCode].retailerID , block.timestamp ));

      //  emit ShippedByDistributor(productCode);

        }

        

    // 12th satge recieved by retailer 
    function receivedItemByRetailer(uint256 _productCode)
        public
        onlyRetailer 
        _ShippedByDistributor(_productCode)
        verifyCaller(items[_productCode].ownerID) // check _msgSender() is owner
    {
        items[_productCode].itemState =state.ReceivedByRetailer; // update state
        itemreceivedbyretailer.push(ItemReceived(_productCode , _msgSender() , block.timestamp));
  
      //  emit ReceivedByRetailer(_productCode);
    }

   

     // 13th stage sell item by retailer 
     function sellItemByRetailer (uint256 _productCode, uint _price , uint256 _productQuantity)
     public 
     onlyRetailer
     _ReceivedByRetailer(_productCode)
     _CheckQuantity( _productQuantity, items[_productCode].productQuantity  )

     verifyCaller(items[_productCode].ownerID){
       items[_productCode].itemState = state.ForSaleByRetailer;
       items[_productCode].productPrice = _price;
       items[_productCode].productQuantity =  _productQuantity;

      itemonsalebyretailer.push(ItemOnSale(_productCode ,_msgSender() ,  _productQuantity , _price));

     // emit ForSaleByRetailer(_productCode);
     }

     // 14th stage purchased by  consumer 

      function purchaseItemByConsumer(uint256 _productCode)
        public
        payable
        onlyConsumer 
        _ForSaleByRetailer(_productCode)
        paidEnough(items[_productCode].productPrice) 
        //checkValue(_productCode, payable(_msgSender())) 
        {
        address payable ownerAddressPayable = _make_payable(
            items[_productCode].retailerID
        ); 
        ownerAddressPayable.transfer(items[_productCode].productPrice); 
        items[_productCode].ownerID = _msgSender(); // update owner
        items[_productCode].consumerID = _msgSender();
        items[_productCode].itemState = state.PurchasedByConsumer; // update state
       // itemsHistory[_productCode].RTC= block.number; // add block number

      itempurchasedbyconsumer.push(ItemPurchased( _productCode, _msgSender() , block.timestamp));

     //   emit PurchasedByConsumer(_productCode);
    }

    // 15th stage shipped by retailer

    function shippedItemByRetailer(uint256 _productCode)
        public
        payable
        onlyRetailer 
       _PurchasedByConsumer(_productCode)
        verifyCaller(items[_productCode].retailerID)
    {
        items[_productCode].itemState = state.ShippedByRetailer;

                itemshippedbyretailer.push(ItemShipped(_productCode , _msgSender() ,items[_productCode].consumerID , block.timestamp ));

     //   emit ShippedByRetailer(_productCode);

        }
        

    // 16th satge recieved by Consumer 
    function receivedItemByConsumer(uint256 _productCode)
        public
        onlyConsumer
        _ShippedByRetailer(_productCode)
        verifyCaller(items[_productCode].ownerID) // check _msgSender() is owner
    {
        items[_productCode].itemState =state.ReceivedByConsumer; // update state
                itemreceivedbyconsumer.push(ItemReceived(_productCode , _msgSender() , block.timestamp));

       //  emit ReceivedByConsumer(_productCode);
    }

    // function to retrieve 0
    

    function getItemProduced() public view returns(ItemProduced[] memory ){ 
    return itemproduced;
    }

    // function to retrieve 1

    function getItemOnSaleByManufacturer()  public view returns(ItemOnSale[] memory ){
      return itemonsalebymanufacturer;
    }

    // function to retrieve purachsed product by distributor 
    function getItemPurchasedByDistributor() public view returns (ItemPurchased[] memory){
      return itempurchasedbydistributor;
    }

    // function to get item shgipped by manufacturer 
    function getItemShippedByManufacturer() public view returns (ItemShipped[] memory ){
      return itemshippedbymanufacturer;

    }
 
    function getItemReceivedByDistributor() public  view returns (ItemReceived[] memory ){
      return itemreceivedbydistributor;
    }

    
    function getItemOnSaleByDistributor()  public view returns(ItemOnSale[] memory ){
      return itemonsalebydistributor;
    }

    function getItemPurchasedByRetailer() public view returns (ItemPurchased[] memory){
      return itempurchasedbyretailer;
    }

    
    function getItemShippedByDistributor() public view returns (ItemShipped[] memory ){
      return itemshippedbydistributor;

    }
 
    function getItemReceivedByRetailer() public  view returns (ItemReceived[] memory ){
      return itemreceivedbyretailer;
    }
     

     function getItemOnSaleByRetailer()  public view returns(ItemOnSale[] memory ){
      return itemonsalebyretailer;
    }

    function getItemPurchasedByConsumer() public view returns (ItemPurchased[] memory){
      return itempurchasedbyconsumer;
    }

    
    function getItemShippedByRetailer() public view returns (ItemShipped[] memory ){
      return itemshippedbyretailer;

    }
 
    function getItemReceivedByConsumer() public  view returns (ItemReceived[] memory ){
      return itemreceivedbyconsumer;
    }

    function getAddOnSupplychain() public view returns (ForAddingOnSupplychain[] memory){
      return foraddingonsupplychain ;
    }
    // function getDirectory() public view returns (Directory[] memory){
    //   return directory;
    // }



    // tracking of the product 
    function fetchItemBufferOne(uint256 _productCode )
    public
    view 
    returns (uint256 itemstockUnit ,
    uint256 itemproductCode,
    address ownerID,
    address manufacturerID,
    string memory productInfo,
    uint256 expiryDate,
    uint256 manufacturingDate,
    state itemState
    ) {
      Item memory item = items[_productCode];
      return (

        item.stockUnit,
        item.productCode,
        item.ownerID,
        item.manufacturerID,
        item.productInfo,
        item.expiryDate,
        item.manufacturingDate,
        item.itemState

      );
    }


     function fetchItemBufferTwo(uint256 _productCode)
        public
        view
        returns (
            uint256 itemstockUnit,
            uint256 itemproductCode,
            uint256 productID,
            uint256 productPrice,
            state itemState,
            address distributorID,
            //address wholesalerID,
            address retailerID,
            address consumerID
        )
    {
        // Assign values to the 9 parameters
        Item memory item = items[_productCode];

        return (
            item.stockUnit,
            item.productCode,
            item.productID,
            item.productPrice,
            item.itemState,
            item.distributorID,
         //   item.wholesalerID,
            item.retailerID,
            item.consumerID
        );
    }
    

    

    }