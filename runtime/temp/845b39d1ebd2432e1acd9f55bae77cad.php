<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:90:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\public/../application/admin\view\goods\edit.html";i:1650879964;s:84:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\layout\default.html";i:1627634302;s:81:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\common\meta.html";i:1627634302;s:83:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\common\script.html";i:1627634302;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">
<meta name="referrer" content="never">
<meta name="robots" content="noindex, nofollow">

<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<?php if(\think\Config::get('fastadmin.adminskin')): ?>
<link href="/assets/css/skins/<?php echo \think\Config::get('fastadmin.adminskin'); ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">
<?php endif; ?>

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>

    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG && !\think\Config::get('fastadmin.multiplenav') && \think\Config::get('fastadmin.breadcrumb')): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <?php if($auth->check('dashboard')): ?>
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                    <?php endif; ?>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <form id="edit-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">是否是盲盒:</label>
        <div class="col-xs-12 col-sm-8">

            <select disabled id="c-is_manghe" class="form-control selectpicker" name="row[is_manghe]">
                <?php if(is_array($isMangheList) || $isMangheList instanceof \think\Collection || $isMangheList instanceof \think\Paginator): if( count($isMangheList)==0 ) : echo "" ;else: foreach($isMangheList as $key=>$vo): ?>
                <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_manghe'])?$row['is_manghe']:explode(',',$row['is_manghe']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">是否参与购买:</label>
        <div class="col-xs-12 col-sm-8">

            <select  id="c-is_can_buy" class="form-control selectpicker" name="row[is_can_buy]">
                <?php if(is_array($isCanBuyList) || $isCanBuyList instanceof \think\Collection || $isCanBuyList instanceof \think\Paginator): if( count($isCanBuyList)==0 ) : echo "" ;else: foreach($isCanBuyList as $key=>$vo): ?>
                <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_can_buy'])?$row['is_can_buy']:explode(',',$row['is_can_buy']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2">是否是碎片:</label>
        <div class="col-xs-12 col-sm-8">

            <select  id="c-is_chip" class="form-control selectpicker" name="row[is_chip]">
                <?php if(is_array($isChipList) || $isChipList instanceof \think\Collection || $isChipList instanceof \think\Paginator): if( count($isChipList)==0 ) : echo "" ;else: foreach($isChipList as $key=>$vo): ?>
                <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_chip'])?$row['is_chip']:explode(',',$row['is_chip']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-name" class="form-control" name="row[name]" type="text" value="<?php echo htmlentities($row['name']); ?>">
        </div>
    </div>
        <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Goods_category_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-goods_category_id" data-rule="required" data-source="goods_category/index" class="form-control selectpage" name="row[goods_category_id]" type="text" value="<?php echo htmlentities($row['goods_category_id']); ?>">
        </div>
    </div> 
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Title'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-title" class="form-control" name="row[title]" type="text" value="<?php echo htmlentities($row['title']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-image" class="form-control" size="50" name="row[image]" type="text" value="<?php echo htmlentities($row['image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-image" class="btn btn-danger faupload" data-input-id="c-image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-image" class="btn btn-primary fachoose" data-input-id="c-image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-image"></ul>
        </div>
    </div>
    <div class="form-group is_manghe" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Images'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-images" class="form-control" size="50" name="row[images]" type="text" value="<?php echo htmlentities($row['images']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-images" class="btn btn-danger faupload" data-input-id="c-images" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="true" data-preview-id="p-images"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-images" class="btn btn-primary fachoose" data-input-id="c-images" data-mimetype="image/*" data-multiple="true"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-images"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-images"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Price'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-price" class="form-control" step="0.01" name="row[price]" type="number" value="<?php echo htmlentities($row['price']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Type'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-type" class="form-control selectpicker" name="row[type]">
                <?php if(is_array($typeList) || $typeList instanceof \think\Collection || $typeList instanceof \think\Paginator): if( count($typeList)==0 ) : echo "" ;else: foreach($typeList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['type'])?$row['type']:explode(',',$row['type']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Content'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <textarea id="c-content" class="form-control editor" rows="5" name="row[content]" cols="50"><?php echo htmlentities($row['content']); ?></textarea>
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Order'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-order" class="form-control" name="row[order]" type="number" value="<?php echo htmlentities($row['order']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Start_time'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-start_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[start_time]" type="text" value="<?php echo $row['start_time']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('End_time'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-end_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[end_time]" type="text" value="<?php echo $row['end_time']; ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Stock'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-stock" class="form-control" name="row[stock]" type="number" value="<?php echo htmlentities($row['stock']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Sales'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-sales" class="form-control" name="row[sales]" type="number" value="<?php echo htmlentities($row['sales']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Surplus'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-surplus" class="form-control" name="row[surplus]" type="number" value="<?php echo htmlentities($row['surplus']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Company_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-company_name" class="form-control" name="row[company_name]" type="text" value="<?php echo htmlentities($row['company_name']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Company_image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-company_image" class="form-control" size="50" name="row[company_image]" type="text" value="<?php echo htmlentities($row['company_image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-company_image" class="btn btn-danger faupload" data-input-id="c-company_image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-company_image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-company_image" class="btn btn-primary fachoose" data-input-id="c-company_image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-company_image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-company_image"></ul>
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Creator'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-creator" class="form-control" name="row[creator]" type="text" value="<?php echo htmlentities($row['creator']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Owner'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-owner" class="form-control" name="row[owner]" type="text" value="<?php echo htmlentities($row['owner']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Casting_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-casting_name" class="form-control" name="row[casting_name]" type="text" value="<?php echo htmlentities($row['casting_name']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Casting_time'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-casting_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[casting_time]" type="text" value="<?php echo $row['casting_time']; ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Token_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-token_id" class="form-control" name="row[token_id]" type="text" value="<?php echo htmlentities($row['token_id']); ?>">
        </div>
    </div>    
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Blockchain'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-blockchain" class="form-control" name="row[blockchain]" type="text" value="<?php echo htmlentities($row['blockchain']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Contract_address'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-contract_address" class="form-control" name="row[contract_address]" type="text" value="<?php echo htmlentities($row['contract_address']); ?>">
        </div>
    </div>
    <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Contract_address_url'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-contract_address_url" class="form-control" name="row[contract_address_url]" type="text" value="<?php echo htmlentities($row['contract_address_url']); ?>">
        </div>
    </div>    
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Is_show'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-is_show" class="form-control selectpicker" name="row[is_show]">
                <?php if(is_array($isShowList) || $isShowList instanceof \think\Collection || $isShowList instanceof \think\Paginator): if( count($isShowList)==0 ) : echo "" ;else: foreach($isShowList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_show'])?$row['is_show']:explode(',',$row['is_show']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
        <div class="form-group" <?php if($row['is_manghe']): ?>style="display:none"<?php endif; ?>>
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Label'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-label" class="form-control" name="row[label]" type="text" value="<?php echo htmlentities($row['label']); ?>">
        </div>
    </div>
    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>
