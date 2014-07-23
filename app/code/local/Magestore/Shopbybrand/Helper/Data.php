<?php

/**
 * Magestore
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magestore.com license that is
 * available through the world-wide-web at this URL:
 * http://www.magestore.com/license-agreement.html
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Magestore
 * @package     Magestore_Shopbybrand
 * @copyright   Copyright (c) 2012 Magestore (http://www.magestore.com/)
 * @license     http://www.magestore.com/license-agreement.html
 */

/**
 * Shopbybrand Helper
 *
 * @category    Magestore
 * @package     Magestore_Shopbybrand
 * @author      Magestore Developer
 */
class Magestore_Shopbybrand_Helper_Data extends Mage_Core_Helper_Abstract {

    const XML_FRONTEND_LINK = 'shopbybrand/frontend/link';

    public function refineUrlKey($urlKey) {
        for($i=0;$i<5;$i++)
        {
            $urlKey = str_replace("  "," ",$urlKey);
        }
        $chars = array(
            'Å '=>'S', 'Å¡'=>'s', 'Ä'=>'Dj', 'Ä‘'=>'dj', 'Å½'=>'Z', 'Å¾'=>'z', 'ÄŒ'=>'C', 'Ä'=>'c', 'Ä†'=>'C', 'Ä‡'=>'c',
            'Ã€'=>'A', 'Ã'=>'A', 'Ã‚'=>'A', 'Ãƒ'=>'A', 'Ã„'=>'A', 'Ã…'=>'A', 'Ã†'=>'A', 'Ã‡'=>'C', 'Ãˆ'=>'E', 'Ã‰'=>'E',
            'ÃŠ'=>'E', 'Ã‹'=>'E', 'ÃŒ'=>'I', 'Ã'=>'I', 'ÃŽ'=>'I', 'Ã'=>'I', 'Ã‘'=>'N', 'Ã’'=>'O', 'Ã“'=>'O', 'Ã”'=>'O',
            'Ã•'=>'O', 'Ã–'=>'O', 'Ã˜'=>'O', 'Ã™'=>'U', 'Ãš'=>'U', 'Ã›'=>'U', 'Ãœ'=>'U', 'Ã'=>'Y', 'Ãž'=>'B', 'ÃŸ'=>'Ss',
            'Ã '=>'a', 'Ã¡'=>'a', 'Ã¢'=>'a', 'Ã£'=>'a', 'Ã¤'=>'a', 'Ã¥'=>'a', 'Ã¦'=>'a', 'Ã§'=>'c', 'Ã¨'=>'e', 'Ã©'=>'e',
            'Ãª'=>'e', 'Ã«'=>'e', 'Ã¬'=>'i', 'Ã­'=>'i', 'Ã®'=>'i', 'Ã¯'=>'i', 'Ã°'=>'o', 'Ã±'=>'n', 'Ã²'=>'o', 'Ã³'=>'o',
            'Ã´'=>'o', 'Ãµ'=>'o', 'Ã¶'=>'o', 'Ã¸'=>'o', 'Ã¹'=>'u', 'Ãº'=>'u', 'Ã»'=>'u', 'Ã½'=>'y', 'Ã½'=>'y', 'Ã¾'=>'b',
            'Ã¿'=>'y', 'Å”'=>'R', 'Å•'=>'r',
        );
        $newUrlKey = strtr($urlKey, $chars);
        $newUrlKey = str_replace(" ","-",$newUrlKey);
        $newUrlKey = htmlspecialchars(strtolower($newUrlKey));
        $newUrlKey = preg_replace('/[^a-zA-Z0-9_ %\[\]\.\(\)%&-]/s', '', $newUrlKey);
        return $newUrlKey;
    }

    public function refineImageName($imageName) {
        for ($i = 0; $i < 5; $i++) {
            $imageName = str_replace("  ", " ", $imageName);
        }
        $imageName = str_replace(" ", "-", $imageName);
        $imageName = strtolower($imageName);

        return $imageName;
    }

    public function getImagePath($brandId) {
        //$brandImagePath = Mage::getBaseDir('media') . DS .'brands' .DS. strtolower(substr($brandName,0,1)).substr(md5($brandName),0,10). $this->refineUrlKey($brandName);
        $brandImagePath = Mage::getBaseDir('media') . DS . 'brands' . DS . $brandId;
        return $brandImagePath;
    }

    public function getImagePathCache($brandId) {
        //$brandImagePathCache = Mage::getBaseDir('media') . DS .'brands' . DS .'cache'. DS . strtolower(substr($brandName,0,1)). substr(md5($brandName),0,10). $this->refineUrlKey($brandName);
        $brandImagePathCache = Mage::getBaseDir('media') . DS . 'brands' . DS . 'cache' . DS . $brandId;
        return $brandImagePathCache;
    }

