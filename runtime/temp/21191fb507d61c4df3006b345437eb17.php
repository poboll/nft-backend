<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:90:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\public/../application/admin\view\users\team.html";i:1649229567;s:84:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\layout\default.html";i:1627634302;s:81:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\common\meta.html";i:1627634302;s:83:"D:\phpstudy_pro\WWW\sz\shuzicangpin_admin\application\admin\view\common\script.html";i:1627634302;}*/ ?>
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
                                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <!-- 引入组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <style>
        .textRed {
            color: red;
        }
    </style>
</head>

<body>
<div id="app">
    <el-row type="flex" justify="end">
        <el-form :inline="true">
            <el-form-item>
                <el-input v-model="filterMember" placeholder="请输入会员手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getSingleMemberTreeInfo">查询</el-button>
            </el-form-item>
        </el-form>
    </el-row>
    <el-tree :data="treeData" :props="propSetting" :load="loadMap" lazy>
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>

          会员手机号：
          <span class="textRed">{{ data.phone }}</span>&nbsp;
          <span class="standup">|</span>
          直推人数：
          <span class="textRed">{{ data.total_direct }}</span>&nbsp;
          <span class="standup">|</span>
          团队人数：
          <span class="textRed">{{ data.group_person_count }}</span>&nbsp;
          <span class="standup">|</span>
          &nbsp;
          &nbsp;注册时间:
          <span class="textRed">{{data.create_time}}</span>
        </span>
      </span>
    </el-tree>
</div>
</body>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            listLoading: true,
            filterMember: "",
            showAll: false,
            treeData: [
            ],
            propSetting: {
                children: "children",
                label: "member"
            }
        },
        created() {
            this.getSingleMemberTreeInfo();
        },
        methods: {
            getData(phone) {
                let _this = this;
                $.ajax({
                    url: "/admin888.php/users/team",
                    data: { phone: phone },
                    type: "POST",
                    dataType: "json",
                    success: function (resp) {
                        _this.treeData = resp;
                        _this.listLoading = false;
                    }
                });
            },
            getSingleMemberTreeInfo() {
                let phone = this.filterMember || '';
                this.treeData = [];
                this.listLoading = true;
                this.search(phone);
            },
            search(phone) {
                let _this = this;
                $.ajax({
                    url: "/admin888.php/users/search",
                    data: { phone: phone },
                    type: "POST",
                    dataType: "json",
                    success: function (resp) {
                        _this.treeData = resp;
                        _this.listLoading = false;
                    }
                });
            },
            loadMap(node, resolve) {
                if (node.level >= 1) {
                    $.ajax({
                        url: "/admin888.php/users/team",
                        data: { phone: node.data.phone, start_level: 2, end_level: 2 },
                        type: "POST",
                        dataType: "json",
                        success: function (resp) {
                            resolve(resp);
                        }
                    });
                }
            }
        }

    })
</script>

</html>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>
