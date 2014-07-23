<?php
$installer = $this;
$installer->startSetup();
$installer->run("
ALTER TABLE {$this->getTable('brand')}
ADD COLUMN `is_sold` tinyint(1) NOT NULL default '0',
ADD COLUMN `is_bestseller` tinyint(1) NOT NULL default '0',
ADD COLUMN `is_slider` tinyint(1) NOT NULL default '0';");
$installer->endSetup();