    public function getThumbnailImagePath($brandId) {
        //$brandThumbnailImagePath = Mage::getBaseDir('media') . DS .'brands' . DS .'thumbnail'. DS . strtolower(substr($brandName,0,1)). substr(md5($brandName),0,10). $this->refineUrlKey($brandName);
        $brandThumbnailImagePath = Mage::getBaseDir('media') . DS . 'brands' . DS . 'thumbnail' . DS . $brandId;
        return $brandThumbnailImagePath;
    }

    public function uploadBrandImage($brandId, $imageFile) {
        $this->createImageFolder($brandId);

        $brandImagePath = $this->getImagePath($brandId);
        $brandImagePathCache = $this->getImagePathCache($brandId);

        $imageName = "";
        $newImageName = "";
        if (isset($imageFile['name']) && $imageFile['name'] != '') {
            try {
                /* Starting upload */
                $imageName = $imageFile['name'];
                $uploader = new Varien_File_Uploader('image');
                $newImageName = $this->refineImageName($imageName);
                // Any extention would work
                $uploader->setAllowedExtensions(array('jpg', 'jpeg', 'gif', 'png'));
                $uploader->setAllowRenameFiles(true);

                $uploader->setFilesDispersion(false);
                $uploader->save($brandImagePath, $newImageName);
                $newImageName = $uploader->getUploadedFileName();
                $fileImg = new Varien_Image($brandImagePath . DS . $newImageName);
                $fileImg->keepAspectRatio(true);
                $fileImg->keepFrame(true);
                $fileImg->keepTransparency(true);
                $fileImg->constrainOnly(false);
                $fileImg->backgroundColor(array(255, 255, 255));

                $fileImg->resize(60, 60);
                $fileImg->save($brandImagePathCache . DS . $newImageName, null);

                /* if($newImageName != $imageName){
                  copy($brandImagePath .DS. $imageName,$brandImagePath .DS.$newImageName);
                  unlink($brandImagePath.DS.$imageName);
                  } */
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
            }

            $imageName = $newImageName;
        }
        return $imageName;
    }

    public function uploadThumbnailImage($brandId, $thumbnailImageFile) {
        $this->createThumbnailImageFolder($brandId);
        $brandImagePathThumbnail = $this->getThumbnailImagePath($brandId);
        $imageName = "";
        $newImageName = "";
        if (isset($thumbnailImageFile['name']) && $thumbnailImageFile['name'] != '') {

            try {
                // Starting upload
                $imageName = $thumbnailImageFile['name'];
                $uploader = new Varien_File_Uploader('thumbnail_image');

                $newImageName = $this->refineImageName($imageName);

                // Any extention would work
                $uploader->setAllowedExtensions(array('jpg', 'jpeg', 'gif', 'png'));
                $uploader->setAllowRenameFiles(true);

                $uploader->setFilesDispersion(false);

                $uploader->save($brandImagePathThumbnail, $thumbnailImageFile['name']);
                $newImageName = $uploader->getUploadedFileName();
                /* if($newImageName != $imageName){
                  copy($brandImagePathThumbnail .DS. $imageName,$brandImagePathThumbnail .DS.$newImageName);
                  unlink($brandImagePathThumbnail.DS.$imageName);
                  } */
            } catch (Exception $e) {

                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }

            $imageName = $newImageName;
        }
        return $imageName;
    }

