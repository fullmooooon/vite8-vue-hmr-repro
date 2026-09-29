<template>
  <section class="heavy-panel" :data-tick="probeTick">
    <h2>HeavyPanel</h2>
    <p class="hmr-marker">HMR TEST 1</p>
    <p class="hmr-state">
      clicked = <b>{{ count }}</b>
      <button type="button" @click="bump">+1</button>
      · component mounted at = {{ mountedAt }}
      · last HMR event = {{ hmrLog || '(none yet)' }}
      <span class="zh">（点击计数 · 组件挂载时间 · 最近一次 HMR 事件）</span>
    </p>
    <div class="grid">
      <!-- reproduction entry: comment / uncomment this toggle-block, then save -->
      <!-- 复现入口：反复注释 / 取消注释下面这个 toggle-block，保存后看页面顶部三行信息 -->
      <!-- <div id="toggle-block">
      <div class="row row--banner" data-banner="toggle-block"><span class="banner">toggle-block is RENDERED — comment it out and save; if this banner is still here, that save was swallowed</span></div>
      <div class="row" data-row="r-0">
        <div class="cell" data-cell="c-0-0"><span class="cell__label">c-0-0</span><span class="cell__value">33.08</span></div>
        <div class="cell" data-cell="c-0-1"><span class="cell__label">c-0-1</span><span class="cell__value">73.70</span></div>
        <div class="cell" data-cell="c-0-2"><span class="cell__label">c-0-2</span><span class="cell__value">29.23</span></div>
        <div class="cell" data-cell="c-0-3"><span class="cell__label">c-0-3</span><span class="cell__value">25.46</span></div>
        <div class="cell" data-cell="c-0-4"><span class="cell__label">c-0-4</span><span class="cell__value">59.69</span></div>
        <div class="cell" data-cell="c-0-5"><span class="cell__label">c-0-5</span><span class="cell__value">33.82</span></div>
        <div class="cell" data-cell="c-0-6"><span class="cell__label">c-0-6</span><span class="cell__value">60.43</span></div>
        <div class="cell" data-cell="c-0-7"><span class="cell__label">c-0-7</span><span class="cell__value">11.99</span></div>
        <div class="cell" data-cell="c-0-8"><span class="cell__label">c-0-8</span><span class="cell__value">64.55</span></div>
        <div class="cell" data-cell="c-0-9"><span class="cell__label">c-0-9</span><span class="cell__value">23.23</span></div>
        <div class="cell" data-cell="c-0-10"><span class="cell__label">c-0-10</span><span class="cell__value">62.52</span></div>
        <div class="cell" data-cell="c-0-11"><span class="cell__label">c-0-11</span><span class="cell__value">93.26</span></div>
        <div class="cell" data-cell="c-0-12"><span class="cell__label">c-0-12</span><span class="cell__value">59.03</span></div>
        <div class="cell" data-cell="c-0-13"><span class="cell__label">c-0-13</span><span class="cell__value">43.50</span></div>
        <div class="cell" data-cell="c-0-14"><span class="cell__label">c-0-14</span><span class="cell__value">21.39</span></div>
        <div class="cell" data-cell="c-0-15"><span class="cell__label">c-0-15</span><span class="cell__value">30.63</span></div>
        <div class="cell" data-cell="c-0-16"><span class="cell__label">c-0-16</span><span class="cell__value">86.39</span></div>
        <div class="cell" data-cell="c-0-17"><span class="cell__label">c-0-17</span><span class="cell__value">85.97</span></div>
        <div class="cell" data-cell="c-0-18"><span class="cell__label">c-0-18</span><span class="cell__value">83.47</span></div>
        <div class="cell" data-cell="c-0-19"><span class="cell__label">c-0-19</span><span class="cell__value">79.88</span></div>
      </div>
      <div class="row" data-row="r-1">
        <div class="cell" data-cell="c-1-0"><span class="cell__label">c-1-0</span><span class="cell__value">65.11</span></div>
        <div class="cell" data-cell="c-1-1"><span class="cell__label">c-1-1</span><span class="cell__value">18.02</span></div>
        <div class="cell" data-cell="c-1-2"><span class="cell__label">c-1-2</span><span class="cell__value">83.60</span></div>
        <div class="cell" data-cell="c-1-3"><span class="cell__label">c-1-3</span><span class="cell__value">53.85</span></div>
        <div class="cell" data-cell="c-1-4"><span class="cell__label">c-1-4</span><span class="cell__value">0.64</span></div>
        <div class="cell" data-cell="c-1-5"><span class="cell__label">c-1-5</span><span class="cell__value">20.60</span></div>
        <div class="cell" data-cell="c-1-6"><span class="cell__label">c-1-6</span><span class="cell__value">86.90</span></div>
        <div class="cell" data-cell="c-1-7"><span class="cell__label">c-1-7</span><span class="cell__value">10.30</span></div>
        <div class="cell" data-cell="c-1-8"><span class="cell__label">c-1-8</span><span class="cell__value">83.00</span></div>
        <div class="cell" data-cell="c-1-9"><span class="cell__label">c-1-9</span><span class="cell__value">71.88</span></div>
        <div class="cell" data-cell="c-1-10"><span class="cell__label">c-1-10</span><span class="cell__value">65.26</span></div>
        <div class="cell" data-cell="c-1-11"><span class="cell__label">c-1-11</span><span class="cell__value">18.00</span></div>
        <div class="cell" data-cell="c-1-12"><span class="cell__label">c-1-12</span><span class="cell__value">12.23</span></div>
        <div class="cell" data-cell="c-1-13"><span class="cell__label">c-1-13</span><span class="cell__value">32.88</span></div>
        <div class="cell" data-cell="c-1-14"><span class="cell__label">c-1-14</span><span class="cell__value">53.56</span></div>
        <div class="cell" data-cell="c-1-15"><span class="cell__label">c-1-15</span><span class="cell__value">21.21</span></div>
        <div class="cell" data-cell="c-1-16"><span class="cell__label">c-1-16</span><span class="cell__value">40.58</span></div>
        <div class="cell" data-cell="c-1-17"><span class="cell__label">c-1-17</span><span class="cell__value">14.21</span></div>
        <div class="cell" data-cell="c-1-18"><span class="cell__label">c-1-18</span><span class="cell__value">50.41</span></div>
        <div class="cell" data-cell="c-1-19"><span class="cell__label">c-1-19</span><span class="cell__value">72.18</span></div>
      </div>
      <div class="row" data-row="r-2">
        <div class="cell" data-cell="c-2-0"><span class="cell__label">c-2-0</span><span class="cell__value">87.57</span></div>
        <div class="cell" data-cell="c-2-1"><span class="cell__label">c-2-1</span><span class="cell__value">36.66</span></div>
        <div class="cell" data-cell="c-2-2"><span class="cell__label">c-2-2</span><span class="cell__value">99.96</span></div>
        <div class="cell" data-cell="c-2-3"><span class="cell__label">c-2-3</span><span class="cell__value">47.27</span></div>
        <div class="cell" data-cell="c-2-4"><span class="cell__label">c-2-4</span><span class="cell__value">38.77</span></div>
        <div class="cell" data-cell="c-2-5"><span class="cell__label">c-2-5</span><span class="cell__value">90.99</span></div>
        <div class="cell" data-cell="c-2-6"><span class="cell__label">c-2-6</span><span class="cell__value">26.04</span></div>
        <div class="cell" data-cell="c-2-7"><span class="cell__label">c-2-7</span><span class="cell__value">3.12</span></div>
        <div class="cell" data-cell="c-2-8"><span class="cell__label">c-2-8</span><span class="cell__value">94.17</span></div>
        <div class="cell" data-cell="c-2-9"><span class="cell__label">c-2-9</span><span class="cell__value">33.93</span></div>
        <div class="cell" data-cell="c-2-10"><span class="cell__label">c-2-10</span><span class="cell__value">31.01</span></div>
        <div class="cell" data-cell="c-2-11"><span class="cell__label">c-2-11</span><span class="cell__value">53.14</span></div>
        <div class="cell" data-cell="c-2-12"><span class="cell__label">c-2-12</span><span class="cell__value">79.72</span></div>
        <div class="cell" data-cell="c-2-13"><span class="cell__label">c-2-13</span><span class="cell__value">84.45</span></div>
        <div class="cell" data-cell="c-2-14"><span class="cell__label">c-2-14</span><span class="cell__value">12.42</span></div>
        <div class="cell" data-cell="c-2-15"><span class="cell__label">c-2-15</span><span class="cell__value">97.86</span></div>
        <div class="cell" data-cell="c-2-16"><span class="cell__label">c-2-16</span><span class="cell__value">15.17</span></div>
        <div class="cell" data-cell="c-2-17"><span class="cell__label">c-2-17</span><span class="cell__value">58.43</span></div>
        <div class="cell" data-cell="c-2-18"><span class="cell__label">c-2-18</span><span class="cell__value">38.54</span></div>
        <div class="cell" data-cell="c-2-19"><span class="cell__label">c-2-19</span><span class="cell__value">17.35</span></div>
      </div>
      <div class="row" data-row="r-3">
        <div class="cell" data-cell="c-3-0"><span class="cell__label">c-3-0</span><span class="cell__value">49.88</span></div>
        <div class="cell" data-cell="c-3-1"><span class="cell__label">c-3-1</span><span class="cell__value">64.96</span></div>
        <div class="cell" data-cell="c-3-2"><span class="cell__label">c-3-2</span><span class="cell__value">53.66</span></div>
        <div class="cell" data-cell="c-3-3"><span class="cell__label">c-3-3</span><span class="cell__value">18.86</span></div>
        <div class="cell" data-cell="c-3-4"><span class="cell__label">c-3-4</span><span class="cell__value">77.46</span></div>
        <div class="cell" data-cell="c-3-5"><span class="cell__label">c-3-5</span><span class="cell__value">17.69</span></div>
        <div class="cell" data-cell="c-3-6"><span class="cell__label">c-3-6</span><span class="cell__value">8.59</span></div>
        <div class="cell" data-cell="c-3-7"><span class="cell__label">c-3-7</span><span class="cell__value">54.59</span></div>
        <div class="cell" data-cell="c-3-8"><span class="cell__label">c-3-8</span><span class="cell__value">85.16</span></div>
        <div class="cell" data-cell="c-3-9"><span class="cell__label">c-3-9</span><span class="cell__value">48.50</span></div>
        <div class="cell" data-cell="c-3-10"><span class="cell__label">c-3-10</span><span class="cell__value">49.22</span></div>
        <div class="cell" data-cell="c-3-11"><span class="cell__label">c-3-11</span><span class="cell__value">7.54</span></div>
        <div class="cell" data-cell="c-3-12"><span class="cell__label">c-3-12</span><span class="cell__value">76.46</span></div>
        <div class="cell" data-cell="c-3-13"><span class="cell__label">c-3-13</span><span class="cell__value">60.23</span></div>
        <div class="cell" data-cell="c-3-14"><span class="cell__label">c-3-14</span><span class="cell__value">78.91</span></div>
        <div class="cell" data-cell="c-3-15"><span class="cell__label">c-3-15</span><span class="cell__value">34.48</span></div>
        <div class="cell" data-cell="c-3-16"><span class="cell__label">c-3-16</span><span class="cell__value">32.26</span></div>
        <div class="cell" data-cell="c-3-17"><span class="cell__label">c-3-17</span><span class="cell__value">32.75</span></div>
        <div class="cell" data-cell="c-3-18"><span class="cell__label">c-3-18</span><span class="cell__value">46.85</span></div>
        <div class="cell" data-cell="c-3-19"><span class="cell__label">c-3-19</span><span class="cell__value">56.48</span></div>
      </div>
      <div class="row" data-row="r-4">
        <div class="cell" data-cell="c-4-0"><span class="cell__label">c-4-0</span><span class="cell__value">16.18</span></div>
        <div class="cell" data-cell="c-4-1"><span class="cell__label">c-4-1</span><span class="cell__value">77.90</span></div>
        <div class="cell" data-cell="c-4-2"><span class="cell__label">c-4-2</span><span class="cell__value">82.38</span></div>
        <div class="cell" data-cell="c-4-3"><span class="cell__label">c-4-3</span><span class="cell__value">21.98</span></div>
        <div class="cell" data-cell="c-4-4"><span class="cell__label">c-4-4</span><span class="cell__value">47.46</span></div>
        <div class="cell" data-cell="c-4-5"><span class="cell__label">c-4-5</span><span class="cell__value">29.31</span></div>
        <div class="cell" data-cell="c-4-6"><span class="cell__label">c-4-6</span><span class="cell__value">73.19</span></div>
        <div class="cell" data-cell="c-4-7"><span class="cell__label">c-4-7</span><span class="cell__value">76.55</span></div>
        <div class="cell" data-cell="c-4-8"><span class="cell__label">c-4-8</span><span class="cell__value">52.02</span></div>
        <div class="cell" data-cell="c-4-9"><span class="cell__label">c-4-9</span><span class="cell__value">70.72</span></div>
        <div class="cell" data-cell="c-4-10"><span class="cell__label">c-4-10</span><span class="cell__value">46.86</span></div>
        <div class="cell" data-cell="c-4-11"><span class="cell__label">c-4-11</span><span class="cell__value">33.57</span></div>
        <div class="cell" data-cell="c-4-12"><span class="cell__label">c-4-12</span><span class="cell__value">18.46</span></div>
        <div class="cell" data-cell="c-4-13"><span class="cell__label">c-4-13</span><span class="cell__value">77.07</span></div>
        <div class="cell" data-cell="c-4-14"><span class="cell__label">c-4-14</span><span class="cell__value">42.81</span></div>
        <div class="cell" data-cell="c-4-15"><span class="cell__label">c-4-15</span><span class="cell__value">88.64</span></div>
        <div class="cell" data-cell="c-4-16"><span class="cell__label">c-4-16</span><span class="cell__value">13.99</span></div>
        <div class="cell" data-cell="c-4-17"><span class="cell__label">c-4-17</span><span class="cell__value">78.47</span></div>
        <div class="cell" data-cell="c-4-18"><span class="cell__label">c-4-18</span><span class="cell__value">6.66</span></div>
        <div class="cell" data-cell="c-4-19"><span class="cell__label">c-4-19</span><span class="cell__value">80.82</span></div>
      </div>
      <div class="row" data-row="r-5">
        <div class="cell" data-cell="c-5-0"><span class="cell__label">c-5-0</span><span class="cell__value">65.90</span></div>
        <div class="cell" data-cell="c-5-1"><span class="cell__label">c-5-1</span><span class="cell__value">5.67</span></div>
        <div class="cell" data-cell="c-5-2"><span class="cell__label">c-5-2</span><span class="cell__value">71.17</span></div>
        <div class="cell" data-cell="c-5-3"><span class="cell__label">c-5-3</span><span class="cell__value">65.42</span></div>
        <div class="cell" data-cell="c-5-4"><span class="cell__label">c-5-4</span><span class="cell__value">8.15</span></div>
        <div class="cell" data-cell="c-5-5"><span class="cell__label">c-5-5</span><span class="cell__value">82.87</span></div>
        <div class="cell" data-cell="c-5-6"><span class="cell__label">c-5-6</span><span class="cell__value">14.87</span></div>
        <div class="cell" data-cell="c-5-7"><span class="cell__label">c-5-7</span><span class="cell__value">48.02</span></div>
        <div class="cell" data-cell="c-5-8"><span class="cell__label">c-5-8</span><span class="cell__value">9.98</span></div>
        <div class="cell" data-cell="c-5-9"><span class="cell__label">c-5-9</span><span class="cell__value">79.81</span></div>
        <div class="cell" data-cell="c-5-10"><span class="cell__label">c-5-10</span><span class="cell__value">71.87</span></div>
        <div class="cell" data-cell="c-5-11"><span class="cell__label">c-5-11</span><span class="cell__value">65.14</span></div>
        <div class="cell" data-cell="c-5-12"><span class="cell__label">c-5-12</span><span class="cell__value">98.11</span></div>
        <div class="cell" data-cell="c-5-13"><span class="cell__label">c-5-13</span><span class="cell__value">22.34</span></div>
        <div class="cell" data-cell="c-5-14"><span class="cell__label">c-5-14</span><span class="cell__value">44.81</span></div>
        <div class="cell" data-cell="c-5-15"><span class="cell__label">c-5-15</span><span class="cell__value">71.59</span></div>
        <div class="cell" data-cell="c-5-16"><span class="cell__label">c-5-16</span><span class="cell__value">27.53</span></div>
        <div class="cell" data-cell="c-5-17"><span class="cell__label">c-5-17</span><span class="cell__value">94.28</span></div>
        <div class="cell" data-cell="c-5-18"><span class="cell__label">c-5-18</span><span class="cell__value">80.34</span></div>
        <div class="cell" data-cell="c-5-19"><span class="cell__label">c-5-19</span><span class="cell__value">89.99</span></div>
      </div>
      <div class="row" data-row="r-6">
        <div class="cell" data-cell="c-6-0"><span class="cell__label">c-6-0</span><span class="cell__value">65.34</span></div>
        <div class="cell" data-cell="c-6-1"><span class="cell__label">c-6-1</span><span class="cell__value">38.74</span></div>
        <div class="cell" data-cell="c-6-2"><span class="cell__label">c-6-2</span><span class="cell__value">93.56</span></div>
        <div class="cell" data-cell="c-6-3"><span class="cell__label">c-6-3</span><span class="cell__value">50.69</span></div>
        <div class="cell" data-cell="c-6-4"><span class="cell__label">c-6-4</span><span class="cell__value">5.46</span></div>
        <div class="cell" data-cell="c-6-5"><span class="cell__label">c-6-5</span><span class="cell__value">82.65</span></div>
        <div class="cell" data-cell="c-6-6"><span class="cell__label">c-6-6</span><span class="cell__value">50.34</span></div>
        <div class="cell" data-cell="c-6-7"><span class="cell__label">c-6-7</span><span class="cell__value">11.65</span></div>
        <div class="cell" data-cell="c-6-8"><span class="cell__label">c-6-8</span><span class="cell__value">17.71</span></div>
        <div class="cell" data-cell="c-6-9"><span class="cell__label">c-6-9</span><span class="cell__value">99.40</span></div>
        <div class="cell" data-cell="c-6-10"><span class="cell__label">c-6-10</span><span class="cell__value">63.43</span></div>
        <div class="cell" data-cell="c-6-11"><span class="cell__label">c-6-11</span><span class="cell__value">68.73</span></div>
        <div class="cell" data-cell="c-6-12"><span class="cell__label">c-6-12</span><span class="cell__value">97.41</span></div>
        <div class="cell" data-cell="c-6-13"><span class="cell__label">c-6-13</span><span class="cell__value">69.90</span></div>
        <div class="cell" data-cell="c-6-14"><span class="cell__label">c-6-14</span><span class="cell__value">98.12</span></div>
        <div class="cell" data-cell="c-6-15"><span class="cell__label">c-6-15</span><span class="cell__value">99.69</span></div>
        <div class="cell" data-cell="c-6-16"><span class="cell__label">c-6-16</span><span class="cell__value">45.78</span></div>
        <div class="cell" data-cell="c-6-17"><span class="cell__label">c-6-17</span><span class="cell__value">2.44</span></div>
        <div class="cell" data-cell="c-6-18"><span class="cell__label">c-6-18</span><span class="cell__value">51.54</span></div>
        <div class="cell" data-cell="c-6-19"><span class="cell__label">c-6-19</span><span class="cell__value">30.00</span></div>
      </div>
      <div class="row" data-row="r-7">
        <div class="cell" data-cell="c-7-0"><span class="cell__label">c-7-0</span><span class="cell__value">36.52</span></div>
        <div class="cell" data-cell="c-7-1"><span class="cell__label">c-7-1</span><span class="cell__value">8.73</span></div>
        <div class="cell" data-cell="c-7-2"><span class="cell__label">c-7-2</span><span class="cell__value">65.62</span></div>
        <div class="cell" data-cell="c-7-3"><span class="cell__label">c-7-3</span><span class="cell__value">54.97</span></div>
        <div class="cell" data-cell="c-7-4"><span class="cell__label">c-7-4</span><span class="cell__value">34.03</span></div>
        <div class="cell" data-cell="c-7-5"><span class="cell__label">c-7-5</span><span class="cell__value">51.27</span></div>
        <div class="cell" data-cell="c-7-6"><span class="cell__label">c-7-6</span><span class="cell__value">59.10</span></div>
        <div class="cell" data-cell="c-7-7"><span class="cell__label">c-7-7</span><span class="cell__value">10.45</span></div>
        <div class="cell" data-cell="c-7-8"><span class="cell__label">c-7-8</span><span class="cell__value">53.90</span></div>
        <div class="cell" data-cell="c-7-9"><span class="cell__label">c-7-9</span><span class="cell__value">81.98</span></div>
        <div class="cell" data-cell="c-7-10"><span class="cell__label">c-7-10</span><span class="cell__value">80.86</span></div>
        <div class="cell" data-cell="c-7-11"><span class="cell__label">c-7-11</span><span class="cell__value">69.57</span></div>
        <div class="cell" data-cell="c-7-12"><span class="cell__label">c-7-12</span><span class="cell__value">0.16</span></div>
        <div class="cell" data-cell="c-7-13"><span class="cell__label">c-7-13</span><span class="cell__value">82.31</span></div>
        <div class="cell" data-cell="c-7-14"><span class="cell__label">c-7-14</span><span class="cell__value">82.91</span></div>
        <div class="cell" data-cell="c-7-15"><span class="cell__label">c-7-15</span><span class="cell__value">9.54</span></div>
        <div class="cell" data-cell="c-7-16"><span class="cell__label">c-7-16</span><span class="cell__value">5.11</span></div>
        <div class="cell" data-cell="c-7-17"><span class="cell__label">c-7-17</span><span class="cell__value">77.40</span></div>
        <div class="cell" data-cell="c-7-18"><span class="cell__label">c-7-18</span><span class="cell__value">63.83</span></div>
        <div class="cell" data-cell="c-7-19"><span class="cell__label">c-7-19</span><span class="cell__value">64.37</span></div>
      </div>
      <div class="row" data-row="r-8">
        <div class="cell" data-cell="c-8-0"><span class="cell__label">c-8-0</span><span class="cell__value">53.74</span></div>
        <div class="cell" data-cell="c-8-1"><span class="cell__label">c-8-1</span><span class="cell__value">49.59</span></div>
        <div class="cell" data-cell="c-8-2"><span class="cell__label">c-8-2</span><span class="cell__value">54.24</span></div>
        <div class="cell" data-cell="c-8-3"><span class="cell__label">c-8-3</span><span class="cell__value">32.65</span></div>
        <div class="cell" data-cell="c-8-4"><span class="cell__label">c-8-4</span><span class="cell__value">42.96</span></div>
        <div class="cell" data-cell="c-8-5"><span class="cell__label">c-8-5</span><span class="cell__value">63.59</span></div>
        <div class="cell" data-cell="c-8-6"><span class="cell__label">c-8-6</span><span class="cell__value">62.05</span></div>
        <div class="cell" data-cell="c-8-7"><span class="cell__label">c-8-7</span><span class="cell__value">39.01</span></div>
        <div class="cell" data-cell="c-8-8"><span class="cell__label">c-8-8</span><span class="cell__value">17.95</span></div>
        <div class="cell" data-cell="c-8-9"><span class="cell__label">c-8-9</span><span class="cell__value">84.56</span></div>
        <div class="cell" data-cell="c-8-10"><span class="cell__label">c-8-10</span><span class="cell__value">32.20</span></div>
        <div class="cell" data-cell="c-8-11"><span class="cell__label">c-8-11</span><span class="cell__value">99.35</span></div>
        <div class="cell" data-cell="c-8-12"><span class="cell__label">c-8-12</span><span class="cell__value">7.50</span></div>
        <div class="cell" data-cell="c-8-13"><span class="cell__label">c-8-13</span><span class="cell__value">1.68</span></div>
        <div class="cell" data-cell="c-8-14"><span class="cell__label">c-8-14</span><span class="cell__value">33.39</span></div>
        <div class="cell" data-cell="c-8-15"><span class="cell__label">c-8-15</span><span class="cell__value">55.40</span></div>
        <div class="cell" data-cell="c-8-16"><span class="cell__label">c-8-16</span><span class="cell__value">96.01</span></div>
        <div class="cell" data-cell="c-8-17"><span class="cell__label">c-8-17</span><span class="cell__value">70.26</span></div>
        <div class="cell" data-cell="c-8-18"><span class="cell__label">c-8-18</span><span class="cell__value">35.38</span></div>
        <div class="cell" data-cell="c-8-19"><span class="cell__label">c-8-19</span><span class="cell__value">4.65</span></div>
      </div>
      <div class="row" data-row="r-9">
        <div class="cell" data-cell="c-9-0"><span class="cell__label">c-9-0</span><span class="cell__value">36.31</span></div>
        <div class="cell" data-cell="c-9-1"><span class="cell__label">c-9-1</span><span class="cell__value">40.36</span></div>
        <div class="cell" data-cell="c-9-2"><span class="cell__label">c-9-2</span><span class="cell__value">4.51</span></div>
        <div class="cell" data-cell="c-9-3"><span class="cell__label">c-9-3</span><span class="cell__value">74.69</span></div>
        <div class="cell" data-cell="c-9-4"><span class="cell__label">c-9-4</span><span class="cell__value">71.83</span></div>
        <div class="cell" data-cell="c-9-5"><span class="cell__label">c-9-5</span><span class="cell__value">92.37</span></div>
        <div class="cell" data-cell="c-9-6"><span class="cell__label">c-9-6</span><span class="cell__value">70.84</span></div>
        <div class="cell" data-cell="c-9-7"><span class="cell__label">c-9-7</span><span class="cell__value">53.52</span></div>
        <div class="cell" data-cell="c-9-8"><span class="cell__label">c-9-8</span><span class="cell__value">39.12</span></div>
        <div class="cell" data-cell="c-9-9"><span class="cell__label">c-9-9</span><span class="cell__value">2.14</span></div>
        <div class="cell" data-cell="c-9-10"><span class="cell__label">c-9-10</span><span class="cell__value">63.11</span></div>
        <div class="cell" data-cell="c-9-11"><span class="cell__label">c-9-11</span><span class="cell__value">64.00</span></div>
        <div class="cell" data-cell="c-9-12"><span class="cell__label">c-9-12</span><span class="cell__value">43.60</span></div>
        <div class="cell" data-cell="c-9-13"><span class="cell__label">c-9-13</span><span class="cell__value">10.60</span></div>
        <div class="cell" data-cell="c-9-14"><span class="cell__label">c-9-14</span><span class="cell__value">34.51</span></div>
        <div class="cell" data-cell="c-9-15"><span class="cell__label">c-9-15</span><span class="cell__value">43.73</span></div>
        <div class="cell" data-cell="c-9-16"><span class="cell__label">c-9-16</span><span class="cell__value">90.45</span></div>
        <div class="cell" data-cell="c-9-17"><span class="cell__label">c-9-17</span><span class="cell__value">63.19</span></div>
        <div class="cell" data-cell="c-9-18"><span class="cell__label">c-9-18</span><span class="cell__value">14.22</span></div>
        <div class="cell" data-cell="c-9-19"><span class="cell__label">c-9-19</span><span class="cell__value">90.79</span></div>
      </div>
      <div class="row" data-row="r-10">
        <div class="cell" data-cell="c-10-0"><span class="cell__label">c-10-0</span><span class="cell__value">3.43</span></div>
        <div class="cell" data-cell="c-10-1"><span class="cell__label">c-10-1</span><span class="cell__value">19.24</span></div>
        <div class="cell" data-cell="c-10-2"><span class="cell__label">c-10-2</span><span class="cell__value">64.68</span></div>
        <div class="cell" data-cell="c-10-3"><span class="cell__label">c-10-3</span><span class="cell__value">29.73</span></div>
        <div class="cell" data-cell="c-10-4"><span class="cell__label">c-10-4</span><span class="cell__value">79.06</span></div>
        <div class="cell" data-cell="c-10-5"><span class="cell__label">c-10-5</span><span class="cell__value">94.68</span></div>
        <div class="cell" data-cell="c-10-6"><span class="cell__label">c-10-6</span><span class="cell__value">14.11</span></div>
        <div class="cell" data-cell="c-10-7"><span class="cell__label">c-10-7</span><span class="cell__value">64.21</span></div>
        <div class="cell" data-cell="c-10-8"><span class="cell__label">c-10-8</span><span class="cell__value">67.69</span></div>
        <div class="cell" data-cell="c-10-9"><span class="cell__label">c-10-9</span><span class="cell__value">59.87</span></div>
        <div class="cell" data-cell="c-10-10"><span class="cell__label">c-10-10</span><span class="cell__value">35.02</span></div>
        <div class="cell" data-cell="c-10-11"><span class="cell__label">c-10-11</span><span class="cell__value">63.16</span></div>
        <div class="cell" data-cell="c-10-12"><span class="cell__label">c-10-12</span><span class="cell__value">53.72</span></div>
        <div class="cell" data-cell="c-10-13"><span class="cell__label">c-10-13</span><span class="cell__value">20.02</span></div>
        <div class="cell" data-cell="c-10-14"><span class="cell__label">c-10-14</span><span class="cell__value">53.68</span></div>
        <div class="cell" data-cell="c-10-15"><span class="cell__label">c-10-15</span><span class="cell__value">78.31</span></div>
        <div class="cell" data-cell="c-10-16"><span class="cell__label">c-10-16</span><span class="cell__value">7.99</span></div>
        <div class="cell" data-cell="c-10-17"><span class="cell__label">c-10-17</span><span class="cell__value">3.82</span></div>
        <div class="cell" data-cell="c-10-18"><span class="cell__label">c-10-18</span><span class="cell__value">79.80</span></div>
        <div class="cell" data-cell="c-10-19"><span class="cell__label">c-10-19</span><span class="cell__value">46.96</span></div>
      </div>
      <div class="row" data-row="r-11">
        <div class="cell" data-cell="c-11-0"><span class="cell__label">c-11-0</span><span class="cell__value">54.54</span></div>
        <div class="cell" data-cell="c-11-1"><span class="cell__label">c-11-1</span><span class="cell__value">72.13</span></div>
        <div class="cell" data-cell="c-11-2"><span class="cell__label">c-11-2</span><span class="cell__value">89.40</span></div>
        <div class="cell" data-cell="c-11-3"><span class="cell__label">c-11-3</span><span class="cell__value">92.45</span></div>
        <div class="cell" data-cell="c-11-4"><span class="cell__label">c-11-4</span><span class="cell__value">83.26</span></div>
        <div class="cell" data-cell="c-11-5"><span class="cell__label">c-11-5</span><span class="cell__value">8.36</span></div>
        <div class="cell" data-cell="c-11-6"><span class="cell__label">c-11-6</span><span class="cell__value">3.78</span></div>
        <div class="cell" data-cell="c-11-7"><span class="cell__label">c-11-7</span><span class="cell__value">12.79</span></div>
        <div class="cell" data-cell="c-11-8"><span class="cell__label">c-11-8</span><span class="cell__value">54.04</span></div>
        <div class="cell" data-cell="c-11-9"><span class="cell__label">c-11-9</span><span class="cell__value">36.00</span></div>
        <div class="cell" data-cell="c-11-10"><span class="cell__label">c-11-10</span><span class="cell__value">82.91</span></div>
        <div class="cell" data-cell="c-11-11"><span class="cell__label">c-11-11</span><span class="cell__value">48.45</span></div>
        <div class="cell" data-cell="c-11-12"><span class="cell__label">c-11-12</span><span class="cell__value">77.43</span></div>
        <div class="cell" data-cell="c-11-13"><span class="cell__label">c-11-13</span><span class="cell__value">17.75</span></div>
        <div class="cell" data-cell="c-11-14"><span class="cell__label">c-11-14</span><span class="cell__value">50.87</span></div>
        <div class="cell" data-cell="c-11-15"><span class="cell__label">c-11-15</span><span class="cell__value">28.25</span></div>
        <div class="cell" data-cell="c-11-16"><span class="cell__label">c-11-16</span><span class="cell__value">84.55</span></div>
        <div class="cell" data-cell="c-11-17"><span class="cell__label">c-11-17</span><span class="cell__value">9.57</span></div>
        <div class="cell" data-cell="c-11-18"><span class="cell__label">c-11-18</span><span class="cell__value">30.64</span></div>
        <div class="cell" data-cell="c-11-19"><span class="cell__label">c-11-19</span><span class="cell__value">70.87</span></div>
      </div>
      <div class="row" data-row="r-12">
        <div class="cell" data-cell="c-12-0"><span class="cell__label">c-12-0</span><span class="cell__value">95.87</span></div>
        <div class="cell" data-cell="c-12-1"><span class="cell__label">c-12-1</span><span class="cell__value">18.33</span></div>
        <div class="cell" data-cell="c-12-2"><span class="cell__label">c-12-2</span><span class="cell__value">22.03</span></div>
        <div class="cell" data-cell="c-12-3"><span class="cell__label">c-12-3</span><span class="cell__value">42.53</span></div>
        <div class="cell" data-cell="c-12-4"><span class="cell__label">c-12-4</span><span class="cell__value">18.24</span></div>
        <div class="cell" data-cell="c-12-5"><span class="cell__label">c-12-5</span><span class="cell__value">30.51</span></div>
        <div class="cell" data-cell="c-12-6"><span class="cell__label">c-12-6</span><span class="cell__value">89.98</span></div>
        <div class="cell" data-cell="c-12-7"><span class="cell__label">c-12-7</span><span class="cell__value">7.64</span></div>
        <div class="cell" data-cell="c-12-8"><span class="cell__label">c-12-8</span><span class="cell__value">45.01</span></div>
        <div class="cell" data-cell="c-12-9"><span class="cell__label">c-12-9</span><span class="cell__value">98.82</span></div>
        <div class="cell" data-cell="c-12-10"><span class="cell__label">c-12-10</span><span class="cell__value">40.48</span></div>
        <div class="cell" data-cell="c-12-11"><span class="cell__label">c-12-11</span><span class="cell__value">35.42</span></div>
        <div class="cell" data-cell="c-12-12"><span class="cell__label">c-12-12</span><span class="cell__value">49.28</span></div>
        <div class="cell" data-cell="c-12-13"><span class="cell__label">c-12-13</span><span class="cell__value">36.58</span></div>
        <div class="cell" data-cell="c-12-14"><span class="cell__label">c-12-14</span><span class="cell__value">91.44</span></div>
        <div class="cell" data-cell="c-12-15"><span class="cell__label">c-12-15</span><span class="cell__value">23.56</span></div>
        <div class="cell" data-cell="c-12-16"><span class="cell__label">c-12-16</span><span class="cell__value">72.69</span></div>
        <div class="cell" data-cell="c-12-17"><span class="cell__label">c-12-17</span><span class="cell__value">4.54</span></div>
        <div class="cell" data-cell="c-12-18"><span class="cell__label">c-12-18</span><span class="cell__value">91.58</span></div>
        <div class="cell" data-cell="c-12-19"><span class="cell__label">c-12-19</span><span class="cell__value">38.79</span></div>
      </div>
      <div class="row" data-row="r-13">
        <div class="cell" data-cell="c-13-0"><span class="cell__label">c-13-0</span><span class="cell__value">61.57</span></div>
        <div class="cell" data-cell="c-13-1"><span class="cell__label">c-13-1</span><span class="cell__value">61.67</span></div>
        <div class="cell" data-cell="c-13-2"><span class="cell__label">c-13-2</span><span class="cell__value">6.88</span></div>
        <div class="cell" data-cell="c-13-3"><span class="cell__label">c-13-3</span><span class="cell__value">69.07</span></div>
        <div class="cell" data-cell="c-13-4"><span class="cell__label">c-13-4</span><span class="cell__value">70.67</span></div>
        <div class="cell" data-cell="c-13-5"><span class="cell__label">c-13-5</span><span class="cell__value">84.04</span></div>
        <div class="cell" data-cell="c-13-6"><span class="cell__label">c-13-6</span><span class="cell__value">84.60</span></div>
        <div class="cell" data-cell="c-13-7"><span class="cell__label">c-13-7</span><span class="cell__value">44.03</span></div>
        <div class="cell" data-cell="c-13-8"><span class="cell__label">c-13-8</span><span class="cell__value">35.89</span></div>
        <div class="cell" data-cell="c-13-9"><span class="cell__label">c-13-9</span><span class="cell__value">75.21</span></div>
        <div class="cell" data-cell="c-13-10"><span class="cell__label">c-13-10</span><span class="cell__value">92.20</span></div>
        <div class="cell" data-cell="c-13-11"><span class="cell__label">c-13-11</span><span class="cell__value">86.65</span></div>
        <div class="cell" data-cell="c-13-12"><span class="cell__label">c-13-12</span><span class="cell__value">11.83</span></div>
        <div class="cell" data-cell="c-13-13"><span class="cell__label">c-13-13</span><span class="cell__value">40.79</span></div>
        <div class="cell" data-cell="c-13-14"><span class="cell__label">c-13-14</span><span class="cell__value">48.94</span></div>
        <div class="cell" data-cell="c-13-15"><span class="cell__label">c-13-15</span><span class="cell__value">16.34</span></div>
        <div class="cell" data-cell="c-13-16"><span class="cell__label">c-13-16</span><span class="cell__value">66.73</span></div>
        <div class="cell" data-cell="c-13-17"><span class="cell__label">c-13-17</span><span class="cell__value">21.49</span></div>
        <div class="cell" data-cell="c-13-18"><span class="cell__label">c-13-18</span><span class="cell__value">95.47</span></div>
        <div class="cell" data-cell="c-13-19"><span class="cell__label">c-13-19</span><span class="cell__value">85.52</span></div>
      </div>
      <div class="row" data-row="r-14">
        <div class="cell" data-cell="c-14-0"><span class="cell__label">c-14-0</span><span class="cell__value">75.33</span></div>
        <div class="cell" data-cell="c-14-1"><span class="cell__label">c-14-1</span><span class="cell__value">34.26</span></div>
        <div class="cell" data-cell="c-14-2"><span class="cell__label">c-14-2</span><span class="cell__value">51.48</span></div>
        <div class="cell" data-cell="c-14-3"><span class="cell__label">c-14-3</span><span class="cell__value">36.68</span></div>
        <div class="cell" data-cell="c-14-4"><span class="cell__label">c-14-4</span><span class="cell__value">9.36</span></div>
        <div class="cell" data-cell="c-14-5"><span class="cell__label">c-14-5</span><span class="cell__value">27.02</span></div>
        <div class="cell" data-cell="c-14-6"><span class="cell__label">c-14-6</span><span class="cell__value">41.15</span></div>
        <div class="cell" data-cell="c-14-7"><span class="cell__label">c-14-7</span><span class="cell__value">16.13</span></div>
        <div class="cell" data-cell="c-14-8"><span class="cell__label">c-14-8</span><span class="cell__value">34.36</span></div>
        <div class="cell" data-cell="c-14-9"><span class="cell__label">c-14-9</span><span class="cell__value">40.87</span></div>
        <div class="cell" data-cell="c-14-10"><span class="cell__label">c-14-10</span><span class="cell__value">43.05</span></div>
        <div class="cell" data-cell="c-14-11"><span class="cell__label">c-14-11</span><span class="cell__value">11.39</span></div>
        <div class="cell" data-cell="c-14-12"><span class="cell__label">c-14-12</span><span class="cell__value">57.59</span></div>
        <div class="cell" data-cell="c-14-13"><span class="cell__label">c-14-13</span><span class="cell__value">81.02</span></div>
        <div class="cell" data-cell="c-14-14"><span class="cell__label">c-14-14</span><span class="cell__value">45.32</span></div>
        <div class="cell" data-cell="c-14-15"><span class="cell__label">c-14-15</span><span class="cell__value">62.95</span></div>
        <div class="cell" data-cell="c-14-16"><span class="cell__label">c-14-16</span><span class="cell__value">69.91</span></div>
        <div class="cell" data-cell="c-14-17"><span class="cell__label">c-14-17</span><span class="cell__value">80.29</span></div>
        <div class="cell" data-cell="c-14-18"><span class="cell__label">c-14-18</span><span class="cell__value">26.38</span></div>
        <div class="cell" data-cell="c-14-19"><span class="cell__label">c-14-19</span><span class="cell__value">77.72</span></div>
      </div>
      <div class="row" data-row="r-15">
        <div class="cell" data-cell="c-15-0"><span class="cell__label">c-15-0</span><span class="cell__value">29.08</span></div>
        <div class="cell" data-cell="c-15-1"><span class="cell__label">c-15-1</span><span class="cell__value">72.02</span></div>
        <div class="cell" data-cell="c-15-2"><span class="cell__label">c-15-2</span><span class="cell__value">17.72</span></div>
        <div class="cell" data-cell="c-15-3"><span class="cell__label">c-15-3</span><span class="cell__value">62.22</span></div>
        <div class="cell" data-cell="c-15-4"><span class="cell__label">c-15-4</span><span class="cell__value">88.85</span></div>
        <div class="cell" data-cell="c-15-5"><span class="cell__label">c-15-5</span><span class="cell__value">15.46</span></div>
        <div class="cell" data-cell="c-15-6"><span class="cell__label">c-15-6</span><span class="cell__value">74.42</span></div>
        <div class="cell" data-cell="c-15-7"><span class="cell__label">c-15-7</span><span class="cell__value">39.87</span></div>
        <div class="cell" data-cell="c-15-8"><span class="cell__label">c-15-8</span><span class="cell__value">61.60</span></div>
        <div class="cell" data-cell="c-15-9"><span class="cell__label">c-15-9</span><span class="cell__value">18.55</span></div>
        <div class="cell" data-cell="c-15-10"><span class="cell__label">c-15-10</span><span class="cell__value">67.78</span></div>
        <div class="cell" data-cell="c-15-11"><span class="cell__label">c-15-11</span><span class="cell__value">77.67</span></div>
        <div class="cell" data-cell="c-15-12"><span class="cell__label">c-15-12</span><span class="cell__value">5.27</span></div>
        <div class="cell" data-cell="c-15-13"><span class="cell__label">c-15-13</span><span class="cell__value">83.79</span></div>
        <div class="cell" data-cell="c-15-14"><span class="cell__label">c-15-14</span><span class="cell__value">9.91</span></div>
        <div class="cell" data-cell="c-15-15"><span class="cell__label">c-15-15</span><span class="cell__value">58.18</span></div>
        <div class="cell" data-cell="c-15-16"><span class="cell__label">c-15-16</span><span class="cell__value">90.43</span></div>
        <div class="cell" data-cell="c-15-17"><span class="cell__label">c-15-17</span><span class="cell__value">74.12</span></div>
        <div class="cell" data-cell="c-15-18"><span class="cell__label">c-15-18</span><span class="cell__value">27.52</span></div>
        <div class="cell" data-cell="c-15-19"><span class="cell__label">c-15-19</span><span class="cell__value">66.47</span></div>
      </div>
      <div class="row" data-row="r-16">
        <div class="cell" data-cell="c-16-0"><span class="cell__label">c-16-0</span><span class="cell__value">51.81</span></div>
        <div class="cell" data-cell="c-16-1"><span class="cell__label">c-16-1</span><span class="cell__value">56.19</span></div>
        <div class="cell" data-cell="c-16-2"><span class="cell__label">c-16-2</span><span class="cell__value">29.60</span></div>
        <div class="cell" data-cell="c-16-3"><span class="cell__label">c-16-3</span><span class="cell__value">46.03</span></div>
        <div class="cell" data-cell="c-16-4"><span class="cell__label">c-16-4</span><span class="cell__value">29.45</span></div>
        <div class="cell" data-cell="c-16-5"><span class="cell__label">c-16-5</span><span class="cell__value">61.34</span></div>
        <div class="cell" data-cell="c-16-6"><span class="cell__label">c-16-6</span><span class="cell__value">42.43</span></div>
        <div class="cell" data-cell="c-16-7"><span class="cell__label">c-16-7</span><span class="cell__value">49.86</span></div>
        <div class="cell" data-cell="c-16-8"><span class="cell__label">c-16-8</span><span class="cell__value">41.96</span></div>
        <div class="cell" data-cell="c-16-9"><span class="cell__label">c-16-9</span><span class="cell__value">56.54</span></div>
        <div class="cell" data-cell="c-16-10"><span class="cell__label">c-16-10</span><span class="cell__value">89.39</span></div>
        <div class="cell" data-cell="c-16-11"><span class="cell__label">c-16-11</span><span class="cell__value">80.77</span></div>
        <div class="cell" data-cell="c-16-12"><span class="cell__label">c-16-12</span><span class="cell__value">47.91</span></div>
        <div class="cell" data-cell="c-16-13"><span class="cell__label">c-16-13</span><span class="cell__value">20.40</span></div>
        <div class="cell" data-cell="c-16-14"><span class="cell__label">c-16-14</span><span class="cell__value">63.57</span></div>
        <div class="cell" data-cell="c-16-15"><span class="cell__label">c-16-15</span><span class="cell__value">62.04</span></div>
        <div class="cell" data-cell="c-16-16"><span class="cell__label">c-16-16</span><span class="cell__value">14.10</span></div>
        <div class="cell" data-cell="c-16-17"><span class="cell__label">c-16-17</span><span class="cell__value">25.50</span></div>
        <div class="cell" data-cell="c-16-18"><span class="cell__label">c-16-18</span><span class="cell__value">11.88</span></div>
        <div class="cell" data-cell="c-16-19"><span class="cell__label">c-16-19</span><span class="cell__value">8.07</span></div>
      </div>
      <div class="row" data-row="r-17">
        <div class="cell" data-cell="c-17-0"><span class="cell__label">c-17-0</span><span class="cell__value">77.46</span></div>
        <div class="cell" data-cell="c-17-1"><span class="cell__label">c-17-1</span><span class="cell__value">86.48</span></div>
        <div class="cell" data-cell="c-17-2"><span class="cell__label">c-17-2</span><span class="cell__value">67.23</span></div>
        <div class="cell" data-cell="c-17-3"><span class="cell__label">c-17-3</span><span class="cell__value">90.38</span></div>
        <div class="cell" data-cell="c-17-4"><span class="cell__label">c-17-4</span><span class="cell__value">75.98</span></div>
        <div class="cell" data-cell="c-17-5"><span class="cell__label">c-17-5</span><span class="cell__value">84.74</span></div>
        <div class="cell" data-cell="c-17-6"><span class="cell__label">c-17-6</span><span class="cell__value">96.18</span></div>
        <div class="cell" data-cell="c-17-7"><span class="cell__label">c-17-7</span><span class="cell__value">32.47</span></div>
        <div class="cell" data-cell="c-17-8"><span class="cell__label">c-17-8</span><span class="cell__value">25.30</span></div>
        <div class="cell" data-cell="c-17-9"><span class="cell__label">c-17-9</span><span class="cell__value">93.16</span></div>
        <div class="cell" data-cell="c-17-10"><span class="cell__label">c-17-10</span><span class="cell__value">26.81</span></div>
        <div class="cell" data-cell="c-17-11"><span class="cell__label">c-17-11</span><span class="cell__value">73.99</span></div>
        <div class="cell" data-cell="c-17-12"><span class="cell__label">c-17-12</span><span class="cell__value">59.72</span></div>
        <div class="cell" data-cell="c-17-13"><span class="cell__label">c-17-13</span><span class="cell__value">54.07</span></div>
        <div class="cell" data-cell="c-17-14"><span class="cell__label">c-17-14</span><span class="cell__value">86.84</span></div>
        <div class="cell" data-cell="c-17-15"><span class="cell__label">c-17-15</span><span class="cell__value">67.29</span></div>
        <div class="cell" data-cell="c-17-16"><span class="cell__label">c-17-16</span><span class="cell__value">91.72</span></div>
        <div class="cell" data-cell="c-17-17"><span class="cell__label">c-17-17</span><span class="cell__value">13.42</span></div>
        <div class="cell" data-cell="c-17-18"><span class="cell__label">c-17-18</span><span class="cell__value">31.67</span></div>
        <div class="cell" data-cell="c-17-19"><span class="cell__label">c-17-19</span><span class="cell__value">89.61</span></div>
      </div>
      <div class="row" data-row="r-18">
        <div class="cell" data-cell="c-18-0"><span class="cell__label">c-18-0</span><span class="cell__value">18.69</span></div>
        <div class="cell" data-cell="c-18-1"><span class="cell__label">c-18-1</span><span class="cell__value">8.48</span></div>
        <div class="cell" data-cell="c-18-2"><span class="cell__label">c-18-2</span><span class="cell__value">77.07</span></div>
        <div class="cell" data-cell="c-18-3"><span class="cell__label">c-18-3</span><span class="cell__value">37.12</span></div>
        <div class="cell" data-cell="c-18-4"><span class="cell__label">c-18-4</span><span class="cell__value">51.18</span></div>
        <div class="cell" data-cell="c-18-5"><span class="cell__label">c-18-5</span><span class="cell__value">54.35</span></div>
        <div class="cell" data-cell="c-18-6"><span class="cell__label">c-18-6</span><span class="cell__value">98.76</span></div>
        <div class="cell" data-cell="c-18-7"><span class="cell__label">c-18-7</span><span class="cell__value">29.40</span></div>
        <div class="cell" data-cell="c-18-8"><span class="cell__label">c-18-8</span><span class="cell__value">65.49</span></div>
        <div class="cell" data-cell="c-18-9"><span class="cell__label">c-18-9</span><span class="cell__value">0.72</span></div>
        <div class="cell" data-cell="c-18-10"><span class="cell__label">c-18-10</span><span class="cell__value">4.32</span></div>
        <div class="cell" data-cell="c-18-11"><span class="cell__label">c-18-11</span><span class="cell__value">92.10</span></div>
        <div class="cell" data-cell="c-18-12"><span class="cell__label">c-18-12</span><span class="cell__value">84.52</span></div>
        <div class="cell" data-cell="c-18-13"><span class="cell__label">c-18-13</span><span class="cell__value">40.30</span></div>
        <div class="cell" data-cell="c-18-14"><span class="cell__label">c-18-14</span><span class="cell__value">81.52</span></div>
        <div class="cell" data-cell="c-18-15"><span class="cell__label">c-18-15</span><span class="cell__value">34.31</span></div>
        <div class="cell" data-cell="c-18-16"><span class="cell__label">c-18-16</span><span class="cell__value">60.33</span></div>
        <div class="cell" data-cell="c-18-17"><span class="cell__label">c-18-17</span><span class="cell__value">82.70</span></div>
        <div class="cell" data-cell="c-18-18"><span class="cell__label">c-18-18</span><span class="cell__value">84.54</span></div>
        <div class="cell" data-cell="c-18-19"><span class="cell__label">c-18-19</span><span class="cell__value">99.75</span></div>
      </div>
      <div class="row" data-row="r-19">
        <div class="cell" data-cell="c-19-0"><span class="cell__label">c-19-0</span><span class="cell__value">51.67</span></div>
        <div class="cell" data-cell="c-19-1"><span class="cell__label">c-19-1</span><span class="cell__value">94.13</span></div>
        <div class="cell" data-cell="c-19-2"><span class="cell__label">c-19-2</span><span class="cell__value">99.22</span></div>
        <div class="cell" data-cell="c-19-3"><span class="cell__label">c-19-3</span><span class="cell__value">44.84</span></div>
        <div class="cell" data-cell="c-19-4"><span class="cell__label">c-19-4</span><span class="cell__value">0.24</span></div>
        <div class="cell" data-cell="c-19-5"><span class="cell__label">c-19-5</span><span class="cell__value">63.52</span></div>
        <div class="cell" data-cell="c-19-6"><span class="cell__label">c-19-6</span><span class="cell__value">0.72</span></div>
        <div class="cell" data-cell="c-19-7"><span class="cell__label">c-19-7</span><span class="cell__value">11.07</span></div>
        <div class="cell" data-cell="c-19-8"><span class="cell__label">c-19-8</span><span class="cell__value">12.34</span></div>
        <div class="cell" data-cell="c-19-9"><span class="cell__label">c-19-9</span><span class="cell__value">77.29</span></div>
        <div class="cell" data-cell="c-19-10"><span class="cell__label">c-19-10</span><span class="cell__value">35.71</span></div>
        <div class="cell" data-cell="c-19-11"><span class="cell__label">c-19-11</span><span class="cell__value">15.81</span></div>
        <div class="cell" data-cell="c-19-12"><span class="cell__label">c-19-12</span><span class="cell__value">54.53</span></div>
        <div class="cell" data-cell="c-19-13"><span class="cell__label">c-19-13</span><span class="cell__value">15.43</span></div>
        <div class="cell" data-cell="c-19-14"><span class="cell__label">c-19-14</span><span class="cell__value">73.38</span></div>
        <div class="cell" data-cell="c-19-15"><span class="cell__label">c-19-15</span><span class="cell__value">98.76</span></div>
        <div class="cell" data-cell="c-19-16"><span class="cell__label">c-19-16</span><span class="cell__value">13.53</span></div>
        <div class="cell" data-cell="c-19-17"><span class="cell__label">c-19-17</span><span class="cell__value">14.91</span></div>
        <div class="cell" data-cell="c-19-18"><span class="cell__label">c-19-18</span><span class="cell__value">48.17</span></div>
        <div class="cell" data-cell="c-19-19"><span class="cell__label">c-19-19</span><span class="cell__value">22.25</span></div>
      </div>
      <div class="row" data-row="r-20">
        <div class="cell" data-cell="c-20-0"><span class="cell__label">c-20-0</span><span class="cell__value">89.65</span></div>
        <div class="cell" data-cell="c-20-1"><span class="cell__label">c-20-1</span><span class="cell__value">78.96</span></div>
        <div class="cell" data-cell="c-20-2"><span class="cell__label">c-20-2</span><span class="cell__value">24.61</span></div>
        <div class="cell" data-cell="c-20-3"><span class="cell__label">c-20-3</span><span class="cell__value">54.69</span></div>
        <div class="cell" data-cell="c-20-4"><span class="cell__label">c-20-4</span><span class="cell__value">42.77</span></div>
        <div class="cell" data-cell="c-20-5"><span class="cell__label">c-20-5</span><span class="cell__value">31.87</span></div>
        <div class="cell" data-cell="c-20-6"><span class="cell__label">c-20-6</span><span class="cell__value">54.14</span></div>
        <div class="cell" data-cell="c-20-7"><span class="cell__label">c-20-7</span><span class="cell__value">69.18</span></div>
        <div class="cell" data-cell="c-20-8"><span class="cell__label">c-20-8</span><span class="cell__value">69.80</span></div>
        <div class="cell" data-cell="c-20-9"><span class="cell__label">c-20-9</span><span class="cell__value">41.62</span></div>
        <div class="cell" data-cell="c-20-10"><span class="cell__label">c-20-10</span><span class="cell__value">17.59</span></div>
        <div class="cell" data-cell="c-20-11"><span class="cell__label">c-20-11</span><span class="cell__value">91.39</span></div>
        <div class="cell" data-cell="c-20-12"><span class="cell__label">c-20-12</span><span class="cell__value">12.91</span></div>
        <div class="cell" data-cell="c-20-13"><span class="cell__label">c-20-13</span><span class="cell__value">28.11</span></div>
        <div class="cell" data-cell="c-20-14"><span class="cell__label">c-20-14</span><span class="cell__value">20.12</span></div>
        <div class="cell" data-cell="c-20-15"><span class="cell__label">c-20-15</span><span class="cell__value">51.79</span></div>
        <div class="cell" data-cell="c-20-16"><span class="cell__label">c-20-16</span><span class="cell__value">44.44</span></div>
        <div class="cell" data-cell="c-20-17"><span class="cell__label">c-20-17</span><span class="cell__value">48.46</span></div>
        <div class="cell" data-cell="c-20-18"><span class="cell__label">c-20-18</span><span class="cell__value">38.57</span></div>
        <div class="cell" data-cell="c-20-19"><span class="cell__label">c-20-19</span><span class="cell__value">27.56</span></div>
      </div>
      <div class="row" data-row="r-21">
        <div class="cell" data-cell="c-21-0"><span class="cell__label">c-21-0</span><span class="cell__value">55.21</span></div>
        <div class="cell" data-cell="c-21-1"><span class="cell__label">c-21-1</span><span class="cell__value">0.89</span></div>
        <div class="cell" data-cell="c-21-2"><span class="cell__label">c-21-2</span><span class="cell__value">37.44</span></div>
        <div class="cell" data-cell="c-21-3"><span class="cell__label">c-21-3</span><span class="cell__value">94.99</span></div>
        <div class="cell" data-cell="c-21-4"><span class="cell__label">c-21-4</span><span class="cell__value">6.24</span></div>
        <div class="cell" data-cell="c-21-5"><span class="cell__label">c-21-5</span><span class="cell__value">83.89</span></div>
        <div class="cell" data-cell="c-21-6"><span class="cell__label">c-21-6</span><span class="cell__value">64.62</span></div>
        <div class="cell" data-cell="c-21-7"><span class="cell__label">c-21-7</span><span class="cell__value">44.57</span></div>
        <div class="cell" data-cell="c-21-8"><span class="cell__label">c-21-8</span><span class="cell__value">25.27</span></div>
        <div class="cell" data-cell="c-21-9"><span class="cell__label">c-21-9</span><span class="cell__value">54.44</span></div>
        <div class="cell" data-cell="c-21-10"><span class="cell__label">c-21-10</span><span class="cell__value">35.57</span></div>
        <div class="cell" data-cell="c-21-11"><span class="cell__label">c-21-11</span><span class="cell__value">10.72</span></div>
        <div class="cell" data-cell="c-21-12"><span class="cell__label">c-21-12</span><span class="cell__value">60.32</span></div>
        <div class="cell" data-cell="c-21-13"><span class="cell__label">c-21-13</span><span class="cell__value">30.78</span></div>
        <div class="cell" data-cell="c-21-14"><span class="cell__label">c-21-14</span><span class="cell__value">35.04</span></div>
        <div class="cell" data-cell="c-21-15"><span class="cell__label">c-21-15</span><span class="cell__value">46.13</span></div>
        <div class="cell" data-cell="c-21-16"><span class="cell__label">c-21-16</span><span class="cell__value">19.01</span></div>
        <div class="cell" data-cell="c-21-17"><span class="cell__label">c-21-17</span><span class="cell__value">81.33</span></div>
        <div class="cell" data-cell="c-21-18"><span class="cell__label">c-21-18</span><span class="cell__value">3.42</span></div>
        <div class="cell" data-cell="c-21-19"><span class="cell__label">c-21-19</span><span class="cell__value">90.90</span></div>
      </div>
      <div class="row" data-row="r-22">
        <div class="cell" data-cell="c-22-0"><span class="cell__label">c-22-0</span><span class="cell__value">82.11</span></div>
        <div class="cell" data-cell="c-22-1"><span class="cell__label">c-22-1</span><span class="cell__value">70.52</span></div>
        <div class="cell" data-cell="c-22-2"><span class="cell__label">c-22-2</span><span class="cell__value">10.31</span></div>
        <div class="cell" data-cell="c-22-3"><span class="cell__label">c-22-3</span><span class="cell__value">90.43</span></div>
        <div class="cell" data-cell="c-22-4"><span class="cell__label">c-22-4</span><span class="cell__value">13.16</span></div>
        <div class="cell" data-cell="c-22-5"><span class="cell__label">c-22-5</span><span class="cell__value">56.76</span></div>
        <div class="cell" data-cell="c-22-6"><span class="cell__label">c-22-6</span><span class="cell__value">97.19</span></div>
        <div class="cell" data-cell="c-22-7"><span class="cell__label">c-22-7</span><span class="cell__value">19.46</span></div>
        <div class="cell" data-cell="c-22-8"><span class="cell__label">c-22-8</span><span class="cell__value">10.61</span></div>
        <div class="cell" data-cell="c-22-9"><span class="cell__label">c-22-9</span><span class="cell__value">79.94</span></div>
        <div class="cell" data-cell="c-22-10"><span class="cell__label">c-22-10</span><span class="cell__value">84.96</span></div>
        <div class="cell" data-cell="c-22-11"><span class="cell__label">c-22-11</span><span class="cell__value">63.11</span></div>
        <div class="cell" data-cell="c-22-12"><span class="cell__label">c-22-12</span><span class="cell__value">10.94</span></div>
        <div class="cell" data-cell="c-22-13"><span class="cell__label">c-22-13</span><span class="cell__value">22.77</span></div>
        <div class="cell" data-cell="c-22-14"><span class="cell__label">c-22-14</span><span class="cell__value">60.24</span></div>
        <div class="cell" data-cell="c-22-15"><span class="cell__label">c-22-15</span><span class="cell__value">24.17</span></div>
        <div class="cell" data-cell="c-22-16"><span class="cell__label">c-22-16</span><span class="cell__value">21.15</span></div>
        <div class="cell" data-cell="c-22-17"><span class="cell__label">c-22-17</span><span class="cell__value">83.48</span></div>
        <div class="cell" data-cell="c-22-18"><span class="cell__label">c-22-18</span><span class="cell__value">3.66</span></div>
        <div class="cell" data-cell="c-22-19"><span class="cell__label">c-22-19</span><span class="cell__value">29.60</span></div>
      </div>
      <div class="row" data-row="r-23">
        <div class="cell" data-cell="c-23-0"><span class="cell__label">c-23-0</span><span class="cell__value">64.15</span></div>
        <div class="cell" data-cell="c-23-1"><span class="cell__label">c-23-1</span><span class="cell__value">51.06</span></div>
        <div class="cell" data-cell="c-23-2"><span class="cell__label">c-23-2</span><span class="cell__value">2.97</span></div>
        <div class="cell" data-cell="c-23-3"><span class="cell__label">c-23-3</span><span class="cell__value">35.89</span></div>
        <div class="cell" data-cell="c-23-4"><span class="cell__label">c-23-4</span><span class="cell__value">19.63</span></div>
        <div class="cell" data-cell="c-23-5"><span class="cell__label">c-23-5</span><span class="cell__value">26.88</span></div>
        <div class="cell" data-cell="c-23-6"><span class="cell__label">c-23-6</span><span class="cell__value">15.47</span></div>
        <div class="cell" data-cell="c-23-7"><span class="cell__label">c-23-7</span><span class="cell__value">70.10</span></div>
        <div class="cell" data-cell="c-23-8"><span class="cell__label">c-23-8</span><span class="cell__value">10.57</span></div>
        <div class="cell" data-cell="c-23-9"><span class="cell__label">c-23-9</span><span class="cell__value">55.63</span></div>
        <div class="cell" data-cell="c-23-10"><span class="cell__label">c-23-10</span><span class="cell__value">2.65</span></div>
        <div class="cell" data-cell="c-23-11"><span class="cell__label">c-23-11</span><span class="cell__value">76.35</span></div>
        <div class="cell" data-cell="c-23-12"><span class="cell__label">c-23-12</span><span class="cell__value">8.74</span></div>
        <div class="cell" data-cell="c-23-13"><span class="cell__label">c-23-13</span><span class="cell__value">51.51</span></div>
        <div class="cell" data-cell="c-23-14"><span class="cell__label">c-23-14</span><span class="cell__value">76.85</span></div>
        <div class="cell" data-cell="c-23-15"><span class="cell__label">c-23-15</span><span class="cell__value">22.18</span></div>
        <div class="cell" data-cell="c-23-16"><span class="cell__label">c-23-16</span><span class="cell__value">18.12</span></div>
        <div class="cell" data-cell="c-23-17"><span class="cell__label">c-23-17</span><span class="cell__value">30.63</span></div>
        <div class="cell" data-cell="c-23-18"><span class="cell__label">c-23-18</span><span class="cell__value">97.71</span></div>
        <div class="cell" data-cell="c-23-19"><span class="cell__label">c-23-19</span><span class="cell__value">77.46</span></div>
      </div>
      <div class="row" data-row="r-24">
        <div class="cell" data-cell="c-24-0"><span class="cell__label">c-24-0</span><span class="cell__value">3.43</span></div>
        <div class="cell" data-cell="c-24-1"><span class="cell__label">c-24-1</span><span class="cell__value">31.08</span></div>
        <div class="cell" data-cell="c-24-2"><span class="cell__label">c-24-2</span><span class="cell__value">45.00</span></div>
        <div class="cell" data-cell="c-24-3"><span class="cell__label">c-24-3</span><span class="cell__value">2.26</span></div>
        <div class="cell" data-cell="c-24-4"><span class="cell__label">c-24-4</span><span class="cell__value">42.13</span></div>
        <div class="cell" data-cell="c-24-5"><span class="cell__label">c-24-5</span><span class="cell__value">71.05</span></div>
        <div class="cell" data-cell="c-24-6"><span class="cell__label">c-24-6</span><span class="cell__value">22.83</span></div>
        <div class="cell" data-cell="c-24-7"><span class="cell__label">c-24-7</span><span class="cell__value">89.49</span></div>
        <div class="cell" data-cell="c-24-8"><span class="cell__label">c-24-8</span><span class="cell__value">95.21</span></div>
        <div class="cell" data-cell="c-24-9"><span class="cell__label">c-24-9</span><span class="cell__value">63.21</span></div>
        <div class="cell" data-cell="c-24-10"><span class="cell__label">c-24-10</span><span class="cell__value">74.61</span></div>
        <div class="cell" data-cell="c-24-11"><span class="cell__label">c-24-11</span><span class="cell__value">45.88</span></div>
        <div class="cell" data-cell="c-24-12"><span class="cell__label">c-24-12</span><span class="cell__value">78.34</span></div>
        <div class="cell" data-cell="c-24-13"><span class="cell__label">c-24-13</span><span class="cell__value">31.21</span></div>
        <div class="cell" data-cell="c-24-14"><span class="cell__label">c-24-14</span><span class="cell__value">62.29</span></div>
        <div class="cell" data-cell="c-24-15"><span class="cell__label">c-24-15</span><span class="cell__value">25.98</span></div>
        <div class="cell" data-cell="c-24-16"><span class="cell__label">c-24-16</span><span class="cell__value">91.51</span></div>
        <div class="cell" data-cell="c-24-17"><span class="cell__label">c-24-17</span><span class="cell__value">21.21</span></div>
        <div class="cell" data-cell="c-24-18"><span class="cell__label">c-24-18</span><span class="cell__value">38.84</span></div>
        <div class="cell" data-cell="c-24-19"><span class="cell__label">c-24-19</span><span class="cell__value">77.21</span></div>
      </div>
      <div class="row" data-row="r-25">
        <div class="cell" data-cell="c-25-0"><span class="cell__label">c-25-0</span><span class="cell__value">8.66</span></div>
        <div class="cell" data-cell="c-25-1"><span class="cell__label">c-25-1</span><span class="cell__value">77.38</span></div>
        <div class="cell" data-cell="c-25-2"><span class="cell__label">c-25-2</span><span class="cell__value">97.48</span></div>
        <div class="cell" data-cell="c-25-3"><span class="cell__label">c-25-3</span><span class="cell__value">93.61</span></div>
        <div class="cell" data-cell="c-25-4"><span class="cell__label">c-25-4</span><span class="cell__value">55.59</span></div>
        <div class="cell" data-cell="c-25-5"><span class="cell__label">c-25-5</span><span class="cell__value">69.64</span></div>
        <div class="cell" data-cell="c-25-6"><span class="cell__label">c-25-6</span><span class="cell__value">53.29</span></div>
        <div class="cell" data-cell="c-25-7"><span class="cell__label">c-25-7</span><span class="cell__value">42.83</span></div>
        <div class="cell" data-cell="c-25-8"><span class="cell__label">c-25-8</span><span class="cell__value">44.55</span></div>
        <div class="cell" data-cell="c-25-9"><span class="cell__label">c-25-9</span><span class="cell__value">56.67</span></div>
        <div class="cell" data-cell="c-25-10"><span class="cell__label">c-25-10</span><span class="cell__value">94.77</span></div>
        <div class="cell" data-cell="c-25-11"><span class="cell__label">c-25-11</span><span class="cell__value">78.29</span></div>
        <div class="cell" data-cell="c-25-12"><span class="cell__label">c-25-12</span><span class="cell__value">54.17</span></div>
        <div class="cell" data-cell="c-25-13"><span class="cell__label">c-25-13</span><span class="cell__value">62.79</span></div>
        <div class="cell" data-cell="c-25-14"><span class="cell__label">c-25-14</span><span class="cell__value">13.56</span></div>
        <div class="cell" data-cell="c-25-15"><span class="cell__label">c-25-15</span><span class="cell__value">21.99</span></div>
        <div class="cell" data-cell="c-25-16"><span class="cell__label">c-25-16</span><span class="cell__value">80.86</span></div>
        <div class="cell" data-cell="c-25-17"><span class="cell__label">c-25-17</span><span class="cell__value">79.17</span></div>
        <div class="cell" data-cell="c-25-18"><span class="cell__label">c-25-18</span><span class="cell__value">13.98</span></div>
        <div class="cell" data-cell="c-25-19"><span class="cell__label">c-25-19</span><span class="cell__value">12.00</span></div>
      </div>
      <div class="row" data-row="r-26">
        <div class="cell" data-cell="c-26-0"><span class="cell__label">c-26-0</span><span class="cell__value">30.87</span></div>
        <div class="cell" data-cell="c-26-1"><span class="cell__label">c-26-1</span><span class="cell__value">43.48</span></div>
        <div class="cell" data-cell="c-26-2"><span class="cell__label">c-26-2</span><span class="cell__value">60.71</span></div>
        <div class="cell" data-cell="c-26-3"><span class="cell__label">c-26-3</span><span class="cell__value">78.76</span></div>
        <div class="cell" data-cell="c-26-4"><span class="cell__label">c-26-4</span><span class="cell__value">35.21</span></div>
        <div class="cell" data-cell="c-26-5"><span class="cell__label">c-26-5</span><span class="cell__value">57.30</span></div>
        <div class="cell" data-cell="c-26-6"><span class="cell__label">c-26-6</span><span class="cell__value">35.52</span></div>
        <div class="cell" data-cell="c-26-7"><span class="cell__label">c-26-7</span><span class="cell__value">97.93</span></div>
        <div class="cell" data-cell="c-26-8"><span class="cell__label">c-26-8</span><span class="cell__value">56.86</span></div>
        <div class="cell" data-cell="c-26-9"><span class="cell__label">c-26-9</span><span class="cell__value">92.79</span></div>
        <div class="cell" data-cell="c-26-10"><span class="cell__label">c-26-10</span><span class="cell__value">67.59</span></div>
        <div class="cell" data-cell="c-26-11"><span class="cell__label">c-26-11</span><span class="cell__value">99.60</span></div>
        <div class="cell" data-cell="c-26-12"><span class="cell__label">c-26-12</span><span class="cell__value">96.46</span></div>
        <div class="cell" data-cell="c-26-13"><span class="cell__label">c-26-13</span><span class="cell__value">94.79</span></div>
        <div class="cell" data-cell="c-26-14"><span class="cell__label">c-26-14</span><span class="cell__value">73.97</span></div>
        <div class="cell" data-cell="c-26-15"><span class="cell__label">c-26-15</span><span class="cell__value">33.41</span></div>
        <div class="cell" data-cell="c-26-16"><span class="cell__label">c-26-16</span><span class="cell__value">83.49</span></div>
        <div class="cell" data-cell="c-26-17"><span class="cell__label">c-26-17</span><span class="cell__value">22.35</span></div>
        <div class="cell" data-cell="c-26-18"><span class="cell__label">c-26-18</span><span class="cell__value">24.43</span></div>
        <div class="cell" data-cell="c-26-19"><span class="cell__label">c-26-19</span><span class="cell__value">31.06</span></div>
      </div>
      <div class="row" data-row="r-27">
        <div class="cell" data-cell="c-27-0"><span class="cell__label">c-27-0</span><span class="cell__value">40.43</span></div>
        <div class="cell" data-cell="c-27-1"><span class="cell__label">c-27-1</span><span class="cell__value">6.16</span></div>
        <div class="cell" data-cell="c-27-2"><span class="cell__label">c-27-2</span><span class="cell__value">19.14</span></div>
        <div class="cell" data-cell="c-27-3"><span class="cell__label">c-27-3</span><span class="cell__value">98.61</span></div>
        <div class="cell" data-cell="c-27-4"><span class="cell__label">c-27-4</span><span class="cell__value">75.16</span></div>
        <div class="cell" data-cell="c-27-5"><span class="cell__label">c-27-5</span><span class="cell__value">20.23</span></div>
        <div class="cell" data-cell="c-27-6"><span class="cell__label">c-27-6</span><span class="cell__value">86.47</span></div>
        <div class="cell" data-cell="c-27-7"><span class="cell__label">c-27-7</span><span class="cell__value">57.06</span></div>
        <div class="cell" data-cell="c-27-8"><span class="cell__label">c-27-8</span><span class="cell__value">9.21</span></div>
        <div class="cell" data-cell="c-27-9"><span class="cell__label">c-27-9</span><span class="cell__value">21.34</span></div>
        <div class="cell" data-cell="c-27-10"><span class="cell__label">c-27-10</span><span class="cell__value">70.45</span></div>
        <div class="cell" data-cell="c-27-11"><span class="cell__label">c-27-11</span><span class="cell__value">31.41</span></div>
        <div class="cell" data-cell="c-27-12"><span class="cell__label">c-27-12</span><span class="cell__value">77.02</span></div>
        <div class="cell" data-cell="c-27-13"><span class="cell__label">c-27-13</span><span class="cell__value">95.57</span></div>
        <div class="cell" data-cell="c-27-14"><span class="cell__label">c-27-14</span><span class="cell__value">66.03</span></div>
        <div class="cell" data-cell="c-27-15"><span class="cell__label">c-27-15</span><span class="cell__value">97.36</span></div>
        <div class="cell" data-cell="c-27-16"><span class="cell__label">c-27-16</span><span class="cell__value">73.01</span></div>
        <div class="cell" data-cell="c-27-17"><span class="cell__label">c-27-17</span><span class="cell__value">75.47</span></div>
        <div class="cell" data-cell="c-27-18"><span class="cell__label">c-27-18</span><span class="cell__value">31.25</span></div>
        <div class="cell" data-cell="c-27-19"><span class="cell__label">c-27-19</span><span class="cell__value">38.31</span></div>
      </div>
      <div class="row" data-row="r-28">
        <div class="cell" data-cell="c-28-0"><span class="cell__label">c-28-0</span><span class="cell__value">38.53</span></div>
        <div class="cell" data-cell="c-28-1"><span class="cell__label">c-28-1</span><span class="cell__value">6.51</span></div>
        <div class="cell" data-cell="c-28-2"><span class="cell__label">c-28-2</span><span class="cell__value">76.39</span></div>
        <div class="cell" data-cell="c-28-3"><span class="cell__label">c-28-3</span><span class="cell__value">0.79</span></div>
        <div class="cell" data-cell="c-28-4"><span class="cell__label">c-28-4</span><span class="cell__value">61.07</span></div>
        <div class="cell" data-cell="c-28-5"><span class="cell__label">c-28-5</span><span class="cell__value">4.21</span></div>
        <div class="cell" data-cell="c-28-6"><span class="cell__label">c-28-6</span><span class="cell__value">81.25</span></div>
        <div class="cell" data-cell="c-28-7"><span class="cell__label">c-28-7</span><span class="cell__value">88.59</span></div>
        <div class="cell" data-cell="c-28-8"><span class="cell__label">c-28-8</span><span class="cell__value">52.24</span></div>
        <div class="cell" data-cell="c-28-9"><span class="cell__label">c-28-9</span><span class="cell__value">97.44</span></div>
        <div class="cell" data-cell="c-28-10"><span class="cell__label">c-28-10</span><span class="cell__value">30.48</span></div>
        <div class="cell" data-cell="c-28-11"><span class="cell__label">c-28-11</span><span class="cell__value">16.56</span></div>
        <div class="cell" data-cell="c-28-12"><span class="cell__label">c-28-12</span><span class="cell__value">63.73</span></div>
        <div class="cell" data-cell="c-28-13"><span class="cell__label">c-28-13</span><span class="cell__value">23.34</span></div>
        <div class="cell" data-cell="c-28-14"><span class="cell__label">c-28-14</span><span class="cell__value">91.81</span></div>
        <div class="cell" data-cell="c-28-15"><span class="cell__label">c-28-15</span><span class="cell__value">22.25</span></div>
        <div class="cell" data-cell="c-28-16"><span class="cell__label">c-28-16</span><span class="cell__value">70.35</span></div>
        <div class="cell" data-cell="c-28-17"><span class="cell__label">c-28-17</span><span class="cell__value">13.46</span></div>
        <div class="cell" data-cell="c-28-18"><span class="cell__label">c-28-18</span><span class="cell__value">4.80</span></div>
        <div class="cell" data-cell="c-28-19"><span class="cell__label">c-28-19</span><span class="cell__value">38.11</span></div>
      </div>
      <div class="row" data-row="r-29">
        <div class="cell" data-cell="c-29-0"><span class="cell__label">c-29-0</span><span class="cell__value">4.84</span></div>
        <div class="cell" data-cell="c-29-1"><span class="cell__label">c-29-1</span><span class="cell__value">18.54</span></div>
        <div class="cell" data-cell="c-29-2"><span class="cell__label">c-29-2</span><span class="cell__value">72.67</span></div>
        <div class="cell" data-cell="c-29-3"><span class="cell__label">c-29-3</span><span class="cell__value">48.22</span></div>
        <div class="cell" data-cell="c-29-4"><span class="cell__label">c-29-4</span><span class="cell__value">34.11</span></div>
        <div class="cell" data-cell="c-29-5"><span class="cell__label">c-29-5</span><span class="cell__value">49.94</span></div>
        <div class="cell" data-cell="c-29-6"><span class="cell__label">c-29-6</span><span class="cell__value">13.68</span></div>
        <div class="cell" data-cell="c-29-7"><span class="cell__label">c-29-7</span><span class="cell__value">18.50</span></div>
        <div class="cell" data-cell="c-29-8"><span class="cell__label">c-29-8</span><span class="cell__value">98.67</span></div>
        <div class="cell" data-cell="c-29-9"><span class="cell__label">c-29-9</span><span class="cell__value">75.32</span></div>
        <div class="cell" data-cell="c-29-10"><span class="cell__label">c-29-10</span><span class="cell__value">45.07</span></div>
        <div class="cell" data-cell="c-29-11"><span class="cell__label">c-29-11</span><span class="cell__value">76.25</span></div>
        <div class="cell" data-cell="c-29-12"><span class="cell__label">c-29-12</span><span class="cell__value">78.74</span></div>
        <div class="cell" data-cell="c-29-13"><span class="cell__label">c-29-13</span><span class="cell__value">44.72</span></div>
        <div class="cell" data-cell="c-29-14"><span class="cell__label">c-29-14</span><span class="cell__value">0.24</span></div>
        <div class="cell" data-cell="c-29-15"><span class="cell__label">c-29-15</span><span class="cell__value">26.39</span></div>
        <div class="cell" data-cell="c-29-16"><span class="cell__label">c-29-16</span><span class="cell__value">58.80</span></div>
        <div class="cell" data-cell="c-29-17"><span class="cell__label">c-29-17</span><span class="cell__value">40.50</span></div>
        <div class="cell" data-cell="c-29-18"><span class="cell__label">c-29-18</span><span class="cell__value">52.16</span></div>
        <div class="cell" data-cell="c-29-19"><span class="cell__label">c-29-19</span><span class="cell__value">29.02</span></div>
      </div>
      <div class="row" data-row="r-30">
        <div class="cell" data-cell="c-30-0"><span class="cell__label">c-30-0</span><span class="cell__value">38.86</span></div>
        <div class="cell" data-cell="c-30-1"><span class="cell__label">c-30-1</span><span class="cell__value">54.40</span></div>
        <div class="cell" data-cell="c-30-2"><span class="cell__label">c-30-2</span><span class="cell__value">65.68</span></div>
        <div class="cell" data-cell="c-30-3"><span class="cell__label">c-30-3</span><span class="cell__value">36.26</span></div>
        <div class="cell" data-cell="c-30-4"><span class="cell__label">c-30-4</span><span class="cell__value">0.27</span></div>
        <div class="cell" data-cell="c-30-5"><span class="cell__label">c-30-5</span><span class="cell__value">59.25</span></div>
        <div class="cell" data-cell="c-30-6"><span class="cell__label">c-30-6</span><span class="cell__value">82.60</span></div>
        <div class="cell" data-cell="c-30-7"><span class="cell__label">c-30-7</span><span class="cell__value">64.43</span></div>
        <div class="cell" data-cell="c-30-8"><span class="cell__label">c-30-8</span><span class="cell__value">52.72</span></div>
        <div class="cell" data-cell="c-30-9"><span class="cell__label">c-30-9</span><span class="cell__value">63.24</span></div>
        <div class="cell" data-cell="c-30-10"><span class="cell__label">c-30-10</span><span class="cell__value">67.99</span></div>
        <div class="cell" data-cell="c-30-11"><span class="cell__label">c-30-11</span><span class="cell__value">56.74</span></div>
        <div class="cell" data-cell="c-30-12"><span class="cell__label">c-30-12</span><span class="cell__value">2.55</span></div>
        <div class="cell" data-cell="c-30-13"><span class="cell__label">c-30-13</span><span class="cell__value">52.67</span></div>
        <div class="cell" data-cell="c-30-14"><span class="cell__label">c-30-14</span><span class="cell__value">64.75</span></div>
        <div class="cell" data-cell="c-30-15"><span class="cell__label">c-30-15</span><span class="cell__value">74.82</span></div>
        <div class="cell" data-cell="c-30-16"><span class="cell__label">c-30-16</span><span class="cell__value">13.30</span></div>
        <div class="cell" data-cell="c-30-17"><span class="cell__label">c-30-17</span><span class="cell__value">51.62</span></div>
        <div class="cell" data-cell="c-30-18"><span class="cell__label">c-30-18</span><span class="cell__value">16.52</span></div>
        <div class="cell" data-cell="c-30-19"><span class="cell__label">c-30-19</span><span class="cell__value">42.27</span></div>
      </div>
      <div class="row" data-row="r-31">
        <div class="cell" data-cell="c-31-0"><span class="cell__label">c-31-0</span><span class="cell__value">47.73</span></div>
        <div class="cell" data-cell="c-31-1"><span class="cell__label">c-31-1</span><span class="cell__value">46.90</span></div>
        <div class="cell" data-cell="c-31-2"><span class="cell__label">c-31-2</span><span class="cell__value">13.75</span></div>
        <div class="cell" data-cell="c-31-3"><span class="cell__label">c-31-3</span><span class="cell__value">90.27</span></div>
        <div class="cell" data-cell="c-31-4"><span class="cell__label">c-31-4</span><span class="cell__value">0.54</span></div>
        <div class="cell" data-cell="c-31-5"><span class="cell__label">c-31-5</span><span class="cell__value">79.45</span></div>
        <div class="cell" data-cell="c-31-6"><span class="cell__label">c-31-6</span><span class="cell__value">82.92</span></div>
        <div class="cell" data-cell="c-31-7"><span class="cell__label">c-31-7</span><span class="cell__value">89.39</span></div>
        <div class="cell" data-cell="c-31-8"><span class="cell__label">c-31-8</span><span class="cell__value">14.13</span></div>
        <div class="cell" data-cell="c-31-9"><span class="cell__label">c-31-9</span><span class="cell__value">92.19</span></div>
        <div class="cell" data-cell="c-31-10"><span class="cell__label">c-31-10</span><span class="cell__value">53.03</span></div>
        <div class="cell" data-cell="c-31-11"><span class="cell__label">c-31-11</span><span class="cell__value">23.96</span></div>
        <div class="cell" data-cell="c-31-12"><span class="cell__label">c-31-12</span><span class="cell__value">75.84</span></div>
        <div class="cell" data-cell="c-31-13"><span class="cell__label">c-31-13</span><span class="cell__value">27.71</span></div>
        <div class="cell" data-cell="c-31-14"><span class="cell__label">c-31-14</span><span class="cell__value">76.76</span></div>
        <div class="cell" data-cell="c-31-15"><span class="cell__label">c-31-15</span><span class="cell__value">2.80</span></div>
        <div class="cell" data-cell="c-31-16"><span class="cell__label">c-31-16</span><span class="cell__value">42.23</span></div>
        <div class="cell" data-cell="c-31-17"><span class="cell__label">c-31-17</span><span class="cell__value">74.86</span></div>
        <div class="cell" data-cell="c-31-18"><span class="cell__label">c-31-18</span><span class="cell__value">77.54</span></div>
        <div class="cell" data-cell="c-31-19"><span class="cell__label">c-31-19</span><span class="cell__value">25.81</span></div>
      </div>
      <div class="row" data-row="r-32">
        <div class="cell" data-cell="c-32-0"><span class="cell__label">c-32-0</span><span class="cell__value">41.63</span></div>
        <div class="cell" data-cell="c-32-1"><span class="cell__label">c-32-1</span><span class="cell__value">87.92</span></div>
        <div class="cell" data-cell="c-32-2"><span class="cell__label">c-32-2</span><span class="cell__value">47.69</span></div>
        <div class="cell" data-cell="c-32-3"><span class="cell__label">c-32-3</span><span class="cell__value">57.20</span></div>
        <div class="cell" data-cell="c-32-4"><span class="cell__label">c-32-4</span><span class="cell__value">26.91</span></div>
        <div class="cell" data-cell="c-32-5"><span class="cell__label">c-32-5</span><span class="cell__value">28.30</span></div>
        <div class="cell" data-cell="c-32-6"><span class="cell__label">c-32-6</span><span class="cell__value">69.96</span></div>
        <div class="cell" data-cell="c-32-7"><span class="cell__label">c-32-7</span><span class="cell__value">97.47</span></div>
        <div class="cell" data-cell="c-32-8"><span class="cell__label">c-32-8</span><span class="cell__value">47.64</span></div>
        <div class="cell" data-cell="c-32-9"><span class="cell__label">c-32-9</span><span class="cell__value">73.55</span></div>
        <div class="cell" data-cell="c-32-10"><span class="cell__label">c-32-10</span><span class="cell__value">27.04</span></div>
        <div class="cell" data-cell="c-32-11"><span class="cell__label">c-32-11</span><span class="cell__value">76.16</span></div>
        <div class="cell" data-cell="c-32-12"><span class="cell__label">c-32-12</span><span class="cell__value">6.63</span></div>
        <div class="cell" data-cell="c-32-13"><span class="cell__label">c-32-13</span><span class="cell__value">24.97</span></div>
        <div class="cell" data-cell="c-32-14"><span class="cell__label">c-32-14</span><span class="cell__value">45.48</span></div>
        <div class="cell" data-cell="c-32-15"><span class="cell__label">c-32-15</span><span class="cell__value">74.01</span></div>
        <div class="cell" data-cell="c-32-16"><span class="cell__label">c-32-16</span><span class="cell__value">59.24</span></div>
        <div class="cell" data-cell="c-32-17"><span class="cell__label">c-32-17</span><span class="cell__value">21.14</span></div>
        <div class="cell" data-cell="c-32-18"><span class="cell__label">c-32-18</span><span class="cell__value">72.64</span></div>
        <div class="cell" data-cell="c-32-19"><span class="cell__label">c-32-19</span><span class="cell__value">17.55</span></div>
      </div>
      <div class="row" data-row="r-33">
        <div class="cell" data-cell="c-33-0"><span class="cell__label">c-33-0</span><span class="cell__value">81.50</span></div>
        <div class="cell" data-cell="c-33-1"><span class="cell__label">c-33-1</span><span class="cell__value">27.76</span></div>
        <div class="cell" data-cell="c-33-2"><span class="cell__label">c-33-2</span><span class="cell__value">7.65</span></div>
        <div class="cell" data-cell="c-33-3"><span class="cell__label">c-33-3</span><span class="cell__value">6.58</span></div>
        <div class="cell" data-cell="c-33-4"><span class="cell__label">c-33-4</span><span class="cell__value">85.99</span></div>
        <div class="cell" data-cell="c-33-5"><span class="cell__label">c-33-5</span><span class="cell__value">58.02</span></div>
        <div class="cell" data-cell="c-33-6"><span class="cell__label">c-33-6</span><span class="cell__value">76.20</span></div>
        <div class="cell" data-cell="c-33-7"><span class="cell__label">c-33-7</span><span class="cell__value">73.83</span></div>
        <div class="cell" data-cell="c-33-8"><span class="cell__label">c-33-8</span><span class="cell__value">21.52</span></div>
        <div class="cell" data-cell="c-33-9"><span class="cell__label">c-33-9</span><span class="cell__value">87.83</span></div>
        <div class="cell" data-cell="c-33-10"><span class="cell__label">c-33-10</span><span class="cell__value">15.98</span></div>
        <div class="cell" data-cell="c-33-11"><span class="cell__label">c-33-11</span><span class="cell__value">1.71</span></div>
        <div class="cell" data-cell="c-33-12"><span class="cell__label">c-33-12</span><span class="cell__value">10.49</span></div>
        <div class="cell" data-cell="c-33-13"><span class="cell__label">c-33-13</span><span class="cell__value">39.36</span></div>
        <div class="cell" data-cell="c-33-14"><span class="cell__label">c-33-14</span><span class="cell__value">13.00</span></div>
        <div class="cell" data-cell="c-33-15"><span class="cell__label">c-33-15</span><span class="cell__value">82.53</span></div>
        <div class="cell" data-cell="c-33-16"><span class="cell__label">c-33-16</span><span class="cell__value">44.13</span></div>
        <div class="cell" data-cell="c-33-17"><span class="cell__label">c-33-17</span><span class="cell__value">68.50</span></div>
        <div class="cell" data-cell="c-33-18"><span class="cell__label">c-33-18</span><span class="cell__value">59.78</span></div>
        <div class="cell" data-cell="c-33-19"><span class="cell__label">c-33-19</span><span class="cell__value">86.65</span></div>
      </div>
      <div class="row" data-row="r-34">
        <div class="cell" data-cell="c-34-0"><span class="cell__label">c-34-0</span><span class="cell__value">54.78</span></div>
        <div class="cell" data-cell="c-34-1"><span class="cell__label">c-34-1</span><span class="cell__value">2.87</span></div>
        <div class="cell" data-cell="c-34-2"><span class="cell__label">c-34-2</span><span class="cell__value">59.35</span></div>
        <div class="cell" data-cell="c-34-3"><span class="cell__label">c-34-3</span><span class="cell__value">0.10</span></div>
        <div class="cell" data-cell="c-34-4"><span class="cell__label">c-34-4</span><span class="cell__value">99.84</span></div>
        <div class="cell" data-cell="c-34-5"><span class="cell__label">c-34-5</span><span class="cell__value">80.69</span></div>
        <div class="cell" data-cell="c-34-6"><span class="cell__label">c-34-6</span><span class="cell__value">24.96</span></div>
        <div class="cell" data-cell="c-34-7"><span class="cell__label">c-34-7</span><span class="cell__value">8.92</span></div>
        <div class="cell" data-cell="c-34-8"><span class="cell__label">c-34-8</span><span class="cell__value">5.55</span></div>
        <div class="cell" data-cell="c-34-9"><span class="cell__label">c-34-9</span><span class="cell__value">12.98</span></div>
        <div class="cell" data-cell="c-34-10"><span class="cell__label">c-34-10</span><span class="cell__value">48.83</span></div>
        <div class="cell" data-cell="c-34-11"><span class="cell__label">c-34-11</span><span class="cell__value">57.52</span></div>
        <div class="cell" data-cell="c-34-12"><span class="cell__label">c-34-12</span><span class="cell__value">7.54</span></div>
        <div class="cell" data-cell="c-34-13"><span class="cell__label">c-34-13</span><span class="cell__value">25.03</span></div>
        <div class="cell" data-cell="c-34-14"><span class="cell__label">c-34-14</span><span class="cell__value">40.94</span></div>
        <div class="cell" data-cell="c-34-15"><span class="cell__label">c-34-15</span><span class="cell__value">26.94</span></div>
        <div class="cell" data-cell="c-34-16"><span class="cell__label">c-34-16</span><span class="cell__value">77.60</span></div>
        <div class="cell" data-cell="c-34-17"><span class="cell__label">c-34-17</span><span class="cell__value">40.64</span></div>
        <div class="cell" data-cell="c-34-18"><span class="cell__label">c-34-18</span><span class="cell__value">92.02</span></div>
        <div class="cell" data-cell="c-34-19"><span class="cell__label">c-34-19</span><span class="cell__value">5.90</span></div>
      </div>
      <div class="row" data-row="r-35">
        <div class="cell" data-cell="c-35-0"><span class="cell__label">c-35-0</span><span class="cell__value">64.72</span></div>
        <div class="cell" data-cell="c-35-1"><span class="cell__label">c-35-1</span><span class="cell__value">33.86</span></div>
        <div class="cell" data-cell="c-35-2"><span class="cell__label">c-35-2</span><span class="cell__value">37.15</span></div>
        <div class="cell" data-cell="c-35-3"><span class="cell__label">c-35-3</span><span class="cell__value">54.71</span></div>
        <div class="cell" data-cell="c-35-4"><span class="cell__label">c-35-4</span><span class="cell__value">10.01</span></div>
        <div class="cell" data-cell="c-35-5"><span class="cell__label">c-35-5</span><span class="cell__value">20.07</span></div>
        <div class="cell" data-cell="c-35-6"><span class="cell__label">c-35-6</span><span class="cell__value">66.22</span></div>
        <div class="cell" data-cell="c-35-7"><span class="cell__label">c-35-7</span><span class="cell__value">85.80</span></div>
        <div class="cell" data-cell="c-35-8"><span class="cell__label">c-35-8</span><span class="cell__value">59.25</span></div>
        <div class="cell" data-cell="c-35-9"><span class="cell__label">c-35-9</span><span class="cell__value">78.31</span></div>
        <div class="cell" data-cell="c-35-10"><span class="cell__label">c-35-10</span><span class="cell__value">6.54</span></div>
        <div class="cell" data-cell="c-35-11"><span class="cell__label">c-35-11</span><span class="cell__value">49.17</span></div>
        <div class="cell" data-cell="c-35-12"><span class="cell__label">c-35-12</span><span class="cell__value">36.04</span></div>
        <div class="cell" data-cell="c-35-13"><span class="cell__label">c-35-13</span><span class="cell__value">10.57</span></div>
        <div class="cell" data-cell="c-35-14"><span class="cell__label">c-35-14</span><span class="cell__value">69.57</span></div>
        <div class="cell" data-cell="c-35-15"><span class="cell__label">c-35-15</span><span class="cell__value">52.32</span></div>
        <div class="cell" data-cell="c-35-16"><span class="cell__label">c-35-16</span><span class="cell__value">72.65</span></div>
        <div class="cell" data-cell="c-35-17"><span class="cell__label">c-35-17</span><span class="cell__value">79.09</span></div>
        <div class="cell" data-cell="c-35-18"><span class="cell__label">c-35-18</span><span class="cell__value">99.30</span></div>
        <div class="cell" data-cell="c-35-19"><span class="cell__label">c-35-19</span><span class="cell__value">37.10</span></div>
      </div>
      <div class="row" data-row="r-36">
        <div class="cell" data-cell="c-36-0"><span class="cell__label">c-36-0</span><span class="cell__value">99.08</span></div>
        <div class="cell" data-cell="c-36-1"><span class="cell__label">c-36-1</span><span class="cell__value">27.17</span></div>
        <div class="cell" data-cell="c-36-2"><span class="cell__label">c-36-2</span><span class="cell__value">29.19</span></div>
        <div class="cell" data-cell="c-36-3"><span class="cell__label">c-36-3</span><span class="cell__value">91.49</span></div>
        <div class="cell" data-cell="c-36-4"><span class="cell__label">c-36-4</span><span class="cell__value">53.32</span></div>
        <div class="cell" data-cell="c-36-5"><span class="cell__label">c-36-5</span><span class="cell__value">78.54</span></div>
        <div class="cell" data-cell="c-36-6"><span class="cell__label">c-36-6</span><span class="cell__value">42.28</span></div>
        <div class="cell" data-cell="c-36-7"><span class="cell__label">c-36-7</span><span class="cell__value">73.19</span></div>
        <div class="cell" data-cell="c-36-8"><span class="cell__label">c-36-8</span><span class="cell__value">83.61</span></div>
        <div class="cell" data-cell="c-36-9"><span class="cell__label">c-36-9</span><span class="cell__value">90.51</span></div>
        <div class="cell" data-cell="c-36-10"><span class="cell__label">c-36-10</span><span class="cell__value">60.57</span></div>
        <div class="cell" data-cell="c-36-11"><span class="cell__label">c-36-11</span><span class="cell__value">14.86</span></div>
        <div class="cell" data-cell="c-36-12"><span class="cell__label">c-36-12</span><span class="cell__value">38.60</span></div>
        <div class="cell" data-cell="c-36-13"><span class="cell__label">c-36-13</span><span class="cell__value">1.09</span></div>
        <div class="cell" data-cell="c-36-14"><span class="cell__label">c-36-14</span><span class="cell__value">11.16</span></div>
        <div class="cell" data-cell="c-36-15"><span class="cell__label">c-36-15</span><span class="cell__value">80.30</span></div>
        <div class="cell" data-cell="c-36-16"><span class="cell__label">c-36-16</span><span class="cell__value">60.86</span></div>
        <div class="cell" data-cell="c-36-17"><span class="cell__label">c-36-17</span><span class="cell__value">95.77</span></div>
        <div class="cell" data-cell="c-36-18"><span class="cell__label">c-36-18</span><span class="cell__value">87.43</span></div>
        <div class="cell" data-cell="c-36-19"><span class="cell__label">c-36-19</span><span class="cell__value">18.18</span></div>
      </div>
      <div class="row" data-row="r-37">
        <div class="cell" data-cell="c-37-0"><span class="cell__label">c-37-0</span><span class="cell__value">32.93</span></div>
        <div class="cell" data-cell="c-37-1"><span class="cell__label">c-37-1</span><span class="cell__value">84.30</span></div>
        <div class="cell" data-cell="c-37-2"><span class="cell__label">c-37-2</span><span class="cell__value">9.04</span></div>
        <div class="cell" data-cell="c-37-3"><span class="cell__label">c-37-3</span><span class="cell__value">34.99</span></div>
        <div class="cell" data-cell="c-37-4"><span class="cell__label">c-37-4</span><span class="cell__value">27.07</span></div>
        <div class="cell" data-cell="c-37-5"><span class="cell__label">c-37-5</span><span class="cell__value">16.22</span></div>
        <div class="cell" data-cell="c-37-6"><span class="cell__label">c-37-6</span><span class="cell__value">36.31</span></div>
        <div class="cell" data-cell="c-37-7"><span class="cell__label">c-37-7</span><span class="cell__value">48.18</span></div>
        <div class="cell" data-cell="c-37-8"><span class="cell__label">c-37-8</span><span class="cell__value">2.07</span></div>
        <div class="cell" data-cell="c-37-9"><span class="cell__label">c-37-9</span><span class="cell__value">12.05</span></div>
        <div class="cell" data-cell="c-37-10"><span class="cell__label">c-37-10</span><span class="cell__value">24.73</span></div>
        <div class="cell" data-cell="c-37-11"><span class="cell__label">c-37-11</span><span class="cell__value">64.97</span></div>
        <div class="cell" data-cell="c-37-12"><span class="cell__label">c-37-12</span><span class="cell__value">47.49</span></div>
        <div class="cell" data-cell="c-37-13"><span class="cell__label">c-37-13</span><span class="cell__value">11.25</span></div>
        <div class="cell" data-cell="c-37-14"><span class="cell__label">c-37-14</span><span class="cell__value">52.95</span></div>
        <div class="cell" data-cell="c-37-15"><span class="cell__label">c-37-15</span><span class="cell__value">15.18</span></div>
        <div class="cell" data-cell="c-37-16"><span class="cell__label">c-37-16</span><span class="cell__value">40.52</span></div>
        <div class="cell" data-cell="c-37-17"><span class="cell__label">c-37-17</span><span class="cell__value">1.30</span></div>
        <div class="cell" data-cell="c-37-18"><span class="cell__label">c-37-18</span><span class="cell__value">73.82</span></div>
        <div class="cell" data-cell="c-37-19"><span class="cell__label">c-37-19</span><span class="cell__value">93.09</span></div>
      </div>
      <div class="row" data-row="r-38">
        <div class="cell" data-cell="c-38-0"><span class="cell__label">c-38-0</span><span class="cell__value">27.59</span></div>
        <div class="cell" data-cell="c-38-1"><span class="cell__label">c-38-1</span><span class="cell__value">75.60</span></div>
        <div class="cell" data-cell="c-38-2"><span class="cell__label">c-38-2</span><span class="cell__value">80.81</span></div>
        <div class="cell" data-cell="c-38-3"><span class="cell__label">c-38-3</span><span class="cell__value">99.86</span></div>
        <div class="cell" data-cell="c-38-4"><span class="cell__label">c-38-4</span><span class="cell__value">9.46</span></div>
        <div class="cell" data-cell="c-38-5"><span class="cell__label">c-38-5</span><span class="cell__value">57.74</span></div>
        <div class="cell" data-cell="c-38-6"><span class="cell__label">c-38-6</span><span class="cell__value">32.55</span></div>
        <div class="cell" data-cell="c-38-7"><span class="cell__label">c-38-7</span><span class="cell__value">55.07</span></div>
        <div class="cell" data-cell="c-38-8"><span class="cell__label">c-38-8</span><span class="cell__value">11.04</span></div>
        <div class="cell" data-cell="c-38-9"><span class="cell__label">c-38-9</span><span class="cell__value">27.21</span></div>
        <div class="cell" data-cell="c-38-10"><span class="cell__label">c-38-10</span><span class="cell__value">49.01</span></div>
        <div class="cell" data-cell="c-38-11"><span class="cell__label">c-38-11</span><span class="cell__value">29.13</span></div>
        <div class="cell" data-cell="c-38-12"><span class="cell__label">c-38-12</span><span class="cell__value">92.87</span></div>
        <div class="cell" data-cell="c-38-13"><span class="cell__label">c-38-13</span><span class="cell__value">68.14</span></div>
        <div class="cell" data-cell="c-38-14"><span class="cell__label">c-38-14</span><span class="cell__value">43.65</span></div>
        <div class="cell" data-cell="c-38-15"><span class="cell__label">c-38-15</span><span class="cell__value">52.16</span></div>
        <div class="cell" data-cell="c-38-16"><span class="cell__label">c-38-16</span><span class="cell__value">80.13</span></div>
        <div class="cell" data-cell="c-38-17"><span class="cell__label">c-38-17</span><span class="cell__value">48.12</span></div>
        <div class="cell" data-cell="c-38-18"><span class="cell__label">c-38-18</span><span class="cell__value">52.00</span></div>
        <div class="cell" data-cell="c-38-19"><span class="cell__label">c-38-19</span><span class="cell__value">22.84</span></div>
      </div>
      <div class="row" data-row="r-39">
        <div class="cell" data-cell="c-39-0"><span class="cell__label">c-39-0</span><span class="cell__value">28.47</span></div>
        <div class="cell" data-cell="c-39-1"><span class="cell__label">c-39-1</span><span class="cell__value">55.34</span></div>
        <div class="cell" data-cell="c-39-2"><span class="cell__label">c-39-2</span><span class="cell__value">46.49</span></div>
        <div class="cell" data-cell="c-39-3"><span class="cell__label">c-39-3</span><span class="cell__value">1.35</span></div>
        <div class="cell" data-cell="c-39-4"><span class="cell__label">c-39-4</span><span class="cell__value">56.44</span></div>
        <div class="cell" data-cell="c-39-5"><span class="cell__label">c-39-5</span><span class="cell__value">18.98</span></div>
        <div class="cell" data-cell="c-39-6"><span class="cell__label">c-39-6</span><span class="cell__value">17.16</span></div>
        <div class="cell" data-cell="c-39-7"><span class="cell__label">c-39-7</span><span class="cell__value">36.69</span></div>
        <div class="cell" data-cell="c-39-8"><span class="cell__label">c-39-8</span><span class="cell__value">96.02</span></div>
        <div class="cell" data-cell="c-39-9"><span class="cell__label">c-39-9</span><span class="cell__value">39.53</span></div>
        <div class="cell" data-cell="c-39-10"><span class="cell__label">c-39-10</span><span class="cell__value">93.91</span></div>
        <div class="cell" data-cell="c-39-11"><span class="cell__label">c-39-11</span><span class="cell__value">38.99</span></div>
        <div class="cell" data-cell="c-39-12"><span class="cell__label">c-39-12</span><span class="cell__value">85.08</span></div>
        <div class="cell" data-cell="c-39-13"><span class="cell__label">c-39-13</span><span class="cell__value">98.95</span></div>
        <div class="cell" data-cell="c-39-14"><span class="cell__label">c-39-14</span><span class="cell__value">72.74</span></div>
        <div class="cell" data-cell="c-39-15"><span class="cell__label">c-39-15</span><span class="cell__value">17.09</span></div>
        <div class="cell" data-cell="c-39-16"><span class="cell__label">c-39-16</span><span class="cell__value">61.04</span></div>
        <div class="cell" data-cell="c-39-17"><span class="cell__label">c-39-17</span><span class="cell__value">37.61</span></div>
        <div class="cell" data-cell="c-39-18"><span class="cell__label">c-39-18</span><span class="cell__value">46.24</span></div>
        <div class="cell" data-cell="c-39-19"><span class="cell__label">c-39-19</span><span class="cell__value">70.39</span></div>
      </div>
      <div class="row" data-row="r-40">
        <div class="cell" data-cell="c-40-0"><span class="cell__label">c-40-0</span><span class="cell__value">34.19</span></div>
        <div class="cell" data-cell="c-40-1"><span class="cell__label">c-40-1</span><span class="cell__value">29.02</span></div>
        <div class="cell" data-cell="c-40-2"><span class="cell__label">c-40-2</span><span class="cell__value">67.09</span></div>
        <div class="cell" data-cell="c-40-3"><span class="cell__label">c-40-3</span><span class="cell__value">62.29</span></div>
        <div class="cell" data-cell="c-40-4"><span class="cell__label">c-40-4</span><span class="cell__value">20.62</span></div>
        <div class="cell" data-cell="c-40-5"><span class="cell__label">c-40-5</span><span class="cell__value">1.44</span></div>
        <div class="cell" data-cell="c-40-6"><span class="cell__label">c-40-6</span><span class="cell__value">36.20</span></div>
        <div class="cell" data-cell="c-40-7"><span class="cell__label">c-40-7</span><span class="cell__value">96.74</span></div>
        <div class="cell" data-cell="c-40-8"><span class="cell__label">c-40-8</span><span class="cell__value">16.29</span></div>
        <div class="cell" data-cell="c-40-9"><span class="cell__label">c-40-9</span><span class="cell__value">82.40</span></div>
        <div class="cell" data-cell="c-40-10"><span class="cell__label">c-40-10</span><span class="cell__value">1.59</span></div>
        <div class="cell" data-cell="c-40-11"><span class="cell__label">c-40-11</span><span class="cell__value">33.50</span></div>
        <div class="cell" data-cell="c-40-12"><span class="cell__label">c-40-12</span><span class="cell__value">47.86</span></div>
        <div class="cell" data-cell="c-40-13"><span class="cell__label">c-40-13</span><span class="cell__value">79.85</span></div>
        <div class="cell" data-cell="c-40-14"><span class="cell__label">c-40-14</span><span class="cell__value">26.08</span></div>
        <div class="cell" data-cell="c-40-15"><span class="cell__label">c-40-15</span><span class="cell__value">81.90</span></div>
        <div class="cell" data-cell="c-40-16"><span class="cell__label">c-40-16</span><span class="cell__value">95.93</span></div>
        <div class="cell" data-cell="c-40-17"><span class="cell__label">c-40-17</span><span class="cell__value">46.80</span></div>
        <div class="cell" data-cell="c-40-18"><span class="cell__label">c-40-18</span><span class="cell__value">53.96</span></div>
        <div class="cell" data-cell="c-40-19"><span class="cell__label">c-40-19</span><span class="cell__value">88.67</span></div>
      </div>
      <div class="row" data-row="r-41">
        <div class="cell" data-cell="c-41-0"><span class="cell__label">c-41-0</span><span class="cell__value">95.61</span></div>
        <div class="cell" data-cell="c-41-1"><span class="cell__label">c-41-1</span><span class="cell__value">18.18</span></div>
        <div class="cell" data-cell="c-41-2"><span class="cell__label">c-41-2</span><span class="cell__value">41.67</span></div>
        <div class="cell" data-cell="c-41-3"><span class="cell__label">c-41-3</span><span class="cell__value">54.98</span></div>
        <div class="cell" data-cell="c-41-4"><span class="cell__label">c-41-4</span><span class="cell__value">45.30</span></div>
        <div class="cell" data-cell="c-41-5"><span class="cell__label">c-41-5</span><span class="cell__value">34.99</span></div>
        <div class="cell" data-cell="c-41-6"><span class="cell__label">c-41-6</span><span class="cell__value">88.30</span></div>
        <div class="cell" data-cell="c-41-7"><span class="cell__label">c-41-7</span><span class="cell__value">91.60</span></div>
        <div class="cell" data-cell="c-41-8"><span class="cell__label">c-41-8</span><span class="cell__value">45.62</span></div>
        <div class="cell" data-cell="c-41-9"><span class="cell__label">c-41-9</span><span class="cell__value">23.61</span></div>
        <div class="cell" data-cell="c-41-10"><span class="cell__label">c-41-10</span><span class="cell__value">27.63</span></div>
        <div class="cell" data-cell="c-41-11"><span class="cell__label">c-41-11</span><span class="cell__value">13.71</span></div>
        <div class="cell" data-cell="c-41-12"><span class="cell__label">c-41-12</span><span class="cell__value">71.91</span></div>
        <div class="cell" data-cell="c-41-13"><span class="cell__label">c-41-13</span><span class="cell__value">56.28</span></div>
        <div class="cell" data-cell="c-41-14"><span class="cell__label">c-41-14</span><span class="cell__value">57.54</span></div>
        <div class="cell" data-cell="c-41-15"><span class="cell__label">c-41-15</span><span class="cell__value">86.69</span></div>
        <div class="cell" data-cell="c-41-16"><span class="cell__label">c-41-16</span><span class="cell__value">19.43</span></div>
        <div class="cell" data-cell="c-41-17"><span class="cell__label">c-41-17</span><span class="cell__value">11.06</span></div>
        <div class="cell" data-cell="c-41-18"><span class="cell__label">c-41-18</span><span class="cell__value">63.57</span></div>
        <div class="cell" data-cell="c-41-19"><span class="cell__label">c-41-19</span><span class="cell__value">45.30</span></div>
      </div>
      </div> -->
      <div id="after-toggle"></div>
      <div class="row" data-row="r-42">
        <div class="cell" data-cell="c-42-0"><span class="cell__label">c-42-0</span><span class="cell__value">36.55</span></div>
        <div class="cell" data-cell="c-42-1"><span class="cell__label">c-42-1</span><span class="cell__value">35.43</span></div>
        <div class="cell" data-cell="c-42-2"><span class="cell__label">c-42-2</span><span class="cell__value">64.84</span></div>
        <div class="cell" data-cell="c-42-3"><span class="cell__label">c-42-3</span><span class="cell__value">6.74</span></div>
        <div class="cell" data-cell="c-42-4"><span class="cell__label">c-42-4</span><span class="cell__value">76.96</span></div>
        <div class="cell" data-cell="c-42-5"><span class="cell__label">c-42-5</span><span class="cell__value">41.95</span></div>
        <div class="cell" data-cell="c-42-6"><span class="cell__label">c-42-6</span><span class="cell__value">21.81</span></div>
        <div class="cell" data-cell="c-42-7"><span class="cell__label">c-42-7</span><span class="cell__value">95.63</span></div>
        <div class="cell" data-cell="c-42-8"><span class="cell__label">c-42-8</span><span class="cell__value">99.11</span></div>
        <div class="cell" data-cell="c-42-9"><span class="cell__label">c-42-9</span><span class="cell__value">79.22</span></div>
        <div class="cell" data-cell="c-42-10"><span class="cell__label">c-42-10</span><span class="cell__value">4.72</span></div>
        <div class="cell" data-cell="c-42-11"><span class="cell__label">c-42-11</span><span class="cell__value">89.59</span></div>
        <div class="cell" data-cell="c-42-12"><span class="cell__label">c-42-12</span><span class="cell__value">21.30</span></div>
        <div class="cell" data-cell="c-42-13"><span class="cell__label">c-42-13</span><span class="cell__value">15.66</span></div>
        <div class="cell" data-cell="c-42-14"><span class="cell__label">c-42-14</span><span class="cell__value">92.29</span></div>
        <div class="cell" data-cell="c-42-15"><span class="cell__label">c-42-15</span><span class="cell__value">65.48</span></div>
        <div class="cell" data-cell="c-42-16"><span class="cell__label">c-42-16</span><span class="cell__value">76.09</span></div>
        <div class="cell" data-cell="c-42-17"><span class="cell__label">c-42-17</span><span class="cell__value">10.30</span></div>
        <div class="cell" data-cell="c-42-18"><span class="cell__label">c-42-18</span><span class="cell__value">36.58</span></div>
        <div class="cell" data-cell="c-42-19"><span class="cell__label">c-42-19</span><span class="cell__value">15.08</span></div>
      </div>
      <div class="row" data-row="r-43">
        <div class="cell" data-cell="c-43-0"><span class="cell__label">c-43-0</span><span class="cell__value">88.42</span></div>
        <div class="cell" data-cell="c-43-1"><span class="cell__label">c-43-1</span><span class="cell__value">9.01</span></div>
        <div class="cell" data-cell="c-43-2"><span class="cell__label">c-43-2</span><span class="cell__value">33.14</span></div>
        <div class="cell" data-cell="c-43-3"><span class="cell__label">c-43-3</span><span class="cell__value">21.77</span></div>
        <div class="cell" data-cell="c-43-4"><span class="cell__label">c-43-4</span><span class="cell__value">98.11</span></div>
        <div class="cell" data-cell="c-43-5"><span class="cell__label">c-43-5</span><span class="cell__value">46.74</span></div>
        <div class="cell" data-cell="c-43-6"><span class="cell__label">c-43-6</span><span class="cell__value">87.57</span></div>
        <div class="cell" data-cell="c-43-7"><span class="cell__label">c-43-7</span><span class="cell__value">20.59</span></div>
        <div class="cell" data-cell="c-43-8"><span class="cell__label">c-43-8</span><span class="cell__value">84.45</span></div>
        <div class="cell" data-cell="c-43-9"><span class="cell__label">c-43-9</span><span class="cell__value">94.60</span></div>
        <div class="cell" data-cell="c-43-10"><span class="cell__label">c-43-10</span><span class="cell__value">19.11</span></div>
        <div class="cell" data-cell="c-43-11"><span class="cell__label">c-43-11</span><span class="cell__value">72.61</span></div>
        <div class="cell" data-cell="c-43-12"><span class="cell__label">c-43-12</span><span class="cell__value">98.79</span></div>
        <div class="cell" data-cell="c-43-13"><span class="cell__label">c-43-13</span><span class="cell__value">52.88</span></div>
        <div class="cell" data-cell="c-43-14"><span class="cell__label">c-43-14</span><span class="cell__value">72.99</span></div>
        <div class="cell" data-cell="c-43-15"><span class="cell__label">c-43-15</span><span class="cell__value">94.70</span></div>
        <div class="cell" data-cell="c-43-16"><span class="cell__label">c-43-16</span><span class="cell__value">83.72</span></div>
        <div class="cell" data-cell="c-43-17"><span class="cell__label">c-43-17</span><span class="cell__value">85.86</span></div>
        <div class="cell" data-cell="c-43-18"><span class="cell__label">c-43-18</span><span class="cell__value">88.88</span></div>
        <div class="cell" data-cell="c-43-19"><span class="cell__label">c-43-19</span><span class="cell__value">77.81</span></div>
      </div>
      <div class="row" data-row="r-44">
        <div class="cell" data-cell="c-44-0"><span class="cell__label">c-44-0</span><span class="cell__value">31.23</span></div>
        <div class="cell" data-cell="c-44-1"><span class="cell__label">c-44-1</span><span class="cell__value">38.22</span></div>
        <div class="cell" data-cell="c-44-2"><span class="cell__label">c-44-2</span><span class="cell__value">67.94</span></div>
        <div class="cell" data-cell="c-44-3"><span class="cell__label">c-44-3</span><span class="cell__value">55.56</span></div>
        <div class="cell" data-cell="c-44-4"><span class="cell__label">c-44-4</span><span class="cell__value">25.09</span></div>
        <div class="cell" data-cell="c-44-5"><span class="cell__label">c-44-5</span><span class="cell__value">65.03</span></div>
        <div class="cell" data-cell="c-44-6"><span class="cell__label">c-44-6</span><span class="cell__value">48.51</span></div>
        <div class="cell" data-cell="c-44-7"><span class="cell__label">c-44-7</span><span class="cell__value">69.45</span></div>
        <div class="cell" data-cell="c-44-8"><span class="cell__label">c-44-8</span><span class="cell__value">80.38</span></div>
        <div class="cell" data-cell="c-44-9"><span class="cell__label">c-44-9</span><span class="cell__value">34.69</span></div>
        <div class="cell" data-cell="c-44-10"><span class="cell__label">c-44-10</span><span class="cell__value">83.58</span></div>
        <div class="cell" data-cell="c-44-11"><span class="cell__label">c-44-11</span><span class="cell__value">57.65</span></div>
        <div class="cell" data-cell="c-44-12"><span class="cell__label">c-44-12</span><span class="cell__value">28.84</span></div>
        <div class="cell" data-cell="c-44-13"><span class="cell__label">c-44-13</span><span class="cell__value">51.02</span></div>
        <div class="cell" data-cell="c-44-14"><span class="cell__label">c-44-14</span><span class="cell__value">49.81</span></div>
        <div class="cell" data-cell="c-44-15"><span class="cell__label">c-44-15</span><span class="cell__value">76.50</span></div>
        <div class="cell" data-cell="c-44-16"><span class="cell__label">c-44-16</span><span class="cell__value">98.78</span></div>
        <div class="cell" data-cell="c-44-17"><span class="cell__label">c-44-17</span><span class="cell__value">22.50</span></div>
        <div class="cell" data-cell="c-44-18"><span class="cell__label">c-44-18</span><span class="cell__value">23.31</span></div>
        <div class="cell" data-cell="c-44-19"><span class="cell__label">c-44-19</span><span class="cell__value">26.71</span></div>
      </div>
      <div class="row" data-row="r-45">
        <div class="cell" data-cell="c-45-0"><span class="cell__label">c-45-0</span><span class="cell__value">67.57</span></div>
        <div class="cell" data-cell="c-45-1"><span class="cell__label">c-45-1</span><span class="cell__value">50.60</span></div>
        <div class="cell" data-cell="c-45-2"><span class="cell__label">c-45-2</span><span class="cell__value">5.37</span></div>
        <div class="cell" data-cell="c-45-3"><span class="cell__label">c-45-3</span><span class="cell__value">27.18</span></div>
        <div class="cell" data-cell="c-45-4"><span class="cell__label">c-45-4</span><span class="cell__value">57.56</span></div>
        <div class="cell" data-cell="c-45-5"><span class="cell__label">c-45-5</span><span class="cell__value">7.85</span></div>
        <div class="cell" data-cell="c-45-6"><span class="cell__label">c-45-6</span><span class="cell__value">37.22</span></div>
        <div class="cell" data-cell="c-45-7"><span class="cell__label">c-45-7</span><span class="cell__value">54.88</span></div>
        <div class="cell" data-cell="c-45-8"><span class="cell__label">c-45-8</span><span class="cell__value">22.66</span></div>
        <div class="cell" data-cell="c-45-9"><span class="cell__label">c-45-9</span><span class="cell__value">48.02</span></div>
        <div class="cell" data-cell="c-45-10"><span class="cell__label">c-45-10</span><span class="cell__value">77.49</span></div>
        <div class="cell" data-cell="c-45-11"><span class="cell__label">c-45-11</span><span class="cell__value">8.68</span></div>
        <div class="cell" data-cell="c-45-12"><span class="cell__label">c-45-12</span><span class="cell__value">91.28</span></div>
        <div class="cell" data-cell="c-45-13"><span class="cell__label">c-45-13</span><span class="cell__value">1.27</span></div>
        <div class="cell" data-cell="c-45-14"><span class="cell__label">c-45-14</span><span class="cell__value">67.62</span></div>
        <div class="cell" data-cell="c-45-15"><span class="cell__label">c-45-15</span><span class="cell__value">41.48</span></div>
        <div class="cell" data-cell="c-45-16"><span class="cell__label">c-45-16</span><span class="cell__value">97.46</span></div>
        <div class="cell" data-cell="c-45-17"><span class="cell__label">c-45-17</span><span class="cell__value">86.25</span></div>
        <div class="cell" data-cell="c-45-18"><span class="cell__label">c-45-18</span><span class="cell__value">35.04</span></div>
        <div class="cell" data-cell="c-45-19"><span class="cell__label">c-45-19</span><span class="cell__value">90.71</span></div>
      </div>
      <div class="row" data-row="r-46">
        <div class="cell" data-cell="c-46-0"><span class="cell__label">c-46-0</span><span class="cell__value">42.12</span></div>
        <div class="cell" data-cell="c-46-1"><span class="cell__label">c-46-1</span><span class="cell__value">77.96</span></div>
        <div class="cell" data-cell="c-46-2"><span class="cell__label">c-46-2</span><span class="cell__value">4.89</span></div>
        <div class="cell" data-cell="c-46-3"><span class="cell__label">c-46-3</span><span class="cell__value">90.64</span></div>
        <div class="cell" data-cell="c-46-4"><span class="cell__label">c-46-4</span><span class="cell__value">77.44</span></div>
        <div class="cell" data-cell="c-46-5"><span class="cell__label">c-46-5</span><span class="cell__value">19.48</span></div>
        <div class="cell" data-cell="c-46-6"><span class="cell__label">c-46-6</span><span class="cell__value">47.67</span></div>
        <div class="cell" data-cell="c-46-7"><span class="cell__label">c-46-7</span><span class="cell__value">19.49</span></div>
        <div class="cell" data-cell="c-46-8"><span class="cell__label">c-46-8</span><span class="cell__value">39.73</span></div>
        <div class="cell" data-cell="c-46-9"><span class="cell__label">c-46-9</span><span class="cell__value">19.07</span></div>
        <div class="cell" data-cell="c-46-10"><span class="cell__label">c-46-10</span><span class="cell__value">21.07</span></div>
        <div class="cell" data-cell="c-46-11"><span class="cell__label">c-46-11</span><span class="cell__value">39.13</span></div>
        <div class="cell" data-cell="c-46-12"><span class="cell__label">c-46-12</span><span class="cell__value">53.88</span></div>
        <div class="cell" data-cell="c-46-13"><span class="cell__label">c-46-13</span><span class="cell__value">99.30</span></div>
        <div class="cell" data-cell="c-46-14"><span class="cell__label">c-46-14</span><span class="cell__value">50.27</span></div>
        <div class="cell" data-cell="c-46-15"><span class="cell__label">c-46-15</span><span class="cell__value">29.00</span></div>
        <div class="cell" data-cell="c-46-16"><span class="cell__label">c-46-16</span><span class="cell__value">30.25</span></div>
        <div class="cell" data-cell="c-46-17"><span class="cell__label">c-46-17</span><span class="cell__value">55.94</span></div>
        <div class="cell" data-cell="c-46-18"><span class="cell__label">c-46-18</span><span class="cell__value">37.23</span></div>
        <div class="cell" data-cell="c-46-19"><span class="cell__label">c-46-19</span><span class="cell__value">74.54</span></div>
      </div>
      <div class="row" data-row="r-47">
        <div class="cell" data-cell="c-47-0"><span class="cell__label">c-47-0</span><span class="cell__value">2.01</span></div>
        <div class="cell" data-cell="c-47-1"><span class="cell__label">c-47-1</span><span class="cell__value">0.94</span></div>
        <div class="cell" data-cell="c-47-2"><span class="cell__label">c-47-2</span><span class="cell__value">69.97</span></div>
        <div class="cell" data-cell="c-47-3"><span class="cell__label">c-47-3</span><span class="cell__value">33.95</span></div>
        <div class="cell" data-cell="c-47-4"><span class="cell__label">c-47-4</span><span class="cell__value">11.21</span></div>
        <div class="cell" data-cell="c-47-5"><span class="cell__label">c-47-5</span><span class="cell__value">63.31</span></div>
        <div class="cell" data-cell="c-47-6"><span class="cell__label">c-47-6</span><span class="cell__value">34.98</span></div>
        <div class="cell" data-cell="c-47-7"><span class="cell__label">c-47-7</span><span class="cell__value">12.57</span></div>
        <div class="cell" data-cell="c-47-8"><span class="cell__label">c-47-8</span><span class="cell__value">43.89</span></div>
        <div class="cell" data-cell="c-47-9"><span class="cell__label">c-47-9</span><span class="cell__value">19.68</span></div>
        <div class="cell" data-cell="c-47-10"><span class="cell__label">c-47-10</span><span class="cell__value">54.86</span></div>
        <div class="cell" data-cell="c-47-11"><span class="cell__label">c-47-11</span><span class="cell__value">54.99</span></div>
        <div class="cell" data-cell="c-47-12"><span class="cell__label">c-47-12</span><span class="cell__value">16.18</span></div>
        <div class="cell" data-cell="c-47-13"><span class="cell__label">c-47-13</span><span class="cell__value">97.39</span></div>
        <div class="cell" data-cell="c-47-14"><span class="cell__label">c-47-14</span><span class="cell__value">85.49</span></div>
        <div class="cell" data-cell="c-47-15"><span class="cell__label">c-47-15</span><span class="cell__value">82.34</span></div>
        <div class="cell" data-cell="c-47-16"><span class="cell__label">c-47-16</span><span class="cell__value">6.37</span></div>
        <div class="cell" data-cell="c-47-17"><span class="cell__label">c-47-17</span><span class="cell__value">45.80</span></div>
        <div class="cell" data-cell="c-47-18"><span class="cell__label">c-47-18</span><span class="cell__value">17.22</span></div>
        <div class="cell" data-cell="c-47-19"><span class="cell__label">c-47-19</span><span class="cell__value">11.69</span></div>
      </div>
      <div class="row" data-row="r-48">
        <div class="cell" data-cell="c-48-0"><span class="cell__label">c-48-0</span><span class="cell__value">55.70</span></div>
        <div class="cell" data-cell="c-48-1"><span class="cell__label">c-48-1</span><span class="cell__value">63.54</span></div>
        <div class="cell" data-cell="c-48-2"><span class="cell__label">c-48-2</span><span class="cell__value">71.82</span></div>
        <div class="cell" data-cell="c-48-3"><span class="cell__label">c-48-3</span><span class="cell__value">64.16</span></div>
        <div class="cell" data-cell="c-48-4"><span class="cell__label">c-48-4</span><span class="cell__value">79.93</span></div>
        <div class="cell" data-cell="c-48-5"><span class="cell__label">c-48-5</span><span class="cell__value">79.55</span></div>
        <div class="cell" data-cell="c-48-6"><span class="cell__label">c-48-6</span><span class="cell__value">95.23</span></div>
        <div class="cell" data-cell="c-48-7"><span class="cell__label">c-48-7</span><span class="cell__value">46.05</span></div>
        <div class="cell" data-cell="c-48-8"><span class="cell__label">c-48-8</span><span class="cell__value">5.06</span></div>
        <div class="cell" data-cell="c-48-9"><span class="cell__label">c-48-9</span><span class="cell__value">11.47</span></div>
        <div class="cell" data-cell="c-48-10"><span class="cell__label">c-48-10</span><span class="cell__value">10.70</span></div>
        <div class="cell" data-cell="c-48-11"><span class="cell__label">c-48-11</span><span class="cell__value">64.02</span></div>
        <div class="cell" data-cell="c-48-12"><span class="cell__label">c-48-12</span><span class="cell__value">64.04</span></div>
        <div class="cell" data-cell="c-48-13"><span class="cell__label">c-48-13</span><span class="cell__value">52.73</span></div>
        <div class="cell" data-cell="c-48-14"><span class="cell__label">c-48-14</span><span class="cell__value">86.58</span></div>
        <div class="cell" data-cell="c-48-15"><span class="cell__label">c-48-15</span><span class="cell__value">58.16</span></div>
        <div class="cell" data-cell="c-48-16"><span class="cell__label">c-48-16</span><span class="cell__value">91.63</span></div>
        <div class="cell" data-cell="c-48-17"><span class="cell__label">c-48-17</span><span class="cell__value">17.29</span></div>
        <div class="cell" data-cell="c-48-18"><span class="cell__label">c-48-18</span><span class="cell__value">80.78</span></div>
        <div class="cell" data-cell="c-48-19"><span class="cell__label">c-48-19</span><span class="cell__value">14.40</span></div>
      </div>
      <div class="row" data-row="r-49">
        <div class="cell" data-cell="c-49-0"><span class="cell__label">c-49-0</span><span class="cell__value">96.52</span></div>
        <div class="cell" data-cell="c-49-1"><span class="cell__label">c-49-1</span><span class="cell__value">42.11</span></div>
        <div class="cell" data-cell="c-49-2"><span class="cell__label">c-49-2</span><span class="cell__value">13.17</span></div>
        <div class="cell" data-cell="c-49-3"><span class="cell__label">c-49-3</span><span class="cell__value">22.45</span></div>
        <div class="cell" data-cell="c-49-4"><span class="cell__label">c-49-4</span><span class="cell__value">16.44</span></div>
        <div class="cell" data-cell="c-49-5"><span class="cell__label">c-49-5</span><span class="cell__value">42.92</span></div>
        <div class="cell" data-cell="c-49-6"><span class="cell__label">c-49-6</span><span class="cell__value">82.98</span></div>
        <div class="cell" data-cell="c-49-7"><span class="cell__label">c-49-7</span><span class="cell__value">1.46</span></div>
        <div class="cell" data-cell="c-49-8"><span class="cell__label">c-49-8</span><span class="cell__value">28.74</span></div>
        <div class="cell" data-cell="c-49-9"><span class="cell__label">c-49-9</span><span class="cell__value">50.28</span></div>
        <div class="cell" data-cell="c-49-10"><span class="cell__label">c-49-10</span><span class="cell__value">28.38</span></div>
        <div class="cell" data-cell="c-49-11"><span class="cell__label">c-49-11</span><span class="cell__value">24.67</span></div>
        <div class="cell" data-cell="c-49-12"><span class="cell__label">c-49-12</span><span class="cell__value">56.27</span></div>
        <div class="cell" data-cell="c-49-13"><span class="cell__label">c-49-13</span><span class="cell__value">81.66</span></div>
        <div class="cell" data-cell="c-49-14"><span class="cell__label">c-49-14</span><span class="cell__value">66.83</span></div>
        <div class="cell" data-cell="c-49-15"><span class="cell__label">c-49-15</span><span class="cell__value">66.21</span></div>
        <div class="cell" data-cell="c-49-16"><span class="cell__label">c-49-16</span><span class="cell__value">75.26</span></div>
        <div class="cell" data-cell="c-49-17"><span class="cell__label">c-49-17</span><span class="cell__value">45.81</span></div>
        <div class="cell" data-cell="c-49-18"><span class="cell__label">c-49-18</span><span class="cell__value">84.55</span></div>
        <div class="cell" data-cell="c-49-19"><span class="cell__label">c-49-19</span><span class="cell__value">76.82</span></div>
      </div>
      <div class="row" data-row="r-50">
        <div class="cell" data-cell="c-50-0"><span class="cell__label">c-50-0</span><span class="cell__value">93.85</span></div>
        <div class="cell" data-cell="c-50-1"><span class="cell__label">c-50-1</span><span class="cell__value">99.06</span></div>
        <div class="cell" data-cell="c-50-2"><span class="cell__label">c-50-2</span><span class="cell__value">15.77</span></div>
        <div class="cell" data-cell="c-50-3"><span class="cell__label">c-50-3</span><span class="cell__value">29.62</span></div>
        <div class="cell" data-cell="c-50-4"><span class="cell__label">c-50-4</span><span class="cell__value">77.68</span></div>
        <div class="cell" data-cell="c-50-5"><span class="cell__label">c-50-5</span><span class="cell__value">40.35</span></div>
        <div class="cell" data-cell="c-50-6"><span class="cell__label">c-50-6</span><span class="cell__value">48.97</span></div>
        <div class="cell" data-cell="c-50-7"><span class="cell__label">c-50-7</span><span class="cell__value">10.76</span></div>
        <div class="cell" data-cell="c-50-8"><span class="cell__label">c-50-8</span><span class="cell__value">20.44</span></div>
        <div class="cell" data-cell="c-50-9"><span class="cell__label">c-50-9</span><span class="cell__value">1.63</span></div>
        <div class="cell" data-cell="c-50-10"><span class="cell__label">c-50-10</span><span class="cell__value">40.24</span></div>
        <div class="cell" data-cell="c-50-11"><span class="cell__label">c-50-11</span><span class="cell__value">53.59</span></div>
        <div class="cell" data-cell="c-50-12"><span class="cell__label">c-50-12</span><span class="cell__value">64.58</span></div>
        <div class="cell" data-cell="c-50-13"><span class="cell__label">c-50-13</span><span class="cell__value">95.99</span></div>
        <div class="cell" data-cell="c-50-14"><span class="cell__label">c-50-14</span><span class="cell__value">31.56</span></div>
        <div class="cell" data-cell="c-50-15"><span class="cell__label">c-50-15</span><span class="cell__value">55.73</span></div>
        <div class="cell" data-cell="c-50-16"><span class="cell__label">c-50-16</span><span class="cell__value">74.34</span></div>
        <div class="cell" data-cell="c-50-17"><span class="cell__label">c-50-17</span><span class="cell__value">99.50</span></div>
        <div class="cell" data-cell="c-50-18"><span class="cell__label">c-50-18</span><span class="cell__value">48.25</span></div>
        <div class="cell" data-cell="c-50-19"><span class="cell__label">c-50-19</span><span class="cell__value">91.30</span></div>
      </div>
      <div class="row" data-row="r-51">
        <div class="cell" data-cell="c-51-0"><span class="cell__label">c-51-0</span><span class="cell__value">13.25</span></div>
        <div class="cell" data-cell="c-51-1"><span class="cell__label">c-51-1</span><span class="cell__value">49.92</span></div>
        <div class="cell" data-cell="c-51-2"><span class="cell__label">c-51-2</span><span class="cell__value">72.33</span></div>
        <div class="cell" data-cell="c-51-3"><span class="cell__label">c-51-3</span><span class="cell__value">73.21</span></div>
        <div class="cell" data-cell="c-51-4"><span class="cell__label">c-51-4</span><span class="cell__value">17.20</span></div>
        <div class="cell" data-cell="c-51-5"><span class="cell__label">c-51-5</span><span class="cell__value">5.53</span></div>
        <div class="cell" data-cell="c-51-6"><span class="cell__label">c-51-6</span><span class="cell__value">72.23</span></div>
        <div class="cell" data-cell="c-51-7"><span class="cell__label">c-51-7</span><span class="cell__value">32.43</span></div>
        <div class="cell" data-cell="c-51-8"><span class="cell__label">c-51-8</span><span class="cell__value">64.83</span></div>
        <div class="cell" data-cell="c-51-9"><span class="cell__label">c-51-9</span><span class="cell__value">6.88</span></div>
        <div class="cell" data-cell="c-51-10"><span class="cell__label">c-51-10</span><span class="cell__value">57.01</span></div>
        <div class="cell" data-cell="c-51-11"><span class="cell__label">c-51-11</span><span class="cell__value">29.80</span></div>
        <div class="cell" data-cell="c-51-12"><span class="cell__label">c-51-12</span><span class="cell__value">64.40</span></div>
        <div class="cell" data-cell="c-51-13"><span class="cell__label">c-51-13</span><span class="cell__value">94.29</span></div>
        <div class="cell" data-cell="c-51-14"><span class="cell__label">c-51-14</span><span class="cell__value">26.27</span></div>
        <div class="cell" data-cell="c-51-15"><span class="cell__label">c-51-15</span><span class="cell__value">44.59</span></div>
        <div class="cell" data-cell="c-51-16"><span class="cell__label">c-51-16</span><span class="cell__value">30.06</span></div>
        <div class="cell" data-cell="c-51-17"><span class="cell__label">c-51-17</span><span class="cell__value">30.80</span></div>
        <div class="cell" data-cell="c-51-18"><span class="cell__label">c-51-18</span><span class="cell__value">67.91</span></div>
        <div class="cell" data-cell="c-51-19"><span class="cell__label">c-51-19</span><span class="cell__value">55.09</span></div>
      </div>
      <div class="row" data-row="r-52">
        <div class="cell" data-cell="c-52-0"><span class="cell__label">c-52-0</span><span class="cell__value">72.96</span></div>
        <div class="cell" data-cell="c-52-1"><span class="cell__label">c-52-1</span><span class="cell__value">15.75</span></div>
        <div class="cell" data-cell="c-52-2"><span class="cell__label">c-52-2</span><span class="cell__value">51.72</span></div>
        <div class="cell" data-cell="c-52-3"><span class="cell__label">c-52-3</span><span class="cell__value">27.10</span></div>
        <div class="cell" data-cell="c-52-4"><span class="cell__label">c-52-4</span><span class="cell__value">44.55</span></div>
        <div class="cell" data-cell="c-52-5"><span class="cell__label">c-52-5</span><span class="cell__value">36.08</span></div>
        <div class="cell" data-cell="c-52-6"><span class="cell__label">c-52-6</span><span class="cell__value">58.60</span></div>
        <div class="cell" data-cell="c-52-7"><span class="cell__label">c-52-7</span><span class="cell__value">4.43</span></div>
        <div class="cell" data-cell="c-52-8"><span class="cell__label">c-52-8</span><span class="cell__value">87.88</span></div>
        <div class="cell" data-cell="c-52-9"><span class="cell__label">c-52-9</span><span class="cell__value">10.89</span></div>
        <div class="cell" data-cell="c-52-10"><span class="cell__label">c-52-10</span><span class="cell__value">84.41</span></div>
        <div class="cell" data-cell="c-52-11"><span class="cell__label">c-52-11</span><span class="cell__value">20.60</span></div>
        <div class="cell" data-cell="c-52-12"><span class="cell__label">c-52-12</span><span class="cell__value">98.30</span></div>
        <div class="cell" data-cell="c-52-13"><span class="cell__label">c-52-13</span><span class="cell__value">59.30</span></div>
        <div class="cell" data-cell="c-52-14"><span class="cell__label">c-52-14</span><span class="cell__value">61.88</span></div>
        <div class="cell" data-cell="c-52-15"><span class="cell__label">c-52-15</span><span class="cell__value">31.02</span></div>
        <div class="cell" data-cell="c-52-16"><span class="cell__label">c-52-16</span><span class="cell__value">22.64</span></div>
        <div class="cell" data-cell="c-52-17"><span class="cell__label">c-52-17</span><span class="cell__value">98.69</span></div>
        <div class="cell" data-cell="c-52-18"><span class="cell__label">c-52-18</span><span class="cell__value">34.46</span></div>
        <div class="cell" data-cell="c-52-19"><span class="cell__label">c-52-19</span><span class="cell__value">10.81</span></div>
      </div>
      <div class="row" data-row="r-53">
        <div class="cell" data-cell="c-53-0"><span class="cell__label">c-53-0</span><span class="cell__value">30.43</span></div>
        <div class="cell" data-cell="c-53-1"><span class="cell__label">c-53-1</span><span class="cell__value">23.90</span></div>
        <div class="cell" data-cell="c-53-2"><span class="cell__label">c-53-2</span><span class="cell__value">24.57</span></div>
        <div class="cell" data-cell="c-53-3"><span class="cell__label">c-53-3</span><span class="cell__value">36.65</span></div>
        <div class="cell" data-cell="c-53-4"><span class="cell__label">c-53-4</span><span class="cell__value">66.14</span></div>
        <div class="cell" data-cell="c-53-5"><span class="cell__label">c-53-5</span><span class="cell__value">51.45</span></div>
        <div class="cell" data-cell="c-53-6"><span class="cell__label">c-53-6</span><span class="cell__value">90.48</span></div>
        <div class="cell" data-cell="c-53-7"><span class="cell__label">c-53-7</span><span class="cell__value">93.12</span></div>
        <div class="cell" data-cell="c-53-8"><span class="cell__label">c-53-8</span><span class="cell__value">69.85</span></div>
        <div class="cell" data-cell="c-53-9"><span class="cell__label">c-53-9</span><span class="cell__value">52.66</span></div>
        <div class="cell" data-cell="c-53-10"><span class="cell__label">c-53-10</span><span class="cell__value">53.28</span></div>
        <div class="cell" data-cell="c-53-11"><span class="cell__label">c-53-11</span><span class="cell__value">56.56</span></div>
        <div class="cell" data-cell="c-53-12"><span class="cell__label">c-53-12</span><span class="cell__value">55.73</span></div>
        <div class="cell" data-cell="c-53-13"><span class="cell__label">c-53-13</span><span class="cell__value">32.36</span></div>
        <div class="cell" data-cell="c-53-14"><span class="cell__label">c-53-14</span><span class="cell__value">21.88</span></div>
        <div class="cell" data-cell="c-53-15"><span class="cell__label">c-53-15</span><span class="cell__value">1.43</span></div>
        <div class="cell" data-cell="c-53-16"><span class="cell__label">c-53-16</span><span class="cell__value">96.01</span></div>
        <div class="cell" data-cell="c-53-17"><span class="cell__label">c-53-17</span><span class="cell__value">33.94</span></div>
        <div class="cell" data-cell="c-53-18"><span class="cell__label">c-53-18</span><span class="cell__value">49.10</span></div>
        <div class="cell" data-cell="c-53-19"><span class="cell__label">c-53-19</span><span class="cell__value">91.66</span></div>
      </div>
      <div class="row" data-row="r-54">
        <div class="cell" data-cell="c-54-0"><span class="cell__label">c-54-0</span><span class="cell__value">78.79</span></div>
        <div class="cell" data-cell="c-54-1"><span class="cell__label">c-54-1</span><span class="cell__value">98.13</span></div>
        <div class="cell" data-cell="c-54-2"><span class="cell__label">c-54-2</span><span class="cell__value">6.28</span></div>
        <div class="cell" data-cell="c-54-3"><span class="cell__label">c-54-3</span><span class="cell__value">84.08</span></div>
        <div class="cell" data-cell="c-54-4"><span class="cell__label">c-54-4</span><span class="cell__value">62.95</span></div>
        <div class="cell" data-cell="c-54-5"><span class="cell__label">c-54-5</span><span class="cell__value">47.70</span></div>
        <div class="cell" data-cell="c-54-6"><span class="cell__label">c-54-6</span><span class="cell__value">19.65</span></div>
        <div class="cell" data-cell="c-54-7"><span class="cell__label">c-54-7</span><span class="cell__value">46.07</span></div>
        <div class="cell" data-cell="c-54-8"><span class="cell__label">c-54-8</span><span class="cell__value">30.38</span></div>
        <div class="cell" data-cell="c-54-9"><span class="cell__label">c-54-9</span><span class="cell__value">85.03</span></div>
        <div class="cell" data-cell="c-54-10"><span class="cell__label">c-54-10</span><span class="cell__value">12.21</span></div>
        <div class="cell" data-cell="c-54-11"><span class="cell__label">c-54-11</span><span class="cell__value">3.91</span></div>
        <div class="cell" data-cell="c-54-12"><span class="cell__label">c-54-12</span><span class="cell__value">2.76</span></div>
        <div class="cell" data-cell="c-54-13"><span class="cell__label">c-54-13</span><span class="cell__value">40.21</span></div>
        <div class="cell" data-cell="c-54-14"><span class="cell__label">c-54-14</span><span class="cell__value">40.51</span></div>
        <div class="cell" data-cell="c-54-15"><span class="cell__label">c-54-15</span><span class="cell__value">58.08</span></div>
        <div class="cell" data-cell="c-54-16"><span class="cell__label">c-54-16</span><span class="cell__value">32.33</span></div>
        <div class="cell" data-cell="c-54-17"><span class="cell__label">c-54-17</span><span class="cell__value">96.02</span></div>
        <div class="cell" data-cell="c-54-18"><span class="cell__label">c-54-18</span><span class="cell__value">28.26</span></div>
        <div class="cell" data-cell="c-54-19"><span class="cell__label">c-54-19</span><span class="cell__value">93.90</span></div>
      </div>
      <div class="row" data-row="r-55">
        <div class="cell" data-cell="c-55-0"><span class="cell__label">c-55-0</span><span class="cell__value">83.93</span></div>
        <div class="cell" data-cell="c-55-1"><span class="cell__label">c-55-1</span><span class="cell__value">34.52</span></div>
        <div class="cell" data-cell="c-55-2"><span class="cell__label">c-55-2</span><span class="cell__value">14.11</span></div>
        <div class="cell" data-cell="c-55-3"><span class="cell__label">c-55-3</span><span class="cell__value">12.24</span></div>
        <div class="cell" data-cell="c-55-4"><span class="cell__label">c-55-4</span><span class="cell__value">19.08</span></div>
        <div class="cell" data-cell="c-55-5"><span class="cell__label">c-55-5</span><span class="cell__value">33.53</span></div>
        <div class="cell" data-cell="c-55-6"><span class="cell__label">c-55-6</span><span class="cell__value">72.56</span></div>
        <div class="cell" data-cell="c-55-7"><span class="cell__label">c-55-7</span><span class="cell__value">38.00</span></div>
        <div class="cell" data-cell="c-55-8"><span class="cell__label">c-55-8</span><span class="cell__value">20.85</span></div>
        <div class="cell" data-cell="c-55-9"><span class="cell__label">c-55-9</span><span class="cell__value">2.85</span></div>
        <div class="cell" data-cell="c-55-10"><span class="cell__label">c-55-10</span><span class="cell__value">2.30</span></div>
        <div class="cell" data-cell="c-55-11"><span class="cell__label">c-55-11</span><span class="cell__value">7.91</span></div>
        <div class="cell" data-cell="c-55-12"><span class="cell__label">c-55-12</span><span class="cell__value">29.11</span></div>
        <div class="cell" data-cell="c-55-13"><span class="cell__label">c-55-13</span><span class="cell__value">80.01</span></div>
        <div class="cell" data-cell="c-55-14"><span class="cell__label">c-55-14</span><span class="cell__value">88.01</span></div>
        <div class="cell" data-cell="c-55-15"><span class="cell__label">c-55-15</span><span class="cell__value">13.64</span></div>
        <div class="cell" data-cell="c-55-16"><span class="cell__label">c-55-16</span><span class="cell__value">88.44</span></div>
        <div class="cell" data-cell="c-55-17"><span class="cell__label">c-55-17</span><span class="cell__value">67.10</span></div>
        <div class="cell" data-cell="c-55-18"><span class="cell__label">c-55-18</span><span class="cell__value">11.43</span></div>
        <div class="cell" data-cell="c-55-19"><span class="cell__label">c-55-19</span><span class="cell__value">6.58</span></div>
      </div>
      <div class="row" data-row="r-56">
        <div class="cell" data-cell="c-56-0"><span class="cell__label">c-56-0</span><span class="cell__value">15.14</span></div>
        <div class="cell" data-cell="c-56-1"><span class="cell__label">c-56-1</span><span class="cell__value">44.95</span></div>
        <div class="cell" data-cell="c-56-2"><span class="cell__label">c-56-2</span><span class="cell__value">86.64</span></div>
        <div class="cell" data-cell="c-56-3"><span class="cell__label">c-56-3</span><span class="cell__value">71.41</span></div>
        <div class="cell" data-cell="c-56-4"><span class="cell__label">c-56-4</span><span class="cell__value">35.80</span></div>
        <div class="cell" data-cell="c-56-5"><span class="cell__label">c-56-5</span><span class="cell__value">76.90</span></div>
        <div class="cell" data-cell="c-56-6"><span class="cell__label">c-56-6</span><span class="cell__value">1.70</span></div>
        <div class="cell" data-cell="c-56-7"><span class="cell__label">c-56-7</span><span class="cell__value">4.76</span></div>
        <div class="cell" data-cell="c-56-8"><span class="cell__label">c-56-8</span><span class="cell__value">21.75</span></div>
        <div class="cell" data-cell="c-56-9"><span class="cell__label">c-56-9</span><span class="cell__value">45.25</span></div>
        <div class="cell" data-cell="c-56-10"><span class="cell__label">c-56-10</span><span class="cell__value">96.91</span></div>
        <div class="cell" data-cell="c-56-11"><span class="cell__label">c-56-11</span><span class="cell__value">53.06</span></div>
        <div class="cell" data-cell="c-56-12"><span class="cell__label">c-56-12</span><span class="cell__value">25.36</span></div>
        <div class="cell" data-cell="c-56-13"><span class="cell__label">c-56-13</span><span class="cell__value">94.05</span></div>
        <div class="cell" data-cell="c-56-14"><span class="cell__label">c-56-14</span><span class="cell__value">2.35</span></div>
        <div class="cell" data-cell="c-56-15"><span class="cell__label">c-56-15</span><span class="cell__value">9.57</span></div>
        <div class="cell" data-cell="c-56-16"><span class="cell__label">c-56-16</span><span class="cell__value">46.62</span></div>
        <div class="cell" data-cell="c-56-17"><span class="cell__label">c-56-17</span><span class="cell__value">7.03</span></div>
        <div class="cell" data-cell="c-56-18"><span class="cell__label">c-56-18</span><span class="cell__value">85.70</span></div>
        <div class="cell" data-cell="c-56-19"><span class="cell__label">c-56-19</span><span class="cell__value">95.31</span></div>
      </div>
      <div class="row" data-row="r-57">
        <div class="cell" data-cell="c-57-0"><span class="cell__label">c-57-0</span><span class="cell__value">54.39</span></div>
        <div class="cell" data-cell="c-57-1"><span class="cell__label">c-57-1</span><span class="cell__value">36.64</span></div>
        <div class="cell" data-cell="c-57-2"><span class="cell__label">c-57-2</span><span class="cell__value">36.50</span></div>
        <div class="cell" data-cell="c-57-3"><span class="cell__label">c-57-3</span><span class="cell__value">30.66</span></div>
        <div class="cell" data-cell="c-57-4"><span class="cell__label">c-57-4</span><span class="cell__value">74.35</span></div>
        <div class="cell" data-cell="c-57-5"><span class="cell__label">c-57-5</span><span class="cell__value">48.97</span></div>
        <div class="cell" data-cell="c-57-6"><span class="cell__label">c-57-6</span><span class="cell__value">0.98</span></div>
        <div class="cell" data-cell="c-57-7"><span class="cell__label">c-57-7</span><span class="cell__value">48.91</span></div>
        <div class="cell" data-cell="c-57-8"><span class="cell__label">c-57-8</span><span class="cell__value">19.68</span></div>
        <div class="cell" data-cell="c-57-9"><span class="cell__label">c-57-9</span><span class="cell__value">60.31</span></div>
        <div class="cell" data-cell="c-57-10"><span class="cell__label">c-57-10</span><span class="cell__value">63.08</span></div>
        <div class="cell" data-cell="c-57-11"><span class="cell__label">c-57-11</span><span class="cell__value">73.55</span></div>
        <div class="cell" data-cell="c-57-12"><span class="cell__label">c-57-12</span><span class="cell__value">75.86</span></div>
        <div class="cell" data-cell="c-57-13"><span class="cell__label">c-57-13</span><span class="cell__value">21.86</span></div>
        <div class="cell" data-cell="c-57-14"><span class="cell__label">c-57-14</span><span class="cell__value">64.44</span></div>
        <div class="cell" data-cell="c-57-15"><span class="cell__label">c-57-15</span><span class="cell__value">47.49</span></div>
        <div class="cell" data-cell="c-57-16"><span class="cell__label">c-57-16</span><span class="cell__value">71.46</span></div>
        <div class="cell" data-cell="c-57-17"><span class="cell__label">c-57-17</span><span class="cell__value">9.16</span></div>
        <div class="cell" data-cell="c-57-18"><span class="cell__label">c-57-18</span><span class="cell__value">81.61</span></div>
        <div class="cell" data-cell="c-57-19"><span class="cell__label">c-57-19</span><span class="cell__value">89.37</span></div>
      </div>
      <div class="row" data-row="r-58">
        <div class="cell" data-cell="c-58-0"><span class="cell__label">c-58-0</span><span class="cell__value">44.20</span></div>
        <div class="cell" data-cell="c-58-1"><span class="cell__label">c-58-1</span><span class="cell__value">31.76</span></div>
        <div class="cell" data-cell="c-58-2"><span class="cell__label">c-58-2</span><span class="cell__value">4.53</span></div>
        <div class="cell" data-cell="c-58-3"><span class="cell__label">c-58-3</span><span class="cell__value">43.93</span></div>
        <div class="cell" data-cell="c-58-4"><span class="cell__label">c-58-4</span><span class="cell__value">98.96</span></div>
        <div class="cell" data-cell="c-58-5"><span class="cell__label">c-58-5</span><span class="cell__value">49.57</span></div>
        <div class="cell" data-cell="c-58-6"><span class="cell__label">c-58-6</span><span class="cell__value">26.12</span></div>
        <div class="cell" data-cell="c-58-7"><span class="cell__label">c-58-7</span><span class="cell__value">39.00</span></div>
        <div class="cell" data-cell="c-58-8"><span class="cell__label">c-58-8</span><span class="cell__value">20.76</span></div>
        <div class="cell" data-cell="c-58-9"><span class="cell__label">c-58-9</span><span class="cell__value">61.43</span></div>
        <div class="cell" data-cell="c-58-10"><span class="cell__label">c-58-10</span><span class="cell__value">5.62</span></div>
        <div class="cell" data-cell="c-58-11"><span class="cell__label">c-58-11</span><span class="cell__value">61.14</span></div>
        <div class="cell" data-cell="c-58-12"><span class="cell__label">c-58-12</span><span class="cell__value">5.71</span></div>
        <div class="cell" data-cell="c-58-13"><span class="cell__label">c-58-13</span><span class="cell__value">37.29</span></div>
        <div class="cell" data-cell="c-58-14"><span class="cell__label">c-58-14</span><span class="cell__value">31.78</span></div>
        <div class="cell" data-cell="c-58-15"><span class="cell__label">c-58-15</span><span class="cell__value">13.00</span></div>
        <div class="cell" data-cell="c-58-16"><span class="cell__label">c-58-16</span><span class="cell__value">60.77</span></div>
        <div class="cell" data-cell="c-58-17"><span class="cell__label">c-58-17</span><span class="cell__value">29.16</span></div>
        <div class="cell" data-cell="c-58-18"><span class="cell__label">c-58-18</span><span class="cell__value">16.78</span></div>
        <div class="cell" data-cell="c-58-19"><span class="cell__label">c-58-19</span><span class="cell__value">21.61</span></div>
      </div>
      <div class="row" data-row="r-59">
        <div class="cell" data-cell="c-59-0"><span class="cell__label">c-59-0</span><span class="cell__value">65.71</span></div>
        <div class="cell" data-cell="c-59-1"><span class="cell__label">c-59-1</span><span class="cell__value">0.14</span></div>
        <div class="cell" data-cell="c-59-2"><span class="cell__label">c-59-2</span><span class="cell__value">31.17</span></div>
        <div class="cell" data-cell="c-59-3"><span class="cell__label">c-59-3</span><span class="cell__value">14.77</span></div>
        <div class="cell" data-cell="c-59-4"><span class="cell__label">c-59-4</span><span class="cell__value">57.57</span></div>
        <div class="cell" data-cell="c-59-5"><span class="cell__label">c-59-5</span><span class="cell__value">26.07</span></div>
        <div class="cell" data-cell="c-59-6"><span class="cell__label">c-59-6</span><span class="cell__value">56.84</span></div>
        <div class="cell" data-cell="c-59-7"><span class="cell__label">c-59-7</span><span class="cell__value">87.66</span></div>
        <div class="cell" data-cell="c-59-8"><span class="cell__label">c-59-8</span><span class="cell__value">97.92</span></div>
        <div class="cell" data-cell="c-59-9"><span class="cell__label">c-59-9</span><span class="cell__value">33.69</span></div>
        <div class="cell" data-cell="c-59-10"><span class="cell__label">c-59-10</span><span class="cell__value">58.07</span></div>
        <div class="cell" data-cell="c-59-11"><span class="cell__label">c-59-11</span><span class="cell__value">59.49</span></div>
        <div class="cell" data-cell="c-59-12"><span class="cell__label">c-59-12</span><span class="cell__value">55.91</span></div>
        <div class="cell" data-cell="c-59-13"><span class="cell__label">c-59-13</span><span class="cell__value">39.75</span></div>
        <div class="cell" data-cell="c-59-14"><span class="cell__label">c-59-14</span><span class="cell__value">71.69</span></div>
        <div class="cell" data-cell="c-59-15"><span class="cell__label">c-59-15</span><span class="cell__value">97.16</span></div>
        <div class="cell" data-cell="c-59-16"><span class="cell__label">c-59-16</span><span class="cell__value">85.15</span></div>
        <div class="cell" data-cell="c-59-17"><span class="cell__label">c-59-17</span><span class="cell__value">97.02</span></div>
        <div class="cell" data-cell="c-59-18"><span class="cell__label">c-59-18</span><span class="cell__value">60.93</span></div>
        <div class="cell" data-cell="c-59-19"><span class="cell__label">c-59-19</span><span class="cell__value">51.29</span></div>
      </div>
      <div class="row" data-row="r-60">
        <div class="cell" data-cell="c-60-0"><span class="cell__label">c-60-0</span><span class="cell__value">88.85</span></div>
        <div class="cell" data-cell="c-60-1"><span class="cell__label">c-60-1</span><span class="cell__value">58.39</span></div>
        <div class="cell" data-cell="c-60-2"><span class="cell__label">c-60-2</span><span class="cell__value">67.18</span></div>
        <div class="cell" data-cell="c-60-3"><span class="cell__label">c-60-3</span><span class="cell__value">49.32</span></div>
        <div class="cell" data-cell="c-60-4"><span class="cell__label">c-60-4</span><span class="cell__value">24.48</span></div>
        <div class="cell" data-cell="c-60-5"><span class="cell__label">c-60-5</span><span class="cell__value">96.36</span></div>
        <div class="cell" data-cell="c-60-6"><span class="cell__label">c-60-6</span><span class="cell__value">92.86</span></div>
        <div class="cell" data-cell="c-60-7"><span class="cell__label">c-60-7</span><span class="cell__value">26.73</span></div>
        <div class="cell" data-cell="c-60-8"><span class="cell__label">c-60-8</span><span class="cell__value">19.72</span></div>
        <div class="cell" data-cell="c-60-9"><span class="cell__label">c-60-9</span><span class="cell__value">69.63</span></div>
        <div class="cell" data-cell="c-60-10"><span class="cell__label">c-60-10</span><span class="cell__value">69.05</span></div>
        <div class="cell" data-cell="c-60-11"><span class="cell__label">c-60-11</span><span class="cell__value">97.73</span></div>
        <div class="cell" data-cell="c-60-12"><span class="cell__label">c-60-12</span><span class="cell__value">43.00</span></div>
        <div class="cell" data-cell="c-60-13"><span class="cell__label">c-60-13</span><span class="cell__value">74.90</span></div>
        <div class="cell" data-cell="c-60-14"><span class="cell__label">c-60-14</span><span class="cell__value">77.11</span></div>
        <div class="cell" data-cell="c-60-15"><span class="cell__label">c-60-15</span><span class="cell__value">73.13</span></div>
        <div class="cell" data-cell="c-60-16"><span class="cell__label">c-60-16</span><span class="cell__value">0.20</span></div>
        <div class="cell" data-cell="c-60-17"><span class="cell__label">c-60-17</span><span class="cell__value">31.08</span></div>
        <div class="cell" data-cell="c-60-18"><span class="cell__label">c-60-18</span><span class="cell__value">26.49</span></div>
        <div class="cell" data-cell="c-60-19"><span class="cell__label">c-60-19</span><span class="cell__value">31.77</span></div>
      </div>
      <div class="row" data-row="r-61">
        <div class="cell" data-cell="c-61-0"><span class="cell__label">c-61-0</span><span class="cell__value">77.01</span></div>
        <div class="cell" data-cell="c-61-1"><span class="cell__label">c-61-1</span><span class="cell__value">14.48</span></div>
        <div class="cell" data-cell="c-61-2"><span class="cell__label">c-61-2</span><span class="cell__value">39.00</span></div>
        <div class="cell" data-cell="c-61-3"><span class="cell__label">c-61-3</span><span class="cell__value">18.28</span></div>
        <div class="cell" data-cell="c-61-4"><span class="cell__label">c-61-4</span><span class="cell__value">70.79</span></div>
        <div class="cell" data-cell="c-61-5"><span class="cell__label">c-61-5</span><span class="cell__value">23.00</span></div>
        <div class="cell" data-cell="c-61-6"><span class="cell__label">c-61-6</span><span class="cell__value">66.95</span></div>
        <div class="cell" data-cell="c-61-7"><span class="cell__label">c-61-7</span><span class="cell__value">53.52</span></div>
        <div class="cell" data-cell="c-61-8"><span class="cell__label">c-61-8</span><span class="cell__value">31.35</span></div>
        <div class="cell" data-cell="c-61-9"><span class="cell__label">c-61-9</span><span class="cell__value">22.83</span></div>
        <div class="cell" data-cell="c-61-10"><span class="cell__label">c-61-10</span><span class="cell__value">41.75</span></div>
        <div class="cell" data-cell="c-61-11"><span class="cell__label">c-61-11</span><span class="cell__value">50.86</span></div>
        <div class="cell" data-cell="c-61-12"><span class="cell__label">c-61-12</span><span class="cell__value">84.48</span></div>
        <div class="cell" data-cell="c-61-13"><span class="cell__label">c-61-13</span><span class="cell__value">58.04</span></div>
        <div class="cell" data-cell="c-61-14"><span class="cell__label">c-61-14</span><span class="cell__value">44.51</span></div>
        <div class="cell" data-cell="c-61-15"><span class="cell__label">c-61-15</span><span class="cell__value">74.13</span></div>
        <div class="cell" data-cell="c-61-16"><span class="cell__label">c-61-16</span><span class="cell__value">72.68</span></div>
        <div class="cell" data-cell="c-61-17"><span class="cell__label">c-61-17</span><span class="cell__value">22.39</span></div>
        <div class="cell" data-cell="c-61-18"><span class="cell__label">c-61-18</span><span class="cell__value">75.25</span></div>
        <div class="cell" data-cell="c-61-19"><span class="cell__label">c-61-19</span><span class="cell__value">18.64</span></div>
      </div>
      <div class="row" data-row="r-62">
        <div class="cell" data-cell="c-62-0"><span class="cell__label">c-62-0</span><span class="cell__value">58.33</span></div>
        <div class="cell" data-cell="c-62-1"><span class="cell__label">c-62-1</span><span class="cell__value">75.02</span></div>
        <div class="cell" data-cell="c-62-2"><span class="cell__label">c-62-2</span><span class="cell__value">9.05</span></div>
        <div class="cell" data-cell="c-62-3"><span class="cell__label">c-62-3</span><span class="cell__value">29.58</span></div>
        <div class="cell" data-cell="c-62-4"><span class="cell__label">c-62-4</span><span class="cell__value">86.87</span></div>
        <div class="cell" data-cell="c-62-5"><span class="cell__label">c-62-5</span><span class="cell__value">53.49</span></div>
        <div class="cell" data-cell="c-62-6"><span class="cell__label">c-62-6</span><span class="cell__value">83.99</span></div>
        <div class="cell" data-cell="c-62-7"><span class="cell__label">c-62-7</span><span class="cell__value">32.52</span></div>
        <div class="cell" data-cell="c-62-8"><span class="cell__label">c-62-8</span><span class="cell__value">72.65</span></div>
        <div class="cell" data-cell="c-62-9"><span class="cell__label">c-62-9</span><span class="cell__value">8.13</span></div>
        <div class="cell" data-cell="c-62-10"><span class="cell__label">c-62-10</span><span class="cell__value">26.21</span></div>
        <div class="cell" data-cell="c-62-11"><span class="cell__label">c-62-11</span><span class="cell__value">43.26</span></div>
        <div class="cell" data-cell="c-62-12"><span class="cell__label">c-62-12</span><span class="cell__value">0.21</span></div>
        <div class="cell" data-cell="c-62-13"><span class="cell__label">c-62-13</span><span class="cell__value">55.11</span></div>
        <div class="cell" data-cell="c-62-14"><span class="cell__label">c-62-14</span><span class="cell__value">76.66</span></div>
        <div class="cell" data-cell="c-62-15"><span class="cell__label">c-62-15</span><span class="cell__value">32.35</span></div>
        <div class="cell" data-cell="c-62-16"><span class="cell__label">c-62-16</span><span class="cell__value">89.90</span></div>
        <div class="cell" data-cell="c-62-17"><span class="cell__label">c-62-17</span><span class="cell__value">19.38</span></div>
        <div class="cell" data-cell="c-62-18"><span class="cell__label">c-62-18</span><span class="cell__value">78.99</span></div>
        <div class="cell" data-cell="c-62-19"><span class="cell__label">c-62-19</span><span class="cell__value">53.62</span></div>
      </div>
      <div class="row" data-row="r-63">
        <div class="cell" data-cell="c-63-0"><span class="cell__label">c-63-0</span><span class="cell__value">89.09</span></div>
        <div class="cell" data-cell="c-63-1"><span class="cell__label">c-63-1</span><span class="cell__value">74.48</span></div>
        <div class="cell" data-cell="c-63-2"><span class="cell__label">c-63-2</span><span class="cell__value">94.66</span></div>
        <div class="cell" data-cell="c-63-3"><span class="cell__label">c-63-3</span><span class="cell__value">15.50</span></div>
        <div class="cell" data-cell="c-63-4"><span class="cell__label">c-63-4</span><span class="cell__value">14.08</span></div>
        <div class="cell" data-cell="c-63-5"><span class="cell__label">c-63-5</span><span class="cell__value">14.43</span></div>
        <div class="cell" data-cell="c-63-6"><span class="cell__label">c-63-6</span><span class="cell__value">27.85</span></div>
        <div class="cell" data-cell="c-63-7"><span class="cell__label">c-63-7</span><span class="cell__value">29.28</span></div>
        <div class="cell" data-cell="c-63-8"><span class="cell__label">c-63-8</span><span class="cell__value">63.77</span></div>
        <div class="cell" data-cell="c-63-9"><span class="cell__label">c-63-9</span><span class="cell__value">13.63</span></div>
        <div class="cell" data-cell="c-63-10"><span class="cell__label">c-63-10</span><span class="cell__value">57.82</span></div>
        <div class="cell" data-cell="c-63-11"><span class="cell__label">c-63-11</span><span class="cell__value">79.41</span></div>
        <div class="cell" data-cell="c-63-12"><span class="cell__label">c-63-12</span><span class="cell__value">24.97</span></div>
        <div class="cell" data-cell="c-63-13"><span class="cell__label">c-63-13</span><span class="cell__value">13.48</span></div>
        <div class="cell" data-cell="c-63-14"><span class="cell__label">c-63-14</span><span class="cell__value">47.13</span></div>
        <div class="cell" data-cell="c-63-15"><span class="cell__label">c-63-15</span><span class="cell__value">82.82</span></div>
        <div class="cell" data-cell="c-63-16"><span class="cell__label">c-63-16</span><span class="cell__value">84.69</span></div>
        <div class="cell" data-cell="c-63-17"><span class="cell__label">c-63-17</span><span class="cell__value">50.53</span></div>
        <div class="cell" data-cell="c-63-18"><span class="cell__label">c-63-18</span><span class="cell__value">97.88</span></div>
        <div class="cell" data-cell="c-63-19"><span class="cell__label">c-63-19</span><span class="cell__value">76.71</span></div>
      </div>
      <div class="row" data-row="r-64">
        <div class="cell" data-cell="c-64-0"><span class="cell__label">c-64-0</span><span class="cell__value">24.63</span></div>
        <div class="cell" data-cell="c-64-1"><span class="cell__label">c-64-1</span><span class="cell__value">10.11</span></div>
        <div class="cell" data-cell="c-64-2"><span class="cell__label">c-64-2</span><span class="cell__value">54.88</span></div>
        <div class="cell" data-cell="c-64-3"><span class="cell__label">c-64-3</span><span class="cell__value">83.67</span></div>
        <div class="cell" data-cell="c-64-4"><span class="cell__label">c-64-4</span><span class="cell__value">14.54</span></div>
        <div class="cell" data-cell="c-64-5"><span class="cell__label">c-64-5</span><span class="cell__value">70.87</span></div>
        <div class="cell" data-cell="c-64-6"><span class="cell__label">c-64-6</span><span class="cell__value">61.78</span></div>
        <div class="cell" data-cell="c-64-7"><span class="cell__label">c-64-7</span><span class="cell__value">67.24</span></div>
        <div class="cell" data-cell="c-64-8"><span class="cell__label">c-64-8</span><span class="cell__value">92.57</span></div>
        <div class="cell" data-cell="c-64-9"><span class="cell__label">c-64-9</span><span class="cell__value">43.01</span></div>
        <div class="cell" data-cell="c-64-10"><span class="cell__label">c-64-10</span><span class="cell__value">88.73</span></div>
        <div class="cell" data-cell="c-64-11"><span class="cell__label">c-64-11</span><span class="cell__value">18.51</span></div>
        <div class="cell" data-cell="c-64-12"><span class="cell__label">c-64-12</span><span class="cell__value">53.80</span></div>
        <div class="cell" data-cell="c-64-13"><span class="cell__label">c-64-13</span><span class="cell__value">60.25</span></div>
        <div class="cell" data-cell="c-64-14"><span class="cell__label">c-64-14</span><span class="cell__value">44.13</span></div>
        <div class="cell" data-cell="c-64-15"><span class="cell__label">c-64-15</span><span class="cell__value">91.80</span></div>
        <div class="cell" data-cell="c-64-16"><span class="cell__label">c-64-16</span><span class="cell__value">96.34</span></div>
        <div class="cell" data-cell="c-64-17"><span class="cell__label">c-64-17</span><span class="cell__value">19.97</span></div>
        <div class="cell" data-cell="c-64-18"><span class="cell__label">c-64-18</span><span class="cell__value">20.03</span></div>
        <div class="cell" data-cell="c-64-19"><span class="cell__label">c-64-19</span><span class="cell__value">14.16</span></div>
      </div>
      <div class="row" data-row="r-65">
        <div class="cell" data-cell="c-65-0"><span class="cell__label">c-65-0</span><span class="cell__value">38.79</span></div>
        <div class="cell" data-cell="c-65-1"><span class="cell__label">c-65-1</span><span class="cell__value">81.58</span></div>
        <div class="cell" data-cell="c-65-2"><span class="cell__label">c-65-2</span><span class="cell__value">26.82</span></div>
        <div class="cell" data-cell="c-65-3"><span class="cell__label">c-65-3</span><span class="cell__value">57.62</span></div>
        <div class="cell" data-cell="c-65-4"><span class="cell__label">c-65-4</span><span class="cell__value">40.25</span></div>
        <div class="cell" data-cell="c-65-5"><span class="cell__label">c-65-5</span><span class="cell__value">73.09</span></div>
        <div class="cell" data-cell="c-65-6"><span class="cell__label">c-65-6</span><span class="cell__value">82.46</span></div>
        <div class="cell" data-cell="c-65-7"><span class="cell__label">c-65-7</span><span class="cell__value">80.64</span></div>
        <div class="cell" data-cell="c-65-8"><span class="cell__label">c-65-8</span><span class="cell__value">91.80</span></div>
        <div class="cell" data-cell="c-65-9"><span class="cell__label">c-65-9</span><span class="cell__value">6.30</span></div>
        <div class="cell" data-cell="c-65-10"><span class="cell__label">c-65-10</span><span class="cell__value">3.73</span></div>
        <div class="cell" data-cell="c-65-11"><span class="cell__label">c-65-11</span><span class="cell__value">26.86</span></div>
        <div class="cell" data-cell="c-65-12"><span class="cell__label">c-65-12</span><span class="cell__value">8.72</span></div>
        <div class="cell" data-cell="c-65-13"><span class="cell__label">c-65-13</span><span class="cell__value">2.25</span></div>
        <div class="cell" data-cell="c-65-14"><span class="cell__label">c-65-14</span><span class="cell__value">49.69</span></div>
        <div class="cell" data-cell="c-65-15"><span class="cell__label">c-65-15</span><span class="cell__value">54.71</span></div>
        <div class="cell" data-cell="c-65-16"><span class="cell__label">c-65-16</span><span class="cell__value">64.73</span></div>
        <div class="cell" data-cell="c-65-17"><span class="cell__label">c-65-17</span><span class="cell__value">84.91</span></div>
        <div class="cell" data-cell="c-65-18"><span class="cell__label">c-65-18</span><span class="cell__value">28.20</span></div>
        <div class="cell" data-cell="c-65-19"><span class="cell__label">c-65-19</span><span class="cell__value">92.42</span></div>
      </div>
      <div class="row" data-row="r-66">
        <div class="cell" data-cell="c-66-0"><span class="cell__label">c-66-0</span><span class="cell__value">42.11</span></div>
        <div class="cell" data-cell="c-66-1"><span class="cell__label">c-66-1</span><span class="cell__value">0.50</span></div>
        <div class="cell" data-cell="c-66-2"><span class="cell__label">c-66-2</span><span class="cell__value">34.82</span></div>
        <div class="cell" data-cell="c-66-3"><span class="cell__label">c-66-3</span><span class="cell__value">24.17</span></div>
        <div class="cell" data-cell="c-66-4"><span class="cell__label">c-66-4</span><span class="cell__value">30.61</span></div>
        <div class="cell" data-cell="c-66-5"><span class="cell__label">c-66-5</span><span class="cell__value">5.30</span></div>
        <div class="cell" data-cell="c-66-6"><span class="cell__label">c-66-6</span><span class="cell__value">39.71</span></div>
        <div class="cell" data-cell="c-66-7"><span class="cell__label">c-66-7</span><span class="cell__value">46.57</span></div>
        <div class="cell" data-cell="c-66-8"><span class="cell__label">c-66-8</span><span class="cell__value">26.07</span></div>
        <div class="cell" data-cell="c-66-9"><span class="cell__label">c-66-9</span><span class="cell__value">26.56</span></div>
        <div class="cell" data-cell="c-66-10"><span class="cell__label">c-66-10</span><span class="cell__value">83.91</span></div>
        <div class="cell" data-cell="c-66-11"><span class="cell__label">c-66-11</span><span class="cell__value">66.16</span></div>
        <div class="cell" data-cell="c-66-12"><span class="cell__label">c-66-12</span><span class="cell__value">40.22</span></div>
        <div class="cell" data-cell="c-66-13"><span class="cell__label">c-66-13</span><span class="cell__value">60.56</span></div>
        <div class="cell" data-cell="c-66-14"><span class="cell__label">c-66-14</span><span class="cell__value">24.70</span></div>
        <div class="cell" data-cell="c-66-15"><span class="cell__label">c-66-15</span><span class="cell__value">83.01</span></div>
        <div class="cell" data-cell="c-66-16"><span class="cell__label">c-66-16</span><span class="cell__value">44.29</span></div>
        <div class="cell" data-cell="c-66-17"><span class="cell__label">c-66-17</span><span class="cell__value">73.81</span></div>
        <div class="cell" data-cell="c-66-18"><span class="cell__label">c-66-18</span><span class="cell__value">41.80</span></div>
        <div class="cell" data-cell="c-66-19"><span class="cell__label">c-66-19</span><span class="cell__value">19.24</span></div>
      </div>
      <div class="row" data-row="r-67">
        <div class="cell" data-cell="c-67-0"><span class="cell__label">c-67-0</span><span class="cell__value">19.67</span></div>
        <div class="cell" data-cell="c-67-1"><span class="cell__label">c-67-1</span><span class="cell__value">30.21</span></div>
        <div class="cell" data-cell="c-67-2"><span class="cell__label">c-67-2</span><span class="cell__value">24.43</span></div>
        <div class="cell" data-cell="c-67-3"><span class="cell__label">c-67-3</span><span class="cell__value">84.90</span></div>
        <div class="cell" data-cell="c-67-4"><span class="cell__label">c-67-4</span><span class="cell__value">93.66</span></div>
        <div class="cell" data-cell="c-67-5"><span class="cell__label">c-67-5</span><span class="cell__value">2.65</span></div>
        <div class="cell" data-cell="c-67-6"><span class="cell__label">c-67-6</span><span class="cell__value">44.22</span></div>
        <div class="cell" data-cell="c-67-7"><span class="cell__label">c-67-7</span><span class="cell__value">90.60</span></div>
        <div class="cell" data-cell="c-67-8"><span class="cell__label">c-67-8</span><span class="cell__value">67.65</span></div>
        <div class="cell" data-cell="c-67-9"><span class="cell__label">c-67-9</span><span class="cell__value">71.77</span></div>
        <div class="cell" data-cell="c-67-10"><span class="cell__label">c-67-10</span><span class="cell__value">69.52</span></div>
        <div class="cell" data-cell="c-67-11"><span class="cell__label">c-67-11</span><span class="cell__value">80.56</span></div>
        <div class="cell" data-cell="c-67-12"><span class="cell__label">c-67-12</span><span class="cell__value">24.71</span></div>
        <div class="cell" data-cell="c-67-13"><span class="cell__label">c-67-13</span><span class="cell__value">66.89</span></div>
        <div class="cell" data-cell="c-67-14"><span class="cell__label">c-67-14</span><span class="cell__value">62.52</span></div>
        <div class="cell" data-cell="c-67-15"><span class="cell__label">c-67-15</span><span class="cell__value">75.00</span></div>
        <div class="cell" data-cell="c-67-16"><span class="cell__label">c-67-16</span><span class="cell__value">74.58</span></div>
        <div class="cell" data-cell="c-67-17"><span class="cell__label">c-67-17</span><span class="cell__value">24.10</span></div>
        <div class="cell" data-cell="c-67-18"><span class="cell__label">c-67-18</span><span class="cell__value">64.49</span></div>
        <div class="cell" data-cell="c-67-19"><span class="cell__label">c-67-19</span><span class="cell__value">89.45</span></div>
      </div>
      <div class="row" data-row="r-68">
        <div class="cell" data-cell="c-68-0"><span class="cell__label">c-68-0</span><span class="cell__value">66.60</span></div>
        <div class="cell" data-cell="c-68-1"><span class="cell__label">c-68-1</span><span class="cell__value">33.53</span></div>
        <div class="cell" data-cell="c-68-2"><span class="cell__label">c-68-2</span><span class="cell__value">71.86</span></div>
        <div class="cell" data-cell="c-68-3"><span class="cell__label">c-68-3</span><span class="cell__value">52.00</span></div>
        <div class="cell" data-cell="c-68-4"><span class="cell__label">c-68-4</span><span class="cell__value">53.59</span></div>
        <div class="cell" data-cell="c-68-5"><span class="cell__label">c-68-5</span><span class="cell__value">57.98</span></div>
        <div class="cell" data-cell="c-68-6"><span class="cell__label">c-68-6</span><span class="cell__value">75.29</span></div>
        <div class="cell" data-cell="c-68-7"><span class="cell__label">c-68-7</span><span class="cell__value">70.11</span></div>
        <div class="cell" data-cell="c-68-8"><span class="cell__label">c-68-8</span><span class="cell__value">22.02</span></div>
        <div class="cell" data-cell="c-68-9"><span class="cell__label">c-68-9</span><span class="cell__value">19.48</span></div>
        <div class="cell" data-cell="c-68-10"><span class="cell__label">c-68-10</span><span class="cell__value">29.78</span></div>
        <div class="cell" data-cell="c-68-11"><span class="cell__label">c-68-11</span><span class="cell__value">28.59</span></div>
        <div class="cell" data-cell="c-68-12"><span class="cell__label">c-68-12</span><span class="cell__value">31.15</span></div>
        <div class="cell" data-cell="c-68-13"><span class="cell__label">c-68-13</span><span class="cell__value">81.16</span></div>
        <div class="cell" data-cell="c-68-14"><span class="cell__label">c-68-14</span><span class="cell__value">30.21</span></div>
        <div class="cell" data-cell="c-68-15"><span class="cell__label">c-68-15</span><span class="cell__value">71.67</span></div>
        <div class="cell" data-cell="c-68-16"><span class="cell__label">c-68-16</span><span class="cell__value">0.60</span></div>
        <div class="cell" data-cell="c-68-17"><span class="cell__label">c-68-17</span><span class="cell__value">17.41</span></div>
        <div class="cell" data-cell="c-68-18"><span class="cell__label">c-68-18</span><span class="cell__value">50.30</span></div>
        <div class="cell" data-cell="c-68-19"><span class="cell__label">c-68-19</span><span class="cell__value">40.81</span></div>
      </div>
      <div class="row" data-row="r-69">
        <div class="cell" data-cell="c-69-0"><span class="cell__label">c-69-0</span><span class="cell__value">26.70</span></div>
        <div class="cell" data-cell="c-69-1"><span class="cell__label">c-69-1</span><span class="cell__value">63.68</span></div>
        <div class="cell" data-cell="c-69-2"><span class="cell__label">c-69-2</span><span class="cell__value">28.15</span></div>
        <div class="cell" data-cell="c-69-3"><span class="cell__label">c-69-3</span><span class="cell__value">21.69</span></div>
        <div class="cell" data-cell="c-69-4"><span class="cell__label">c-69-4</span><span class="cell__value">16.42</span></div>
        <div class="cell" data-cell="c-69-5"><span class="cell__label">c-69-5</span><span class="cell__value">56.27</span></div>
        <div class="cell" data-cell="c-69-6"><span class="cell__label">c-69-6</span><span class="cell__value">3.55</span></div>
        <div class="cell" data-cell="c-69-7"><span class="cell__label">c-69-7</span><span class="cell__value">5.33</span></div>
        <div class="cell" data-cell="c-69-8"><span class="cell__label">c-69-8</span><span class="cell__value">74.62</span></div>
        <div class="cell" data-cell="c-69-9"><span class="cell__label">c-69-9</span><span class="cell__value">93.83</span></div>
        <div class="cell" data-cell="c-69-10"><span class="cell__label">c-69-10</span><span class="cell__value">19.50</span></div>
        <div class="cell" data-cell="c-69-11"><span class="cell__label">c-69-11</span><span class="cell__value">15.73</span></div>
        <div class="cell" data-cell="c-69-12"><span class="cell__label">c-69-12</span><span class="cell__value">0.02</span></div>
        <div class="cell" data-cell="c-69-13"><span class="cell__label">c-69-13</span><span class="cell__value">8.82</span></div>
        <div class="cell" data-cell="c-69-14"><span class="cell__label">c-69-14</span><span class="cell__value">82.52</span></div>
        <div class="cell" data-cell="c-69-15"><span class="cell__label">c-69-15</span><span class="cell__value">91.39</span></div>
        <div class="cell" data-cell="c-69-16"><span class="cell__label">c-69-16</span><span class="cell__value">86.17</span></div>
        <div class="cell" data-cell="c-69-17"><span class="cell__label">c-69-17</span><span class="cell__value">16.36</span></div>
        <div class="cell" data-cell="c-69-18"><span class="cell__label">c-69-18</span><span class="cell__value">12.74</span></div>
        <div class="cell" data-cell="c-69-19"><span class="cell__label">c-69-19</span><span class="cell__value">75.70</span></div>
      </div>
      <div class="row" data-row="r-70">
        <div class="cell" data-cell="c-70-0"><span class="cell__label">c-70-0</span><span class="cell__value">81.74</span></div>
        <div class="cell" data-cell="c-70-1"><span class="cell__label">c-70-1</span><span class="cell__value">93.60</span></div>
        <div class="cell" data-cell="c-70-2"><span class="cell__label">c-70-2</span><span class="cell__value">41.41</span></div>
        <div class="cell" data-cell="c-70-3"><span class="cell__label">c-70-3</span><span class="cell__value">76.62</span></div>
        <div class="cell" data-cell="c-70-4"><span class="cell__label">c-70-4</span><span class="cell__value">78.50</span></div>
        <div class="cell" data-cell="c-70-5"><span class="cell__label">c-70-5</span><span class="cell__value">69.79</span></div>
        <div class="cell" data-cell="c-70-6"><span class="cell__label">c-70-6</span><span class="cell__value">2.89</span></div>
        <div class="cell" data-cell="c-70-7"><span class="cell__label">c-70-7</span><span class="cell__value">91.53</span></div>
        <div class="cell" data-cell="c-70-8"><span class="cell__label">c-70-8</span><span class="cell__value">49.29</span></div>
        <div class="cell" data-cell="c-70-9"><span class="cell__label">c-70-9</span><span class="cell__value">58.99</span></div>
        <div class="cell" data-cell="c-70-10"><span class="cell__label">c-70-10</span><span class="cell__value">15.98</span></div>
        <div class="cell" data-cell="c-70-11"><span class="cell__label">c-70-11</span><span class="cell__value">84.95</span></div>
        <div class="cell" data-cell="c-70-12"><span class="cell__label">c-70-12</span><span class="cell__value">83.32</span></div>
        <div class="cell" data-cell="c-70-13"><span class="cell__label">c-70-13</span><span class="cell__value">94.81</span></div>
        <div class="cell" data-cell="c-70-14"><span class="cell__label">c-70-14</span><span class="cell__value">21.71</span></div>
        <div class="cell" data-cell="c-70-15"><span class="cell__label">c-70-15</span><span class="cell__value">75.76</span></div>
        <div class="cell" data-cell="c-70-16"><span class="cell__label">c-70-16</span><span class="cell__value">65.34</span></div>
        <div class="cell" data-cell="c-70-17"><span class="cell__label">c-70-17</span><span class="cell__value">39.41</span></div>
        <div class="cell" data-cell="c-70-18"><span class="cell__label">c-70-18</span><span class="cell__value">98.20</span></div>
        <div class="cell" data-cell="c-70-19"><span class="cell__label">c-70-19</span><span class="cell__value">11.79</span></div>
      </div>
      <div class="row" data-row="r-71">
        <div class="cell" data-cell="c-71-0"><span class="cell__label">c-71-0</span><span class="cell__value">66.08</span></div>
        <div class="cell" data-cell="c-71-1"><span class="cell__label">c-71-1</span><span class="cell__value">75.45</span></div>
        <div class="cell" data-cell="c-71-2"><span class="cell__label">c-71-2</span><span class="cell__value">73.72</span></div>
        <div class="cell" data-cell="c-71-3"><span class="cell__label">c-71-3</span><span class="cell__value">79.76</span></div>
        <div class="cell" data-cell="c-71-4"><span class="cell__label">c-71-4</span><span class="cell__value">44.36</span></div>
        <div class="cell" data-cell="c-71-5"><span class="cell__label">c-71-5</span><span class="cell__value">96.66</span></div>
        <div class="cell" data-cell="c-71-6"><span class="cell__label">c-71-6</span><span class="cell__value">61.70</span></div>
        <div class="cell" data-cell="c-71-7"><span class="cell__label">c-71-7</span><span class="cell__value">15.59</span></div>
        <div class="cell" data-cell="c-71-8"><span class="cell__label">c-71-8</span><span class="cell__value">14.02</span></div>
        <div class="cell" data-cell="c-71-9"><span class="cell__label">c-71-9</span><span class="cell__value">37.46</span></div>
        <div class="cell" data-cell="c-71-10"><span class="cell__label">c-71-10</span><span class="cell__value">83.14</span></div>
        <div class="cell" data-cell="c-71-11"><span class="cell__label">c-71-11</span><span class="cell__value">46.82</span></div>
        <div class="cell" data-cell="c-71-12"><span class="cell__label">c-71-12</span><span class="cell__value">32.77</span></div>
        <div class="cell" data-cell="c-71-13"><span class="cell__label">c-71-13</span><span class="cell__value">71.40</span></div>
        <div class="cell" data-cell="c-71-14"><span class="cell__label">c-71-14</span><span class="cell__value">57.14</span></div>
        <div class="cell" data-cell="c-71-15"><span class="cell__label">c-71-15</span><span class="cell__value">23.54</span></div>
        <div class="cell" data-cell="c-71-16"><span class="cell__label">c-71-16</span><span class="cell__value">25.14</span></div>
        <div class="cell" data-cell="c-71-17"><span class="cell__label">c-71-17</span><span class="cell__value">99.46</span></div>
        <div class="cell" data-cell="c-71-18"><span class="cell__label">c-71-18</span><span class="cell__value">76.52</span></div>
        <div class="cell" data-cell="c-71-19"><span class="cell__label">c-71-19</span><span class="cell__value">71.95</span></div>
      </div>
      <div class="row" data-row="r-72">
        <div class="cell" data-cell="c-72-0"><span class="cell__label">c-72-0</span><span class="cell__value">32.97</span></div>
        <div class="cell" data-cell="c-72-1"><span class="cell__label">c-72-1</span><span class="cell__value">64.22</span></div>
        <div class="cell" data-cell="c-72-2"><span class="cell__label">c-72-2</span><span class="cell__value">40.79</span></div>
        <div class="cell" data-cell="c-72-3"><span class="cell__label">c-72-3</span><span class="cell__value">29.92</span></div>
        <div class="cell" data-cell="c-72-4"><span class="cell__label">c-72-4</span><span class="cell__value">33.36</span></div>
        <div class="cell" data-cell="c-72-5"><span class="cell__label">c-72-5</span><span class="cell__value">49.02</span></div>
        <div class="cell" data-cell="c-72-6"><span class="cell__label">c-72-6</span><span class="cell__value">25.13</span></div>
        <div class="cell" data-cell="c-72-7"><span class="cell__label">c-72-7</span><span class="cell__value">35.56</span></div>
        <div class="cell" data-cell="c-72-8"><span class="cell__label">c-72-8</span><span class="cell__value">24.23</span></div>
        <div class="cell" data-cell="c-72-9"><span class="cell__label">c-72-9</span><span class="cell__value">0.39</span></div>
        <div class="cell" data-cell="c-72-10"><span class="cell__label">c-72-10</span><span class="cell__value">93.50</span></div>
        <div class="cell" data-cell="c-72-11"><span class="cell__label">c-72-11</span><span class="cell__value">86.79</span></div>
        <div class="cell" data-cell="c-72-12"><span class="cell__label">c-72-12</span><span class="cell__value">27.67</span></div>
        <div class="cell" data-cell="c-72-13"><span class="cell__label">c-72-13</span><span class="cell__value">36.37</span></div>
        <div class="cell" data-cell="c-72-14"><span class="cell__label">c-72-14</span><span class="cell__value">7.68</span></div>
        <div class="cell" data-cell="c-72-15"><span class="cell__label">c-72-15</span><span class="cell__value">38.40</span></div>
        <div class="cell" data-cell="c-72-16"><span class="cell__label">c-72-16</span><span class="cell__value">34.09</span></div>
        <div class="cell" data-cell="c-72-17"><span class="cell__label">c-72-17</span><span class="cell__value">74.93</span></div>
        <div class="cell" data-cell="c-72-18"><span class="cell__label">c-72-18</span><span class="cell__value">5.98</span></div>
        <div class="cell" data-cell="c-72-19"><span class="cell__label">c-72-19</span><span class="cell__value">93.68</span></div>
      </div>
      <div class="row" data-row="r-73">
        <div class="cell" data-cell="c-73-0"><span class="cell__label">c-73-0</span><span class="cell__value">52.25</span></div>
        <div class="cell" data-cell="c-73-1"><span class="cell__label">c-73-1</span><span class="cell__value">73.78</span></div>
        <div class="cell" data-cell="c-73-2"><span class="cell__label">c-73-2</span><span class="cell__value">8.13</span></div>
        <div class="cell" data-cell="c-73-3"><span class="cell__label">c-73-3</span><span class="cell__value">87.35</span></div>
        <div class="cell" data-cell="c-73-4"><span class="cell__label">c-73-4</span><span class="cell__value">99.64</span></div>
        <div class="cell" data-cell="c-73-5"><span class="cell__label">c-73-5</span><span class="cell__value">91.42</span></div>
        <div class="cell" data-cell="c-73-6"><span class="cell__label">c-73-6</span><span class="cell__value">84.52</span></div>
        <div class="cell" data-cell="c-73-7"><span class="cell__label">c-73-7</span><span class="cell__value">53.58</span></div>
        <div class="cell" data-cell="c-73-8"><span class="cell__label">c-73-8</span><span class="cell__value">55.47</span></div>
        <div class="cell" data-cell="c-73-9"><span class="cell__label">c-73-9</span><span class="cell__value">0.98</span></div>
        <div class="cell" data-cell="c-73-10"><span class="cell__label">c-73-10</span><span class="cell__value">74.13</span></div>
        <div class="cell" data-cell="c-73-11"><span class="cell__label">c-73-11</span><span class="cell__value">6.67</span></div>
        <div class="cell" data-cell="c-73-12"><span class="cell__label">c-73-12</span><span class="cell__value">61.54</span></div>
        <div class="cell" data-cell="c-73-13"><span class="cell__label">c-73-13</span><span class="cell__value">70.09</span></div>
        <div class="cell" data-cell="c-73-14"><span class="cell__label">c-73-14</span><span class="cell__value">72.89</span></div>
        <div class="cell" data-cell="c-73-15"><span class="cell__label">c-73-15</span><span class="cell__value">79.00</span></div>
        <div class="cell" data-cell="c-73-16"><span class="cell__label">c-73-16</span><span class="cell__value">47.63</span></div>
        <div class="cell" data-cell="c-73-17"><span class="cell__label">c-73-17</span><span class="cell__value">97.00</span></div>
        <div class="cell" data-cell="c-73-18"><span class="cell__label">c-73-18</span><span class="cell__value">64.65</span></div>
        <div class="cell" data-cell="c-73-19"><span class="cell__label">c-73-19</span><span class="cell__value">9.79</span></div>
      </div>
      <div class="row" data-row="r-74">
        <div class="cell" data-cell="c-74-0"><span class="cell__label">c-74-0</span><span class="cell__value">66.18</span></div>
        <div class="cell" data-cell="c-74-1"><span class="cell__label">c-74-1</span><span class="cell__value">62.73</span></div>
        <div class="cell" data-cell="c-74-2"><span class="cell__label">c-74-2</span><span class="cell__value">42.92</span></div>
        <div class="cell" data-cell="c-74-3"><span class="cell__label">c-74-3</span><span class="cell__value">96.59</span></div>
        <div class="cell" data-cell="c-74-4"><span class="cell__label">c-74-4</span><span class="cell__value">23.04</span></div>
        <div class="cell" data-cell="c-74-5"><span class="cell__label">c-74-5</span><span class="cell__value">2.38</span></div>
        <div class="cell" data-cell="c-74-6"><span class="cell__label">c-74-6</span><span class="cell__value">46.33</span></div>
        <div class="cell" data-cell="c-74-7"><span class="cell__label">c-74-7</span><span class="cell__value">36.99</span></div>
        <div class="cell" data-cell="c-74-8"><span class="cell__label">c-74-8</span><span class="cell__value">32.85</span></div>
        <div class="cell" data-cell="c-74-9"><span class="cell__label">c-74-9</span><span class="cell__value">69.08</span></div>
        <div class="cell" data-cell="c-74-10"><span class="cell__label">c-74-10</span><span class="cell__value">62.62</span></div>
        <div class="cell" data-cell="c-74-11"><span class="cell__label">c-74-11</span><span class="cell__value">9.42</span></div>
        <div class="cell" data-cell="c-74-12"><span class="cell__label">c-74-12</span><span class="cell__value">41.08</span></div>
        <div class="cell" data-cell="c-74-13"><span class="cell__label">c-74-13</span><span class="cell__value">39.95</span></div>
        <div class="cell" data-cell="c-74-14"><span class="cell__label">c-74-14</span><span class="cell__value">15.90</span></div>
        <div class="cell" data-cell="c-74-15"><span class="cell__label">c-74-15</span><span class="cell__value">45.74</span></div>
        <div class="cell" data-cell="c-74-16"><span class="cell__label">c-74-16</span><span class="cell__value">28.44</span></div>
        <div class="cell" data-cell="c-74-17"><span class="cell__label">c-74-17</span><span class="cell__value">62.79</span></div>
        <div class="cell" data-cell="c-74-18"><span class="cell__label">c-74-18</span><span class="cell__value">27.49</span></div>
        <div class="cell" data-cell="c-74-19"><span class="cell__label">c-74-19</span><span class="cell__value">16.18</span></div>
      </div>
      <div class="row" data-row="r-75">
        <div class="cell" data-cell="c-75-0"><span class="cell__label">c-75-0</span><span class="cell__value">95.13</span></div>
        <div class="cell" data-cell="c-75-1"><span class="cell__label">c-75-1</span><span class="cell__value">28.95</span></div>
        <div class="cell" data-cell="c-75-2"><span class="cell__label">c-75-2</span><span class="cell__value">47.59</span></div>
        <div class="cell" data-cell="c-75-3"><span class="cell__label">c-75-3</span><span class="cell__value">69.17</span></div>
        <div class="cell" data-cell="c-75-4"><span class="cell__label">c-75-4</span><span class="cell__value">83.09</span></div>
        <div class="cell" data-cell="c-75-5"><span class="cell__label">c-75-5</span><span class="cell__value">93.60</span></div>
        <div class="cell" data-cell="c-75-6"><span class="cell__label">c-75-6</span><span class="cell__value">24.95</span></div>
        <div class="cell" data-cell="c-75-7"><span class="cell__label">c-75-7</span><span class="cell__value">79.52</span></div>
        <div class="cell" data-cell="c-75-8"><span class="cell__label">c-75-8</span><span class="cell__value">84.50</span></div>
        <div class="cell" data-cell="c-75-9"><span class="cell__label">c-75-9</span><span class="cell__value">48.73</span></div>
        <div class="cell" data-cell="c-75-10"><span class="cell__label">c-75-10</span><span class="cell__value">90.88</span></div>
        <div class="cell" data-cell="c-75-11"><span class="cell__label">c-75-11</span><span class="cell__value">55.79</span></div>
        <div class="cell" data-cell="c-75-12"><span class="cell__label">c-75-12</span><span class="cell__value">74.32</span></div>
        <div class="cell" data-cell="c-75-13"><span class="cell__label">c-75-13</span><span class="cell__value">42.94</span></div>
        <div class="cell" data-cell="c-75-14"><span class="cell__label">c-75-14</span><span class="cell__value">79.30</span></div>
        <div class="cell" data-cell="c-75-15"><span class="cell__label">c-75-15</span><span class="cell__value">95.68</span></div>
        <div class="cell" data-cell="c-75-16"><span class="cell__label">c-75-16</span><span class="cell__value">31.76</span></div>
        <div class="cell" data-cell="c-75-17"><span class="cell__label">c-75-17</span><span class="cell__value">19.26</span></div>
        <div class="cell" data-cell="c-75-18"><span class="cell__label">c-75-18</span><span class="cell__value">96.50</span></div>
        <div class="cell" data-cell="c-75-19"><span class="cell__label">c-75-19</span><span class="cell__value">71.46</span></div>
      </div>
      <div class="row" data-row="r-76">
        <div class="cell" data-cell="c-76-0"><span class="cell__label">c-76-0</span><span class="cell__value">13.97</span></div>
        <div class="cell" data-cell="c-76-1"><span class="cell__label">c-76-1</span><span class="cell__value">64.12</span></div>
        <div class="cell" data-cell="c-76-2"><span class="cell__label">c-76-2</span><span class="cell__value">54.35</span></div>
        <div class="cell" data-cell="c-76-3"><span class="cell__label">c-76-3</span><span class="cell__value">56.56</span></div>
        <div class="cell" data-cell="c-76-4"><span class="cell__label">c-76-4</span><span class="cell__value">95.62</span></div>
        <div class="cell" data-cell="c-76-5"><span class="cell__label">c-76-5</span><span class="cell__value">40.29</span></div>
        <div class="cell" data-cell="c-76-6"><span class="cell__label">c-76-6</span><span class="cell__value">8.92</span></div>
        <div class="cell" data-cell="c-76-7"><span class="cell__label">c-76-7</span><span class="cell__value">39.15</span></div>
        <div class="cell" data-cell="c-76-8"><span class="cell__label">c-76-8</span><span class="cell__value">57.36</span></div>
        <div class="cell" data-cell="c-76-9"><span class="cell__label">c-76-9</span><span class="cell__value">98.87</span></div>
        <div class="cell" data-cell="c-76-10"><span class="cell__label">c-76-10</span><span class="cell__value">19.91</span></div>
        <div class="cell" data-cell="c-76-11"><span class="cell__label">c-76-11</span><span class="cell__value">45.20</span></div>
        <div class="cell" data-cell="c-76-12"><span class="cell__label">c-76-12</span><span class="cell__value">12.16</span></div>
        <div class="cell" data-cell="c-76-13"><span class="cell__label">c-76-13</span><span class="cell__value">93.12</span></div>
        <div class="cell" data-cell="c-76-14"><span class="cell__label">c-76-14</span><span class="cell__value">58.63</span></div>
        <div class="cell" data-cell="c-76-15"><span class="cell__label">c-76-15</span><span class="cell__value">18.89</span></div>
        <div class="cell" data-cell="c-76-16"><span class="cell__label">c-76-16</span><span class="cell__value">9.77</span></div>
        <div class="cell" data-cell="c-76-17"><span class="cell__label">c-76-17</span><span class="cell__value">27.51</span></div>
        <div class="cell" data-cell="c-76-18"><span class="cell__label">c-76-18</span><span class="cell__value">18.81</span></div>
        <div class="cell" data-cell="c-76-19"><span class="cell__label">c-76-19</span><span class="cell__value">69.97</span></div>
      </div>
      <div class="row" data-row="r-77">
        <div class="cell" data-cell="c-77-0"><span class="cell__label">c-77-0</span><span class="cell__value">96.96</span></div>
        <div class="cell" data-cell="c-77-1"><span class="cell__label">c-77-1</span><span class="cell__value">97.54</span></div>
        <div class="cell" data-cell="c-77-2"><span class="cell__label">c-77-2</span><span class="cell__value">48.95</span></div>
        <div class="cell" data-cell="c-77-3"><span class="cell__label">c-77-3</span><span class="cell__value">92.97</span></div>
        <div class="cell" data-cell="c-77-4"><span class="cell__label">c-77-4</span><span class="cell__value">42.01</span></div>
        <div class="cell" data-cell="c-77-5"><span class="cell__label">c-77-5</span><span class="cell__value">63.86</span></div>
        <div class="cell" data-cell="c-77-6"><span class="cell__label">c-77-6</span><span class="cell__value">66.65</span></div>
        <div class="cell" data-cell="c-77-7"><span class="cell__label">c-77-7</span><span class="cell__value">59.61</span></div>
        <div class="cell" data-cell="c-77-8"><span class="cell__label">c-77-8</span><span class="cell__value">50.81</span></div>
        <div class="cell" data-cell="c-77-9"><span class="cell__label">c-77-9</span><span class="cell__value">39.79</span></div>
        <div class="cell" data-cell="c-77-10"><span class="cell__label">c-77-10</span><span class="cell__value">20.96</span></div>
        <div class="cell" data-cell="c-77-11"><span class="cell__label">c-77-11</span><span class="cell__value">94.14</span></div>
        <div class="cell" data-cell="c-77-12"><span class="cell__label">c-77-12</span><span class="cell__value">10.27</span></div>
        <div class="cell" data-cell="c-77-13"><span class="cell__label">c-77-13</span><span class="cell__value">72.21</span></div>
        <div class="cell" data-cell="c-77-14"><span class="cell__label">c-77-14</span><span class="cell__value">6.00</span></div>
        <div class="cell" data-cell="c-77-15"><span class="cell__label">c-77-15</span><span class="cell__value">26.24</span></div>
        <div class="cell" data-cell="c-77-16"><span class="cell__label">c-77-16</span><span class="cell__value">69.42</span></div>
        <div class="cell" data-cell="c-77-17"><span class="cell__label">c-77-17</span><span class="cell__value">68.33</span></div>
        <div class="cell" data-cell="c-77-18"><span class="cell__label">c-77-18</span><span class="cell__value">41.97</span></div>
        <div class="cell" data-cell="c-77-19"><span class="cell__label">c-77-19</span><span class="cell__value">65.62</span></div>
      </div>
      <div class="row" data-row="r-78">
        <div class="cell" data-cell="c-78-0"><span class="cell__label">c-78-0</span><span class="cell__value">73.89</span></div>
        <div class="cell" data-cell="c-78-1"><span class="cell__label">c-78-1</span><span class="cell__value">56.66</span></div>
        <div class="cell" data-cell="c-78-2"><span class="cell__label">c-78-2</span><span class="cell__value">34.25</span></div>
        <div class="cell" data-cell="c-78-3"><span class="cell__label">c-78-3</span><span class="cell__value">96.23</span></div>
        <div class="cell" data-cell="c-78-4"><span class="cell__label">c-78-4</span><span class="cell__value">44.83</span></div>
        <div class="cell" data-cell="c-78-5"><span class="cell__label">c-78-5</span><span class="cell__value">19.60</span></div>
        <div class="cell" data-cell="c-78-6"><span class="cell__label">c-78-6</span><span class="cell__value">12.99</span></div>
        <div class="cell" data-cell="c-78-7"><span class="cell__label">c-78-7</span><span class="cell__value">79.94</span></div>
        <div class="cell" data-cell="c-78-8"><span class="cell__label">c-78-8</span><span class="cell__value">56.00</span></div>
        <div class="cell" data-cell="c-78-9"><span class="cell__label">c-78-9</span><span class="cell__value">35.51</span></div>
        <div class="cell" data-cell="c-78-10"><span class="cell__label">c-78-10</span><span class="cell__value">34.81</span></div>
        <div class="cell" data-cell="c-78-11"><span class="cell__label">c-78-11</span><span class="cell__value">72.94</span></div>
        <div class="cell" data-cell="c-78-12"><span class="cell__label">c-78-12</span><span class="cell__value">48.59</span></div>
        <div class="cell" data-cell="c-78-13"><span class="cell__label">c-78-13</span><span class="cell__value">89.30</span></div>
        <div class="cell" data-cell="c-78-14"><span class="cell__label">c-78-14</span><span class="cell__value">19.29</span></div>
        <div class="cell" data-cell="c-78-15"><span class="cell__label">c-78-15</span><span class="cell__value">92.27</span></div>
        <div class="cell" data-cell="c-78-16"><span class="cell__label">c-78-16</span><span class="cell__value">25.09</span></div>
        <div class="cell" data-cell="c-78-17"><span class="cell__label">c-78-17</span><span class="cell__value">70.66</span></div>
        <div class="cell" data-cell="c-78-18"><span class="cell__label">c-78-18</span><span class="cell__value">41.82</span></div>
        <div class="cell" data-cell="c-78-19"><span class="cell__label">c-78-19</span><span class="cell__value">84.86</span></div>
      </div>
      <div class="row" data-row="r-79">
        <div class="cell" data-cell="c-79-0"><span class="cell__label">c-79-0</span><span class="cell__value">18.47</span></div>
        <div class="cell" data-cell="c-79-1"><span class="cell__label">c-79-1</span><span class="cell__value">71.70</span></div>
        <div class="cell" data-cell="c-79-2"><span class="cell__label">c-79-2</span><span class="cell__value">5.33</span></div>
        <div class="cell" data-cell="c-79-3"><span class="cell__label">c-79-3</span><span class="cell__value">49.09</span></div>
        <div class="cell" data-cell="c-79-4"><span class="cell__label">c-79-4</span><span class="cell__value">72.60</span></div>
        <div class="cell" data-cell="c-79-5"><span class="cell__label">c-79-5</span><span class="cell__value">26.21</span></div>
        <div class="cell" data-cell="c-79-6"><span class="cell__label">c-79-6</span><span class="cell__value">90.74</span></div>
        <div class="cell" data-cell="c-79-7"><span class="cell__label">c-79-7</span><span class="cell__value">30.42</span></div>
        <div class="cell" data-cell="c-79-8"><span class="cell__label">c-79-8</span><span class="cell__value">26.59</span></div>
        <div class="cell" data-cell="c-79-9"><span class="cell__label">c-79-9</span><span class="cell__value">83.24</span></div>
        <div class="cell" data-cell="c-79-10"><span class="cell__label">c-79-10</span><span class="cell__value">23.98</span></div>
        <div class="cell" data-cell="c-79-11"><span class="cell__label">c-79-11</span><span class="cell__value">16.17</span></div>
        <div class="cell" data-cell="c-79-12"><span class="cell__label">c-79-12</span><span class="cell__value">6.29</span></div>
        <div class="cell" data-cell="c-79-13"><span class="cell__label">c-79-13</span><span class="cell__value">14.90</span></div>
        <div class="cell" data-cell="c-79-14"><span class="cell__label">c-79-14</span><span class="cell__value">30.75</span></div>
        <div class="cell" data-cell="c-79-15"><span class="cell__label">c-79-15</span><span class="cell__value">8.08</span></div>
        <div class="cell" data-cell="c-79-16"><span class="cell__label">c-79-16</span><span class="cell__value">7.60</span></div>
        <div class="cell" data-cell="c-79-17"><span class="cell__label">c-79-17</span><span class="cell__value">99.34</span></div>
        <div class="cell" data-cell="c-79-18"><span class="cell__label">c-79-18</span><span class="cell__value">37.31</span></div>
        <div class="cell" data-cell="c-79-19"><span class="cell__label">c-79-19</span><span class="cell__value">34.37</span></div>
      </div>
      <div class="row" data-row="r-80">
        <div class="cell" data-cell="c-80-0"><span class="cell__label">c-80-0</span><span class="cell__value">2.42</span></div>
        <div class="cell" data-cell="c-80-1"><span class="cell__label">c-80-1</span><span class="cell__value">24.71</span></div>
        <div class="cell" data-cell="c-80-2"><span class="cell__label">c-80-2</span><span class="cell__value">48.90</span></div>
        <div class="cell" data-cell="c-80-3"><span class="cell__label">c-80-3</span><span class="cell__value">3.25</span></div>
        <div class="cell" data-cell="c-80-4"><span class="cell__label">c-80-4</span><span class="cell__value">88.40</span></div>
        <div class="cell" data-cell="c-80-5"><span class="cell__label">c-80-5</span><span class="cell__value">1.98</span></div>
        <div class="cell" data-cell="c-80-6"><span class="cell__label">c-80-6</span><span class="cell__value">69.83</span></div>
        <div class="cell" data-cell="c-80-7"><span class="cell__label">c-80-7</span><span class="cell__value">75.86</span></div>
        <div class="cell" data-cell="c-80-8"><span class="cell__label">c-80-8</span><span class="cell__value">29.71</span></div>
        <div class="cell" data-cell="c-80-9"><span class="cell__label">c-80-9</span><span class="cell__value">71.68</span></div>
        <div class="cell" data-cell="c-80-10"><span class="cell__label">c-80-10</span><span class="cell__value">94.92</span></div>
        <div class="cell" data-cell="c-80-11"><span class="cell__label">c-80-11</span><span class="cell__value">2.54</span></div>
        <div class="cell" data-cell="c-80-12"><span class="cell__label">c-80-12</span><span class="cell__value">51.08</span></div>
        <div class="cell" data-cell="c-80-13"><span class="cell__label">c-80-13</span><span class="cell__value">75.80</span></div>
        <div class="cell" data-cell="c-80-14"><span class="cell__label">c-80-14</span><span class="cell__value">50.19</span></div>
        <div class="cell" data-cell="c-80-15"><span class="cell__label">c-80-15</span><span class="cell__value">58.60</span></div>
        <div class="cell" data-cell="c-80-16"><span class="cell__label">c-80-16</span><span class="cell__value">97.74</span></div>
        <div class="cell" data-cell="c-80-17"><span class="cell__label">c-80-17</span><span class="cell__value">78.63</span></div>
        <div class="cell" data-cell="c-80-18"><span class="cell__label">c-80-18</span><span class="cell__value">37.93</span></div>
        <div class="cell" data-cell="c-80-19"><span class="cell__label">c-80-19</span><span class="cell__value">41.30</span></div>
      </div>
      <div class="row" data-row="r-81">
        <div class="cell" data-cell="c-81-0"><span class="cell__label">c-81-0</span><span class="cell__value">54.38</span></div>
        <div class="cell" data-cell="c-81-1"><span class="cell__label">c-81-1</span><span class="cell__value">35.24</span></div>
        <div class="cell" data-cell="c-81-2"><span class="cell__label">c-81-2</span><span class="cell__value">30.49</span></div>
        <div class="cell" data-cell="c-81-3"><span class="cell__label">c-81-3</span><span class="cell__value">12.34</span></div>
        <div class="cell" data-cell="c-81-4"><span class="cell__label">c-81-4</span><span class="cell__value">32.52</span></div>
        <div class="cell" data-cell="c-81-5"><span class="cell__label">c-81-5</span><span class="cell__value">88.61</span></div>
        <div class="cell" data-cell="c-81-6"><span class="cell__label">c-81-6</span><span class="cell__value">87.98</span></div>
        <div class="cell" data-cell="c-81-7"><span class="cell__label">c-81-7</span><span class="cell__value">58.72</span></div>
        <div class="cell" data-cell="c-81-8"><span class="cell__label">c-81-8</span><span class="cell__value">58.99</span></div>
        <div class="cell" data-cell="c-81-9"><span class="cell__label">c-81-9</span><span class="cell__value">2.06</span></div>
        <div class="cell" data-cell="c-81-10"><span class="cell__label">c-81-10</span><span class="cell__value">58.35</span></div>
        <div class="cell" data-cell="c-81-11"><span class="cell__label">c-81-11</span><span class="cell__value">62.66</span></div>
        <div class="cell" data-cell="c-81-12"><span class="cell__label">c-81-12</span><span class="cell__value">26.26</span></div>
        <div class="cell" data-cell="c-81-13"><span class="cell__label">c-81-13</span><span class="cell__value">37.90</span></div>
        <div class="cell" data-cell="c-81-14"><span class="cell__label">c-81-14</span><span class="cell__value">20.37</span></div>
        <div class="cell" data-cell="c-81-15"><span class="cell__label">c-81-15</span><span class="cell__value">44.85</span></div>
        <div class="cell" data-cell="c-81-16"><span class="cell__label">c-81-16</span><span class="cell__value">97.18</span></div>
        <div class="cell" data-cell="c-81-17"><span class="cell__label">c-81-17</span><span class="cell__value">44.38</span></div>
        <div class="cell" data-cell="c-81-18"><span class="cell__label">c-81-18</span><span class="cell__value">6.31</span></div>
        <div class="cell" data-cell="c-81-19"><span class="cell__label">c-81-19</span><span class="cell__value">72.90</span></div>
      </div>
      <div class="row" data-row="r-82">
        <div class="cell" data-cell="c-82-0"><span class="cell__label">c-82-0</span><span class="cell__value">78.30</span></div>
        <div class="cell" data-cell="c-82-1"><span class="cell__label">c-82-1</span><span class="cell__value">51.55</span></div>
        <div class="cell" data-cell="c-82-2"><span class="cell__label">c-82-2</span><span class="cell__value">59.60</span></div>
        <div class="cell" data-cell="c-82-3"><span class="cell__label">c-82-3</span><span class="cell__value">25.50</span></div>
        <div class="cell" data-cell="c-82-4"><span class="cell__label">c-82-4</span><span class="cell__value">84.83</span></div>
        <div class="cell" data-cell="c-82-5"><span class="cell__label">c-82-5</span><span class="cell__value">81.99</span></div>
        <div class="cell" data-cell="c-82-6"><span class="cell__label">c-82-6</span><span class="cell__value">10.94</span></div>
        <div class="cell" data-cell="c-82-7"><span class="cell__label">c-82-7</span><span class="cell__value">99.46</span></div>
        <div class="cell" data-cell="c-82-8"><span class="cell__label">c-82-8</span><span class="cell__value">36.68</span></div>
        <div class="cell" data-cell="c-82-9"><span class="cell__label">c-82-9</span><span class="cell__value">69.17</span></div>
        <div class="cell" data-cell="c-82-10"><span class="cell__label">c-82-10</span><span class="cell__value">29.91</span></div>
        <div class="cell" data-cell="c-82-11"><span class="cell__label">c-82-11</span><span class="cell__value">34.86</span></div>
        <div class="cell" data-cell="c-82-12"><span class="cell__label">c-82-12</span><span class="cell__value">20.43</span></div>
        <div class="cell" data-cell="c-82-13"><span class="cell__label">c-82-13</span><span class="cell__value">56.38</span></div>
        <div class="cell" data-cell="c-82-14"><span class="cell__label">c-82-14</span><span class="cell__value">15.72</span></div>
        <div class="cell" data-cell="c-82-15"><span class="cell__label">c-82-15</span><span class="cell__value">98.88</span></div>
        <div class="cell" data-cell="c-82-16"><span class="cell__label">c-82-16</span><span class="cell__value">76.79</span></div>
        <div class="cell" data-cell="c-82-17"><span class="cell__label">c-82-17</span><span class="cell__value">24.11</span></div>
        <div class="cell" data-cell="c-82-18"><span class="cell__label">c-82-18</span><span class="cell__value">32.55</span></div>
        <div class="cell" data-cell="c-82-19"><span class="cell__label">c-82-19</span><span class="cell__value">21.96</span></div>
      </div>
      <div class="row" data-row="r-83">
        <div class="cell" data-cell="c-83-0"><span class="cell__label">c-83-0</span><span class="cell__value">84.40</span></div>
        <div class="cell" data-cell="c-83-1"><span class="cell__label">c-83-1</span><span class="cell__value">56.60</span></div>
        <div class="cell" data-cell="c-83-2"><span class="cell__label">c-83-2</span><span class="cell__value">18.08</span></div>
        <div class="cell" data-cell="c-83-3"><span class="cell__label">c-83-3</span><span class="cell__value">72.57</span></div>
        <div class="cell" data-cell="c-83-4"><span class="cell__label">c-83-4</span><span class="cell__value">8.01</span></div>
        <div class="cell" data-cell="c-83-5"><span class="cell__label">c-83-5</span><span class="cell__value">90.64</span></div>
        <div class="cell" data-cell="c-83-6"><span class="cell__label">c-83-6</span><span class="cell__value">94.15</span></div>
        <div class="cell" data-cell="c-83-7"><span class="cell__label">c-83-7</span><span class="cell__value">30.97</span></div>
        <div class="cell" data-cell="c-83-8"><span class="cell__label">c-83-8</span><span class="cell__value">77.19</span></div>
        <div class="cell" data-cell="c-83-9"><span class="cell__label">c-83-9</span><span class="cell__value">96.74</span></div>
        <div class="cell" data-cell="c-83-10"><span class="cell__label">c-83-10</span><span class="cell__value">52.22</span></div>
        <div class="cell" data-cell="c-83-11"><span class="cell__label">c-83-11</span><span class="cell__value">14.19</span></div>
        <div class="cell" data-cell="c-83-12"><span class="cell__label">c-83-12</span><span class="cell__value">88.01</span></div>
        <div class="cell" data-cell="c-83-13"><span class="cell__label">c-83-13</span><span class="cell__value">78.83</span></div>
        <div class="cell" data-cell="c-83-14"><span class="cell__label">c-83-14</span><span class="cell__value">89.71</span></div>
        <div class="cell" data-cell="c-83-15"><span class="cell__label">c-83-15</span><span class="cell__value">83.73</span></div>
        <div class="cell" data-cell="c-83-16"><span class="cell__label">c-83-16</span><span class="cell__value">38.82</span></div>
        <div class="cell" data-cell="c-83-17"><span class="cell__label">c-83-17</span><span class="cell__value">12.39</span></div>
        <div class="cell" data-cell="c-83-18"><span class="cell__label">c-83-18</span><span class="cell__value">74.55</span></div>
        <div class="cell" data-cell="c-83-19"><span class="cell__label">c-83-19</span><span class="cell__value">26.27</span></div>
      </div>
      <div class="row" data-row="r-84">
        <div class="cell" data-cell="c-84-0"><span class="cell__label">c-84-0</span><span class="cell__value">77.20</span></div>
        <div class="cell" data-cell="c-84-1"><span class="cell__label">c-84-1</span><span class="cell__value">83.30</span></div>
        <div class="cell" data-cell="c-84-2"><span class="cell__label">c-84-2</span><span class="cell__value">38.63</span></div>
        <div class="cell" data-cell="c-84-3"><span class="cell__label">c-84-3</span><span class="cell__value">93.52</span></div>
        <div class="cell" data-cell="c-84-4"><span class="cell__label">c-84-4</span><span class="cell__value">42.98</span></div>
        <div class="cell" data-cell="c-84-5"><span class="cell__label">c-84-5</span><span class="cell__value">40.76</span></div>
        <div class="cell" data-cell="c-84-6"><span class="cell__label">c-84-6</span><span class="cell__value">79.01</span></div>
        <div class="cell" data-cell="c-84-7"><span class="cell__label">c-84-7</span><span class="cell__value">49.87</span></div>
        <div class="cell" data-cell="c-84-8"><span class="cell__label">c-84-8</span><span class="cell__value">97.59</span></div>
        <div class="cell" data-cell="c-84-9"><span class="cell__label">c-84-9</span><span class="cell__value">56.30</span></div>
        <div class="cell" data-cell="c-84-10"><span class="cell__label">c-84-10</span><span class="cell__value">90.58</span></div>
        <div class="cell" data-cell="c-84-11"><span class="cell__label">c-84-11</span><span class="cell__value">72.15</span></div>
        <div class="cell" data-cell="c-84-12"><span class="cell__label">c-84-12</span><span class="cell__value">26.32</span></div>
        <div class="cell" data-cell="c-84-13"><span class="cell__label">c-84-13</span><span class="cell__value">91.04</span></div>
        <div class="cell" data-cell="c-84-14"><span class="cell__label">c-84-14</span><span class="cell__value">64.64</span></div>
        <div class="cell" data-cell="c-84-15"><span class="cell__label">c-84-15</span><span class="cell__value">76.48</span></div>
        <div class="cell" data-cell="c-84-16"><span class="cell__label">c-84-16</span><span class="cell__value">84.91</span></div>
        <div class="cell" data-cell="c-84-17"><span class="cell__label">c-84-17</span><span class="cell__value">27.71</span></div>
        <div class="cell" data-cell="c-84-18"><span class="cell__label">c-84-18</span><span class="cell__value">27.36</span></div>
        <div class="cell" data-cell="c-84-19"><span class="cell__label">c-84-19</span><span class="cell__value">87.71</span></div>
      </div>
      <div class="row" data-row="r-85">
        <div class="cell" data-cell="c-85-0"><span class="cell__label">c-85-0</span><span class="cell__value">64.16</span></div>
        <div class="cell" data-cell="c-85-1"><span class="cell__label">c-85-1</span><span class="cell__value">37.28</span></div>
        <div class="cell" data-cell="c-85-2"><span class="cell__label">c-85-2</span><span class="cell__value">35.39</span></div>
        <div class="cell" data-cell="c-85-3"><span class="cell__label">c-85-3</span><span class="cell__value">25.12</span></div>
        <div class="cell" data-cell="c-85-4"><span class="cell__label">c-85-4</span><span class="cell__value">41.21</span></div>
        <div class="cell" data-cell="c-85-5"><span class="cell__label">c-85-5</span><span class="cell__value">89.09</span></div>
        <div class="cell" data-cell="c-85-6"><span class="cell__label">c-85-6</span><span class="cell__value">54.03</span></div>
        <div class="cell" data-cell="c-85-7"><span class="cell__label">c-85-7</span><span class="cell__value">23.31</span></div>
        <div class="cell" data-cell="c-85-8"><span class="cell__label">c-85-8</span><span class="cell__value">16.14</span></div>
        <div class="cell" data-cell="c-85-9"><span class="cell__label">c-85-9</span><span class="cell__value">57.63</span></div>
        <div class="cell" data-cell="c-85-10"><span class="cell__label">c-85-10</span><span class="cell__value">59.60</span></div>
        <div class="cell" data-cell="c-85-11"><span class="cell__label">c-85-11</span><span class="cell__value">9.98</span></div>
        <div class="cell" data-cell="c-85-12"><span class="cell__label">c-85-12</span><span class="cell__value">13.59</span></div>
        <div class="cell" data-cell="c-85-13"><span class="cell__label">c-85-13</span><span class="cell__value">64.22</span></div>
        <div class="cell" data-cell="c-85-14"><span class="cell__label">c-85-14</span><span class="cell__value">15.77</span></div>
        <div class="cell" data-cell="c-85-15"><span class="cell__label">c-85-15</span><span class="cell__value">84.54</span></div>
        <div class="cell" data-cell="c-85-16"><span class="cell__label">c-85-16</span><span class="cell__value">77.96</span></div>
        <div class="cell" data-cell="c-85-17"><span class="cell__label">c-85-17</span><span class="cell__value">73.81</span></div>
        <div class="cell" data-cell="c-85-18"><span class="cell__label">c-85-18</span><span class="cell__value">5.13</span></div>
        <div class="cell" data-cell="c-85-19"><span class="cell__label">c-85-19</span><span class="cell__value">52.27</span></div>
      </div>
      <div class="row" data-row="r-86">
        <div class="cell" data-cell="c-86-0"><span class="cell__label">c-86-0</span><span class="cell__value">77.87</span></div>
        <div class="cell" data-cell="c-86-1"><span class="cell__label">c-86-1</span><span class="cell__value">65.96</span></div>
        <div class="cell" data-cell="c-86-2"><span class="cell__label">c-86-2</span><span class="cell__value">45.53</span></div>
        <div class="cell" data-cell="c-86-3"><span class="cell__label">c-86-3</span><span class="cell__value">87.49</span></div>
        <div class="cell" data-cell="c-86-4"><span class="cell__label">c-86-4</span><span class="cell__value">39.29</span></div>
        <div class="cell" data-cell="c-86-5"><span class="cell__label">c-86-5</span><span class="cell__value">54.41</span></div>
        <div class="cell" data-cell="c-86-6"><span class="cell__label">c-86-6</span><span class="cell__value">25.30</span></div>
        <div class="cell" data-cell="c-86-7"><span class="cell__label">c-86-7</span><span class="cell__value">25.10</span></div>
        <div class="cell" data-cell="c-86-8"><span class="cell__label">c-86-8</span><span class="cell__value">78.08</span></div>
        <div class="cell" data-cell="c-86-9"><span class="cell__label">c-86-9</span><span class="cell__value">61.89</span></div>
        <div class="cell" data-cell="c-86-10"><span class="cell__label">c-86-10</span><span class="cell__value">4.46</span></div>
        <div class="cell" data-cell="c-86-11"><span class="cell__label">c-86-11</span><span class="cell__value">87.47</span></div>
        <div class="cell" data-cell="c-86-12"><span class="cell__label">c-86-12</span><span class="cell__value">74.65</span></div>
        <div class="cell" data-cell="c-86-13"><span class="cell__label">c-86-13</span><span class="cell__value">62.97</span></div>
        <div class="cell" data-cell="c-86-14"><span class="cell__label">c-86-14</span><span class="cell__value">51.09</span></div>
        <div class="cell" data-cell="c-86-15"><span class="cell__label">c-86-15</span><span class="cell__value">5.87</span></div>
        <div class="cell" data-cell="c-86-16"><span class="cell__label">c-86-16</span><span class="cell__value">12.84</span></div>
        <div class="cell" data-cell="c-86-17"><span class="cell__label">c-86-17</span><span class="cell__value">8.88</span></div>
        <div class="cell" data-cell="c-86-18"><span class="cell__label">c-86-18</span><span class="cell__value">94.83</span></div>
        <div class="cell" data-cell="c-86-19"><span class="cell__label">c-86-19</span><span class="cell__value">60.06</span></div>
      </div>
      <div class="row" data-row="r-87">
        <div class="cell" data-cell="c-87-0"><span class="cell__label">c-87-0</span><span class="cell__value">60.68</span></div>
        <div class="cell" data-cell="c-87-1"><span class="cell__label">c-87-1</span><span class="cell__value">54.98</span></div>
        <div class="cell" data-cell="c-87-2"><span class="cell__label">c-87-2</span><span class="cell__value">20.39</span></div>
        <div class="cell" data-cell="c-87-3"><span class="cell__label">c-87-3</span><span class="cell__value">9.56</span></div>
        <div class="cell" data-cell="c-87-4"><span class="cell__label">c-87-4</span><span class="cell__value">65.78</span></div>
        <div class="cell" data-cell="c-87-5"><span class="cell__label">c-87-5</span><span class="cell__value">79.21</span></div>
        <div class="cell" data-cell="c-87-6"><span class="cell__label">c-87-6</span><span class="cell__value">52.36</span></div>
        <div class="cell" data-cell="c-87-7"><span class="cell__label">c-87-7</span><span class="cell__value">38.29</span></div>
        <div class="cell" data-cell="c-87-8"><span class="cell__label">c-87-8</span><span class="cell__value">36.64</span></div>
        <div class="cell" data-cell="c-87-9"><span class="cell__label">c-87-9</span><span class="cell__value">69.63</span></div>
        <div class="cell" data-cell="c-87-10"><span class="cell__label">c-87-10</span><span class="cell__value">4.01</span></div>
        <div class="cell" data-cell="c-87-11"><span class="cell__label">c-87-11</span><span class="cell__value">63.35</span></div>
        <div class="cell" data-cell="c-87-12"><span class="cell__label">c-87-12</span><span class="cell__value">62.63</span></div>
        <div class="cell" data-cell="c-87-13"><span class="cell__label">c-87-13</span><span class="cell__value">20.41</span></div>
        <div class="cell" data-cell="c-87-14"><span class="cell__label">c-87-14</span><span class="cell__value">96.42</span></div>
        <div class="cell" data-cell="c-87-15"><span class="cell__label">c-87-15</span><span class="cell__value">43.51</span></div>
        <div class="cell" data-cell="c-87-16"><span class="cell__label">c-87-16</span><span class="cell__value">15.54</span></div>
        <div class="cell" data-cell="c-87-17"><span class="cell__label">c-87-17</span><span class="cell__value">85.43</span></div>
        <div class="cell" data-cell="c-87-18"><span class="cell__label">c-87-18</span><span class="cell__value">96.93</span></div>
        <div class="cell" data-cell="c-87-19"><span class="cell__label">c-87-19</span><span class="cell__value">92.99</span></div>
      </div>
      <div class="row" data-row="r-88">
        <div class="cell" data-cell="c-88-0"><span class="cell__label">c-88-0</span><span class="cell__value">12.13</span></div>
        <div class="cell" data-cell="c-88-1"><span class="cell__label">c-88-1</span><span class="cell__value">86.12</span></div>
        <div class="cell" data-cell="c-88-2"><span class="cell__label">c-88-2</span><span class="cell__value">52.86</span></div>
        <div class="cell" data-cell="c-88-3"><span class="cell__label">c-88-3</span><span class="cell__value">4.53</span></div>
        <div class="cell" data-cell="c-88-4"><span class="cell__label">c-88-4</span><span class="cell__value">52.19</span></div>
        <div class="cell" data-cell="c-88-5"><span class="cell__label">c-88-5</span><span class="cell__value">38.55</span></div>
        <div class="cell" data-cell="c-88-6"><span class="cell__label">c-88-6</span><span class="cell__value">31.71</span></div>
        <div class="cell" data-cell="c-88-7"><span class="cell__label">c-88-7</span><span class="cell__value">82.79</span></div>
        <div class="cell" data-cell="c-88-8"><span class="cell__label">c-88-8</span><span class="cell__value">76.22</span></div>
        <div class="cell" data-cell="c-88-9"><span class="cell__label">c-88-9</span><span class="cell__value">41.17</span></div>
        <div class="cell" data-cell="c-88-10"><span class="cell__label">c-88-10</span><span class="cell__value">55.92</span></div>
        <div class="cell" data-cell="c-88-11"><span class="cell__label">c-88-11</span><span class="cell__value">41.93</span></div>
        <div class="cell" data-cell="c-88-12"><span class="cell__label">c-88-12</span><span class="cell__value">33.46</span></div>
        <div class="cell" data-cell="c-88-13"><span class="cell__label">c-88-13</span><span class="cell__value">93.76</span></div>
        <div class="cell" data-cell="c-88-14"><span class="cell__label">c-88-14</span><span class="cell__value">88.78</span></div>
        <div class="cell" data-cell="c-88-15"><span class="cell__label">c-88-15</span><span class="cell__value">85.00</span></div>
        <div class="cell" data-cell="c-88-16"><span class="cell__label">c-88-16</span><span class="cell__value">73.60</span></div>
        <div class="cell" data-cell="c-88-17"><span class="cell__label">c-88-17</span><span class="cell__value">87.83</span></div>
        <div class="cell" data-cell="c-88-18"><span class="cell__label">c-88-18</span><span class="cell__value">75.53</span></div>
        <div class="cell" data-cell="c-88-19"><span class="cell__label">c-88-19</span><span class="cell__value">81.54</span></div>
      </div>
      <div class="row" data-row="r-89">
        <div class="cell" data-cell="c-89-0"><span class="cell__label">c-89-0</span><span class="cell__value">54.24</span></div>
        <div class="cell" data-cell="c-89-1"><span class="cell__label">c-89-1</span><span class="cell__value">76.47</span></div>
        <div class="cell" data-cell="c-89-2"><span class="cell__label">c-89-2</span><span class="cell__value">9.34</span></div>
        <div class="cell" data-cell="c-89-3"><span class="cell__label">c-89-3</span><span class="cell__value">63.42</span></div>
        <div class="cell" data-cell="c-89-4"><span class="cell__label">c-89-4</span><span class="cell__value">36.01</span></div>
        <div class="cell" data-cell="c-89-5"><span class="cell__label">c-89-5</span><span class="cell__value">37.07</span></div>
        <div class="cell" data-cell="c-89-6"><span class="cell__label">c-89-6</span><span class="cell__value">30.97</span></div>
        <div class="cell" data-cell="c-89-7"><span class="cell__label">c-89-7</span><span class="cell__value">66.39</span></div>
        <div class="cell" data-cell="c-89-8"><span class="cell__label">c-89-8</span><span class="cell__value">67.03</span></div>
        <div class="cell" data-cell="c-89-9"><span class="cell__label">c-89-9</span><span class="cell__value">32.58</span></div>
        <div class="cell" data-cell="c-89-10"><span class="cell__label">c-89-10</span><span class="cell__value">63.47</span></div>
        <div class="cell" data-cell="c-89-11"><span class="cell__label">c-89-11</span><span class="cell__value">65.62</span></div>
        <div class="cell" data-cell="c-89-12"><span class="cell__label">c-89-12</span><span class="cell__value">28.61</span></div>
        <div class="cell" data-cell="c-89-13"><span class="cell__label">c-89-13</span><span class="cell__value">11.66</span></div>
        <div class="cell" data-cell="c-89-14"><span class="cell__label">c-89-14</span><span class="cell__value">87.84</span></div>
        <div class="cell" data-cell="c-89-15"><span class="cell__label">c-89-15</span><span class="cell__value">37.03</span></div>
        <div class="cell" data-cell="c-89-16"><span class="cell__label">c-89-16</span><span class="cell__value">63.03</span></div>
        <div class="cell" data-cell="c-89-17"><span class="cell__label">c-89-17</span><span class="cell__value">67.49</span></div>
        <div class="cell" data-cell="c-89-18"><span class="cell__label">c-89-18</span><span class="cell__value">81.66</span></div>
        <div class="cell" data-cell="c-89-19"><span class="cell__label">c-89-19</span><span class="cell__value">63.76</span></div>
      </div>
      <div class="row" data-row="r-90">
        <div class="cell" data-cell="c-90-0"><span class="cell__label">c-90-0</span><span class="cell__value">60.47</span></div>
        <div class="cell" data-cell="c-90-1"><span class="cell__label">c-90-1</span><span class="cell__value">80.52</span></div>
        <div class="cell" data-cell="c-90-2"><span class="cell__label">c-90-2</span><span class="cell__value">91.85</span></div>
        <div class="cell" data-cell="c-90-3"><span class="cell__label">c-90-3</span><span class="cell__value">13.93</span></div>
        <div class="cell" data-cell="c-90-4"><span class="cell__label">c-90-4</span><span class="cell__value">56.56</span></div>
        <div class="cell" data-cell="c-90-5"><span class="cell__label">c-90-5</span><span class="cell__value">9.85</span></div>
        <div class="cell" data-cell="c-90-6"><span class="cell__label">c-90-6</span><span class="cell__value">4.19</span></div>
        <div class="cell" data-cell="c-90-7"><span class="cell__label">c-90-7</span><span class="cell__value">34.16</span></div>
        <div class="cell" data-cell="c-90-8"><span class="cell__label">c-90-8</span><span class="cell__value">98.89</span></div>
        <div class="cell" data-cell="c-90-9"><span class="cell__label">c-90-9</span><span class="cell__value">25.72</span></div>
        <div class="cell" data-cell="c-90-10"><span class="cell__label">c-90-10</span><span class="cell__value">38.31</span></div>
        <div class="cell" data-cell="c-90-11"><span class="cell__label">c-90-11</span><span class="cell__value">3.17</span></div>
        <div class="cell" data-cell="c-90-12"><span class="cell__label">c-90-12</span><span class="cell__value">27.89</span></div>
        <div class="cell" data-cell="c-90-13"><span class="cell__label">c-90-13</span><span class="cell__value">62.98</span></div>
        <div class="cell" data-cell="c-90-14"><span class="cell__label">c-90-14</span><span class="cell__value">65.07</span></div>
        <div class="cell" data-cell="c-90-15"><span class="cell__label">c-90-15</span><span class="cell__value">91.35</span></div>
        <div class="cell" data-cell="c-90-16"><span class="cell__label">c-90-16</span><span class="cell__value">46.46</span></div>
        <div class="cell" data-cell="c-90-17"><span class="cell__label">c-90-17</span><span class="cell__value">80.33</span></div>
        <div class="cell" data-cell="c-90-18"><span class="cell__label">c-90-18</span><span class="cell__value">37.55</span></div>
        <div class="cell" data-cell="c-90-19"><span class="cell__label">c-90-19</span><span class="cell__value">34.14</span></div>
      </div>
      <div class="row" data-row="r-91">
        <div class="cell" data-cell="c-91-0"><span class="cell__label">c-91-0</span><span class="cell__value">34.67</span></div>
        <div class="cell" data-cell="c-91-1"><span class="cell__label">c-91-1</span><span class="cell__value">23.92</span></div>
        <div class="cell" data-cell="c-91-2"><span class="cell__label">c-91-2</span><span class="cell__value">43.27</span></div>
        <div class="cell" data-cell="c-91-3"><span class="cell__label">c-91-3</span><span class="cell__value">10.55</span></div>
        <div class="cell" data-cell="c-91-4"><span class="cell__label">c-91-4</span><span class="cell__value">34.15</span></div>
        <div class="cell" data-cell="c-91-5"><span class="cell__label">c-91-5</span><span class="cell__value">32.05</span></div>
        <div class="cell" data-cell="c-91-6"><span class="cell__label">c-91-6</span><span class="cell__value">41.01</span></div>
        <div class="cell" data-cell="c-91-7"><span class="cell__label">c-91-7</span><span class="cell__value">29.46</span></div>
        <div class="cell" data-cell="c-91-8"><span class="cell__label">c-91-8</span><span class="cell__value">34.87</span></div>
        <div class="cell" data-cell="c-91-9"><span class="cell__label">c-91-9</span><span class="cell__value">27.39</span></div>
        <div class="cell" data-cell="c-91-10"><span class="cell__label">c-91-10</span><span class="cell__value">51.28</span></div>
        <div class="cell" data-cell="c-91-11"><span class="cell__label">c-91-11</span><span class="cell__value">53.73</span></div>
        <div class="cell" data-cell="c-91-12"><span class="cell__label">c-91-12</span><span class="cell__value">22.48</span></div>
        <div class="cell" data-cell="c-91-13"><span class="cell__label">c-91-13</span><span class="cell__value">46.18</span></div>
        <div class="cell" data-cell="c-91-14"><span class="cell__label">c-91-14</span><span class="cell__value">58.22</span></div>
        <div class="cell" data-cell="c-91-15"><span class="cell__label">c-91-15</span><span class="cell__value">71.36</span></div>
        <div class="cell" data-cell="c-91-16"><span class="cell__label">c-91-16</span><span class="cell__value">73.03</span></div>
        <div class="cell" data-cell="c-91-17"><span class="cell__label">c-91-17</span><span class="cell__value">8.30</span></div>
        <div class="cell" data-cell="c-91-18"><span class="cell__label">c-91-18</span><span class="cell__value">55.46</span></div>
        <div class="cell" data-cell="c-91-19"><span class="cell__label">c-91-19</span><span class="cell__value">37.52</span></div>
      </div>
      <div class="row" data-row="r-92">
        <div class="cell" data-cell="c-92-0"><span class="cell__label">c-92-0</span><span class="cell__value">42.60</span></div>
        <div class="cell" data-cell="c-92-1"><span class="cell__label">c-92-1</span><span class="cell__value">65.39</span></div>
        <div class="cell" data-cell="c-92-2"><span class="cell__label">c-92-2</span><span class="cell__value">93.18</span></div>
        <div class="cell" data-cell="c-92-3"><span class="cell__label">c-92-3</span><span class="cell__value">39.42</span></div>
        <div class="cell" data-cell="c-92-4"><span class="cell__label">c-92-4</span><span class="cell__value">67.52</span></div>
        <div class="cell" data-cell="c-92-5"><span class="cell__label">c-92-5</span><span class="cell__value">80.48</span></div>
        <div class="cell" data-cell="c-92-6"><span class="cell__label">c-92-6</span><span class="cell__value">36.81</span></div>
        <div class="cell" data-cell="c-92-7"><span class="cell__label">c-92-7</span><span class="cell__value">55.87</span></div>
        <div class="cell" data-cell="c-92-8"><span class="cell__label">c-92-8</span><span class="cell__value">99.59</span></div>
        <div class="cell" data-cell="c-92-9"><span class="cell__label">c-92-9</span><span class="cell__value">70.69</span></div>
        <div class="cell" data-cell="c-92-10"><span class="cell__label">c-92-10</span><span class="cell__value">44.15</span></div>
        <div class="cell" data-cell="c-92-11"><span class="cell__label">c-92-11</span><span class="cell__value">14.50</span></div>
        <div class="cell" data-cell="c-92-12"><span class="cell__label">c-92-12</span><span class="cell__value">30.84</span></div>
        <div class="cell" data-cell="c-92-13"><span class="cell__label">c-92-13</span><span class="cell__value">10.31</span></div>
        <div class="cell" data-cell="c-92-14"><span class="cell__label">c-92-14</span><span class="cell__value">3.98</span></div>
        <div class="cell" data-cell="c-92-15"><span class="cell__label">c-92-15</span><span class="cell__value">13.72</span></div>
        <div class="cell" data-cell="c-92-16"><span class="cell__label">c-92-16</span><span class="cell__value">11.30</span></div>
        <div class="cell" data-cell="c-92-17"><span class="cell__label">c-92-17</span><span class="cell__value">72.45</span></div>
        <div class="cell" data-cell="c-92-18"><span class="cell__label">c-92-18</span><span class="cell__value">41.99</span></div>
        <div class="cell" data-cell="c-92-19"><span class="cell__label">c-92-19</span><span class="cell__value">66.31</span></div>
      </div>
      <div class="row" data-row="r-93">
        <div class="cell" data-cell="c-93-0"><span class="cell__label">c-93-0</span><span class="cell__value">12.26</span></div>
        <div class="cell" data-cell="c-93-1"><span class="cell__label">c-93-1</span><span class="cell__value">8.92</span></div>
        <div class="cell" data-cell="c-93-2"><span class="cell__label">c-93-2</span><span class="cell__value">1.43</span></div>
        <div class="cell" data-cell="c-93-3"><span class="cell__label">c-93-3</span><span class="cell__value">36.29</span></div>
        <div class="cell" data-cell="c-93-4"><span class="cell__label">c-93-4</span><span class="cell__value">55.83</span></div>
        <div class="cell" data-cell="c-93-5"><span class="cell__label">c-93-5</span><span class="cell__value">39.30</span></div>
        <div class="cell" data-cell="c-93-6"><span class="cell__label">c-93-6</span><span class="cell__value">50.83</span></div>
        <div class="cell" data-cell="c-93-7"><span class="cell__label">c-93-7</span><span class="cell__value">26.89</span></div>
        <div class="cell" data-cell="c-93-8"><span class="cell__label">c-93-8</span><span class="cell__value">78.12</span></div>
        <div class="cell" data-cell="c-93-9"><span class="cell__label">c-93-9</span><span class="cell__value">45.85</span></div>
        <div class="cell" data-cell="c-93-10"><span class="cell__label">c-93-10</span><span class="cell__value">62.96</span></div>
        <div class="cell" data-cell="c-93-11"><span class="cell__label">c-93-11</span><span class="cell__value">19.78</span></div>
        <div class="cell" data-cell="c-93-12"><span class="cell__label">c-93-12</span><span class="cell__value">24.68</span></div>
        <div class="cell" data-cell="c-93-13"><span class="cell__label">c-93-13</span><span class="cell__value">96.82</span></div>
        <div class="cell" data-cell="c-93-14"><span class="cell__label">c-93-14</span><span class="cell__value">77.91</span></div>
        <div class="cell" data-cell="c-93-15"><span class="cell__label">c-93-15</span><span class="cell__value">6.01</span></div>
        <div class="cell" data-cell="c-93-16"><span class="cell__label">c-93-16</span><span class="cell__value">13.21</span></div>
        <div class="cell" data-cell="c-93-17"><span class="cell__label">c-93-17</span><span class="cell__value">7.09</span></div>
        <div class="cell" data-cell="c-93-18"><span class="cell__label">c-93-18</span><span class="cell__value">16.88</span></div>
        <div class="cell" data-cell="c-93-19"><span class="cell__label">c-93-19</span><span class="cell__value">28.83</span></div>
      </div>
      <div class="row" data-row="r-94">
        <div class="cell" data-cell="c-94-0"><span class="cell__label">c-94-0</span><span class="cell__value">24.61</span></div>
        <div class="cell" data-cell="c-94-1"><span class="cell__label">c-94-1</span><span class="cell__value">75.22</span></div>
        <div class="cell" data-cell="c-94-2"><span class="cell__label">c-94-2</span><span class="cell__value">40.22</span></div>
        <div class="cell" data-cell="c-94-3"><span class="cell__label">c-94-3</span><span class="cell__value">25.29</span></div>
        <div class="cell" data-cell="c-94-4"><span class="cell__label">c-94-4</span><span class="cell__value">89.06</span></div>
        <div class="cell" data-cell="c-94-5"><span class="cell__label">c-94-5</span><span class="cell__value">3.66</span></div>
        <div class="cell" data-cell="c-94-6"><span class="cell__label">c-94-6</span><span class="cell__value">65.07</span></div>
        <div class="cell" data-cell="c-94-7"><span class="cell__label">c-94-7</span><span class="cell__value">27.70</span></div>
        <div class="cell" data-cell="c-94-8"><span class="cell__label">c-94-8</span><span class="cell__value">11.13</span></div>
        <div class="cell" data-cell="c-94-9"><span class="cell__label">c-94-9</span><span class="cell__value">78.04</span></div>
        <div class="cell" data-cell="c-94-10"><span class="cell__label">c-94-10</span><span class="cell__value">46.00</span></div>
        <div class="cell" data-cell="c-94-11"><span class="cell__label">c-94-11</span><span class="cell__value">94.60</span></div>
        <div class="cell" data-cell="c-94-12"><span class="cell__label">c-94-12</span><span class="cell__value">30.19</span></div>
        <div class="cell" data-cell="c-94-13"><span class="cell__label">c-94-13</span><span class="cell__value">5.80</span></div>
        <div class="cell" data-cell="c-94-14"><span class="cell__label">c-94-14</span><span class="cell__value">37.34</span></div>
        <div class="cell" data-cell="c-94-15"><span class="cell__label">c-94-15</span><span class="cell__value">17.71</span></div>
        <div class="cell" data-cell="c-94-16"><span class="cell__label">c-94-16</span><span class="cell__value">85.79</span></div>
        <div class="cell" data-cell="c-94-17"><span class="cell__label">c-94-17</span><span class="cell__value">4.13</span></div>
        <div class="cell" data-cell="c-94-18"><span class="cell__label">c-94-18</span><span class="cell__value">58.77</span></div>
        <div class="cell" data-cell="c-94-19"><span class="cell__label">c-94-19</span><span class="cell__value">25.94</span></div>
      </div>
      <div class="row" data-row="r-95">
        <div class="cell" data-cell="c-95-0"><span class="cell__label">c-95-0</span><span class="cell__value">15.19</span></div>
        <div class="cell" data-cell="c-95-1"><span class="cell__label">c-95-1</span><span class="cell__value">6.80</span></div>
        <div class="cell" data-cell="c-95-2"><span class="cell__label">c-95-2</span><span class="cell__value">5.15</span></div>
        <div class="cell" data-cell="c-95-3"><span class="cell__label">c-95-3</span><span class="cell__value">81.86</span></div>
        <div class="cell" data-cell="c-95-4"><span class="cell__label">c-95-4</span><span class="cell__value">34.70</span></div>
        <div class="cell" data-cell="c-95-5"><span class="cell__label">c-95-5</span><span class="cell__value">65.08</span></div>
        <div class="cell" data-cell="c-95-6"><span class="cell__label">c-95-6</span><span class="cell__value">11.39</span></div>
        <div class="cell" data-cell="c-95-7"><span class="cell__label">c-95-7</span><span class="cell__value">1.89</span></div>
        <div class="cell" data-cell="c-95-8"><span class="cell__label">c-95-8</span><span class="cell__value">42.01</span></div>
        <div class="cell" data-cell="c-95-9"><span class="cell__label">c-95-9</span><span class="cell__value">31.09</span></div>
        <div class="cell" data-cell="c-95-10"><span class="cell__label">c-95-10</span><span class="cell__value">80.79</span></div>
        <div class="cell" data-cell="c-95-11"><span class="cell__label">c-95-11</span><span class="cell__value">76.05</span></div>
        <div class="cell" data-cell="c-95-12"><span class="cell__label">c-95-12</span><span class="cell__value">91.88</span></div>
        <div class="cell" data-cell="c-95-13"><span class="cell__label">c-95-13</span><span class="cell__value">87.78</span></div>
        <div class="cell" data-cell="c-95-14"><span class="cell__label">c-95-14</span><span class="cell__value">43.76</span></div>
        <div class="cell" data-cell="c-95-15"><span class="cell__label">c-95-15</span><span class="cell__value">7.62</span></div>
        <div class="cell" data-cell="c-95-16"><span class="cell__label">c-95-16</span><span class="cell__value">45.99</span></div>
        <div class="cell" data-cell="c-95-17"><span class="cell__label">c-95-17</span><span class="cell__value">51.78</span></div>
        <div class="cell" data-cell="c-95-18"><span class="cell__label">c-95-18</span><span class="cell__value">82.81</span></div>
        <div class="cell" data-cell="c-95-19"><span class="cell__label">c-95-19</span><span class="cell__value">68.43</span></div>
      </div>
      <div class="row" data-row="r-96">
        <div class="cell" data-cell="c-96-0"><span class="cell__label">c-96-0</span><span class="cell__value">16.06</span></div>
        <div class="cell" data-cell="c-96-1"><span class="cell__label">c-96-1</span><span class="cell__value">74.80</span></div>
        <div class="cell" data-cell="c-96-2"><span class="cell__label">c-96-2</span><span class="cell__value">22.67</span></div>
        <div class="cell" data-cell="c-96-3"><span class="cell__label">c-96-3</span><span class="cell__value">93.85</span></div>
        <div class="cell" data-cell="c-96-4"><span class="cell__label">c-96-4</span><span class="cell__value">77.39</span></div>
        <div class="cell" data-cell="c-96-5"><span class="cell__label">c-96-5</span><span class="cell__value">75.84</span></div>
        <div class="cell" data-cell="c-96-6"><span class="cell__label">c-96-6</span><span class="cell__value">3.97</span></div>
        <div class="cell" data-cell="c-96-7"><span class="cell__label">c-96-7</span><span class="cell__value">12.75</span></div>
        <div class="cell" data-cell="c-96-8"><span class="cell__label">c-96-8</span><span class="cell__value">7.67</span></div>
        <div class="cell" data-cell="c-96-9"><span class="cell__label">c-96-9</span><span class="cell__value">31.53</span></div>
        <div class="cell" data-cell="c-96-10"><span class="cell__label">c-96-10</span><span class="cell__value">71.02</span></div>
        <div class="cell" data-cell="c-96-11"><span class="cell__label">c-96-11</span><span class="cell__value">30.18</span></div>
        <div class="cell" data-cell="c-96-12"><span class="cell__label">c-96-12</span><span class="cell__value">73.46</span></div>
        <div class="cell" data-cell="c-96-13"><span class="cell__label">c-96-13</span><span class="cell__value">3.63</span></div>
        <div class="cell" data-cell="c-96-14"><span class="cell__label">c-96-14</span><span class="cell__value">29.88</span></div>
        <div class="cell" data-cell="c-96-15"><span class="cell__label">c-96-15</span><span class="cell__value">90.25</span></div>
        <div class="cell" data-cell="c-96-16"><span class="cell__label">c-96-16</span><span class="cell__value">22.60</span></div>
        <div class="cell" data-cell="c-96-17"><span class="cell__label">c-96-17</span><span class="cell__value">77.25</span></div>
        <div class="cell" data-cell="c-96-18"><span class="cell__label">c-96-18</span><span class="cell__value">32.84</span></div>
        <div class="cell" data-cell="c-96-19"><span class="cell__label">c-96-19</span><span class="cell__value">94.99</span></div>
      </div>
      <div class="row" data-row="r-97">
        <div class="cell" data-cell="c-97-0"><span class="cell__label">c-97-0</span><span class="cell__value">65.99</span></div>
        <div class="cell" data-cell="c-97-1"><span class="cell__label">c-97-1</span><span class="cell__value">85.84</span></div>
        <div class="cell" data-cell="c-97-2"><span class="cell__label">c-97-2</span><span class="cell__value">82.15</span></div>
        <div class="cell" data-cell="c-97-3"><span class="cell__label">c-97-3</span><span class="cell__value">80.42</span></div>
        <div class="cell" data-cell="c-97-4"><span class="cell__label">c-97-4</span><span class="cell__value">49.73</span></div>
        <div class="cell" data-cell="c-97-5"><span class="cell__label">c-97-5</span><span class="cell__value">86.67</span></div>
        <div class="cell" data-cell="c-97-6"><span class="cell__label">c-97-6</span><span class="cell__value">4.42</span></div>
        <div class="cell" data-cell="c-97-7"><span class="cell__label">c-97-7</span><span class="cell__value">55.65</span></div>
        <div class="cell" data-cell="c-97-8"><span class="cell__label">c-97-8</span><span class="cell__value">77.10</span></div>
        <div class="cell" data-cell="c-97-9"><span class="cell__label">c-97-9</span><span class="cell__value">84.61</span></div>
        <div class="cell" data-cell="c-97-10"><span class="cell__label">c-97-10</span><span class="cell__value">90.03</span></div>
        <div class="cell" data-cell="c-97-11"><span class="cell__label">c-97-11</span><span class="cell__value">57.87</span></div>
        <div class="cell" data-cell="c-97-12"><span class="cell__label">c-97-12</span><span class="cell__value">37.92</span></div>
        <div class="cell" data-cell="c-97-13"><span class="cell__label">c-97-13</span><span class="cell__value">45.10</span></div>
        <div class="cell" data-cell="c-97-14"><span class="cell__label">c-97-14</span><span class="cell__value">81.99</span></div>
        <div class="cell" data-cell="c-97-15"><span class="cell__label">c-97-15</span><span class="cell__value">20.69</span></div>
        <div class="cell" data-cell="c-97-16"><span class="cell__label">c-97-16</span><span class="cell__value">99.55</span></div>
        <div class="cell" data-cell="c-97-17"><span class="cell__label">c-97-17</span><span class="cell__value">51.23</span></div>
        <div class="cell" data-cell="c-97-18"><span class="cell__label">c-97-18</span><span class="cell__value">24.28</span></div>
        <div class="cell" data-cell="c-97-19"><span class="cell__label">c-97-19</span><span class="cell__value">63.11</span></div>
      </div>
      <div class="row" data-row="r-98">
        <div class="cell" data-cell="c-98-0"><span class="cell__label">c-98-0</span><span class="cell__value">79.82</span></div>
        <div class="cell" data-cell="c-98-1"><span class="cell__label">c-98-1</span><span class="cell__value">83.07</span></div>
        <div class="cell" data-cell="c-98-2"><span class="cell__label">c-98-2</span><span class="cell__value">39.01</span></div>
        <div class="cell" data-cell="c-98-3"><span class="cell__label">c-98-3</span><span class="cell__value">70.05</span></div>
        <div class="cell" data-cell="c-98-4"><span class="cell__label">c-98-4</span><span class="cell__value">67.62</span></div>
        <div class="cell" data-cell="c-98-5"><span class="cell__label">c-98-5</span><span class="cell__value">60.53</span></div>
        <div class="cell" data-cell="c-98-6"><span class="cell__label">c-98-6</span><span class="cell__value">26.29</span></div>
        <div class="cell" data-cell="c-98-7"><span class="cell__label">c-98-7</span><span class="cell__value">51.78</span></div>
        <div class="cell" data-cell="c-98-8"><span class="cell__label">c-98-8</span><span class="cell__value">1.56</span></div>
        <div class="cell" data-cell="c-98-9"><span class="cell__label">c-98-9</span><span class="cell__value">2.41</span></div>
        <div class="cell" data-cell="c-98-10"><span class="cell__label">c-98-10</span><span class="cell__value">55.76</span></div>
        <div class="cell" data-cell="c-98-11"><span class="cell__label">c-98-11</span><span class="cell__value">83.01</span></div>
        <div class="cell" data-cell="c-98-12"><span class="cell__label">c-98-12</span><span class="cell__value">15.50</span></div>
        <div class="cell" data-cell="c-98-13"><span class="cell__label">c-98-13</span><span class="cell__value">46.94</span></div>
        <div class="cell" data-cell="c-98-14"><span class="cell__label">c-98-14</span><span class="cell__value">94.30</span></div>
        <div class="cell" data-cell="c-98-15"><span class="cell__label">c-98-15</span><span class="cell__value">86.65</span></div>
        <div class="cell" data-cell="c-98-16"><span class="cell__label">c-98-16</span><span class="cell__value">14.69</span></div>
        <div class="cell" data-cell="c-98-17"><span class="cell__label">c-98-17</span><span class="cell__value">98.45</span></div>
        <div class="cell" data-cell="c-98-18"><span class="cell__label">c-98-18</span><span class="cell__value">45.58</span></div>
        <div class="cell" data-cell="c-98-19"><span class="cell__label">c-98-19</span><span class="cell__value">78.93</span></div>
      </div>
      <div class="row" data-row="r-99">
        <div class="cell" data-cell="c-99-0"><span class="cell__label">c-99-0</span><span class="cell__value">64.88</span></div>
        <div class="cell" data-cell="c-99-1"><span class="cell__label">c-99-1</span><span class="cell__value">69.69</span></div>
        <div class="cell" data-cell="c-99-2"><span class="cell__label">c-99-2</span><span class="cell__value">16.44</span></div>
        <div class="cell" data-cell="c-99-3"><span class="cell__label">c-99-3</span><span class="cell__value">47.99</span></div>
        <div class="cell" data-cell="c-99-4"><span class="cell__label">c-99-4</span><span class="cell__value">88.05</span></div>
        <div class="cell" data-cell="c-99-5"><span class="cell__label">c-99-5</span><span class="cell__value">46.43</span></div>
        <div class="cell" data-cell="c-99-6"><span class="cell__label">c-99-6</span><span class="cell__value">96.16</span></div>
        <div class="cell" data-cell="c-99-7"><span class="cell__label">c-99-7</span><span class="cell__value">0.05</span></div>
        <div class="cell" data-cell="c-99-8"><span class="cell__label">c-99-8</span><span class="cell__value">72.53</span></div>
        <div class="cell" data-cell="c-99-9"><span class="cell__label">c-99-9</span><span class="cell__value">3.85</span></div>
        <div class="cell" data-cell="c-99-10"><span class="cell__label">c-99-10</span><span class="cell__value">33.13</span></div>
        <div class="cell" data-cell="c-99-11"><span class="cell__label">c-99-11</span><span class="cell__value">18.28</span></div>
        <div class="cell" data-cell="c-99-12"><span class="cell__label">c-99-12</span><span class="cell__value">49.03</span></div>
        <div class="cell" data-cell="c-99-13"><span class="cell__label">c-99-13</span><span class="cell__value">15.28</span></div>
        <div class="cell" data-cell="c-99-14"><span class="cell__label">c-99-14</span><span class="cell__value">39.91</span></div>
        <div class="cell" data-cell="c-99-15"><span class="cell__label">c-99-15</span><span class="cell__value">62.94</span></div>
        <div class="cell" data-cell="c-99-16"><span class="cell__label">c-99-16</span><span class="cell__value">10.74</span></div>
        <div class="cell" data-cell="c-99-17"><span class="cell__label">c-99-17</span><span class="cell__value">32.08</span></div>
        <div class="cell" data-cell="c-99-18"><span class="cell__label">c-99-18</span><span class="cell__value">5.08</span></div>
        <div class="cell" data-cell="c-99-19"><span class="cell__label">c-99-19</span><span class="cell__value">44.62</span></div>
      </div>
      <div class="row" data-row="r-100">
        <div class="cell" data-cell="c-100-0"><span class="cell__label">c-100-0</span><span class="cell__value">26.92</span></div>
        <div class="cell" data-cell="c-100-1"><span class="cell__label">c-100-1</span><span class="cell__value">36.62</span></div>
        <div class="cell" data-cell="c-100-2"><span class="cell__label">c-100-2</span><span class="cell__value">19.35</span></div>
        <div class="cell" data-cell="c-100-3"><span class="cell__label">c-100-3</span><span class="cell__value">34.93</span></div>
        <div class="cell" data-cell="c-100-4"><span class="cell__label">c-100-4</span><span class="cell__value">72.08</span></div>
        <div class="cell" data-cell="c-100-5"><span class="cell__label">c-100-5</span><span class="cell__value">32.25</span></div>
        <div class="cell" data-cell="c-100-6"><span class="cell__label">c-100-6</span><span class="cell__value">32.08</span></div>
        <div class="cell" data-cell="c-100-7"><span class="cell__label">c-100-7</span><span class="cell__value">20.83</span></div>
        <div class="cell" data-cell="c-100-8"><span class="cell__label">c-100-8</span><span class="cell__value">65.12</span></div>
        <div class="cell" data-cell="c-100-9"><span class="cell__label">c-100-9</span><span class="cell__value">46.42</span></div>
        <div class="cell" data-cell="c-100-10"><span class="cell__label">c-100-10</span><span class="cell__value">75.36</span></div>
        <div class="cell" data-cell="c-100-11"><span class="cell__label">c-100-11</span><span class="cell__value">50.70</span></div>
        <div class="cell" data-cell="c-100-12"><span class="cell__label">c-100-12</span><span class="cell__value">21.39</span></div>
        <div class="cell" data-cell="c-100-13"><span class="cell__label">c-100-13</span><span class="cell__value">66.51</span></div>
        <div class="cell" data-cell="c-100-14"><span class="cell__label">c-100-14</span><span class="cell__value">63.78</span></div>
        <div class="cell" data-cell="c-100-15"><span class="cell__label">c-100-15</span><span class="cell__value">92.57</span></div>
        <div class="cell" data-cell="c-100-16"><span class="cell__label">c-100-16</span><span class="cell__value">63.50</span></div>
        <div class="cell" data-cell="c-100-17"><span class="cell__label">c-100-17</span><span class="cell__value">71.06</span></div>
        <div class="cell" data-cell="c-100-18"><span class="cell__label">c-100-18</span><span class="cell__value">70.10</span></div>
        <div class="cell" data-cell="c-100-19"><span class="cell__label">c-100-19</span><span class="cell__value">34.62</span></div>
      </div>
      <div class="row" data-row="r-101">
        <div class="cell" data-cell="c-101-0"><span class="cell__label">c-101-0</span><span class="cell__value">58.86</span></div>
        <div class="cell" data-cell="c-101-1"><span class="cell__label">c-101-1</span><span class="cell__value">57.91</span></div>
        <div class="cell" data-cell="c-101-2"><span class="cell__label">c-101-2</span><span class="cell__value">20.65</span></div>
        <div class="cell" data-cell="c-101-3"><span class="cell__label">c-101-3</span><span class="cell__value">29.74</span></div>
        <div class="cell" data-cell="c-101-4"><span class="cell__label">c-101-4</span><span class="cell__value">19.84</span></div>
        <div class="cell" data-cell="c-101-5"><span class="cell__label">c-101-5</span><span class="cell__value">92.15</span></div>
        <div class="cell" data-cell="c-101-6"><span class="cell__label">c-101-6</span><span class="cell__value">70.24</span></div>
        <div class="cell" data-cell="c-101-7"><span class="cell__label">c-101-7</span><span class="cell__value">63.70</span></div>
        <div class="cell" data-cell="c-101-8"><span class="cell__label">c-101-8</span><span class="cell__value">30.64</span></div>
        <div class="cell" data-cell="c-101-9"><span class="cell__label">c-101-9</span><span class="cell__value">10.75</span></div>
        <div class="cell" data-cell="c-101-10"><span class="cell__label">c-101-10</span><span class="cell__value">81.74</span></div>
        <div class="cell" data-cell="c-101-11"><span class="cell__label">c-101-11</span><span class="cell__value">40.05</span></div>
        <div class="cell" data-cell="c-101-12"><span class="cell__label">c-101-12</span><span class="cell__value">88.64</span></div>
        <div class="cell" data-cell="c-101-13"><span class="cell__label">c-101-13</span><span class="cell__value">91.98</span></div>
        <div class="cell" data-cell="c-101-14"><span class="cell__label">c-101-14</span><span class="cell__value">95.56</span></div>
        <div class="cell" data-cell="c-101-15"><span class="cell__label">c-101-15</span><span class="cell__value">5.78</span></div>
        <div class="cell" data-cell="c-101-16"><span class="cell__label">c-101-16</span><span class="cell__value">49.26</span></div>
        <div class="cell" data-cell="c-101-17"><span class="cell__label">c-101-17</span><span class="cell__value">33.71</span></div>
        <div class="cell" data-cell="c-101-18"><span class="cell__label">c-101-18</span><span class="cell__value">84.90</span></div>
        <div class="cell" data-cell="c-101-19"><span class="cell__label">c-101-19</span><span class="cell__value">27.87</span></div>
      </div>
      <div class="row" data-row="r-102">
        <div class="cell" data-cell="c-102-0"><span class="cell__label">c-102-0</span><span class="cell__value">82.21</span></div>
        <div class="cell" data-cell="c-102-1"><span class="cell__label">c-102-1</span><span class="cell__value">23.88</span></div>
        <div class="cell" data-cell="c-102-2"><span class="cell__label">c-102-2</span><span class="cell__value">23.22</span></div>
        <div class="cell" data-cell="c-102-3"><span class="cell__label">c-102-3</span><span class="cell__value">90.51</span></div>
        <div class="cell" data-cell="c-102-4"><span class="cell__label">c-102-4</span><span class="cell__value">6.77</span></div>
        <div class="cell" data-cell="c-102-5"><span class="cell__label">c-102-5</span><span class="cell__value">54.56</span></div>
        <div class="cell" data-cell="c-102-6"><span class="cell__label">c-102-6</span><span class="cell__value">82.74</span></div>
        <div class="cell" data-cell="c-102-7"><span class="cell__label">c-102-7</span><span class="cell__value">8.91</span></div>
        <div class="cell" data-cell="c-102-8"><span class="cell__label">c-102-8</span><span class="cell__value">83.85</span></div>
        <div class="cell" data-cell="c-102-9"><span class="cell__label">c-102-9</span><span class="cell__value">49.72</span></div>
        <div class="cell" data-cell="c-102-10"><span class="cell__label">c-102-10</span><span class="cell__value">12.38</span></div>
        <div class="cell" data-cell="c-102-11"><span class="cell__label">c-102-11</span><span class="cell__value">58.95</span></div>
        <div class="cell" data-cell="c-102-12"><span class="cell__label">c-102-12</span><span class="cell__value">56.43</span></div>
        <div class="cell" data-cell="c-102-13"><span class="cell__label">c-102-13</span><span class="cell__value">67.54</span></div>
        <div class="cell" data-cell="c-102-14"><span class="cell__label">c-102-14</span><span class="cell__value">57.28</span></div>
        <div class="cell" data-cell="c-102-15"><span class="cell__label">c-102-15</span><span class="cell__value">29.99</span></div>
        <div class="cell" data-cell="c-102-16"><span class="cell__label">c-102-16</span><span class="cell__value">55.79</span></div>
        <div class="cell" data-cell="c-102-17"><span class="cell__label">c-102-17</span><span class="cell__value">89.30</span></div>
        <div class="cell" data-cell="c-102-18"><span class="cell__label">c-102-18</span><span class="cell__value">0.34</span></div>
        <div class="cell" data-cell="c-102-19"><span class="cell__label">c-102-19</span><span class="cell__value">23.98</span></div>
      </div>
      <div class="row" data-row="r-103">
        <div class="cell" data-cell="c-103-0"><span class="cell__label">c-103-0</span><span class="cell__value">86.39</span></div>
        <div class="cell" data-cell="c-103-1"><span class="cell__label">c-103-1</span><span class="cell__value">42.93</span></div>
        <div class="cell" data-cell="c-103-2"><span class="cell__label">c-103-2</span><span class="cell__value">30.74</span></div>
        <div class="cell" data-cell="c-103-3"><span class="cell__label">c-103-3</span><span class="cell__value">86.12</span></div>
        <div class="cell" data-cell="c-103-4"><span class="cell__label">c-103-4</span><span class="cell__value">60.22</span></div>
        <div class="cell" data-cell="c-103-5"><span class="cell__label">c-103-5</span><span class="cell__value">3.08</span></div>
        <div class="cell" data-cell="c-103-6"><span class="cell__label">c-103-6</span><span class="cell__value">0.15</span></div>
        <div class="cell" data-cell="c-103-7"><span class="cell__label">c-103-7</span><span class="cell__value">80.22</span></div>
        <div class="cell" data-cell="c-103-8"><span class="cell__label">c-103-8</span><span class="cell__value">87.01</span></div>
        <div class="cell" data-cell="c-103-9"><span class="cell__label">c-103-9</span><span class="cell__value">26.64</span></div>
        <div class="cell" data-cell="c-103-10"><span class="cell__label">c-103-10</span><span class="cell__value">6.90</span></div>
        <div class="cell" data-cell="c-103-11"><span class="cell__label">c-103-11</span><span class="cell__value">74.62</span></div>
        <div class="cell" data-cell="c-103-12"><span class="cell__label">c-103-12</span><span class="cell__value">65.30</span></div>
        <div class="cell" data-cell="c-103-13"><span class="cell__label">c-103-13</span><span class="cell__value">25.96</span></div>
        <div class="cell" data-cell="c-103-14"><span class="cell__label">c-103-14</span><span class="cell__value">22.35</span></div>
        <div class="cell" data-cell="c-103-15"><span class="cell__label">c-103-15</span><span class="cell__value">63.59</span></div>
        <div class="cell" data-cell="c-103-16"><span class="cell__label">c-103-16</span><span class="cell__value">99.89</span></div>
        <div class="cell" data-cell="c-103-17"><span class="cell__label">c-103-17</span><span class="cell__value">55.09</span></div>
        <div class="cell" data-cell="c-103-18"><span class="cell__label">c-103-18</span><span class="cell__value">31.43</span></div>
        <div class="cell" data-cell="c-103-19"><span class="cell__label">c-103-19</span><span class="cell__value">85.28</span></div>
      </div>
      <div class="row" data-row="r-104">
        <div class="cell" data-cell="c-104-0"><span class="cell__label">c-104-0</span><span class="cell__value">77.89</span></div>
        <div class="cell" data-cell="c-104-1"><span class="cell__label">c-104-1</span><span class="cell__value">19.04</span></div>
        <div class="cell" data-cell="c-104-2"><span class="cell__label">c-104-2</span><span class="cell__value">60.17</span></div>
        <div class="cell" data-cell="c-104-3"><span class="cell__label">c-104-3</span><span class="cell__value">50.85</span></div>
        <div class="cell" data-cell="c-104-4"><span class="cell__label">c-104-4</span><span class="cell__value">46.99</span></div>
        <div class="cell" data-cell="c-104-5"><span class="cell__label">c-104-5</span><span class="cell__value">3.46</span></div>
        <div class="cell" data-cell="c-104-6"><span class="cell__label">c-104-6</span><span class="cell__value">5.38</span></div>
        <div class="cell" data-cell="c-104-7"><span class="cell__label">c-104-7</span><span class="cell__value">79.54</span></div>
        <div class="cell" data-cell="c-104-8"><span class="cell__label">c-104-8</span><span class="cell__value">98.89</span></div>
        <div class="cell" data-cell="c-104-9"><span class="cell__label">c-104-9</span><span class="cell__value">70.82</span></div>
        <div class="cell" data-cell="c-104-10"><span class="cell__label">c-104-10</span><span class="cell__value">41.37</span></div>
        <div class="cell" data-cell="c-104-11"><span class="cell__label">c-104-11</span><span class="cell__value">97.93</span></div>
        <div class="cell" data-cell="c-104-12"><span class="cell__label">c-104-12</span><span class="cell__value">96.81</span></div>
        <div class="cell" data-cell="c-104-13"><span class="cell__label">c-104-13</span><span class="cell__value">68.15</span></div>
        <div class="cell" data-cell="c-104-14"><span class="cell__label">c-104-14</span><span class="cell__value">1.97</span></div>
        <div class="cell" data-cell="c-104-15"><span class="cell__label">c-104-15</span><span class="cell__value">26.44</span></div>
        <div class="cell" data-cell="c-104-16"><span class="cell__label">c-104-16</span><span class="cell__value">86.72</span></div>
        <div class="cell" data-cell="c-104-17"><span class="cell__label">c-104-17</span><span class="cell__value">1.15</span></div>
        <div class="cell" data-cell="c-104-18"><span class="cell__label">c-104-18</span><span class="cell__value">81.98</span></div>
        <div class="cell" data-cell="c-104-19"><span class="cell__label">c-104-19</span><span class="cell__value">36.06</span></div>
      </div>
      <div class="row" data-row="r-105">
        <div class="cell" data-cell="c-105-0"><span class="cell__label">c-105-0</span><span class="cell__value">4.54</span></div>
        <div class="cell" data-cell="c-105-1"><span class="cell__label">c-105-1</span><span class="cell__value">30.77</span></div>
        <div class="cell" data-cell="c-105-2"><span class="cell__label">c-105-2</span><span class="cell__value">3.21</span></div>
        <div class="cell" data-cell="c-105-3"><span class="cell__label">c-105-3</span><span class="cell__value">74.76</span></div>
        <div class="cell" data-cell="c-105-4"><span class="cell__label">c-105-4</span><span class="cell__value">80.94</span></div>
        <div class="cell" data-cell="c-105-5"><span class="cell__label">c-105-5</span><span class="cell__value">14.89</span></div>
        <div class="cell" data-cell="c-105-6"><span class="cell__label">c-105-6</span><span class="cell__value">25.19</span></div>
        <div class="cell" data-cell="c-105-7"><span class="cell__label">c-105-7</span><span class="cell__value">44.75</span></div>
        <div class="cell" data-cell="c-105-8"><span class="cell__label">c-105-8</span><span class="cell__value">96.28</span></div>
        <div class="cell" data-cell="c-105-9"><span class="cell__label">c-105-9</span><span class="cell__value">9.77</span></div>
        <div class="cell" data-cell="c-105-10"><span class="cell__label">c-105-10</span><span class="cell__value">32.82</span></div>
        <div class="cell" data-cell="c-105-11"><span class="cell__label">c-105-11</span><span class="cell__value">29.90</span></div>
        <div class="cell" data-cell="c-105-12"><span class="cell__label">c-105-12</span><span class="cell__value">76.46</span></div>
        <div class="cell" data-cell="c-105-13"><span class="cell__label">c-105-13</span><span class="cell__value">7.68</span></div>
        <div class="cell" data-cell="c-105-14"><span class="cell__label">c-105-14</span><span class="cell__value">62.49</span></div>
        <div class="cell" data-cell="c-105-15"><span class="cell__label">c-105-15</span><span class="cell__value">84.34</span></div>
        <div class="cell" data-cell="c-105-16"><span class="cell__label">c-105-16</span><span class="cell__value">48.03</span></div>
        <div class="cell" data-cell="c-105-17"><span class="cell__label">c-105-17</span><span class="cell__value">3.50</span></div>
        <div class="cell" data-cell="c-105-18"><span class="cell__label">c-105-18</span><span class="cell__value">81.86</span></div>
        <div class="cell" data-cell="c-105-19"><span class="cell__label">c-105-19</span><span class="cell__value">25.28</span></div>
      </div>
      <div class="row" data-row="r-106">
        <div class="cell" data-cell="c-106-0"><span class="cell__label">c-106-0</span><span class="cell__value">20.54</span></div>
        <div class="cell" data-cell="c-106-1"><span class="cell__label">c-106-1</span><span class="cell__value">0.57</span></div>
        <div class="cell" data-cell="c-106-2"><span class="cell__label">c-106-2</span><span class="cell__value">56.31</span></div>
        <div class="cell" data-cell="c-106-3"><span class="cell__label">c-106-3</span><span class="cell__value">55.76</span></div>
        <div class="cell" data-cell="c-106-4"><span class="cell__label">c-106-4</span><span class="cell__value">80.03</span></div>
        <div class="cell" data-cell="c-106-5"><span class="cell__label">c-106-5</span><span class="cell__value">30.76</span></div>
        <div class="cell" data-cell="c-106-6"><span class="cell__label">c-106-6</span><span class="cell__value">21.51</span></div>
        <div class="cell" data-cell="c-106-7"><span class="cell__label">c-106-7</span><span class="cell__value">98.52</span></div>
        <div class="cell" data-cell="c-106-8"><span class="cell__label">c-106-8</span><span class="cell__value">50.71</span></div>
        <div class="cell" data-cell="c-106-9"><span class="cell__label">c-106-9</span><span class="cell__value">20.45</span></div>
        <div class="cell" data-cell="c-106-10"><span class="cell__label">c-106-10</span><span class="cell__value">52.91</span></div>
        <div class="cell" data-cell="c-106-11"><span class="cell__label">c-106-11</span><span class="cell__value">55.94</span></div>
        <div class="cell" data-cell="c-106-12"><span class="cell__label">c-106-12</span><span class="cell__value">30.98</span></div>
        <div class="cell" data-cell="c-106-13"><span class="cell__label">c-106-13</span><span class="cell__value">98.56</span></div>
        <div class="cell" data-cell="c-106-14"><span class="cell__label">c-106-14</span><span class="cell__value">40.68</span></div>
        <div class="cell" data-cell="c-106-15"><span class="cell__label">c-106-15</span><span class="cell__value">82.11</span></div>
        <div class="cell" data-cell="c-106-16"><span class="cell__label">c-106-16</span><span class="cell__value">48.00</span></div>
        <div class="cell" data-cell="c-106-17"><span class="cell__label">c-106-17</span><span class="cell__value">18.82</span></div>
        <div class="cell" data-cell="c-106-18"><span class="cell__label">c-106-18</span><span class="cell__value">3.81</span></div>
        <div class="cell" data-cell="c-106-19"><span class="cell__label">c-106-19</span><span class="cell__value">96.89</span></div>
      </div>
      <div class="row" data-row="r-107">
        <div class="cell" data-cell="c-107-0"><span class="cell__label">c-107-0</span><span class="cell__value">41.63</span></div>
        <div class="cell" data-cell="c-107-1"><span class="cell__label">c-107-1</span><span class="cell__value">29.91</span></div>
        <div class="cell" data-cell="c-107-2"><span class="cell__label">c-107-2</span><span class="cell__value">92.07</span></div>
        <div class="cell" data-cell="c-107-3"><span class="cell__label">c-107-3</span><span class="cell__value">15.53</span></div>
        <div class="cell" data-cell="c-107-4"><span class="cell__label">c-107-4</span><span class="cell__value">48.33</span></div>
        <div class="cell" data-cell="c-107-5"><span class="cell__label">c-107-5</span><span class="cell__value">84.80</span></div>
        <div class="cell" data-cell="c-107-6"><span class="cell__label">c-107-6</span><span class="cell__value">60.85</span></div>
        <div class="cell" data-cell="c-107-7"><span class="cell__label">c-107-7</span><span class="cell__value">58.64</span></div>
        <div class="cell" data-cell="c-107-8"><span class="cell__label">c-107-8</span><span class="cell__value">30.26</span></div>
        <div class="cell" data-cell="c-107-9"><span class="cell__label">c-107-9</span><span class="cell__value">93.03</span></div>
        <div class="cell" data-cell="c-107-10"><span class="cell__label">c-107-10</span><span class="cell__value">41.98</span></div>
        <div class="cell" data-cell="c-107-11"><span class="cell__label">c-107-11</span><span class="cell__value">80.31</span></div>
        <div class="cell" data-cell="c-107-12"><span class="cell__label">c-107-12</span><span class="cell__value">79.02</span></div>
        <div class="cell" data-cell="c-107-13"><span class="cell__label">c-107-13</span><span class="cell__value">53.73</span></div>
        <div class="cell" data-cell="c-107-14"><span class="cell__label">c-107-14</span><span class="cell__value">22.11</span></div>
        <div class="cell" data-cell="c-107-15"><span class="cell__label">c-107-15</span><span class="cell__value">34.31</span></div>
        <div class="cell" data-cell="c-107-16"><span class="cell__label">c-107-16</span><span class="cell__value">98.62</span></div>
        <div class="cell" data-cell="c-107-17"><span class="cell__label">c-107-17</span><span class="cell__value">83.44</span></div>
        <div class="cell" data-cell="c-107-18"><span class="cell__label">c-107-18</span><span class="cell__value">63.20</span></div>
        <div class="cell" data-cell="c-107-19"><span class="cell__label">c-107-19</span><span class="cell__value">47.03</span></div>
      </div>
      <div class="row" data-row="r-108">
        <div class="cell" data-cell="c-108-0"><span class="cell__label">c-108-0</span><span class="cell__value">54.71</span></div>
        <div class="cell" data-cell="c-108-1"><span class="cell__label">c-108-1</span><span class="cell__value">62.01</span></div>
        <div class="cell" data-cell="c-108-2"><span class="cell__label">c-108-2</span><span class="cell__value">96.63</span></div>
        <div class="cell" data-cell="c-108-3"><span class="cell__label">c-108-3</span><span class="cell__value">99.97</span></div>
        <div class="cell" data-cell="c-108-4"><span class="cell__label">c-108-4</span><span class="cell__value">10.92</span></div>
        <div class="cell" data-cell="c-108-5"><span class="cell__label">c-108-5</span><span class="cell__value">11.30</span></div>
        <div class="cell" data-cell="c-108-6"><span class="cell__label">c-108-6</span><span class="cell__value">55.33</span></div>
        <div class="cell" data-cell="c-108-7"><span class="cell__label">c-108-7</span><span class="cell__value">87.78</span></div>
        <div class="cell" data-cell="c-108-8"><span class="cell__label">c-108-8</span><span class="cell__value">55.03</span></div>
        <div class="cell" data-cell="c-108-9"><span class="cell__label">c-108-9</span><span class="cell__value">82.30</span></div>
        <div class="cell" data-cell="c-108-10"><span class="cell__label">c-108-10</span><span class="cell__value">12.87</span></div>
        <div class="cell" data-cell="c-108-11"><span class="cell__label">c-108-11</span><span class="cell__value">26.60</span></div>
        <div class="cell" data-cell="c-108-12"><span class="cell__label">c-108-12</span><span class="cell__value">21.01</span></div>
        <div class="cell" data-cell="c-108-13"><span class="cell__label">c-108-13</span><span class="cell__value">94.71</span></div>
        <div class="cell" data-cell="c-108-14"><span class="cell__label">c-108-14</span><span class="cell__value">22.57</span></div>
        <div class="cell" data-cell="c-108-15"><span class="cell__label">c-108-15</span><span class="cell__value">80.11</span></div>
        <div class="cell" data-cell="c-108-16"><span class="cell__label">c-108-16</span><span class="cell__value">41.49</span></div>
        <div class="cell" data-cell="c-108-17"><span class="cell__label">c-108-17</span><span class="cell__value">30.33</span></div>
        <div class="cell" data-cell="c-108-18"><span class="cell__label">c-108-18</span><span class="cell__value">97.95</span></div>
        <div class="cell" data-cell="c-108-19"><span class="cell__label">c-108-19</span><span class="cell__value">74.78</span></div>
      </div>
      <div class="row" data-row="r-109">
        <div class="cell" data-cell="c-109-0"><span class="cell__label">c-109-0</span><span class="cell__value">68.22</span></div>
        <div class="cell" data-cell="c-109-1"><span class="cell__label">c-109-1</span><span class="cell__value">45.93</span></div>
        <div class="cell" data-cell="c-109-2"><span class="cell__label">c-109-2</span><span class="cell__value">19.30</span></div>
        <div class="cell" data-cell="c-109-3"><span class="cell__label">c-109-3</span><span class="cell__value">57.63</span></div>
        <div class="cell" data-cell="c-109-4"><span class="cell__label">c-109-4</span><span class="cell__value">18.43</span></div>
        <div class="cell" data-cell="c-109-5"><span class="cell__label">c-109-5</span><span class="cell__value">5.05</span></div>
        <div class="cell" data-cell="c-109-6"><span class="cell__label">c-109-6</span><span class="cell__value">97.23</span></div>
        <div class="cell" data-cell="c-109-7"><span class="cell__label">c-109-7</span><span class="cell__value">32.27</span></div>
        <div class="cell" data-cell="c-109-8"><span class="cell__label">c-109-8</span><span class="cell__value">24.98</span></div>
        <div class="cell" data-cell="c-109-9"><span class="cell__label">c-109-9</span><span class="cell__value">58.58</span></div>
        <div class="cell" data-cell="c-109-10"><span class="cell__label">c-109-10</span><span class="cell__value">21.43</span></div>
        <div class="cell" data-cell="c-109-11"><span class="cell__label">c-109-11</span><span class="cell__value">72.34</span></div>
        <div class="cell" data-cell="c-109-12"><span class="cell__label">c-109-12</span><span class="cell__value">76.38</span></div>
        <div class="cell" data-cell="c-109-13"><span class="cell__label">c-109-13</span><span class="cell__value">43.29</span></div>
        <div class="cell" data-cell="c-109-14"><span class="cell__label">c-109-14</span><span class="cell__value">20.23</span></div>
        <div class="cell" data-cell="c-109-15"><span class="cell__label">c-109-15</span><span class="cell__value">72.02</span></div>
        <div class="cell" data-cell="c-109-16"><span class="cell__label">c-109-16</span><span class="cell__value">29.56</span></div>
        <div class="cell" data-cell="c-109-17"><span class="cell__label">c-109-17</span><span class="cell__value">33.95</span></div>
        <div class="cell" data-cell="c-109-18"><span class="cell__label">c-109-18</span><span class="cell__value">65.72</span></div>
        <div class="cell" data-cell="c-109-19"><span class="cell__label">c-109-19</span><span class="cell__value">56.70</span></div>
      </div>
      <div class="row" data-row="r-110">
        <div class="cell" data-cell="c-110-0"><span class="cell__label">c-110-0</span><span class="cell__value">90.00</span></div>
        <div class="cell" data-cell="c-110-1"><span class="cell__label">c-110-1</span><span class="cell__value">83.41</span></div>
        <div class="cell" data-cell="c-110-2"><span class="cell__label">c-110-2</span><span class="cell__value">37.38</span></div>
        <div class="cell" data-cell="c-110-3"><span class="cell__label">c-110-3</span><span class="cell__value">17.39</span></div>
        <div class="cell" data-cell="c-110-4"><span class="cell__label">c-110-4</span><span class="cell__value">90.48</span></div>
        <div class="cell" data-cell="c-110-5"><span class="cell__label">c-110-5</span><span class="cell__value">41.72</span></div>
        <div class="cell" data-cell="c-110-6"><span class="cell__label">c-110-6</span><span class="cell__value">10.47</span></div>
        <div class="cell" data-cell="c-110-7"><span class="cell__label">c-110-7</span><span class="cell__value">66.48</span></div>
        <div class="cell" data-cell="c-110-8"><span class="cell__label">c-110-8</span><span class="cell__value">90.43</span></div>
        <div class="cell" data-cell="c-110-9"><span class="cell__label">c-110-9</span><span class="cell__value">1.34</span></div>
        <div class="cell" data-cell="c-110-10"><span class="cell__label">c-110-10</span><span class="cell__value">65.51</span></div>
        <div class="cell" data-cell="c-110-11"><span class="cell__label">c-110-11</span><span class="cell__value">21.51</span></div>
        <div class="cell" data-cell="c-110-12"><span class="cell__label">c-110-12</span><span class="cell__value">44.22</span></div>
        <div class="cell" data-cell="c-110-13"><span class="cell__label">c-110-13</span><span class="cell__value">24.01</span></div>
        <div class="cell" data-cell="c-110-14"><span class="cell__label">c-110-14</span><span class="cell__value">72.92</span></div>
        <div class="cell" data-cell="c-110-15"><span class="cell__label">c-110-15</span><span class="cell__value">35.74</span></div>
        <div class="cell" data-cell="c-110-16"><span class="cell__label">c-110-16</span><span class="cell__value">24.57</span></div>
        <div class="cell" data-cell="c-110-17"><span class="cell__label">c-110-17</span><span class="cell__value">71.99</span></div>
        <div class="cell" data-cell="c-110-18"><span class="cell__label">c-110-18</span><span class="cell__value">23.95</span></div>
        <div class="cell" data-cell="c-110-19"><span class="cell__label">c-110-19</span><span class="cell__value">72.88</span></div>
      </div>
      <div class="row" data-row="r-111">
        <div class="cell" data-cell="c-111-0"><span class="cell__label">c-111-0</span><span class="cell__value">22.83</span></div>
        <div class="cell" data-cell="c-111-1"><span class="cell__label">c-111-1</span><span class="cell__value">66.67</span></div>
        <div class="cell" data-cell="c-111-2"><span class="cell__label">c-111-2</span><span class="cell__value">29.17</span></div>
        <div class="cell" data-cell="c-111-3"><span class="cell__label">c-111-3</span><span class="cell__value">61.76</span></div>
        <div class="cell" data-cell="c-111-4"><span class="cell__label">c-111-4</span><span class="cell__value">18.61</span></div>
        <div class="cell" data-cell="c-111-5"><span class="cell__label">c-111-5</span><span class="cell__value">68.10</span></div>
        <div class="cell" data-cell="c-111-6"><span class="cell__label">c-111-6</span><span class="cell__value">96.60</span></div>
        <div class="cell" data-cell="c-111-7"><span class="cell__label">c-111-7</span><span class="cell__value">44.44</span></div>
        <div class="cell" data-cell="c-111-8"><span class="cell__label">c-111-8</span><span class="cell__value">9.46</span></div>
        <div class="cell" data-cell="c-111-9"><span class="cell__label">c-111-9</span><span class="cell__value">17.86</span></div>
        <div class="cell" data-cell="c-111-10"><span class="cell__label">c-111-10</span><span class="cell__value">98.54</span></div>
        <div class="cell" data-cell="c-111-11"><span class="cell__label">c-111-11</span><span class="cell__value">32.06</span></div>
        <div class="cell" data-cell="c-111-12"><span class="cell__label">c-111-12</span><span class="cell__value">40.92</span></div>
        <div class="cell" data-cell="c-111-13"><span class="cell__label">c-111-13</span><span class="cell__value">69.11</span></div>
        <div class="cell" data-cell="c-111-14"><span class="cell__label">c-111-14</span><span class="cell__value">66.20</span></div>
        <div class="cell" data-cell="c-111-15"><span class="cell__label">c-111-15</span><span class="cell__value">1.12</span></div>
        <div class="cell" data-cell="c-111-16"><span class="cell__label">c-111-16</span><span class="cell__value">16.95</span></div>
        <div class="cell" data-cell="c-111-17"><span class="cell__label">c-111-17</span><span class="cell__value">57.82</span></div>
        <div class="cell" data-cell="c-111-18"><span class="cell__label">c-111-18</span><span class="cell__value">13.83</span></div>
        <div class="cell" data-cell="c-111-19"><span class="cell__label">c-111-19</span><span class="cell__value">21.56</span></div>
      </div>
      <div class="row" data-row="r-112">
        <div class="cell" data-cell="c-112-0"><span class="cell__label">c-112-0</span><span class="cell__value">46.23</span></div>
        <div class="cell" data-cell="c-112-1"><span class="cell__label">c-112-1</span><span class="cell__value">53.85</span></div>
        <div class="cell" data-cell="c-112-2"><span class="cell__label">c-112-2</span><span class="cell__value">24.12</span></div>
        <div class="cell" data-cell="c-112-3"><span class="cell__label">c-112-3</span><span class="cell__value">20.33</span></div>
        <div class="cell" data-cell="c-112-4"><span class="cell__label">c-112-4</span><span class="cell__value">91.52</span></div>
        <div class="cell" data-cell="c-112-5"><span class="cell__label">c-112-5</span><span class="cell__value">15.75</span></div>
        <div class="cell" data-cell="c-112-6"><span class="cell__label">c-112-6</span><span class="cell__value">16.83</span></div>
        <div class="cell" data-cell="c-112-7"><span class="cell__label">c-112-7</span><span class="cell__value">53.70</span></div>
        <div class="cell" data-cell="c-112-8"><span class="cell__label">c-112-8</span><span class="cell__value">77.71</span></div>
        <div class="cell" data-cell="c-112-9"><span class="cell__label">c-112-9</span><span class="cell__value">53.51</span></div>
        <div class="cell" data-cell="c-112-10"><span class="cell__label">c-112-10</span><span class="cell__value">1.03</span></div>
        <div class="cell" data-cell="c-112-11"><span class="cell__label">c-112-11</span><span class="cell__value">51.37</span></div>
        <div class="cell" data-cell="c-112-12"><span class="cell__label">c-112-12</span><span class="cell__value">85.54</span></div>
        <div class="cell" data-cell="c-112-13"><span class="cell__label">c-112-13</span><span class="cell__value">51.88</span></div>
        <div class="cell" data-cell="c-112-14"><span class="cell__label">c-112-14</span><span class="cell__value">43.58</span></div>
        <div class="cell" data-cell="c-112-15"><span class="cell__label">c-112-15</span><span class="cell__value">1.25</span></div>
        <div class="cell" data-cell="c-112-16"><span class="cell__label">c-112-16</span><span class="cell__value">15.67</span></div>
        <div class="cell" data-cell="c-112-17"><span class="cell__label">c-112-17</span><span class="cell__value">68.29</span></div>
        <div class="cell" data-cell="c-112-18"><span class="cell__label">c-112-18</span><span class="cell__value">38.38</span></div>
        <div class="cell" data-cell="c-112-19"><span class="cell__label">c-112-19</span><span class="cell__value">27.81</span></div>
      </div>
      <div class="row" data-row="r-113">
        <div class="cell" data-cell="c-113-0"><span class="cell__label">c-113-0</span><span class="cell__value">66.81</span></div>
        <div class="cell" data-cell="c-113-1"><span class="cell__label">c-113-1</span><span class="cell__value">68.66</span></div>
        <div class="cell" data-cell="c-113-2"><span class="cell__label">c-113-2</span><span class="cell__value">40.84</span></div>
        <div class="cell" data-cell="c-113-3"><span class="cell__label">c-113-3</span><span class="cell__value">73.96</span></div>
        <div class="cell" data-cell="c-113-4"><span class="cell__label">c-113-4</span><span class="cell__value">49.67</span></div>
        <div class="cell" data-cell="c-113-5"><span class="cell__label">c-113-5</span><span class="cell__value">93.48</span></div>
        <div class="cell" data-cell="c-113-6"><span class="cell__label">c-113-6</span><span class="cell__value">38.84</span></div>
        <div class="cell" data-cell="c-113-7"><span class="cell__label">c-113-7</span><span class="cell__value">12.36</span></div>
        <div class="cell" data-cell="c-113-8"><span class="cell__label">c-113-8</span><span class="cell__value">95.16</span></div>
        <div class="cell" data-cell="c-113-9"><span class="cell__label">c-113-9</span><span class="cell__value">74.47</span></div>
        <div class="cell" data-cell="c-113-10"><span class="cell__label">c-113-10</span><span class="cell__value">55.76</span></div>
        <div class="cell" data-cell="c-113-11"><span class="cell__label">c-113-11</span><span class="cell__value">90.31</span></div>
        <div class="cell" data-cell="c-113-12"><span class="cell__label">c-113-12</span><span class="cell__value">65.72</span></div>
        <div class="cell" data-cell="c-113-13"><span class="cell__label">c-113-13</span><span class="cell__value">13.66</span></div>
        <div class="cell" data-cell="c-113-14"><span class="cell__label">c-113-14</span><span class="cell__value">42.15</span></div>
        <div class="cell" data-cell="c-113-15"><span class="cell__label">c-113-15</span><span class="cell__value">24.31</span></div>
        <div class="cell" data-cell="c-113-16"><span class="cell__label">c-113-16</span><span class="cell__value">59.92</span></div>
        <div class="cell" data-cell="c-113-17"><span class="cell__label">c-113-17</span><span class="cell__value">92.00</span></div>
        <div class="cell" data-cell="c-113-18"><span class="cell__label">c-113-18</span><span class="cell__value">25.50</span></div>
        <div class="cell" data-cell="c-113-19"><span class="cell__label">c-113-19</span><span class="cell__value">18.69</span></div>
      </div>
      <div class="row" data-row="r-114">
        <div class="cell" data-cell="c-114-0"><span class="cell__label">c-114-0</span><span class="cell__value">20.34</span></div>
        <div class="cell" data-cell="c-114-1"><span class="cell__label">c-114-1</span><span class="cell__value">95.62</span></div>
        <div class="cell" data-cell="c-114-2"><span class="cell__label">c-114-2</span><span class="cell__value">53.82</span></div>
        <div class="cell" data-cell="c-114-3"><span class="cell__label">c-114-3</span><span class="cell__value">25.14</span></div>
        <div class="cell" data-cell="c-114-4"><span class="cell__label">c-114-4</span><span class="cell__value">30.83</span></div>
        <div class="cell" data-cell="c-114-5"><span class="cell__label">c-114-5</span><span class="cell__value">65.19</span></div>
        <div class="cell" data-cell="c-114-6"><span class="cell__label">c-114-6</span><span class="cell__value">77.08</span></div>
        <div class="cell" data-cell="c-114-7"><span class="cell__label">c-114-7</span><span class="cell__value">84.65</span></div>
        <div class="cell" data-cell="c-114-8"><span class="cell__label">c-114-8</span><span class="cell__value">79.49</span></div>
        <div class="cell" data-cell="c-114-9"><span class="cell__label">c-114-9</span><span class="cell__value">93.81</span></div>
        <div class="cell" data-cell="c-114-10"><span class="cell__label">c-114-10</span><span class="cell__value">48.06</span></div>
        <div class="cell" data-cell="c-114-11"><span class="cell__label">c-114-11</span><span class="cell__value">92.90</span></div>
        <div class="cell" data-cell="c-114-12"><span class="cell__label">c-114-12</span><span class="cell__value">10.05</span></div>
        <div class="cell" data-cell="c-114-13"><span class="cell__label">c-114-13</span><span class="cell__value">95.99</span></div>
        <div class="cell" data-cell="c-114-14"><span class="cell__label">c-114-14</span><span class="cell__value">61.28</span></div>
        <div class="cell" data-cell="c-114-15"><span class="cell__label">c-114-15</span><span class="cell__value">57.66</span></div>
        <div class="cell" data-cell="c-114-16"><span class="cell__label">c-114-16</span><span class="cell__value">52.64</span></div>
        <div class="cell" data-cell="c-114-17"><span class="cell__label">c-114-17</span><span class="cell__value">48.64</span></div>
        <div class="cell" data-cell="c-114-18"><span class="cell__label">c-114-18</span><span class="cell__value">3.92</span></div>
        <div class="cell" data-cell="c-114-19"><span class="cell__label">c-114-19</span><span class="cell__value">39.09</span></div>
      </div>
      <div class="row" data-row="r-115">
        <div class="cell" data-cell="c-115-0"><span class="cell__label">c-115-0</span><span class="cell__value">56.67</span></div>
        <div class="cell" data-cell="c-115-1"><span class="cell__label">c-115-1</span><span class="cell__value">0.42</span></div>
        <div class="cell" data-cell="c-115-2"><span class="cell__label">c-115-2</span><span class="cell__value">49.51</span></div>
        <div class="cell" data-cell="c-115-3"><span class="cell__label">c-115-3</span><span class="cell__value">41.35</span></div>
        <div class="cell" data-cell="c-115-4"><span class="cell__label">c-115-4</span><span class="cell__value">71.68</span></div>
        <div class="cell" data-cell="c-115-5"><span class="cell__label">c-115-5</span><span class="cell__value">5.82</span></div>
        <div class="cell" data-cell="c-115-6"><span class="cell__label">c-115-6</span><span class="cell__value">7.97</span></div>
        <div class="cell" data-cell="c-115-7"><span class="cell__label">c-115-7</span><span class="cell__value">15.80</span></div>
        <div class="cell" data-cell="c-115-8"><span class="cell__label">c-115-8</span><span class="cell__value">95.45</span></div>
        <div class="cell" data-cell="c-115-9"><span class="cell__label">c-115-9</span><span class="cell__value">89.69</span></div>
        <div class="cell" data-cell="c-115-10"><span class="cell__label">c-115-10</span><span class="cell__value">42.09</span></div>
        <div class="cell" data-cell="c-115-11"><span class="cell__label">c-115-11</span><span class="cell__value">61.16</span></div>
        <div class="cell" data-cell="c-115-12"><span class="cell__label">c-115-12</span><span class="cell__value">8.98</span></div>
        <div class="cell" data-cell="c-115-13"><span class="cell__label">c-115-13</span><span class="cell__value">17.32</span></div>
        <div class="cell" data-cell="c-115-14"><span class="cell__label">c-115-14</span><span class="cell__value">87.52</span></div>
        <div class="cell" data-cell="c-115-15"><span class="cell__label">c-115-15</span><span class="cell__value">49.60</span></div>
        <div class="cell" data-cell="c-115-16"><span class="cell__label">c-115-16</span><span class="cell__value">34.38</span></div>
        <div class="cell" data-cell="c-115-17"><span class="cell__label">c-115-17</span><span class="cell__value">94.79</span></div>
        <div class="cell" data-cell="c-115-18"><span class="cell__label">c-115-18</span><span class="cell__value">46.95</span></div>
        <div class="cell" data-cell="c-115-19"><span class="cell__label">c-115-19</span><span class="cell__value">75.22</span></div>
      </div>
      <div class="row" data-row="r-116">
        <div class="cell" data-cell="c-116-0"><span class="cell__label">c-116-0</span><span class="cell__value">94.07</span></div>
        <div class="cell" data-cell="c-116-1"><span class="cell__label">c-116-1</span><span class="cell__value">17.06</span></div>
        <div class="cell" data-cell="c-116-2"><span class="cell__label">c-116-2</span><span class="cell__value">43.22</span></div>
        <div class="cell" data-cell="c-116-3"><span class="cell__label">c-116-3</span><span class="cell__value">74.42</span></div>
        <div class="cell" data-cell="c-116-4"><span class="cell__label">c-116-4</span><span class="cell__value">95.41</span></div>
        <div class="cell" data-cell="c-116-5"><span class="cell__label">c-116-5</span><span class="cell__value">49.79</span></div>
        <div class="cell" data-cell="c-116-6"><span class="cell__label">c-116-6</span><span class="cell__value">50.40</span></div>
        <div class="cell" data-cell="c-116-7"><span class="cell__label">c-116-7</span><span class="cell__value">54.86</span></div>
        <div class="cell" data-cell="c-116-8"><span class="cell__label">c-116-8</span><span class="cell__value">20.93</span></div>
        <div class="cell" data-cell="c-116-9"><span class="cell__label">c-116-9</span><span class="cell__value">37.87</span></div>
        <div class="cell" data-cell="c-116-10"><span class="cell__label">c-116-10</span><span class="cell__value">50.90</span></div>
        <div class="cell" data-cell="c-116-11"><span class="cell__label">c-116-11</span><span class="cell__value">30.28</span></div>
        <div class="cell" data-cell="c-116-12"><span class="cell__label">c-116-12</span><span class="cell__value">3.42</span></div>
        <div class="cell" data-cell="c-116-13"><span class="cell__label">c-116-13</span><span class="cell__value">34.12</span></div>
        <div class="cell" data-cell="c-116-14"><span class="cell__label">c-116-14</span><span class="cell__value">70.34</span></div>
        <div class="cell" data-cell="c-116-15"><span class="cell__label">c-116-15</span><span class="cell__value">70.26</span></div>
        <div class="cell" data-cell="c-116-16"><span class="cell__label">c-116-16</span><span class="cell__value">17.20</span></div>
        <div class="cell" data-cell="c-116-17"><span class="cell__label">c-116-17</span><span class="cell__value">42.92</span></div>
        <div class="cell" data-cell="c-116-18"><span class="cell__label">c-116-18</span><span class="cell__value">89.69</span></div>
        <div class="cell" data-cell="c-116-19"><span class="cell__label">c-116-19</span><span class="cell__value">11.87</span></div>
      </div>
      <div class="row" data-row="r-117">
        <div class="cell" data-cell="c-117-0"><span class="cell__label">c-117-0</span><span class="cell__value">89.87</span></div>
        <div class="cell" data-cell="c-117-1"><span class="cell__label">c-117-1</span><span class="cell__value">46.55</span></div>
        <div class="cell" data-cell="c-117-2"><span class="cell__label">c-117-2</span><span class="cell__value">70.78</span></div>
        <div class="cell" data-cell="c-117-3"><span class="cell__label">c-117-3</span><span class="cell__value">49.51</span></div>
        <div class="cell" data-cell="c-117-4"><span class="cell__label">c-117-4</span><span class="cell__value">58.29</span></div>
        <div class="cell" data-cell="c-117-5"><span class="cell__label">c-117-5</span><span class="cell__value">93.13</span></div>
        <div class="cell" data-cell="c-117-6"><span class="cell__label">c-117-6</span><span class="cell__value">73.69</span></div>
        <div class="cell" data-cell="c-117-7"><span class="cell__label">c-117-7</span><span class="cell__value">0.92</span></div>
        <div class="cell" data-cell="c-117-8"><span class="cell__label">c-117-8</span><span class="cell__value">97.45</span></div>
        <div class="cell" data-cell="c-117-9"><span class="cell__label">c-117-9</span><span class="cell__value">50.47</span></div>
        <div class="cell" data-cell="c-117-10"><span class="cell__label">c-117-10</span><span class="cell__value">11.18</span></div>
        <div class="cell" data-cell="c-117-11"><span class="cell__label">c-117-11</span><span class="cell__value">64.77</span></div>
        <div class="cell" data-cell="c-117-12"><span class="cell__label">c-117-12</span><span class="cell__value">10.30</span></div>
        <div class="cell" data-cell="c-117-13"><span class="cell__label">c-117-13</span><span class="cell__value">10.50</span></div>
        <div class="cell" data-cell="c-117-14"><span class="cell__label">c-117-14</span><span class="cell__value">14.41</span></div>
        <div class="cell" data-cell="c-117-15"><span class="cell__label">c-117-15</span><span class="cell__value">52.97</span></div>
        <div class="cell" data-cell="c-117-16"><span class="cell__label">c-117-16</span><span class="cell__value">19.93</span></div>
        <div class="cell" data-cell="c-117-17"><span class="cell__label">c-117-17</span><span class="cell__value">23.24</span></div>
        <div class="cell" data-cell="c-117-18"><span class="cell__label">c-117-18</span><span class="cell__value">88.52</span></div>
        <div class="cell" data-cell="c-117-19"><span class="cell__label">c-117-19</span><span class="cell__value">71.46</span></div>
      </div>
      <div class="row" data-row="r-118">
        <div class="cell" data-cell="c-118-0"><span class="cell__label">c-118-0</span><span class="cell__value">50.85</span></div>
        <div class="cell" data-cell="c-118-1"><span class="cell__label">c-118-1</span><span class="cell__value">50.41</span></div>
        <div class="cell" data-cell="c-118-2"><span class="cell__label">c-118-2</span><span class="cell__value">71.97</span></div>
        <div class="cell" data-cell="c-118-3"><span class="cell__label">c-118-3</span><span class="cell__value">11.72</span></div>
        <div class="cell" data-cell="c-118-4"><span class="cell__label">c-118-4</span><span class="cell__value">77.76</span></div>
        <div class="cell" data-cell="c-118-5"><span class="cell__label">c-118-5</span><span class="cell__value">24.35</span></div>
        <div class="cell" data-cell="c-118-6"><span class="cell__label">c-118-6</span><span class="cell__value">50.76</span></div>
        <div class="cell" data-cell="c-118-7"><span class="cell__label">c-118-7</span><span class="cell__value">67.72</span></div>
        <div class="cell" data-cell="c-118-8"><span class="cell__label">c-118-8</span><span class="cell__value">77.24</span></div>
        <div class="cell" data-cell="c-118-9"><span class="cell__label">c-118-9</span><span class="cell__value">28.03</span></div>
        <div class="cell" data-cell="c-118-10"><span class="cell__label">c-118-10</span><span class="cell__value">96.11</span></div>
        <div class="cell" data-cell="c-118-11"><span class="cell__label">c-118-11</span><span class="cell__value">87.63</span></div>
        <div class="cell" data-cell="c-118-12"><span class="cell__label">c-118-12</span><span class="cell__value">43.60</span></div>
        <div class="cell" data-cell="c-118-13"><span class="cell__label">c-118-13</span><span class="cell__value">59.50</span></div>
        <div class="cell" data-cell="c-118-14"><span class="cell__label">c-118-14</span><span class="cell__value">77.95</span></div>
        <div class="cell" data-cell="c-118-15"><span class="cell__label">c-118-15</span><span class="cell__value">6.76</span></div>
        <div class="cell" data-cell="c-118-16"><span class="cell__label">c-118-16</span><span class="cell__value">14.14</span></div>
        <div class="cell" data-cell="c-118-17"><span class="cell__label">c-118-17</span><span class="cell__value">2.85</span></div>
        <div class="cell" data-cell="c-118-18"><span class="cell__label">c-118-18</span><span class="cell__value">39.14</span></div>
        <div class="cell" data-cell="c-118-19"><span class="cell__label">c-118-19</span><span class="cell__value">53.99</span></div>
      </div>
      <div class="row" data-row="r-119">
        <div class="cell" data-cell="c-119-0"><span class="cell__label">c-119-0</span><span class="cell__value">93.19</span></div>
        <div class="cell" data-cell="c-119-1"><span class="cell__label">c-119-1</span><span class="cell__value">90.54</span></div>
        <div class="cell" data-cell="c-119-2"><span class="cell__label">c-119-2</span><span class="cell__value">69.03</span></div>
        <div class="cell" data-cell="c-119-3"><span class="cell__label">c-119-3</span><span class="cell__value">96.03</span></div>
        <div class="cell" data-cell="c-119-4"><span class="cell__label">c-119-4</span><span class="cell__value">34.55</span></div>
        <div class="cell" data-cell="c-119-5"><span class="cell__label">c-119-5</span><span class="cell__value">83.37</span></div>
        <div class="cell" data-cell="c-119-6"><span class="cell__label">c-119-6</span><span class="cell__value">29.11</span></div>
        <div class="cell" data-cell="c-119-7"><span class="cell__label">c-119-7</span><span class="cell__value">99.56</span></div>
        <div class="cell" data-cell="c-119-8"><span class="cell__label">c-119-8</span><span class="cell__value">99.30</span></div>
        <div class="cell" data-cell="c-119-9"><span class="cell__label">c-119-9</span><span class="cell__value">36.70</span></div>
        <div class="cell" data-cell="c-119-10"><span class="cell__label">c-119-10</span><span class="cell__value">48.65</span></div>
        <div class="cell" data-cell="c-119-11"><span class="cell__label">c-119-11</span><span class="cell__value">2.71</span></div>
        <div class="cell" data-cell="c-119-12"><span class="cell__label">c-119-12</span><span class="cell__value">57.85</span></div>
        <div class="cell" data-cell="c-119-13"><span class="cell__label">c-119-13</span><span class="cell__value">73.08</span></div>
        <div class="cell" data-cell="c-119-14"><span class="cell__label">c-119-14</span><span class="cell__value">82.92</span></div>
        <div class="cell" data-cell="c-119-15"><span class="cell__label">c-119-15</span><span class="cell__value">44.81</span></div>
        <div class="cell" data-cell="c-119-16"><span class="cell__label">c-119-16</span><span class="cell__value">61.12</span></div>
        <div class="cell" data-cell="c-119-17"><span class="cell__label">c-119-17</span><span class="cell__value">96.24</span></div>
        <div class="cell" data-cell="c-119-18"><span class="cell__label">c-119-18</span><span class="cell__value">28.98</span></div>
        <div class="cell" data-cell="c-119-19"><span class="cell__label">c-119-19</span><span class="cell__value">93.06</span></div>
      </div>
      <div class="row" data-row="r-120">
        <div class="cell" data-cell="c-120-0"><span class="cell__label">c-120-0</span><span class="cell__value">37.85</span></div>
        <div class="cell" data-cell="c-120-1"><span class="cell__label">c-120-1</span><span class="cell__value">42.77</span></div>
        <div class="cell" data-cell="c-120-2"><span class="cell__label">c-120-2</span><span class="cell__value">93.16</span></div>
        <div class="cell" data-cell="c-120-3"><span class="cell__label">c-120-3</span><span class="cell__value">84.86</span></div>
        <div class="cell" data-cell="c-120-4"><span class="cell__label">c-120-4</span><span class="cell__value">44.44</span></div>
        <div class="cell" data-cell="c-120-5"><span class="cell__label">c-120-5</span><span class="cell__value">5.63</span></div>
        <div class="cell" data-cell="c-120-6"><span class="cell__label">c-120-6</span><span class="cell__value">52.60</span></div>
        <div class="cell" data-cell="c-120-7"><span class="cell__label">c-120-7</span><span class="cell__value">57.01</span></div>
        <div class="cell" data-cell="c-120-8"><span class="cell__label">c-120-8</span><span class="cell__value">67.94</span></div>
        <div class="cell" data-cell="c-120-9"><span class="cell__label">c-120-9</span><span class="cell__value">57.65</span></div>
        <div class="cell" data-cell="c-120-10"><span class="cell__label">c-120-10</span><span class="cell__value">30.82</span></div>
        <div class="cell" data-cell="c-120-11"><span class="cell__label">c-120-11</span><span class="cell__value">51.72</span></div>
        <div class="cell" data-cell="c-120-12"><span class="cell__label">c-120-12</span><span class="cell__value">14.51</span></div>
        <div class="cell" data-cell="c-120-13"><span class="cell__label">c-120-13</span><span class="cell__value">59.47</span></div>
        <div class="cell" data-cell="c-120-14"><span class="cell__label">c-120-14</span><span class="cell__value">82.27</span></div>
        <div class="cell" data-cell="c-120-15"><span class="cell__label">c-120-15</span><span class="cell__value">89.77</span></div>
        <div class="cell" data-cell="c-120-16"><span class="cell__label">c-120-16</span><span class="cell__value">84.38</span></div>
        <div class="cell" data-cell="c-120-17"><span class="cell__label">c-120-17</span><span class="cell__value">57.38</span></div>
        <div class="cell" data-cell="c-120-18"><span class="cell__label">c-120-18</span><span class="cell__value">44.03</span></div>
        <div class="cell" data-cell="c-120-19"><span class="cell__label">c-120-19</span><span class="cell__value">33.77</span></div>
      </div>
      <div class="row" data-row="r-121">
        <div class="cell" data-cell="c-121-0"><span class="cell__label">c-121-0</span><span class="cell__value">90.42</span></div>
        <div class="cell" data-cell="c-121-1"><span class="cell__label">c-121-1</span><span class="cell__value">94.84</span></div>
        <div class="cell" data-cell="c-121-2"><span class="cell__label">c-121-2</span><span class="cell__value">2.69</span></div>
        <div class="cell" data-cell="c-121-3"><span class="cell__label">c-121-3</span><span class="cell__value">80.08</span></div>
        <div class="cell" data-cell="c-121-4"><span class="cell__label">c-121-4</span><span class="cell__value">60.60</span></div>
        <div class="cell" data-cell="c-121-5"><span class="cell__label">c-121-5</span><span class="cell__value">42.71</span></div>
        <div class="cell" data-cell="c-121-6"><span class="cell__label">c-121-6</span><span class="cell__value">81.12</span></div>
        <div class="cell" data-cell="c-121-7"><span class="cell__label">c-121-7</span><span class="cell__value">31.20</span></div>
        <div class="cell" data-cell="c-121-8"><span class="cell__label">c-121-8</span><span class="cell__value">69.05</span></div>
        <div class="cell" data-cell="c-121-9"><span class="cell__label">c-121-9</span><span class="cell__value">79.16</span></div>
        <div class="cell" data-cell="c-121-10"><span class="cell__label">c-121-10</span><span class="cell__value">83.96</span></div>
        <div class="cell" data-cell="c-121-11"><span class="cell__label">c-121-11</span><span class="cell__value">61.06</span></div>
        <div class="cell" data-cell="c-121-12"><span class="cell__label">c-121-12</span><span class="cell__value">23.32</span></div>
        <div class="cell" data-cell="c-121-13"><span class="cell__label">c-121-13</span><span class="cell__value">72.37</span></div>
        <div class="cell" data-cell="c-121-14"><span class="cell__label">c-121-14</span><span class="cell__value">38.17</span></div>
        <div class="cell" data-cell="c-121-15"><span class="cell__label">c-121-15</span><span class="cell__value">93.93</span></div>
        <div class="cell" data-cell="c-121-16"><span class="cell__label">c-121-16</span><span class="cell__value">34.30</span></div>
        <div class="cell" data-cell="c-121-17"><span class="cell__label">c-121-17</span><span class="cell__value">80.38</span></div>
        <div class="cell" data-cell="c-121-18"><span class="cell__label">c-121-18</span><span class="cell__value">37.55</span></div>
        <div class="cell" data-cell="c-121-19"><span class="cell__label">c-121-19</span><span class="cell__value">16.28</span></div>
      </div>
      <div class="row" data-row="r-122">
        <div class="cell" data-cell="c-122-0"><span class="cell__label">c-122-0</span><span class="cell__value">66.01</span></div>
        <div class="cell" data-cell="c-122-1"><span class="cell__label">c-122-1</span><span class="cell__value">16.28</span></div>
        <div class="cell" data-cell="c-122-2"><span class="cell__label">c-122-2</span><span class="cell__value">40.29</span></div>
        <div class="cell" data-cell="c-122-3"><span class="cell__label">c-122-3</span><span class="cell__value">73.61</span></div>
        <div class="cell" data-cell="c-122-4"><span class="cell__label">c-122-4</span><span class="cell__value">90.23</span></div>
        <div class="cell" data-cell="c-122-5"><span class="cell__label">c-122-5</span><span class="cell__value">12.02</span></div>
        <div class="cell" data-cell="c-122-6"><span class="cell__label">c-122-6</span><span class="cell__value">97.93</span></div>
        <div class="cell" data-cell="c-122-7"><span class="cell__label">c-122-7</span><span class="cell__value">80.22</span></div>
        <div class="cell" data-cell="c-122-8"><span class="cell__label">c-122-8</span><span class="cell__value">4.11</span></div>
        <div class="cell" data-cell="c-122-9"><span class="cell__label">c-122-9</span><span class="cell__value">80.66</span></div>
        <div class="cell" data-cell="c-122-10"><span class="cell__label">c-122-10</span><span class="cell__value">78.79</span></div>
        <div class="cell" data-cell="c-122-11"><span class="cell__label">c-122-11</span><span class="cell__value">78.01</span></div>
        <div class="cell" data-cell="c-122-12"><span class="cell__label">c-122-12</span><span class="cell__value">54.12</span></div>
        <div class="cell" data-cell="c-122-13"><span class="cell__label">c-122-13</span><span class="cell__value">49.12</span></div>
        <div class="cell" data-cell="c-122-14"><span class="cell__label">c-122-14</span><span class="cell__value">47.99</span></div>
        <div class="cell" data-cell="c-122-15"><span class="cell__label">c-122-15</span><span class="cell__value">51.88</span></div>
        <div class="cell" data-cell="c-122-16"><span class="cell__label">c-122-16</span><span class="cell__value">83.17</span></div>
        <div class="cell" data-cell="c-122-17"><span class="cell__label">c-122-17</span><span class="cell__value">91.44</span></div>
        <div class="cell" data-cell="c-122-18"><span class="cell__label">c-122-18</span><span class="cell__value">43.93</span></div>
        <div class="cell" data-cell="c-122-19"><span class="cell__label">c-122-19</span><span class="cell__value">72.33</span></div>
      </div>
      <div class="row" data-row="r-123">
        <div class="cell" data-cell="c-123-0"><span class="cell__label">c-123-0</span><span class="cell__value">16.03</span></div>
        <div class="cell" data-cell="c-123-1"><span class="cell__label">c-123-1</span><span class="cell__value">41.95</span></div>
        <div class="cell" data-cell="c-123-2"><span class="cell__label">c-123-2</span><span class="cell__value">21.00</span></div>
        <div class="cell" data-cell="c-123-3"><span class="cell__label">c-123-3</span><span class="cell__value">3.28</span></div>
        <div class="cell" data-cell="c-123-4"><span class="cell__label">c-123-4</span><span class="cell__value">2.50</span></div>
        <div class="cell" data-cell="c-123-5"><span class="cell__label">c-123-5</span><span class="cell__value">28.02</span></div>
        <div class="cell" data-cell="c-123-6"><span class="cell__label">c-123-6</span><span class="cell__value">38.07</span></div>
        <div class="cell" data-cell="c-123-7"><span class="cell__label">c-123-7</span><span class="cell__value">63.96</span></div>
        <div class="cell" data-cell="c-123-8"><span class="cell__label">c-123-8</span><span class="cell__value">1.52</span></div>
        <div class="cell" data-cell="c-123-9"><span class="cell__label">c-123-9</span><span class="cell__value">99.72</span></div>
        <div class="cell" data-cell="c-123-10"><span class="cell__label">c-123-10</span><span class="cell__value">56.27</span></div>
        <div class="cell" data-cell="c-123-11"><span class="cell__label">c-123-11</span><span class="cell__value">99.91</span></div>
        <div class="cell" data-cell="c-123-12"><span class="cell__label">c-123-12</span><span class="cell__value">90.65</span></div>
        <div class="cell" data-cell="c-123-13"><span class="cell__label">c-123-13</span><span class="cell__value">3.41</span></div>
        <div class="cell" data-cell="c-123-14"><span class="cell__label">c-123-14</span><span class="cell__value">62.78</span></div>
        <div class="cell" data-cell="c-123-15"><span class="cell__label">c-123-15</span><span class="cell__value">77.48</span></div>
        <div class="cell" data-cell="c-123-16"><span class="cell__label">c-123-16</span><span class="cell__value">40.21</span></div>
        <div class="cell" data-cell="c-123-17"><span class="cell__label">c-123-17</span><span class="cell__value">7.67</span></div>
        <div class="cell" data-cell="c-123-18"><span class="cell__label">c-123-18</span><span class="cell__value">53.66</span></div>
        <div class="cell" data-cell="c-123-19"><span class="cell__label">c-123-19</span><span class="cell__value">46.81</span></div>
      </div>
      <div class="row" data-row="r-124">
        <div class="cell" data-cell="c-124-0"><span class="cell__label">c-124-0</span><span class="cell__value">61.73</span></div>
        <div class="cell" data-cell="c-124-1"><span class="cell__label">c-124-1</span><span class="cell__value">70.98</span></div>
        <div class="cell" data-cell="c-124-2"><span class="cell__label">c-124-2</span><span class="cell__value">32.70</span></div>
        <div class="cell" data-cell="c-124-3"><span class="cell__label">c-124-3</span><span class="cell__value">91.27</span></div>
        <div class="cell" data-cell="c-124-4"><span class="cell__label">c-124-4</span><span class="cell__value">46.24</span></div>
        <div class="cell" data-cell="c-124-5"><span class="cell__label">c-124-5</span><span class="cell__value">52.81</span></div>
        <div class="cell" data-cell="c-124-6"><span class="cell__label">c-124-6</span><span class="cell__value">87.29</span></div>
        <div class="cell" data-cell="c-124-7"><span class="cell__label">c-124-7</span><span class="cell__value">47.28</span></div>
        <div class="cell" data-cell="c-124-8"><span class="cell__label">c-124-8</span><span class="cell__value">88.51</span></div>
        <div class="cell" data-cell="c-124-9"><span class="cell__label">c-124-9</span><span class="cell__value">41.77</span></div>
        <div class="cell" data-cell="c-124-10"><span class="cell__label">c-124-10</span><span class="cell__value">83.46</span></div>
        <div class="cell" data-cell="c-124-11"><span class="cell__label">c-124-11</span><span class="cell__value">37.12</span></div>
        <div class="cell" data-cell="c-124-12"><span class="cell__label">c-124-12</span><span class="cell__value">12.37</span></div>
        <div class="cell" data-cell="c-124-13"><span class="cell__label">c-124-13</span><span class="cell__value">53.92</span></div>
        <div class="cell" data-cell="c-124-14"><span class="cell__label">c-124-14</span><span class="cell__value">73.76</span></div>
        <div class="cell" data-cell="c-124-15"><span class="cell__label">c-124-15</span><span class="cell__value">99.19</span></div>
        <div class="cell" data-cell="c-124-16"><span class="cell__label">c-124-16</span><span class="cell__value">76.21</span></div>
        <div class="cell" data-cell="c-124-17"><span class="cell__label">c-124-17</span><span class="cell__value">29.10</span></div>
        <div class="cell" data-cell="c-124-18"><span class="cell__label">c-124-18</span><span class="cell__value">5.76</span></div>
        <div class="cell" data-cell="c-124-19"><span class="cell__label">c-124-19</span><span class="cell__value">31.90</span></div>
      </div>
      <div class="row" data-row="r-125">
        <div class="cell" data-cell="c-125-0"><span class="cell__label">c-125-0</span><span class="cell__value">78.74</span></div>
        <div class="cell" data-cell="c-125-1"><span class="cell__label">c-125-1</span><span class="cell__value">83.96</span></div>
        <div class="cell" data-cell="c-125-2"><span class="cell__label">c-125-2</span><span class="cell__value">70.77</span></div>
        <div class="cell" data-cell="c-125-3"><span class="cell__label">c-125-3</span><span class="cell__value">41.64</span></div>
        <div class="cell" data-cell="c-125-4"><span class="cell__label">c-125-4</span><span class="cell__value">5.23</span></div>
        <div class="cell" data-cell="c-125-5"><span class="cell__label">c-125-5</span><span class="cell__value">9.64</span></div>
        <div class="cell" data-cell="c-125-6"><span class="cell__label">c-125-6</span><span class="cell__value">20.99</span></div>
        <div class="cell" data-cell="c-125-7"><span class="cell__label">c-125-7</span><span class="cell__value">30.10</span></div>
        <div class="cell" data-cell="c-125-8"><span class="cell__label">c-125-8</span><span class="cell__value">99.30</span></div>
        <div class="cell" data-cell="c-125-9"><span class="cell__label">c-125-9</span><span class="cell__value">4.61</span></div>
        <div class="cell" data-cell="c-125-10"><span class="cell__label">c-125-10</span><span class="cell__value">15.73</span></div>
        <div class="cell" data-cell="c-125-11"><span class="cell__label">c-125-11</span><span class="cell__value">49.21</span></div>
        <div class="cell" data-cell="c-125-12"><span class="cell__label">c-125-12</span><span class="cell__value">18.66</span></div>
        <div class="cell" data-cell="c-125-13"><span class="cell__label">c-125-13</span><span class="cell__value">43.20</span></div>
        <div class="cell" data-cell="c-125-14"><span class="cell__label">c-125-14</span><span class="cell__value">88.58</span></div>
        <div class="cell" data-cell="c-125-15"><span class="cell__label">c-125-15</span><span class="cell__value">97.92</span></div>
        <div class="cell" data-cell="c-125-16"><span class="cell__label">c-125-16</span><span class="cell__value">9.66</span></div>
        <div class="cell" data-cell="c-125-17"><span class="cell__label">c-125-17</span><span class="cell__value">4.43</span></div>
        <div class="cell" data-cell="c-125-18"><span class="cell__label">c-125-18</span><span class="cell__value">10.99</span></div>
        <div class="cell" data-cell="c-125-19"><span class="cell__label">c-125-19</span><span class="cell__value">35.40</span></div>
      </div>
      <div class="row" data-row="r-126">
        <div class="cell" data-cell="c-126-0"><span class="cell__label">c-126-0</span><span class="cell__value">70.50</span></div>
        <div class="cell" data-cell="c-126-1"><span class="cell__label">c-126-1</span><span class="cell__value">83.47</span></div>
        <div class="cell" data-cell="c-126-2"><span class="cell__label">c-126-2</span><span class="cell__value">67.40</span></div>
        <div class="cell" data-cell="c-126-3"><span class="cell__label">c-126-3</span><span class="cell__value">34.85</span></div>
        <div class="cell" data-cell="c-126-4"><span class="cell__label">c-126-4</span><span class="cell__value">85.82</span></div>
        <div class="cell" data-cell="c-126-5"><span class="cell__label">c-126-5</span><span class="cell__value">77.93</span></div>
        <div class="cell" data-cell="c-126-6"><span class="cell__label">c-126-6</span><span class="cell__value">90.63</span></div>
        <div class="cell" data-cell="c-126-7"><span class="cell__label">c-126-7</span><span class="cell__value">29.63</span></div>
        <div class="cell" data-cell="c-126-8"><span class="cell__label">c-126-8</span><span class="cell__value">45.23</span></div>
        <div class="cell" data-cell="c-126-9"><span class="cell__label">c-126-9</span><span class="cell__value">15.10</span></div>
        <div class="cell" data-cell="c-126-10"><span class="cell__label">c-126-10</span><span class="cell__value">42.03</span></div>
        <div class="cell" data-cell="c-126-11"><span class="cell__label">c-126-11</span><span class="cell__value">57.52</span></div>
        <div class="cell" data-cell="c-126-12"><span class="cell__label">c-126-12</span><span class="cell__value">6.43</span></div>
        <div class="cell" data-cell="c-126-13"><span class="cell__label">c-126-13</span><span class="cell__value">10.97</span></div>
        <div class="cell" data-cell="c-126-14"><span class="cell__label">c-126-14</span><span class="cell__value">61.89</span></div>
        <div class="cell" data-cell="c-126-15"><span class="cell__label">c-126-15</span><span class="cell__value">49.24</span></div>
        <div class="cell" data-cell="c-126-16"><span class="cell__label">c-126-16</span><span class="cell__value">53.88</span></div>
        <div class="cell" data-cell="c-126-17"><span class="cell__label">c-126-17</span><span class="cell__value">94.33</span></div>
        <div class="cell" data-cell="c-126-18"><span class="cell__label">c-126-18</span><span class="cell__value">32.45</span></div>
        <div class="cell" data-cell="c-126-19"><span class="cell__label">c-126-19</span><span class="cell__value">31.01</span></div>
      </div>
      <div class="row" data-row="r-127">
        <div class="cell" data-cell="c-127-0"><span class="cell__label">c-127-0</span><span class="cell__value">78.82</span></div>
        <div class="cell" data-cell="c-127-1"><span class="cell__label">c-127-1</span><span class="cell__value">46.33</span></div>
        <div class="cell" data-cell="c-127-2"><span class="cell__label">c-127-2</span><span class="cell__value">58.91</span></div>
        <div class="cell" data-cell="c-127-3"><span class="cell__label">c-127-3</span><span class="cell__value">62.72</span></div>
        <div class="cell" data-cell="c-127-4"><span class="cell__label">c-127-4</span><span class="cell__value">65.22</span></div>
        <div class="cell" data-cell="c-127-5"><span class="cell__label">c-127-5</span><span class="cell__value">95.85</span></div>
        <div class="cell" data-cell="c-127-6"><span class="cell__label">c-127-6</span><span class="cell__value">5.74</span></div>
        <div class="cell" data-cell="c-127-7"><span class="cell__label">c-127-7</span><span class="cell__value">93.22</span></div>
        <div class="cell" data-cell="c-127-8"><span class="cell__label">c-127-8</span><span class="cell__value">5.40</span></div>
        <div class="cell" data-cell="c-127-9"><span class="cell__label">c-127-9</span><span class="cell__value">17.84</span></div>
        <div class="cell" data-cell="c-127-10"><span class="cell__label">c-127-10</span><span class="cell__value">64.84</span></div>
        <div class="cell" data-cell="c-127-11"><span class="cell__label">c-127-11</span><span class="cell__value">53.35</span></div>
        <div class="cell" data-cell="c-127-12"><span class="cell__label">c-127-12</span><span class="cell__value">80.35</span></div>
        <div class="cell" data-cell="c-127-13"><span class="cell__label">c-127-13</span><span class="cell__value">21.02</span></div>
        <div class="cell" data-cell="c-127-14"><span class="cell__label">c-127-14</span><span class="cell__value">82.47</span></div>
        <div class="cell" data-cell="c-127-15"><span class="cell__label">c-127-15</span><span class="cell__value">60.60</span></div>
        <div class="cell" data-cell="c-127-16"><span class="cell__label">c-127-16</span><span class="cell__value">96.62</span></div>
        <div class="cell" data-cell="c-127-17"><span class="cell__label">c-127-17</span><span class="cell__value">6.07</span></div>
        <div class="cell" data-cell="c-127-18"><span class="cell__label">c-127-18</span><span class="cell__value">90.70</span></div>
        <div class="cell" data-cell="c-127-19"><span class="cell__label">c-127-19</span><span class="cell__value">29.82</span></div>
      </div>
      <div class="row" data-row="r-128">
        <div class="cell" data-cell="c-128-0"><span class="cell__label">c-128-0</span><span class="cell__value">38.24</span></div>
        <div class="cell" data-cell="c-128-1"><span class="cell__label">c-128-1</span><span class="cell__value">40.42</span></div>
        <div class="cell" data-cell="c-128-2"><span class="cell__label">c-128-2</span><span class="cell__value">47.25</span></div>
        <div class="cell" data-cell="c-128-3"><span class="cell__label">c-128-3</span><span class="cell__value">4.39</span></div>
        <div class="cell" data-cell="c-128-4"><span class="cell__label">c-128-4</span><span class="cell__value">39.77</span></div>
        <div class="cell" data-cell="c-128-5"><span class="cell__label">c-128-5</span><span class="cell__value">61.65</span></div>
        <div class="cell" data-cell="c-128-6"><span class="cell__label">c-128-6</span><span class="cell__value">7.67</span></div>
        <div class="cell" data-cell="c-128-7"><span class="cell__label">c-128-7</span><span class="cell__value">34.03</span></div>
        <div class="cell" data-cell="c-128-8"><span class="cell__label">c-128-8</span><span class="cell__value">26.85</span></div>
        <div class="cell" data-cell="c-128-9"><span class="cell__label">c-128-9</span><span class="cell__value">49.74</span></div>
        <div class="cell" data-cell="c-128-10"><span class="cell__label">c-128-10</span><span class="cell__value">17.71</span></div>
        <div class="cell" data-cell="c-128-11"><span class="cell__label">c-128-11</span><span class="cell__value">98.23</span></div>
        <div class="cell" data-cell="c-128-12"><span class="cell__label">c-128-12</span><span class="cell__value">48.79</span></div>
        <div class="cell" data-cell="c-128-13"><span class="cell__label">c-128-13</span><span class="cell__value">27.50</span></div>
        <div class="cell" data-cell="c-128-14"><span class="cell__label">c-128-14</span><span class="cell__value">50.67</span></div>
        <div class="cell" data-cell="c-128-15"><span class="cell__label">c-128-15</span><span class="cell__value">99.80</span></div>
        <div class="cell" data-cell="c-128-16"><span class="cell__label">c-128-16</span><span class="cell__value">34.72</span></div>
        <div class="cell" data-cell="c-128-17"><span class="cell__label">c-128-17</span><span class="cell__value">39.26</span></div>
        <div class="cell" data-cell="c-128-18"><span class="cell__label">c-128-18</span><span class="cell__value">5.80</span></div>
        <div class="cell" data-cell="c-128-19"><span class="cell__label">c-128-19</span><span class="cell__value">14.45</span></div>
      </div>
      <div class="row" data-row="r-129">
        <div class="cell" data-cell="c-129-0"><span class="cell__label">c-129-0</span><span class="cell__value">36.08</span></div>
        <div class="cell" data-cell="c-129-1"><span class="cell__label">c-129-1</span><span class="cell__value">51.37</span></div>
        <div class="cell" data-cell="c-129-2"><span class="cell__label">c-129-2</span><span class="cell__value">41.97</span></div>
        <div class="cell" data-cell="c-129-3"><span class="cell__label">c-129-3</span><span class="cell__value">77.31</span></div>
        <div class="cell" data-cell="c-129-4"><span class="cell__label">c-129-4</span><span class="cell__value">34.09</span></div>
        <div class="cell" data-cell="c-129-5"><span class="cell__label">c-129-5</span><span class="cell__value">89.60</span></div>
        <div class="cell" data-cell="c-129-6"><span class="cell__label">c-129-6</span><span class="cell__value">28.78</span></div>
        <div class="cell" data-cell="c-129-7"><span class="cell__label">c-129-7</span><span class="cell__value">25.29</span></div>
        <div class="cell" data-cell="c-129-8"><span class="cell__label">c-129-8</span><span class="cell__value">35.24</span></div>
        <div class="cell" data-cell="c-129-9"><span class="cell__label">c-129-9</span><span class="cell__value">52.05</span></div>
        <div class="cell" data-cell="c-129-10"><span class="cell__label">c-129-10</span><span class="cell__value">36.66</span></div>
        <div class="cell" data-cell="c-129-11"><span class="cell__label">c-129-11</span><span class="cell__value">62.60</span></div>
        <div class="cell" data-cell="c-129-12"><span class="cell__label">c-129-12</span><span class="cell__value">19.19</span></div>
        <div class="cell" data-cell="c-129-13"><span class="cell__label">c-129-13</span><span class="cell__value">12.87</span></div>
        <div class="cell" data-cell="c-129-14"><span class="cell__label">c-129-14</span><span class="cell__value">45.31</span></div>
        <div class="cell" data-cell="c-129-15"><span class="cell__label">c-129-15</span><span class="cell__value">0.42</span></div>
        <div class="cell" data-cell="c-129-16"><span class="cell__label">c-129-16</span><span class="cell__value">21.12</span></div>
        <div class="cell" data-cell="c-129-17"><span class="cell__label">c-129-17</span><span class="cell__value">54.48</span></div>
        <div class="cell" data-cell="c-129-18"><span class="cell__label">c-129-18</span><span class="cell__value">17.66</span></div>
        <div class="cell" data-cell="c-129-19"><span class="cell__label">c-129-19</span><span class="cell__value">57.36</span></div>
      </div>
      <div class="row" data-row="r-130">
        <div class="cell" data-cell="c-130-0"><span class="cell__label">c-130-0</span><span class="cell__value">66.41</span></div>
        <div class="cell" data-cell="c-130-1"><span class="cell__label">c-130-1</span><span class="cell__value">81.98</span></div>
        <div class="cell" data-cell="c-130-2"><span class="cell__label">c-130-2</span><span class="cell__value">88.78</span></div>
        <div class="cell" data-cell="c-130-3"><span class="cell__label">c-130-3</span><span class="cell__value">8.04</span></div>
        <div class="cell" data-cell="c-130-4"><span class="cell__label">c-130-4</span><span class="cell__value">6.14</span></div>
        <div class="cell" data-cell="c-130-5"><span class="cell__label">c-130-5</span><span class="cell__value">4.20</span></div>
        <div class="cell" data-cell="c-130-6"><span class="cell__label">c-130-6</span><span class="cell__value">41.36</span></div>
        <div class="cell" data-cell="c-130-7"><span class="cell__label">c-130-7</span><span class="cell__value">53.71</span></div>
        <div class="cell" data-cell="c-130-8"><span class="cell__label">c-130-8</span><span class="cell__value">14.93</span></div>
        <div class="cell" data-cell="c-130-9"><span class="cell__label">c-130-9</span><span class="cell__value">48.12</span></div>
        <div class="cell" data-cell="c-130-10"><span class="cell__label">c-130-10</span><span class="cell__value">53.07</span></div>
        <div class="cell" data-cell="c-130-11"><span class="cell__label">c-130-11</span><span class="cell__value">38.23</span></div>
        <div class="cell" data-cell="c-130-12"><span class="cell__label">c-130-12</span><span class="cell__value">65.76</span></div>
        <div class="cell" data-cell="c-130-13"><span class="cell__label">c-130-13</span><span class="cell__value">84.85</span></div>
        <div class="cell" data-cell="c-130-14"><span class="cell__label">c-130-14</span><span class="cell__value">77.23</span></div>
        <div class="cell" data-cell="c-130-15"><span class="cell__label">c-130-15</span><span class="cell__value">37.70</span></div>
        <div class="cell" data-cell="c-130-16"><span class="cell__label">c-130-16</span><span class="cell__value">89.41</span></div>
        <div class="cell" data-cell="c-130-17"><span class="cell__label">c-130-17</span><span class="cell__value">83.20</span></div>
        <div class="cell" data-cell="c-130-18"><span class="cell__label">c-130-18</span><span class="cell__value">24.30</span></div>
        <div class="cell" data-cell="c-130-19"><span class="cell__label">c-130-19</span><span class="cell__value">71.65</span></div>
      </div>
      <div class="row" data-row="r-131">
        <div class="cell" data-cell="c-131-0"><span class="cell__label">c-131-0</span><span class="cell__value">50.81</span></div>
        <div class="cell" data-cell="c-131-1"><span class="cell__label">c-131-1</span><span class="cell__value">49.10</span></div>
        <div class="cell" data-cell="c-131-2"><span class="cell__label">c-131-2</span><span class="cell__value">10.75</span></div>
        <div class="cell" data-cell="c-131-3"><span class="cell__label">c-131-3</span><span class="cell__value">41.11</span></div>
        <div class="cell" data-cell="c-131-4"><span class="cell__label">c-131-4</span><span class="cell__value">13.60</span></div>
        <div class="cell" data-cell="c-131-5"><span class="cell__label">c-131-5</span><span class="cell__value">53.57</span></div>
        <div class="cell" data-cell="c-131-6"><span class="cell__label">c-131-6</span><span class="cell__value">21.26</span></div>
        <div class="cell" data-cell="c-131-7"><span class="cell__label">c-131-7</span><span class="cell__value">5.57</span></div>
        <div class="cell" data-cell="c-131-8"><span class="cell__label">c-131-8</span><span class="cell__value">80.08</span></div>
        <div class="cell" data-cell="c-131-9"><span class="cell__label">c-131-9</span><span class="cell__value">64.79</span></div>
        <div class="cell" data-cell="c-131-10"><span class="cell__label">c-131-10</span><span class="cell__value">91.46</span></div>
        <div class="cell" data-cell="c-131-11"><span class="cell__label">c-131-11</span><span class="cell__value">16.69</span></div>
        <div class="cell" data-cell="c-131-12"><span class="cell__label">c-131-12</span><span class="cell__value">2.67</span></div>
        <div class="cell" data-cell="c-131-13"><span class="cell__label">c-131-13</span><span class="cell__value">88.17</span></div>
        <div class="cell" data-cell="c-131-14"><span class="cell__label">c-131-14</span><span class="cell__value">55.87</span></div>
        <div class="cell" data-cell="c-131-15"><span class="cell__label">c-131-15</span><span class="cell__value">18.47</span></div>
        <div class="cell" data-cell="c-131-16"><span class="cell__label">c-131-16</span><span class="cell__value">31.15</span></div>
        <div class="cell" data-cell="c-131-17"><span class="cell__label">c-131-17</span><span class="cell__value">3.89</span></div>
        <div class="cell" data-cell="c-131-18"><span class="cell__label">c-131-18</span><span class="cell__value">89.75</span></div>
        <div class="cell" data-cell="c-131-19"><span class="cell__label">c-131-19</span><span class="cell__value">68.81</span></div>
      </div>
      <div class="row" data-row="r-132">
        <div class="cell" data-cell="c-132-0"><span class="cell__label">c-132-0</span><span class="cell__value">53.83</span></div>
        <div class="cell" data-cell="c-132-1"><span class="cell__label">c-132-1</span><span class="cell__value">35.03</span></div>
        <div class="cell" data-cell="c-132-2"><span class="cell__label">c-132-2</span><span class="cell__value">2.97</span></div>
        <div class="cell" data-cell="c-132-3"><span class="cell__label">c-132-3</span><span class="cell__value">86.01</span></div>
        <div class="cell" data-cell="c-132-4"><span class="cell__label">c-132-4</span><span class="cell__value">45.71</span></div>
        <div class="cell" data-cell="c-132-5"><span class="cell__label">c-132-5</span><span class="cell__value">12.70</span></div>
        <div class="cell" data-cell="c-132-6"><span class="cell__label">c-132-6</span><span class="cell__value">74.40</span></div>
        <div class="cell" data-cell="c-132-7"><span class="cell__label">c-132-7</span><span class="cell__value">90.41</span></div>
        <div class="cell" data-cell="c-132-8"><span class="cell__label">c-132-8</span><span class="cell__value">7.75</span></div>
        <div class="cell" data-cell="c-132-9"><span class="cell__label">c-132-9</span><span class="cell__value">91.61</span></div>
        <div class="cell" data-cell="c-132-10"><span class="cell__label">c-132-10</span><span class="cell__value">51.56</span></div>
        <div class="cell" data-cell="c-132-11"><span class="cell__label">c-132-11</span><span class="cell__value">90.92</span></div>
        <div class="cell" data-cell="c-132-12"><span class="cell__label">c-132-12</span><span class="cell__value">75.75</span></div>
        <div class="cell" data-cell="c-132-13"><span class="cell__label">c-132-13</span><span class="cell__value">44.81</span></div>
        <div class="cell" data-cell="c-132-14"><span class="cell__label">c-132-14</span><span class="cell__value">54.68</span></div>
        <div class="cell" data-cell="c-132-15"><span class="cell__label">c-132-15</span><span class="cell__value">64.94</span></div>
        <div class="cell" data-cell="c-132-16"><span class="cell__label">c-132-16</span><span class="cell__value">95.84</span></div>
        <div class="cell" data-cell="c-132-17"><span class="cell__label">c-132-17</span><span class="cell__value">0.32</span></div>
        <div class="cell" data-cell="c-132-18"><span class="cell__label">c-132-18</span><span class="cell__value">58.61</span></div>
        <div class="cell" data-cell="c-132-19"><span class="cell__label">c-132-19</span><span class="cell__value">95.25</span></div>
      </div>
      <div class="row" data-row="r-133">
        <div class="cell" data-cell="c-133-0"><span class="cell__label">c-133-0</span><span class="cell__value">50.89</span></div>
        <div class="cell" data-cell="c-133-1"><span class="cell__label">c-133-1</span><span class="cell__value">34.92</span></div>
        <div class="cell" data-cell="c-133-2"><span class="cell__label">c-133-2</span><span class="cell__value">29.91</span></div>
        <div class="cell" data-cell="c-133-3"><span class="cell__label">c-133-3</span><span class="cell__value">78.05</span></div>
        <div class="cell" data-cell="c-133-4"><span class="cell__label">c-133-4</span><span class="cell__value">27.20</span></div>
        <div class="cell" data-cell="c-133-5"><span class="cell__label">c-133-5</span><span class="cell__value">21.50</span></div>
        <div class="cell" data-cell="c-133-6"><span class="cell__label">c-133-6</span><span class="cell__value">68.68</span></div>
        <div class="cell" data-cell="c-133-7"><span class="cell__label">c-133-7</span><span class="cell__value">21.67</span></div>
        <div class="cell" data-cell="c-133-8"><span class="cell__label">c-133-8</span><span class="cell__value">48.58</span></div>
        <div class="cell" data-cell="c-133-9"><span class="cell__label">c-133-9</span><span class="cell__value">89.40</span></div>
        <div class="cell" data-cell="c-133-10"><span class="cell__label">c-133-10</span><span class="cell__value">24.70</span></div>
        <div class="cell" data-cell="c-133-11"><span class="cell__label">c-133-11</span><span class="cell__value">91.60</span></div>
        <div class="cell" data-cell="c-133-12"><span class="cell__label">c-133-12</span><span class="cell__value">34.08</span></div>
        <div class="cell" data-cell="c-133-13"><span class="cell__label">c-133-13</span><span class="cell__value">60.83</span></div>
        <div class="cell" data-cell="c-133-14"><span class="cell__label">c-133-14</span><span class="cell__value">27.40</span></div>
        <div class="cell" data-cell="c-133-15"><span class="cell__label">c-133-15</span><span class="cell__value">21.87</span></div>
        <div class="cell" data-cell="c-133-16"><span class="cell__label">c-133-16</span><span class="cell__value">47.74</span></div>
        <div class="cell" data-cell="c-133-17"><span class="cell__label">c-133-17</span><span class="cell__value">52.00</span></div>
        <div class="cell" data-cell="c-133-18"><span class="cell__label">c-133-18</span><span class="cell__value">90.94</span></div>
        <div class="cell" data-cell="c-133-19"><span class="cell__label">c-133-19</span><span class="cell__value">7.63</span></div>
      </div>
      <div class="row" data-row="r-134">
        <div class="cell" data-cell="c-134-0"><span class="cell__label">c-134-0</span><span class="cell__value">45.05</span></div>
        <div class="cell" data-cell="c-134-1"><span class="cell__label">c-134-1</span><span class="cell__value">94.55</span></div>
        <div class="cell" data-cell="c-134-2"><span class="cell__label">c-134-2</span><span class="cell__value">8.89</span></div>
        <div class="cell" data-cell="c-134-3"><span class="cell__label">c-134-3</span><span class="cell__value">29.26</span></div>
        <div class="cell" data-cell="c-134-4"><span class="cell__label">c-134-4</span><span class="cell__value">36.85</span></div>
        <div class="cell" data-cell="c-134-5"><span class="cell__label">c-134-5</span><span class="cell__value">1.78</span></div>
        <div class="cell" data-cell="c-134-6"><span class="cell__label">c-134-6</span><span class="cell__value">77.44</span></div>
        <div class="cell" data-cell="c-134-7"><span class="cell__label">c-134-7</span><span class="cell__value">49.27</span></div>
        <div class="cell" data-cell="c-134-8"><span class="cell__label">c-134-8</span><span class="cell__value">54.03</span></div>
        <div class="cell" data-cell="c-134-9"><span class="cell__label">c-134-9</span><span class="cell__value">89.17</span></div>
        <div class="cell" data-cell="c-134-10"><span class="cell__label">c-134-10</span><span class="cell__value">38.17</span></div>
        <div class="cell" data-cell="c-134-11"><span class="cell__label">c-134-11</span><span class="cell__value">38.76</span></div>
        <div class="cell" data-cell="c-134-12"><span class="cell__label">c-134-12</span><span class="cell__value">32.60</span></div>
        <div class="cell" data-cell="c-134-13"><span class="cell__label">c-134-13</span><span class="cell__value">31.90</span></div>
        <div class="cell" data-cell="c-134-14"><span class="cell__label">c-134-14</span><span class="cell__value">0.36</span></div>
        <div class="cell" data-cell="c-134-15"><span class="cell__label">c-134-15</span><span class="cell__value">80.24</span></div>
        <div class="cell" data-cell="c-134-16"><span class="cell__label">c-134-16</span><span class="cell__value">77.43</span></div>
        <div class="cell" data-cell="c-134-17"><span class="cell__label">c-134-17</span><span class="cell__value">22.11</span></div>
        <div class="cell" data-cell="c-134-18"><span class="cell__label">c-134-18</span><span class="cell__value">87.77</span></div>
        <div class="cell" data-cell="c-134-19"><span class="cell__label">c-134-19</span><span class="cell__value">81.43</span></div>
      </div>
      <div class="row" data-row="r-135">
        <div class="cell" data-cell="c-135-0"><span class="cell__label">c-135-0</span><span class="cell__value">25.74</span></div>
        <div class="cell" data-cell="c-135-1"><span class="cell__label">c-135-1</span><span class="cell__value">60.34</span></div>
        <div class="cell" data-cell="c-135-2"><span class="cell__label">c-135-2</span><span class="cell__value">79.40</span></div>
        <div class="cell" data-cell="c-135-3"><span class="cell__label">c-135-3</span><span class="cell__value">53.18</span></div>
        <div class="cell" data-cell="c-135-4"><span class="cell__label">c-135-4</span><span class="cell__value">92.00</span></div>
        <div class="cell" data-cell="c-135-5"><span class="cell__label">c-135-5</span><span class="cell__value">61.32</span></div>
        <div class="cell" data-cell="c-135-6"><span class="cell__label">c-135-6</span><span class="cell__value">65.43</span></div>
        <div class="cell" data-cell="c-135-7"><span class="cell__label">c-135-7</span><span class="cell__value">11.10</span></div>
        <div class="cell" data-cell="c-135-8"><span class="cell__label">c-135-8</span><span class="cell__value">61.73</span></div>
        <div class="cell" data-cell="c-135-9"><span class="cell__label">c-135-9</span><span class="cell__value">6.27</span></div>
        <div class="cell" data-cell="c-135-10"><span class="cell__label">c-135-10</span><span class="cell__value">98.86</span></div>
        <div class="cell" data-cell="c-135-11"><span class="cell__label">c-135-11</span><span class="cell__value">8.96</span></div>
        <div class="cell" data-cell="c-135-12"><span class="cell__label">c-135-12</span><span class="cell__value">51.12</span></div>
        <div class="cell" data-cell="c-135-13"><span class="cell__label">c-135-13</span><span class="cell__value">36.48</span></div>
        <div class="cell" data-cell="c-135-14"><span class="cell__label">c-135-14</span><span class="cell__value">36.95</span></div>
        <div class="cell" data-cell="c-135-15"><span class="cell__label">c-135-15</span><span class="cell__value">17.89</span></div>
        <div class="cell" data-cell="c-135-16"><span class="cell__label">c-135-16</span><span class="cell__value">92.78</span></div>
        <div class="cell" data-cell="c-135-17"><span class="cell__label">c-135-17</span><span class="cell__value">0.86</span></div>
        <div class="cell" data-cell="c-135-18"><span class="cell__label">c-135-18</span><span class="cell__value">71.42</span></div>
        <div class="cell" data-cell="c-135-19"><span class="cell__label">c-135-19</span><span class="cell__value">5.74</span></div>
      </div>
      <div class="row" data-row="r-136">
        <div class="cell" data-cell="c-136-0"><span class="cell__label">c-136-0</span><span class="cell__value">86.10</span></div>
        <div class="cell" data-cell="c-136-1"><span class="cell__label">c-136-1</span><span class="cell__value">86.76</span></div>
        <div class="cell" data-cell="c-136-2"><span class="cell__label">c-136-2</span><span class="cell__value">17.72</span></div>
        <div class="cell" data-cell="c-136-3"><span class="cell__label">c-136-3</span><span class="cell__value">33.39</span></div>
        <div class="cell" data-cell="c-136-4"><span class="cell__label">c-136-4</span><span class="cell__value">39.97</span></div>
        <div class="cell" data-cell="c-136-5"><span class="cell__label">c-136-5</span><span class="cell__value">14.48</span></div>
        <div class="cell" data-cell="c-136-6"><span class="cell__label">c-136-6</span><span class="cell__value">3.23</span></div>
        <div class="cell" data-cell="c-136-7"><span class="cell__label">c-136-7</span><span class="cell__value">2.42</span></div>
        <div class="cell" data-cell="c-136-8"><span class="cell__label">c-136-8</span><span class="cell__value">55.63</span></div>
        <div class="cell" data-cell="c-136-9"><span class="cell__label">c-136-9</span><span class="cell__value">94.16</span></div>
        <div class="cell" data-cell="c-136-10"><span class="cell__label">c-136-10</span><span class="cell__value">94.73</span></div>
        <div class="cell" data-cell="c-136-11"><span class="cell__label">c-136-11</span><span class="cell__value">16.34</span></div>
        <div class="cell" data-cell="c-136-12"><span class="cell__label">c-136-12</span><span class="cell__value">64.81</span></div>
        <div class="cell" data-cell="c-136-13"><span class="cell__label">c-136-13</span><span class="cell__value">83.00</span></div>
        <div class="cell" data-cell="c-136-14"><span class="cell__label">c-136-14</span><span class="cell__value">18.60</span></div>
        <div class="cell" data-cell="c-136-15"><span class="cell__label">c-136-15</span><span class="cell__value">47.54</span></div>
        <div class="cell" data-cell="c-136-16"><span class="cell__label">c-136-16</span><span class="cell__value">45.37</span></div>
        <div class="cell" data-cell="c-136-17"><span class="cell__label">c-136-17</span><span class="cell__value">13.63</span></div>
        <div class="cell" data-cell="c-136-18"><span class="cell__label">c-136-18</span><span class="cell__value">42.19</span></div>
        <div class="cell" data-cell="c-136-19"><span class="cell__label">c-136-19</span><span class="cell__value">65.72</span></div>
      </div>
      <div class="row" data-row="r-137">
        <div class="cell" data-cell="c-137-0"><span class="cell__label">c-137-0</span><span class="cell__value">58.93</span></div>
        <div class="cell" data-cell="c-137-1"><span class="cell__label">c-137-1</span><span class="cell__value">42.55</span></div>
        <div class="cell" data-cell="c-137-2"><span class="cell__label">c-137-2</span><span class="cell__value">10.91</span></div>
        <div class="cell" data-cell="c-137-3"><span class="cell__label">c-137-3</span><span class="cell__value">71.79</span></div>
        <div class="cell" data-cell="c-137-4"><span class="cell__label">c-137-4</span><span class="cell__value">63.08</span></div>
        <div class="cell" data-cell="c-137-5"><span class="cell__label">c-137-5</span><span class="cell__value">33.63</span></div>
        <div class="cell" data-cell="c-137-6"><span class="cell__label">c-137-6</span><span class="cell__value">64.87</span></div>
        <div class="cell" data-cell="c-137-7"><span class="cell__label">c-137-7</span><span class="cell__value">81.69</span></div>
        <div class="cell" data-cell="c-137-8"><span class="cell__label">c-137-8</span><span class="cell__value">53.53</span></div>
        <div class="cell" data-cell="c-137-9"><span class="cell__label">c-137-9</span><span class="cell__value">49.04</span></div>
        <div class="cell" data-cell="c-137-10"><span class="cell__label">c-137-10</span><span class="cell__value">77.58</span></div>
        <div class="cell" data-cell="c-137-11"><span class="cell__label">c-137-11</span><span class="cell__value">92.32</span></div>
        <div class="cell" data-cell="c-137-12"><span class="cell__label">c-137-12</span><span class="cell__value">50.39</span></div>
        <div class="cell" data-cell="c-137-13"><span class="cell__label">c-137-13</span><span class="cell__value">4.71</span></div>
        <div class="cell" data-cell="c-137-14"><span class="cell__label">c-137-14</span><span class="cell__value">9.59</span></div>
        <div class="cell" data-cell="c-137-15"><span class="cell__label">c-137-15</span><span class="cell__value">62.68</span></div>
        <div class="cell" data-cell="c-137-16"><span class="cell__label">c-137-16</span><span class="cell__value">45.58</span></div>
        <div class="cell" data-cell="c-137-17"><span class="cell__label">c-137-17</span><span class="cell__value">55.53</span></div>
        <div class="cell" data-cell="c-137-18"><span class="cell__label">c-137-18</span><span class="cell__value">96.14</span></div>
        <div class="cell" data-cell="c-137-19"><span class="cell__label">c-137-19</span><span class="cell__value">45.27</span></div>
      </div>
      <div class="row" data-row="r-138">
        <div class="cell" data-cell="c-138-0"><span class="cell__label">c-138-0</span><span class="cell__value">98.01</span></div>
        <div class="cell" data-cell="c-138-1"><span class="cell__label">c-138-1</span><span class="cell__value">54.35</span></div>
        <div class="cell" data-cell="c-138-2"><span class="cell__label">c-138-2</span><span class="cell__value">74.38</span></div>
        <div class="cell" data-cell="c-138-3"><span class="cell__label">c-138-3</span><span class="cell__value">20.15</span></div>
        <div class="cell" data-cell="c-138-4"><span class="cell__label">c-138-4</span><span class="cell__value">33.96</span></div>
        <div class="cell" data-cell="c-138-5"><span class="cell__label">c-138-5</span><span class="cell__value">59.72</span></div>
        <div class="cell" data-cell="c-138-6"><span class="cell__label">c-138-6</span><span class="cell__value">39.39</span></div>
        <div class="cell" data-cell="c-138-7"><span class="cell__label">c-138-7</span><span class="cell__value">7.95</span></div>
        <div class="cell" data-cell="c-138-8"><span class="cell__label">c-138-8</span><span class="cell__value">63.90</span></div>
        <div class="cell" data-cell="c-138-9"><span class="cell__label">c-138-9</span><span class="cell__value">52.53</span></div>
        <div class="cell" data-cell="c-138-10"><span class="cell__label">c-138-10</span><span class="cell__value">78.74</span></div>
        <div class="cell" data-cell="c-138-11"><span class="cell__label">c-138-11</span><span class="cell__value">78.14</span></div>
        <div class="cell" data-cell="c-138-12"><span class="cell__label">c-138-12</span><span class="cell__value">82.17</span></div>
        <div class="cell" data-cell="c-138-13"><span class="cell__label">c-138-13</span><span class="cell__value">67.69</span></div>
        <div class="cell" data-cell="c-138-14"><span class="cell__label">c-138-14</span><span class="cell__value">35.67</span></div>
        <div class="cell" data-cell="c-138-15"><span class="cell__label">c-138-15</span><span class="cell__value">20.06</span></div>
        <div class="cell" data-cell="c-138-16"><span class="cell__label">c-138-16</span><span class="cell__value">23.28</span></div>
        <div class="cell" data-cell="c-138-17"><span class="cell__label">c-138-17</span><span class="cell__value">90.56</span></div>
        <div class="cell" data-cell="c-138-18"><span class="cell__label">c-138-18</span><span class="cell__value">45.21</span></div>
        <div class="cell" data-cell="c-138-19"><span class="cell__label">c-138-19</span><span class="cell__value">0.44</span></div>
      </div>
      <div class="row" data-row="r-139">
        <div class="cell" data-cell="c-139-0"><span class="cell__label">c-139-0</span><span class="cell__value">99.49</span></div>
        <div class="cell" data-cell="c-139-1"><span class="cell__label">c-139-1</span><span class="cell__value">40.15</span></div>
        <div class="cell" data-cell="c-139-2"><span class="cell__label">c-139-2</span><span class="cell__value">76.50</span></div>
        <div class="cell" data-cell="c-139-3"><span class="cell__label">c-139-3</span><span class="cell__value">65.22</span></div>
        <div class="cell" data-cell="c-139-4"><span class="cell__label">c-139-4</span><span class="cell__value">96.53</span></div>
        <div class="cell" data-cell="c-139-5"><span class="cell__label">c-139-5</span><span class="cell__value">24.17</span></div>
        <div class="cell" data-cell="c-139-6"><span class="cell__label">c-139-6</span><span class="cell__value">52.40</span></div>
        <div class="cell" data-cell="c-139-7"><span class="cell__label">c-139-7</span><span class="cell__value">45.39</span></div>
        <div class="cell" data-cell="c-139-8"><span class="cell__label">c-139-8</span><span class="cell__value">32.96</span></div>
        <div class="cell" data-cell="c-139-9"><span class="cell__label">c-139-9</span><span class="cell__value">15.50</span></div>
        <div class="cell" data-cell="c-139-10"><span class="cell__label">c-139-10</span><span class="cell__value">39.45</span></div>
        <div class="cell" data-cell="c-139-11"><span class="cell__label">c-139-11</span><span class="cell__value">37.51</span></div>
        <div class="cell" data-cell="c-139-12"><span class="cell__label">c-139-12</span><span class="cell__value">18.45</span></div>
        <div class="cell" data-cell="c-139-13"><span class="cell__label">c-139-13</span><span class="cell__value">93.08</span></div>
        <div class="cell" data-cell="c-139-14"><span class="cell__label">c-139-14</span><span class="cell__value">69.51</span></div>
        <div class="cell" data-cell="c-139-15"><span class="cell__label">c-139-15</span><span class="cell__value">30.15</span></div>
        <div class="cell" data-cell="c-139-16"><span class="cell__label">c-139-16</span><span class="cell__value">63.96</span></div>
        <div class="cell" data-cell="c-139-17"><span class="cell__label">c-139-17</span><span class="cell__value">13.93</span></div>
        <div class="cell" data-cell="c-139-18"><span class="cell__label">c-139-18</span><span class="cell__value">43.21</span></div>
        <div class="cell" data-cell="c-139-19"><span class="cell__label">c-139-19</span><span class="cell__value">51.34</span></div>
      </div>
      <div class="row" data-row="r-140">
        <div class="cell" data-cell="c-140-0"><span class="cell__label">c-140-0</span><span class="cell__value">93.60</span></div>
        <div class="cell" data-cell="c-140-1"><span class="cell__label">c-140-1</span><span class="cell__value">72.37</span></div>
        <div class="cell" data-cell="c-140-2"><span class="cell__label">c-140-2</span><span class="cell__value">24.66</span></div>
        <div class="cell" data-cell="c-140-3"><span class="cell__label">c-140-3</span><span class="cell__value">73.77</span></div>
        <div class="cell" data-cell="c-140-4"><span class="cell__label">c-140-4</span><span class="cell__value">29.89</span></div>
        <div class="cell" data-cell="c-140-5"><span class="cell__label">c-140-5</span><span class="cell__value">28.85</span></div>
        <div class="cell" data-cell="c-140-6"><span class="cell__label">c-140-6</span><span class="cell__value">3.24</span></div>
        <div class="cell" data-cell="c-140-7"><span class="cell__label">c-140-7</span><span class="cell__value">29.56</span></div>
        <div class="cell" data-cell="c-140-8"><span class="cell__label">c-140-8</span><span class="cell__value">75.55</span></div>
        <div class="cell" data-cell="c-140-9"><span class="cell__label">c-140-9</span><span class="cell__value">23.80</span></div>
        <div class="cell" data-cell="c-140-10"><span class="cell__label">c-140-10</span><span class="cell__value">26.09</span></div>
        <div class="cell" data-cell="c-140-11"><span class="cell__label">c-140-11</span><span class="cell__value">94.72</span></div>
        <div class="cell" data-cell="c-140-12"><span class="cell__label">c-140-12</span><span class="cell__value">45.16</span></div>
        <div class="cell" data-cell="c-140-13"><span class="cell__label">c-140-13</span><span class="cell__value">31.13</span></div>
        <div class="cell" data-cell="c-140-14"><span class="cell__label">c-140-14</span><span class="cell__value">98.55</span></div>
        <div class="cell" data-cell="c-140-15"><span class="cell__label">c-140-15</span><span class="cell__value">83.48</span></div>
        <div class="cell" data-cell="c-140-16"><span class="cell__label">c-140-16</span><span class="cell__value">13.73</span></div>
        <div class="cell" data-cell="c-140-17"><span class="cell__label">c-140-17</span><span class="cell__value">75.21</span></div>
        <div class="cell" data-cell="c-140-18"><span class="cell__label">c-140-18</span><span class="cell__value">62.64</span></div>
        <div class="cell" data-cell="c-140-19"><span class="cell__label">c-140-19</span><span class="cell__value">8.60</span></div>
      </div>
      <div class="row" data-row="r-141">
        <div class="cell" data-cell="c-141-0"><span class="cell__label">c-141-0</span><span class="cell__value">82.51</span></div>
        <div class="cell" data-cell="c-141-1"><span class="cell__label">c-141-1</span><span class="cell__value">26.92</span></div>
        <div class="cell" data-cell="c-141-2"><span class="cell__label">c-141-2</span><span class="cell__value">49.71</span></div>
        <div class="cell" data-cell="c-141-3"><span class="cell__label">c-141-3</span><span class="cell__value">50.65</span></div>
        <div class="cell" data-cell="c-141-4"><span class="cell__label">c-141-4</span><span class="cell__value">55.21</span></div>
        <div class="cell" data-cell="c-141-5"><span class="cell__label">c-141-5</span><span class="cell__value">17.28</span></div>
        <div class="cell" data-cell="c-141-6"><span class="cell__label">c-141-6</span><span class="cell__value">10.87</span></div>
        <div class="cell" data-cell="c-141-7"><span class="cell__label">c-141-7</span><span class="cell__value">10.59</span></div>
        <div class="cell" data-cell="c-141-8"><span class="cell__label">c-141-8</span><span class="cell__value">56.19</span></div>
        <div class="cell" data-cell="c-141-9"><span class="cell__label">c-141-9</span><span class="cell__value">54.72</span></div>
        <div class="cell" data-cell="c-141-10"><span class="cell__label">c-141-10</span><span class="cell__value">11.58</span></div>
        <div class="cell" data-cell="c-141-11"><span class="cell__label">c-141-11</span><span class="cell__value">15.73</span></div>
        <div class="cell" data-cell="c-141-12"><span class="cell__label">c-141-12</span><span class="cell__value">65.94</span></div>
        <div class="cell" data-cell="c-141-13"><span class="cell__label">c-141-13</span><span class="cell__value">11.87</span></div>
        <div class="cell" data-cell="c-141-14"><span class="cell__label">c-141-14</span><span class="cell__value">66.76</span></div>
        <div class="cell" data-cell="c-141-15"><span class="cell__label">c-141-15</span><span class="cell__value">34.80</span></div>
        <div class="cell" data-cell="c-141-16"><span class="cell__label">c-141-16</span><span class="cell__value">72.17</span></div>
        <div class="cell" data-cell="c-141-17"><span class="cell__label">c-141-17</span><span class="cell__value">52.64</span></div>
        <div class="cell" data-cell="c-141-18"><span class="cell__label">c-141-18</span><span class="cell__value">68.81</span></div>
        <div class="cell" data-cell="c-141-19"><span class="cell__label">c-141-19</span><span class="cell__value">98.99</span></div>
      </div>
      <div class="row" data-row="r-142">
        <div class="cell" data-cell="c-142-0"><span class="cell__label">c-142-0</span><span class="cell__value">30.25</span></div>
        <div class="cell" data-cell="c-142-1"><span class="cell__label">c-142-1</span><span class="cell__value">65.80</span></div>
        <div class="cell" data-cell="c-142-2"><span class="cell__label">c-142-2</span><span class="cell__value">86.49</span></div>
        <div class="cell" data-cell="c-142-3"><span class="cell__label">c-142-3</span><span class="cell__value">82.30</span></div>
        <div class="cell" data-cell="c-142-4"><span class="cell__label">c-142-4</span><span class="cell__value">54.41</span></div>
        <div class="cell" data-cell="c-142-5"><span class="cell__label">c-142-5</span><span class="cell__value">23.21</span></div>
        <div class="cell" data-cell="c-142-6"><span class="cell__label">c-142-6</span><span class="cell__value">58.87</span></div>
        <div class="cell" data-cell="c-142-7"><span class="cell__label">c-142-7</span><span class="cell__value">80.12</span></div>
        <div class="cell" data-cell="c-142-8"><span class="cell__label">c-142-8</span><span class="cell__value">11.73</span></div>
        <div class="cell" data-cell="c-142-9"><span class="cell__label">c-142-9</span><span class="cell__value">3.88</span></div>
        <div class="cell" data-cell="c-142-10"><span class="cell__label">c-142-10</span><span class="cell__value">62.52</span></div>
        <div class="cell" data-cell="c-142-11"><span class="cell__label">c-142-11</span><span class="cell__value">84.47</span></div>
        <div class="cell" data-cell="c-142-12"><span class="cell__label">c-142-12</span><span class="cell__value">80.94</span></div>
        <div class="cell" data-cell="c-142-13"><span class="cell__label">c-142-13</span><span class="cell__value">84.75</span></div>
        <div class="cell" data-cell="c-142-14"><span class="cell__label">c-142-14</span><span class="cell__value">59.26</span></div>
        <div class="cell" data-cell="c-142-15"><span class="cell__label">c-142-15</span><span class="cell__value">71.85</span></div>
        <div class="cell" data-cell="c-142-16"><span class="cell__label">c-142-16</span><span class="cell__value">71.07</span></div>
        <div class="cell" data-cell="c-142-17"><span class="cell__label">c-142-17</span><span class="cell__value">94.40</span></div>
        <div class="cell" data-cell="c-142-18"><span class="cell__label">c-142-18</span><span class="cell__value">98.56</span></div>
        <div class="cell" data-cell="c-142-19"><span class="cell__label">c-142-19</span><span class="cell__value">81.78</span></div>
      </div>
      <div class="row" data-row="r-143">
        <div class="cell" data-cell="c-143-0"><span class="cell__label">c-143-0</span><span class="cell__value">34.92</span></div>
        <div class="cell" data-cell="c-143-1"><span class="cell__label">c-143-1</span><span class="cell__value">68.01</span></div>
        <div class="cell" data-cell="c-143-2"><span class="cell__label">c-143-2</span><span class="cell__value">90.52</span></div>
        <div class="cell" data-cell="c-143-3"><span class="cell__label">c-143-3</span><span class="cell__value">71.77</span></div>
        <div class="cell" data-cell="c-143-4"><span class="cell__label">c-143-4</span><span class="cell__value">45.47</span></div>
        <div class="cell" data-cell="c-143-5"><span class="cell__label">c-143-5</span><span class="cell__value">58.10</span></div>
        <div class="cell" data-cell="c-143-6"><span class="cell__label">c-143-6</span><span class="cell__value">89.49</span></div>
        <div class="cell" data-cell="c-143-7"><span class="cell__label">c-143-7</span><span class="cell__value">30.08</span></div>
        <div class="cell" data-cell="c-143-8"><span class="cell__label">c-143-8</span><span class="cell__value">64.31</span></div>
        <div class="cell" data-cell="c-143-9"><span class="cell__label">c-143-9</span><span class="cell__value">35.64</span></div>
        <div class="cell" data-cell="c-143-10"><span class="cell__label">c-143-10</span><span class="cell__value">76.91</span></div>
        <div class="cell" data-cell="c-143-11"><span class="cell__label">c-143-11</span><span class="cell__value">99.88</span></div>
        <div class="cell" data-cell="c-143-12"><span class="cell__label">c-143-12</span><span class="cell__value">73.99</span></div>
        <div class="cell" data-cell="c-143-13"><span class="cell__label">c-143-13</span><span class="cell__value">20.27</span></div>
        <div class="cell" data-cell="c-143-14"><span class="cell__label">c-143-14</span><span class="cell__value">81.59</span></div>
        <div class="cell" data-cell="c-143-15"><span class="cell__label">c-143-15</span><span class="cell__value">81.35</span></div>
        <div class="cell" data-cell="c-143-16"><span class="cell__label">c-143-16</span><span class="cell__value">0.13</span></div>
        <div class="cell" data-cell="c-143-17"><span class="cell__label">c-143-17</span><span class="cell__value">73.58</span></div>
        <div class="cell" data-cell="c-143-18"><span class="cell__label">c-143-18</span><span class="cell__value">16.52</span></div>
        <div class="cell" data-cell="c-143-19"><span class="cell__label">c-143-19</span><span class="cell__value">31.27</span></div>
      </div>
      <div class="row" data-row="r-144">
        <div class="cell" data-cell="c-144-0"><span class="cell__label">c-144-0</span><span class="cell__value">92.64</span></div>
        <div class="cell" data-cell="c-144-1"><span class="cell__label">c-144-1</span><span class="cell__value">0.63</span></div>
        <div class="cell" data-cell="c-144-2"><span class="cell__label">c-144-2</span><span class="cell__value">81.48</span></div>
        <div class="cell" data-cell="c-144-3"><span class="cell__label">c-144-3</span><span class="cell__value">28.48</span></div>
        <div class="cell" data-cell="c-144-4"><span class="cell__label">c-144-4</span><span class="cell__value">51.56</span></div>
        <div class="cell" data-cell="c-144-5"><span class="cell__label">c-144-5</span><span class="cell__value">38.31</span></div>
        <div class="cell" data-cell="c-144-6"><span class="cell__label">c-144-6</span><span class="cell__value">85.63</span></div>
        <div class="cell" data-cell="c-144-7"><span class="cell__label">c-144-7</span><span class="cell__value">89.17</span></div>
        <div class="cell" data-cell="c-144-8"><span class="cell__label">c-144-8</span><span class="cell__value">30.55</span></div>
        <div class="cell" data-cell="c-144-9"><span class="cell__label">c-144-9</span><span class="cell__value">89.70</span></div>
        <div class="cell" data-cell="c-144-10"><span class="cell__label">c-144-10</span><span class="cell__value">91.65</span></div>
        <div class="cell" data-cell="c-144-11"><span class="cell__label">c-144-11</span><span class="cell__value">51.34</span></div>
        <div class="cell" data-cell="c-144-12"><span class="cell__label">c-144-12</span><span class="cell__value">39.91</span></div>
        <div class="cell" data-cell="c-144-13"><span class="cell__label">c-144-13</span><span class="cell__value">71.17</span></div>
        <div class="cell" data-cell="c-144-14"><span class="cell__label">c-144-14</span><span class="cell__value">40.25</span></div>
        <div class="cell" data-cell="c-144-15"><span class="cell__label">c-144-15</span><span class="cell__value">18.51</span></div>
        <div class="cell" data-cell="c-144-16"><span class="cell__label">c-144-16</span><span class="cell__value">39.47</span></div>
        <div class="cell" data-cell="c-144-17"><span class="cell__label">c-144-17</span><span class="cell__value">71.65</span></div>
        <div class="cell" data-cell="c-144-18"><span class="cell__label">c-144-18</span><span class="cell__value">37.76</span></div>
        <div class="cell" data-cell="c-144-19"><span class="cell__label">c-144-19</span><span class="cell__value">67.74</span></div>
      </div>
      <div class="row" data-row="r-145">
        <div class="cell" data-cell="c-145-0"><span class="cell__label">c-145-0</span><span class="cell__value">14.43</span></div>
        <div class="cell" data-cell="c-145-1"><span class="cell__label">c-145-1</span><span class="cell__value">83.47</span></div>
        <div class="cell" data-cell="c-145-2"><span class="cell__label">c-145-2</span><span class="cell__value">28.84</span></div>
        <div class="cell" data-cell="c-145-3"><span class="cell__label">c-145-3</span><span class="cell__value">77.78</span></div>
        <div class="cell" data-cell="c-145-4"><span class="cell__label">c-145-4</span><span class="cell__value">3.79</span></div>
        <div class="cell" data-cell="c-145-5"><span class="cell__label">c-145-5</span><span class="cell__value">61.83</span></div>
        <div class="cell" data-cell="c-145-6"><span class="cell__label">c-145-6</span><span class="cell__value">71.95</span></div>
        <div class="cell" data-cell="c-145-7"><span class="cell__label">c-145-7</span><span class="cell__value">27.74</span></div>
        <div class="cell" data-cell="c-145-8"><span class="cell__label">c-145-8</span><span class="cell__value">19.59</span></div>
        <div class="cell" data-cell="c-145-9"><span class="cell__label">c-145-9</span><span class="cell__value">79.17</span></div>
        <div class="cell" data-cell="c-145-10"><span class="cell__label">c-145-10</span><span class="cell__value">88.05</span></div>
        <div class="cell" data-cell="c-145-11"><span class="cell__label">c-145-11</span><span class="cell__value">19.38</span></div>
        <div class="cell" data-cell="c-145-12"><span class="cell__label">c-145-12</span><span class="cell__value">36.93</span></div>
        <div class="cell" data-cell="c-145-13"><span class="cell__label">c-145-13</span><span class="cell__value">40.02</span></div>
        <div class="cell" data-cell="c-145-14"><span class="cell__label">c-145-14</span><span class="cell__value">89.36</span></div>
        <div class="cell" data-cell="c-145-15"><span class="cell__label">c-145-15</span><span class="cell__value">28.29</span></div>
        <div class="cell" data-cell="c-145-16"><span class="cell__label">c-145-16</span><span class="cell__value">60.30</span></div>
        <div class="cell" data-cell="c-145-17"><span class="cell__label">c-145-17</span><span class="cell__value">14.87</span></div>
        <div class="cell" data-cell="c-145-18"><span class="cell__label">c-145-18</span><span class="cell__value">94.48</span></div>
        <div class="cell" data-cell="c-145-19"><span class="cell__label">c-145-19</span><span class="cell__value">76.49</span></div>
      </div>
      <div class="row" data-row="r-146">
        <div class="cell" data-cell="c-146-0"><span class="cell__label">c-146-0</span><span class="cell__value">16.70</span></div>
        <div class="cell" data-cell="c-146-1"><span class="cell__label">c-146-1</span><span class="cell__value">41.38</span></div>
        <div class="cell" data-cell="c-146-2"><span class="cell__label">c-146-2</span><span class="cell__value">48.73</span></div>
        <div class="cell" data-cell="c-146-3"><span class="cell__label">c-146-3</span><span class="cell__value">0.75</span></div>
        <div class="cell" data-cell="c-146-4"><span class="cell__label">c-146-4</span><span class="cell__value">17.18</span></div>
        <div class="cell" data-cell="c-146-5"><span class="cell__label">c-146-5</span><span class="cell__value">4.89</span></div>
        <div class="cell" data-cell="c-146-6"><span class="cell__label">c-146-6</span><span class="cell__value">25.13</span></div>
        <div class="cell" data-cell="c-146-7"><span class="cell__label">c-146-7</span><span class="cell__value">39.50</span></div>
        <div class="cell" data-cell="c-146-8"><span class="cell__label">c-146-8</span><span class="cell__value">16.44</span></div>
        <div class="cell" data-cell="c-146-9"><span class="cell__label">c-146-9</span><span class="cell__value">33.53</span></div>
        <div class="cell" data-cell="c-146-10"><span class="cell__label">c-146-10</span><span class="cell__value">2.51</span></div>
        <div class="cell" data-cell="c-146-11"><span class="cell__label">c-146-11</span><span class="cell__value">69.29</span></div>
        <div class="cell" data-cell="c-146-12"><span class="cell__label">c-146-12</span><span class="cell__value">13.70</span></div>
        <div class="cell" data-cell="c-146-13"><span class="cell__label">c-146-13</span><span class="cell__value">38.20</span></div>
        <div class="cell" data-cell="c-146-14"><span class="cell__label">c-146-14</span><span class="cell__value">40.36</span></div>
        <div class="cell" data-cell="c-146-15"><span class="cell__label">c-146-15</span><span class="cell__value">51.66</span></div>
        <div class="cell" data-cell="c-146-16"><span class="cell__label">c-146-16</span><span class="cell__value">39.61</span></div>
        <div class="cell" data-cell="c-146-17"><span class="cell__label">c-146-17</span><span class="cell__value">17.13</span></div>
        <div class="cell" data-cell="c-146-18"><span class="cell__label">c-146-18</span><span class="cell__value">81.50</span></div>
        <div class="cell" data-cell="c-146-19"><span class="cell__label">c-146-19</span><span class="cell__value">15.54</span></div>
      </div>
      <div class="row" data-row="r-147">
        <div class="cell" data-cell="c-147-0"><span class="cell__label">c-147-0</span><span class="cell__value">42.43</span></div>
        <div class="cell" data-cell="c-147-1"><span class="cell__label">c-147-1</span><span class="cell__value">20.44</span></div>
        <div class="cell" data-cell="c-147-2"><span class="cell__label">c-147-2</span><span class="cell__value">55.34</span></div>
        <div class="cell" data-cell="c-147-3"><span class="cell__label">c-147-3</span><span class="cell__value">36.36</span></div>
        <div class="cell" data-cell="c-147-4"><span class="cell__label">c-147-4</span><span class="cell__value">59.62</span></div>
        <div class="cell" data-cell="c-147-5"><span class="cell__label">c-147-5</span><span class="cell__value">68.86</span></div>
        <div class="cell" data-cell="c-147-6"><span class="cell__label">c-147-6</span><span class="cell__value">60.61</span></div>
        <div class="cell" data-cell="c-147-7"><span class="cell__label">c-147-7</span><span class="cell__value">55.91</span></div>
        <div class="cell" data-cell="c-147-8"><span class="cell__label">c-147-8</span><span class="cell__value">80.09</span></div>
        <div class="cell" data-cell="c-147-9"><span class="cell__label">c-147-9</span><span class="cell__value">77.74</span></div>
        <div class="cell" data-cell="c-147-10"><span class="cell__label">c-147-10</span><span class="cell__value">67.14</span></div>
        <div class="cell" data-cell="c-147-11"><span class="cell__label">c-147-11</span><span class="cell__value">88.61</span></div>
        <div class="cell" data-cell="c-147-12"><span class="cell__label">c-147-12</span><span class="cell__value">9.47</span></div>
        <div class="cell" data-cell="c-147-13"><span class="cell__label">c-147-13</span><span class="cell__value">60.99</span></div>
        <div class="cell" data-cell="c-147-14"><span class="cell__label">c-147-14</span><span class="cell__value">44.59</span></div>
        <div class="cell" data-cell="c-147-15"><span class="cell__label">c-147-15</span><span class="cell__value">71.07</span></div>
        <div class="cell" data-cell="c-147-16"><span class="cell__label">c-147-16</span><span class="cell__value">43.81</span></div>
        <div class="cell" data-cell="c-147-17"><span class="cell__label">c-147-17</span><span class="cell__value">22.55</span></div>
        <div class="cell" data-cell="c-147-18"><span class="cell__label">c-147-18</span><span class="cell__value">63.08</span></div>
        <div class="cell" data-cell="c-147-19"><span class="cell__label">c-147-19</span><span class="cell__value">75.87</span></div>
      </div>
      <div class="row" data-row="r-148">
        <div class="cell" data-cell="c-148-0"><span class="cell__label">c-148-0</span><span class="cell__value">86.11</span></div>
        <div class="cell" data-cell="c-148-1"><span class="cell__label">c-148-1</span><span class="cell__value">38.64</span></div>
        <div class="cell" data-cell="c-148-2"><span class="cell__label">c-148-2</span><span class="cell__value">39.19</span></div>
        <div class="cell" data-cell="c-148-3"><span class="cell__label">c-148-3</span><span class="cell__value">52.38</span></div>
        <div class="cell" data-cell="c-148-4"><span class="cell__label">c-148-4</span><span class="cell__value">75.84</span></div>
        <div class="cell" data-cell="c-148-5"><span class="cell__label">c-148-5</span><span class="cell__value">60.25</span></div>
        <div class="cell" data-cell="c-148-6"><span class="cell__label">c-148-6</span><span class="cell__value">34.87</span></div>
        <div class="cell" data-cell="c-148-7"><span class="cell__label">c-148-7</span><span class="cell__value">62.64</span></div>
        <div class="cell" data-cell="c-148-8"><span class="cell__label">c-148-8</span><span class="cell__value">60.83</span></div>
        <div class="cell" data-cell="c-148-9"><span class="cell__label">c-148-9</span><span class="cell__value">60.01</span></div>
        <div class="cell" data-cell="c-148-10"><span class="cell__label">c-148-10</span><span class="cell__value">61.36</span></div>
        <div class="cell" data-cell="c-148-11"><span class="cell__label">c-148-11</span><span class="cell__value">82.03</span></div>
        <div class="cell" data-cell="c-148-12"><span class="cell__label">c-148-12</span><span class="cell__value">78.69</span></div>
        <div class="cell" data-cell="c-148-13"><span class="cell__label">c-148-13</span><span class="cell__value">59.17</span></div>
        <div class="cell" data-cell="c-148-14"><span class="cell__label">c-148-14</span><span class="cell__value">33.66</span></div>
        <div class="cell" data-cell="c-148-15"><span class="cell__label">c-148-15</span><span class="cell__value">26.79</span></div>
        <div class="cell" data-cell="c-148-16"><span class="cell__label">c-148-16</span><span class="cell__value">9.13</span></div>
        <div class="cell" data-cell="c-148-17"><span class="cell__label">c-148-17</span><span class="cell__value">39.87</span></div>
        <div class="cell" data-cell="c-148-18"><span class="cell__label">c-148-18</span><span class="cell__value">74.24</span></div>
        <div class="cell" data-cell="c-148-19"><span class="cell__label">c-148-19</span><span class="cell__value">60.92</span></div>
      </div>
      <div class="row" data-row="r-149">
        <div class="cell" data-cell="c-149-0"><span class="cell__label">c-149-0</span><span class="cell__value">80.58</span></div>
        <div class="cell" data-cell="c-149-1"><span class="cell__label">c-149-1</span><span class="cell__value">41.11</span></div>
        <div class="cell" data-cell="c-149-2"><span class="cell__label">c-149-2</span><span class="cell__value">29.11</span></div>
        <div class="cell" data-cell="c-149-3"><span class="cell__label">c-149-3</span><span class="cell__value">47.09</span></div>
        <div class="cell" data-cell="c-149-4"><span class="cell__label">c-149-4</span><span class="cell__value">82.02</span></div>
        <div class="cell" data-cell="c-149-5"><span class="cell__label">c-149-5</span><span class="cell__value">29.81</span></div>
        <div class="cell" data-cell="c-149-6"><span class="cell__label">c-149-6</span><span class="cell__value">0.52</span></div>
        <div class="cell" data-cell="c-149-7"><span class="cell__label">c-149-7</span><span class="cell__value">85.00</span></div>
        <div class="cell" data-cell="c-149-8"><span class="cell__label">c-149-8</span><span class="cell__value">27.50</span></div>
        <div class="cell" data-cell="c-149-9"><span class="cell__label">c-149-9</span><span class="cell__value">70.17</span></div>
        <div class="cell" data-cell="c-149-10"><span class="cell__label">c-149-10</span><span class="cell__value">37.55</span></div>
        <div class="cell" data-cell="c-149-11"><span class="cell__label">c-149-11</span><span class="cell__value">93.70</span></div>
        <div class="cell" data-cell="c-149-12"><span class="cell__label">c-149-12</span><span class="cell__value">59.93</span></div>
        <div class="cell" data-cell="c-149-13"><span class="cell__label">c-149-13</span><span class="cell__value">44.82</span></div>
        <div class="cell" data-cell="c-149-14"><span class="cell__label">c-149-14</span><span class="cell__value">39.75</span></div>
        <div class="cell" data-cell="c-149-15"><span class="cell__label">c-149-15</span><span class="cell__value">93.99</span></div>
        <div class="cell" data-cell="c-149-16"><span class="cell__label">c-149-16</span><span class="cell__value">71.23</span></div>
        <div class="cell" data-cell="c-149-17"><span class="cell__label">c-149-17</span><span class="cell__value">64.19</span></div>
        <div class="cell" data-cell="c-149-18"><span class="cell__label">c-149-18</span><span class="cell__value">13.07</span></div>
        <div class="cell" data-cell="c-149-19"><span class="cell__label">c-149-19</span><span class="cell__value">70.20</span></div>
      </div>
      <div class="row" data-row="r-150">
        <div class="cell" data-cell="c-150-0"><span class="cell__label">c-150-0</span><span class="cell__value">2.30</span></div>
        <div class="cell" data-cell="c-150-1"><span class="cell__label">c-150-1</span><span class="cell__value">10.37</span></div>
        <div class="cell" data-cell="c-150-2"><span class="cell__label">c-150-2</span><span class="cell__value">88.27</span></div>
        <div class="cell" data-cell="c-150-3"><span class="cell__label">c-150-3</span><span class="cell__value">95.17</span></div>
        <div class="cell" data-cell="c-150-4"><span class="cell__label">c-150-4</span><span class="cell__value">75.31</span></div>
        <div class="cell" data-cell="c-150-5"><span class="cell__label">c-150-5</span><span class="cell__value">62.07</span></div>
        <div class="cell" data-cell="c-150-6"><span class="cell__label">c-150-6</span><span class="cell__value">25.36</span></div>
        <div class="cell" data-cell="c-150-7"><span class="cell__label">c-150-7</span><span class="cell__value">26.65</span></div>
        <div class="cell" data-cell="c-150-8"><span class="cell__label">c-150-8</span><span class="cell__value">65.25</span></div>
        <div class="cell" data-cell="c-150-9"><span class="cell__label">c-150-9</span><span class="cell__value">52.71</span></div>
        <div class="cell" data-cell="c-150-10"><span class="cell__label">c-150-10</span><span class="cell__value">14.74</span></div>
        <div class="cell" data-cell="c-150-11"><span class="cell__label">c-150-11</span><span class="cell__value">12.09</span></div>
        <div class="cell" data-cell="c-150-12"><span class="cell__label">c-150-12</span><span class="cell__value">35.23</span></div>
        <div class="cell" data-cell="c-150-13"><span class="cell__label">c-150-13</span><span class="cell__value">90.64</span></div>
        <div class="cell" data-cell="c-150-14"><span class="cell__label">c-150-14</span><span class="cell__value">28.13</span></div>
        <div class="cell" data-cell="c-150-15"><span class="cell__label">c-150-15</span><span class="cell__value">41.52</span></div>
        <div class="cell" data-cell="c-150-16"><span class="cell__label">c-150-16</span><span class="cell__value">91.70</span></div>
        <div class="cell" data-cell="c-150-17"><span class="cell__label">c-150-17</span><span class="cell__value">14.88</span></div>
        <div class="cell" data-cell="c-150-18"><span class="cell__label">c-150-18</span><span class="cell__value">89.31</span></div>
        <div class="cell" data-cell="c-150-19"><span class="cell__label">c-150-19</span><span class="cell__value">54.75</span></div>
      </div>
      <div class="row" data-row="r-151">
        <div class="cell" data-cell="c-151-0"><span class="cell__label">c-151-0</span><span class="cell__value">91.11</span></div>
        <div class="cell" data-cell="c-151-1"><span class="cell__label">c-151-1</span><span class="cell__value">25.32</span></div>
        <div class="cell" data-cell="c-151-2"><span class="cell__label">c-151-2</span><span class="cell__value">60.42</span></div>
        <div class="cell" data-cell="c-151-3"><span class="cell__label">c-151-3</span><span class="cell__value">0.17</span></div>
        <div class="cell" data-cell="c-151-4"><span class="cell__label">c-151-4</span><span class="cell__value">48.79</span></div>
        <div class="cell" data-cell="c-151-5"><span class="cell__label">c-151-5</span><span class="cell__value">74.17</span></div>
        <div class="cell" data-cell="c-151-6"><span class="cell__label">c-151-6</span><span class="cell__value">26.19</span></div>
        <div class="cell" data-cell="c-151-7"><span class="cell__label">c-151-7</span><span class="cell__value">25.21</span></div>
        <div class="cell" data-cell="c-151-8"><span class="cell__label">c-151-8</span><span class="cell__value">43.27</span></div>
        <div class="cell" data-cell="c-151-9"><span class="cell__label">c-151-9</span><span class="cell__value">84.83</span></div>
        <div class="cell" data-cell="c-151-10"><span class="cell__label">c-151-10</span><span class="cell__value">48.20</span></div>
        <div class="cell" data-cell="c-151-11"><span class="cell__label">c-151-11</span><span class="cell__value">45.96</span></div>
        <div class="cell" data-cell="c-151-12"><span class="cell__label">c-151-12</span><span class="cell__value">25.96</span></div>
        <div class="cell" data-cell="c-151-13"><span class="cell__label">c-151-13</span><span class="cell__value">1.69</span></div>
        <div class="cell" data-cell="c-151-14"><span class="cell__label">c-151-14</span><span class="cell__value">21.59</span></div>
        <div class="cell" data-cell="c-151-15"><span class="cell__label">c-151-15</span><span class="cell__value">0.92</span></div>
        <div class="cell" data-cell="c-151-16"><span class="cell__label">c-151-16</span><span class="cell__value">29.85</span></div>
        <div class="cell" data-cell="c-151-17"><span class="cell__label">c-151-17</span><span class="cell__value">16.15</span></div>
        <div class="cell" data-cell="c-151-18"><span class="cell__label">c-151-18</span><span class="cell__value">60.69</span></div>
        <div class="cell" data-cell="c-151-19"><span class="cell__label">c-151-19</span><span class="cell__value">90.86</span></div>
      </div>
      <div class="row" data-row="r-152">
        <div class="cell" data-cell="c-152-0"><span class="cell__label">c-152-0</span><span class="cell__value">88.25</span></div>
        <div class="cell" data-cell="c-152-1"><span class="cell__label">c-152-1</span><span class="cell__value">40.24</span></div>
        <div class="cell" data-cell="c-152-2"><span class="cell__label">c-152-2</span><span class="cell__value">25.59</span></div>
        <div class="cell" data-cell="c-152-3"><span class="cell__label">c-152-3</span><span class="cell__value">24.20</span></div>
        <div class="cell" data-cell="c-152-4"><span class="cell__label">c-152-4</span><span class="cell__value">46.58</span></div>
        <div class="cell" data-cell="c-152-5"><span class="cell__label">c-152-5</span><span class="cell__value">50.18</span></div>
        <div class="cell" data-cell="c-152-6"><span class="cell__label">c-152-6</span><span class="cell__value">48.71</span></div>
        <div class="cell" data-cell="c-152-7"><span class="cell__label">c-152-7</span><span class="cell__value">23.31</span></div>
        <div class="cell" data-cell="c-152-8"><span class="cell__label">c-152-8</span><span class="cell__value">46.92</span></div>
        <div class="cell" data-cell="c-152-9"><span class="cell__label">c-152-9</span><span class="cell__value">23.36</span></div>
        <div class="cell" data-cell="c-152-10"><span class="cell__label">c-152-10</span><span class="cell__value">29.84</span></div>
        <div class="cell" data-cell="c-152-11"><span class="cell__label">c-152-11</span><span class="cell__value">44.14</span></div>
        <div class="cell" data-cell="c-152-12"><span class="cell__label">c-152-12</span><span class="cell__value">70.98</span></div>
        <div class="cell" data-cell="c-152-13"><span class="cell__label">c-152-13</span><span class="cell__value">59.04</span></div>
        <div class="cell" data-cell="c-152-14"><span class="cell__label">c-152-14</span><span class="cell__value">40.61</span></div>
        <div class="cell" data-cell="c-152-15"><span class="cell__label">c-152-15</span><span class="cell__value">48.79</span></div>
        <div class="cell" data-cell="c-152-16"><span class="cell__label">c-152-16</span><span class="cell__value">18.66</span></div>
        <div class="cell" data-cell="c-152-17"><span class="cell__label">c-152-17</span><span class="cell__value">14.96</span></div>
        <div class="cell" data-cell="c-152-18"><span class="cell__label">c-152-18</span><span class="cell__value">17.19</span></div>
        <div class="cell" data-cell="c-152-19"><span class="cell__label">c-152-19</span><span class="cell__value">97.88</span></div>
      </div>
      <div class="row" data-row="r-153">
        <div class="cell" data-cell="c-153-0"><span class="cell__label">c-153-0</span><span class="cell__value">94.64</span></div>
        <div class="cell" data-cell="c-153-1"><span class="cell__label">c-153-1</span><span class="cell__value">76.29</span></div>
        <div class="cell" data-cell="c-153-2"><span class="cell__label">c-153-2</span><span class="cell__value">88.57</span></div>
        <div class="cell" data-cell="c-153-3"><span class="cell__label">c-153-3</span><span class="cell__value">78.52</span></div>
        <div class="cell" data-cell="c-153-4"><span class="cell__label">c-153-4</span><span class="cell__value">47.45</span></div>
        <div class="cell" data-cell="c-153-5"><span class="cell__label">c-153-5</span><span class="cell__value">8.46</span></div>
        <div class="cell" data-cell="c-153-6"><span class="cell__label">c-153-6</span><span class="cell__value">15.93</span></div>
        <div class="cell" data-cell="c-153-7"><span class="cell__label">c-153-7</span><span class="cell__value">77.79</span></div>
        <div class="cell" data-cell="c-153-8"><span class="cell__label">c-153-8</span><span class="cell__value">81.01</span></div>
        <div class="cell" data-cell="c-153-9"><span class="cell__label">c-153-9</span><span class="cell__value">65.26</span></div>
        <div class="cell" data-cell="c-153-10"><span class="cell__label">c-153-10</span><span class="cell__value">8.70</span></div>
        <div class="cell" data-cell="c-153-11"><span class="cell__label">c-153-11</span><span class="cell__value">95.93</span></div>
        <div class="cell" data-cell="c-153-12"><span class="cell__label">c-153-12</span><span class="cell__value">4.99</span></div>
        <div class="cell" data-cell="c-153-13"><span class="cell__label">c-153-13</span><span class="cell__value">40.42</span></div>
        <div class="cell" data-cell="c-153-14"><span class="cell__label">c-153-14</span><span class="cell__value">7.67</span></div>
        <div class="cell" data-cell="c-153-15"><span class="cell__label">c-153-15</span><span class="cell__value">65.83</span></div>
        <div class="cell" data-cell="c-153-16"><span class="cell__label">c-153-16</span><span class="cell__value">75.29</span></div>
        <div class="cell" data-cell="c-153-17"><span class="cell__label">c-153-17</span><span class="cell__value">74.93</span></div>
        <div class="cell" data-cell="c-153-18"><span class="cell__label">c-153-18</span><span class="cell__value">55.73</span></div>
        <div class="cell" data-cell="c-153-19"><span class="cell__label">c-153-19</span><span class="cell__value">60.63</span></div>
      </div>
      <div class="row" data-row="r-154">
        <div class="cell" data-cell="c-154-0"><span class="cell__label">c-154-0</span><span class="cell__value">19.34</span></div>
        <div class="cell" data-cell="c-154-1"><span class="cell__label">c-154-1</span><span class="cell__value">40.27</span></div>
        <div class="cell" data-cell="c-154-2"><span class="cell__label">c-154-2</span><span class="cell__value">34.62</span></div>
        <div class="cell" data-cell="c-154-3"><span class="cell__label">c-154-3</span><span class="cell__value">69.63</span></div>
        <div class="cell" data-cell="c-154-4"><span class="cell__label">c-154-4</span><span class="cell__value">24.57</span></div>
        <div class="cell" data-cell="c-154-5"><span class="cell__label">c-154-5</span><span class="cell__value">37.12</span></div>
        <div class="cell" data-cell="c-154-6"><span class="cell__label">c-154-6</span><span class="cell__value">57.49</span></div>
        <div class="cell" data-cell="c-154-7"><span class="cell__label">c-154-7</span><span class="cell__value">25.51</span></div>
        <div class="cell" data-cell="c-154-8"><span class="cell__label">c-154-8</span><span class="cell__value">89.62</span></div>
        <div class="cell" data-cell="c-154-9"><span class="cell__label">c-154-9</span><span class="cell__value">99.39</span></div>
        <div class="cell" data-cell="c-154-10"><span class="cell__label">c-154-10</span><span class="cell__value">87.37</span></div>
        <div class="cell" data-cell="c-154-11"><span class="cell__label">c-154-11</span><span class="cell__value">10.22</span></div>
        <div class="cell" data-cell="c-154-12"><span class="cell__label">c-154-12</span><span class="cell__value">93.56</span></div>
        <div class="cell" data-cell="c-154-13"><span class="cell__label">c-154-13</span><span class="cell__value">67.18</span></div>
        <div class="cell" data-cell="c-154-14"><span class="cell__label">c-154-14</span><span class="cell__value">35.55</span></div>
        <div class="cell" data-cell="c-154-15"><span class="cell__label">c-154-15</span><span class="cell__value">16.02</span></div>
        <div class="cell" data-cell="c-154-16"><span class="cell__label">c-154-16</span><span class="cell__value">47.78</span></div>
        <div class="cell" data-cell="c-154-17"><span class="cell__label">c-154-17</span><span class="cell__value">76.59</span></div>
        <div class="cell" data-cell="c-154-18"><span class="cell__label">c-154-18</span><span class="cell__value">8.18</span></div>
        <div class="cell" data-cell="c-154-19"><span class="cell__label">c-154-19</span><span class="cell__value">64.46</span></div>
      </div>
      <div class="row" data-row="r-155">
        <div class="cell" data-cell="c-155-0"><span class="cell__label">c-155-0</span><span class="cell__value">29.00</span></div>
        <div class="cell" data-cell="c-155-1"><span class="cell__label">c-155-1</span><span class="cell__value">47.59</span></div>
        <div class="cell" data-cell="c-155-2"><span class="cell__label">c-155-2</span><span class="cell__value">69.42</span></div>
        <div class="cell" data-cell="c-155-3"><span class="cell__label">c-155-3</span><span class="cell__value">38.15</span></div>
        <div class="cell" data-cell="c-155-4"><span class="cell__label">c-155-4</span><span class="cell__value">99.27</span></div>
        <div class="cell" data-cell="c-155-5"><span class="cell__label">c-155-5</span><span class="cell__value">27.52</span></div>
        <div class="cell" data-cell="c-155-6"><span class="cell__label">c-155-6</span><span class="cell__value">60.15</span></div>
        <div class="cell" data-cell="c-155-7"><span class="cell__label">c-155-7</span><span class="cell__value">99.15</span></div>
        <div class="cell" data-cell="c-155-8"><span class="cell__label">c-155-8</span><span class="cell__value">94.29</span></div>
        <div class="cell" data-cell="c-155-9"><span class="cell__label">c-155-9</span><span class="cell__value">2.38</span></div>
        <div class="cell" data-cell="c-155-10"><span class="cell__label">c-155-10</span><span class="cell__value">40.05</span></div>
        <div class="cell" data-cell="c-155-11"><span class="cell__label">c-155-11</span><span class="cell__value">41.91</span></div>
        <div class="cell" data-cell="c-155-12"><span class="cell__label">c-155-12</span><span class="cell__value">84.31</span></div>
        <div class="cell" data-cell="c-155-13"><span class="cell__label">c-155-13</span><span class="cell__value">77.17</span></div>
        <div class="cell" data-cell="c-155-14"><span class="cell__label">c-155-14</span><span class="cell__value">13.80</span></div>
        <div class="cell" data-cell="c-155-15"><span class="cell__label">c-155-15</span><span class="cell__value">56.11</span></div>
        <div class="cell" data-cell="c-155-16"><span class="cell__label">c-155-16</span><span class="cell__value">84.09</span></div>
        <div class="cell" data-cell="c-155-17"><span class="cell__label">c-155-17</span><span class="cell__value">7.08</span></div>
        <div class="cell" data-cell="c-155-18"><span class="cell__label">c-155-18</span><span class="cell__value">76.75</span></div>
        <div class="cell" data-cell="c-155-19"><span class="cell__label">c-155-19</span><span class="cell__value">25.52</span></div>
      </div>
      <div class="row" data-row="r-156">
        <div class="cell" data-cell="c-156-0"><span class="cell__label">c-156-0</span><span class="cell__value">51.34</span></div>
        <div class="cell" data-cell="c-156-1"><span class="cell__label">c-156-1</span><span class="cell__value">72.83</span></div>
        <div class="cell" data-cell="c-156-2"><span class="cell__label">c-156-2</span><span class="cell__value">53.73</span></div>
        <div class="cell" data-cell="c-156-3"><span class="cell__label">c-156-3</span><span class="cell__value">46.36</span></div>
        <div class="cell" data-cell="c-156-4"><span class="cell__label">c-156-4</span><span class="cell__value">16.55</span></div>
        <div class="cell" data-cell="c-156-5"><span class="cell__label">c-156-5</span><span class="cell__value">6.26</span></div>
        <div class="cell" data-cell="c-156-6"><span class="cell__label">c-156-6</span><span class="cell__value">49.82</span></div>
        <div class="cell" data-cell="c-156-7"><span class="cell__label">c-156-7</span><span class="cell__value">82.53</span></div>
        <div class="cell" data-cell="c-156-8"><span class="cell__label">c-156-8</span><span class="cell__value">13.90</span></div>
        <div class="cell" data-cell="c-156-9"><span class="cell__label">c-156-9</span><span class="cell__value">35.98</span></div>
        <div class="cell" data-cell="c-156-10"><span class="cell__label">c-156-10</span><span class="cell__value">52.39</span></div>
        <div class="cell" data-cell="c-156-11"><span class="cell__label">c-156-11</span><span class="cell__value">28.05</span></div>
        <div class="cell" data-cell="c-156-12"><span class="cell__label">c-156-12</span><span class="cell__value">96.59</span></div>
        <div class="cell" data-cell="c-156-13"><span class="cell__label">c-156-13</span><span class="cell__value">11.67</span></div>
        <div class="cell" data-cell="c-156-14"><span class="cell__label">c-156-14</span><span class="cell__value">76.84</span></div>
        <div class="cell" data-cell="c-156-15"><span class="cell__label">c-156-15</span><span class="cell__value">2.16</span></div>
        <div class="cell" data-cell="c-156-16"><span class="cell__label">c-156-16</span><span class="cell__value">59.24</span></div>
        <div class="cell" data-cell="c-156-17"><span class="cell__label">c-156-17</span><span class="cell__value">97.64</span></div>
        <div class="cell" data-cell="c-156-18"><span class="cell__label">c-156-18</span><span class="cell__value">47.53</span></div>
        <div class="cell" data-cell="c-156-19"><span class="cell__label">c-156-19</span><span class="cell__value">15.79</span></div>
      </div>
      <div class="row" data-row="r-157">
        <div class="cell" data-cell="c-157-0"><span class="cell__label">c-157-0</span><span class="cell__value">92.15</span></div>
        <div class="cell" data-cell="c-157-1"><span class="cell__label">c-157-1</span><span class="cell__value">76.05</span></div>
        <div class="cell" data-cell="c-157-2"><span class="cell__label">c-157-2</span><span class="cell__value">1.08</span></div>
        <div class="cell" data-cell="c-157-3"><span class="cell__label">c-157-3</span><span class="cell__value">68.24</span></div>
        <div class="cell" data-cell="c-157-4"><span class="cell__label">c-157-4</span><span class="cell__value">2.03</span></div>
        <div class="cell" data-cell="c-157-5"><span class="cell__label">c-157-5</span><span class="cell__value">47.91</span></div>
        <div class="cell" data-cell="c-157-6"><span class="cell__label">c-157-6</span><span class="cell__value">59.46</span></div>
        <div class="cell" data-cell="c-157-7"><span class="cell__label">c-157-7</span><span class="cell__value">7.38</span></div>
        <div class="cell" data-cell="c-157-8"><span class="cell__label">c-157-8</span><span class="cell__value">67.54</span></div>
        <div class="cell" data-cell="c-157-9"><span class="cell__label">c-157-9</span><span class="cell__value">82.46</span></div>
        <div class="cell" data-cell="c-157-10"><span class="cell__label">c-157-10</span><span class="cell__value">93.63</span></div>
        <div class="cell" data-cell="c-157-11"><span class="cell__label">c-157-11</span><span class="cell__value">12.66</span></div>
        <div class="cell" data-cell="c-157-12"><span class="cell__label">c-157-12</span><span class="cell__value">0.65</span></div>
        <div class="cell" data-cell="c-157-13"><span class="cell__label">c-157-13</span><span class="cell__value">12.28</span></div>
        <div class="cell" data-cell="c-157-14"><span class="cell__label">c-157-14</span><span class="cell__value">15.67</span></div>
        <div class="cell" data-cell="c-157-15"><span class="cell__label">c-157-15</span><span class="cell__value">92.61</span></div>
        <div class="cell" data-cell="c-157-16"><span class="cell__label">c-157-16</span><span class="cell__value">43.30</span></div>
        <div class="cell" data-cell="c-157-17"><span class="cell__label">c-157-17</span><span class="cell__value">28.21</span></div>
        <div class="cell" data-cell="c-157-18"><span class="cell__label">c-157-18</span><span class="cell__value">84.24</span></div>
        <div class="cell" data-cell="c-157-19"><span class="cell__label">c-157-19</span><span class="cell__value">33.32</span></div>
      </div>
      <div class="row" data-row="r-158">
        <div class="cell" data-cell="c-158-0"><span class="cell__label">c-158-0</span><span class="cell__value">14.63</span></div>
        <div class="cell" data-cell="c-158-1"><span class="cell__label">c-158-1</span><span class="cell__value">90.74</span></div>
        <div class="cell" data-cell="c-158-2"><span class="cell__label">c-158-2</span><span class="cell__value">47.50</span></div>
        <div class="cell" data-cell="c-158-3"><span class="cell__label">c-158-3</span><span class="cell__value">44.42</span></div>
        <div class="cell" data-cell="c-158-4"><span class="cell__label">c-158-4</span><span class="cell__value">67.08</span></div>
        <div class="cell" data-cell="c-158-5"><span class="cell__label">c-158-5</span><span class="cell__value">26.59</span></div>
        <div class="cell" data-cell="c-158-6"><span class="cell__label">c-158-6</span><span class="cell__value">40.74</span></div>
        <div class="cell" data-cell="c-158-7"><span class="cell__label">c-158-7</span><span class="cell__value">50.01</span></div>
        <div class="cell" data-cell="c-158-8"><span class="cell__label">c-158-8</span><span class="cell__value">3.91</span></div>
        <div class="cell" data-cell="c-158-9"><span class="cell__label">c-158-9</span><span class="cell__value">69.56</span></div>
        <div class="cell" data-cell="c-158-10"><span class="cell__label">c-158-10</span><span class="cell__value">35.20</span></div>
        <div class="cell" data-cell="c-158-11"><span class="cell__label">c-158-11</span><span class="cell__value">17.02</span></div>
        <div class="cell" data-cell="c-158-12"><span class="cell__label">c-158-12</span><span class="cell__value">26.05</span></div>
        <div class="cell" data-cell="c-158-13"><span class="cell__label">c-158-13</span><span class="cell__value">85.99</span></div>
        <div class="cell" data-cell="c-158-14"><span class="cell__label">c-158-14</span><span class="cell__value">72.94</span></div>
        <div class="cell" data-cell="c-158-15"><span class="cell__label">c-158-15</span><span class="cell__value">26.05</span></div>
        <div class="cell" data-cell="c-158-16"><span class="cell__label">c-158-16</span><span class="cell__value">16.54</span></div>
        <div class="cell" data-cell="c-158-17"><span class="cell__label">c-158-17</span><span class="cell__value">84.53</span></div>
        <div class="cell" data-cell="c-158-18"><span class="cell__label">c-158-18</span><span class="cell__value">94.83</span></div>
        <div class="cell" data-cell="c-158-19"><span class="cell__label">c-158-19</span><span class="cell__value">98.19</span></div>
      </div>
      <div class="row" data-row="r-159">
        <div class="cell" data-cell="c-159-0"><span class="cell__label">c-159-0</span><span class="cell__value">2.25</span></div>
        <div class="cell" data-cell="c-159-1"><span class="cell__label">c-159-1</span><span class="cell__value">56.74</span></div>
        <div class="cell" data-cell="c-159-2"><span class="cell__label">c-159-2</span><span class="cell__value">61.04</span></div>
        <div class="cell" data-cell="c-159-3"><span class="cell__label">c-159-3</span><span class="cell__value">19.02</span></div>
        <div class="cell" data-cell="c-159-4"><span class="cell__label">c-159-4</span><span class="cell__value">2.24</span></div>
        <div class="cell" data-cell="c-159-5"><span class="cell__label">c-159-5</span><span class="cell__value">75.68</span></div>
        <div class="cell" data-cell="c-159-6"><span class="cell__label">c-159-6</span><span class="cell__value">58.04</span></div>
        <div class="cell" data-cell="c-159-7"><span class="cell__label">c-159-7</span><span class="cell__value">61.15</span></div>
        <div class="cell" data-cell="c-159-8"><span class="cell__label">c-159-8</span><span class="cell__value">90.61</span></div>
        <div class="cell" data-cell="c-159-9"><span class="cell__label">c-159-9</span><span class="cell__value">33.99</span></div>
        <div class="cell" data-cell="c-159-10"><span class="cell__label">c-159-10</span><span class="cell__value">10.48</span></div>
        <div class="cell" data-cell="c-159-11"><span class="cell__label">c-159-11</span><span class="cell__value">82.29</span></div>
        <div class="cell" data-cell="c-159-12"><span class="cell__label">c-159-12</span><span class="cell__value">67.72</span></div>
        <div class="cell" data-cell="c-159-13"><span class="cell__label">c-159-13</span><span class="cell__value">71.96</span></div>
        <div class="cell" data-cell="c-159-14"><span class="cell__label">c-159-14</span><span class="cell__value">76.49</span></div>
        <div class="cell" data-cell="c-159-15"><span class="cell__label">c-159-15</span><span class="cell__value">57.81</span></div>
        <div class="cell" data-cell="c-159-16"><span class="cell__label">c-159-16</span><span class="cell__value">87.52</span></div>
        <div class="cell" data-cell="c-159-17"><span class="cell__label">c-159-17</span><span class="cell__value">11.02</span></div>
        <div class="cell" data-cell="c-159-18"><span class="cell__label">c-159-18</span><span class="cell__value">51.76</span></div>
        <div class="cell" data-cell="c-159-19"><span class="cell__label">c-159-19</span><span class="cell__value">30.94</span></div>
      </div>
      <div class="row" data-row="r-160">
        <div class="cell" data-cell="c-160-0"><span class="cell__label">c-160-0</span><span class="cell__value">18.65</span></div>
        <div class="cell" data-cell="c-160-1"><span class="cell__label">c-160-1</span><span class="cell__value">39.89</span></div>
        <div class="cell" data-cell="c-160-2"><span class="cell__label">c-160-2</span><span class="cell__value">81.03</span></div>
        <div class="cell" data-cell="c-160-3"><span class="cell__label">c-160-3</span><span class="cell__value">32.42</span></div>
        <div class="cell" data-cell="c-160-4"><span class="cell__label">c-160-4</span><span class="cell__value">49.70</span></div>
        <div class="cell" data-cell="c-160-5"><span class="cell__label">c-160-5</span><span class="cell__value">82.02</span></div>
        <div class="cell" data-cell="c-160-6"><span class="cell__label">c-160-6</span><span class="cell__value">73.77</span></div>
        <div class="cell" data-cell="c-160-7"><span class="cell__label">c-160-7</span><span class="cell__value">70.06</span></div>
        <div class="cell" data-cell="c-160-8"><span class="cell__label">c-160-8</span><span class="cell__value">14.25</span></div>
        <div class="cell" data-cell="c-160-9"><span class="cell__label">c-160-9</span><span class="cell__value">95.26</span></div>
        <div class="cell" data-cell="c-160-10"><span class="cell__label">c-160-10</span><span class="cell__value">77.69</span></div>
        <div class="cell" data-cell="c-160-11"><span class="cell__label">c-160-11</span><span class="cell__value">91.04</span></div>
        <div class="cell" data-cell="c-160-12"><span class="cell__label">c-160-12</span><span class="cell__value">92.56</span></div>
        <div class="cell" data-cell="c-160-13"><span class="cell__label">c-160-13</span><span class="cell__value">66.28</span></div>
        <div class="cell" data-cell="c-160-14"><span class="cell__label">c-160-14</span><span class="cell__value">91.86</span></div>
        <div class="cell" data-cell="c-160-15"><span class="cell__label">c-160-15</span><span class="cell__value">82.79</span></div>
        <div class="cell" data-cell="c-160-16"><span class="cell__label">c-160-16</span><span class="cell__value">32.19</span></div>
        <div class="cell" data-cell="c-160-17"><span class="cell__label">c-160-17</span><span class="cell__value">32.26</span></div>
        <div class="cell" data-cell="c-160-18"><span class="cell__label">c-160-18</span><span class="cell__value">49.59</span></div>
        <div class="cell" data-cell="c-160-19"><span class="cell__label">c-160-19</span><span class="cell__value">29.11</span></div>
      </div>
      <div class="row" data-row="r-161">
        <div class="cell" data-cell="c-161-0"><span class="cell__label">c-161-0</span><span class="cell__value">18.26</span></div>
        <div class="cell" data-cell="c-161-1"><span class="cell__label">c-161-1</span><span class="cell__value">53.15</span></div>
        <div class="cell" data-cell="c-161-2"><span class="cell__label">c-161-2</span><span class="cell__value">36.92</span></div>
        <div class="cell" data-cell="c-161-3"><span class="cell__label">c-161-3</span><span class="cell__value">73.99</span></div>
        <div class="cell" data-cell="c-161-4"><span class="cell__label">c-161-4</span><span class="cell__value">34.66</span></div>
        <div class="cell" data-cell="c-161-5"><span class="cell__label">c-161-5</span><span class="cell__value">43.82</span></div>
        <div class="cell" data-cell="c-161-6"><span class="cell__label">c-161-6</span><span class="cell__value">53.76</span></div>
        <div class="cell" data-cell="c-161-7"><span class="cell__label">c-161-7</span><span class="cell__value">23.58</span></div>
        <div class="cell" data-cell="c-161-8"><span class="cell__label">c-161-8</span><span class="cell__value">4.34</span></div>
        <div class="cell" data-cell="c-161-9"><span class="cell__label">c-161-9</span><span class="cell__value">34.59</span></div>
        <div class="cell" data-cell="c-161-10"><span class="cell__label">c-161-10</span><span class="cell__value">28.26</span></div>
        <div class="cell" data-cell="c-161-11"><span class="cell__label">c-161-11</span><span class="cell__value">2.60</span></div>
        <div class="cell" data-cell="c-161-12"><span class="cell__label">c-161-12</span><span class="cell__value">15.74</span></div>
        <div class="cell" data-cell="c-161-13"><span class="cell__label">c-161-13</span><span class="cell__value">81.42</span></div>
        <div class="cell" data-cell="c-161-14"><span class="cell__label">c-161-14</span><span class="cell__value">34.48</span></div>
        <div class="cell" data-cell="c-161-15"><span class="cell__label">c-161-15</span><span class="cell__value">7.07</span></div>
        <div class="cell" data-cell="c-161-16"><span class="cell__label">c-161-16</span><span class="cell__value">2.96</span></div>
        <div class="cell" data-cell="c-161-17"><span class="cell__label">c-161-17</span><span class="cell__value">6.73</span></div>
        <div class="cell" data-cell="c-161-18"><span class="cell__label">c-161-18</span><span class="cell__value">35.31</span></div>
        <div class="cell" data-cell="c-161-19"><span class="cell__label">c-161-19</span><span class="cell__value">49.30</span></div>
      </div>
      <div class="row" data-row="r-162">
        <div class="cell" data-cell="c-162-0"><span class="cell__label">c-162-0</span><span class="cell__value">18.17</span></div>
        <div class="cell" data-cell="c-162-1"><span class="cell__label">c-162-1</span><span class="cell__value">21.90</span></div>
        <div class="cell" data-cell="c-162-2"><span class="cell__label">c-162-2</span><span class="cell__value">87.93</span></div>
        <div class="cell" data-cell="c-162-3"><span class="cell__label">c-162-3</span><span class="cell__value">60.50</span></div>
        <div class="cell" data-cell="c-162-4"><span class="cell__label">c-162-4</span><span class="cell__value">19.97</span></div>
        <div class="cell" data-cell="c-162-5"><span class="cell__label">c-162-5</span><span class="cell__value">66.18</span></div>
        <div class="cell" data-cell="c-162-6"><span class="cell__label">c-162-6</span><span class="cell__value">77.22</span></div>
        <div class="cell" data-cell="c-162-7"><span class="cell__label">c-162-7</span><span class="cell__value">97.30</span></div>
        <div class="cell" data-cell="c-162-8"><span class="cell__label">c-162-8</span><span class="cell__value">44.35</span></div>
        <div class="cell" data-cell="c-162-9"><span class="cell__label">c-162-9</span><span class="cell__value">29.43</span></div>
        <div class="cell" data-cell="c-162-10"><span class="cell__label">c-162-10</span><span class="cell__value">68.50</span></div>
        <div class="cell" data-cell="c-162-11"><span class="cell__label">c-162-11</span><span class="cell__value">55.54</span></div>
        <div class="cell" data-cell="c-162-12"><span class="cell__label">c-162-12</span><span class="cell__value">16.39</span></div>
        <div class="cell" data-cell="c-162-13"><span class="cell__label">c-162-13</span><span class="cell__value">6.82</span></div>
        <div class="cell" data-cell="c-162-14"><span class="cell__label">c-162-14</span><span class="cell__value">21.13</span></div>
        <div class="cell" data-cell="c-162-15"><span class="cell__label">c-162-15</span><span class="cell__value">28.04</span></div>
        <div class="cell" data-cell="c-162-16"><span class="cell__label">c-162-16</span><span class="cell__value">56.18</span></div>
        <div class="cell" data-cell="c-162-17"><span class="cell__label">c-162-17</span><span class="cell__value">29.89</span></div>
        <div class="cell" data-cell="c-162-18"><span class="cell__label">c-162-18</span><span class="cell__value">24.26</span></div>
        <div class="cell" data-cell="c-162-19"><span class="cell__label">c-162-19</span><span class="cell__value">56.14</span></div>
      </div>
      <div class="row" data-row="r-163">
        <div class="cell" data-cell="c-163-0"><span class="cell__label">c-163-0</span><span class="cell__value">48.72</span></div>
        <div class="cell" data-cell="c-163-1"><span class="cell__label">c-163-1</span><span class="cell__value">74.75</span></div>
        <div class="cell" data-cell="c-163-2"><span class="cell__label">c-163-2</span><span class="cell__value">21.90</span></div>
        <div class="cell" data-cell="c-163-3"><span class="cell__label">c-163-3</span><span class="cell__value">82.67</span></div>
        <div class="cell" data-cell="c-163-4"><span class="cell__label">c-163-4</span><span class="cell__value">13.39</span></div>
        <div class="cell" data-cell="c-163-5"><span class="cell__label">c-163-5</span><span class="cell__value">86.09</span></div>
        <div class="cell" data-cell="c-163-6"><span class="cell__label">c-163-6</span><span class="cell__value">95.48</span></div>
        <div class="cell" data-cell="c-163-7"><span class="cell__label">c-163-7</span><span class="cell__value">92.20</span></div>
        <div class="cell" data-cell="c-163-8"><span class="cell__label">c-163-8</span><span class="cell__value">44.79</span></div>
        <div class="cell" data-cell="c-163-9"><span class="cell__label">c-163-9</span><span class="cell__value">36.55</span></div>
        <div class="cell" data-cell="c-163-10"><span class="cell__label">c-163-10</span><span class="cell__value">95.00</span></div>
        <div class="cell" data-cell="c-163-11"><span class="cell__label">c-163-11</span><span class="cell__value">25.94</span></div>
        <div class="cell" data-cell="c-163-12"><span class="cell__label">c-163-12</span><span class="cell__value">52.22</span></div>
        <div class="cell" data-cell="c-163-13"><span class="cell__label">c-163-13</span><span class="cell__value">33.89</span></div>
        <div class="cell" data-cell="c-163-14"><span class="cell__label">c-163-14</span><span class="cell__value">86.93</span></div>
        <div class="cell" data-cell="c-163-15"><span class="cell__label">c-163-15</span><span class="cell__value">79.29</span></div>
        <div class="cell" data-cell="c-163-16"><span class="cell__label">c-163-16</span><span class="cell__value">12.13</span></div>
        <div class="cell" data-cell="c-163-17"><span class="cell__label">c-163-17</span><span class="cell__value">14.68</span></div>
        <div class="cell" data-cell="c-163-18"><span class="cell__label">c-163-18</span><span class="cell__value">9.82</span></div>
        <div class="cell" data-cell="c-163-19"><span class="cell__label">c-163-19</span><span class="cell__value">42.35</span></div>
      </div>
      <div class="row" data-row="r-164">
        <div class="cell" data-cell="c-164-0"><span class="cell__label">c-164-0</span><span class="cell__value">69.79</span></div>
        <div class="cell" data-cell="c-164-1"><span class="cell__label">c-164-1</span><span class="cell__value">89.76</span></div>
        <div class="cell" data-cell="c-164-2"><span class="cell__label">c-164-2</span><span class="cell__value">40.00</span></div>
        <div class="cell" data-cell="c-164-3"><span class="cell__label">c-164-3</span><span class="cell__value">16.20</span></div>
        <div class="cell" data-cell="c-164-4"><span class="cell__label">c-164-4</span><span class="cell__value">33.76</span></div>
        <div class="cell" data-cell="c-164-5"><span class="cell__label">c-164-5</span><span class="cell__value">24.92</span></div>
        <div class="cell" data-cell="c-164-6"><span class="cell__label">c-164-6</span><span class="cell__value">24.42</span></div>
        <div class="cell" data-cell="c-164-7"><span class="cell__label">c-164-7</span><span class="cell__value">1.12</span></div>
        <div class="cell" data-cell="c-164-8"><span class="cell__label">c-164-8</span><span class="cell__value">57.47</span></div>
        <div class="cell" data-cell="c-164-9"><span class="cell__label">c-164-9</span><span class="cell__value">64.49</span></div>
        <div class="cell" data-cell="c-164-10"><span class="cell__label">c-164-10</span><span class="cell__value">7.03</span></div>
        <div class="cell" data-cell="c-164-11"><span class="cell__label">c-164-11</span><span class="cell__value">88.07</span></div>
        <div class="cell" data-cell="c-164-12"><span class="cell__label">c-164-12</span><span class="cell__value">28.37</span></div>
        <div class="cell" data-cell="c-164-13"><span class="cell__label">c-164-13</span><span class="cell__value">58.41</span></div>
        <div class="cell" data-cell="c-164-14"><span class="cell__label">c-164-14</span><span class="cell__value">68.65</span></div>
        <div class="cell" data-cell="c-164-15"><span class="cell__label">c-164-15</span><span class="cell__value">43.98</span></div>
        <div class="cell" data-cell="c-164-16"><span class="cell__label">c-164-16</span><span class="cell__value">83.27</span></div>
        <div class="cell" data-cell="c-164-17"><span class="cell__label">c-164-17</span><span class="cell__value">15.88</span></div>
        <div class="cell" data-cell="c-164-18"><span class="cell__label">c-164-18</span><span class="cell__value">59.62</span></div>
        <div class="cell" data-cell="c-164-19"><span class="cell__label">c-164-19</span><span class="cell__value">0.13</span></div>
      </div>
      <div class="row" data-row="r-165">
        <div class="cell" data-cell="c-165-0"><span class="cell__label">c-165-0</span><span class="cell__value">49.20</span></div>
        <div class="cell" data-cell="c-165-1"><span class="cell__label">c-165-1</span><span class="cell__value">3.63</span></div>
        <div class="cell" data-cell="c-165-2"><span class="cell__label">c-165-2</span><span class="cell__value">19.94</span></div>
        <div class="cell" data-cell="c-165-3"><span class="cell__label">c-165-3</span><span class="cell__value">46.38</span></div>
        <div class="cell" data-cell="c-165-4"><span class="cell__label">c-165-4</span><span class="cell__value">85.09</span></div>
        <div class="cell" data-cell="c-165-5"><span class="cell__label">c-165-5</span><span class="cell__value">72.00</span></div>
        <div class="cell" data-cell="c-165-6"><span class="cell__label">c-165-6</span><span class="cell__value">87.82</span></div>
        <div class="cell" data-cell="c-165-7"><span class="cell__label">c-165-7</span><span class="cell__value">67.21</span></div>
        <div class="cell" data-cell="c-165-8"><span class="cell__label">c-165-8</span><span class="cell__value">19.80</span></div>
        <div class="cell" data-cell="c-165-9"><span class="cell__label">c-165-9</span><span class="cell__value">33.59</span></div>
        <div class="cell" data-cell="c-165-10"><span class="cell__label">c-165-10</span><span class="cell__value">41.45</span></div>
        <div class="cell" data-cell="c-165-11"><span class="cell__label">c-165-11</span><span class="cell__value">4.70</span></div>
        <div class="cell" data-cell="c-165-12"><span class="cell__label">c-165-12</span><span class="cell__value">31.43</span></div>
        <div class="cell" data-cell="c-165-13"><span class="cell__label">c-165-13</span><span class="cell__value">64.36</span></div>
        <div class="cell" data-cell="c-165-14"><span class="cell__label">c-165-14</span><span class="cell__value">89.32</span></div>
        <div class="cell" data-cell="c-165-15"><span class="cell__label">c-165-15</span><span class="cell__value">50.30</span></div>
        <div class="cell" data-cell="c-165-16"><span class="cell__label">c-165-16</span><span class="cell__value">21.13</span></div>
        <div class="cell" data-cell="c-165-17"><span class="cell__label">c-165-17</span><span class="cell__value">9.73</span></div>
        <div class="cell" data-cell="c-165-18"><span class="cell__label">c-165-18</span><span class="cell__value">17.01</span></div>
        <div class="cell" data-cell="c-165-19"><span class="cell__label">c-165-19</span><span class="cell__value">11.80</span></div>
      </div>
      <div class="row" data-row="r-166">
        <div class="cell" data-cell="c-166-0"><span class="cell__label">c-166-0</span><span class="cell__value">11.16</span></div>
        <div class="cell" data-cell="c-166-1"><span class="cell__label">c-166-1</span><span class="cell__value">91.66</span></div>
        <div class="cell" data-cell="c-166-2"><span class="cell__label">c-166-2</span><span class="cell__value">33.48</span></div>
        <div class="cell" data-cell="c-166-3"><span class="cell__label">c-166-3</span><span class="cell__value">32.80</span></div>
        <div class="cell" data-cell="c-166-4"><span class="cell__label">c-166-4</span><span class="cell__value">18.53</span></div>
        <div class="cell" data-cell="c-166-5"><span class="cell__label">c-166-5</span><span class="cell__value">94.46</span></div>
        <div class="cell" data-cell="c-166-6"><span class="cell__label">c-166-6</span><span class="cell__value">76.02</span></div>
        <div class="cell" data-cell="c-166-7"><span class="cell__label">c-166-7</span><span class="cell__value">47.51</span></div>
        <div class="cell" data-cell="c-166-8"><span class="cell__label">c-166-8</span><span class="cell__value">9.35</span></div>
        <div class="cell" data-cell="c-166-9"><span class="cell__label">c-166-9</span><span class="cell__value">81.22</span></div>
        <div class="cell" data-cell="c-166-10"><span class="cell__label">c-166-10</span><span class="cell__value">67.07</span></div>
        <div class="cell" data-cell="c-166-11"><span class="cell__label">c-166-11</span><span class="cell__value">69.98</span></div>
        <div class="cell" data-cell="c-166-12"><span class="cell__label">c-166-12</span><span class="cell__value">84.38</span></div>
        <div class="cell" data-cell="c-166-13"><span class="cell__label">c-166-13</span><span class="cell__value">35.28</span></div>
        <div class="cell" data-cell="c-166-14"><span class="cell__label">c-166-14</span><span class="cell__value">33.28</span></div>
        <div class="cell" data-cell="c-166-15"><span class="cell__label">c-166-15</span><span class="cell__value">43.02</span></div>
        <div class="cell" data-cell="c-166-16"><span class="cell__label">c-166-16</span><span class="cell__value">20.91</span></div>
        <div class="cell" data-cell="c-166-17"><span class="cell__label">c-166-17</span><span class="cell__value">82.47</span></div>
        <div class="cell" data-cell="c-166-18"><span class="cell__label">c-166-18</span><span class="cell__value">36.96</span></div>
        <div class="cell" data-cell="c-166-19"><span class="cell__label">c-166-19</span><span class="cell__value">40.19</span></div>
      </div>
      <div class="row" data-row="r-167">
        <div class="cell" data-cell="c-167-0"><span class="cell__label">c-167-0</span><span class="cell__value">28.33</span></div>
        <div class="cell" data-cell="c-167-1"><span class="cell__label">c-167-1</span><span class="cell__value">64.01</span></div>
        <div class="cell" data-cell="c-167-2"><span class="cell__label">c-167-2</span><span class="cell__value">80.46</span></div>
        <div class="cell" data-cell="c-167-3"><span class="cell__label">c-167-3</span><span class="cell__value">31.12</span></div>
        <div class="cell" data-cell="c-167-4"><span class="cell__label">c-167-4</span><span class="cell__value">39.26</span></div>
        <div class="cell" data-cell="c-167-5"><span class="cell__label">c-167-5</span><span class="cell__value">22.24</span></div>
        <div class="cell" data-cell="c-167-6"><span class="cell__label">c-167-6</span><span class="cell__value">31.37</span></div>
        <div class="cell" data-cell="c-167-7"><span class="cell__label">c-167-7</span><span class="cell__value">11.43</span></div>
        <div class="cell" data-cell="c-167-8"><span class="cell__label">c-167-8</span><span class="cell__value">11.08</span></div>
        <div class="cell" data-cell="c-167-9"><span class="cell__label">c-167-9</span><span class="cell__value">53.34</span></div>
        <div class="cell" data-cell="c-167-10"><span class="cell__label">c-167-10</span><span class="cell__value">20.42</span></div>
        <div class="cell" data-cell="c-167-11"><span class="cell__label">c-167-11</span><span class="cell__value">7.04</span></div>
        <div class="cell" data-cell="c-167-12"><span class="cell__label">c-167-12</span><span class="cell__value">25.26</span></div>
        <div class="cell" data-cell="c-167-13"><span class="cell__label">c-167-13</span><span class="cell__value">74.71</span></div>
        <div class="cell" data-cell="c-167-14"><span class="cell__label">c-167-14</span><span class="cell__value">67.25</span></div>
        <div class="cell" data-cell="c-167-15"><span class="cell__label">c-167-15</span><span class="cell__value">4.44</span></div>
        <div class="cell" data-cell="c-167-16"><span class="cell__label">c-167-16</span><span class="cell__value">77.39</span></div>
        <div class="cell" data-cell="c-167-17"><span class="cell__label">c-167-17</span><span class="cell__value">98.65</span></div>
        <div class="cell" data-cell="c-167-18"><span class="cell__label">c-167-18</span><span class="cell__value">71.94</span></div>
        <div class="cell" data-cell="c-167-19"><span class="cell__label">c-167-19</span><span class="cell__value">97.43</span></div>
      </div>
      <div class="row" data-row="r-168">
        <div class="cell" data-cell="c-168-0"><span class="cell__label">c-168-0</span><span class="cell__value">21.32</span></div>
        <div class="cell" data-cell="c-168-1"><span class="cell__label">c-168-1</span><span class="cell__value">60.24</span></div>
        <div class="cell" data-cell="c-168-2"><span class="cell__label">c-168-2</span><span class="cell__value">93.51</span></div>
        <div class="cell" data-cell="c-168-3"><span class="cell__label">c-168-3</span><span class="cell__value">13.65</span></div>
        <div class="cell" data-cell="c-168-4"><span class="cell__label">c-168-4</span><span class="cell__value">46.20</span></div>
        <div class="cell" data-cell="c-168-5"><span class="cell__label">c-168-5</span><span class="cell__value">95.78</span></div>
        <div class="cell" data-cell="c-168-6"><span class="cell__label">c-168-6</span><span class="cell__value">31.68</span></div>
        <div class="cell" data-cell="c-168-7"><span class="cell__label">c-168-7</span><span class="cell__value">76.76</span></div>
        <div class="cell" data-cell="c-168-8"><span class="cell__label">c-168-8</span><span class="cell__value">59.70</span></div>
        <div class="cell" data-cell="c-168-9"><span class="cell__label">c-168-9</span><span class="cell__value">92.58</span></div>
        <div class="cell" data-cell="c-168-10"><span class="cell__label">c-168-10</span><span class="cell__value">2.11</span></div>
        <div class="cell" data-cell="c-168-11"><span class="cell__label">c-168-11</span><span class="cell__value">18.38</span></div>
        <div class="cell" data-cell="c-168-12"><span class="cell__label">c-168-12</span><span class="cell__value">27.29</span></div>
        <div class="cell" data-cell="c-168-13"><span class="cell__label">c-168-13</span><span class="cell__value">87.79</span></div>
        <div class="cell" data-cell="c-168-14"><span class="cell__label">c-168-14</span><span class="cell__value">64.44</span></div>
        <div class="cell" data-cell="c-168-15"><span class="cell__label">c-168-15</span><span class="cell__value">84.66</span></div>
        <div class="cell" data-cell="c-168-16"><span class="cell__label">c-168-16</span><span class="cell__value">11.79</span></div>
        <div class="cell" data-cell="c-168-17"><span class="cell__label">c-168-17</span><span class="cell__value">43.01</span></div>
        <div class="cell" data-cell="c-168-18"><span class="cell__label">c-168-18</span><span class="cell__value">86.51</span></div>
        <div class="cell" data-cell="c-168-19"><span class="cell__label">c-168-19</span><span class="cell__value">49.73</span></div>
      </div>
      <div class="row" data-row="r-169">
        <div class="cell" data-cell="c-169-0"><span class="cell__label">c-169-0</span><span class="cell__value">68.17</span></div>
        <div class="cell" data-cell="c-169-1"><span class="cell__label">c-169-1</span><span class="cell__value">34.06</span></div>
        <div class="cell" data-cell="c-169-2"><span class="cell__label">c-169-2</span><span class="cell__value">77.38</span></div>
        <div class="cell" data-cell="c-169-3"><span class="cell__label">c-169-3</span><span class="cell__value">67.29</span></div>
        <div class="cell" data-cell="c-169-4"><span class="cell__label">c-169-4</span><span class="cell__value">1.56</span></div>
        <div class="cell" data-cell="c-169-5"><span class="cell__label">c-169-5</span><span class="cell__value">22.12</span></div>
        <div class="cell" data-cell="c-169-6"><span class="cell__label">c-169-6</span><span class="cell__value">80.66</span></div>
        <div class="cell" data-cell="c-169-7"><span class="cell__label">c-169-7</span><span class="cell__value">61.58</span></div>
        <div class="cell" data-cell="c-169-8"><span class="cell__label">c-169-8</span><span class="cell__value">68.27</span></div>
        <div class="cell" data-cell="c-169-9"><span class="cell__label">c-169-9</span><span class="cell__value">6.33</span></div>
        <div class="cell" data-cell="c-169-10"><span class="cell__label">c-169-10</span><span class="cell__value">85.59</span></div>
        <div class="cell" data-cell="c-169-11"><span class="cell__label">c-169-11</span><span class="cell__value">46.00</span></div>
        <div class="cell" data-cell="c-169-12"><span class="cell__label">c-169-12</span><span class="cell__value">63.07</span></div>
        <div class="cell" data-cell="c-169-13"><span class="cell__label">c-169-13</span><span class="cell__value">11.74</span></div>
        <div class="cell" data-cell="c-169-14"><span class="cell__label">c-169-14</span><span class="cell__value">0.16</span></div>
        <div class="cell" data-cell="c-169-15"><span class="cell__label">c-169-15</span><span class="cell__value">75.38</span></div>
        <div class="cell" data-cell="c-169-16"><span class="cell__label">c-169-16</span><span class="cell__value">25.70</span></div>
        <div class="cell" data-cell="c-169-17"><span class="cell__label">c-169-17</span><span class="cell__value">41.96</span></div>
        <div class="cell" data-cell="c-169-18"><span class="cell__label">c-169-18</span><span class="cell__value">62.87</span></div>
        <div class="cell" data-cell="c-169-19"><span class="cell__label">c-169-19</span><span class="cell__value">67.44</span></div>
      </div>
      <div class="row" data-row="r-170">
        <div class="cell" data-cell="c-170-0"><span class="cell__label">c-170-0</span><span class="cell__value">63.90</span></div>
        <div class="cell" data-cell="c-170-1"><span class="cell__label">c-170-1</span><span class="cell__value">46.22</span></div>
        <div class="cell" data-cell="c-170-2"><span class="cell__label">c-170-2</span><span class="cell__value">30.27</span></div>
        <div class="cell" data-cell="c-170-3"><span class="cell__label">c-170-3</span><span class="cell__value">6.24</span></div>
        <div class="cell" data-cell="c-170-4"><span class="cell__label">c-170-4</span><span class="cell__value">31.43</span></div>
        <div class="cell" data-cell="c-170-5"><span class="cell__label">c-170-5</span><span class="cell__value">41.72</span></div>
        <div class="cell" data-cell="c-170-6"><span class="cell__label">c-170-6</span><span class="cell__value">90.51</span></div>
        <div class="cell" data-cell="c-170-7"><span class="cell__label">c-170-7</span><span class="cell__value">22.52</span></div>
        <div class="cell" data-cell="c-170-8"><span class="cell__label">c-170-8</span><span class="cell__value">88.25</span></div>
        <div class="cell" data-cell="c-170-9"><span class="cell__label">c-170-9</span><span class="cell__value">14.28</span></div>
        <div class="cell" data-cell="c-170-10"><span class="cell__label">c-170-10</span><span class="cell__value">86.91</span></div>
        <div class="cell" data-cell="c-170-11"><span class="cell__label">c-170-11</span><span class="cell__value">96.01</span></div>
        <div class="cell" data-cell="c-170-12"><span class="cell__label">c-170-12</span><span class="cell__value">74.19</span></div>
        <div class="cell" data-cell="c-170-13"><span class="cell__label">c-170-13</span><span class="cell__value">93.27</span></div>
        <div class="cell" data-cell="c-170-14"><span class="cell__label">c-170-14</span><span class="cell__value">83.55</span></div>
        <div class="cell" data-cell="c-170-15"><span class="cell__label">c-170-15</span><span class="cell__value">92.92</span></div>
        <div class="cell" data-cell="c-170-16"><span class="cell__label">c-170-16</span><span class="cell__value">4.36</span></div>
        <div class="cell" data-cell="c-170-17"><span class="cell__label">c-170-17</span><span class="cell__value">32.00</span></div>
        <div class="cell" data-cell="c-170-18"><span class="cell__label">c-170-18</span><span class="cell__value">53.66</span></div>
        <div class="cell" data-cell="c-170-19"><span class="cell__label">c-170-19</span><span class="cell__value">55.98</span></div>
      </div>
      <div class="row" data-row="r-171">
        <div class="cell" data-cell="c-171-0"><span class="cell__label">c-171-0</span><span class="cell__value">16.08</span></div>
        <div class="cell" data-cell="c-171-1"><span class="cell__label">c-171-1</span><span class="cell__value">33.68</span></div>
        <div class="cell" data-cell="c-171-2"><span class="cell__label">c-171-2</span><span class="cell__value">99.68</span></div>
        <div class="cell" data-cell="c-171-3"><span class="cell__label">c-171-3</span><span class="cell__value">13.21</span></div>
        <div class="cell" data-cell="c-171-4"><span class="cell__label">c-171-4</span><span class="cell__value">42.27</span></div>
        <div class="cell" data-cell="c-171-5"><span class="cell__label">c-171-5</span><span class="cell__value">51.30</span></div>
        <div class="cell" data-cell="c-171-6"><span class="cell__label">c-171-6</span><span class="cell__value">65.70</span></div>
        <div class="cell" data-cell="c-171-7"><span class="cell__label">c-171-7</span><span class="cell__value">63.93</span></div>
        <div class="cell" data-cell="c-171-8"><span class="cell__label">c-171-8</span><span class="cell__value">3.11</span></div>
        <div class="cell" data-cell="c-171-9"><span class="cell__label">c-171-9</span><span class="cell__value">13.72</span></div>
        <div class="cell" data-cell="c-171-10"><span class="cell__label">c-171-10</span><span class="cell__value">75.34</span></div>
        <div class="cell" data-cell="c-171-11"><span class="cell__label">c-171-11</span><span class="cell__value">8.20</span></div>
        <div class="cell" data-cell="c-171-12"><span class="cell__label">c-171-12</span><span class="cell__value">93.37</span></div>
        <div class="cell" data-cell="c-171-13"><span class="cell__label">c-171-13</span><span class="cell__value">16.04</span></div>
        <div class="cell" data-cell="c-171-14"><span class="cell__label">c-171-14</span><span class="cell__value">27.13</span></div>
        <div class="cell" data-cell="c-171-15"><span class="cell__label">c-171-15</span><span class="cell__value">35.30</span></div>
        <div class="cell" data-cell="c-171-16"><span class="cell__label">c-171-16</span><span class="cell__value">36.02</span></div>
        <div class="cell" data-cell="c-171-17"><span class="cell__label">c-171-17</span><span class="cell__value">67.00</span></div>
        <div class="cell" data-cell="c-171-18"><span class="cell__label">c-171-18</span><span class="cell__value">97.19</span></div>
        <div class="cell" data-cell="c-171-19"><span class="cell__label">c-171-19</span><span class="cell__value">31.58</span></div>
      </div>
      <div class="row" data-row="r-172">
        <div class="cell" data-cell="c-172-0"><span class="cell__label">c-172-0</span><span class="cell__value">85.39</span></div>
        <div class="cell" data-cell="c-172-1"><span class="cell__label">c-172-1</span><span class="cell__value">97.85</span></div>
        <div class="cell" data-cell="c-172-2"><span class="cell__label">c-172-2</span><span class="cell__value">40.95</span></div>
        <div class="cell" data-cell="c-172-3"><span class="cell__label">c-172-3</span><span class="cell__value">30.25</span></div>
        <div class="cell" data-cell="c-172-4"><span class="cell__label">c-172-4</span><span class="cell__value">30.29</span></div>
        <div class="cell" data-cell="c-172-5"><span class="cell__label">c-172-5</span><span class="cell__value">84.06</span></div>
        <div class="cell" data-cell="c-172-6"><span class="cell__label">c-172-6</span><span class="cell__value">51.64</span></div>
        <div class="cell" data-cell="c-172-7"><span class="cell__label">c-172-7</span><span class="cell__value">99.23</span></div>
        <div class="cell" data-cell="c-172-8"><span class="cell__label">c-172-8</span><span class="cell__value">56.57</span></div>
        <div class="cell" data-cell="c-172-9"><span class="cell__label">c-172-9</span><span class="cell__value">77.64</span></div>
        <div class="cell" data-cell="c-172-10"><span class="cell__label">c-172-10</span><span class="cell__value">91.82</span></div>
        <div class="cell" data-cell="c-172-11"><span class="cell__label">c-172-11</span><span class="cell__value">23.57</span></div>
        <div class="cell" data-cell="c-172-12"><span class="cell__label">c-172-12</span><span class="cell__value">75.58</span></div>
        <div class="cell" data-cell="c-172-13"><span class="cell__label">c-172-13</span><span class="cell__value">68.67</span></div>
        <div class="cell" data-cell="c-172-14"><span class="cell__label">c-172-14</span><span class="cell__value">90.24</span></div>
        <div class="cell" data-cell="c-172-15"><span class="cell__label">c-172-15</span><span class="cell__value">8.96</span></div>
        <div class="cell" data-cell="c-172-16"><span class="cell__label">c-172-16</span><span class="cell__value">68.29</span></div>
        <div class="cell" data-cell="c-172-17"><span class="cell__label">c-172-17</span><span class="cell__value">76.73</span></div>
        <div class="cell" data-cell="c-172-18"><span class="cell__label">c-172-18</span><span class="cell__value">55.94</span></div>
        <div class="cell" data-cell="c-172-19"><span class="cell__label">c-172-19</span><span class="cell__value">99.08</span></div>
      </div>
      <div class="row" data-row="r-173">
        <div class="cell" data-cell="c-173-0"><span class="cell__label">c-173-0</span><span class="cell__value">12.68</span></div>
        <div class="cell" data-cell="c-173-1"><span class="cell__label">c-173-1</span><span class="cell__value">83.04</span></div>
        <div class="cell" data-cell="c-173-2"><span class="cell__label">c-173-2</span><span class="cell__value">95.58</span></div>
        <div class="cell" data-cell="c-173-3"><span class="cell__label">c-173-3</span><span class="cell__value">80.72</span></div>
        <div class="cell" data-cell="c-173-4"><span class="cell__label">c-173-4</span><span class="cell__value">87.36</span></div>
        <div class="cell" data-cell="c-173-5"><span class="cell__label">c-173-5</span><span class="cell__value">83.46</span></div>
        <div class="cell" data-cell="c-173-6"><span class="cell__label">c-173-6</span><span class="cell__value">51.69</span></div>
        <div class="cell" data-cell="c-173-7"><span class="cell__label">c-173-7</span><span class="cell__value">89.10</span></div>
        <div class="cell" data-cell="c-173-8"><span class="cell__label">c-173-8</span><span class="cell__value">36.20</span></div>
        <div class="cell" data-cell="c-173-9"><span class="cell__label">c-173-9</span><span class="cell__value">43.71</span></div>
        <div class="cell" data-cell="c-173-10"><span class="cell__label">c-173-10</span><span class="cell__value">73.89</span></div>
        <div class="cell" data-cell="c-173-11"><span class="cell__label">c-173-11</span><span class="cell__value">71.16</span></div>
        <div class="cell" data-cell="c-173-12"><span class="cell__label">c-173-12</span><span class="cell__value">47.56</span></div>
        <div class="cell" data-cell="c-173-13"><span class="cell__label">c-173-13</span><span class="cell__value">28.50</span></div>
        <div class="cell" data-cell="c-173-14"><span class="cell__label">c-173-14</span><span class="cell__value">16.68</span></div>
        <div class="cell" data-cell="c-173-15"><span class="cell__label">c-173-15</span><span class="cell__value">82.08</span></div>
        <div class="cell" data-cell="c-173-16"><span class="cell__label">c-173-16</span><span class="cell__value">76.90</span></div>
        <div class="cell" data-cell="c-173-17"><span class="cell__label">c-173-17</span><span class="cell__value">70.72</span></div>
        <div class="cell" data-cell="c-173-18"><span class="cell__label">c-173-18</span><span class="cell__value">88.08</span></div>
        <div class="cell" data-cell="c-173-19"><span class="cell__label">c-173-19</span><span class="cell__value">85.51</span></div>
      </div>
      <div class="row" data-row="r-174">
        <div class="cell" data-cell="c-174-0"><span class="cell__label">c-174-0</span><span class="cell__value">5.03</span></div>
        <div class="cell" data-cell="c-174-1"><span class="cell__label">c-174-1</span><span class="cell__value">44.53</span></div>
        <div class="cell" data-cell="c-174-2"><span class="cell__label">c-174-2</span><span class="cell__value">67.73</span></div>
        <div class="cell" data-cell="c-174-3"><span class="cell__label">c-174-3</span><span class="cell__value">99.74</span></div>
        <div class="cell" data-cell="c-174-4"><span class="cell__label">c-174-4</span><span class="cell__value">80.81</span></div>
        <div class="cell" data-cell="c-174-5"><span class="cell__label">c-174-5</span><span class="cell__value">55.55</span></div>
        <div class="cell" data-cell="c-174-6"><span class="cell__label">c-174-6</span><span class="cell__value">66.87</span></div>
        <div class="cell" data-cell="c-174-7"><span class="cell__label">c-174-7</span><span class="cell__value">74.81</span></div>
        <div class="cell" data-cell="c-174-8"><span class="cell__label">c-174-8</span><span class="cell__value">82.93</span></div>
        <div class="cell" data-cell="c-174-9"><span class="cell__label">c-174-9</span><span class="cell__value">79.35</span></div>
        <div class="cell" data-cell="c-174-10"><span class="cell__label">c-174-10</span><span class="cell__value">18.62</span></div>
        <div class="cell" data-cell="c-174-11"><span class="cell__label">c-174-11</span><span class="cell__value">87.40</span></div>
        <div class="cell" data-cell="c-174-12"><span class="cell__label">c-174-12</span><span class="cell__value">33.26</span></div>
        <div class="cell" data-cell="c-174-13"><span class="cell__label">c-174-13</span><span class="cell__value">97.45</span></div>
        <div class="cell" data-cell="c-174-14"><span class="cell__label">c-174-14</span><span class="cell__value">49.95</span></div>
        <div class="cell" data-cell="c-174-15"><span class="cell__label">c-174-15</span><span class="cell__value">70.73</span></div>
        <div class="cell" data-cell="c-174-16"><span class="cell__label">c-174-16</span><span class="cell__value">99.01</span></div>
        <div class="cell" data-cell="c-174-17"><span class="cell__label">c-174-17</span><span class="cell__value">68.86</span></div>
        <div class="cell" data-cell="c-174-18"><span class="cell__label">c-174-18</span><span class="cell__value">8.16</span></div>
        <div class="cell" data-cell="c-174-19"><span class="cell__label">c-174-19</span><span class="cell__value">60.21</span></div>
      </div>
      <div class="row" data-row="r-175">
        <div class="cell" data-cell="c-175-0"><span class="cell__label">c-175-0</span><span class="cell__value">34.16</span></div>
        <div class="cell" data-cell="c-175-1"><span class="cell__label">c-175-1</span><span class="cell__value">36.12</span></div>
        <div class="cell" data-cell="c-175-2"><span class="cell__label">c-175-2</span><span class="cell__value">34.72</span></div>
        <div class="cell" data-cell="c-175-3"><span class="cell__label">c-175-3</span><span class="cell__value">48.22</span></div>
        <div class="cell" data-cell="c-175-4"><span class="cell__label">c-175-4</span><span class="cell__value">70.08</span></div>
        <div class="cell" data-cell="c-175-5"><span class="cell__label">c-175-5</span><span class="cell__value">17.00</span></div>
        <div class="cell" data-cell="c-175-6"><span class="cell__label">c-175-6</span><span class="cell__value">32.96</span></div>
        <div class="cell" data-cell="c-175-7"><span class="cell__label">c-175-7</span><span class="cell__value">47.84</span></div>
        <div class="cell" data-cell="c-175-8"><span class="cell__label">c-175-8</span><span class="cell__value">95.07</span></div>
        <div class="cell" data-cell="c-175-9"><span class="cell__label">c-175-9</span><span class="cell__value">86.98</span></div>
        <div class="cell" data-cell="c-175-10"><span class="cell__label">c-175-10</span><span class="cell__value">8.54</span></div>
        <div class="cell" data-cell="c-175-11"><span class="cell__label">c-175-11</span><span class="cell__value">2.32</span></div>
        <div class="cell" data-cell="c-175-12"><span class="cell__label">c-175-12</span><span class="cell__value">1.65</span></div>
        <div class="cell" data-cell="c-175-13"><span class="cell__label">c-175-13</span><span class="cell__value">10.25</span></div>
        <div class="cell" data-cell="c-175-14"><span class="cell__label">c-175-14</span><span class="cell__value">0.83</span></div>
        <div class="cell" data-cell="c-175-15"><span class="cell__label">c-175-15</span><span class="cell__value">72.14</span></div>
        <div class="cell" data-cell="c-175-16"><span class="cell__label">c-175-16</span><span class="cell__value">81.55</span></div>
        <div class="cell" data-cell="c-175-17"><span class="cell__label">c-175-17</span><span class="cell__value">28.75</span></div>
        <div class="cell" data-cell="c-175-18"><span class="cell__label">c-175-18</span><span class="cell__value">10.95</span></div>
        <div class="cell" data-cell="c-175-19"><span class="cell__label">c-175-19</span><span class="cell__value">57.63</span></div>
      </div>
      <div class="row" data-row="r-176">
        <div class="cell" data-cell="c-176-0"><span class="cell__label">c-176-0</span><span class="cell__value">20.39</span></div>
        <div class="cell" data-cell="c-176-1"><span class="cell__label">c-176-1</span><span class="cell__value">5.44</span></div>
        <div class="cell" data-cell="c-176-2"><span class="cell__label">c-176-2</span><span class="cell__value">84.13</span></div>
        <div class="cell" data-cell="c-176-3"><span class="cell__label">c-176-3</span><span class="cell__value">56.42</span></div>
        <div class="cell" data-cell="c-176-4"><span class="cell__label">c-176-4</span><span class="cell__value">68.69</span></div>
        <div class="cell" data-cell="c-176-5"><span class="cell__label">c-176-5</span><span class="cell__value">53.93</span></div>
        <div class="cell" data-cell="c-176-6"><span class="cell__label">c-176-6</span><span class="cell__value">20.51</span></div>
        <div class="cell" data-cell="c-176-7"><span class="cell__label">c-176-7</span><span class="cell__value">93.15</span></div>
        <div class="cell" data-cell="c-176-8"><span class="cell__label">c-176-8</span><span class="cell__value">28.22</span></div>
        <div class="cell" data-cell="c-176-9"><span class="cell__label">c-176-9</span><span class="cell__value">27.65</span></div>
        <div class="cell" data-cell="c-176-10"><span class="cell__label">c-176-10</span><span class="cell__value">81.74</span></div>
        <div class="cell" data-cell="c-176-11"><span class="cell__label">c-176-11</span><span class="cell__value">17.06</span></div>
        <div class="cell" data-cell="c-176-12"><span class="cell__label">c-176-12</span><span class="cell__value">55.41</span></div>
        <div class="cell" data-cell="c-176-13"><span class="cell__label">c-176-13</span><span class="cell__value">59.31</span></div>
        <div class="cell" data-cell="c-176-14"><span class="cell__label">c-176-14</span><span class="cell__value">23.85</span></div>
        <div class="cell" data-cell="c-176-15"><span class="cell__label">c-176-15</span><span class="cell__value">11.51</span></div>
        <div class="cell" data-cell="c-176-16"><span class="cell__label">c-176-16</span><span class="cell__value">53.51</span></div>
        <div class="cell" data-cell="c-176-17"><span class="cell__label">c-176-17</span><span class="cell__value">43.71</span></div>
        <div class="cell" data-cell="c-176-18"><span class="cell__label">c-176-18</span><span class="cell__value">87.36</span></div>
        <div class="cell" data-cell="c-176-19"><span class="cell__label">c-176-19</span><span class="cell__value">65.46</span></div>
      </div>
      <div class="row" data-row="r-177">
        <div class="cell" data-cell="c-177-0"><span class="cell__label">c-177-0</span><span class="cell__value">22.88</span></div>
        <div class="cell" data-cell="c-177-1"><span class="cell__label">c-177-1</span><span class="cell__value">71.27</span></div>
        <div class="cell" data-cell="c-177-2"><span class="cell__label">c-177-2</span><span class="cell__value">47.52</span></div>
        <div class="cell" data-cell="c-177-3"><span class="cell__label">c-177-3</span><span class="cell__value">16.92</span></div>
        <div class="cell" data-cell="c-177-4"><span class="cell__label">c-177-4</span><span class="cell__value">89.98</span></div>
        <div class="cell" data-cell="c-177-5"><span class="cell__label">c-177-5</span><span class="cell__value">6.50</span></div>
        <div class="cell" data-cell="c-177-6"><span class="cell__label">c-177-6</span><span class="cell__value">16.68</span></div>
        <div class="cell" data-cell="c-177-7"><span class="cell__label">c-177-7</span><span class="cell__value">54.66</span></div>
        <div class="cell" data-cell="c-177-8"><span class="cell__label">c-177-8</span><span class="cell__value">87.44</span></div>
        <div class="cell" data-cell="c-177-9"><span class="cell__label">c-177-9</span><span class="cell__value">35.38</span></div>
        <div class="cell" data-cell="c-177-10"><span class="cell__label">c-177-10</span><span class="cell__value">92.57</span></div>
        <div class="cell" data-cell="c-177-11"><span class="cell__label">c-177-11</span><span class="cell__value">13.44</span></div>
        <div class="cell" data-cell="c-177-12"><span class="cell__label">c-177-12</span><span class="cell__value">56.62</span></div>
        <div class="cell" data-cell="c-177-13"><span class="cell__label">c-177-13</span><span class="cell__value">74.39</span></div>
        <div class="cell" data-cell="c-177-14"><span class="cell__label">c-177-14</span><span class="cell__value">28.15</span></div>
        <div class="cell" data-cell="c-177-15"><span class="cell__label">c-177-15</span><span class="cell__value">27.35</span></div>
        <div class="cell" data-cell="c-177-16"><span class="cell__label">c-177-16</span><span class="cell__value">79.36</span></div>
        <div class="cell" data-cell="c-177-17"><span class="cell__label">c-177-17</span><span class="cell__value">96.45</span></div>
        <div class="cell" data-cell="c-177-18"><span class="cell__label">c-177-18</span><span class="cell__value">87.07</span></div>
        <div class="cell" data-cell="c-177-19"><span class="cell__label">c-177-19</span><span class="cell__value">0.58</span></div>
      </div>
      <div class="row" data-row="r-178">
        <div class="cell" data-cell="c-178-0"><span class="cell__label">c-178-0</span><span class="cell__value">30.72</span></div>
        <div class="cell" data-cell="c-178-1"><span class="cell__label">c-178-1</span><span class="cell__value">33.71</span></div>
        <div class="cell" data-cell="c-178-2"><span class="cell__label">c-178-2</span><span class="cell__value">53.51</span></div>
        <div class="cell" data-cell="c-178-3"><span class="cell__label">c-178-3</span><span class="cell__value">64.16</span></div>
        <div class="cell" data-cell="c-178-4"><span class="cell__label">c-178-4</span><span class="cell__value">24.39</span></div>
        <div class="cell" data-cell="c-178-5"><span class="cell__label">c-178-5</span><span class="cell__value">42.70</span></div>
        <div class="cell" data-cell="c-178-6"><span class="cell__label">c-178-6</span><span class="cell__value">88.61</span></div>
        <div class="cell" data-cell="c-178-7"><span class="cell__label">c-178-7</span><span class="cell__value">85.54</span></div>
        <div class="cell" data-cell="c-178-8"><span class="cell__label">c-178-8</span><span class="cell__value">94.35</span></div>
        <div class="cell" data-cell="c-178-9"><span class="cell__label">c-178-9</span><span class="cell__value">66.92</span></div>
        <div class="cell" data-cell="c-178-10"><span class="cell__label">c-178-10</span><span class="cell__value">94.01</span></div>
        <div class="cell" data-cell="c-178-11"><span class="cell__label">c-178-11</span><span class="cell__value">54.37</span></div>
        <div class="cell" data-cell="c-178-12"><span class="cell__label">c-178-12</span><span class="cell__value">11.48</span></div>
        <div class="cell" data-cell="c-178-13"><span class="cell__label">c-178-13</span><span class="cell__value">25.78</span></div>
        <div class="cell" data-cell="c-178-14"><span class="cell__label">c-178-14</span><span class="cell__value">28.47</span></div>
        <div class="cell" data-cell="c-178-15"><span class="cell__label">c-178-15</span><span class="cell__value">42.36</span></div>
        <div class="cell" data-cell="c-178-16"><span class="cell__label">c-178-16</span><span class="cell__value">56.25</span></div>
        <div class="cell" data-cell="c-178-17"><span class="cell__label">c-178-17</span><span class="cell__value">0.70</span></div>
        <div class="cell" data-cell="c-178-18"><span class="cell__label">c-178-18</span><span class="cell__value">46.00</span></div>
        <div class="cell" data-cell="c-178-19"><span class="cell__label">c-178-19</span><span class="cell__value">22.57</span></div>
      </div>
      <div class="row" data-row="r-179">
        <div class="cell" data-cell="c-179-0"><span class="cell__label">c-179-0</span><span class="cell__value">34.30</span></div>
        <div class="cell" data-cell="c-179-1"><span class="cell__label">c-179-1</span><span class="cell__value">90.79</span></div>
        <div class="cell" data-cell="c-179-2"><span class="cell__label">c-179-2</span><span class="cell__value">92.05</span></div>
        <div class="cell" data-cell="c-179-3"><span class="cell__label">c-179-3</span><span class="cell__value">17.36</span></div>
        <div class="cell" data-cell="c-179-4"><span class="cell__label">c-179-4</span><span class="cell__value">92.18</span></div>
        <div class="cell" data-cell="c-179-5"><span class="cell__label">c-179-5</span><span class="cell__value">79.74</span></div>
        <div class="cell" data-cell="c-179-6"><span class="cell__label">c-179-6</span><span class="cell__value">3.23</span></div>
        <div class="cell" data-cell="c-179-7"><span class="cell__label">c-179-7</span><span class="cell__value">98.78</span></div>
        <div class="cell" data-cell="c-179-8"><span class="cell__label">c-179-8</span><span class="cell__value">48.92</span></div>
        <div class="cell" data-cell="c-179-9"><span class="cell__label">c-179-9</span><span class="cell__value">16.58</span></div>
        <div class="cell" data-cell="c-179-10"><span class="cell__label">c-179-10</span><span class="cell__value">57.69</span></div>
        <div class="cell" data-cell="c-179-11"><span class="cell__label">c-179-11</span><span class="cell__value">69.67</span></div>
        <div class="cell" data-cell="c-179-12"><span class="cell__label">c-179-12</span><span class="cell__value">77.04</span></div>
        <div class="cell" data-cell="c-179-13"><span class="cell__label">c-179-13</span><span class="cell__value">3.87</span></div>
        <div class="cell" data-cell="c-179-14"><span class="cell__label">c-179-14</span><span class="cell__value">95.35</span></div>
        <div class="cell" data-cell="c-179-15"><span class="cell__label">c-179-15</span><span class="cell__value">67.64</span></div>
        <div class="cell" data-cell="c-179-16"><span class="cell__label">c-179-16</span><span class="cell__value">11.03</span></div>
        <div class="cell" data-cell="c-179-17"><span class="cell__label">c-179-17</span><span class="cell__value">26.59</span></div>
        <div class="cell" data-cell="c-179-18"><span class="cell__label">c-179-18</span><span class="cell__value">82.93</span></div>
        <div class="cell" data-cell="c-179-19"><span class="cell__label">c-179-19</span><span class="cell__value">51.56</span></div>
      </div>
      <div class="row" data-row="r-180">
        <div class="cell" data-cell="c-180-0"><span class="cell__label">c-180-0</span><span class="cell__value">33.03</span></div>
        <div class="cell" data-cell="c-180-1"><span class="cell__label">c-180-1</span><span class="cell__value">78.09</span></div>
        <div class="cell" data-cell="c-180-2"><span class="cell__label">c-180-2</span><span class="cell__value">57.77</span></div>
        <div class="cell" data-cell="c-180-3"><span class="cell__label">c-180-3</span><span class="cell__value">30.81</span></div>
        <div class="cell" data-cell="c-180-4"><span class="cell__label">c-180-4</span><span class="cell__value">6.26</span></div>
        <div class="cell" data-cell="c-180-5"><span class="cell__label">c-180-5</span><span class="cell__value">58.26</span></div>
        <div class="cell" data-cell="c-180-6"><span class="cell__label">c-180-6</span><span class="cell__value">88.43</span></div>
        <div class="cell" data-cell="c-180-7"><span class="cell__label">c-180-7</span><span class="cell__value">67.92</span></div>
        <div class="cell" data-cell="c-180-8"><span class="cell__label">c-180-8</span><span class="cell__value">87.37</span></div>
        <div class="cell" data-cell="c-180-9"><span class="cell__label">c-180-9</span><span class="cell__value">61.74</span></div>
        <div class="cell" data-cell="c-180-10"><span class="cell__label">c-180-10</span><span class="cell__value">89.99</span></div>
        <div class="cell" data-cell="c-180-11"><span class="cell__label">c-180-11</span><span class="cell__value">98.99</span></div>
        <div class="cell" data-cell="c-180-12"><span class="cell__label">c-180-12</span><span class="cell__value">3.76</span></div>
        <div class="cell" data-cell="c-180-13"><span class="cell__label">c-180-13</span><span class="cell__value">88.57</span></div>
        <div class="cell" data-cell="c-180-14"><span class="cell__label">c-180-14</span><span class="cell__value">94.95</span></div>
        <div class="cell" data-cell="c-180-15"><span class="cell__label">c-180-15</span><span class="cell__value">21.72</span></div>
        <div class="cell" data-cell="c-180-16"><span class="cell__label">c-180-16</span><span class="cell__value">98.24</span></div>
        <div class="cell" data-cell="c-180-17"><span class="cell__label">c-180-17</span><span class="cell__value">61.03</span></div>
        <div class="cell" data-cell="c-180-18"><span class="cell__label">c-180-18</span><span class="cell__value">14.07</span></div>
        <div class="cell" data-cell="c-180-19"><span class="cell__label">c-180-19</span><span class="cell__value">84.09</span></div>
      </div>
      <div class="row" data-row="r-181">
        <div class="cell" data-cell="c-181-0"><span class="cell__label">c-181-0</span><span class="cell__value">86.72</span></div>
        <div class="cell" data-cell="c-181-1"><span class="cell__label">c-181-1</span><span class="cell__value">62.16</span></div>
        <div class="cell" data-cell="c-181-2"><span class="cell__label">c-181-2</span><span class="cell__value">46.90</span></div>
        <div class="cell" data-cell="c-181-3"><span class="cell__label">c-181-3</span><span class="cell__value">17.01</span></div>
        <div class="cell" data-cell="c-181-4"><span class="cell__label">c-181-4</span><span class="cell__value">21.92</span></div>
        <div class="cell" data-cell="c-181-5"><span class="cell__label">c-181-5</span><span class="cell__value">85.82</span></div>
        <div class="cell" data-cell="c-181-6"><span class="cell__label">c-181-6</span><span class="cell__value">76.22</span></div>
        <div class="cell" data-cell="c-181-7"><span class="cell__label">c-181-7</span><span class="cell__value">89.02</span></div>
        <div class="cell" data-cell="c-181-8"><span class="cell__label">c-181-8</span><span class="cell__value">75.51</span></div>
        <div class="cell" data-cell="c-181-9"><span class="cell__label">c-181-9</span><span class="cell__value">45.23</span></div>
        <div class="cell" data-cell="c-181-10"><span class="cell__label">c-181-10</span><span class="cell__value">23.51</span></div>
        <div class="cell" data-cell="c-181-11"><span class="cell__label">c-181-11</span><span class="cell__value">44.46</span></div>
        <div class="cell" data-cell="c-181-12"><span class="cell__label">c-181-12</span><span class="cell__value">89.49</span></div>
        <div class="cell" data-cell="c-181-13"><span class="cell__label">c-181-13</span><span class="cell__value">84.30</span></div>
        <div class="cell" data-cell="c-181-14"><span class="cell__label">c-181-14</span><span class="cell__value">58.25</span></div>
        <div class="cell" data-cell="c-181-15"><span class="cell__label">c-181-15</span><span class="cell__value">25.93</span></div>
        <div class="cell" data-cell="c-181-16"><span class="cell__label">c-181-16</span><span class="cell__value">70.51</span></div>
        <div class="cell" data-cell="c-181-17"><span class="cell__label">c-181-17</span><span class="cell__value">14.48</span></div>
        <div class="cell" data-cell="c-181-18"><span class="cell__label">c-181-18</span><span class="cell__value">94.37</span></div>
        <div class="cell" data-cell="c-181-19"><span class="cell__label">c-181-19</span><span class="cell__value">28.15</span></div>
      </div>
      <div class="row" data-row="r-182">
        <div class="cell" data-cell="c-182-0"><span class="cell__label">c-182-0</span><span class="cell__value">31.70</span></div>
        <div class="cell" data-cell="c-182-1"><span class="cell__label">c-182-1</span><span class="cell__value">23.17</span></div>
        <div class="cell" data-cell="c-182-2"><span class="cell__label">c-182-2</span><span class="cell__value">39.20</span></div>
        <div class="cell" data-cell="c-182-3"><span class="cell__label">c-182-3</span><span class="cell__value">97.80</span></div>
        <div class="cell" data-cell="c-182-4"><span class="cell__label">c-182-4</span><span class="cell__value">89.29</span></div>
        <div class="cell" data-cell="c-182-5"><span class="cell__label">c-182-5</span><span class="cell__value">27.23</span></div>
        <div class="cell" data-cell="c-182-6"><span class="cell__label">c-182-6</span><span class="cell__value">0.15</span></div>
        <div class="cell" data-cell="c-182-7"><span class="cell__label">c-182-7</span><span class="cell__value">10.21</span></div>
        <div class="cell" data-cell="c-182-8"><span class="cell__label">c-182-8</span><span class="cell__value">41.14</span></div>
        <div class="cell" data-cell="c-182-9"><span class="cell__label">c-182-9</span><span class="cell__value">53.55</span></div>
        <div class="cell" data-cell="c-182-10"><span class="cell__label">c-182-10</span><span class="cell__value">36.75</span></div>
        <div class="cell" data-cell="c-182-11"><span class="cell__label">c-182-11</span><span class="cell__value">73.48</span></div>
        <div class="cell" data-cell="c-182-12"><span class="cell__label">c-182-12</span><span class="cell__value">84.22</span></div>
        <div class="cell" data-cell="c-182-13"><span class="cell__label">c-182-13</span><span class="cell__value">66.01</span></div>
        <div class="cell" data-cell="c-182-14"><span class="cell__label">c-182-14</span><span class="cell__value">87.52</span></div>
        <div class="cell" data-cell="c-182-15"><span class="cell__label">c-182-15</span><span class="cell__value">4.46</span></div>
        <div class="cell" data-cell="c-182-16"><span class="cell__label">c-182-16</span><span class="cell__value">55.80</span></div>
        <div class="cell" data-cell="c-182-17"><span class="cell__label">c-182-17</span><span class="cell__value">72.30</span></div>
        <div class="cell" data-cell="c-182-18"><span class="cell__label">c-182-18</span><span class="cell__value">31.24</span></div>
        <div class="cell" data-cell="c-182-19"><span class="cell__label">c-182-19</span><span class="cell__value">58.10</span></div>
      </div>
      <div class="row" data-row="r-183">
        <div class="cell" data-cell="c-183-0"><span class="cell__label">c-183-0</span><span class="cell__value">23.26</span></div>
        <div class="cell" data-cell="c-183-1"><span class="cell__label">c-183-1</span><span class="cell__value">6.46</span></div>
        <div class="cell" data-cell="c-183-2"><span class="cell__label">c-183-2</span><span class="cell__value">6.77</span></div>
        <div class="cell" data-cell="c-183-3"><span class="cell__label">c-183-3</span><span class="cell__value">23.92</span></div>
        <div class="cell" data-cell="c-183-4"><span class="cell__label">c-183-4</span><span class="cell__value">62.28</span></div>
        <div class="cell" data-cell="c-183-5"><span class="cell__label">c-183-5</span><span class="cell__value">14.81</span></div>
        <div class="cell" data-cell="c-183-6"><span class="cell__label">c-183-6</span><span class="cell__value">78.75</span></div>
        <div class="cell" data-cell="c-183-7"><span class="cell__label">c-183-7</span><span class="cell__value">87.93</span></div>
        <div class="cell" data-cell="c-183-8"><span class="cell__label">c-183-8</span><span class="cell__value">1.58</span></div>
        <div class="cell" data-cell="c-183-9"><span class="cell__label">c-183-9</span><span class="cell__value">13.27</span></div>
        <div class="cell" data-cell="c-183-10"><span class="cell__label">c-183-10</span><span class="cell__value">75.20</span></div>
        <div class="cell" data-cell="c-183-11"><span class="cell__label">c-183-11</span><span class="cell__value">32.82</span></div>
        <div class="cell" data-cell="c-183-12"><span class="cell__label">c-183-12</span><span class="cell__value">77.14</span></div>
        <div class="cell" data-cell="c-183-13"><span class="cell__label">c-183-13</span><span class="cell__value">36.20</span></div>
        <div class="cell" data-cell="c-183-14"><span class="cell__label">c-183-14</span><span class="cell__value">58.09</span></div>
        <div class="cell" data-cell="c-183-15"><span class="cell__label">c-183-15</span><span class="cell__value">17.54</span></div>
        <div class="cell" data-cell="c-183-16"><span class="cell__label">c-183-16</span><span class="cell__value">69.32</span></div>
        <div class="cell" data-cell="c-183-17"><span class="cell__label">c-183-17</span><span class="cell__value">50.63</span></div>
        <div class="cell" data-cell="c-183-18"><span class="cell__label">c-183-18</span><span class="cell__value">88.53</span></div>
        <div class="cell" data-cell="c-183-19"><span class="cell__label">c-183-19</span><span class="cell__value">8.09</span></div>
      </div>
      <div class="row" data-row="r-184">
        <div class="cell" data-cell="c-184-0"><span class="cell__label">c-184-0</span><span class="cell__value">14.29</span></div>
        <div class="cell" data-cell="c-184-1"><span class="cell__label">c-184-1</span><span class="cell__value">39.54</span></div>
        <div class="cell" data-cell="c-184-2"><span class="cell__label">c-184-2</span><span class="cell__value">85.63</span></div>
        <div class="cell" data-cell="c-184-3"><span class="cell__label">c-184-3</span><span class="cell__value">52.24</span></div>
        <div class="cell" data-cell="c-184-4"><span class="cell__label">c-184-4</span><span class="cell__value">52.96</span></div>
        <div class="cell" data-cell="c-184-5"><span class="cell__label">c-184-5</span><span class="cell__value">49.77</span></div>
        <div class="cell" data-cell="c-184-6"><span class="cell__label">c-184-6</span><span class="cell__value">57.39</span></div>
        <div class="cell" data-cell="c-184-7"><span class="cell__label">c-184-7</span><span class="cell__value">37.73</span></div>
        <div class="cell" data-cell="c-184-8"><span class="cell__label">c-184-8</span><span class="cell__value">91.19</span></div>
        <div class="cell" data-cell="c-184-9"><span class="cell__label">c-184-9</span><span class="cell__value">3.78</span></div>
        <div class="cell" data-cell="c-184-10"><span class="cell__label">c-184-10</span><span class="cell__value">1.57</span></div>
        <div class="cell" data-cell="c-184-11"><span class="cell__label">c-184-11</span><span class="cell__value">14.63</span></div>
        <div class="cell" data-cell="c-184-12"><span class="cell__label">c-184-12</span><span class="cell__value">12.41</span></div>
        <div class="cell" data-cell="c-184-13"><span class="cell__label">c-184-13</span><span class="cell__value">93.44</span></div>
        <div class="cell" data-cell="c-184-14"><span class="cell__label">c-184-14</span><span class="cell__value">75.54</span></div>
        <div class="cell" data-cell="c-184-15"><span class="cell__label">c-184-15</span><span class="cell__value">77.89</span></div>
        <div class="cell" data-cell="c-184-16"><span class="cell__label">c-184-16</span><span class="cell__value">57.23</span></div>
        <div class="cell" data-cell="c-184-17"><span class="cell__label">c-184-17</span><span class="cell__value">40.16</span></div>
        <div class="cell" data-cell="c-184-18"><span class="cell__label">c-184-18</span><span class="cell__value">97.29</span></div>
        <div class="cell" data-cell="c-184-19"><span class="cell__label">c-184-19</span><span class="cell__value">51.27</span></div>
      </div>
    </div>
    <Slot v-if="showSlot" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slot from './Slot.vue'
import { config } from '../stores/config'

/** Used by the probe's script-block edit mode. */
const probeTick = 1
const count = ref(0)
const showSlot = config.showSlot
const mountedAt = new Date().toLocaleTimeString()
const hmrLog = ref('')

function bump() {
  count.value += 1
}

// Show the last HMR event on the page; a swallowed save produces no event and no reload.
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    hmrLog.value = 'beforeUpdate ' + new Date().toLocaleTimeString()
  })
  import.meta.hot.on('vite:afterUpdate', () => {
    hmrLog.value = 'afterUpdate ' + new Date().toLocaleTimeString()
  })
}
</script>

<style scoped>
.heavy-panel {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
}

.hmr-marker {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.hmr-state {
  font-size: 13px;
}

.zh {
  display: block;
  color: #777;
  font-size: 12px;
}

.grid {
  margin-top: 8px;
}

.row {
  display: flex;
  gap: 4px;
}

.row--banner .banner {
  border: 1px solid #cc0;
  background: #ffd;
  padding: 2px 6px;
  font-weight: 700;
}

.cell {
  border: 1px solid #ddd;
  padding: 2px 4px;
  font-size: 11px;
}
</style>
