<?php
/**
* @author Amasty Team
* @copyright Amasty
* @package Amasty_Conf
*/
class Amasty_Zoom_Block_Catalog_Product_View_Media extends Mage_Catalog_Block_Product_View_Media
{
    public function __construct()
    {
        parent::__construct();
        $this->setTemplate('amzoom/media.phtml');
    }
    
    protected function _toHtml($status=false)
    {
         if(!$status) {
            $_product = $this->getProduct();
            if(Mage::getStoreConfig('amzoom/zoom/enable') || Mage::getStoreConfig('amzoom/lightbox/enable')) {
                $this->setTemplate('amzoom/media.phtml');    
            }
            return $this->_toHtml(true);
        }
        if (!$this->getTemplate()) {
            return '';
        }
        $html = $this->renderView();
        return $html;
    }
}