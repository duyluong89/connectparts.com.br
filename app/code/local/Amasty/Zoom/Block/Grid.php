<?php
/**
* @author Amasty Team
* @copyright Copyright (c) 2013 Amasty (http://www.amasty.com)
* @package Amasty_Social
*/
class Amasty_Zoom_Block_Grid extends Mage_Core_Block_Template
{
    public function __construct()
    {
        parent::__construct();
        $this->setTemplate('amzoom/grid.phtml');
    }
    
    public function getProductInformation()
    {
        $categoryId = Mage::getSingleton('catalog/layer')->getCurrentCategory()->getId();
        $productCollection = Mage::getModel('catalog/category')->load($categoryId)->getProductCollection();
        $images = $ids = $titles = '';
        $count = 0;
        foreach($productCollection as $product) {
            if($product->isSaleable()){
                $products = Mage::getModel('catalog/product')->load($product->getId());
                $ids    .= $product->getId() . ';';
                $images .= Mage::helper('catalog/image')->init($products, 'small_image') . ';';
                $titles .= $products->getImageLabel() . ';';
                $count++;
            }
        }
        return array($ids, $images, $titles, $count);
    }
}