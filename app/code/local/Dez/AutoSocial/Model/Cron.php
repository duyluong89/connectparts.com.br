<?php
require_once dirname(__FILE__) . '/../facebook/facebook.php';
class Dez_AutoSocial_Model_Cron{
	public function postFacebook(){
        $check_enable = Mage::getStoreConfig("autopostsocial/general/enable");
          if($check_enable){
          $config = array(
            'appId'=>Mage::getStoreConfig("autopostsocial/config/appid"),
            'secret'=>Mage::getStoreConfig("autopostsocial/config/secret"),
            'fileUpload'=>false
            );

          //get random product post
          $products = Mage::getModel('catalog/product')->getCollection();
          //$products->addAttributeToSelect("*"); //feel free to add any other attribues you need.
          // Mage::getSingleton('catalog/product_status')->addVisibleFilterToCollection($products);
          // Mage::getSingleton('catalog/product_visibility')->addVisibleInCatalogFilterToCollection($products); 
          $products->getSelect()->order('RAND()');
          $products->getSelect()->limit(1);
          $product = null;
          if($products->count()){
            foreach ($products as $key => $_product) {
              $product = $_product;
            }
          }
           //end
  		    //Post facebook

          if($products->count() AND $product){
            $product  = Mage::getModel("catalog/product")->load($product->getId());
            $picture = Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA) . 'catalog/product'.$product->getImage();
            $fb = new Facebook($config);
            $params = array(
              "access_token" => Mage::getStoreConfig("autopostsocial/config/accesstoken"), // see: https://developers.facebook.com/docs/facebook-login/access-tokens/
              "message" => $product->getName(),
              "link" => Mage::getBaseUrl().$product->getUrlKey().'.html',
              "picture" =>$picture,
              "name" => $product->getName(),
              "caption" => Mage::getBaseUrl(),
              "description" => trim(strip_tags($product->getDescription()))
            );
            try {
              $ret = $fb->api('me/feed', 'POST', $params);
              echo 'Successfully posted to Facebook';
            } catch(Exception $e) {
              echo $e->getMessage();
            }
          }
          
         }


	}
	public function postTwitter(){
		//do something
	}
}