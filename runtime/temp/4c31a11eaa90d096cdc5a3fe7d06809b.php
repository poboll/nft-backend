<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:90:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\public/../application/admin\view\users\edit.html";i:1638260266;s:84:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\layout\default.html";i:1627634302;s:81:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\common\meta.html";i:1627634302;s:83:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\common\script.html";i:1627634302;}*/ ?>
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

<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Member'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-member" class="form-control" name="row[member]" type="text" value="<?php echo htmlentities($row['member']); ?>">-->
<!--        </div>-->
<!--    </div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Nick_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-nick_name" class="form-control" name="row[nick_name]" type="text" value="<?php echo htmlentities($row['nick_name']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Head_image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-head_image" class="form-control" size="50" name="row[head_image]" type="text" value="<?php echo htmlentities($row['head_image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-head_image" class="btn btn-danger faupload" data-input-id="c-head_image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-head_image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-head_image" class="btn btn-primary fachoose" data-input-id="c-head_image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-head_image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-head_image"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Phone'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-phone" class="form-control" name="row[phone]" type="text" value="<?php echo htmlentities($row['phone']); ?>">
        </div>
    </div>
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Pid'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-pid" class="form-control" name="row[pid]" type="number" value="<?php echo htmlentities($row['pid']); ?>">-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Upid'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-upid" class="form-control" name="row[upid]" type="number" value="<?php echo htmlentities($row['upid']); ?>">-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Rank_id'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-rank_id" data-rule="required" data-source="rank/index" class="form-control selectpage" name="row[rank_id]" type="text" value="<?php echo htmlentities($row['rank_id']); ?>">-->
<!--        </div>-->
<!--    </div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Role_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-role_id" data-rule="required" data-source="role/index" class="form-control selectpage" name="row[role_id]" type="text" value="<?php echo htmlentities($row['role_id']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Status'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            
            <div class="radio">
            <?php if(is_array($statusList) || $statusList instanceof \think\Collection || $statusList instanceof \think\Paginator): if( count($statusList)==0 ) : echo "" ;else: foreach($statusList as $key=>$vo): ?>
            <label for="row[status]-<?php echo $key; ?>"><input id="row[status]-<?php echo $key; ?>" name="row[status]" type="radio" value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['status'])?$row['status']:explode(',',$row['status']))): ?>checked<?php endif; ?> /> <?php echo $vo; ?></label> 
            <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Password'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-password" class="form-control" name="row[password]" type="text" placeholder="不修改,请留空">
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Uuid'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-uuid" class="form-control" name="row[uuid]" type="text" value="<?php echo htmlentities($row['uuid']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Total_direct'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-total_direct" class="form-control" name="row[total_direct]" type="number" value="<?php echo htmlentities($row['total_direct']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Group_person_count'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-group_person_count" class="form-control" name="row[group_person_count]" type="number" value="<?php echo htmlentities($row['group_person_count']); ?>">
        </div>
    </div>
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Group_valid_person_count'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-group_valid_person_count" class="form-control" name="row[group_valid_person_count]" type="number" value="<?php echo htmlentities($row['group_valid_person_count']); ?>">-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Achievement_money'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-achievement_money" class="form-control" step="0.01" name="row[achievement_money]" type="number" value="<?php echo htmlentities($row['achievement_money']); ?>">-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Group_achievement_money'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-group_achievement_money" class="form-control" step="0.01" name="row[group_achievement_money]" type="number" value="<?php echo htmlentities($row['group_achievement_money']); ?>">-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('App_token'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-app_token" class="form-control" name="row[app_token]" type="text" value="<?php echo htmlentities($row['app_token']); ?>">-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Login_time'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--            <input id="c-login_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[login_time]" type="text" value="<?php echo $row['login_time']; ?>">-->
<!--        </div>-->
<!--    </div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Parent_member'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-parent_member" class="form-control" name="row[parent_member]" type="text" value="<?php echo htmlentities($row['parent_member']); ?>">
        </div>
    </div>

<!--    <div class="form-group">-->
<!--        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Is_del'); ?>:</label>-->
<!--        <div class="col-xs-12 col-sm-8">-->
<!--                        -->
<!--            <select  id="c-is_del" class="form-control selectpicker" name="row[is_del]">-->
<!--                <?php if(is_array($isDelList) || $isDelList instanceof \think\Collection || $isDelList instanceof \think\Paginator): if( count($isDelList)==0 ) : echo "" ;else: foreach($isDelList as $key=>$vo): ?>-->
<!--                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_del'])?$row['is_del']:explode(',',$row['is_del']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>-->
<!--                <?php endforeach; endif; else: echo "" ;endif; ?>-->
<!--            </select>-->

<!--        </div>-->
<!--    </div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Is_auth'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-is_auth" class="form-control selectpicker" name="row[is_auth]">
                <?php if(is_array($isAuthList) || $isAuthList instanceof \think\Collection || $isAuthList instanceof \think\Paginator): if( count($isAuthList)==0 ) : echo "" ;else: foreach($isAuthList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_auth'])?$row['is_auth']:explode(',',$row['is_auth']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
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
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Card'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-card" class="form-control" name="row[card]" type="text" value="<?php echo htmlentities($row['card']); ?>">
        </div>
    </div>
    <!--<div class="form-group">-->
    <!--    <label class="control-label col-xs-12 col-sm-2"><?php echo __('Account'); ?>:</label>-->
    <!--    <div class="col-xs-12 col-sm-8">-->
    <!--        <input id="c-account" class="form-control" step="0.01" name="row[account]" type="number" value="<?php echo htmlentities($row['account']); ?>">-->
    <!--    </div>-->
    <!--</div>-->
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Wallet_address'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-wallet_address" class="form-control" name="row[wallet_address]" type="text" value="<?php echo htmlentities($row['wallet_address']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Wallet_private_key'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-wallet_private_key" class="form-control" name="row[wallet_private_key]" type="text" value="<?php echo htmlentities($row['wallet_private_key']); ?>">
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Card_front_image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-card_front_image" class="form-control" size="50" name="row[card_front_image]" type="text" value="<?php echo htmlentities($row['card_front_image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-card_front_image" class="btn btn-danger faupload" data-input-id="c-card_front_image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-card_front_image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-card_front_image" class="btn btn-primary fachoose" data-input-id="c-card_front_image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-card_front_image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-card_front_image"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Card_back_image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-card_back_image" class="form-control" size="50" name="row[card_back_image]" type="text" value="<?php echo htmlentities($row['card_back_image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-card_back_image" class="btn btn-danger faupload" data-input-id="c-card_back_image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-card_back_image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-card_back_image" class="btn btn-primary fachoose" data-input-id="c-card_back_image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-card_back_image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-card_back_image"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Is_bank'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-is_bank" class="form-control selectpicker" name="row[is_bank]">
                <?php if(is_array($isBankList) || $isBankList instanceof \think\Collection || $isBankList instanceof \think\Paginator): if( count($isBankList)==0 ) : echo "" ;else: foreach($isBankList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_bank'])?$row['is_bank']:explode(',',$row['is_bank']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Bank_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bank_name" class="form-control" name="row[bank_name]" type="text" value="<?php echo htmlentities($row['bank_name']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Bank_number'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bank_number" class="form-control" name="row[bank_number]" type="text" value="<?php echo htmlentities($row['bank_number']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Bank_owner'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bank_owner" class="form-control" name="row[bank_owner]" type="text" value="<?php echo htmlentities($row['bank_owner']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Bank_branch'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-bank_branch" class="form-control" name="row[bank_branch]" type="text" value="<?php echo htmlentities($row['bank_branch']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Is_ali'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-is_ali" class="form-control selectpicker" name="row[is_ali]">
                <?php if(is_array($isAliList) || $isAliList instanceof \think\Collection || $isAliList instanceof \think\Paginator): if( count($isAliList)==0 ) : echo "" ;else: foreach($isAliList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_ali'])?$row['is_ali']:explode(',',$row['is_ali']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Ali_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-ali_name" class="form-control" name="row[ali_name]" type="text" value="<?php echo htmlentities($row['ali_name']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Ali_number'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-ali_number" class="form-control" name="row[ali_number]" type="text" value="<?php echo htmlentities($row['ali_number']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Ali_image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-ali_image" class="form-control" size="50" name="row[ali_image]" type="text" value="<?php echo htmlentities($row['ali_image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-ali_image" class="btn btn-danger faupload" data-input-id="c-ali_image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-ali_image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-ali_image" class="btn btn-primary fachoose" data-input-id="c-ali_image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-ali_image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-ali_image"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Is_wx'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
                        
            <select  id="c-is_wx" class="form-control selectpicker" name="row[is_wx]">
                <?php if(is_array($isWxList) || $isWxList instanceof \think\Collection || $isWxList instanceof \think\Paginator): if( count($isWxList)==0 ) : echo "" ;else: foreach($isWxList as $key=>$vo): ?>
                    <option value="<?php echo $key; ?>" <?php if(in_array(($key), is_array($row['is_wx'])?$row['is_wx']:explode(',',$row['is_wx']))): ?>selected<?php endif; ?>><?php echo $vo; ?></option>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </select>

        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Wx_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-wx_name" class="form-control" name="row[wx_name]" type="text" value="<?php echo htmlentities($row['wx_name']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Wx_number'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-wx_number" class="form-control" name="row[wx_number]" type="text" value="<?php echo htmlentities($row['wx_number']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Create_time'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-create_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[create_time]" type="text" value="<?php echo $row['create_time']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Wx_image'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-wx_image" class="form-control" size="50" name="row[wx_image]" type="text" value="<?php echo htmlentities($row['wx_image']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="faupload-wx_image" class="btn btn-danger faupload" data-input-id="c-wx_image" data-mimetype="image/gif,image/jpeg,image/png,image/jpg,image/bmp" data-multiple="false" data-preview-id="p-wx_image"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    <span><button type="button" id="fachoose-wx_image" class="btn btn-primary fachoose" data-input-id="c-wx_image" data-mimetype="image/*" data-multiple="false"><i class="fa fa-list"></i> <?php echo __('Choose'); ?></button></span>
                </div>
                <span class="msg-box n-right" for="c-wx_image"></span>
            </div>
            <ul class="row list-inline faupload-preview" id="p-wx_image"></ul>
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