    /**
     * delete image file of brand
     * @param type $brandName
     * @param type $image
     * @return type
     */
    public function deleteImageFile($brandName, $image) {

        if (!$image) {
            return;
        }
        $brandImagePath = $this->getImagePath($brandName) . DS . $image;
        $brandImagePathCache = $this->getImagePathCache($brandName) . DS . $image;



        if (file_exists($brandImagePath)) {
            try {
                unlink($brandImagePath);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (file_exists($brandImagePathCache)) {
            try {
                unlink($brandImagePathCache);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }
    }

    /**
     * delete thumbnail image file of brand
     * @param type $brandName
     * @param type $image
     * @return type
     */
    public function deleteThumbnailImageFile($brandName, $image) {
        if (!$image) {
            return;
        }

        $brandThumbnailImagePath = $this->getThumbnailImagePath($brandName) . DS . $image;
        if (file_exists($brandThumbnailImagePath)) {
            try {
                unlink($brandThumbnailImagePath);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }
    }

    public function createImageFolder($brandName) {
        $brandPath = Mage::getBaseDir('media') . DS . 'brands';
        $brandPathCache = Mage::getBaseDir('media') . DS . 'brands' . DS . 'cache';

        $brandImagePath = $this->getImagePath($brandName);
        $brandImagePathCache = $this->getImagePathCache($brandName);

        if (!is_dir($brandPath)) {
            try {

                chmod(Mage::getBaseDir('media'), 0777);

                mkdir($brandPath);

                chmod($brandPath, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (!is_dir($brandPathCache)) {
            try {

                chmod($brandPath, 0777);

                mkdir($brandPathCache);

                chmod($brandPathCache, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (!is_dir($brandImagePath)) {
            try {
                chmod($brandPath, 0777);

                mkdir($brandImagePath);

                chmod($brandImagePath, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (!is_dir($brandImagePathCache)) {
            try {

                mkdir($brandImagePathCache);

                chmod($brandImagePathCache, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }
    }

    public function createThumbnailImageFolder($brandId) {
        $brandPath = Mage::getBaseDir('media') . DS . 'brands';
        $brandThumbnailPath = Mage::getBaseDir('media') . DS . 'brands' . DS . 'thumbnail';

        $brandImagePath = $this->getImagePath($brandId);
        $brandThumbnailImagePath = $this->getThumbnailImagePath($brandId);

        if (!is_dir($brandPath)) {
            try {

                chmod(Mage::getBaseDir('media'), 0777);

                mkdir($brandPath);

                chmod($brandPath, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (!is_dir($brandThumbnailPath)) {
            try {

                chmod($brandPath, 0777);

                mkdir($brandThumbnailPath);

                chmod($brandThumbnailPath, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (!is_dir($brandImagePath)) {
            try {
                chmod($brandPath, 0777);

                mkdir($brandImagePath);

                chmod($brandImagePath, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }

        if (!is_dir($brandThumbnailImagePath)) {
            try {

                mkdir($brandThumbnailImagePath);

                chmod($brandThumbnailImagePath, 0777);
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($this->getErrorMessage() . $e->getMessage());
            }
        }
    }

    public function getUrlImage($brandId) {
        $brandImagePathUrl = Mage::getBaseUrl('media') . 'brands/' . $brandId;
        return $brandImagePathUrl;
    }

    public function getUrlThumbnailImage($brandId) {
        //$brandImagePathUrl = Mage::getBaseUrl('media') .'brands/thumbnail/'. strtolower(substr($brandName,0,1)). substr(md5($brandName),0,10) . $this->refineUrlKey($brandName);
        $brandImagePathUrl = Mage::getBaseUrl('media') . 'brands/thumbnail/' . $brandId;
        return $brandImagePathUrl;
    }

    public function getUrlImagePath($brandId) {
        //$brandImagePathUrl = Mage::getBaseUrl('media') .'brands/cache/'. strtolower(substr($brandName,0,1)). substr(md5($brandName),0,10) . $this->refineUrlKey($brandName);
        $brandImagePathUrl = Mage::getBaseUrl('media') . 'brands/cache/' . $brandId;
        return $brandImagePathUrl;
    }

    public function getUrlThumbnailImagePath($brandId) {
        //$brandThumbnailImagePathUrl = Mage::getBaseUrl('media') .'brands/thumbnail/'. strtolower(substr($brandName,0,1)). substr(md5($brandName),0,10) . $this->refineUrlKey($brandName);
        $brandThumbnailImagePathUrl = Mage::getBaseUrl('media') . 'brands/thumbnail/' . $brandId;
        return $brandThumbnailImagePathUrl;
    }

    public function getTablePrefix() {
        $tableName = Mage::getResourceModel('shopbybrand/brand')->getTable('brand');

        $prefix = str_replace('brand', '', $tableName);

        return $prefix;
    }

    public function getShopbybrandUrl() {
        $setlink = Mage::getStoreConfig('shopbybrand/general/router');
        $url = $this->_getUrl($setlink, array());
        return $url;
    }

    public function updateProductsBrand($productIds, $brandId, $storeId) {

        $brand = Mage::getModel('shopbybrand/brand')->setStoreId($storeId)->load($brandId);
        $oldProductIds = $brand->getProductIds();
        $attributeCode = Mage::helper('shopbybrand/brand')->getAttributeCode();
        $oldAttributeData = array(
            $attributeCode => null
        );
        Mage::getSingleton('catalog/product_action')
                ->updateAttributes(array_diff($oldProductIds, $productIds), $oldAttributeData, $storeId);
        $newAttributeData = array(
            $attributeCode => $brand->getOptionId()
        );
        Mage::getSingleton('catalog/product_action')
                ->updateAttributes($productIds, $newAttributeData, $storeId);
    }

    public function getBrandsByBegin($begin) {
        $storeId = Mage::app()->getStore()->getId();
        $collection = Mage::getResourceModel('shopbybrand/brand_collection')
                ->setStoreId($storeId)
                //->addFieldToFilter("name", array("like" => $begin . "%"))
                ->setOrder('name', 'ASC')
                ->addFieldToFilter('status', array('eq' => 1))
        ;

        if($begin)
            $collection->addFieldToFilter("name", array("like" => $begin . "%"));
        $onlyBrandHaveProduct = Mage::getStoreConfig('shopbybrand/optional/display_brand_have_product', $storeId);
        if ($onlyBrandHaveProduct)
            $collection->addFieldToFilter('product_ids', array('neq' => ''));
        return $collection;
    }

    public function getFeaturedBrands() {
        $storeId = Mage::app()->getStore()->getId();
        $brandCollection = Mage::getResourceModel('shopbybrand/brand_collection')
                ->setStoreId($storeId)
                ->addFieldToFilter('is_featured', array('eq' => 1))
                ->addFieldToFilter('status', array('eq' => 1));
        //$brandCollection->setStoreId($storeId);
        return $brandCollection;
    }
    public function getSoldBrands() {
        $storeId = Mage::app()->getStore()->getId();
        $brandCollection = Mage::getResourceModel('shopbybrand/brand_collection')
                ->setStoreId($storeId)
                ->addFieldToFilter('is_sold', array('eq' => 1))
                ->addFieldToFilter('status', array('eq' => 1));
        //$brandCollection->setStoreId($storeId);
        return $brandCollection;
    }
    public function getBestsellerBrands() {
        $storeId = Mage::app()->getStore()->getId();
        $brandCollection = Mage::getResourceModel('shopbybrand/brand_collection')
                ->setStoreId($storeId)
                ->addFieldToFilter('is_bestseller', array('eq' => 1))
                ->addFieldToFilter('status', array('eq' => 1));
        //$brandCollection->setStoreId($storeId);
        return $brandCollection;
    }
    public function getSliderBrands() {
        $storeId = Mage::app()->getStore()->getId();
        $brandCollection = Mage::getResourceModel('shopbybrand/brand_collection')
                ->setStoreId($storeId)
                ->addFieldToFilter('is_slider', array('eq' => 1))
                ->addFieldToFilter('status', array('eq' => 1));
        //$brandCollection->setStoreId($storeId);
        return $brandCollection;
    }
    public function copyImage($fromName, $fromImage, $toName, $toImage) {
        $this->createImageFolder($toName);
        $newPath = $this->getImagePath($toName) . DS . $toImage;
        $oldPath = $this->getImagePath($fromName) . DS . $fromImage;
        $newPathCache = $this->getImagePathCache($toName) . DS . $toImage;
        $oldPathCache = $this->getImagePathCache($fromName) . DS . $fromImage;
        copy($oldPath, $newPath);
        copy($oldPathCache, $newPathCache);
    }

    public function copyThumbnailImage($fromName, $fromImage, $toName, $toImage) {
        $this->createThumbnailImageFolder($toName);
        $newPath = $this->getThumbnailImagePath($toName) . DS . $toImage;
        $oldPath = $this->getThumbnailImagePath($fromName) . DS . $fromImage;
        copy($oldPath, $newPath);
    }

    public function getFeatureModeCode() {
        return 1;
    }

    public function getZendDate($date_string) {
        if ($date_string) {
            $dateArrays= date_parse(str_replace("_", "/", $date_string));
            $custom = Mage::app()->getLocale()->date();
//            $timezoneLocal = Mage::app()->getStore()->getConfig(Mage_Core_Model_Locale::XML_PATH_DEFAULT_TIMEZONE);
            $custom->setTimezone('Etc/UTC');//->setTimezone($timezoneLocal);
            $custom->setDay($dateArrays['day']);
            $custom->setMonth($dateArrays['month']);
            $custom->setYear($dateArrays['year']);

        } else {
            $custom = 0;
        }
        return $custom;
    }

    public function getSubtractTime() {
        $customStart = Mage::helper('shopbybrand')->getZendDate(Mage::app()->getRequest()->getParam('from'));
        $customEnd = Mage::helper('shopbybrand')->getZendDate(Mage::app()->getRequest()->getParam('to'));
        $dateEnd = Mage::app()->getLocale()->date();
        if(!$customStart)
            return 'd';
        if(!$customEnd)
            $customEnd=$dateEnd;

        if ($customStart) {
            $customStart->setHour(0);
            $customStart->setMinute(0);
            $customStart->setSecond(0);
        }
        if ($customEnd) {
            $customEnd->setHour(23);
            $customEnd->setMinute(59);
            $customEnd->setSecond(59);
        }
        $new = $customEnd->sub($customStart);
        if(is_object($new)){
            $time = $new->getTimestamp();
        } elseif (is_numeric($new)) {
            $time = $new;
        }  else {
            return 'd';
        }
        if ($time >= 31556926) {
            $value = floor($time / 31556926);
//            if ($value > 2)
//                return 'y';
            return 'm';
        }
        if ($time >= 86400) {
            $value = floor($time / 86400);
            if ($value > 31) {
                return 'm';
            } elseif ($value >= 1) {
                return 'd';
            }
        }
        return 'h';
    }

}

?>