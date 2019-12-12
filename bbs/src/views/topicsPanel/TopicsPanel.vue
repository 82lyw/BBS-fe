<template>
  <div class="index-main">
    <basic-panel class="panel" :noPadding="true">
      <!-- <template v-slot:header>
        <topics-nav @getTopicByTag="switchPage"
                    ref="nav" />
      </template> -->
      <template v-slot:header>
        <topics-nav ref="nav" />
      </template>

      <!-- <template class="inner">
        <topics-list :topics="topics" />
        <pagination :totalTopics="totalTopics"
                    @switchPage="switchPage"
                    @go="go"
                    ref="page" />
      </template> -->
      <template class="inner">
        <topics-list :topics="topics" />
        <pagination :totalTopics="totalTopics" ref="page" />
      </template>
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'
import TopicsList from '@components/common/TopicsList.vue'
import TopicsNav from './childComp/TopicsNav.vue'
import Pagination from '@components/common/Pagination.vue'

// import { getTopics } from '@network/getData.js'

export default {
  name: 'topics-panel',
  components: {
    BasicPanel,
    TopicsList,
    TopicsNav,
    Pagination
  },
  data() {
    return {
      topics: null,
      totalTopics: 0
    }
  },
  methods: {
    // 点击数字或tag
    switchPage(option) {
      if (option == 'tag') {
        this.$refs.page.currentPage = 1
      }
      this.topics = [
        {
          _id: '5db70ffaea6bbf2e541bc173',
          status: 1,
          browsed: 67,
          prefer: 0,
          author: 'admin',
          tag: '分享',
          title: '如何设置树莓派 VNC 的分辨率',
          content:
            '<p><img src="http://shumeipai.nxez.com/wp-content/uploads/2018/08/20180831163054227-0.jpg" style="max-width:100%;"><br></p><p>当我们<a href="http://shumeipai.nxez.com/2018/08/31/raspberry-pi-vnc-viewer-configuration-tutorial.html" target="_blank" rel="noopener noreferrer">使用 VNC 连接到树莓派</a>时，默认的分辨率非常低。甚至无法显示整个桌面，因此我们需要对分辨率进行设置。<br>在树莓派上设置 VNC 的分辨率很简单，在终端运行下面指令进入设置界面设置。&nbsp;</p><pre><code>sudo raspi-config</code></pre><p>按照下面的顺序选择 Advanced Options &gt; Resolution，最后选择一个更合适的分辨率并确认完成即可&nbsp;</p><p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/20190708222934328-0.png" style="max-width: 100%;"></p><p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/20190708222934205-0.png" style="max-width: 100%;"></p><p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/20190708222934680-0.png" style="max-width: 100%;">&nbsp;<br></p><p>&nbsp;建议在设置完成后重启树莓派或重新启动 VNC 服务让设置生效。<br></p><blockquote><strong>测试文章<br></strong><strong>文章标题：</strong><a href="http://shumeipai.nxez.com/2019/07/08/set-the-resolution-of-the-raspberry-pi-vnc.html" title="如何设置树莓派 VNC 的分辨率">如何设置树莓派 VNC 的分辨率</a>&nbsp;-&nbsp;<a href="http://shumeipai.nxez.com/" title="树莓派实验室">树莓派实验室<br></a><strong>固定链接：</strong><a href="http://shumeipai.nxez.com/2019/07/08/set-the-resolution-of-the-raspberry-pi-vnc.html" title="如何设置树莓派 VNC 的分辨率">http://shumeipai.nxez.com/2019/07/08/set-the-resolution-of-the-raspberry-pi-vnc.html</a></blockquote>',
          topic_id: 23,
          create_time: '2019-10-28T15:57:46.891Z',
          last_modify_time: '2019-10-28T15:57:46.891Z',
          comments: [
            {
              _id: '5db71357fcda571a804d0dd0',
              commenter: 'admin',
              content: '测试',
              floor: 1,
              create_time: '2019-10-28T16:12:07.818Z'
            },
            {
              _id: '5db7135efcda571a804d0dd1',
              commenter: 'admin',
              content: '测试测试',
              floor: 2,
              create_time: '2019-10-28T16:12:14.635Z'
            },
            {
              _id: '5db7aa0e26544c56ae7bc823',
              commenter: 'root',
              content: '哈哈哈',
              floor: 3,
              create_time: '2019-10-29T02:55:10.268Z'
            },
            {
              _id: '5db8005cf1cf05571f5a1b7f',
              commenter: 'root',
              content: '学到了',
              floor: 4,
              create_time: '2019-10-29T09:03:24.996Z'
            },
            {
              _id: '5dc3c73cf1cf05571f5a1b82',
              commenter: 'eobeans',
              content: '厉害了，富文本',
              floor: 5,
              create_time: '2019-11-07T07:26:52.786Z'
            }
          ],
          __v: 0,
          authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
        },
        {
          _id: '5db7108cea6bbf2e541bc174',
          status: 0,
          browsed: 6,
          prefer: 0,
          author: 'admin',
          tag: '分享',
          title: '黑客利用树莓派设备攻入NASA网络',
          content:
            '<p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/06/20190624000251722.jpg" style="max-width:100%;"><br></p><p>据外媒报道，NASA总监察长办公室(OIG)于本周发布的一份报告显示，2018年4月，有黑客攻击了他们的网络并盗走了约500M与火星任务相关的数据。攻入的切点则是一台连着NASA喷气推进实验室(JPL) IT网络的树莓派电脑。</p><p><strong>黑客偷走火星任务数据</strong><br>根据一份49页的OIG报告，黑客通过入侵一个共享网络网关然后利用该入口深入JPL网络，之后进入了存有NASA JPL管理的火星任务信息的网络。</p><p>OIG的报告称，黑客使用了一个受攻击的外部用户系统进入了JPL任务网络。</p><p>NASA OIG表示：“攻击者从23个文件中窃取了大约500MB的数据，其中2个文件包含有跟火星科学实验室任务有关的国际武器管制信息。”</p><p>火星科学实验室是JPL一个负责管理火星“好奇号”探测器的一个项目。</p><p><span id="more-5916"></span><strong>黑客还攻击了NASA的卫星天线网络</strong><br>NASA JPL的主要任务是建造和操控行星机器人宇宙飞船如好奇号或环绕太阳系行星运行的各种卫星。</p><p>另外，JPL还管理着NASA的深空网络(DSN)，这是一个覆盖全球范围的卫星天线网络，用于发送和接收来自NASA正在执行任务的航天器的信息。</p><p>调查人员表示，除了进入JPL的任务网络，2018年4月的入侵者还访问了JPL的DSN IT网络。由于担心攻击者可能也会转向他们的系统，NASA的其他几家机构在遭受入侵的同时切断了与JPL和DSN网络的连接。</p><p><strong>攻击被定性为高级持续性威胁</strong><br>NASA OIG表示：“这次攻击被列为一种高级持续性威胁，它在将近一年的时间里都没有被发现。而对这起事件的调查工作正在进行中。</p><p>报告中，JPL未能将其内部网络分割成更小的部分–这是一种基本的安全做法–而受到指责。</p><p>NASA OIG还就JPL未能及时更新信息技术安全数据库(ITSDB)而受到指责。ITSDB是JPL IT人员的数据库，该系统管理员应该在其中记录下连接到JPL网络的每台设备。然而OIG发现数据库的记录并不完整也不准确。</p><p>此外，调查人员还发现，JPL的IT人员在解决任何与安全相关的问题方面都比较滞后。</p><p>来源：<a href="https://www.cnbeta.com/articles/science/859929.htm" target="_blank" rel="noopener noreferrer">cnBeta.COM</a></p><blockquote><strong>测试文章<br></strong><strong>文章标题：</strong><a href="http://shumeipai.nxez.com/2019/06/24/hackers-use-raspberry-pi-to-break-into-nasa-network.html" title="黑客利用树莓派设备攻入NASA网络">黑客利用树莓派设备攻入NASA网络</a>&nbsp;-&nbsp;<a href="http://shumeipai.nxez.com/" title="树莓派实验室">树莓派实验室<br></a><strong>固定链接：</strong><a href="http://shumeipai.nxez.com/2019/06/24/hackers-use-raspberry-pi-to-break-into-nasa-network.html" title="黑客利用树莓派设备攻入NASA网络">http://shumeipai.nxez.com/2019/06/24/hackers-use-raspberry-pi-to-break-into-nasa-network.html</a></blockquote>',
          topic_id: 24,
          create_time: '2019-10-28T16:00:12.965Z',
          last_modify_time: '2019-10-28T16:00:12.965Z',
          comments: [],
          __v: 0,
          authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
        },
        {
          _id: '5db70d32ea6bbf2e541bc172',
          status: 0,
          browsed: 13,
          prefer: 0,
          author: 'root',
          tag: '分享',
          title: '控制树莓派板载 LED 的几种方式',
          content:
            '<p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/06/20190624152333232-0.jpg" style="max-width:100%;"><br></p><p>所有的树莓派型号或多或少都自带了一些 LED，早期的型号例如 1 代 B 型，会板载 PWR（电源）、ACT（活动）以及网络状态 LED。在 B+ 之后的型号，网络状态 LED 被移到了网口上，主板上只剩下 2 个 LED，红色的 PWR 和 绿色的 ACT。正常情况下，除非电源电压低于 4.5V 以下，否则 PWR 电源 LED 会保持常亮。</p><p>幸运的是，在树莓派 2B、B+、A+ 和 Zero 型号中，提供了几种方法来控制这些 LED。最简单的方式是对下面的文件进行配置来实现：</p><pre><code>/sys/class/leds/led[LED_ID]/trigger</code></pre><p>其中[LED_ID]需要替换为 0（代表 ACT LED）或 1（代表 PWR LED）。<br>例如：&nbsp;</p><pre><code># Set the PWR LED to GPIO mode (set \'off\' by default).<br>echo gpio | sudo tee /sys/class/leds/led1/trigger<br> <br># (Optional) Turn on (1) or off (0) the PWR LED.<br>echo 1 | sudo tee /sys/class/leds/led1/brightness<br>echo 0 | sudo tee /sys/class/leds/led1/brightness<br> <br># Revert the PWR LED back to \'under-voltage detect\' mode.<br>echo input | sudo tee /sys/class/leds/led1/trigger<br> <br># Set the ACT LED to trigger on cpu0 instead of mmc0 (SD card access).<br>echo cpu0 | sudo tee /sys/class/leds/led0/trigger</code></pre><p>用这种方法可以关闭 PWR 电源指示灯，为后面数年的使用省下几毛钱电费 -。-</p><p>明白了这个原理之后，我们可以设计一个脚本让这 LED 按照我们的需要闪烁起来，就和使用 GPIO 控制外部 LED BlingBling 类似。</p><pre><code>from time import sleep<br>led = open(\'/sys/class/leds/led0/brightness\', \'w\', buffering = 0)<br>while True:<br>    led.write(\'0\')#turn on<br>    sleep(0.5)<br>    led.write(\'1\')#turn off<br>    sleep(0.5)</code></pre><p>保存为 led0.py 之后，运行 sudo python led0.py 命令即可。代码证 buffering 参数是为了无缓冲写入，这样就不用等到调用文件的 close 方法才能真正写入了。</p><p>如果你希望永久禁用这两个 LED，还可以通过添加下面的内容到 /boot/config.txt 的方式来实现：</p><pre><code># Disable the ACT LED.<br>dtparam=act_led_trigger=none<br>dtparam=act_led_activelow=off<br> <br># Disable the PWR LED.<br>dtparam=pwr_led_trigger=none<br>dtparam=pwr_led_activelow=off</code></pre><p>对于树莓派 Zero 来说，板子上只有一个 LED（led0），即 ACT LED。默认为点亮状态，而当该 LED 熄灭则表示磁盘在活动。</p><p>如果要完全关闭 Zero 上的 LED，请运行下面的命令：</p><pre><code># Set the Pi Zero ACT LED trigger to \'none\'.<br>echo none | sudo tee /sys/class/leds/led0/trigger<br> <br># Turn off the Pi Zero ACT LED.<br>echo 1 | sudo tee /sys/class/leds/led0/brightness<br>To make these settings permanent, add the following lines to your Pi\'s /boot/config.txt file and reboot:<br> <br># Disable the ACT LED on the Pi Zero.<br>dtparam=act_led_trigger=none<br>dtparam=act_led_activelow=on</code></pre><div><strong>测试文章</strong></div><div><strong>文章标题：</strong><a href="http://shumeipai.nxez.com/2019/10/21/controlling-pwr-and-act-leds-on-the-raspberry-pi.html" title="控制树莓派板载 LED 的几种方式">控制树莓派板载 LED 的几种方式</a>&nbsp;-&nbsp;<a href="http://shumeipai.nxez.com/" title="树莓派实验室">树莓派实验室</a></div><div><strong>固定链接：</strong><a href="http://shumeipai.nxez.com/2019/10/21/controlling-pwr-and-act-leds-on-the-raspberry-pi.html" title="控制树莓派板载 LED 的几种方式">http://shumeipai.nxez.com/2019/10/21/controlling-pwr-and-act-leds-on-the-raspberry-pi.html</a></div><p>&nbsp;<img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/talk_quwj_banner_767.png" style="max-width: 100%;"><br></p>',
          topic_id: 22,
          create_time: '2019-10-28T15:45:54.595Z',
          last_modify_time: '2019-10-28T15:45:54.595Z',
          comments: [],
          __v: 0,
          authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
        },
        {
          _id: '5db70a56ea6bbf2e541bc16f',
          status: 0,
          browsed: 13,
          prefer: 0,
          author: 'root',
          tag: '分享',
          title: '什么是跨域、怎么解决跨域？',
          content:
            '<div><span style="font-weight: bold;">前言：</span>在以往开发中，不会涉及到跨域的问题，因为往往都是在同一个项目中开发代码或者单纯写小demo；However，在实际项目中，前后端分成两个不同的项目，各自部署在不同的域名下，这也就会遇到跨域问题了。</div><br>既然问题发生了，那就要从根本上去解决问题，在开始说解决方案前，我们有必要了解一下什么是跨域&nbsp;<div><br></div><h3>1、什么是跨域</h3><div><blockquote><span style="background-color: rgb(238, 236, 224);">在<b style="">浏览器</b>同源策略限制下，向不同<b style="">源</b>（<i style="">不同协议、不同域名或者不同端口</i>）发送XHR请求，<b style="">浏览器</b>认为该请求不受信任，禁止请求，具体表现为请求后不正常响应</span></blockquote><div>从定义中可以看到这都是<b>浏览器</b>做的“好事”。那么什么是不用源呢？其实也很简单，只要页面的协议、域名和端口与请求地址的没有<b>完全一样</b>，就认为你是不同源，举个极端例子来说：&nbsp;</div><blockquote>https://baidu.com:80 与 https://baidu.com:8080</blockquote><div><div><h3>2、怎么解决跨域</h3><p>只要思想不滑坡，办法总比困难多，既然已经了解什么是跨域，那我们就着手来解决这个问题</p><h4>1.从浏览器入手</h4><p>其实跨域只在浏览器下才会触发，那有没有办法禁用浏览器的同源策略呢？办法还真的有。</p><p>对于IE浏览器：进入ie的网际网路选项设置，然后选择安全性，再选择自订等级，然后下拉，找到「存取跨网络的资料来源」，选择启用即可；</p><p>对于chrome浏览器：通过在命令行，输入<i>chrome.exe --allow-file-access-from-files --user- --disable-web-security，</i>这会新建一个浏览器实例，自动打开的chrome会显示一系列黄色的文字就说明成功了；</p><p>对于FireFox浏览器：在地址栏输入about:config，然后下拉找到<i>security.fileuri.strict_origin_policy</i>，然后设置为false即可</p></div><div><div><h4>2.从域名入手</h4><p>既然域名等信息不一致导致跨域产生，那么干脆就把两个项目合并成一个项目，使用相同的协议、域名和端口。</p><h4>3.从jsonp入手</h4><p>其实认真想想，我们的系统中经常会用到外链的图片、样式文件以及插件，那这些不会导致跨域吗？是的，真的不会，因为这些是http请求，并不是前面定义的xhr（<a href="https://www.cnblogs.com/syfwhu/p/6116323.html" target="_blank" rel="nofollow">XmlHttpRequest</a>）请求。</p><p>既然图片和js脚本可以正常请求，那么如果把script脚本的src改成我需要跨域请求的url是不是就可以了呢？</p><p>是可以的，当请求接口返回的数据需要稍微处理下。在平常引入script脚本时，下载完文件后自动执行，如果我们把src改成跨域url，而且返回值是一段jjs语句，比如：</p></div><br></div></div><blockquote>测试文章，节选自简书<br>作者：MsgSS<br>链接：<a href="https://www.jianshu.com/p/5805fd1027eb">https://www.jianshu.com/p/5805fd1027eb<br></a>来源：简书</blockquote><br></div>',
          topic_id: 21,
          create_time: '2019-10-28T15:33:42.776Z',
          last_modify_time: '2019-10-28T15:33:42.776Z',
          comments: [
            {
              _id: '5db70ab3ea6bbf2e541bc170',
              commenter: 'root',
              content: '很好',
              floor: 1,
              create_time: '2019-10-28T15:35:15.763Z'
            },
            {
              _id: '5db70abcea6bbf2e541bc171',
              commenter: 'root',
              content: '测试回复',
              floor: 2,
              create_time: '2019-10-28T15:35:24.790Z'
            },
            {
              _id: '5df0a862f1cf05571f5a1b88',
              commenter: '123',
              content: 'hahha',
              floor: 3,
              create_time: '2019-12-11T08:27:14.843Z'
            }
          ],
          __v: 0,
          authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
        },
        {
          _id: '5db64f712ef33c4680585261',
          status: 0,
          browsed: 17,
          prefer: 0,
          author: 'Jiny',
          tag: '问答',
          title: '啊啊啊啊',
          content: '<p>深大深大所大所大所大</p>',
          topic_id: 20,
          create_time: '2019-10-28T02:16:17.964Z',
          last_modify_time: '2019-10-28T02:16:17.964Z',
          comments: [
            {
              _id: '5dd4df90f1cf05571f5a1b84',
              commenter: 'Jiny',
              content: '111',
              floor: 1,
              create_time: '2019-11-20T06:39:12.293Z'
            }
          ],
          __v: 0,
          authorAvatar: '38286730-fc61-11e9-be79-91717382b30e.jpg'
        },
        {
          _id: '5db1ac4330a73e2150ccc14c',
          status: 0,
          browsed: 31,
          prefer: 0,
          comments: [
            {
              _id: '5db2ffe98aebb00c18044a79',
              commenter: 'Jiny',
              content: '啊飒飒大',
              floor: 1,
              create_time: '2019-10-25T14:00:09.077Z'
            },
            {
              _id: '5db2ffed8aebb00c18044a7a',
              commenter: 'Jiny',
              content: '阿萨德阿萨德按时',
              floor: 2,
              create_time: '2019-10-25T14:00:13.192Z'
            },
            {
              _id: '5db5543245ff4b031c56917b',
              commenter: 'Jiny',
              content: 'hahaha',
              floor: 3,
              create_time: '2019-10-27T08:24:18.276Z'
            }
          ],
          author: 'admin',
          tag: '分享',
          title: '啊撒大声地',
          content:
            '<p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>',
          topic_id: 19,
          create_time: '2019-10-24T13:50:59.922Z',
          last_modify_time: '2019-10-24T13:50:59.922Z',
          __v: 0,
          authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
        },
        {
          _id: '5db13ade14cf6b4d6cdc9a4d',
          status: 0,
          browsed: 25,
          prefer: 0,
          comments: [
            {
              _id: '5db3fc7cfc84b236bc7b1124',
              commenter: 'Jiny',
              content: '按时打算大',
              floor: 1,
              create_time: '2019-10-26T07:57:48.783Z'
            },
            {
              _id: '5db80045f1cf05571f5a1b7e',
              commenter: 'root',
              content: '咩料',
              floor: 2,
              create_time: '2019-10-29T09:03:01.098Z'
            },
            {
              _id: '5dd64489f1cf05571f5a1b86',
              commenter: '张三',
              content: '你好',
              floor: 3,
              create_time: '2019-11-21T08:02:17.240Z'
            }
          ],
          author: 'admin',
          tag: '测试',
          title: '按时打算大所大大所大所大所大所',
          content: '<p>阿达阿萨德阿萨德阿萨德阿萨德按时按时</p>',
          topic_id: 17,
          create_time: '2019-10-24T05:47:10.309Z',
          last_modify_time: '2019-10-24T05:47:10.309Z',
          __v: 0,
          authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
        },
        {
          _id: '5db13aa414cf6b4d6cdc9a4c',
          status: 0,
          browsed: 5,
          prefer: 0,
          comments: [],
          author: 'admin',
          tag: '测试',
          title: '啊啊啊啊啊啊啊啊啊啊啊',
          content: '<p>阿萨德阿萨德阿萨德阿萨德按时的</p>',
          topic_id: 16,
          create_time: '2019-10-24T05:46:12.160Z',
          last_modify_time: '2019-10-24T05:46:12.160Z',
          __v: 0,
          authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
        },
        {
          _id: '5db13a8b14cf6b4d6cdc9a4b',
          status: 0,
          browsed: 1,
          prefer: 0,
          comments: [],
          author: 'root',
          tag: '测试',
          title: '更新更新',
          content: '<p>123123123123</p>',
          topic_id: 15,
          create_time: '2019-10-24T05:45:47.242Z',
          last_modify_time: '2019-10-24T05:45:47.242Z',
          __v: 0,
          authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
        },
        {
          _id: '5db013beba46ac05d4f404df',
          status: 0,
          browsed: 2,
          prefer: 0,
          comments: [],
          author: 'root',
          tag: '分享',
          title: '哈哈哈哈哈',
          content: '<p>哈哈哈哈哈哈哈哈哈哈哈</p>',
          topic_id: 14,
          create_time: '2019-10-23T08:47:58.143Z',
          last_modify_time: '2019-10-23T08:47:58.143Z',
          __v: 0,
          authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
        }
      ]
      this.totalTopics = 23
      // var page = this.$refs.page.currentPage
      // var tag = this.$refs.nav.currentTag
      // getTopics(page, tag).then(res => {
      //   this.topics = res.data.topics
      //   this.totalTopics = res.data.totalTopics
      // })
    }
    // 切换前后的页数
    // go (n) {
    //   getTopics(n, this.$refs.nav.currentTag).then(res => {
    //     this.topics = res.data.topics
    //     this.totalTopics = res.data.totalTopics
    //   })
    // }
  },
  // 获取topic列表
  created() {
    this.topics = [
      {
        _id: '5db70ffaea6bbf2e541bc173',
        status: 1,
        browsed: 67,
        prefer: 0,
        author: 'admin',
        tag: '分享',
        title: '如何设置树莓派 VNC 的分辨率',
        content:
          '<p><img src="http://shumeipai.nxez.com/wp-content/uploads/2018/08/20180831163054227-0.jpg" style="max-width:100%;"><br></p><p>当我们<a href="http://shumeipai.nxez.com/2018/08/31/raspberry-pi-vnc-viewer-configuration-tutorial.html" target="_blank" rel="noopener noreferrer">使用 VNC 连接到树莓派</a>时，默认的分辨率非常低。甚至无法显示整个桌面，因此我们需要对分辨率进行设置。<br>在树莓派上设置 VNC 的分辨率很简单，在终端运行下面指令进入设置界面设置。&nbsp;</p><pre><code>sudo raspi-config</code></pre><p>按照下面的顺序选择 Advanced Options &gt; Resolution，最后选择一个更合适的分辨率并确认完成即可&nbsp;</p><p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/20190708222934328-0.png" style="max-width: 100%;"></p><p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/20190708222934205-0.png" style="max-width: 100%;"></p><p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/20190708222934680-0.png" style="max-width: 100%;">&nbsp;<br></p><p>&nbsp;建议在设置完成后重启树莓派或重新启动 VNC 服务让设置生效。<br></p><blockquote><strong>测试文章<br></strong><strong>文章标题：</strong><a href="http://shumeipai.nxez.com/2019/07/08/set-the-resolution-of-the-raspberry-pi-vnc.html" title="如何设置树莓派 VNC 的分辨率">如何设置树莓派 VNC 的分辨率</a>&nbsp;-&nbsp;<a href="http://shumeipai.nxez.com/" title="树莓派实验室">树莓派实验室<br></a><strong>固定链接：</strong><a href="http://shumeipai.nxez.com/2019/07/08/set-the-resolution-of-the-raspberry-pi-vnc.html" title="如何设置树莓派 VNC 的分辨率">http://shumeipai.nxez.com/2019/07/08/set-the-resolution-of-the-raspberry-pi-vnc.html</a></blockquote>',
        topic_id: 23,
        create_time: '2019-10-28T15:57:46.891Z',
        last_modify_time: '2019-10-28T15:57:46.891Z',
        comments: [
          {
            _id: '5db71357fcda571a804d0dd0',
            commenter: 'admin',
            content: '测试',
            floor: 1,
            create_time: '2019-10-28T16:12:07.818Z'
          },
          {
            _id: '5db7135efcda571a804d0dd1',
            commenter: 'admin',
            content: '测试测试',
            floor: 2,
            create_time: '2019-10-28T16:12:14.635Z'
          },
          {
            _id: '5db7aa0e26544c56ae7bc823',
            commenter: 'root',
            content: '哈哈哈',
            floor: 3,
            create_time: '2019-10-29T02:55:10.268Z'
          },
          {
            _id: '5db8005cf1cf05571f5a1b7f',
            commenter: 'root',
            content: '学到了',
            floor: 4,
            create_time: '2019-10-29T09:03:24.996Z'
          },
          {
            _id: '5dc3c73cf1cf05571f5a1b82',
            commenter: 'eobeans',
            content: '厉害了，富文本',
            floor: 5,
            create_time: '2019-11-07T07:26:52.786Z'
          }
        ],
        __v: 0,
        authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
      },
      {
        _id: '5db7108cea6bbf2e541bc174',
        status: 0,
        browsed: 6,
        prefer: 0,
        author: 'admin',
        tag: '分享',
        title: '黑客利用树莓派设备攻入NASA网络',
        content:
          '<p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/06/20190624000251722.jpg" style="max-width:100%;"><br></p><p>据外媒报道，NASA总监察长办公室(OIG)于本周发布的一份报告显示，2018年4月，有黑客攻击了他们的网络并盗走了约500M与火星任务相关的数据。攻入的切点则是一台连着NASA喷气推进实验室(JPL) IT网络的树莓派电脑。</p><p><strong>黑客偷走火星任务数据</strong><br>根据一份49页的OIG报告，黑客通过入侵一个共享网络网关然后利用该入口深入JPL网络，之后进入了存有NASA JPL管理的火星任务信息的网络。</p><p>OIG的报告称，黑客使用了一个受攻击的外部用户系统进入了JPL任务网络。</p><p>NASA OIG表示：“攻击者从23个文件中窃取了大约500MB的数据，其中2个文件包含有跟火星科学实验室任务有关的国际武器管制信息。”</p><p>火星科学实验室是JPL一个负责管理火星“好奇号”探测器的一个项目。</p><p><span id="more-5916"></span><strong>黑客还攻击了NASA的卫星天线网络</strong><br>NASA JPL的主要任务是建造和操控行星机器人宇宙飞船如好奇号或环绕太阳系行星运行的各种卫星。</p><p>另外，JPL还管理着NASA的深空网络(DSN)，这是一个覆盖全球范围的卫星天线网络，用于发送和接收来自NASA正在执行任务的航天器的信息。</p><p>调查人员表示，除了进入JPL的任务网络，2018年4月的入侵者还访问了JPL的DSN IT网络。由于担心攻击者可能也会转向他们的系统，NASA的其他几家机构在遭受入侵的同时切断了与JPL和DSN网络的连接。</p><p><strong>攻击被定性为高级持续性威胁</strong><br>NASA OIG表示：“这次攻击被列为一种高级持续性威胁，它在将近一年的时间里都没有被发现。而对这起事件的调查工作正在进行中。</p><p>报告中，JPL未能将其内部网络分割成更小的部分–这是一种基本的安全做法–而受到指责。</p><p>NASA OIG还就JPL未能及时更新信息技术安全数据库(ITSDB)而受到指责。ITSDB是JPL IT人员的数据库，该系统管理员应该在其中记录下连接到JPL网络的每台设备。然而OIG发现数据库的记录并不完整也不准确。</p><p>此外，调查人员还发现，JPL的IT人员在解决任何与安全相关的问题方面都比较滞后。</p><p>来源：<a href="https://www.cnbeta.com/articles/science/859929.htm" target="_blank" rel="noopener noreferrer">cnBeta.COM</a></p><blockquote><strong>测试文章<br></strong><strong>文章标题：</strong><a href="http://shumeipai.nxez.com/2019/06/24/hackers-use-raspberry-pi-to-break-into-nasa-network.html" title="黑客利用树莓派设备攻入NASA网络">黑客利用树莓派设备攻入NASA网络</a>&nbsp;-&nbsp;<a href="http://shumeipai.nxez.com/" title="树莓派实验室">树莓派实验室<br></a><strong>固定链接：</strong><a href="http://shumeipai.nxez.com/2019/06/24/hackers-use-raspberry-pi-to-break-into-nasa-network.html" title="黑客利用树莓派设备攻入NASA网络">http://shumeipai.nxez.com/2019/06/24/hackers-use-raspberry-pi-to-break-into-nasa-network.html</a></blockquote>',
        topic_id: 24,
        create_time: '2019-10-28T16:00:12.965Z',
        last_modify_time: '2019-10-28T16:00:12.965Z',
        comments: [],
        __v: 0,
        authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
      },
      {
        _id: '5db70d32ea6bbf2e541bc172',
        status: 0,
        browsed: 13,
        prefer: 0,
        author: 'root',
        tag: '分享',
        title: '控制树莓派板载 LED 的几种方式',
        content:
          '<p><img src="http://shumeipai.nxez.com/wp-content/uploads/2019/06/20190624152333232-0.jpg" style="max-width:100%;"><br></p><p>所有的树莓派型号或多或少都自带了一些 LED，早期的型号例如 1 代 B 型，会板载 PWR（电源）、ACT（活动）以及网络状态 LED。在 B+ 之后的型号，网络状态 LED 被移到了网口上，主板上只剩下 2 个 LED，红色的 PWR 和 绿色的 ACT。正常情况下，除非电源电压低于 4.5V 以下，否则 PWR 电源 LED 会保持常亮。</p><p>幸运的是，在树莓派 2B、B+、A+ 和 Zero 型号中，提供了几种方法来控制这些 LED。最简单的方式是对下面的文件进行配置来实现：</p><pre><code>/sys/class/leds/led[LED_ID]/trigger</code></pre><p>其中[LED_ID]需要替换为 0（代表 ACT LED）或 1（代表 PWR LED）。<br>例如：&nbsp;</p><pre><code># Set the PWR LED to GPIO mode (set \'off\' by default).<br>echo gpio | sudo tee /sys/class/leds/led1/trigger<br> <br># (Optional) Turn on (1) or off (0) the PWR LED.<br>echo 1 | sudo tee /sys/class/leds/led1/brightness<br>echo 0 | sudo tee /sys/class/leds/led1/brightness<br> <br># Revert the PWR LED back to \'under-voltage detect\' mode.<br>echo input | sudo tee /sys/class/leds/led1/trigger<br> <br># Set the ACT LED to trigger on cpu0 instead of mmc0 (SD card access).<br>echo cpu0 | sudo tee /sys/class/leds/led0/trigger</code></pre><p>用这种方法可以关闭 PWR 电源指示灯，为后面数年的使用省下几毛钱电费 -。-</p><p>明白了这个原理之后，我们可以设计一个脚本让这 LED 按照我们的需要闪烁起来，就和使用 GPIO 控制外部 LED BlingBling 类似。</p><pre><code>from time import sleep<br>led = open(\'/sys/class/leds/led0/brightness\', \'w\', buffering = 0)<br>while True:<br>    led.write(\'0\')#turn on<br>    sleep(0.5)<br>    led.write(\'1\')#turn off<br>    sleep(0.5)</code></pre><p>保存为 led0.py 之后，运行 sudo python led0.py 命令即可。代码证 buffering 参数是为了无缓冲写入，这样就不用等到调用文件的 close 方法才能真正写入了。</p><p>如果你希望永久禁用这两个 LED，还可以通过添加下面的内容到 /boot/config.txt 的方式来实现：</p><pre><code># Disable the ACT LED.<br>dtparam=act_led_trigger=none<br>dtparam=act_led_activelow=off<br> <br># Disable the PWR LED.<br>dtparam=pwr_led_trigger=none<br>dtparam=pwr_led_activelow=off</code></pre><p>对于树莓派 Zero 来说，板子上只有一个 LED（led0），即 ACT LED。默认为点亮状态，而当该 LED 熄灭则表示磁盘在活动。</p><p>如果要完全关闭 Zero 上的 LED，请运行下面的命令：</p><pre><code># Set the Pi Zero ACT LED trigger to \'none\'.<br>echo none | sudo tee /sys/class/leds/led0/trigger<br> <br># Turn off the Pi Zero ACT LED.<br>echo 1 | sudo tee /sys/class/leds/led0/brightness<br>To make these settings permanent, add the following lines to your Pi\'s /boot/config.txt file and reboot:<br> <br># Disable the ACT LED on the Pi Zero.<br>dtparam=act_led_trigger=none<br>dtparam=act_led_activelow=on</code></pre><div><strong>测试文章</strong></div><div><strong>文章标题：</strong><a href="http://shumeipai.nxez.com/2019/10/21/controlling-pwr-and-act-leds-on-the-raspberry-pi.html" title="控制树莓派板载 LED 的几种方式">控制树莓派板载 LED 的几种方式</a>&nbsp;-&nbsp;<a href="http://shumeipai.nxez.com/" title="树莓派实验室">树莓派实验室</a></div><div><strong>固定链接：</strong><a href="http://shumeipai.nxez.com/2019/10/21/controlling-pwr-and-act-leds-on-the-raspberry-pi.html" title="控制树莓派板载 LED 的几种方式">http://shumeipai.nxez.com/2019/10/21/controlling-pwr-and-act-leds-on-the-raspberry-pi.html</a></div><p>&nbsp;<img src="http://shumeipai.nxez.com/wp-content/uploads/2019/07/talk_quwj_banner_767.png" style="max-width: 100%;"><br></p>',
        topic_id: 22,
        create_time: '2019-10-28T15:45:54.595Z',
        last_modify_time: '2019-10-28T15:45:54.595Z',
        comments: [],
        __v: 0,
        authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
      },
      {
        _id: '5db70a56ea6bbf2e541bc16f',
        status: 0,
        browsed: 13,
        prefer: 0,
        author: 'root',
        tag: '分享',
        title: '什么是跨域、怎么解决跨域？',
        content:
          '<div><span style="font-weight: bold;">前言：</span>在以往开发中，不会涉及到跨域的问题，因为往往都是在同一个项目中开发代码或者单纯写小demo；However，在实际项目中，前后端分成两个不同的项目，各自部署在不同的域名下，这也就会遇到跨域问题了。</div><br>既然问题发生了，那就要从根本上去解决问题，在开始说解决方案前，我们有必要了解一下什么是跨域&nbsp;<div><br></div><h3>1、什么是跨域</h3><div><blockquote><span style="background-color: rgb(238, 236, 224);">在<b style="">浏览器</b>同源策略限制下，向不同<b style="">源</b>（<i style="">不同协议、不同域名或者不同端口</i>）发送XHR请求，<b style="">浏览器</b>认为该请求不受信任，禁止请求，具体表现为请求后不正常响应</span></blockquote><div>从定义中可以看到这都是<b>浏览器</b>做的“好事”。那么什么是不用源呢？其实也很简单，只要页面的协议、域名和端口与请求地址的没有<b>完全一样</b>，就认为你是不同源，举个极端例子来说：&nbsp;</div><blockquote>https://baidu.com:80 与 https://baidu.com:8080</blockquote><div><div><h3>2、怎么解决跨域</h3><p>只要思想不滑坡，办法总比困难多，既然已经了解什么是跨域，那我们就着手来解决这个问题</p><h4>1.从浏览器入手</h4><p>其实跨域只在浏览器下才会触发，那有没有办法禁用浏览器的同源策略呢？办法还真的有。</p><p>对于IE浏览器：进入ie的网际网路选项设置，然后选择安全性，再选择自订等级，然后下拉，找到「存取跨网络的资料来源」，选择启用即可；</p><p>对于chrome浏览器：通过在命令行，输入<i>chrome.exe --allow-file-access-from-files --user- --disable-web-security，</i>这会新建一个浏览器实例，自动打开的chrome会显示一系列黄色的文字就说明成功了；</p><p>对于FireFox浏览器：在地址栏输入about:config，然后下拉找到<i>security.fileuri.strict_origin_policy</i>，然后设置为false即可</p></div><div><div><h4>2.从域名入手</h4><p>既然域名等信息不一致导致跨域产生，那么干脆就把两个项目合并成一个项目，使用相同的协议、域名和端口。</p><h4>3.从jsonp入手</h4><p>其实认真想想，我们的系统中经常会用到外链的图片、样式文件以及插件，那这些不会导致跨域吗？是的，真的不会，因为这些是http请求，并不是前面定义的xhr（<a href="https://www.cnblogs.com/syfwhu/p/6116323.html" target="_blank" rel="nofollow">XmlHttpRequest</a>）请求。</p><p>既然图片和js脚本可以正常请求，那么如果把script脚本的src改成我需要跨域请求的url是不是就可以了呢？</p><p>是可以的，当请求接口返回的数据需要稍微处理下。在平常引入script脚本时，下载完文件后自动执行，如果我们把src改成跨域url，而且返回值是一段jjs语句，比如：</p></div><br></div></div><blockquote>测试文章，节选自简书<br>作者：MsgSS<br>链接：<a href="https://www.jianshu.com/p/5805fd1027eb">https://www.jianshu.com/p/5805fd1027eb<br></a>来源：简书</blockquote><br></div>',
        topic_id: 21,
        create_time: '2019-10-28T15:33:42.776Z',
        last_modify_time: '2019-10-28T15:33:42.776Z',
        comments: [
          {
            _id: '5db70ab3ea6bbf2e541bc170',
            commenter: 'root',
            content: '很好',
            floor: 1,
            create_time: '2019-10-28T15:35:15.763Z'
          },
          {
            _id: '5db70abcea6bbf2e541bc171',
            commenter: 'root',
            content: '测试回复',
            floor: 2,
            create_time: '2019-10-28T15:35:24.790Z'
          },
          {
            _id: '5df0a862f1cf05571f5a1b88',
            commenter: '123',
            content: 'hahha',
            floor: 3,
            create_time: '2019-12-11T08:27:14.843Z'
          }
        ],
        __v: 0,
        authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
      },
      {
        _id: '5db64f712ef33c4680585261',
        status: 0,
        browsed: 17,
        prefer: 0,
        author: 'Jiny',
        tag: '问答',
        title: '啊啊啊啊',
        content: '<p>深大深大所大所大所大</p>',
        topic_id: 20,
        create_time: '2019-10-28T02:16:17.964Z',
        last_modify_time: '2019-10-28T02:16:17.964Z',
        comments: [
          {
            _id: '5dd4df90f1cf05571f5a1b84',
            commenter: 'Jiny',
            content: '111',
            floor: 1,
            create_time: '2019-11-20T06:39:12.293Z'
          }
        ],
        __v: 0,
        authorAvatar: '38286730-fc61-11e9-be79-91717382b30e.jpg'
      },
      {
        _id: '5db1ac4330a73e2150ccc14c',
        status: 0,
        browsed: 31,
        prefer: 0,
        comments: [
          {
            _id: '5db2ffe98aebb00c18044a79',
            commenter: 'Jiny',
            content: '啊飒飒大',
            floor: 1,
            create_time: '2019-10-25T14:00:09.077Z'
          },
          {
            _id: '5db2ffed8aebb00c18044a7a',
            commenter: 'Jiny',
            content: '阿萨德阿萨德按时',
            floor: 2,
            create_time: '2019-10-25T14:00:13.192Z'
          },
          {
            _id: '5db5543245ff4b031c56917b',
            commenter: 'Jiny',
            content: 'hahaha',
            floor: 3,
            create_time: '2019-10-27T08:24:18.276Z'
          }
        ],
        author: 'admin',
        tag: '分享',
        title: '啊撒大声地',
        content:
          '<p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>',
        topic_id: 19,
        create_time: '2019-10-24T13:50:59.922Z',
        last_modify_time: '2019-10-24T13:50:59.922Z',
        __v: 0,
        authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
      },
      {
        _id: '5db13ade14cf6b4d6cdc9a4d',
        status: 0,
        browsed: 25,
        prefer: 0,
        comments: [
          {
            _id: '5db3fc7cfc84b236bc7b1124',
            commenter: 'Jiny',
            content: '按时打算大',
            floor: 1,
            create_time: '2019-10-26T07:57:48.783Z'
          },
          {
            _id: '5db80045f1cf05571f5a1b7e',
            commenter: 'root',
            content: '咩料',
            floor: 2,
            create_time: '2019-10-29T09:03:01.098Z'
          },
          {
            _id: '5dd64489f1cf05571f5a1b86',
            commenter: '张三',
            content: '你好',
            floor: 3,
            create_time: '2019-11-21T08:02:17.240Z'
          }
        ],
        author: 'admin',
        tag: '测试',
        title: '按时打算大所大大所大所大所大所',
        content: '<p>阿达阿萨德阿萨德阿萨德阿萨德按时按时</p>',
        topic_id: 17,
        create_time: '2019-10-24T05:47:10.309Z',
        last_modify_time: '2019-10-24T05:47:10.309Z',
        __v: 0,
        authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
      },
      {
        _id: '5db13aa414cf6b4d6cdc9a4c',
        status: 0,
        browsed: 5,
        prefer: 0,
        comments: [],
        author: 'admin',
        tag: '测试',
        title: '啊啊啊啊啊啊啊啊啊啊啊',
        content: '<p>阿萨德阿萨德阿萨德阿萨德按时的</p>',
        topic_id: 16,
        create_time: '2019-10-24T05:46:12.160Z',
        last_modify_time: '2019-10-24T05:46:12.160Z',
        __v: 0,
        authorAvatar: '2fa176e0-f9f7-11e9-b7d4-dde4358527b8.jpg'
      },
      {
        _id: '5db13a8b14cf6b4d6cdc9a4b',
        status: 0,
        browsed: 1,
        prefer: 0,
        comments: [],
        author: 'root',
        tag: '测试',
        title: '更新更新',
        content: '<p>123123123123</p>',
        topic_id: 15,
        create_time: '2019-10-24T05:45:47.242Z',
        last_modify_time: '2019-10-24T05:45:47.242Z',
        __v: 0,
        authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
      },
      {
        _id: '5db013beba46ac05d4f404df',
        status: 0,
        browsed: 2,
        prefer: 0,
        comments: [],
        author: 'root',
        tag: '分享',
        title: '哈哈哈哈哈',
        content: '<p>哈哈哈哈哈哈哈哈哈哈哈</p>',
        topic_id: 14,
        create_time: '2019-10-23T08:47:58.143Z',
        last_modify_time: '2019-10-23T08:47:58.143Z',
        __v: 0,
        authorAvatar: '0e15b770-f56f-11e9-be41-190e4f139c70.jpg'
      }
    ]
    this.totalTopics = 23
    // getTopics(1, '全部').then(res => {
    //   this.topics = res.data.topics
    //   this.totalTopics = res.data.totalTopics
    // })
  }
}
</script>

<style scoped></style>
