<template>
  <section class="heavy-panel" :data-tick="probeTick">
    <h2>HeavyPanel</h2>
    <p class="hmr-marker">HMR TEST 1</p>
    <p class="hmr-hint">
      HMR 自检：先点几下 <b>+1</b>，再保存本文件（改上面 “HMR TEST 数字”，或反复注释/取消注释下面的
      <code>toggle-block</code>）。保存后看这一行：<b>计数不变</b> = HMR 保住了组件状态；
      <b>计数变成 0 但 “组件挂载时间” 也变了</b> = 组件被整体 reload（状态丢失）；
      <b>整页刷新（HMR 事件时间不再更新）</b> = full reload。
    </p>
    <p class="hmr-state">
      点击计数 = <b>{{ count }}</b>
      <button type="button" @click="bump">+1</button>
      · 组件挂载时间 = {{ mountedAt }}
      · 最近一次 HMR 事件 = {{ hmrLog || '（还没收到过）' }}
    </p>
    <div class="grid">
      <div class="row" data-row="r-0">
        <div class="cell" data-cell="c-0-0"><span class="cell__label">c-0-0</span><span class="cell__value">33.08</span><span class="cell__tint" style="background:#bca9c9"></span></div>
        <div class="cell" data-cell="c-0-1"><span class="cell__label">c-0-1</span><span class="cell__value">29.23</span><span class="cell__tint" style="background:#412cad"></span></div>
        <div class="cell" data-cell="c-0-2"><span class="cell__label">c-0-2</span><span class="cell__value">59.69</span><span class="cell__tint" style="background:#569631"></span></div>
        <div class="cell" data-cell="c-0-3"><span class="cell__label">c-0-3</span><span class="cell__value">60.43</span><span class="cell__tint" style="background:#1eae80"></span></div>
        <div class="cell" data-cell="c-0-4"><span class="cell__label">c-0-4</span><span class="cell__value">64.55</span><span class="cell__tint" style="background:#3b7750"></span></div>
        <div class="cell" data-cell="c-0-5"><span class="cell__label">c-0-5</span><span class="cell__value">62.52</span><span class="cell__tint" style="background:#eec094"></span></div>
        <div class="cell" data-cell="c-0-6"><span class="cell__label">c-0-6</span><span class="cell__value">59.03</span><span class="cell__tint" style="background:#6f5c0c"></span></div>
        <div class="cell" data-cell="c-0-7"><span class="cell__label">c-0-7</span><span class="cell__value">21.39</span><span class="cell__tint" style="background:#4e6afa"></span></div>
        <div class="cell" data-cell="c-0-8"><span class="cell__label">c-0-8</span><span class="cell__value">86.39</span><span class="cell__tint" style="background:#dc167e"></span></div>
        <div class="cell" data-cell="c-0-9"><span class="cell__label">c-0-9</span><span class="cell__value">83.47</span><span class="cell__tint" style="background:#cc7f03"></span></div>
        <div class="cell" data-cell="c-0-10"><span class="cell__label">c-0-10</span><span class="cell__value">65.11</span><span class="cell__tint" style="background:#2e2244"></span></div>
        <div class="cell" data-cell="c-0-11"><span class="cell__label">c-0-11</span><span class="cell__value">83.60</span><span class="cell__tint" style="background:#89da35"></span></div>
        <div class="cell" data-cell="c-0-12"><span class="cell__label">c-0-12</span><span class="cell__value">0.64</span><span class="cell__tint" style="background:#34becd"></span></div>
        <div class="cell" data-cell="c-0-13"><span class="cell__label">c-0-13</span><span class="cell__value">86.90</span><span class="cell__tint" style="background:#1a5dc0"></span></div>
        <div class="cell" data-cell="c-0-14"><span class="cell__label">c-0-14</span><span class="cell__value">83.00</span><span class="cell__tint" style="background:#b8027a"></span></div>
        <div class="cell" data-cell="c-0-15"><span class="cell__label">c-0-15</span><span class="cell__value">65.26</span><span class="cell__tint" style="background:#2e12df"></span></div>
        <div class="cell" data-cell="c-0-16"><span class="cell__label">c-0-16</span><span class="cell__value">12.23</span><span class="cell__tint" style="background:#542ce3"></span></div>
        <div class="cell" data-cell="c-0-17"><span class="cell__label">c-0-17</span><span class="cell__value">53.56</span><span class="cell__tint" style="background:#364a19"></span></div>
        <div class="cell" data-cell="c-0-18"><span class="cell__label">c-0-18</span><span class="cell__value">40.58</span><span class="cell__tint" style="background:#245eee"></span></div>
        <div class="cell" data-cell="c-0-19"><span class="cell__label">c-0-19</span><span class="cell__value">50.41</span><span class="cell__tint" style="background:#b8c815"></span></div>
      </div>
      <div class="row" data-row="r-1">
        <div class="cell" data-cell="c-1-0"><span class="cell__label">c-1-0</span><span class="cell__value">87.57</span><span class="cell__tint" style="background:#5ddbea"></span></div>
        <div class="cell" data-cell="c-1-1"><span class="cell__label">c-1-1</span><span class="cell__value">99.96</span><span class="cell__tint" style="background:#79019a"></span></div>
        <div class="cell" data-cell="c-1-2"><span class="cell__label">c-1-2</span><span class="cell__value">38.77</span><span class="cell__tint" style="background:#e8ee29"></span></div>
        <div class="cell" data-cell="c-1-3"><span class="cell__label">c-1-3</span><span class="cell__value">26.04</span><span class="cell__tint" style="background:#07fc48"></span></div>
        <div class="cell" data-cell="c-1-4"><span class="cell__label">c-1-4</span><span class="cell__value">94.17</span><span class="cell__tint" style="background:#56da18"></span></div>
        <div class="cell" data-cell="c-1-5"><span class="cell__label">c-1-5</span><span class="cell__value">31.01</span><span class="cell__tint" style="background:#880891"></span></div>
        <div class="cell" data-cell="c-1-6"><span class="cell__label">c-1-6</span><span class="cell__value">79.72</span><span class="cell__tint" style="background:#d83019"></span></div>
        <div class="cell" data-cell="c-1-7"><span class="cell__label">c-1-7</span><span class="cell__value">12.42</span><span class="cell__tint" style="background:#fa845c"></span></div>
        <div class="cell" data-cell="c-1-8"><span class="cell__label">c-1-8</span><span class="cell__value">15.17</span><span class="cell__tint" style="background:#959221"></span></div>
        <div class="cell" data-cell="c-1-9"><span class="cell__label">c-1-9</span><span class="cell__value">38.54</span><span class="cell__tint" style="background:#2c679d"></span></div>
        <div class="cell" data-cell="c-1-10"><span class="cell__label">c-1-10</span><span class="cell__value">49.88</span><span class="cell__tint" style="background:#a64bf2"></span></div>
        <div class="cell" data-cell="c-1-11"><span class="cell__label">c-1-11</span><span class="cell__value">53.66</span><span class="cell__tint" style="background:#304909"></span></div>
        <div class="cell" data-cell="c-1-12"><span class="cell__label">c-1-12</span><span class="cell__value">77.46</span><span class="cell__tint" style="background:#2d4964"></span></div>
        <div class="cell" data-cell="c-1-13"><span class="cell__label">c-1-13</span><span class="cell__value">8.59</span><span class="cell__tint" style="background:#8bbe85"></span></div>
        <div class="cell" data-cell="c-1-14"><span class="cell__label">c-1-14</span><span class="cell__value">85.16</span><span class="cell__tint" style="background:#7c2950"></span></div>
        <div class="cell" data-cell="c-1-15"><span class="cell__label">c-1-15</span><span class="cell__value">49.22</span><span class="cell__tint" style="background:#134a49"></span></div>
        <div class="cell" data-cell="c-1-16"><span class="cell__label">c-1-16</span><span class="cell__value">76.46</span><span class="cell__tint" style="background:#9a2e24"></span></div>
        <div class="cell" data-cell="c-1-17"><span class="cell__label">c-1-17</span><span class="cell__value">78.91</span><span class="cell__tint" style="background:#5845a3"></span></div>
        <div class="cell" data-cell="c-1-18"><span class="cell__label">c-1-18</span><span class="cell__value">32.26</span><span class="cell__tint" style="background:#53d8d9"></span></div>
        <div class="cell" data-cell="c-1-19"><span class="cell__label">c-1-19</span><span class="cell__value">46.85</span><span class="cell__tint" style="background:#90972a"></span></div>
      </div>
      <div class="row" data-row="r-2">
        <div class="cell" data-cell="c-2-0"><span class="cell__label">c-2-0</span><span class="cell__value">16.18</span><span class="cell__tint" style="background:#c76c31"></span></div>
        <div class="cell" data-cell="c-2-1"><span class="cell__label">c-2-1</span><span class="cell__value">82.38</span><span class="cell__tint" style="background:#384484"></span></div>
        <div class="cell" data-cell="c-2-2"><span class="cell__label">c-2-2</span><span class="cell__value">47.46</span><span class="cell__tint" style="background:#4b0697"></span></div>
        <div class="cell" data-cell="c-2-3"><span class="cell__label">c-2-3</span><span class="cell__value">73.19</span><span class="cell__tint" style="background:#c3f827"></span></div>
        <div class="cell" data-cell="c-2-4"><span class="cell__label">c-2-4</span><span class="cell__value">52.02</span><span class="cell__tint" style="background:#b509c0"></span></div>
        <div class="cell" data-cell="c-2-5"><span class="cell__label">c-2-5</span><span class="cell__value">46.86</span><span class="cell__tint" style="background:#55ee32"></span></div>
        <div class="cell" data-cell="c-2-6"><span class="cell__label">c-2-6</span><span class="cell__value">18.46</span><span class="cell__tint" style="background:#c54e46"></span></div>
        <div class="cell" data-cell="c-2-7"><span class="cell__label">c-2-7</span><span class="cell__value">42.81</span><span class="cell__tint" style="background:#e2e8cc"></span></div>
        <div class="cell" data-cell="c-2-8"><span class="cell__label">c-2-8</span><span class="cell__value">13.99</span><span class="cell__tint" style="background:#c8dfea"></span></div>
        <div class="cell" data-cell="c-2-9"><span class="cell__label">c-2-9</span><span class="cell__value">6.66</span><span class="cell__tint" style="background:#cee574"></span></div>
        <div class="cell" data-cell="c-2-10"><span class="cell__label">c-2-10</span><span class="cell__value">65.90</span><span class="cell__tint" style="background:#0e8183"></span></div>
        <div class="cell" data-cell="c-2-11"><span class="cell__label">c-2-11</span><span class="cell__value">71.17</span><span class="cell__tint" style="background:#a77ad1"></span></div>
        <div class="cell" data-cell="c-2-12"><span class="cell__label">c-2-12</span><span class="cell__value">8.15</span><span class="cell__tint" style="background:#d42291"></span></div>
        <div class="cell" data-cell="c-2-13"><span class="cell__label">c-2-13</span><span class="cell__value">14.87</span><span class="cell__tint" style="background:#7aee75"></span></div>
        <div class="cell" data-cell="c-2-14"><span class="cell__label">c-2-14</span><span class="cell__value">9.98</span><span class="cell__tint" style="background:#cc5017"></span></div>
        <div class="cell" data-cell="c-2-15"><span class="cell__label">c-2-15</span><span class="cell__value">71.87</span><span class="cell__tint" style="background:#a6c31c"></span></div>
        <div class="cell" data-cell="c-2-16"><span class="cell__label">c-2-16</span><span class="cell__value">98.11</span><span class="cell__tint" style="background:#392dbd"></span></div>
        <div class="cell" data-cell="c-2-17"><span class="cell__label">c-2-17</span><span class="cell__value">44.81</span><span class="cell__tint" style="background:#b74781"></span></div>
        <div class="cell" data-cell="c-2-18"><span class="cell__label">c-2-18</span><span class="cell__value">27.53</span><span class="cell__tint" style="background:#f15a3f"></span></div>
        <div class="cell" data-cell="c-2-19"><span class="cell__label">c-2-19</span><span class="cell__value">80.34</span><span class="cell__tint" style="background:#e6609f"></span></div>
      </div>
      <div class="row" data-row="r-3">
        <div class="cell" data-cell="c-3-0"><span class="cell__label">c-3-0</span><span class="cell__value">65.34</span><span class="cell__tint" style="background:#632dc2"></span></div>
        <div class="cell" data-cell="c-3-1"><span class="cell__label">c-3-1</span><span class="cell__value">93.56</span><span class="cell__tint" style="background:#81c707"></span></div>
        <div class="cell" data-cell="c-3-2"><span class="cell__label">c-3-2</span><span class="cell__value">5.46</span><span class="cell__tint" style="background:#d398bf"></span></div>
        <div class="cell" data-cell="c-3-3"><span class="cell__label">c-3-3</span><span class="cell__value">50.34</span><span class="cell__tint" style="background:#1dd209"></span></div>
        <div class="cell" data-cell="c-3-4"><span class="cell__label">c-3-4</span><span class="cell__value">17.71</span><span class="cell__tint" style="background:#fe7510"></span></div>
        <div class="cell" data-cell="c-3-5"><span class="cell__label">c-3-5</span><span class="cell__value">63.43</span><span class="cell__tint" style="background:#aff3f1"></span></div>
        <div class="cell" data-cell="c-3-6"><span class="cell__label">c-3-6</span><span class="cell__value">97.41</span><span class="cell__tint" style="background:#b2f16f"></span></div>
        <div class="cell" data-cell="c-3-7"><span class="cell__label">c-3-7</span><span class="cell__value">98.12</span><span class="cell__tint" style="background:#ff3513"></span></div>
        <div class="cell" data-cell="c-3-8"><span class="cell__label">c-3-8</span><span class="cell__value">45.78</span><span class="cell__tint" style="background:#06405b"></span></div>
        <div class="cell" data-cell="c-3-9"><span class="cell__label">c-3-9</span><span class="cell__value">51.54</span><span class="cell__tint" style="background:#4ccee1"></span></div>
        <div class="cell" data-cell="c-3-10"><span class="cell__label">c-3-10</span><span class="cell__value">36.52</span><span class="cell__tint" style="background:#165c84"></span></div>
        <div class="cell" data-cell="c-3-11"><span class="cell__label">c-3-11</span><span class="cell__value">65.62</span><span class="cell__tint" style="background:#8cbb93"></span></div>
        <div class="cell" data-cell="c-3-12"><span class="cell__label">c-3-12</span><span class="cell__value">34.03</span><span class="cell__tint" style="background:#834290"></span></div>
        <div class="cell" data-cell="c-3-13"><span class="cell__label">c-3-13</span><span class="cell__value">59.10</span><span class="cell__tint" style="background:#1ac232"></span></div>
        <div class="cell" data-cell="c-3-14"><span class="cell__label">c-3-14</span><span class="cell__value">53.90</span><span class="cell__tint" style="background:#d1dce6"></span></div>
        <div class="cell" data-cell="c-3-15"><span class="cell__label">c-3-15</span><span class="cell__value">80.86</span><span class="cell__tint" style="background:#b21b53"></span></div>
        <div class="cell" data-cell="c-3-16"><span class="cell__label">c-3-16</span><span class="cell__value">0.16</span><span class="cell__tint" style="background:#d2b9b3"></span></div>
        <div class="cell" data-cell="c-3-17"><span class="cell__label">c-3-17</span><span class="cell__value">82.91</span><span class="cell__tint" style="background:#186c3f"></span></div>
        <div class="cell" data-cell="c-3-18"><span class="cell__label">c-3-18</span><span class="cell__value">5.11</span><span class="cell__tint" style="background:#c621ae"></span></div>
        <div class="cell" data-cell="c-3-19"><span class="cell__label">c-3-19</span><span class="cell__value">63.83</span><span class="cell__tint" style="background:#a4ca81"></span></div>
      </div>
      <div class="row" data-row="r-4">
        <div class="cell" data-cell="c-4-0"><span class="cell__label">c-4-0</span><span class="cell__value">53.74</span><span class="cell__tint" style="background:#7ef2e0"></span></div>
        <div class="cell" data-cell="c-4-1"><span class="cell__label">c-4-1</span><span class="cell__value">54.24</span><span class="cell__tint" style="background:#539273"></span></div>
        <div class="cell" data-cell="c-4-2"><span class="cell__label">c-4-2</span><span class="cell__value">42.96</span><span class="cell__tint" style="background:#a2cb57"></span></div>
        <div class="cell" data-cell="c-4-3"><span class="cell__label">c-4-3</span><span class="cell__value">62.05</span><span class="cell__tint" style="background:#63dd2a"></span></div>
        <div class="cell" data-cell="c-4-4"><span class="cell__label">c-4-4</span><span class="cell__value">17.95</span><span class="cell__tint" style="background:#d87699"></span></div>
        <div class="cell" data-cell="c-4-5"><span class="cell__label">c-4-5</span><span class="cell__value">32.20</span><span class="cell__tint" style="background:#fe56fd"></span></div>
        <div class="cell" data-cell="c-4-6"><span class="cell__label">c-4-6</span><span class="cell__value">7.50</span><span class="cell__tint" style="background:#044d60"></span></div>
        <div class="cell" data-cell="c-4-7"><span class="cell__label">c-4-7</span><span class="cell__value">33.39</span><span class="cell__tint" style="background:#8dd3d8"></span></div>
        <div class="cell" data-cell="c-4-8"><span class="cell__label">c-4-8</span><span class="cell__value">96.01</span><span class="cell__tint" style="background:#b3dae8"></span></div>
        <div class="cell" data-cell="c-4-9"><span class="cell__label">c-4-9</span><span class="cell__value">35.38</span><span class="cell__tint" style="background:#0be9eb"></span></div>
        <div class="cell" data-cell="c-4-10"><span class="cell__label">c-4-10</span><span class="cell__value">36.31</span><span class="cell__tint" style="background:#6752eb"></span></div>
        <div class="cell" data-cell="c-4-11"><span class="cell__label">c-4-11</span><span class="cell__value">4.51</span><span class="cell__tint" style="background:#bf347c"></span></div>
        <div class="cell" data-cell="c-4-12"><span class="cell__label">c-4-12</span><span class="cell__value">71.83</span><span class="cell__tint" style="background:#ec75c7"></span></div>
        <div class="cell" data-cell="c-4-13"><span class="cell__label">c-4-13</span><span class="cell__value">70.84</span><span class="cell__tint" style="background:#8905db"></span></div>
        <div class="cell" data-cell="c-4-14"><span class="cell__label">c-4-14</span><span class="cell__value">39.12</span><span class="cell__tint" style="background:#057ae1"></span></div>
        <div class="cell" data-cell="c-4-15"><span class="cell__label">c-4-15</span><span class="cell__value">63.11</span><span class="cell__tint" style="background:#a3d984"></span></div>
        <div class="cell" data-cell="c-4-16"><span class="cell__label">c-4-16</span><span class="cell__value">43.60</span><span class="cell__tint" style="background:#1b204b"></span></div>
        <div class="cell" data-cell="c-4-17"><span class="cell__label">c-4-17</span><span class="cell__value">34.51</span><span class="cell__tint" style="background:#6fefa1"></span></div>
        <div class="cell" data-cell="c-4-18"><span class="cell__label">c-4-18</span><span class="cell__value">90.45</span><span class="cell__tint" style="background:#a1c73c"></span></div>
        <div class="cell" data-cell="c-4-19"><span class="cell__label">c-4-19</span><span class="cell__value">14.22</span><span class="cell__tint" style="background:#e86da3"></span></div>
      </div>
      <div class="row" data-row="r-5">
        <div class="cell" data-cell="c-5-0"><span class="cell__label">c-5-0</span><span class="cell__value">3.43</span><span class="cell__tint" style="background:#313def"></span></div>
        <div class="cell" data-cell="c-5-1"><span class="cell__label">c-5-1</span><span class="cell__value">64.68</span><span class="cell__tint" style="background:#4c1a03"></span></div>
        <div class="cell" data-cell="c-5-2"><span class="cell__label">c-5-2</span><span class="cell__value">79.06</span><span class="cell__tint" style="background:#f26457"></span></div>
        <div class="cell" data-cell="c-5-3"><span class="cell__label">c-5-3</span><span class="cell__value">14.11</span><span class="cell__tint" style="background:#a461f5"></span></div>
        <div class="cell" data-cell="c-5-4"><span class="cell__label">c-5-4</span><span class="cell__value">67.69</span><span class="cell__tint" style="background:#994536"></span></div>
        <div class="cell" data-cell="c-5-5"><span class="cell__label">c-5-5</span><span class="cell__value">35.02</span><span class="cell__tint" style="background:#a1b0a7"></span></div>
        <div class="cell" data-cell="c-5-6"><span class="cell__label">c-5-6</span><span class="cell__value">53.72</span><span class="cell__tint" style="background:#333f86"></span></div>
        <div class="cell" data-cell="c-5-7"><span class="cell__label">c-5-7</span><span class="cell__value">53.68</span><span class="cell__tint" style="background:#c87632"></span></div>
        <div class="cell" data-cell="c-5-8"><span class="cell__label">c-5-8</span><span class="cell__value">7.99</span><span class="cell__tint" style="background:#09c4dc"></span></div>
        <div class="cell" data-cell="c-5-9"><span class="cell__label">c-5-9</span><span class="cell__value">79.80</span><span class="cell__tint" style="background:#783a8c"></span></div>
        <div class="cell" data-cell="c-5-10"><span class="cell__label">c-5-10</span><span class="cell__value">54.54</span><span class="cell__tint" style="background:#b8a94c"></span></div>
        <div class="cell" data-cell="c-5-11"><span class="cell__label">c-5-11</span><span class="cell__value">89.40</span><span class="cell__tint" style="background:#ecaa31"></span></div>
        <div class="cell" data-cell="c-5-12"><span class="cell__label">c-5-12</span><span class="cell__value">83.26</span><span class="cell__tint" style="background:#1566c2"></span></div>
        <div class="cell" data-cell="c-5-13"><span class="cell__label">c-5-13</span><span class="cell__value">3.78</span><span class="cell__tint" style="background:#20bd5a"></span></div>
        <div class="cell" data-cell="c-5-14"><span class="cell__label">c-5-14</span><span class="cell__value">54.04</span><span class="cell__tint" style="background:#5c2c03"></span></div>
        <div class="cell" data-cell="c-5-15"><span class="cell__label">c-5-15</span><span class="cell__value">82.91</span><span class="cell__tint" style="background:#7c075f"></span></div>
        <div class="cell" data-cell="c-5-16"><span class="cell__label">c-5-16</span><span class="cell__value">77.43</span><span class="cell__tint" style="background:#2d6e87"></span></div>
        <div class="cell" data-cell="c-5-17"><span class="cell__label">c-5-17</span><span class="cell__value">50.87</span><span class="cell__tint" style="background:#4852b8"></span></div>
        <div class="cell" data-cell="c-5-18"><span class="cell__label">c-5-18</span><span class="cell__value">84.55</span><span class="cell__tint" style="background:#188094"></span></div>
        <div class="cell" data-cell="c-5-19"><span class="cell__label">c-5-19</span><span class="cell__value">30.64</span><span class="cell__tint" style="background:#b56f8f"></span></div>
      </div>
      <div class="row" data-row="r-6">
        <div class="cell" data-cell="c-6-0"><span class="cell__label">c-6-0</span><span class="cell__value">95.87</span><span class="cell__tint" style="background:#2eedcf"></span></div>
        <div class="cell" data-cell="c-6-1"><span class="cell__label">c-6-1</span><span class="cell__value">22.03</span><span class="cell__tint" style="background:#6cdd92"></span></div>
        <div class="cell" data-cell="c-6-2"><span class="cell__label">c-6-2</span><span class="cell__value">18.24</span><span class="cell__tint" style="background:#4e181c"></span></div>
        <div class="cell" data-cell="c-6-3"><span class="cell__label">c-6-3</span><span class="cell__value">89.98</span><span class="cell__tint" style="background:#138d75"></span></div>
        <div class="cell" data-cell="c-6-4"><span class="cell__label">c-6-4</span><span class="cell__value">45.01</span><span class="cell__tint" style="background:#fcf784"></span></div>
        <div class="cell" data-cell="c-6-5"><span class="cell__label">c-6-5</span><span class="cell__value">40.48</span><span class="cell__tint" style="background:#5aab50"></span></div>
        <div class="cell" data-cell="c-6-6"><span class="cell__label">c-6-6</span><span class="cell__value">49.28</span><span class="cell__tint" style="background:#5da2cb"></span></div>
        <div class="cell" data-cell="c-6-7"><span class="cell__label">c-6-7</span><span class="cell__value">91.44</span><span class="cell__tint" style="background:#3c4f32"></span></div>
        <div class="cell" data-cell="c-6-8"><span class="cell__label">c-6-8</span><span class="cell__value">72.69</span><span class="cell__tint" style="background:#0b9c87"></span></div>
        <div class="cell" data-cell="c-6-9"><span class="cell__label">c-6-9</span><span class="cell__value">91.58</span><span class="cell__tint" style="background:#634a6b"></span></div>
        <div class="cell" data-cell="c-6-10"><span class="cell__label">c-6-10</span><span class="cell__value">61.57</span><span class="cell__tint" style="background:#9de015"></span></div>
        <div class="cell" data-cell="c-6-11"><span class="cell__label">c-6-11</span><span class="cell__value">6.88</span><span class="cell__tint" style="background:#b0cf79"></span></div>
        <div class="cell" data-cell="c-6-12"><span class="cell__label">c-6-12</span><span class="cell__value">70.67</span><span class="cell__tint" style="background:#d7263c"></span></div>
        <div class="cell" data-cell="c-6-13"><span class="cell__label">c-6-13</span><span class="cell__value">84.60</span><span class="cell__tint" style="background:#70baae"></span></div>
        <div class="cell" data-cell="c-6-14"><span class="cell__label">c-6-14</span><span class="cell__value">35.89</span><span class="cell__tint" style="background:#c08784"></span></div>
        <div class="cell" data-cell="c-6-15"><span class="cell__label">c-6-15</span><span class="cell__value">92.20</span><span class="cell__tint" style="background:#ddd4b5"></span></div>
        <div class="cell" data-cell="c-6-16"><span class="cell__label">c-6-16</span><span class="cell__value">11.83</span><span class="cell__tint" style="background:#686b27"></span></div>
        <div class="cell" data-cell="c-6-17"><span class="cell__label">c-6-17</span><span class="cell__value">48.94</span><span class="cell__tint" style="background:#29d268"></span></div>
        <div class="cell" data-cell="c-6-18"><span class="cell__label">c-6-18</span><span class="cell__value">66.73</span><span class="cell__tint" style="background:#370259"></span></div>
        <div class="cell" data-cell="c-6-19"><span class="cell__label">c-6-19</span><span class="cell__value">95.47</span><span class="cell__tint" style="background:#daec0f"></span></div>
      </div>
      <div class="row" data-row="r-7">
        <div class="cell" data-cell="c-7-0"><span class="cell__label">c-7-0</span><span class="cell__value">75.33</span><span class="cell__tint" style="background:#57b395"></span></div>
        <div class="cell" data-cell="c-7-1"><span class="cell__label">c-7-1</span><span class="cell__value">51.48</span><span class="cell__tint" style="background:#5de98a"></span></div>
        <div class="cell" data-cell="c-7-2"><span class="cell__label">c-7-2</span><span class="cell__value">9.36</span><span class="cell__tint" style="background:#452be7"></span></div>
        <div class="cell" data-cell="c-7-3"><span class="cell__label">c-7-3</span><span class="cell__value">41.15</span><span class="cell__tint" style="background:#294d9b"></span></div>
        <div class="cell" data-cell="c-7-4"><span class="cell__label">c-7-4</span><span class="cell__value">34.36</span><span class="cell__tint" style="background:#68a289"></span></div>
        <div class="cell" data-cell="c-7-5"><span class="cell__label">c-7-5</span><span class="cell__value">43.05</span><span class="cell__tint" style="background:#1d2931"></span></div>
        <div class="cell" data-cell="c-7-6"><span class="cell__label">c-7-6</span><span class="cell__value">57.59</span><span class="cell__tint" style="background:#cf67ce"></span></div>
        <div class="cell" data-cell="c-7-7"><span class="cell__label">c-7-7</span><span class="cell__value">45.32</span><span class="cell__tint" style="background:#a12753"></span></div>
        <div class="cell" data-cell="c-7-8"><span class="cell__label">c-7-8</span><span class="cell__value">69.91</span><span class="cell__tint" style="background:#cd8a40"></span></div>
        <div class="cell" data-cell="c-7-9"><span class="cell__label">c-7-9</span><span class="cell__value">26.38</span><span class="cell__tint" style="background:#c6f809"></span></div>
        <div class="cell" data-cell="c-7-10"><span class="cell__label">c-7-10</span><span class="cell__value">29.08</span><span class="cell__tint" style="background:#b85c69"></span></div>
        <div class="cell" data-cell="c-7-11"><span class="cell__label">c-7-11</span><span class="cell__value">17.72</span><span class="cell__tint" style="background:#9f45c5"></span></div>
        <div class="cell" data-cell="c-7-12"><span class="cell__label">c-7-12</span><span class="cell__value">88.85</span><span class="cell__tint" style="background:#2790f5"></span></div>
        <div class="cell" data-cell="c-7-13"><span class="cell__label">c-7-13</span><span class="cell__value">74.42</span><span class="cell__tint" style="background:#6611b2"></span></div>
        <div class="cell" data-cell="c-7-14"><span class="cell__label">c-7-14</span><span class="cell__value">61.60</span><span class="cell__tint" style="background:#2f7c1c"></span></div>
        <div class="cell" data-cell="c-7-15"><span class="cell__label">c-7-15</span><span class="cell__value">67.78</span><span class="cell__tint" style="background:#c6d481"></span></div>
        <div class="cell" data-cell="c-7-16"><span class="cell__label">c-7-16</span><span class="cell__value">5.27</span><span class="cell__tint" style="background:#d682e1"></span></div>
        <div class="cell" data-cell="c-7-17"><span class="cell__label">c-7-17</span><span class="cell__value">9.91</span><span class="cell__tint" style="background:#94f1e0"></span></div>
        <div class="cell" data-cell="c-7-18"><span class="cell__label">c-7-18</span><span class="cell__value">90.43</span><span class="cell__tint" style="background:#bdbc92"></span></div>
        <div class="cell" data-cell="c-7-19"><span class="cell__label">c-7-19</span><span class="cell__value">27.52</span><span class="cell__tint" style="background:#aa2773"></span></div>
      </div>
      <div class="row" data-row="r-8">
        <div class="cell" data-cell="c-8-0"><span class="cell__label">c-8-0</span><span class="cell__value">51.81</span><span class="cell__tint" style="background:#8fd723"></span></div>
        <div class="cell" data-cell="c-8-1"><span class="cell__label">c-8-1</span><span class="cell__value">29.60</span><span class="cell__tint" style="background:#75d54e"></span></div>
        <div class="cell" data-cell="c-8-2"><span class="cell__label">c-8-2</span><span class="cell__value">29.45</span><span class="cell__tint" style="background:#9d0579"></span></div>
        <div class="cell" data-cell="c-8-3"><span class="cell__label">c-8-3</span><span class="cell__value">42.43</span><span class="cell__tint" style="background:#7fa406"></span></div>
        <div class="cell" data-cell="c-8-4"><span class="cell__label">c-8-4</span><span class="cell__value">41.96</span><span class="cell__tint" style="background:#90c013"></span></div>
        <div class="cell" data-cell="c-8-5"><span class="cell__label">c-8-5</span><span class="cell__value">89.39</span><span class="cell__tint" style="background:#cec45b"></span></div>
        <div class="cell" data-cell="c-8-6"><span class="cell__label">c-8-6</span><span class="cell__value">47.91</span><span class="cell__tint" style="background:#343978"></span></div>
        <div class="cell" data-cell="c-8-7"><span class="cell__label">c-8-7</span><span class="cell__value">63.57</span><span class="cell__tint" style="background:#9ecf6d"></span></div>
        <div class="cell" data-cell="c-8-8"><span class="cell__label">c-8-8</span><span class="cell__value">14.10</span><span class="cell__tint" style="background:#41490c"></span></div>
        <div class="cell" data-cell="c-8-9"><span class="cell__label">c-8-9</span><span class="cell__value">11.88</span><span class="cell__tint" style="background:#14a745"></span></div>
        <div class="cell" data-cell="c-8-10"><span class="cell__label">c-8-10</span><span class="cell__value">77.46</span><span class="cell__tint" style="background:#dd614f"></span></div>
        <div class="cell" data-cell="c-8-11"><span class="cell__label">c-8-11</span><span class="cell__value">67.23</span><span class="cell__tint" style="background:#e7619c"></span></div>
        <div class="cell" data-cell="c-8-12"><span class="cell__label">c-8-12</span><span class="cell__value">75.98</span><span class="cell__tint" style="background:#d8edf9"></span></div>
        <div class="cell" data-cell="c-8-13"><span class="cell__label">c-8-13</span><span class="cell__value">96.18</span><span class="cell__tint" style="background:#5320b9"></span></div>
        <div class="cell" data-cell="c-8-14"><span class="cell__label">c-8-14</span><span class="cell__value">25.30</span><span class="cell__tint" style="background:#ee7e20"></span></div>
        <div class="cell" data-cell="c-8-15"><span class="cell__label">c-8-15</span><span class="cell__value">26.81</span><span class="cell__tint" style="background:#bd6a04"></span></div>
        <div class="cell" data-cell="c-8-16"><span class="cell__label">c-8-16</span><span class="cell__value">59.72</span><span class="cell__tint" style="background:#8a6b1d"></span></div>
        <div class="cell" data-cell="c-8-17"><span class="cell__label">c-8-17</span><span class="cell__value">86.84</span><span class="cell__tint" style="background:#ac40e6"></span></div>
        <div class="cell" data-cell="c-8-18"><span class="cell__label">c-8-18</span><span class="cell__value">91.72</span><span class="cell__tint" style="background:#225a63"></span></div>
        <div class="cell" data-cell="c-8-19"><span class="cell__label">c-8-19</span><span class="cell__value">31.67</span><span class="cell__tint" style="background:#e56879"></span></div>
      </div>
      <div class="row" data-row="r-9">
        <div class="cell" data-cell="c-9-0"><span class="cell__label">c-9-0</span><span class="cell__value">18.69</span><span class="cell__tint" style="background:#15b842"></span></div>
        <div class="cell" data-cell="c-9-1"><span class="cell__label">c-9-1</span><span class="cell__value">77.07</span><span class="cell__tint" style="background:#5f03f9"></span></div>
        <div class="cell" data-cell="c-9-2"><span class="cell__label">c-9-2</span><span class="cell__value">51.18</span><span class="cell__tint" style="background:#8b233a"></span></div>
        <div class="cell" data-cell="c-9-3"><span class="cell__label">c-9-3</span><span class="cell__value">98.76</span><span class="cell__tint" style="background:#4b4091"></span></div>
        <div class="cell" data-cell="c-9-4"><span class="cell__label">c-9-4</span><span class="cell__value">65.49</span><span class="cell__tint" style="background:#01daa2"></span></div>
        <div class="cell" data-cell="c-9-5"><span class="cell__label">c-9-5</span><span class="cell__value">4.32</span><span class="cell__tint" style="background:#ebc6a5"></span></div>
        <div class="cell" data-cell="c-9-6"><span class="cell__label">c-9-6</span><span class="cell__value">84.52</span><span class="cell__tint" style="background:#672a72"></span></div>
        <div class="cell" data-cell="c-9-7"><span class="cell__label">c-9-7</span><span class="cell__value">81.52</span><span class="cell__tint" style="background:#57d6f9"></span></div>
        <div class="cell" data-cell="c-9-8"><span class="cell__label">c-9-8</span><span class="cell__value">60.33</span><span class="cell__tint" style="background:#d3b692"></span></div>
        <div class="cell" data-cell="c-9-9"><span class="cell__label">c-9-9</span><span class="cell__value">84.54</span><span class="cell__tint" style="background:#ff5ba7"></span></div>
        <div class="cell" data-cell="c-9-10"><span class="cell__label">c-9-10</span><span class="cell__value">51.67</span><span class="cell__tint" style="background:#f0f890"></span></div>
        <div class="cell" data-cell="c-9-11"><span class="cell__label">c-9-11</span><span class="cell__value">99.22</span><span class="cell__tint" style="background:#72cbca"></span></div>
        <div class="cell" data-cell="c-9-12"><span class="cell__label">c-9-12</span><span class="cell__value">0.24</span><span class="cell__tint" style="background:#a29b20"></span></div>
        <div class="cell" data-cell="c-9-13"><span class="cell__label">c-9-13</span><span class="cell__value">0.72</span><span class="cell__tint" style="background:#1c5554"></span></div>
        <div class="cell" data-cell="c-9-14"><span class="cell__label">c-9-14</span><span class="cell__value">12.34</span><span class="cell__tint" style="background:#c5de1a"></span></div>
        <div class="cell" data-cell="c-9-15"><span class="cell__label">c-9-15</span><span class="cell__value">35.71</span><span class="cell__tint" style="background:#287999"></span></div>
        <div class="cell" data-cell="c-9-16"><span class="cell__label">c-9-16</span><span class="cell__value">54.53</span><span class="cell__tint" style="background:#277e03"></span></div>
        <div class="cell" data-cell="c-9-17"><span class="cell__label">c-9-17</span><span class="cell__value">73.38</span><span class="cell__tint" style="background:#fcd46a"></span></div>
        <div class="cell" data-cell="c-9-18"><span class="cell__label">c-9-18</span><span class="cell__value">13.53</span><span class="cell__tint" style="background:#262ba8"></span></div>
        <div class="cell" data-cell="c-9-19"><span class="cell__label">c-9-19</span><span class="cell__value">48.17</span><span class="cell__tint" style="background:#38f67d"></span></div>
      </div>
      <div class="row" data-row="r-10">
        <div class="cell" data-cell="c-10-0"><span class="cell__label">c-10-0</span><span class="cell__value">89.65</span><span class="cell__tint" style="background:#ca222a"></span></div>
        <div class="cell" data-cell="c-10-1"><span class="cell__label">c-10-1</span><span class="cell__value">24.61</span><span class="cell__tint" style="background:#8bfec9"></span></div>
        <div class="cell" data-cell="c-10-2"><span class="cell__label">c-10-2</span><span class="cell__value">42.77</span><span class="cell__tint" style="background:#519430"></span></div>
        <div class="cell" data-cell="c-10-3"><span class="cell__label">c-10-3</span><span class="cell__value">54.14</span><span class="cell__tint" style="background:#b1176b"></span></div>
        <div class="cell" data-cell="c-10-4"><span class="cell__label">c-10-4</span><span class="cell__value">69.80</span><span class="cell__tint" style="background:#6a88e8"></span></div>
        <div class="cell" data-cell="c-10-5"><span class="cell__label">c-10-5</span><span class="cell__value">17.59</span><span class="cell__tint" style="background:#e9f461"></span></div>
        <div class="cell" data-cell="c-10-6"><span class="cell__label">c-10-6</span><span class="cell__value">12.91</span><span class="cell__tint" style="background:#47f95e"></span></div>
        <div class="cell" data-cell="c-10-7"><span class="cell__label">c-10-7</span><span class="cell__value">20.12</span><span class="cell__tint" style="background:#84930b"></span></div>
        <div class="cell" data-cell="c-10-8"><span class="cell__label">c-10-8</span><span class="cell__value">44.44</span><span class="cell__tint" style="background:#7c0d7a"></span></div>
        <div class="cell" data-cell="c-10-9"><span class="cell__label">c-10-9</span><span class="cell__value">38.57</span><span class="cell__tint" style="background:#468ee0"></span></div>
        <div class="cell" data-cell="c-10-10"><span class="cell__label">c-10-10</span><span class="cell__value">55.21</span><span class="cell__tint" style="background:#0246aa"></span></div>
        <div class="cell" data-cell="c-10-11"><span class="cell__label">c-10-11</span><span class="cell__value">37.44</span><span class="cell__tint" style="background:#f32c4a"></span></div>
        <div class="cell" data-cell="c-10-12"><span class="cell__label">c-10-12</span><span class="cell__value">6.24</span><span class="cell__tint" style="background:#d6c38a"></span></div>
        <div class="cell" data-cell="c-10-13"><span class="cell__label">c-10-13</span><span class="cell__value">64.62</span><span class="cell__tint" style="background:#721a87"></span></div>
        <div class="cell" data-cell="c-10-14"><span class="cell__label">c-10-14</span><span class="cell__value">25.27</span><span class="cell__tint" style="background:#8b5e35"></span></div>
        <div class="cell" data-cell="c-10-15"><span class="cell__label">c-10-15</span><span class="cell__value">35.57</span><span class="cell__tint" style="background:#1b736e"></span></div>
        <div class="cell" data-cell="c-10-16"><span class="cell__label">c-10-16</span><span class="cell__value">60.32</span><span class="cell__tint" style="background:#4ec920"></span></div>
        <div class="cell" data-cell="c-10-17"><span class="cell__label">c-10-17</span><span class="cell__value">35.04</span><span class="cell__tint" style="background:#7619cf"></span></div>
        <div class="cell" data-cell="c-10-18"><span class="cell__label">c-10-18</span><span class="cell__value">19.01</span><span class="cell__tint" style="background:#d0367d"></span></div>
        <div class="cell" data-cell="c-10-19"><span class="cell__label">c-10-19</span><span class="cell__value">3.42</span><span class="cell__tint" style="background:#e8b632"></span></div>
      </div>
      <div class="row" data-row="r-11">
        <div class="cell" data-cell="c-11-0"><span class="cell__label">c-11-0</span><span class="cell__value">82.11</span><span class="cell__tint" style="background:#b4890d"></span></div>
        <div class="cell" data-cell="c-11-1"><span class="cell__label">c-11-1</span><span class="cell__value">10.31</span><span class="cell__tint" style="background:#e7804c"></span></div>
        <div class="cell" data-cell="c-11-2"><span class="cell__label">c-11-2</span><span class="cell__value">13.16</span><span class="cell__tint" style="background:#914c0e"></span></div>
        <div class="cell" data-cell="c-11-3"><span class="cell__label">c-11-3</span><span class="cell__value">97.19</span><span class="cell__tint" style="background:#31d006"></span></div>
        <div class="cell" data-cell="c-11-4"><span class="cell__label">c-11-4</span><span class="cell__value">10.61</span><span class="cell__tint" style="background:#cca58d"></span></div>
        <div class="cell" data-cell="c-11-5"><span class="cell__label">c-11-5</span><span class="cell__value">84.96</span><span class="cell__tint" style="background:#a1922c"></span></div>
        <div class="cell" data-cell="c-11-6"><span class="cell__label">c-11-6</span><span class="cell__value">10.94</span><span class="cell__tint" style="background:#3a48e4"></span></div>
        <div class="cell" data-cell="c-11-7"><span class="cell__label">c-11-7</span><span class="cell__value">60.24</span><span class="cell__tint" style="background:#3de2a5"></span></div>
        <div class="cell" data-cell="c-11-8"><span class="cell__label">c-11-8</span><span class="cell__value">21.15</span><span class="cell__tint" style="background:#d5b80a"></span></div>
        <div class="cell" data-cell="c-11-9"><span class="cell__label">c-11-9</span><span class="cell__value">3.66</span><span class="cell__tint" style="background:#4bc409"></span></div>
        <div class="cell" data-cell="c-11-10"><span class="cell__label">c-11-10</span><span class="cell__value">64.15</span><span class="cell__tint" style="background:#82b5e9"></span></div>
        <div class="cell" data-cell="c-11-11"><span class="cell__label">c-11-11</span><span class="cell__value">2.97</span><span class="cell__tint" style="background:#5be1bc"></span></div>
        <div class="cell" data-cell="c-11-12"><span class="cell__label">c-11-12</span><span class="cell__value">19.63</span><span class="cell__tint" style="background:#44d23d"></span></div>
        <div class="cell" data-cell="c-11-13"><span class="cell__label">c-11-13</span><span class="cell__value">15.47</span><span class="cell__tint" style="background:#b3724b"></span></div>
        <div class="cell" data-cell="c-11-14"><span class="cell__label">c-11-14</span><span class="cell__value">10.57</span><span class="cell__tint" style="background:#8e6c0a"></span></div>
        <div class="cell" data-cell="c-11-15"><span class="cell__label">c-11-15</span><span class="cell__value">2.65</span><span class="cell__tint" style="background:#c374ac"></span></div>
        <div class="cell" data-cell="c-11-16"><span class="cell__label">c-11-16</span><span class="cell__value">8.74</span><span class="cell__tint" style="background:#83dcea"></span></div>
        <div class="cell" data-cell="c-11-17"><span class="cell__label">c-11-17</span><span class="cell__value">76.85</span><span class="cell__tint" style="background:#38c5dc"></span></div>
        <div class="cell" data-cell="c-11-18"><span class="cell__label">c-11-18</span><span class="cell__value">18.12</span><span class="cell__tint" style="background:#4e682b"></span></div>
        <div class="cell" data-cell="c-11-19"><span class="cell__label">c-11-19</span><span class="cell__value">97.71</span><span class="cell__tint" style="background:#c64f1c"></span></div>
      </div>
      <div class="row" data-row="r-12">
        <div class="cell" data-cell="c-12-0"><span class="cell__label">c-12-0</span><span class="cell__value">3.43</span><span class="cell__tint" style="background:#4f908f"></span></div>
        <div class="cell" data-cell="c-12-1"><span class="cell__label">c-12-1</span><span class="cell__value">45.00</span><span class="cell__tint" style="background:#05cbd7"></span></div>
        <div class="cell" data-cell="c-12-2"><span class="cell__label">c-12-2</span><span class="cell__value">42.13</span><span class="cell__tint" style="background:#b5e24b"></span></div>
        <div class="cell" data-cell="c-12-3"><span class="cell__label">c-12-3</span><span class="cell__value">22.83</span><span class="cell__tint" style="background:#e5177a"></span></div>
        <div class="cell" data-cell="c-12-4"><span class="cell__label">c-12-4</span><span class="cell__value">95.21</span><span class="cell__tint" style="background:#a1d12f"></span></div>
        <div class="cell" data-cell="c-12-5"><span class="cell__label">c-12-5</span><span class="cell__value">74.61</span><span class="cell__tint" style="background:#7570be"></span></div>
        <div class="cell" data-cell="c-12-6"><span class="cell__label">c-12-6</span><span class="cell__value">78.34</span><span class="cell__tint" style="background:#4fe84c"></span></div>
        <div class="cell" data-cell="c-12-7"><span class="cell__label">c-12-7</span><span class="cell__value">62.29</span><span class="cell__tint" style="background:#42820c"></span></div>
        <div class="cell" data-cell="c-12-8"><span class="cell__label">c-12-8</span><span class="cell__value">91.51</span><span class="cell__tint" style="background:#364a3c"></span></div>
        <div class="cell" data-cell="c-12-9"><span class="cell__label">c-12-9</span><span class="cell__value">38.84</span><span class="cell__tint" style="background:#c5a5d8"></span></div>
        <div class="cell" data-cell="c-12-10"><span class="cell__label">c-12-10</span><span class="cell__value">8.66</span><span class="cell__tint" style="background:#c615d3"></span></div>
        <div class="cell" data-cell="c-12-11"><span class="cell__label">c-12-11</span><span class="cell__value">97.48</span><span class="cell__tint" style="background:#efa6d8"></span></div>
        <div class="cell" data-cell="c-12-12"><span class="cell__label">c-12-12</span><span class="cell__value">55.59</span><span class="cell__tint" style="background:#b248af"></span></div>
        <div class="cell" data-cell="c-12-13"><span class="cell__label">c-12-13</span><span class="cell__value">53.29</span><span class="cell__tint" style="background:#6da20f"></span></div>
        <div class="cell" data-cell="c-12-14"><span class="cell__label">c-12-14</span><span class="cell__value">44.55</span><span class="cell__tint" style="background:#91140a"></span></div>
        <div class="cell" data-cell="c-12-15"><span class="cell__label">c-12-15</span><span class="cell__value">94.77</span><span class="cell__tint" style="background:#c86bdb"></span></div>
        <div class="cell" data-cell="c-12-16"><span class="cell__label">c-12-16</span><span class="cell__value">54.17</span><span class="cell__tint" style="background:#a0bd37"></span></div>
        <div class="cell" data-cell="c-12-17"><span class="cell__label">c-12-17</span><span class="cell__value">13.56</span><span class="cell__tint" style="background:#384def"></span></div>
        <div class="cell" data-cell="c-12-18"><span class="cell__label">c-12-18</span><span class="cell__value">80.86</span><span class="cell__tint" style="background:#caace4"></span></div>
        <div class="cell" data-cell="c-12-19"><span class="cell__label">c-12-19</span><span class="cell__value">13.98</span><span class="cell__tint" style="background:#1eb953"></span></div>
      </div>
      <div class="row" data-row="r-13">
        <div class="cell" data-cell="c-13-0"><span class="cell__label">c-13-0</span><span class="cell__value">30.87</span><span class="cell__tint" style="background:#6f4d97"></span></div>
        <div class="cell" data-cell="c-13-1"><span class="cell__label">c-13-1</span><span class="cell__value">60.71</span><span class="cell__tint" style="background:#c99f25"></span></div>
        <div class="cell" data-cell="c-13-2"><span class="cell__label">c-13-2</span><span class="cell__value">35.21</span><span class="cell__tint" style="background:#92afe2"></span></div>
        <div class="cell" data-cell="c-13-3"><span class="cell__label">c-13-3</span><span class="cell__value">35.52</span><span class="cell__tint" style="background:#fab03e"></span></div>
        <div class="cell" data-cell="c-13-4"><span class="cell__label">c-13-4</span><span class="cell__value">56.86</span><span class="cell__tint" style="background:#ed89f8"></span></div>
        <div class="cell" data-cell="c-13-5"><span class="cell__label">c-13-5</span><span class="cell__value">67.59</span><span class="cell__tint" style="background:#fefc15"></span></div>
        <div class="cell" data-cell="c-13-6"><span class="cell__label">c-13-6</span><span class="cell__value">96.46</span><span class="cell__tint" style="background:#f2a92a"></span></div>
        <div class="cell" data-cell="c-13-7"><span class="cell__label">c-13-7</span><span class="cell__value">73.97</span><span class="cell__tint" style="background:#5586be"></span></div>
        <div class="cell" data-cell="c-13-8"><span class="cell__label">c-13-8</span><span class="cell__value">83.49</span><span class="cell__tint" style="background:#39357e"></span></div>
        <div class="cell" data-cell="c-13-9"><span class="cell__label">c-13-9</span><span class="cell__value">24.43</span><span class="cell__tint" style="background:#4f821f"></span></div>
        <div class="cell" data-cell="c-13-10"><span class="cell__label">c-13-10</span><span class="cell__value">40.43</span><span class="cell__tint" style="background:#0fc50a"></span></div>
        <div class="cell" data-cell="c-13-11"><span class="cell__label">c-13-11</span><span class="cell__value">19.14</span><span class="cell__tint" style="background:#fc6f89"></span></div>
        <div class="cell" data-cell="c-13-12"><span class="cell__label">c-13-12</span><span class="cell__value">75.16</span><span class="cell__tint" style="background:#33cb00"></span></div>
        <div class="cell" data-cell="c-13-13"><span class="cell__label">c-13-13</span><span class="cell__value">86.47</span><span class="cell__tint" style="background:#9213ea"></span></div>
        <div class="cell" data-cell="c-13-14"><span class="cell__label">c-13-14</span><span class="cell__value">9.21</span><span class="cell__tint" style="background:#36a2ec"></span></div>
        <div class="cell" data-cell="c-13-15"><span class="cell__label">c-13-15</span><span class="cell__value">70.45</span><span class="cell__tint" style="background:#5068dd"></span></div>
        <div class="cell" data-cell="c-13-16"><span class="cell__label">c-13-16</span><span class="cell__value">77.02</span><span class="cell__tint" style="background:#f4a74c"></span></div>
        <div class="cell" data-cell="c-13-17"><span class="cell__label">c-13-17</span><span class="cell__value">66.03</span><span class="cell__tint" style="background:#f93f7b"></span></div>
        <div class="cell" data-cell="c-13-18"><span class="cell__label">c-13-18</span><span class="cell__value">73.01</span><span class="cell__tint" style="background:#c1337c"></span></div>
        <div class="cell" data-cell="c-13-19"><span class="cell__label">c-13-19</span><span class="cell__value">31.25</span><span class="cell__tint" style="background:#6210a7"></span></div>
      </div>
      <div class="row" data-row="r-14">
        <div class="cell" data-cell="c-14-0"><span class="cell__label">c-14-0</span><span class="cell__value">38.53</span><span class="cell__tint" style="background:#10a7ec"></span></div>
        <div class="cell" data-cell="c-14-1"><span class="cell__label">c-14-1</span><span class="cell__value">76.39</span><span class="cell__tint" style="background:#0205fb"></span></div>
        <div class="cell" data-cell="c-14-2"><span class="cell__label">c-14-2</span><span class="cell__value">61.07</span><span class="cell__tint" style="background:#0ac6f6"></span></div>
        <div class="cell" data-cell="c-14-3"><span class="cell__label">c-14-3</span><span class="cell__value">81.25</span><span class="cell__tint" style="background:#e2cd68"></span></div>
        <div class="cell" data-cell="c-14-4"><span class="cell__label">c-14-4</span><span class="cell__value">52.24</span><span class="cell__tint" style="background:#f973fc"></span></div>
        <div class="cell" data-cell="c-14-5"><span class="cell__label">c-14-5</span><span class="cell__value">30.48</span><span class="cell__tint" style="background:#2a643c"></span></div>
        <div class="cell" data-cell="c-14-6"><span class="cell__label">c-14-6</span><span class="cell__value">63.73</span><span class="cell__tint" style="background:#3bbf5e"></span></div>
        <div class="cell" data-cell="c-14-7"><span class="cell__label">c-14-7</span><span class="cell__value">91.81</span><span class="cell__tint" style="background:#38f7ea"></span></div>
        <div class="cell" data-cell="c-14-8"><span class="cell__label">c-14-8</span><span class="cell__value">70.35</span><span class="cell__tint" style="background:#22752b"></span></div>
        <div class="cell" data-cell="c-14-9"><span class="cell__label">c-14-9</span><span class="cell__value">4.80</span><span class="cell__tint" style="background:#61910d"></span></div>
        <div class="cell" data-cell="c-14-10"><span class="cell__label">c-14-10</span><span class="cell__value">4.84</span><span class="cell__tint" style="background:#2f753a"></span></div>
        <div class="cell" data-cell="c-14-11"><span class="cell__label">c-14-11</span><span class="cell__value">72.67</span><span class="cell__tint" style="background:#7b70f9"></span></div>
        <div class="cell" data-cell="c-14-12"><span class="cell__label">c-14-12</span><span class="cell__value">34.11</span><span class="cell__tint" style="background:#7fdba9"></span></div>
        <div class="cell" data-cell="c-14-13"><span class="cell__label">c-14-13</span><span class="cell__value">13.68</span><span class="cell__tint" style="background:#2f5bb3"></span></div>
        <div class="cell" data-cell="c-14-14"><span class="cell__label">c-14-14</span><span class="cell__value">98.67</span><span class="cell__tint" style="background:#c0d050"></span></div>
        <div class="cell" data-cell="c-14-15"><span class="cell__label">c-14-15</span><span class="cell__value">45.07</span><span class="cell__tint" style="background:#c333eb"></span></div>
        <div class="cell" data-cell="c-14-16"><span class="cell__label">c-14-16</span><span class="cell__value">78.74</span><span class="cell__tint" style="background:#727d90"></span></div>
        <div class="cell" data-cell="c-14-17"><span class="cell__label">c-14-17</span><span class="cell__value">0.24</span><span class="cell__tint" style="background:#43913b"></span></div>
        <div class="cell" data-cell="c-14-18"><span class="cell__label">c-14-18</span><span class="cell__value">58.80</span><span class="cell__tint" style="background:#67aeef"></span></div>
        <div class="cell" data-cell="c-14-19"><span class="cell__label">c-14-19</span><span class="cell__value">52.16</span><span class="cell__tint" style="background:#4a4d2a"></span></div>
      </div>
      <div class="row" data-row="r-15">
        <div class="cell" data-cell="c-15-0"><span class="cell__label">c-15-0</span><span class="cell__value">38.86</span><span class="cell__tint" style="background:#8b461b"></span></div>
        <div class="cell" data-cell="c-15-1"><span class="cell__label">c-15-1</span><span class="cell__value">65.68</span><span class="cell__tint" style="background:#5cd3c8"></span></div>
        <div class="cell" data-cell="c-15-2"><span class="cell__label">c-15-2</span><span class="cell__value">0.27</span><span class="cell__tint" style="background:#97aae1"></span></div>
        <div class="cell" data-cell="c-15-3"><span class="cell__label">c-15-3</span><span class="cell__value">82.60</span><span class="cell__tint" style="background:#a4edaa"></span></div>
        <div class="cell" data-cell="c-15-4"><span class="cell__label">c-15-4</span><span class="cell__value">52.72</span><span class="cell__tint" style="background:#a1e20f"></span></div>
        <div class="cell" data-cell="c-15-5"><span class="cell__label">c-15-5</span><span class="cell__value">67.99</span><span class="cell__tint" style="background:#913f91"></span></div>
        <div class="cell" data-cell="c-15-6"><span class="cell__label">c-15-6</span><span class="cell__value">2.55</span><span class="cell__tint" style="background:#86d74c"></span></div>
        <div class="cell" data-cell="c-15-7"><span class="cell__label">c-15-7</span><span class="cell__value">64.75</span><span class="cell__tint" style="background:#bf8c3c"></span></div>
        <div class="cell" data-cell="c-15-8"><span class="cell__label">c-15-8</span><span class="cell__value">13.30</span><span class="cell__tint" style="background:#8424a8"></span></div>
        <div class="cell" data-cell="c-15-9"><span class="cell__label">c-15-9</span><span class="cell__value">16.52</span><span class="cell__tint" style="background:#6c32df"></span></div>
        <div class="cell" data-cell="c-15-10"><span class="cell__label">c-15-10</span><span class="cell__value">47.73</span><span class="cell__tint" style="background:#780fff"></span></div>
        <div class="cell" data-cell="c-15-11"><span class="cell__label">c-15-11</span><span class="cell__value">13.75</span><span class="cell__tint" style="background:#e716dc"></span></div>
      <!-- <div id="toggle-block">
        <div class="cell" data-cell="c-15-12"><span class="cell__label">c-15-12</span><span class="cell__value">0.54</span><span class="cell__tint" style="background:#cb668a"></span></div>
        <div class="cell" data-cell="c-15-13"><span class="cell__label">c-15-13</span><span class="cell__value">82.92</span><span class="cell__tint" style="background:#e4d40d"></span></div>
        <div class="cell" data-cell="c-15-14"><span class="cell__label">c-15-14</span><span class="cell__value">14.13</span><span class="cell__tint" style="background:#ec0325"></span></div>
        <div class="cell" data-cell="c-15-15"><span class="cell__label">c-15-15</span><span class="cell__value">53.03</span><span class="cell__tint" style="background:#3d58ef"></span></div>
        <div class="cell" data-cell="c-15-16"><span class="cell__label">c-15-16</span><span class="cell__value">75.84</span><span class="cell__tint" style="background:#46ee92"></span></div>
        <div class="cell" data-cell="c-15-17"><span class="cell__label">c-15-17</span><span class="cell__value">76.76</span><span class="cell__tint" style="background:#072c6f"></span></div>
        <div class="cell" data-cell="c-15-18"><span class="cell__label">c-15-18</span><span class="cell__value">42.23</span><span class="cell__tint" style="background:#bfa42f"></span></div>
        <div class="cell" data-cell="c-15-19"><span class="cell__label">c-15-19</span><span class="cell__value">77.54</span><span class="cell__tint" style="background:#421128"></span></div>
      </div>
      <div class="row" data-row="r-16">
        <div class="cell" data-cell="c-16-0"><span class="cell__label">c-16-0</span><span class="cell__value">41.63</span><span class="cell__tint" style="background:#e115a7"></span></div>
        <div class="cell" data-cell="c-16-1"><span class="cell__label">c-16-1</span><span class="cell__value">47.69</span><span class="cell__tint" style="background:#926d44"></span></div>
        <div class="cell" data-cell="c-16-2"><span class="cell__label">c-16-2</span><span class="cell__value">26.91</span><span class="cell__tint" style="background:#4873b2"></span></div>
        <div class="cell" data-cell="c-16-3"><span class="cell__label">c-16-3</span><span class="cell__value">69.96</span><span class="cell__tint" style="background:#f988da"></span></div>
        <div class="cell" data-cell="c-16-4"><span class="cell__label">c-16-4</span><span class="cell__value">47.64</span><span class="cell__tint" style="background:#bc49d4"></span></div>
        <div class="cell" data-cell="c-16-5"><span class="cell__label">c-16-5</span><span class="cell__value">27.04</span><span class="cell__tint" style="background:#c2f568"></span></div>
        <div class="cell" data-cell="c-16-6"><span class="cell__label">c-16-6</span><span class="cell__value">6.63</span><span class="cell__tint" style="background:#3feee5"></span></div>
        <div class="cell" data-cell="c-16-7"><span class="cell__label">c-16-7</span><span class="cell__value">45.48</span><span class="cell__tint" style="background:#bd7947"></span></div>
        <div class="cell" data-cell="c-16-8"><span class="cell__label">c-16-8</span><span class="cell__value">59.24</span><span class="cell__tint" style="background:#361f55"></span></div>
        <div class="cell" data-cell="c-16-9"><span class="cell__label">c-16-9</span><span class="cell__value">72.64</span><span class="cell__tint" style="background:#2cec3c"></span></div>
        <div class="cell" data-cell="c-16-10"><span class="cell__label">c-16-10</span><span class="cell__value">81.50</span><span class="cell__tint" style="background:#471286"></span></div>
        <div class="cell" data-cell="c-16-11"><span class="cell__label">c-16-11</span><span class="cell__value">7.65</span><span class="cell__tint" style="background:#10da97"></span></div>
        <div class="cell" data-cell="c-16-12"><span class="cell__label">c-16-12</span><span class="cell__value">85.99</span><span class="cell__tint" style="background:#9486ce"></span></div>
        <div class="cell" data-cell="c-16-13"><span class="cell__label">c-16-13</span><span class="cell__value">76.20</span><span class="cell__tint" style="background:#bd00fb"></span></div>
        <div class="cell" data-cell="c-16-14"><span class="cell__label">c-16-14</span><span class="cell__value">21.52</span><span class="cell__tint" style="background:#e0d70a"></span></div>
        <div class="cell" data-cell="c-16-15"><span class="cell__label">c-16-15</span><span class="cell__value">15.98</span><span class="cell__tint" style="background:#046153"></span></div>
        <div class="cell" data-cell="c-16-16"><span class="cell__label">c-16-16</span><span class="cell__value">10.49</span><span class="cell__tint" style="background:#64c353"></span></div>
        <div class="cell" data-cell="c-16-17"><span class="cell__label">c-16-17</span><span class="cell__value">13.00</span><span class="cell__tint" style="background:#d343d4"></span></div>
        <div class="cell" data-cell="c-16-18"><span class="cell__label">c-16-18</span><span class="cell__value">44.13</span><span class="cell__tint" style="background:#af58f0"></span></div>
        <div class="cell" data-cell="c-16-19"><span class="cell__label">c-16-19</span><span class="cell__value">59.78</span><span class="cell__tint" style="background:#ddd3a2"></span></div>
      </div>
      <div class="row" data-row="r-17">
        <div class="cell" data-cell="c-17-0"><span class="cell__label">c-17-0</span><span class="cell__value">54.78</span><span class="cell__tint" style="background:#075afa"></span></div>
        <div class="cell" data-cell="c-17-1"><span class="cell__label">c-17-1</span><span class="cell__value">59.35</span><span class="cell__tint" style="background:#00435a"></span></div>
        <div class="cell" data-cell="c-17-2"><span class="cell__label">c-17-2</span><span class="cell__value">99.84</span><span class="cell__tint" style="background:#ce8e45"></span></div>
        <div class="cell" data-cell="c-17-3"><span class="cell__label">c-17-3</span><span class="cell__value">24.96</span><span class="cell__tint" style="background:#16d8e9"></span></div>
        <div class="cell" data-cell="c-17-4"><span class="cell__label">c-17-4</span><span class="cell__value">5.55</span><span class="cell__tint" style="background:#21397b"></span></div>
        <div class="cell" data-cell="c-17-5"><span class="cell__label">c-17-5</span><span class="cell__value">48.83</span><span class="cell__tint" style="background:#933d5e"></span></div>
        <div class="cell" data-cell="c-17-6"><span class="cell__label">c-17-6</span><span class="cell__value">7.54</span><span class="cell__tint" style="background:#401444"></span></div>
        <div class="cell" data-cell="c-17-7"><span class="cell__label">c-17-7</span><span class="cell__value">40.94</span><span class="cell__tint" style="background:#44f56d"></span></div>
        <div class="cell" data-cell="c-17-8"><span class="cell__label">c-17-8</span><span class="cell__value">77.60</span><span class="cell__tint" style="background:#680917"></span></div>
        <div class="cell" data-cell="c-17-9"><span class="cell__label">c-17-9</span><span class="cell__value">92.02</span><span class="cell__tint" style="background:#0f1cd9"></span></div>
        <div class="cell" data-cell="c-17-10"><span class="cell__label">c-17-10</span><span class="cell__value">64.72</span><span class="cell__tint" style="background:#56afee"></span></div>
        <div class="cell" data-cell="c-17-11"><span class="cell__label">c-17-11</span><span class="cell__value">37.15</span><span class="cell__tint" style="background:#8c0ce5"></span></div>
        <div class="cell" data-cell="c-17-12"><span class="cell__label">c-17-12</span><span class="cell__value">10.01</span><span class="cell__tint" style="background:#3362e9"></span></div>
        <div class="cell" data-cell="c-17-13"><span class="cell__label">c-17-13</span><span class="cell__value">66.22</span><span class="cell__tint" style="background:#dba83b"></span></div>
        <div class="cell" data-cell="c-17-14"><span class="cell__label">c-17-14</span><span class="cell__value">59.25</span><span class="cell__tint" style="background:#c87bb1"></span></div>
        <div class="cell" data-cell="c-17-15"><span class="cell__label">c-17-15</span><span class="cell__value">6.54</span><span class="cell__tint" style="background:#7dde86"></span></div>
        <div class="cell" data-cell="c-17-16"><span class="cell__label">c-17-16</span><span class="cell__value">36.04</span><span class="cell__tint" style="background:#1b109e"></span></div>
        <div class="cell" data-cell="c-17-17"><span class="cell__label">c-17-17</span><span class="cell__value">69.57</span><span class="cell__tint" style="background:#85ee13"></span></div>
        <div class="cell" data-cell="c-17-18"><span class="cell__label">c-17-18</span><span class="cell__value">72.65</span><span class="cell__tint" style="background:#ca7b0f"></span></div>
        <div class="cell" data-cell="c-17-19"><span class="cell__label">c-17-19</span><span class="cell__value">99.30</span><span class="cell__tint" style="background:#5ef75c"></span></div>
      </div>
      <div class="row" data-row="r-18">
        <div class="cell" data-cell="c-18-0"><span class="cell__label">c-18-0</span><span class="cell__value">99.08</span><span class="cell__tint" style="background:#458c75"></span></div>
        <div class="cell" data-cell="c-18-1"><span class="cell__label">c-18-1</span><span class="cell__value">29.19</span><span class="cell__tint" style="background:#ea3477"></span></div>
        <div class="cell" data-cell="c-18-2"><span class="cell__label">c-18-2</span><span class="cell__value">53.32</span><span class="cell__tint" style="background:#c91089"></span></div>
        <div class="cell" data-cell="c-18-3"><span class="cell__label">c-18-3</span><span class="cell__value">42.28</span><span class="cell__tint" style="background:#bb5e38"></span></div>
        <div class="cell" data-cell="c-18-4"><span class="cell__label">c-18-4</span><span class="cell__value">83.61</span><span class="cell__tint" style="background:#e7b208"></span></div>
        <div class="cell" data-cell="c-18-5"><span class="cell__label">c-18-5</span><span class="cell__value">60.57</span><span class="cell__tint" style="background:#260811"></span></div>
        <div class="cell" data-cell="c-18-6"><span class="cell__label">c-18-6</span><span class="cell__value">38.60</span><span class="cell__tint" style="background:#02cb7e"></span></div>
        <div class="cell" data-cell="c-18-7"><span class="cell__label">c-18-7</span><span class="cell__value">11.16</span><span class="cell__tint" style="background:#cd8fb1"></span></div>
        <div class="cell" data-cell="c-18-8"><span class="cell__label">c-18-8</span><span class="cell__value">60.86</span><span class="cell__tint" style="background:#f52b05"></span></div>
        <div class="cell" data-cell="c-18-9"><span class="cell__label">c-18-9</span><span class="cell__value">87.43</span><span class="cell__tint" style="background:#2e8a68"></span></div>
        <div class="cell" data-cell="c-18-10"><span class="cell__label">c-18-10</span><span class="cell__value">32.93</span><span class="cell__tint" style="background:#d7cdef"></span></div>
        <div class="cell" data-cell="c-18-11"><span class="cell__label">c-18-11</span><span class="cell__value">9.04</span><span class="cell__tint" style="background:#599073"></span></div>
        <div class="cell" data-cell="c-18-12"><span class="cell__label">c-18-12</span><span class="cell__value">27.07</span><span class="cell__tint" style="background:#2986c6"></span></div>
        <div class="cell" data-cell="c-18-13"><span class="cell__label">c-18-13</span><span class="cell__value">36.31</span><span class="cell__tint" style="background:#7b58cf"></span></div>
        <div class="cell" data-cell="c-18-14"><span class="cell__label">c-18-14</span><span class="cell__value">2.07</span><span class="cell__tint" style="background:#1ed9f6"></span></div>
        <div class="cell" data-cell="c-18-15"><span class="cell__label">c-18-15</span><span class="cell__value">24.73</span><span class="cell__tint" style="background:#a654b5"></span></div>
        <div class="cell" data-cell="c-18-16"><span class="cell__label">c-18-16</span><span class="cell__value">47.49</span><span class="cell__tint" style="background:#1ccac5"></span></div>
        <div class="cell" data-cell="c-18-17"><span class="cell__label">c-18-17</span><span class="cell__value">52.95</span><span class="cell__tint" style="background:#26ddb5"></span></div>
        <div class="cell" data-cell="c-18-18"><span class="cell__label">c-18-18</span><span class="cell__value">40.52</span><span class="cell__tint" style="background:#03527f"></span></div>
        <div class="cell" data-cell="c-18-19"><span class="cell__label">c-18-19</span><span class="cell__value">73.82</span><span class="cell__tint" style="background:#ee51c7"></span></div>
      </div>
      <div class="row" data-row="r-19">
        <div class="cell" data-cell="c-19-0"><span class="cell__label">c-19-0</span><span class="cell__value">27.59</span><span class="cell__tint" style="background:#c18b6c"></span></div>
        <div class="cell" data-cell="c-19-1"><span class="cell__label">c-19-1</span><span class="cell__value">80.81</span><span class="cell__tint" style="background:#ffa43d"></span></div>
        <div class="cell" data-cell="c-19-2"><span class="cell__label">c-19-2</span><span class="cell__value">9.46</span><span class="cell__tint" style="background:#93cfb5"></span></div>
        <div class="cell" data-cell="c-19-3"><span class="cell__label">c-19-3</span><span class="cell__value">32.55</span><span class="cell__tint" style="background:#8cfc5c"></span></div>
        <div class="cell" data-cell="c-19-4"><span class="cell__label">c-19-4</span><span class="cell__value">11.04</span><span class="cell__tint" style="background:#45a70d"></span></div>
        <div class="cell" data-cell="c-19-5"><span class="cell__label">c-19-5</span><span class="cell__value">49.01</span><span class="cell__tint" style="background:#4a910c"></span></div>
        <div class="cell" data-cell="c-19-6"><span class="cell__label">c-19-6</span><span class="cell__value">92.87</span><span class="cell__tint" style="background:#ae6d09"></span></div>
        <div class="cell" data-cell="c-19-7"><span class="cell__label">c-19-7</span><span class="cell__value">43.65</span><span class="cell__tint" style="background:#8586d9"></span></div>
        <div class="cell" data-cell="c-19-8"><span class="cell__label">c-19-8</span><span class="cell__value">80.13</span><span class="cell__tint" style="background:#7b324c"></span></div>
        <div class="cell" data-cell="c-19-9"><span class="cell__label">c-19-9</span><span class="cell__value">52.00</span><span class="cell__tint" style="background:#3a7ab8"></span></div>
        <div class="cell" data-cell="c-19-10"><span class="cell__label">c-19-10</span><span class="cell__value">28.47</span><span class="cell__tint" style="background:#8da90d"></span></div>
        <div class="cell" data-cell="c-19-11"><span class="cell__label">c-19-11</span><span class="cell__value">46.49</span><span class="cell__tint" style="background:#037452"></span></div>
        <div class="cell" data-cell="c-19-12"><span class="cell__label">c-19-12</span><span class="cell__value">56.44</span><span class="cell__tint" style="background:#309385"></span></div>
        <div class="cell" data-cell="c-19-13"><span class="cell__label">c-19-13</span><span class="cell__value">17.16</span><span class="cell__tint" style="background:#5dec8a"></span></div>
        <div class="cell" data-cell="c-19-14"><span class="cell__label">c-19-14</span><span class="cell__value">96.02</span><span class="cell__tint" style="background:#6534db"></span></div>
        <div class="cell" data-cell="c-19-15"><span class="cell__label">c-19-15</span><span class="cell__value">93.91</span><span class="cell__tint" style="background:#63cfbf"></span></div>
        <div class="cell" data-cell="c-19-16"><span class="cell__label">c-19-16</span><span class="cell__value">85.08</span><span class="cell__tint" style="background:#fd4ecb"></span></div>
        <div class="cell" data-cell="c-19-17"><span class="cell__label">c-19-17</span><span class="cell__value">72.74</span><span class="cell__tint" style="background:#2bc172"></span></div>
        <div class="cell" data-cell="c-19-18"><span class="cell__label">c-19-18</span><span class="cell__value">61.04</span><span class="cell__tint" style="background:#60458b"></span></div>
        <div class="cell" data-cell="c-19-19"><span class="cell__label">c-19-19</span><span class="cell__value">46.24</span><span class="cell__tint" style="background:#b434bb"></span></div>
      </div>
      <div class="row" data-row="r-20">
        <div class="cell" data-cell="c-20-0"><span class="cell__label">c-20-0</span><span class="cell__value">34.19</span><span class="cell__tint" style="background:#4a478b"></span></div>
        <div class="cell" data-cell="c-20-1"><span class="cell__label">c-20-1</span><span class="cell__value">67.09</span><span class="cell__tint" style="background:#9f731c"></span></div>
        <div class="cell" data-cell="c-20-2"><span class="cell__label">c-20-2</span><span class="cell__value">20.62</span><span class="cell__tint" style="background:#03b249"></span></div>
        <div class="cell" data-cell="c-20-3"><span class="cell__label">c-20-3</span><span class="cell__value">36.20</span><span class="cell__tint" style="background:#f7a4b0"></span></div>
        <div class="cell" data-cell="c-20-4"><span class="cell__label">c-20-4</span><span class="cell__value">16.29</span><span class="cell__tint" style="background:#d2f09d"></span></div>
        <div class="cell" data-cell="c-20-5"><span class="cell__label">c-20-5</span><span class="cell__value">1.59</span><span class="cell__tint" style="background:#55c2dd"></span></div>
        <div class="cell" data-cell="c-20-6"><span class="cell__label">c-20-6</span><span class="cell__value">47.86</span><span class="cell__tint" style="background:#cc6a98"></span></div>
        <div class="cell" data-cell="c-20-7"><span class="cell__label">c-20-7</span><span class="cell__value">26.08</span><span class="cell__tint" style="background:#d1acb4"></span></div>
        <div class="cell" data-cell="c-20-8"><span class="cell__label">c-20-8</span><span class="cell__value">95.93</span><span class="cell__tint" style="background:#77cc8c"></span></div>
        <div class="cell" data-cell="c-20-9"><span class="cell__label">c-20-9</span><span class="cell__value">53.96</span><span class="cell__tint" style="background:#e2ffb3"></span></div>
        <div class="cell" data-cell="c-20-10"><span class="cell__label">c-20-10</span><span class="cell__value">95.61</span><span class="cell__tint" style="background:#2e8d4b"></span></div>
        <div class="cell" data-cell="c-20-11"><span class="cell__label">c-20-11</span><span class="cell__value">41.67</span><span class="cell__tint" style="background:#8cc030"></span></div>
        <div class="cell" data-cell="c-20-12"><span class="cell__label">c-20-12</span><span class="cell__value">45.30</span><span class="cell__tint" style="background:#599321"></span></div>
        <div class="cell" data-cell="c-20-13"><span class="cell__label">c-20-13</span><span class="cell__value">88.30</span><span class="cell__tint" style="background:#ea7cf0"></span></div>
        <div class="cell" data-cell="c-20-14"><span class="cell__label">c-20-14</span><span class="cell__value">45.62</span><span class="cell__tint" style="background:#3c7170"></span></div>
        <div class="cell" data-cell="c-20-15"><span class="cell__label">c-20-15</span><span class="cell__value">27.63</span><span class="cell__tint" style="background:#231b92"></span></div>
        <div class="cell" data-cell="c-20-16"><span class="cell__label">c-20-16</span><span class="cell__value">71.91</span><span class="cell__tint" style="background:#901119"></span></div>
        <div class="cell" data-cell="c-20-17"><span class="cell__label">c-20-17</span><span class="cell__value">57.54</span><span class="cell__tint" style="background:#ddeffd"></span></div>
        <div class="cell" data-cell="c-20-18"><span class="cell__label">c-20-18</span><span class="cell__value">19.43</span><span class="cell__tint" style="background:#1c4fcf"></span></div>
        <div class="cell" data-cell="c-20-19"><span class="cell__label">c-20-19</span><span class="cell__value">63.57</span><span class="cell__tint" style="background:#73f622"></span></div>
      </div>
      <div class="row" data-row="r-21">
        <div class="cell" data-cell="c-21-0"><span class="cell__label">c-21-0</span><span class="cell__value">36.55</span><span class="cell__tint" style="background:#5ab359"></span></div>
        <div class="cell" data-cell="c-21-1"><span class="cell__label">c-21-1</span><span class="cell__value">64.84</span><span class="cell__tint" style="background:#11440c"></span></div>
        <div class="cell" data-cell="c-21-2"><span class="cell__label">c-21-2</span><span class="cell__value">76.96</span><span class="cell__tint" style="background:#6b6303"></span></div>
        <div class="cell" data-cell="c-21-3"><span class="cell__label">c-21-3</span><span class="cell__value">21.81</span><span class="cell__tint" style="background:#f4ce87"></span></div>
        <div class="cell" data-cell="c-21-4"><span class="cell__label">c-21-4</span><span class="cell__value">99.11</span><span class="cell__tint" style="background:#cacbd8"></span></div>
        <div class="cell" data-cell="c-21-5"><span class="cell__label">c-21-5</span><span class="cell__value">4.72</span><span class="cell__tint" style="background:#e55732"></span></div>
        <div class="cell" data-cell="c-21-6"><span class="cell__label">c-21-6</span><span class="cell__value">21.30</span><span class="cell__tint" style="background:#281538"></span></div>
        <div class="cell" data-cell="c-21-7"><span class="cell__label">c-21-7</span><span class="cell__value">92.29</span><span class="cell__tint" style="background:#a79f68"></span></div>
        <div class="cell" data-cell="c-21-8"><span class="cell__label">c-21-8</span><span class="cell__value">76.09</span><span class="cell__tint" style="background:#1a5eb0"></span></div>
        <div class="cell" data-cell="c-21-9"><span class="cell__label">c-21-9</span><span class="cell__value">36.58</span><span class="cell__tint" style="background:#269a21"></span></div>
        <div class="cell" data-cell="c-21-10"><span class="cell__label">c-21-10</span><span class="cell__value">88.42</span><span class="cell__tint" style="background:#17123a"></span></div>
        <div class="cell" data-cell="c-21-11"><span class="cell__label">c-21-11</span><span class="cell__value">33.14</span><span class="cell__tint" style="background:#37bd23"></span></div>
        <div class="cell" data-cell="c-21-12"><span class="cell__label">c-21-12</span><span class="cell__value">98.11</span><span class="cell__tint" style="background:#77a886"></span></div>
        <div class="cell" data-cell="c-21-13"><span class="cell__label">c-21-13</span><span class="cell__value">87.57</span><span class="cell__tint" style="background:#34b719"></span></div>
        <div class="cell" data-cell="c-21-14"><span class="cell__label">c-21-14</span><span class="cell__value">84.45</span><span class="cell__tint" style="background:#f22bc6"></span></div>
        <div class="cell" data-cell="c-21-15"><span class="cell__label">c-21-15</span><span class="cell__value">19.11</span><span class="cell__tint" style="background:#b9dfca"></span></div>
        <div class="cell" data-cell="c-21-16"><span class="cell__label">c-21-16</span><span class="cell__value">98.79</span><span class="cell__tint" style="background:#8761ac"></span></div>
        <div class="cell" data-cell="c-21-17"><span class="cell__label">c-21-17</span><span class="cell__value">72.99</span><span class="cell__tint" style="background:#f26c20"></span></div>
        <div class="cell" data-cell="c-21-18"><span class="cell__label">c-21-18</span><span class="cell__value">83.72</span><span class="cell__tint" style="background:#dbcea1"></span></div>
        <div class="cell" data-cell="c-21-19"><span class="cell__label">c-21-19</span><span class="cell__value">88.88</span><span class="cell__tint" style="background:#c732d7"></span></div>
      </div>
      <div class="row" data-row="r-22">
        <div class="cell" data-cell="c-22-0"><span class="cell__label">c-22-0</span><span class="cell__value">31.23</span><span class="cell__tint" style="background:#61d865"></span></div>
        <div class="cell" data-cell="c-22-1"><span class="cell__label">c-22-1</span><span class="cell__value">67.94</span><span class="cell__tint" style="background:#8e39c5"></span></div>
        <div class="cell" data-cell="c-22-2"><span class="cell__label">c-22-2</span><span class="cell__value">25.09</span><span class="cell__tint" style="background:#a676f7"></span></div>
        <div class="cell" data-cell="c-22-3"><span class="cell__label">c-22-3</span><span class="cell__value">48.51</span><span class="cell__tint" style="background:#b1cd70"></span></div>
        <div class="cell" data-cell="c-22-4"><span class="cell__label">c-22-4</span><span class="cell__value">80.38</span><span class="cell__tint" style="background:#58cb90"></span></div>
        <div class="cell" data-cell="c-22-5"><span class="cell__label">c-22-5</span><span class="cell__value">83.58</span><span class="cell__tint" style="background:#93963e"></span></div>
        <div class="cell" data-cell="c-22-6"><span class="cell__label">c-22-6</span><span class="cell__value">28.84</span><span class="cell__tint" style="background:#829aac"></span></div>
        <div class="cell" data-cell="c-22-7"><span class="cell__label">c-22-7</span><span class="cell__value">49.81</span><span class="cell__tint" style="background:#c3d991"></span></div>
        <div class="cell" data-cell="c-22-8"><span class="cell__label">c-22-8</span><span class="cell__value">98.78</span><span class="cell__tint" style="background:#399a50"></span></div>
        <div class="cell" data-cell="c-22-9"><span class="cell__label">c-22-9</span><span class="cell__value">23.31</span><span class="cell__tint" style="background:#446365"></span></div>
        <div class="cell" data-cell="c-22-10"><span class="cell__label">c-22-10</span><span class="cell__value">67.57</span><span class="cell__tint" style="background:#818a1a"></span></div>
        <div class="cell" data-cell="c-22-11"><span class="cell__label">c-22-11</span><span class="cell__value">5.37</span><span class="cell__tint" style="background:#45930a"></span></div>
        <div class="cell" data-cell="c-22-12"><span class="cell__label">c-22-12</span><span class="cell__value">57.56</span><span class="cell__tint" style="background:#1418cf"></span></div>
        <div class="cell" data-cell="c-22-13"><span class="cell__label">c-22-13</span><span class="cell__value">37.22</span><span class="cell__tint" style="background:#8c7d82"></span></div>
        <div class="cell" data-cell="c-22-14"><span class="cell__label">c-22-14</span><span class="cell__value">22.66</span><span class="cell__tint" style="background:#7aefeb"></span></div>
        <div class="cell" data-cell="c-22-15"><span class="cell__label">c-22-15</span><span class="cell__value">77.49</span><span class="cell__tint" style="background:#163b29"></span></div>
        <div class="cell" data-cell="c-22-16"><span class="cell__label">c-22-16</span><span class="cell__value">91.28</span><span class="cell__tint" style="background:#033da0"></span></div>
        <div class="cell" data-cell="c-22-17"><span class="cell__label">c-22-17</span><span class="cell__value">67.62</span><span class="cell__tint" style="background:#6a2f42"></span></div>
        <div class="cell" data-cell="c-22-18"><span class="cell__label">c-22-18</span><span class="cell__value">97.46</span><span class="cell__tint" style="background:#dcc9df"></span></div>
        <div class="cell" data-cell="c-22-19"><span class="cell__label">c-22-19</span><span class="cell__value">35.04</span><span class="cell__tint" style="background:#e83a7f"></span></div>
      </div>
      <div class="row" data-row="r-23">
        <div class="cell" data-cell="c-23-0"><span class="cell__label">c-23-0</span><span class="cell__value">42.12</span><span class="cell__tint" style="background:#c795e7"></span></div>
        <div class="cell" data-cell="c-23-1"><span class="cell__label">c-23-1</span><span class="cell__value">4.89</span><span class="cell__tint" style="background:#e808f8"></span></div>
        <div class="cell" data-cell="c-23-2"><span class="cell__label">c-23-2</span><span class="cell__value">77.44</span><span class="cell__tint" style="background:#31dce2"></span></div>
        <div class="cell" data-cell="c-23-3"><span class="cell__label">c-23-3</span><span class="cell__value">47.67</span><span class="cell__tint" style="background:#31e590"></span></div>
        <div class="cell" data-cell="c-23-4"><span class="cell__label">c-23-4</span><span class="cell__value">39.73</span><span class="cell__tint" style="background:#30cf4d"></span></div>
        <div class="cell" data-cell="c-23-5"><span class="cell__label">c-23-5</span><span class="cell__value">21.07</span><span class="cell__tint" style="background:#642df3"></span></div>
        <div class="cell" data-cell="c-23-6"><span class="cell__label">c-23-6</span><span class="cell__value">53.88</span><span class="cell__tint" style="background:#fe3542"></span></div>
        <div class="cell" data-cell="c-23-7"><span class="cell__label">c-23-7</span><span class="cell__value">50.27</span><span class="cell__tint" style="background:#4a4041"></span></div>
        <div class="cell" data-cell="c-23-8"><span class="cell__label">c-23-8</span><span class="cell__value">30.25</span><span class="cell__tint" style="background:#8f3724"></span></div>
        <div class="cell" data-cell="c-23-9"><span class="cell__label">c-23-9</span><span class="cell__value">37.23</span><span class="cell__tint" style="background:#becf84"></span></div>
        <div class="cell" data-cell="c-23-10"><span class="cell__label">c-23-10</span><span class="cell__value">2.01</span><span class="cell__tint" style="background:#02650f"></span></div>
        <div class="cell" data-cell="c-23-11"><span class="cell__label">c-23-11</span><span class="cell__value">69.97</span><span class="cell__tint" style="background:#56e724"></span></div>
        <div class="cell" data-cell="c-23-12"><span class="cell__label">c-23-12</span><span class="cell__value">11.21</span><span class="cell__tint" style="background:#a2150a"></span></div>
        <div class="cell" data-cell="c-23-13"><span class="cell__label">c-23-13</span><span class="cell__value">34.98</span><span class="cell__tint" style="background:#202b8f"></span></div>
        <div class="cell" data-cell="c-23-14"><span class="cell__label">c-23-14</span><span class="cell__value">43.89</span><span class="cell__tint" style="background:#32646c"></span></div>
        <div class="cell" data-cell="c-23-15"><span class="cell__label">c-23-15</span><span class="cell__value">54.86</span><span class="cell__tint" style="background:#8cc65e"></span></div>
        <div class="cell" data-cell="c-23-16"><span class="cell__label">c-23-16</span><span class="cell__value">16.18</span><span class="cell__tint" style="background:#f94f3b"></span></div>
        <div class="cell" data-cell="c-23-17"><span class="cell__label">c-23-17</span><span class="cell__value">85.49</span><span class="cell__tint" style="background:#d2cc61"></span></div>
        <div class="cell" data-cell="c-23-18"><span class="cell__label">c-23-18</span><span class="cell__value">6.37</span><span class="cell__tint" style="background:#75418e"></span></div>
        <div class="cell" data-cell="c-23-19"><span class="cell__label">c-23-19</span><span class="cell__value">17.22</span><span class="cell__tint" style="background:#1df00c"></span></div>
      </div>
      <div class="row" data-row="r-24">
        <div class="cell" data-cell="c-24-0"><span class="cell__label">c-24-0</span><span class="cell__value">55.70</span><span class="cell__tint" style="background:#a2ab8a"></span></div>
        <div class="cell" data-cell="c-24-1"><span class="cell__label">c-24-1</span><span class="cell__value">71.82</span><span class="cell__tint" style="background:#a43fbd"></span></div>
        <div class="cell" data-cell="c-24-2"><span class="cell__label">c-24-2</span><span class="cell__value">79.93</span><span class="cell__tint" style="background:#cba7af"></span></div>
        <div class="cell" data-cell="c-24-3"><span class="cell__label">c-24-3</span><span class="cell__value">95.23</span><span class="cell__tint" style="background:#75e409"></span></div>
        <div class="cell" data-cell="c-24-4"><span class="cell__label">c-24-4</span><span class="cell__value">5.06</span><span class="cell__tint" style="background:#1d5ede"></span></div>
        <div class="cell" data-cell="c-24-5"><span class="cell__label">c-24-5</span><span class="cell__value">10.70</span><span class="cell__tint" style="background:#a3e357"></span></div>
        <div class="cell" data-cell="c-24-6"><span class="cell__label">c-24-6</span><span class="cell__value">64.04</span><span class="cell__tint" style="background:#86feea"></span></div>
        <div class="cell" data-cell="c-24-7"><span class="cell__label">c-24-7</span><span class="cell__value">86.58</span><span class="cell__tint" style="background:#94e0cd"></span></div>
        <div class="cell" data-cell="c-24-8"><span class="cell__label">c-24-8</span><span class="cell__value">91.63</span><span class="cell__tint" style="background:#2c426b"></span></div>
        <div class="cell" data-cell="c-24-9"><span class="cell__label">c-24-9</span><span class="cell__value">80.78</span><span class="cell__tint" style="background:#24de5f"></span></div>
        <div class="cell" data-cell="c-24-10"><span class="cell__label">c-24-10</span><span class="cell__value">96.52</span><span class="cell__tint" style="background:#6bcc9e"></span></div>
        <div class="cell" data-cell="c-24-11"><span class="cell__label">c-24-11</span><span class="cell__value">13.17</span><span class="cell__tint" style="background:#397a14"></span></div>
        <div class="cell" data-cell="c-24-12"><span class="cell__label">c-24-12</span><span class="cell__value">16.44</span><span class="cell__tint" style="background:#6de2c5"></span></div>
        <div class="cell" data-cell="c-24-13"><span class="cell__label">c-24-13</span><span class="cell__value">82.98</span><span class="cell__tint" style="background:#03bc4d"></span></div>
        <div class="cell" data-cell="c-24-14"><span class="cell__label">c-24-14</span><span class="cell__value">28.74</span><span class="cell__tint" style="background:#80b6a5"></span></div>
        <div class="cell" data-cell="c-24-15"><span class="cell__label">c-24-15</span><span class="cell__value">28.38</span><span class="cell__tint" style="background:#3f2592"></span></div>
        <div class="cell" data-cell="c-24-16"><span class="cell__label">c-24-16</span><span class="cell__value">56.27</span><span class="cell__tint" style="background:#d10ccb"></span></div>
        <div class="cell" data-cell="c-24-17"><span class="cell__label">c-24-17</span><span class="cell__value">66.83</span><span class="cell__tint" style="background:#a98223"></span></div>
        <div class="cell" data-cell="c-24-18"><span class="cell__label">c-24-18</span><span class="cell__value">75.26</span><span class="cell__tint" style="background:#7547c2"></span></div>
        <div class="cell" data-cell="c-24-19"><span class="cell__label">c-24-19</span><span class="cell__value">84.55</span><span class="cell__tint" style="background:#c4abd2"></span></div>
      </div>
      <div class="row" data-row="r-25">
        <div class="cell" data-cell="c-25-0"><span class="cell__label">c-25-0</span><span class="cell__value">93.85</span><span class="cell__tint" style="background:#fd965b"></span></div>
        <div class="cell" data-cell="c-25-1"><span class="cell__label">c-25-1</span><span class="cell__value">15.77</span><span class="cell__tint" style="background:#4bd52a"></span></div>
        <div class="cell" data-cell="c-25-2"><span class="cell__label">c-25-2</span><span class="cell__value">77.68</span><span class="cell__tint" style="background:#674b26"></span></div>
        <div class="cell" data-cell="c-25-3"><span class="cell__label">c-25-3</span><span class="cell__value">48.97</span><span class="cell__tint" style="background:#1b8b09"></span></div>
        <div class="cell" data-cell="c-25-4"><span class="cell__label">c-25-4</span><span class="cell__value">20.44</span><span class="cell__tint" style="background:#042bcb"></span></div>
        <div class="cell" data-cell="c-25-5"><span class="cell__label">c-25-5</span><span class="cell__value">40.24</span><span class="cell__tint" style="background:#8932a6"></span></div>
        <div class="cell" data-cell="c-25-6"><span class="cell__label">c-25-6</span><span class="cell__value">64.58</span><span class="cell__tint" style="background:#f5bcab"></span></div>
        <div class="cell" data-cell="c-25-7"><span class="cell__label">c-25-7</span><span class="cell__value">31.56</span><span class="cell__tint" style="background:#8ea860"></span></div>
        <div class="cell" data-cell="c-25-8"><span class="cell__label">c-25-8</span><span class="cell__value">74.34</span><span class="cell__tint" style="background:#feb7d9"></span></div>
        <div class="cell" data-cell="c-25-9"><span class="cell__label">c-25-9</span><span class="cell__value">48.25</span><span class="cell__tint" style="background:#e9b93d"></span></div>
        <div class="cell" data-cell="c-25-10"><span class="cell__label">c-25-10</span><span class="cell__value">13.25</span><span class="cell__tint" style="background:#7fc852"></span></div>
        <div class="cell" data-cell="c-25-11"><span class="cell__label">c-25-11</span><span class="cell__value">72.33</span><span class="cell__tint" style="background:#bb6d6e"></span></div>
        <div class="cell" data-cell="c-25-12"><span class="cell__label">c-25-12</span><span class="cell__value">17.20</span><span class="cell__tint" style="background:#0e28bd"></span></div>
        <div class="cell" data-cell="c-25-13"><span class="cell__label">c-25-13</span><span class="cell__value">72.23</span><span class="cell__tint" style="background:#5305a8"></span></div>
        <div class="cell" data-cell="c-25-14"><span class="cell__label">c-25-14</span><span class="cell__value">64.83</span><span class="cell__tint" style="background:#119c6b"></span></div>
        <div class="cell" data-cell="c-25-15"><span class="cell__label">c-25-15</span><span class="cell__value">57.01</span><span class="cell__tint" style="background:#4c4cd1"></span></div>
        <div class="cell" data-cell="c-25-16"><span class="cell__label">c-25-16</span><span class="cell__value">64.40</span><span class="cell__tint" style="background:#f161f9"></span></div>
        <div class="cell" data-cell="c-25-17"><span class="cell__label">c-25-17</span><span class="cell__value">26.27</span><span class="cell__tint" style="background:#722492"></span></div>
        <div class="cell" data-cell="c-25-18"><span class="cell__label">c-25-18</span><span class="cell__value">30.06</span><span class="cell__tint" style="background:#4ed732"></span></div>
        <div class="cell" data-cell="c-25-19"><span class="cell__label">c-25-19</span><span class="cell__value">67.91</span><span class="cell__tint" style="background:#8d0a76"></span></div>
      </div>
      <div class="row" data-row="r-26">
        <div class="cell" data-cell="c-26-0"><span class="cell__label">c-26-0</span><span class="cell__value">72.96</span><span class="cell__tint" style="background:#2851ab"></span></div>
        <div class="cell" data-cell="c-26-1"><span class="cell__label">c-26-1</span><span class="cell__value">51.72</span><span class="cell__tint" style="background:#4561e8"></span></div>
        <div class="cell" data-cell="c-26-2"><span class="cell__label">c-26-2</span><span class="cell__value">44.55</span><span class="cell__tint" style="background:#5c5cdc"></span></div>
        <div class="cell" data-cell="c-26-3"><span class="cell__label">c-26-3</span><span class="cell__value">58.60</span><span class="cell__tint" style="background:#0b5735"></span></div>
        <div class="cell" data-cell="c-26-4"><span class="cell__label">c-26-4</span><span class="cell__value">87.88</span><span class="cell__tint" style="background:#1be31b"></span></div>
        <div class="cell" data-cell="c-26-5"><span class="cell__label">c-26-5</span><span class="cell__value">84.41</span><span class="cell__tint" style="background:#34bec2"></span></div>
        <div class="cell" data-cell="c-26-6"><span class="cell__label">c-26-6</span><span class="cell__value">98.30</span><span class="cell__tint" style="background:#97d076"></span></div>
        <div class="cell" data-cell="c-26-7"><span class="cell__label">c-26-7</span><span class="cell__value">61.88</span><span class="cell__tint" style="background:#4f69a7"></span></div>
        <div class="cell" data-cell="c-26-8"><span class="cell__label">c-26-8</span><span class="cell__value">22.64</span><span class="cell__tint" style="background:#fca894"></span></div>
        <div class="cell" data-cell="c-26-9"><span class="cell__label">c-26-9</span><span class="cell__value">34.46</span><span class="cell__tint" style="background:#1bafa2"></span></div>
        <div class="cell" data-cell="c-26-10"><span class="cell__label">c-26-10</span><span class="cell__value">30.43</span><span class="cell__tint" style="background:#3d308c"></span></div>
        <div class="cell" data-cell="c-26-11"><span class="cell__label">c-26-11</span><span class="cell__value">24.57</span><span class="cell__tint" style="background:#5dd1f2"></span></div>
        <div class="cell" data-cell="c-26-12"><span class="cell__label">c-26-12</span><span class="cell__value">66.14</span><span class="cell__tint" style="background:#83b5d7"></span></div>
        <div class="cell" data-cell="c-26-13"><span class="cell__label">c-26-13</span><span class="cell__value">90.48</span><span class="cell__tint" style="background:#ee6616"></span></div>
        <div class="cell" data-cell="c-26-14"><span class="cell__label">c-26-14</span><span class="cell__value">69.85</span><span class="cell__tint" style="background:#86cd6d"></span></div>
        <div class="cell" data-cell="c-26-15"><span class="cell__label">c-26-15</span><span class="cell__value">53.28</span><span class="cell__tint" style="background:#90cb6f"></span></div>
        <div class="cell" data-cell="c-26-16"><span class="cell__label">c-26-16</span><span class="cell__value">55.73</span><span class="cell__tint" style="background:#52d831"></span></div>
        <div class="cell" data-cell="c-26-17"><span class="cell__label">c-26-17</span><span class="cell__value">21.88</span><span class="cell__tint" style="background:#03a8e4"></span></div>
        <div class="cell" data-cell="c-26-18"><span class="cell__label">c-26-18</span><span class="cell__value">96.01</span><span class="cell__tint" style="background:#56dff2"></span></div>
        <div class="cell" data-cell="c-26-19"><span class="cell__label">c-26-19</span><span class="cell__value">49.10</span><span class="cell__tint" style="background:#eaa729"></span></div>
      </div>
      <div class="row" data-row="r-27">
        <div class="cell" data-cell="c-27-0"><span class="cell__label">c-27-0</span><span class="cell__value">78.79</span><span class="cell__tint" style="background:#fb3901"></span></div>
        <div class="cell" data-cell="c-27-1"><span class="cell__label">c-27-1</span><span class="cell__value">6.28</span><span class="cell__tint" style="background:#d73c4a"></span></div>
        <div class="cell" data-cell="c-27-2"><span class="cell__label">c-27-2</span><span class="cell__value">62.95</span><span class="cell__tint" style="background:#7a1dc8"></span></div>
        <div class="cell" data-cell="c-27-3"><span class="cell__label">c-27-3</span><span class="cell__value">19.65</span><span class="cell__tint" style="background:#75eeec"></span></div>
        <div class="cell" data-cell="c-27-4"><span class="cell__label">c-27-4</span><span class="cell__value">30.38</span><span class="cell__tint" style="background:#d9ad29"></span></div>
        <div class="cell" data-cell="c-27-5"><span class="cell__label">c-27-5</span><span class="cell__value">12.21</span><span class="cell__tint" style="background:#0a03e4"></span></div>
        <div class="cell" data-cell="c-27-6"><span class="cell__label">c-27-6</span><span class="cell__value">2.76</span><span class="cell__tint" style="background:#66f0af"></span></div>
        <div class="cell" data-cell="c-27-7"><span class="cell__label">c-27-7</span><span class="cell__value">40.51</span><span class="cell__tint" style="background:#94ae06"></span></div>
        <div class="cell" data-cell="c-27-8"><span class="cell__label">c-27-8</span><span class="cell__value">32.33</span><span class="cell__tint" style="background:#f5cfea"></span></div>
        <div class="cell" data-cell="c-27-9"><span class="cell__label">c-27-9</span><span class="cell__value">28.26</span><span class="cell__tint" style="background:#f063d6"></span></div>
        <div class="cell" data-cell="c-27-10"><span class="cell__label">c-27-10</span><span class="cell__value">83.93</span><span class="cell__tint" style="background:#585dd8"></span></div>
        <div class="cell" data-cell="c-27-11"><span class="cell__label">c-27-11</span><span class="cell__value">14.11</span><span class="cell__tint" style="background:#1f5638"></span></div>
        <div class="cell" data-cell="c-27-12"><span class="cell__label">c-27-12</span><span class="cell__value">19.08</span><span class="cell__tint" style="background:#55d2fd"></span></div>
        <div class="cell" data-cell="c-27-13"><span class="cell__label">c-27-13</span><span class="cell__value">72.56</span><span class="cell__tint" style="background:#614838"></span></div>
        <div class="cell" data-cell="c-27-14"><span class="cell__label">c-27-14</span><span class="cell__value">20.85</span><span class="cell__tint" style="background:#074e79"></span></div>
        <div class="cell" data-cell="c-27-15"><span class="cell__label">c-27-15</span><span class="cell__value">2.30</span><span class="cell__tint" style="background:#1441e0"></span></div>
        <div class="cell" data-cell="c-27-16"><span class="cell__label">c-27-16</span><span class="cell__value">29.11</span><span class="cell__tint" style="background:#ccd161"></span></div>
        <div class="cell" data-cell="c-27-17"><span class="cell__label">c-27-17</span><span class="cell__value">88.01</span><span class="cell__tint" style="background:#22e8c2"></span></div>
        <div class="cell" data-cell="c-27-18"><span class="cell__label">c-27-18</span><span class="cell__value">88.44</span><span class="cell__tint" style="background:#abc86f"></span></div>
        <div class="cell" data-cell="c-27-19"><span class="cell__label">c-27-19</span><span class="cell__value">11.43</span><span class="cell__tint" style="background:#10d937"></span></div>
      </div>
      <div class="row" data-row="r-28">
        <div class="cell" data-cell="c-28-0"><span class="cell__label">c-28-0</span><span class="cell__value">15.14</span><span class="cell__tint" style="background:#731101"></span></div>
        <div class="cell" data-cell="c-28-1"><span class="cell__label">c-28-1</span><span class="cell__value">86.64</span><span class="cell__tint" style="background:#b6cc3c"></span></div>
        <div class="cell" data-cell="c-28-2"><span class="cell__label">c-28-2</span><span class="cell__value">35.80</span><span class="cell__tint" style="background:#c4da38"></span></div>
        <div class="cell" data-cell="c-28-3"><span class="cell__label">c-28-3</span><span class="cell__value">1.70</span><span class="cell__tint" style="background:#0c2d03"></span></div>
        <div class="cell" data-cell="c-28-4"><span class="cell__label">c-28-4</span><span class="cell__value">21.75</span><span class="cell__tint" style="background:#73d612"></span></div>
        <div class="cell" data-cell="c-28-5"><span class="cell__label">c-28-5</span><span class="cell__value">96.91</span><span class="cell__tint" style="background:#87d45a"></span></div>
        <div class="cell" data-cell="c-28-6"><span class="cell__label">c-28-6</span><span class="cell__value">25.36</span><span class="cell__tint" style="background:#f0c2ca"></span></div>
        <div class="cell" data-cell="c-28-7"><span class="cell__label">c-28-7</span><span class="cell__value">2.35</span><span class="cell__tint" style="background:#187cbf"></span></div>
        <div class="cell" data-cell="c-28-8"><span class="cell__label">c-28-8</span><span class="cell__value">46.62</span><span class="cell__tint" style="background:#11fdc6"></span></div>
        <div class="cell" data-cell="c-28-9"><span class="cell__label">c-28-9</span><span class="cell__value">85.70</span><span class="cell__tint" style="background:#f3fdc9"></span></div>
        <div class="cell" data-cell="c-28-10"><span class="cell__label">c-28-10</span><span class="cell__value">54.39</span><span class="cell__tint" style="background:#5dcb91"></span></div>
        <div class="cell" data-cell="c-28-11"><span class="cell__label">c-28-11</span><span class="cell__value">36.50</span><span class="cell__tint" style="background:#4e7bd2"></span></div>
        <div class="cell" data-cell="c-28-12"><span class="cell__label">c-28-12</span><span class="cell__value">74.35</span><span class="cell__tint" style="background:#7d5dd3"></span></div>
        <div class="cell" data-cell="c-28-13"><span class="cell__label">c-28-13</span><span class="cell__value">0.98</span><span class="cell__tint" style="background:#7d3271"></span></div>
        <div class="cell" data-cell="c-28-14"><span class="cell__label">c-28-14</span><span class="cell__value">19.68</span><span class="cell__tint" style="background:#9a67b7"></span></div>
        <div class="cell" data-cell="c-28-15"><span class="cell__label">c-28-15</span><span class="cell__value">63.08</span><span class="cell__tint" style="background:#bc4bff"></span></div>
        <div class="cell" data-cell="c-28-16"><span class="cell__label">c-28-16</span><span class="cell__value">75.86</span><span class="cell__tint" style="background:#37f799"></span></div>
        <div class="cell" data-cell="c-28-17"><span class="cell__label">c-28-17</span><span class="cell__value">64.44</span><span class="cell__tint" style="background:#799559"></span></div>
        <div class="cell" data-cell="c-28-18"><span class="cell__label">c-28-18</span><span class="cell__value">71.46</span><span class="cell__tint" style="background:#1772db"></span></div>
        <div class="cell" data-cell="c-28-19"><span class="cell__label">c-28-19</span><span class="cell__value">81.61</span><span class="cell__tint" style="background:#e4cc99"></span></div>
      </div>
      <div class="row" data-row="r-29">
        <div class="cell" data-cell="c-29-0"><span class="cell__label">c-29-0</span><span class="cell__value">44.20</span><span class="cell__tint" style="background:#515045"></span></div>
        <div class="cell" data-cell="c-29-1"><span class="cell__label">c-29-1</span><span class="cell__value">4.53</span><span class="cell__tint" style="background:#707364"></span></div>
        <div class="cell" data-cell="c-29-2"><span class="cell__label">c-29-2</span><span class="cell__value">98.96</span><span class="cell__tint" style="background:#7ee8a9"></span></div>
        <div class="cell" data-cell="c-29-3"><span class="cell__label">c-29-3</span><span class="cell__value">26.12</span><span class="cell__tint" style="background:#63d4cc"></span></div>
        <div class="cell" data-cell="c-29-4"><span class="cell__label">c-29-4</span><span class="cell__value">20.76</span><span class="cell__tint" style="background:#9d451d"></span></div>
        <div class="cell" data-cell="c-29-5"><span class="cell__label">c-29-5</span><span class="cell__value">5.62</span><span class="cell__tint" style="background:#9c871e"></span></div>
        <div class="cell" data-cell="c-29-6"><span class="cell__label">c-29-6</span><span class="cell__value">5.71</span><span class="cell__tint" style="background:#5f75f4"></span></div>
        <div class="cell" data-cell="c-29-7"><span class="cell__label">c-29-7</span><span class="cell__value">31.78</span><span class="cell__tint" style="background:#2147e2"></span></div>
        <div class="cell" data-cell="c-29-8"><span class="cell__label">c-29-8</span><span class="cell__value">60.77</span><span class="cell__tint" style="background:#4aa69f"></span></div>
        <div class="cell" data-cell="c-29-9"><span class="cell__label">c-29-9</span><span class="cell__value">16.78</span><span class="cell__tint" style="background:#375071"></span></div>
        <div class="cell" data-cell="c-29-10"><span class="cell__label">c-29-10</span><span class="cell__value">65.71</span><span class="cell__tint" style="background:#0058f4"></span></div>
        <div class="cell" data-cell="c-29-11"><span class="cell__label">c-29-11</span><span class="cell__value">31.17</span><span class="cell__tint" style="background:#25cd34"></span></div>
        <div class="cell" data-cell="c-29-12"><span class="cell__label">c-29-12</span><span class="cell__value">57.57</span><span class="cell__tint" style="background:#42bfff"></span></div>
        <div class="cell" data-cell="c-29-13"><span class="cell__label">c-29-13</span><span class="cell__value">56.84</span><span class="cell__tint" style="background:#e06692"></span></div>
        <div class="cell" data-cell="c-29-14"><span class="cell__label">c-29-14</span><span class="cell__value">97.92</span><span class="cell__tint" style="background:#563d15"></span></div>
        <div class="cell" data-cell="c-29-15"><span class="cell__label">c-29-15</span><span class="cell__value">58.07</span><span class="cell__tint" style="background:#984c0c"></span></div>
        <div class="cell" data-cell="c-29-16"><span class="cell__label">c-29-16</span><span class="cell__value">55.91</span><span class="cell__tint" style="background:#65c4e1"></span></div>
        <div class="cell" data-cell="c-29-17"><span class="cell__label">c-29-17</span><span class="cell__value">71.69</span><span class="cell__tint" style="background:#f8bad9"></span></div>
        <div class="cell" data-cell="c-29-18"><span class="cell__label">c-29-18</span><span class="cell__value">85.15</span><span class="cell__tint" style="background:#f86233"></span></div>
        <div class="cell" data-cell="c-29-19"><span class="cell__label">c-29-19</span><span class="cell__value">60.93</span><span class="cell__tint" style="background:#834ae6"></span></div>
      </div>
      <div class="row" data-row="r-30">
        <div class="cell" data-cell="c-30-0"><span class="cell__label">c-30-0</span><span class="cell__value">88.85</span><span class="cell__tint" style="background:#957d39"></span></div>
        <div class="cell" data-cell="c-30-1"><span class="cell__label">c-30-1</span><span class="cell__value">67.18</span><span class="cell__tint" style="background:#7e4572"></span></div>
        <div class="cell" data-cell="c-30-2"><span class="cell__label">c-30-2</span><span class="cell__value">24.48</span><span class="cell__tint" style="background:#f6aed8"></span></div>
        <div class="cell" data-cell="c-30-3"><span class="cell__label">c-30-3</span><span class="cell__value">92.86</span><span class="cell__tint" style="background:#446d84"></span></div>
        <div class="cell" data-cell="c-30-4"><span class="cell__label">c-30-4</span><span class="cell__value">19.72</span><span class="cell__tint" style="background:#b24378"></span></div>
        <div class="cell" data-cell="c-30-5"><span class="cell__label">c-30-5</span><span class="cell__value">69.05</span><span class="cell__tint" style="background:#fa2de0"></span></div>
        <div class="cell" data-cell="c-30-6"><span class="cell__label">c-30-6</span><span class="cell__value">43.00</span><span class="cell__tint" style="background:#bfbe1e"></span></div>
        <div class="cell" data-cell="c-30-7"><span class="cell__label">c-30-7</span><span class="cell__value">77.11</span><span class="cell__tint" style="background:#bb374d"></span></div>
        <div class="cell" data-cell="c-30-8"><span class="cell__label">c-30-8</span><span class="cell__value">0.20</span><span class="cell__tint" style="background:#4f9237"></span></div>
        <div class="cell" data-cell="c-30-9"><span class="cell__label">c-30-9</span><span class="cell__value">26.49</span><span class="cell__tint" style="background:#51572d"></span></div>
        <div class="cell" data-cell="c-30-10"><span class="cell__label">c-30-10</span><span class="cell__value">77.01</span><span class="cell__tint" style="background:#251407"></span></div>
        <div class="cell" data-cell="c-30-11"><span class="cell__label">c-30-11</span><span class="cell__value">39.00</span><span class="cell__tint" style="background:#2ecf3a"></span></div>
        <div class="cell" data-cell="c-30-12"><span class="cell__label">c-30-12</span><span class="cell__value">70.79</span><span class="cell__tint" style="background:#3ade6c"></span></div>
        <div class="cell" data-cell="c-30-13"><span class="cell__label">c-30-13</span><span class="cell__value">66.95</span><span class="cell__tint" style="background:#8905b7"></span></div>
        <div class="cell" data-cell="c-30-14"><span class="cell__label">c-30-14</span><span class="cell__value">31.35</span><span class="cell__tint" style="background:#3a7082"></span></div>
        <div class="cell" data-cell="c-30-15"><span class="cell__label">c-30-15</span><span class="cell__value">41.75</span><span class="cell__tint" style="background:#823699"></span></div>
        <div class="cell" data-cell="c-30-16"><span class="cell__label">c-30-16</span><span class="cell__value">84.48</span><span class="cell__tint" style="background:#94947b"></span></div>
        <div class="cell" data-cell="c-30-17"><span class="cell__label">c-30-17</span><span class="cell__value">44.51</span><span class="cell__tint" style="background:#bdc3b7"></span></div>
        <div class="cell" data-cell="c-30-18"><span class="cell__label">c-30-18</span><span class="cell__value">72.68</span><span class="cell__tint" style="background:#394e93"></span></div>
        <div class="cell" data-cell="c-30-19"><span class="cell__label">c-30-19</span><span class="cell__value">75.25</span><span class="cell__tint" style="background:#2fb57b"></span></div>
      </div>
      <div class="row" data-row="r-31">
        <div class="cell" data-cell="c-31-0"><span class="cell__label">c-31-0</span><span class="cell__value">58.33</span><span class="cell__tint" style="background:#c00f2a"></span></div>
        <div class="cell" data-cell="c-31-1"><span class="cell__label">c-31-1</span><span class="cell__value">9.05</span><span class="cell__tint" style="background:#4bbca1"></span></div>
        <div class="cell" data-cell="c-31-2"><span class="cell__label">c-31-2</span><span class="cell__value">86.87</span><span class="cell__tint" style="background:#88ee2b"></span></div>
        <div class="cell" data-cell="c-31-3"><span class="cell__label">c-31-3</span><span class="cell__value">83.99</span><span class="cell__tint" style="background:#533ec2"></span></div>
        <div class="cell" data-cell="c-31-4"><span class="cell__label">c-31-4</span><span class="cell__value">72.65</span><span class="cell__tint" style="background:#14ce9a"></span></div>
        <div class="cell" data-cell="c-31-5"><span class="cell__label">c-31-5</span><span class="cell__value">26.21</span><span class="cell__tint" style="background:#6ebf01"></span></div>
        <div class="cell" data-cell="c-31-6"><span class="cell__label">c-31-6</span><span class="cell__value">0.21</span><span class="cell__tint" style="background:#8d1819"></span></div>
        <div class="cell" data-cell="c-31-7"><span class="cell__label">c-31-7</span><span class="cell__value">76.66</span><span class="cell__tint" style="background:#52cf54"></span></div>
        <div class="cell" data-cell="c-31-8"><span class="cell__label">c-31-8</span><span class="cell__value">89.90</span><span class="cell__tint" style="background:#319f50"></span></div>
        <div class="cell" data-cell="c-31-9"><span class="cell__label">c-31-9</span><span class="cell__value">78.99</span><span class="cell__tint" style="background:#894216"></span></div>
        <div class="cell" data-cell="c-31-10"><span class="cell__label">c-31-10</span><span class="cell__value">89.09</span><span class="cell__tint" style="background:#beaa59"></span></div>
        <div class="cell" data-cell="c-31-11"><span class="cell__label">c-31-11</span><span class="cell__value">94.66</span><span class="cell__tint" style="background:#27aed7"></span></div>
        <div class="cell" data-cell="c-31-12"><span class="cell__label">c-31-12</span><span class="cell__value">14.08</span><span class="cell__tint" style="background:#24ef0f"></span></div>
        <div class="cell" data-cell="c-31-13"><span class="cell__label">c-31-13</span><span class="cell__value">27.85</span><span class="cell__tint" style="background:#4af27b"></span></div>
        <div class="cell" data-cell="c-31-14"><span class="cell__label">c-31-14</span><span class="cell__value">63.77</span><span class="cell__tint" style="background:#22e76b"></span></div>
        <div class="cell" data-cell="c-31-15"><span class="cell__label">c-31-15</span><span class="cell__value">57.82</span><span class="cell__tint" style="background:#cb4bab"></span></div>
        <div class="cell" data-cell="c-31-16"><span class="cell__label">c-31-16</span><span class="cell__value">24.97</span><span class="cell__tint" style="background:#228282"></span></div>
        <div class="cell" data-cell="c-31-17"><span class="cell__label">c-31-17</span><span class="cell__value">47.13</span><span class="cell__tint" style="background:#d40569"></span></div>
        <div class="cell" data-cell="c-31-18"><span class="cell__label">c-31-18</span><span class="cell__value">84.69</span><span class="cell__tint" style="background:#815b99"></span></div>
        <div class="cell" data-cell="c-31-19"><span class="cell__label">c-31-19</span><span class="cell__value">97.88</span><span class="cell__tint" style="background:#c4625c"></span></div>
      </div>
      <div class="row" data-row="r-32">
        <div class="cell" data-cell="c-32-0"><span class="cell__label">c-32-0</span><span class="cell__value">24.63</span><span class="cell__tint" style="background:#19e376"></span></div>
        <div class="cell" data-cell="c-32-1"><span class="cell__label">c-32-1</span><span class="cell__value">54.88</span><span class="cell__tint" style="background:#d632e4"></span></div>
        <div class="cell" data-cell="c-32-2"><span class="cell__label">c-32-2</span><span class="cell__value">14.54</span><span class="cell__tint" style="background:#b56f43"></span></div>
        <div class="cell" data-cell="c-32-3"><span class="cell__label">c-32-3</span><span class="cell__value">61.78</span><span class="cell__tint" style="background:#ac22aa"></span></div>
        <div class="cell" data-cell="c-32-4"><span class="cell__label">c-32-4</span><span class="cell__value">92.57</span><span class="cell__tint" style="background:#6e1a47"></span></div>
        <div class="cell" data-cell="c-32-5"><span class="cell__label">c-32-5</span><span class="cell__value">88.73</span><span class="cell__tint" style="background:#2f63cf"></span></div>
        <div class="cell" data-cell="c-32-6"><span class="cell__label">c-32-6</span><span class="cell__value">53.80</span><span class="cell__tint" style="background:#9a3af7"></span></div>
        <div class="cell" data-cell="c-32-7"><span class="cell__label">c-32-7</span><span class="cell__value">44.13</span><span class="cell__tint" style="background:#eb0026"></span></div>
        <div class="cell" data-cell="c-32-8"><span class="cell__label">c-32-8</span><span class="cell__value">96.34</span><span class="cell__tint" style="background:#331d92"></span></div>
        <div class="cell" data-cell="c-32-9"><span class="cell__label">c-32-9</span><span class="cell__value">20.03</span><span class="cell__tint" style="background:#24425c"></span></div>
        <div class="cell" data-cell="c-32-10"><span class="cell__label">c-32-10</span><span class="cell__value">38.79</span><span class="cell__tint" style="background:#d0d5fd"></span></div>
        <div class="cell" data-cell="c-32-11"><span class="cell__label">c-32-11</span><span class="cell__value">26.82</span><span class="cell__tint" style="background:#938277"></span></div>
        <div class="cell" data-cell="c-32-12"><span class="cell__label">c-32-12</span><span class="cell__value">40.25</span><span class="cell__tint" style="background:#bb1f7d"></span></div>
        <div class="cell" data-cell="c-32-13"><span class="cell__label">c-32-13</span><span class="cell__value">82.46</span><span class="cell__tint" style="background:#ce6dae"></span></div>
        <div class="cell" data-cell="c-32-14"><span class="cell__label">c-32-14</span><span class="cell__value">91.80</span><span class="cell__tint" style="background:#101e4f"></span></div>
        <div class="cell" data-cell="c-32-15"><span class="cell__label">c-32-15</span><span class="cell__value">3.73</span><span class="cell__tint" style="background:#44c348"></span></div>
        <div class="cell" data-cell="c-32-16"><span class="cell__label">c-32-16</span><span class="cell__value">8.72</span><span class="cell__tint" style="background:#05c0a1"></span></div>
        <div class="cell" data-cell="c-32-17"><span class="cell__label">c-32-17</span><span class="cell__value">49.69</span><span class="cell__tint" style="background:#8c0daf"></span></div>
        <div class="cell" data-cell="c-32-18"><span class="cell__label">c-32-18</span><span class="cell__value">64.73</span><span class="cell__tint" style="background:#d95ed3"></span></div>
        <div class="cell" data-cell="c-32-19"><span class="cell__label">c-32-19</span><span class="cell__value">28.20</span><span class="cell__tint" style="background:#ec978f"></span></div>
      </div>
      <div class="row" data-row="r-33">
        <div class="cell" data-cell="c-33-0"><span class="cell__label">c-33-0</span><span class="cell__value">42.11</span><span class="cell__tint" style="background:#0144f4"></span></div>
        <div class="cell" data-cell="c-33-1"><span class="cell__label">c-33-1</span><span class="cell__value">34.82</span><span class="cell__tint" style="background:#3de253"></span></div>
        <div class="cell" data-cell="c-33-2"><span class="cell__label">c-33-2</span><span class="cell__value">30.61</span><span class="cell__tint" style="background:#0d9333"></span></div>
        <div class="cell" data-cell="c-33-3"><span class="cell__label">c-33-3</span><span class="cell__value">39.71</span><span class="cell__tint" style="background:#773a09"></span></div>
        <div class="cell" data-cell="c-33-4"><span class="cell__label">c-33-4</span><span class="cell__value">26.07</span><span class="cell__tint" style="background:#44009d"></span></div>
        <div class="cell" data-cell="c-33-5"><span class="cell__label">c-33-5</span><span class="cell__value">83.91</span><span class="cell__tint" style="background:#a95d85"></span></div>
        <div class="cell" data-cell="c-33-6"><span class="cell__label">c-33-6</span><span class="cell__value">40.22</span><span class="cell__tint" style="background:#9b0797"></span></div>
        <div class="cell" data-cell="c-33-7"><span class="cell__label">c-33-7</span><span class="cell__value">24.70</span><span class="cell__tint" style="background:#d4839a"></span></div>
        <div class="cell" data-cell="c-33-8"><span class="cell__label">c-33-8</span><span class="cell__value">44.29</span><span class="cell__tint" style="background:#bcf299"></span></div>
        <div class="cell" data-cell="c-33-9"><span class="cell__label">c-33-9</span><span class="cell__value">41.80</span><span class="cell__tint" style="background:#313e6b"></span></div>
        <div class="cell" data-cell="c-33-10"><span class="cell__label">c-33-10</span><span class="cell__value">19.67</span><span class="cell__tint" style="background:#4d592b"></span></div>
        <div class="cell" data-cell="c-33-11"><span class="cell__label">c-33-11</span><span class="cell__value">24.43</span><span class="cell__tint" style="background:#d956fd"></span></div>
        <div class="cell" data-cell="c-33-12"><span class="cell__label">c-33-12</span><span class="cell__value">93.66</span><span class="cell__tint" style="background:#06cacf"></span></div>
        <div class="cell" data-cell="c-33-13"><span class="cell__label">c-33-13</span><span class="cell__value">44.22</span><span class="cell__tint" style="background:#e7f255"></span></div>
        <div class="cell" data-cell="c-33-14"><span class="cell__label">c-33-14</span><span class="cell__value">67.65</span><span class="cell__tint" style="background:#b7ba65"></span></div>
        <div class="cell" data-cell="c-33-15"><span class="cell__label">c-33-15</span><span class="cell__value">69.52</span><span class="cell__tint" style="background:#ce3e8a"></span></div>
        <div class="cell" data-cell="c-33-16"><span class="cell__label">c-33-16</span><span class="cell__value">24.71</span><span class="cell__tint" style="background:#ab3e8b"></span></div>
        <div class="cell" data-cell="c-33-17"><span class="cell__label">c-33-17</span><span class="cell__value">62.52</span><span class="cell__tint" style="background:#bfffc1"></span></div>
        <div class="cell" data-cell="c-33-18"><span class="cell__label">c-33-18</span><span class="cell__value">74.58</span><span class="cell__tint" style="background:#3db238"></span></div>
        <div class="cell" data-cell="c-33-19"><span class="cell__label">c-33-19</span><span class="cell__value">64.49</span><span class="cell__tint" style="background:#e4ff0e"></span></div>
      </div>
      <div class="row" data-row="r-34">
        <div class="cell" data-cell="c-34-0"><span class="cell__label">c-34-0</span><span class="cell__value">66.60</span><span class="cell__tint" style="background:#55d776"></span></div>
        <div class="cell" data-cell="c-34-1"><span class="cell__label">c-34-1</span><span class="cell__value">71.86</span><span class="cell__tint" style="background:#851e3d"></span></div>
        <div class="cell" data-cell="c-34-2"><span class="cell__label">c-34-2</span><span class="cell__value">53.59</span><span class="cell__tint" style="background:#946cf3"></span></div>
        <div class="cell" data-cell="c-34-3"><span class="cell__label">c-34-3</span><span class="cell__value">75.29</span><span class="cell__tint" style="background:#b37a02"></span></div>
        <div class="cell" data-cell="c-34-4"><span class="cell__label">c-34-4</span><span class="cell__value">22.02</span><span class="cell__tint" style="background:#31de09"></span></div>
        <div class="cell" data-cell="c-34-5"><span class="cell__label">c-34-5</span><span class="cell__value">29.78</span><span class="cell__tint" style="background:#4930fa"></span></div>
        <div class="cell" data-cell="c-34-6"><span class="cell__label">c-34-6</span><span class="cell__value">31.15</span><span class="cell__tint" style="background:#cfc7ff"></span></div>
        <div class="cell" data-cell="c-34-7"><span class="cell__label">c-34-7</span><span class="cell__value">30.21</span><span class="cell__tint" style="background:#b77c77"></span></div>
        <div class="cell" data-cell="c-34-8"><span class="cell__label">c-34-8</span><span class="cell__value">0.60</span><span class="cell__tint" style="background:#2c9511"></span></div>
        <div class="cell" data-cell="c-34-9"><span class="cell__label">c-34-9</span><span class="cell__value">50.30</span><span class="cell__tint" style="background:#687ab4"></span></div>
        <div class="cell" data-cell="c-34-10"><span class="cell__label">c-34-10</span><span class="cell__value">26.70</span><span class="cell__tint" style="background:#a30746"></span></div>
        <div class="cell" data-cell="c-34-11"><span class="cell__label">c-34-11</span><span class="cell__value">28.15</span><span class="cell__tint" style="background:#378781"></span></div>
        <div class="cell" data-cell="c-34-12"><span class="cell__label">c-34-12</span><span class="cell__value">16.42</span><span class="cell__tint" style="background:#900d30"></span></div>
        <div class="cell" data-cell="c-34-13"><span class="cell__label">c-34-13</span><span class="cell__value">3.55</span><span class="cell__tint" style="background:#0da323"></span></div>
        <div class="cell" data-cell="c-34-14"><span class="cell__label">c-34-14</span><span class="cell__value">74.62</span><span class="cell__tint" style="background:#f0371b"></span></div>
        <div class="cell" data-cell="c-34-15"><span class="cell__label">c-34-15</span><span class="cell__value">19.50</span><span class="cell__tint" style="background:#28429d"></span></div>
        <div class="cell" data-cell="c-34-16"><span class="cell__label">c-34-16</span><span class="cell__value">0.02</span><span class="cell__tint" style="background:#169466"></span></div>
        <div class="cell" data-cell="c-34-17"><span class="cell__label">c-34-17</span><span class="cell__value">82.52</span><span class="cell__tint" style="background:#e9f770"></span></div>
        <div class="cell" data-cell="c-34-18"><span class="cell__label">c-34-18</span><span class="cell__value">86.17</span><span class="cell__tint" style="background:#29e2a9"></span></div>
        <div class="cell" data-cell="c-34-19"><span class="cell__label">c-34-19</span><span class="cell__value">12.74</span><span class="cell__tint" style="background:#c1c93d"></span></div>
      </div>
      <div class="row" data-row="r-35">
        <div class="cell" data-cell="c-35-0"><span class="cell__label">c-35-0</span><span class="cell__value">81.74</span><span class="cell__tint" style="background:#ef9b4a"></span></div>
        <div class="cell" data-cell="c-35-1"><span class="cell__label">c-35-1</span><span class="cell__value">41.41</span><span class="cell__tint" style="background:#c42733"></span></div>
        <div class="cell" data-cell="c-35-2"><span class="cell__label">c-35-2</span><span class="cell__value">78.50</span><span class="cell__tint" style="background:#b2a9ed"></span></div>
        <div class="cell" data-cell="c-35-3"><span class="cell__label">c-35-3</span><span class="cell__value">2.89</span><span class="cell__tint" style="background:#ea501a"></span></div>
        <div class="cell" data-cell="c-35-4"><span class="cell__label">c-35-4</span><span class="cell__value">49.29</span><span class="cell__tint" style="background:#970633"></span></div>
        <div class="cell" data-cell="c-35-5"><span class="cell__label">c-35-5</span><span class="cell__value">15.98</span><span class="cell__tint" style="background:#d975df"></span></div>
        <div class="cell" data-cell="c-35-6"><span class="cell__label">c-35-6</span><span class="cell__value">83.32</span><span class="cell__tint" style="background:#f2b6c5"></span></div>
        <div class="cell" data-cell="c-35-7"><span class="cell__label">c-35-7</span><span class="cell__value">21.71</span><span class="cell__tint" style="background:#c1f11b"></span></div>
        <div class="cell" data-cell="c-35-8"><span class="cell__label">c-35-8</span><span class="cell__value">65.34</span><span class="cell__tint" style="background:#64e6b9"></span></div>
        <div class="cell" data-cell="c-35-9"><span class="cell__label">c-35-9</span><span class="cell__value">98.20</span><span class="cell__tint" style="background:#1e31ac"></span></div>
        <div class="cell" data-cell="c-35-10"><span class="cell__label">c-35-10</span><span class="cell__value">66.08</span><span class="cell__tint" style="background:#c12565"></span></div>
        <div class="cell" data-cell="c-35-11"><span class="cell__label">c-35-11</span><span class="cell__value">73.72</span><span class="cell__tint" style="background:#cc321a"></span></div>
        <div class="cell" data-cell="c-35-12"><span class="cell__label">c-35-12</span><span class="cell__value">44.36</span><span class="cell__tint" style="background:#f77084"></span></div>
        <div class="cell" data-cell="c-35-13"><span class="cell__label">c-35-13</span><span class="cell__value">61.70</span><span class="cell__tint" style="background:#27e5e2"></span></div>
        <div class="cell" data-cell="c-35-14"><span class="cell__label">c-35-14</span><span class="cell__value">14.02</span><span class="cell__tint" style="background:#5fe70d"></span></div>
        <div class="cell" data-cell="c-35-15"><span class="cell__label">c-35-15</span><span class="cell__value">83.14</span><span class="cell__tint" style="background:#77de67"></span></div>
        <div class="cell" data-cell="c-35-16"><span class="cell__label">c-35-16</span><span class="cell__value">32.77</span><span class="cell__tint" style="background:#b6c6d8"></span></div>
        <div class="cell" data-cell="c-35-17"><span class="cell__label">c-35-17</span><span class="cell__value">57.14</span><span class="cell__tint" style="background:#3c44ee"></span></div>
        <div class="cell" data-cell="c-35-18"><span class="cell__label">c-35-18</span><span class="cell__value">25.14</span><span class="cell__tint" style="background:#fe9c99"></span></div>
        <div class="cell" data-cell="c-35-19"><span class="cell__label">c-35-19</span><span class="cell__value">76.52</span><span class="cell__tint" style="background:#b83017"></span></div>
      </div>
      <div class="row" data-row="r-36">
        <div class="cell" data-cell="c-36-0"><span class="cell__label">c-36-0</span><span class="cell__value">32.97</span><span class="cell__tint" style="background:#a46730"></span></div>
        <div class="cell" data-cell="c-36-1"><span class="cell__label">c-36-1</span><span class="cell__value">40.79</span><span class="cell__tint" style="background:#4c978b"></span></div>
        <div class="cell" data-cell="c-36-2"><span class="cell__label">c-36-2</span><span class="cell__value">33.36</span><span class="cell__tint" style="background:#7d7eeb"></span></div>
        <div class="cell" data-cell="c-36-3"><span class="cell__label">c-36-3</span><span class="cell__value">25.13</span><span class="cell__tint" style="background:#5b0819"></span></div>
        <div class="cell" data-cell="c-36-4"><span class="cell__label">c-36-4</span><span class="cell__value">24.23</span><span class="cell__tint" style="background:#01028d"></span></div>
        <div class="cell" data-cell="c-36-5"><span class="cell__label">c-36-5</span><span class="cell__value">93.50</span><span class="cell__tint" style="background:#de319d"></span></div>
        <div class="cell" data-cell="c-36-6"><span class="cell__label">c-36-6</span><span class="cell__value">27.67</span><span class="cell__tint" style="background:#5d1a3a"></span></div>
        <div class="cell" data-cell="c-36-7"><span class="cell__label">c-36-7</span><span class="cell__value">7.68</span><span class="cell__tint" style="background:#624cc8"></span></div>
        <div class="cell" data-cell="c-36-8"><span class="cell__label">c-36-8</span><span class="cell__value">34.09</span><span class="cell__tint" style="background:#bfd16c"></span></div>
        <div class="cell" data-cell="c-36-9"><span class="cell__label">c-36-9</span><span class="cell__value">5.98</span><span class="cell__tint" style="background:#efd1af"></span></div>
        <div class="cell" data-cell="c-36-10"><span class="cell__label">c-36-10</span><span class="cell__value">52.25</span><span class="cell__tint" style="background:#bcde16"></span></div>
        <div class="cell" data-cell="c-36-11"><span class="cell__label">c-36-11</span><span class="cell__value">8.13</span><span class="cell__tint" style="background:#dfa0e5"></span></div>
        <div class="cell" data-cell="c-36-12"><span class="cell__label">c-36-12</span><span class="cell__value">99.64</span><span class="cell__tint" style="background:#ea0896"></span></div>
        <div class="cell" data-cell="c-36-13"><span class="cell__label">c-36-13</span><span class="cell__value">84.52</span><span class="cell__tint" style="background:#892bc3"></span></div>
        <div class="cell" data-cell="c-36-14"><span class="cell__label">c-36-14</span><span class="cell__value">55.47</span><span class="cell__tint" style="background:#02855d"></span></div>
        <div class="cell" data-cell="c-36-15"><span class="cell__label">c-36-15</span><span class="cell__value">74.13</span><span class="cell__tint" style="background:#1111a8"></span></div>
        <div class="cell" data-cell="c-36-16"><span class="cell__label">c-36-16</span><span class="cell__value">61.54</span><span class="cell__tint" style="background:#b36f1e"></span></div>
        <div class="cell" data-cell="c-36-17"><span class="cell__label">c-36-17</span><span class="cell__value">72.89</span><span class="cell__tint" style="background:#ca3db6"></span></div>
        <div class="cell" data-cell="c-36-18"><span class="cell__label">c-36-18</span><span class="cell__value">47.63</span><span class="cell__tint" style="background:#f84fa7"></span></div>
        <div class="cell" data-cell="c-36-19"><span class="cell__label">c-36-19</span><span class="cell__value">64.65</span><span class="cell__tint" style="background:#190eeb"></span></div>
      </div>
      <div class="row" data-row="r-37">
        <div class="cell" data-cell="c-37-0"><span class="cell__label">c-37-0</span><span class="cell__value">66.18</span><span class="cell__tint" style="background:#a0978c"></span></div>
        <div class="cell" data-cell="c-37-1"><span class="cell__label">c-37-1</span><span class="cell__value">42.92</span><span class="cell__tint" style="background:#f74279"></span></div>
        <div class="cell" data-cell="c-37-2"><span class="cell__label">c-37-2</span><span class="cell__value">23.04</span><span class="cell__tint" style="background:#061849"></span></div>
        <div class="cell" data-cell="c-37-3"><span class="cell__label">c-37-3</span><span class="cell__value">46.33</span><span class="cell__tint" style="background:#5eb0e2"></span></div>
        <div class="cell" data-cell="c-37-4"><span class="cell__label">c-37-4</span><span class="cell__value">32.85</span><span class="cell__tint" style="background:#b0d7e1"></span></div>
        <div class="cell" data-cell="c-37-5"><span class="cell__label">c-37-5</span><span class="cell__value">62.62</span><span class="cell__tint" style="background:#181cc6"></span></div>
        <div class="cell" data-cell="c-37-6"><span class="cell__label">c-37-6</span><span class="cell__value">41.08</span><span class="cell__tint" style="background:#664549"></span></div>
        <div class="cell" data-cell="c-37-7"><span class="cell__label">c-37-7</span><span class="cell__value">15.90</span><span class="cell__tint" style="background:#75191e"></span></div>
        <div class="cell" data-cell="c-37-8"><span class="cell__label">c-37-8</span><span class="cell__value">28.44</span><span class="cell__tint" style="background:#a0c023"></span></div>
        <div class="cell" data-cell="c-37-9"><span class="cell__label">c-37-9</span><span class="cell__value">27.49</span><span class="cell__tint" style="background:#296c60"></span></div>
        <div class="cell" data-cell="c-37-10"><span class="cell__label">c-37-10</span><span class="cell__value">95.13</span><span class="cell__tint" style="background:#4a1e04"></span></div>
        <div class="cell" data-cell="c-37-11"><span class="cell__label">c-37-11</span><span class="cell__value">47.59</span><span class="cell__tint" style="background:#b115c0"></span></div>
        <div class="cell" data-cell="c-37-12"><span class="cell__label">c-37-12</span><span class="cell__value">83.09</span><span class="cell__tint" style="background:#ef9b03"></span></div>
        <div class="cell" data-cell="c-37-13"><span class="cell__label">c-37-13</span><span class="cell__value">24.95</span><span class="cell__tint" style="background:#cb920f"></span></div>
        <div class="cell" data-cell="c-37-14"><span class="cell__label">c-37-14</span><span class="cell__value">84.50</span><span class="cell__tint" style="background:#7cbf38"></span></div>
        <div class="cell" data-cell="c-37-15"><span class="cell__label">c-37-15</span><span class="cell__value">90.88</span><span class="cell__tint" style="background:#8ed30e"></span></div>
        <div class="cell" data-cell="c-37-16"><span class="cell__label">c-37-16</span><span class="cell__value">74.32</span><span class="cell__tint" style="background:#6def3c"></span></div>
        <div class="cell" data-cell="c-37-17"><span class="cell__label">c-37-17</span><span class="cell__value">79.30</span><span class="cell__tint" style="background:#f4f142"></span></div>
        <div class="cell" data-cell="c-37-18"><span class="cell__label">c-37-18</span><span class="cell__value">31.76</span><span class="cell__tint" style="background:#314bc5"></span></div>
        <div class="cell" data-cell="c-37-19"><span class="cell__label">c-37-19</span><span class="cell__value">96.50</span><span class="cell__tint" style="background:#b6f25e"></span></div>
      </div>
      <div class="row" data-row="r-38">
        <div class="cell" data-cell="c-38-0"><span class="cell__label">c-38-0</span><span class="cell__value">13.97</span><span class="cell__tint" style="background:#a42538"></span></div>
        <div class="cell" data-cell="c-38-1"><span class="cell__label">c-38-1</span><span class="cell__value">54.35</span><span class="cell__tint" style="background:#90c9e7"></span></div>
        <div class="cell" data-cell="c-38-2"><span class="cell__label">c-38-2</span><span class="cell__value">95.62</span><span class="cell__tint" style="background:#67237f"></span></div>
        <div class="cell" data-cell="c-38-3"><span class="cell__label">c-38-3</span><span class="cell__value">8.92</span><span class="cell__tint" style="background:#6436ed"></span></div>
        <div class="cell" data-cell="c-38-4"><span class="cell__label">c-38-4</span><span class="cell__value">57.36</span><span class="cell__tint" style="background:#fd1dd4"></span></div>
        <div class="cell" data-cell="c-38-5"><span class="cell__label">c-38-5</span><span class="cell__value">19.91</span><span class="cell__tint" style="background:#73b4cc"></span></div>
        <div class="cell" data-cell="c-38-6"><span class="cell__label">c-38-6</span><span class="cell__value">12.16</span><span class="cell__tint" style="background:#ee649a"></span></div>
        <div class="cell" data-cell="c-38-7"><span class="cell__label">c-38-7</span><span class="cell__value">58.63</span><span class="cell__tint" style="background:#30590d"></span></div>
        <div class="cell" data-cell="c-38-8"><span class="cell__label">c-38-8</span><span class="cell__value">9.77</span><span class="cell__tint" style="background:#466f5a"></span></div>
        <div class="cell" data-cell="c-38-9"><span class="cell__label">c-38-9</span><span class="cell__value">18.81</span><span class="cell__tint" style="background:#b31dd8"></span></div>
        <div class="cell" data-cell="c-38-10"><span class="cell__label">c-38-10</span><span class="cell__value">96.96</span><span class="cell__tint" style="background:#f9b240"></span></div>
        <div class="cell" data-cell="c-38-11"><span class="cell__label">c-38-11</span><span class="cell__value">48.95</span><span class="cell__tint" style="background:#ee0120"></span></div>
        <div class="cell" data-cell="c-38-12"><span class="cell__label">c-38-12</span><span class="cell__value">42.01</span><span class="cell__tint" style="background:#a37899"></span></div>
        <div class="cell" data-cell="c-38-13"><span class="cell__label">c-38-13</span><span class="cell__value">66.65</span><span class="cell__tint" style="background:#98984e"></span></div>
        <div class="cell" data-cell="c-38-14"><span class="cell__label">c-38-14</span><span class="cell__value">50.81</span><span class="cell__tint" style="background:#65db65"></span></div>
        <div class="cell" data-cell="c-38-15"><span class="cell__label">c-38-15</span><span class="cell__value">20.96</span><span class="cell__tint" style="background:#f0fefb"></span></div>
        <div class="cell" data-cell="c-38-16"><span class="cell__label">c-38-16</span><span class="cell__value">10.27</span><span class="cell__tint" style="background:#b8dba9"></span></div>
        <div class="cell" data-cell="c-38-17"><span class="cell__label">c-38-17</span><span class="cell__value">6.00</span><span class="cell__tint" style="background:#432e9b"></span></div>
        <div class="cell" data-cell="c-38-18"><span class="cell__label">c-38-18</span><span class="cell__value">69.42</span><span class="cell__tint" style="background:#aeed7c"></span></div>
        <div class="cell" data-cell="c-38-19"><span class="cell__label">c-38-19</span><span class="cell__value">41.97</span><span class="cell__tint" style="background:#a7feb8"></span></div>
      </div>
      <div class="row" data-row="r-39">
        <div class="cell" data-cell="c-39-0"><span class="cell__label">c-39-0</span><span class="cell__value">73.89</span><span class="cell__tint" style="background:#910e1e"></span></div>
        <div class="cell" data-cell="c-39-1"><span class="cell__label">c-39-1</span><span class="cell__value">34.25</span><span class="cell__tint" style="background:#f65772"></span></div>
        <div class="cell" data-cell="c-39-2"><span class="cell__label">c-39-2</span><span class="cell__value">44.83</span><span class="cell__tint" style="background:#322ce8"></span></div>
        <div class="cell" data-cell="c-39-3"><span class="cell__label">c-39-3</span><span class="cell__value">12.99</span><span class="cell__tint" style="background:#cca281"></span></div>
        <div class="cell" data-cell="c-39-4"><span class="cell__label">c-39-4</span><span class="cell__value">56.00</span><span class="cell__tint" style="background:#5ae6fd"></span></div>
        <div class="cell" data-cell="c-39-5"><span class="cell__label">c-39-5</span><span class="cell__value">34.81</span><span class="cell__tint" style="background:#babb77"></span></div>
        <div class="cell" data-cell="c-39-6"><span class="cell__label">c-39-6</span><span class="cell__value">48.59</span><span class="cell__tint" style="background:#e498bb"></span></div>
        <div class="cell" data-cell="c-39-7"><span class="cell__label">c-39-7</span><span class="cell__value">19.29</span><span class="cell__tint" style="background:#ec34fc"></span></div>
        <div class="cell" data-cell="c-39-8"><span class="cell__label">c-39-8</span><span class="cell__value">25.09</span><span class="cell__tint" style="background:#b4e665"></span></div>
        <div class="cell" data-cell="c-39-9"><span class="cell__label">c-39-9</span><span class="cell__value">41.82</span><span class="cell__tint" style="background:#d93f25"></span></div>
        <div class="cell" data-cell="c-39-10"><span class="cell__label">c-39-10</span><span class="cell__value">18.47</span><span class="cell__tint" style="background:#b78efd"></span></div>
        <div class="cell" data-cell="c-39-11"><span class="cell__label">c-39-11</span><span class="cell__value">5.33</span><span class="cell__tint" style="background:#7dab52"></span></div>
        <div class="cell" data-cell="c-39-12"><span class="cell__label">c-39-12</span><span class="cell__value">72.60</span><span class="cell__tint" style="background:#4319b6"></span></div>
        <div class="cell" data-cell="c-39-13"><span class="cell__label">c-39-13</span><span class="cell__value">90.74</span><span class="cell__tint" style="background:#4de180"></span></div>
        <div class="cell" data-cell="c-39-14"><span class="cell__label">c-39-14</span><span class="cell__value">26.59</span><span class="cell__tint" style="background:#d51a8e"></span></div>
        <div class="cell" data-cell="c-39-15"><span class="cell__label">c-39-15</span><span class="cell__value">23.98</span><span class="cell__tint" style="background:#296427"></span></div>
        <div class="cell" data-cell="c-39-16"><span class="cell__label">c-39-16</span><span class="cell__value">6.29</span><span class="cell__tint" style="background:#2624b8"></span></div>
        <div class="cell" data-cell="c-39-17"><span class="cell__label">c-39-17</span><span class="cell__value">30.75</span><span class="cell__tint" style="background:#14afc6"></span></div>
        <div class="cell" data-cell="c-39-18"><span class="cell__label">c-39-18</span><span class="cell__value">7.60</span><span class="cell__tint" style="background:#fe5271"></span></div>
        <div class="cell" data-cell="c-39-19"><span class="cell__label">c-39-19</span><span class="cell__value">37.31</span><span class="cell__tint" style="background:#57ff64"></span></div>
      </div>
      <div class="row" data-row="r-40">
        <div class="cell" data-cell="c-40-0"><span class="cell__label">c-40-0</span><span class="cell__value">2.42</span><span class="cell__tint" style="background:#3f43a2"></span></div>
        <div class="cell" data-cell="c-40-1"><span class="cell__label">c-40-1</span><span class="cell__value">48.90</span><span class="cell__tint" style="background:#084eb7"></span></div>
        <div class="cell" data-cell="c-40-2"><span class="cell__label">c-40-2</span><span class="cell__value">88.40</span><span class="cell__tint" style="background:#051310"></span></div>
        <div class="cell" data-cell="c-40-3"><span class="cell__label">c-40-3</span><span class="cell__value">69.83</span><span class="cell__tint" style="background:#c2367c"></span></div>
        <div class="cell" data-cell="c-40-4"><span class="cell__label">c-40-4</span><span class="cell__value">29.71</span><span class="cell__tint" style="background:#b782ca"></span></div>
        <div class="cell" data-cell="c-40-5"><span class="cell__label">c-40-5</span><span class="cell__value">94.92</span><span class="cell__tint" style="background:#067df5"></span></div>
        <div class="cell" data-cell="c-40-6"><span class="cell__label">c-40-6</span><span class="cell__value">51.08</span><span class="cell__tint" style="background:#c20acc"></span></div>
        <div class="cell" data-cell="c-40-7"><span class="cell__label">c-40-7</span><span class="cell__value">50.19</span><span class="cell__tint" style="background:#960578"></span></div>
        <div class="cell" data-cell="c-40-8"><span class="cell__label">c-40-8</span><span class="cell__value">97.74</span><span class="cell__tint" style="background:#c94c9f"></span></div>
        <div class="cell" data-cell="c-40-9"><span class="cell__label">c-40-9</span><span class="cell__value">37.93</span><span class="cell__tint" style="background:#69b7d9"></span></div>
        <div class="cell" data-cell="c-40-10"><span class="cell__label">c-40-10</span><span class="cell__value">54.38</span><span class="cell__tint" style="background:#5a3723"></span></div>
        <div class="cell" data-cell="c-40-11"><span class="cell__label">c-40-11</span><span class="cell__value">30.49</span><span class="cell__tint" style="background:#1f9992"></span></div>
        <div class="cell" data-cell="c-40-12"><span class="cell__label">c-40-12</span><span class="cell__value">32.52</span><span class="cell__tint" style="background:#e2da6f"></span></div>
        <div class="cell" data-cell="c-40-13"><span class="cell__label">c-40-13</span><span class="cell__value">87.98</span><span class="cell__tint" style="background:#96506b"></span></div>
        <div class="cell" data-cell="c-40-14"><span class="cell__label">c-40-14</span><span class="cell__value">58.99</span><span class="cell__tint" style="background:#054666"></span></div>
        <div class="cell" data-cell="c-40-15"><span class="cell__label">c-40-15</span><span class="cell__value">58.35</span><span class="cell__tint" style="background:#a06bd7"></span></div>
        <div class="cell" data-cell="c-40-16"><span class="cell__label">c-40-16</span><span class="cell__value">26.26</span><span class="cell__tint" style="background:#6103fe"></span></div>
        <div class="cell" data-cell="c-40-17"><span class="cell__label">c-40-17</span><span class="cell__value">20.37</span><span class="cell__tint" style="background:#72cdab"></span></div>
        <div class="cell" data-cell="c-40-18"><span class="cell__label">c-40-18</span><span class="cell__value">97.18</span><span class="cell__tint" style="background:#7199a1"></span></div>
        <div class="cell" data-cell="c-40-19"><span class="cell__label">c-40-19</span><span class="cell__value">6.31</span><span class="cell__tint" style="background:#ba9ee3"></span></div>
      </div>
      <div class="row" data-row="r-41">
        <div class="cell" data-cell="c-41-0"><span class="cell__label">c-41-0</span><span class="cell__value">78.30</span><span class="cell__tint" style="background:#83f60f"></span></div>
        <div class="cell" data-cell="c-41-1"><span class="cell__label">c-41-1</span><span class="cell__value">59.60</span><span class="cell__tint" style="background:#41474b"></span></div>
        <div class="cell" data-cell="c-41-2"><span class="cell__label">c-41-2</span><span class="cell__value">84.83</span><span class="cell__tint" style="background:#d1e7f8"></span></div>
        <div class="cell" data-cell="c-41-3"><span class="cell__label">c-41-3</span><span class="cell__value">10.94</span><span class="cell__tint" style="background:#fe9f15"></span></div>
        <div class="cell" data-cell="c-41-4"><span class="cell__label">c-41-4</span><span class="cell__value">36.68</span><span class="cell__tint" style="background:#b11228"></span></div>
        <div class="cell" data-cell="c-41-5"><span class="cell__label">c-41-5</span><span class="cell__value">29.91</span><span class="cell__tint" style="background:#593bf4"></span></div>
        <div class="cell" data-cell="c-41-6"><span class="cell__label">c-41-6</span><span class="cell__value">20.43</span><span class="cell__tint" style="background:#9056f6"></span></div>
        <div class="cell" data-cell="c-41-7"><span class="cell__label">c-41-7</span><span class="cell__value">15.72</span><span class="cell__tint" style="background:#fd24bf"></span></div>
        <div class="cell" data-cell="c-41-8"><span class="cell__label">c-41-8</span><span class="cell__value">76.79</span><span class="cell__tint" style="background:#3db839"></span></div>
        <div class="cell" data-cell="c-41-9"><span class="cell__label">c-41-9</span><span class="cell__value">32.55</span><span class="cell__tint" style="background:#383a31"></span></div>
        <div class="cell" data-cell="c-41-10"><span class="cell__label">c-41-10</span><span class="cell__value">84.40</span><span class="cell__tint" style="background:#90e4d6"></span></div>
        <div class="cell" data-cell="c-41-11"><span class="cell__label">c-41-11</span><span class="cell__value">18.08</span><span class="cell__tint" style="background:#b9c776"></span></div>
        <div class="cell" data-cell="c-41-12"><span class="cell__label">c-41-12</span><span class="cell__value">8.01</span><span class="cell__tint" style="background:#e80b11"></span></div>
        <div class="cell" data-cell="c-41-13"><span class="cell__label">c-41-13</span><span class="cell__value">94.15</span><span class="cell__tint" style="background:#4f4649"></span></div>
        <div class="cell" data-cell="c-41-14"><span class="cell__label">c-41-14</span><span class="cell__value">77.19</span><span class="cell__tint" style="background:#f7a5d4"></span></div>
        <div class="cell" data-cell="c-41-15"><span class="cell__label">c-41-15</span><span class="cell__value">52.22</span><span class="cell__tint" style="background:#2452a3"></span></div>
        <div class="cell" data-cell="c-41-16"><span class="cell__label">c-41-16</span><span class="cell__value">88.01</span><span class="cell__tint" style="background:#c9cd1b"></span></div>
        <div class="cell" data-cell="c-41-17"><span class="cell__label">c-41-17</span><span class="cell__value">89.71</span><span class="cell__tint" style="background:#d658b6"></span></div>
        <div class="cell" data-cell="c-41-18"><span class="cell__label">c-41-18</span><span class="cell__value">38.82</span><span class="cell__tint" style="background:#1fb6cd"></span></div>
        <div class="cell" data-cell="c-41-19"><span class="cell__label">c-41-19</span><span class="cell__value">74.55</span><span class="cell__tint" style="background:#4340c0"></span></div>
      </div>
      <div class="row" data-row="r-42">
        <div class="cell" data-cell="c-42-0"><span class="cell__label">c-42-0</span><span class="cell__value">77.20</span><span class="cell__tint" style="background:#d53ee5"></span></div>
        <div class="cell" data-cell="c-42-1"><span class="cell__label">c-42-1</span><span class="cell__value">38.63</span><span class="cell__tint" style="background:#ef69ee"></span></div>
        <div class="cell" data-cell="c-42-2"><span class="cell__label">c-42-2</span><span class="cell__value">42.98</span><span class="cell__tint" style="background:#685a7d"></span></div>
        <div class="cell" data-cell="c-42-3"><span class="cell__label">c-42-3</span><span class="cell__value">79.01</span><span class="cell__tint" style="background:#7fab80"></span></div>
        <div class="cell" data-cell="c-42-4"><span class="cell__label">c-42-4</span><span class="cell__value">97.59</span><span class="cell__tint" style="background:#9020a3"></span></div>
        <div class="cell" data-cell="c-42-5"><span class="cell__label">c-42-5</span><span class="cell__value">90.58</span><span class="cell__tint" style="background:#b8b18c"></span></div>
        <div class="cell" data-cell="c-42-6"><span class="cell__label">c-42-6</span><span class="cell__value">26.32</span><span class="cell__tint" style="background:#e90e05"></span></div>
        <div class="cell" data-cell="c-42-7"><span class="cell__label">c-42-7</span><span class="cell__value">64.64</span><span class="cell__tint" style="background:#c3ca81"></span></div>
        <div class="cell" data-cell="c-42-8"><span class="cell__label">c-42-8</span><span class="cell__value">84.91</span><span class="cell__tint" style="background:#46f29a"></span></div>
        <div class="cell" data-cell="c-42-9"><span class="cell__label">c-42-9</span><span class="cell__value">27.36</span><span class="cell__tint" style="background:#e08cc0"></span></div>
        <div class="cell" data-cell="c-42-10"><span class="cell__label">c-42-10</span><span class="cell__value">64.16</span><span class="cell__tint" style="background:#5f6f73"></span></div>
        <div class="cell" data-cell="c-42-11"><span class="cell__label">c-42-11</span><span class="cell__value">35.39</span><span class="cell__tint" style="background:#404fdb"></span></div>
        <div class="cell" data-cell="c-42-12"><span class="cell__label">c-42-12</span><span class="cell__value">41.21</span><span class="cell__tint" style="background:#e40f92"></span></div>
        <div class="cell" data-cell="c-42-13"><span class="cell__label">c-42-13</span><span class="cell__value">54.03</span><span class="cell__tint" style="background:#3bac14"></span></div>
        <div class="cell" data-cell="c-42-14"><span class="cell__label">c-42-14</span><span class="cell__value">16.14</span><span class="cell__tint" style="background:#938593"></span></div>
        <div class="cell" data-cell="c-42-15"><span class="cell__label">c-42-15</span><span class="cell__value">59.60</span><span class="cell__tint" style="background:#198dba"></span></div>
        <div class="cell" data-cell="c-42-16"><span class="cell__label">c-42-16</span><span class="cell__value">13.59</span><span class="cell__tint" style="background:#a46468"></span></div>
        <div class="cell" data-cell="c-42-17"><span class="cell__label">c-42-17</span><span class="cell__value">15.77</span><span class="cell__tint" style="background:#d86abb"></span></div>
        <div class="cell" data-cell="c-42-18"><span class="cell__label">c-42-18</span><span class="cell__value">77.96</span><span class="cell__tint" style="background:#bcf541"></span></div>
        <div class="cell" data-cell="c-42-19"><span class="cell__label">c-42-19</span><span class="cell__value">5.13</span><span class="cell__tint" style="background:#85cd76"></span></div>
      </div>
      <div class="row" data-row="r-43">
        <div class="cell" data-cell="c-43-0"><span class="cell__label">c-43-0</span><span class="cell__value">77.87</span><span class="cell__tint" style="background:#a8d937"></span></div>
        <div class="cell" data-cell="c-43-1"><span class="cell__label">c-43-1</span><span class="cell__value">45.53</span><span class="cell__tint" style="background:#dffb04"></span></div>
        <div class="cell" data-cell="c-43-2"><span class="cell__label">c-43-2</span><span class="cell__value">39.29</span><span class="cell__tint" style="background:#8b4b24"></span></div>
        <div class="cell" data-cell="c-43-3"><span class="cell__label">c-43-3</span><span class="cell__value">25.30</span><span class="cell__tint" style="background:#4040cb"></span></div>
        <div class="cell" data-cell="c-43-4"><span class="cell__label">c-43-4</span><span class="cell__value">78.08</span><span class="cell__tint" style="background:#9e70f4"></span></div>
        <div class="cell" data-cell="c-43-5"><span class="cell__label">c-43-5</span><span class="cell__value">4.46</span><span class="cell__tint" style="background:#dfeb64"></span></div>
        <div class="cell" data-cell="c-43-6"><span class="cell__label">c-43-6</span><span class="cell__value">74.65</span><span class="cell__tint" style="background:#a1318b"></span></div>
        <div class="cell" data-cell="c-43-7"><span class="cell__label">c-43-7</span><span class="cell__value">51.09</span><span class="cell__tint" style="background:#0f0934"></span></div>
        <div class="cell" data-cell="c-43-8"><span class="cell__label">c-43-8</span><span class="cell__value">12.84</span><span class="cell__tint" style="background:#16bcdc"></span></div>
        <div class="cell" data-cell="c-43-9"><span class="cell__label">c-43-9</span><span class="cell__value">94.83</span><span class="cell__tint" style="background:#99c3d6"></span></div>
        <div class="cell" data-cell="c-43-10"><span class="cell__label">c-43-10</span><span class="cell__value">60.68</span><span class="cell__tint" style="background:#8cbf5a"></span></div>
        <div class="cell" data-cell="c-43-11"><span class="cell__label">c-43-11</span><span class="cell__value">20.39</span><span class="cell__tint" style="background:#187743"></span></div>
        <div class="cell" data-cell="c-43-12"><span class="cell__label">c-43-12</span><span class="cell__value">65.78</span><span class="cell__tint" style="background:#cac3e2"></span></div>
        <div class="cell" data-cell="c-43-13"><span class="cell__label">c-43-13</span><span class="cell__value">52.36</span><span class="cell__tint" style="background:#620654"></span></div>
        <div class="cell" data-cell="c-43-14"><span class="cell__label">c-43-14</span><span class="cell__value">36.64</span><span class="cell__tint" style="background:#b23f33"></span></div>
        <div class="cell" data-cell="c-43-15"><span class="cell__label">c-43-15</span><span class="cell__value">4.01</span><span class="cell__tint" style="background:#a22b38"></span></div>
        <div class="cell" data-cell="c-43-16"><span class="cell__label">c-43-16</span><span class="cell__value">62.63</span><span class="cell__tint" style="background:#343efb"></span></div>
        <div class="cell" data-cell="c-43-17"><span class="cell__label">c-43-17</span><span class="cell__value">96.42</span><span class="cell__tint" style="background:#6f638f"></span></div>
        <div class="cell" data-cell="c-43-18"><span class="cell__label">c-43-18</span><span class="cell__value">15.54</span><span class="cell__tint" style="background:#dab1fa"></span></div>
        <div class="cell" data-cell="c-43-19"><span class="cell__label">c-43-19</span><span class="cell__value">96.93</span><span class="cell__tint" style="background:#ee0c2d"></span></div>
      </div>
      <div class="row" data-row="r-44">
        <div class="cell" data-cell="c-44-0"><span class="cell__label">c-44-0</span><span class="cell__value">12.13</span><span class="cell__tint" style="background:#dc7a33"></span></div>
        <div class="cell" data-cell="c-44-1"><span class="cell__label">c-44-1</span><span class="cell__value">52.86</span><span class="cell__tint" style="background:#0b95e2"></span></div>
        <div class="cell" data-cell="c-44-2"><span class="cell__label">c-44-2</span><span class="cell__value">52.19</span><span class="cell__tint" style="background:#62b0c7"></span></div>
        <div class="cell" data-cell="c-44-3"><span class="cell__label">c-44-3</span><span class="cell__value">31.71</span><span class="cell__tint" style="background:#d3ee8d"></span></div>
      </div> -->
      <div id="after-toggle"></div>
        <div class="cell" data-cell="c-44-4"><span class="cell__label">c-44-4</span><span class="cell__value">76.22</span><span class="cell__tint" style="background:#69657f"></span></div>
        <div class="cell" data-cell="c-44-5"><span class="cell__label">c-44-5</span><span class="cell__value">55.92</span><span class="cell__tint" style="background:#6b5819"></span></div>
        <div class="cell" data-cell="c-44-6"><span class="cell__label">c-44-6</span><span class="cell__value">33.46</span><span class="cell__tint" style="background:#f005ed"></span></div>
        <div class="cell" data-cell="c-44-7"><span class="cell__label">c-44-7</span><span class="cell__value">88.78</span><span class="cell__tint" style="background:#d99bed"></span></div>
        <div class="cell" data-cell="c-44-8"><span class="cell__label">c-44-8</span><span class="cell__value">73.60</span><span class="cell__tint" style="background:#e0da12"></span></div>
        <div class="cell" data-cell="c-44-9"><span class="cell__label">c-44-9</span><span class="cell__value">75.53</span><span class="cell__tint" style="background:#d0bb98"></span></div>
        <div class="cell" data-cell="c-44-10"><span class="cell__label">c-44-10</span><span class="cell__value">54.24</span><span class="cell__tint" style="background:#c3c321"></span></div>
        <div class="cell" data-cell="c-44-11"><span class="cell__label">c-44-11</span><span class="cell__value">9.34</span><span class="cell__tint" style="background:#a25de8"></span></div>
        <div class="cell" data-cell="c-44-12"><span class="cell__label">c-44-12</span><span class="cell__value">36.01</span><span class="cell__tint" style="background:#5ee73c"></span></div>
        <div class="cell" data-cell="c-44-13"><span class="cell__label">c-44-13</span><span class="cell__value">30.97</span><span class="cell__tint" style="background:#a9f795"></span></div>
        <div class="cell" data-cell="c-44-14"><span class="cell__label">c-44-14</span><span class="cell__value">67.03</span><span class="cell__tint" style="background:#5367e9"></span></div>
        <div class="cell" data-cell="c-44-15"><span class="cell__label">c-44-15</span><span class="cell__value">63.47</span><span class="cell__tint" style="background:#a7fa7c"></span></div>
        <div class="cell" data-cell="c-44-16"><span class="cell__label">c-44-16</span><span class="cell__value">28.61</span><span class="cell__tint" style="background:#1dd716"></span></div>
        <div class="cell" data-cell="c-44-17"><span class="cell__label">c-44-17</span><span class="cell__value">87.84</span><span class="cell__tint" style="background:#5ecaad"></span></div>
        <div class="cell" data-cell="c-44-18"><span class="cell__label">c-44-18</span><span class="cell__value">63.03</span><span class="cell__tint" style="background:#acc640"></span></div>
        <div class="cell" data-cell="c-44-19"><span class="cell__label">c-44-19</span><span class="cell__value">81.66</span><span class="cell__tint" style="background:#a337f1"></span></div>
      </div>
      <div class="row" data-row="r-45">
        <div class="cell" data-cell="c-45-0"><span class="cell__label">c-45-0</span><span class="cell__value">60.47</span><span class="cell__tint" style="background:#ce1eba"></span></div>
        <div class="cell" data-cell="c-45-1"><span class="cell__label">c-45-1</span><span class="cell__value">91.85</span><span class="cell__tint" style="background:#23abe6"></span></div>
        <div class="cell" data-cell="c-45-2"><span class="cell__label">c-45-2</span><span class="cell__value">56.56</span><span class="cell__tint" style="background:#1934f5"></span></div>
        <div class="cell" data-cell="c-45-3"><span class="cell__label">c-45-3</span><span class="cell__value">4.19</span><span class="cell__tint" style="background:#57763d"></span></div>
        <div class="cell" data-cell="c-45-4"><span class="cell__label">c-45-4</span><span class="cell__value">98.89</span><span class="cell__tint" style="background:#41d732"></span></div>
        <div class="cell" data-cell="c-45-5"><span class="cell__label">c-45-5</span><span class="cell__value">38.31</span><span class="cell__tint" style="background:#081c2e"></span></div>
        <div class="cell" data-cell="c-45-6"><span class="cell__label">c-45-6</span><span class="cell__value">27.89</span><span class="cell__tint" style="background:#a13ab8"></span></div>
        <div class="cell" data-cell="c-45-7"><span class="cell__label">c-45-7</span><span class="cell__value">65.07</span><span class="cell__tint" style="background:#e9d84b"></span></div>
        <div class="cell" data-cell="c-45-8"><span class="cell__label">c-45-8</span><span class="cell__value">46.46</span><span class="cell__tint" style="background:#cda671"></span></div>
        <div class="cell" data-cell="c-45-9"><span class="cell__label">c-45-9</span><span class="cell__value">37.55</span><span class="cell__tint" style="background:#5763fc"></span></div>
        <div class="cell" data-cell="c-45-10"><span class="cell__label">c-45-10</span><span class="cell__value">34.67</span><span class="cell__tint" style="background:#3d3af7"></span></div>
        <div class="cell" data-cell="c-45-11"><span class="cell__label">c-45-11</span><span class="cell__value">43.27</span><span class="cell__tint" style="background:#1b03ee"></span></div>
        <div class="cell" data-cell="c-45-12"><span class="cell__label">c-45-12</span><span class="cell__value">34.15</span><span class="cell__tint" style="background:#520d45"></span></div>
        <div class="cell" data-cell="c-45-13"><span class="cell__label">c-45-13</span><span class="cell__value">41.01</span><span class="cell__tint" style="background:#4b6b57"></span></div>
        <div class="cell" data-cell="c-45-14"><span class="cell__label">c-45-14</span><span class="cell__value">34.87</span><span class="cell__tint" style="background:#461c86"></span></div>
        <div class="cell" data-cell="c-45-15"><span class="cell__label">c-45-15</span><span class="cell__value">51.28</span><span class="cell__tint" style="background:#898dc4"></span></div>
        <div class="cell" data-cell="c-45-16"><span class="cell__label">c-45-16</span><span class="cell__value">22.48</span><span class="cell__tint" style="background:#7637ad"></span></div>
        <div class="cell" data-cell="c-45-17"><span class="cell__label">c-45-17</span><span class="cell__value">58.22</span><span class="cell__tint" style="background:#b6aeee"></span></div>
        <div class="cell" data-cell="c-45-18"><span class="cell__label">c-45-18</span><span class="cell__value">73.03</span><span class="cell__tint" style="background:#1541c4"></span></div>
        <div class="cell" data-cell="c-45-19"><span class="cell__label">c-45-19</span><span class="cell__value">55.46</span><span class="cell__tint" style="background:#600a69"></span></div>
      </div>
      <div class="row" data-row="r-46">
        <div class="cell" data-cell="c-46-0"><span class="cell__label">c-46-0</span><span class="cell__value">42.60</span><span class="cell__tint" style="background:#a76544"></span></div>
        <div class="cell" data-cell="c-46-1"><span class="cell__label">c-46-1</span><span class="cell__value">93.18</span><span class="cell__tint" style="background:#64ed3a"></span></div>
        <div class="cell" data-cell="c-46-2"><span class="cell__label">c-46-2</span><span class="cell__value">67.52</span><span class="cell__tint" style="background:#ce0a07"></span></div>
        <div class="cell" data-cell="c-46-3"><span class="cell__label">c-46-3</span><span class="cell__value">36.81</span><span class="cell__tint" style="background:#8f08ec"></span></div>
        <div class="cell" data-cell="c-46-4"><span class="cell__label">c-46-4</span><span class="cell__value">99.59</span><span class="cell__tint" style="background:#b4f4ca"></span></div>
        <div class="cell" data-cell="c-46-5"><span class="cell__label">c-46-5</span><span class="cell__value">44.15</span><span class="cell__tint" style="background:#251cf9"></span></div>
        <div class="cell" data-cell="c-46-6"><span class="cell__label">c-46-6</span><span class="cell__value">30.84</span><span class="cell__tint" style="background:#1a638b"></span></div>
        <div class="cell" data-cell="c-46-7"><span class="cell__label">c-46-7</span><span class="cell__value">3.98</span><span class="cell__tint" style="background:#231c43"></span></div>
        <div class="cell" data-cell="c-46-8"><span class="cell__label">c-46-8</span><span class="cell__value">11.30</span><span class="cell__tint" style="background:#b975a9"></span></div>
        <div class="cell" data-cell="c-46-9"><span class="cell__label">c-46-9</span><span class="cell__value">41.99</span><span class="cell__tint" style="background:#a9c3b7"></span></div>
        <div class="cell" data-cell="c-46-10"><span class="cell__label">c-46-10</span><span class="cell__value">12.26</span><span class="cell__tint" style="background:#16d795"></span></div>
        <div class="cell" data-cell="c-46-11"><span class="cell__label">c-46-11</span><span class="cell__value">1.43</span><span class="cell__tint" style="background:#5ce752"></span></div>
        <div class="cell" data-cell="c-46-12"><span class="cell__label">c-46-12</span><span class="cell__value">55.83</span><span class="cell__tint" style="background:#649bb1"></span></div>
        <div class="cell" data-cell="c-46-13"><span class="cell__label">c-46-13</span><span class="cell__value">50.83</span><span class="cell__tint" style="background:#44d9a2"></span></div>
        <div class="cell" data-cell="c-46-14"><span class="cell__label">c-46-14</span><span class="cell__value">78.12</span><span class="cell__tint" style="background:#75608e"></span></div>
        <div class="cell" data-cell="c-46-15"><span class="cell__label">c-46-15</span><span class="cell__value">62.96</span><span class="cell__tint" style="background:#329ffe"></span></div>
        <div class="cell" data-cell="c-46-16"><span class="cell__label">c-46-16</span><span class="cell__value">24.68</span><span class="cell__tint" style="background:#f7db2a"></span></div>
        <div class="cell" data-cell="c-46-17"><span class="cell__label">c-46-17</span><span class="cell__value">77.91</span><span class="cell__tint" style="background:#0f639e"></span></div>
        <div class="cell" data-cell="c-46-18"><span class="cell__label">c-46-18</span><span class="cell__value">13.21</span><span class="cell__tint" style="background:#1227d0"></span></div>
        <div class="cell" data-cell="c-46-19"><span class="cell__label">c-46-19</span><span class="cell__value">16.88</span><span class="cell__tint" style="background:#49cdd1"></span></div>
      </div>
      <div class="row" data-row="r-47">
        <div class="cell" data-cell="c-47-0"><span class="cell__label">c-47-0</span><span class="cell__value">24.61</span><span class="cell__tint" style="background:#c08f2e"></span></div>
        <div class="cell" data-cell="c-47-1"><span class="cell__label">c-47-1</span><span class="cell__value">40.22</span><span class="cell__tint" style="background:#40bb3a"></span></div>
        <div class="cell" data-cell="c-47-2"><span class="cell__label">c-47-2</span><span class="cell__value">89.06</span><span class="cell__tint" style="background:#095dd8"></span></div>
        <div class="cell" data-cell="c-47-3"><span class="cell__label">c-47-3</span><span class="cell__value">65.07</span><span class="cell__tint" style="background:#46e6ca"></span></div>
        <div class="cell" data-cell="c-47-4"><span class="cell__label">c-47-4</span><span class="cell__value">11.13</span><span class="cell__tint" style="background:#c7c7ab"></span></div>
        <div class="cell" data-cell="c-47-5"><span class="cell__label">c-47-5</span><span class="cell__value">46.00</span><span class="cell__tint" style="background:#f22fec"></span></div>
        <div class="cell" data-cell="c-47-6"><span class="cell__label">c-47-6</span><span class="cell__value">30.19</span><span class="cell__tint" style="background:#0ed9ec"></span></div>
        <div class="cell" data-cell="c-47-7"><span class="cell__label">c-47-7</span><span class="cell__value">37.34</span><span class="cell__tint" style="background:#2d5511"></span></div>
        <div class="cell" data-cell="c-47-8"><span class="cell__label">c-47-8</span><span class="cell__value">85.79</span><span class="cell__tint" style="background:#0a90a9"></span></div>
        <div class="cell" data-cell="c-47-9"><span class="cell__label">c-47-9</span><span class="cell__value">58.77</span><span class="cell__tint" style="background:#426549"></span></div>
        <div class="cell" data-cell="c-47-10"><span class="cell__label">c-47-10</span><span class="cell__value">15.19</span><span class="cell__tint" style="background:#1165d1"></span></div>
        <div class="cell" data-cell="c-47-11"><span class="cell__label">c-47-11</span><span class="cell__value">5.15</span><span class="cell__tint" style="background:#d18d76"></span></div>
        <div class="cell" data-cell="c-47-12"><span class="cell__label">c-47-12</span><span class="cell__value">34.70</span><span class="cell__tint" style="background:#a69870"></span></div>
        <div class="cell" data-cell="c-47-13"><span class="cell__label">c-47-13</span><span class="cell__value">11.39</span><span class="cell__tint" style="background:#04d54e"></span></div>
        <div class="cell" data-cell="c-47-14"><span class="cell__label">c-47-14</span><span class="cell__value">42.01</span><span class="cell__tint" style="background:#4f9429"></span></div>
        <div class="cell" data-cell="c-47-15"><span class="cell__label">c-47-15</span><span class="cell__value">80.79</span><span class="cell__tint" style="background:#c2b1c4"></span></div>
        <div class="cell" data-cell="c-47-16"><span class="cell__label">c-47-16</span><span class="cell__value">91.88</span><span class="cell__tint" style="background:#e0b7c6"></span></div>
        <div class="cell" data-cell="c-47-17"><span class="cell__label">c-47-17</span><span class="cell__value">43.76</span><span class="cell__tint" style="background:#137eed"></span></div>
        <div class="cell" data-cell="c-47-18"><span class="cell__label">c-47-18</span><span class="cell__value">45.99</span><span class="cell__tint" style="background:#84909b"></span></div>
        <div class="cell" data-cell="c-47-19"><span class="cell__label">c-47-19</span><span class="cell__value">82.81</span><span class="cell__tint" style="background:#af30a1"></span></div>
      </div>
      <div class="row" data-row="r-48">
        <div class="cell" data-cell="c-48-0"><span class="cell__label">c-48-0</span><span class="cell__value">16.06</span><span class="cell__tint" style="background:#bf7a53"></span></div>
        <div class="cell" data-cell="c-48-1"><span class="cell__label">c-48-1</span><span class="cell__value">22.67</span><span class="cell__tint" style="background:#f03ec9"></span></div>
        <div class="cell" data-cell="c-48-2"><span class="cell__label">c-48-2</span><span class="cell__value">77.39</span><span class="cell__tint" style="background:#c22420"></span></div>
        <div class="cell" data-cell="c-48-3"><span class="cell__label">c-48-3</span><span class="cell__value">3.97</span><span class="cell__tint" style="background:#20a0ea"></span></div>
        <div class="cell" data-cell="c-48-4"><span class="cell__label">c-48-4</span><span class="cell__value">7.67</span><span class="cell__tint" style="background:#50b4d0"></span></div>
        <div class="cell" data-cell="c-48-5"><span class="cell__label">c-48-5</span><span class="cell__value">71.02</span><span class="cell__tint" style="background:#4d431f"></span></div>
        <div class="cell" data-cell="c-48-6"><span class="cell__label">c-48-6</span><span class="cell__value">73.46</span><span class="cell__tint" style="background:#094c00"></span></div>
        <div class="cell" data-cell="c-48-7"><span class="cell__label">c-48-7</span><span class="cell__value">29.88</span><span class="cell__tint" style="background:#e7076c"></span></div>
        <div class="cell" data-cell="c-48-8"><span class="cell__label">c-48-8</span><span class="cell__value">22.60</span><span class="cell__tint" style="background:#c5c064"></span></div>
        <div class="cell" data-cell="c-48-9"><span class="cell__label">c-48-9</span><span class="cell__value">32.84</span><span class="cell__tint" style="background:#f32d4c"></span></div>
        <div class="cell" data-cell="c-48-10"><span class="cell__label">c-48-10</span><span class="cell__value">65.99</span><span class="cell__tint" style="background:#dbc1a0"></span></div>
        <div class="cell" data-cell="c-48-11"><span class="cell__label">c-48-11</span><span class="cell__value">82.15</span><span class="cell__tint" style="background:#cdddff"></span></div>
        <div class="cell" data-cell="c-48-12"><span class="cell__label">c-48-12</span><span class="cell__value">49.73</span><span class="cell__tint" style="background:#dde321"></span></div>
        <div class="cell" data-cell="c-48-13"><span class="cell__label">c-48-13</span><span class="cell__value">4.42</span><span class="cell__tint" style="background:#8e7654"></span></div>
        <div class="cell" data-cell="c-48-14"><span class="cell__label">c-48-14</span><span class="cell__value">77.10</span><span class="cell__tint" style="background:#d899dd"></span></div>
        <div class="cell" data-cell="c-48-15"><span class="cell__label">c-48-15</span><span class="cell__value">90.03</span><span class="cell__tint" style="background:#942822"></span></div>
        <div class="cell" data-cell="c-48-16"><span class="cell__label">c-48-16</span><span class="cell__value">37.92</span><span class="cell__tint" style="background:#7375dc"></span></div>
        <div class="cell" data-cell="c-48-17"><span class="cell__label">c-48-17</span><span class="cell__value">81.99</span><span class="cell__tint" style="background:#34f560"></span></div>
        <div class="cell" data-cell="c-48-18"><span class="cell__label">c-48-18</span><span class="cell__value">99.55</span><span class="cell__tint" style="background:#8328fb"></span></div>
        <div class="cell" data-cell="c-48-19"><span class="cell__label">c-48-19</span><span class="cell__value">24.28</span><span class="cell__tint" style="background:#a191e2"></span></div>
      </div>
      <div class="row" data-row="r-49">
        <div class="cell" data-cell="c-49-0"><span class="cell__label">c-49-0</span><span class="cell__value">79.82</span><span class="cell__tint" style="background:#d4a858"></span></div>
        <div class="cell" data-cell="c-49-1"><span class="cell__label">c-49-1</span><span class="cell__value">39.01</span><span class="cell__tint" style="background:#b35735"></span></div>
        <div class="cell" data-cell="c-49-2"><span class="cell__label">c-49-2</span><span class="cell__value">67.62</span><span class="cell__tint" style="background:#9af2ec"></span></div>
        <div class="cell" data-cell="c-49-3"><span class="cell__label">c-49-3</span><span class="cell__value">26.29</span><span class="cell__tint" style="background:#848f54"></span></div>
        <div class="cell" data-cell="c-49-4"><span class="cell__label">c-49-4</span><span class="cell__value">1.56</span><span class="cell__tint" style="background:#062923"></span></div>
        <div class="cell" data-cell="c-49-5"><span class="cell__label">c-49-5</span><span class="cell__value">55.76</span><span class="cell__tint" style="background:#d4820b"></span></div>
        <div class="cell" data-cell="c-49-6"><span class="cell__label">c-49-6</span><span class="cell__value">15.50</span><span class="cell__tint" style="background:#782873"></span></div>
        <div class="cell" data-cell="c-49-7"><span class="cell__label">c-49-7</span><span class="cell__value">94.30</span><span class="cell__tint" style="background:#ddd17a"></span></div>
        <div class="cell" data-cell="c-49-8"><span class="cell__label">c-49-8</span><span class="cell__value">14.69</span><span class="cell__tint" style="background:#fc05ae"></span></div>
        <div class="cell" data-cell="c-49-9"><span class="cell__label">c-49-9</span><span class="cell__value">45.58</span><span class="cell__tint" style="background:#ca112c"></span></div>
        <div class="cell" data-cell="c-49-10"><span class="cell__label">c-49-10</span><span class="cell__value">64.88</span><span class="cell__tint" style="background:#b2660e"></span></div>
        <div class="cell" data-cell="c-49-11"><span class="cell__label">c-49-11</span><span class="cell__value">16.44</span><span class="cell__tint" style="background:#7adcbf"></span></div>
        <div class="cell" data-cell="c-49-12"><span class="cell__label">c-49-12</span><span class="cell__value">88.05</span><span class="cell__tint" style="background:#76defe"></span></div>
        <div class="cell" data-cell="c-49-13"><span class="cell__label">c-49-13</span><span class="cell__value">96.16</span><span class="cell__tint" style="background:#001ecc"></span></div>
        <div class="cell" data-cell="c-49-14"><span class="cell__label">c-49-14</span><span class="cell__value">72.53</span><span class="cell__tint" style="background:#09dc4f"></span></div>
        <div class="cell" data-cell="c-49-15"><span class="cell__label">c-49-15</span><span class="cell__value">33.13</span><span class="cell__tint" style="background:#2ecd48"></span></div>
        <div class="cell" data-cell="c-49-16"><span class="cell__label">c-49-16</span><span class="cell__value">49.03</span><span class="cell__tint" style="background:#271f31"></span></div>
        <div class="cell" data-cell="c-49-17"><span class="cell__label">c-49-17</span><span class="cell__value">39.91</span><span class="cell__tint" style="background:#a12051"></span></div>
        <div class="cell" data-cell="c-49-18"><span class="cell__label">c-49-18</span><span class="cell__value">10.74</span><span class="cell__tint" style="background:#521e48"></span></div>
        <div class="cell" data-cell="c-49-19"><span class="cell__label">c-49-19</span><span class="cell__value">5.08</span><span class="cell__tint" style="background:#723cf3"></span></div>
      </div>
      <div class="row" data-row="r-50">
        <div class="cell" data-cell="c-50-0"><span class="cell__label">c-50-0</span><span class="cell__value">26.92</span><span class="cell__tint" style="background:#5dc233"></span></div>
        <div class="cell" data-cell="c-50-1"><span class="cell__label">c-50-1</span><span class="cell__value">19.35</span><span class="cell__tint" style="background:#596a43"></span></div>
        <div class="cell" data-cell="c-50-2"><span class="cell__label">c-50-2</span><span class="cell__value">72.08</span><span class="cell__tint" style="background:#529187"></span></div>
        <div class="cell" data-cell="c-50-3"><span class="cell__label">c-50-3</span><span class="cell__value">32.08</span><span class="cell__tint" style="background:#35557e"></span></div>
        <div class="cell" data-cell="c-50-4"><span class="cell__label">c-50-4</span><span class="cell__value">65.12</span><span class="cell__tint" style="background:#76d80d"></span></div>
        <div class="cell" data-cell="c-50-5"><span class="cell__label">c-50-5</span><span class="cell__value">75.36</span><span class="cell__tint" style="background:#81caa5"></span></div>
        <div class="cell" data-cell="c-50-6"><span class="cell__label">c-50-6</span><span class="cell__value">21.39</span><span class="cell__tint" style="background:#aa4235"></span></div>
        <div class="cell" data-cell="c-50-7"><span class="cell__label">c-50-7</span><span class="cell__value">63.78</span><span class="cell__tint" style="background:#ecfb5f"></span></div>
        <div class="cell" data-cell="c-50-8"><span class="cell__label">c-50-8</span><span class="cell__value">63.50</span><span class="cell__tint" style="background:#b5eb78"></span></div>
        <div class="cell" data-cell="c-50-9"><span class="cell__label">c-50-9</span><span class="cell__value">70.10</span><span class="cell__tint" style="background:#589ec8"></span></div>
        <div class="cell" data-cell="c-50-10"><span class="cell__label">c-50-10</span><span class="cell__value">58.86</span><span class="cell__tint" style="background:#943d5c"></span></div>
        <div class="cell" data-cell="c-50-11"><span class="cell__label">c-50-11</span><span class="cell__value">20.65</span><span class="cell__tint" style="background:#4c2388"></span></div>
        <div class="cell" data-cell="c-50-12"><span class="cell__label">c-50-12</span><span class="cell__value">19.84</span><span class="cell__tint" style="background:#ebe98d"></span></div>
        <div class="cell" data-cell="c-50-13"><span class="cell__label">c-50-13</span><span class="cell__value">70.24</span><span class="cell__tint" style="background:#a31510"></span></div>
        <div class="cell" data-cell="c-50-14"><span class="cell__label">c-50-14</span><span class="cell__value">30.64</span><span class="cell__tint" style="background:#1b83a8"></span></div>
        <div class="cell" data-cell="c-50-15"><span class="cell__label">c-50-15</span><span class="cell__value">81.74</span><span class="cell__tint" style="background:#6686d4"></span></div>
        <div class="cell" data-cell="c-50-16"><span class="cell__label">c-50-16</span><span class="cell__value">88.64</span><span class="cell__tint" style="background:#eb797d"></span></div>
        <div class="cell" data-cell="c-50-17"><span class="cell__label">c-50-17</span><span class="cell__value">95.56</span><span class="cell__tint" style="background:#0ecd1d"></span></div>
        <div class="cell" data-cell="c-50-18"><span class="cell__label">c-50-18</span><span class="cell__value">49.26</span><span class="cell__tint" style="background:#564cec"></span></div>
        <div class="cell" data-cell="c-50-19"><span class="cell__label">c-50-19</span><span class="cell__value">84.90</span><span class="cell__tint" style="background:#4757cb"></span></div>
      </div>
      <div class="row" data-row="r-51">
        <div class="cell" data-cell="c-51-0"><span class="cell__label">c-51-0</span><span class="cell__value">82.21</span><span class="cell__tint" style="background:#3d2360"></span></div>
        <div class="cell" data-cell="c-51-1"><span class="cell__label">c-51-1</span><span class="cell__value">23.22</span><span class="cell__tint" style="background:#e7b6e2"></span></div>
        <div class="cell" data-cell="c-51-2"><span class="cell__label">c-51-2</span><span class="cell__value">6.77</span><span class="cell__tint" style="background:#8bad25"></span></div>
        <div class="cell" data-cell="c-51-3"><span class="cell__label">c-51-3</span><span class="cell__value">82.74</span><span class="cell__tint" style="background:#16ce0f"></span></div>
        <div class="cell" data-cell="c-51-4"><span class="cell__label">c-51-4</span><span class="cell__value">83.85</span><span class="cell__tint" style="background:#7f4add"></span></div>
        <div class="cell" data-cell="c-51-5"><span class="cell__label">c-51-5</span><span class="cell__value">12.38</span><span class="cell__tint" style="background:#96ea2b"></span></div>
        <div class="cell" data-cell="c-51-6"><span class="cell__label">c-51-6</span><span class="cell__value">56.43</span><span class="cell__tint" style="background:#ace6a8"></span></div>
        <div class="cell" data-cell="c-51-7"><span class="cell__label">c-51-7</span><span class="cell__value">57.28</span><span class="cell__tint" style="background:#4cc3d8"></span></div>
        <div class="cell" data-cell="c-51-8"><span class="cell__label">c-51-8</span><span class="cell__value">55.79</span><span class="cell__tint" style="background:#e498ef"></span></div>
        <div class="cell" data-cell="c-51-9"><span class="cell__label">c-51-9</span><span class="cell__value">0.34</span><span class="cell__tint" style="background:#3d63d6"></span></div>
        <div class="cell" data-cell="c-51-10"><span class="cell__label">c-51-10</span><span class="cell__value">86.39</span><span class="cell__tint" style="background:#6de86d"></span></div>
        <div class="cell" data-cell="c-51-11"><span class="cell__label">c-51-11</span><span class="cell__value">30.74</span><span class="cell__tint" style="background:#dc7876"></span></div>
        <div class="cell" data-cell="c-51-12"><span class="cell__label">c-51-12</span><span class="cell__value">60.22</span><span class="cell__tint" style="background:#07e178"></span></div>
        <div class="cell" data-cell="c-51-13"><span class="cell__label">c-51-13</span><span class="cell__value">0.15</span><span class="cell__tint" style="background:#cd5fbc"></span></div>
        <div class="cell" data-cell="c-51-14"><span class="cell__label">c-51-14</span><span class="cell__value">87.01</span><span class="cell__tint" style="background:#4434e2"></span></div>
        <div class="cell" data-cell="c-51-15"><span class="cell__label">c-51-15</span><span class="cell__value">6.90</span><span class="cell__tint" style="background:#bf04db"></span></div>
        <div class="cell" data-cell="c-51-16"><span class="cell__label">c-51-16</span><span class="cell__value">65.30</span><span class="cell__tint" style="background:#4274f5"></span></div>
        <div class="cell" data-cell="c-51-17"><span class="cell__label">c-51-17</span><span class="cell__value">22.35</span><span class="cell__tint" style="background:#a2ca38"></span></div>
        <div class="cell" data-cell="c-51-18"><span class="cell__label">c-51-18</span><span class="cell__value">99.89</span><span class="cell__tint" style="background:#8d06ff"></span></div>
        <div class="cell" data-cell="c-51-19"><span class="cell__label">c-51-19</span><span class="cell__value">31.43</span><span class="cell__tint" style="background:#da50e8"></span></div>
      </div>
      <div class="row" data-row="r-52">
        <div class="cell" data-cell="c-52-0"><span class="cell__label">c-52-0</span><span class="cell__value">77.89</span><span class="cell__tint" style="background:#30be7b"></span></div>
        <div class="cell" data-cell="c-52-1"><span class="cell__label">c-52-1</span><span class="cell__value">60.17</span><span class="cell__tint" style="background:#822c77"></span></div>
        <div class="cell" data-cell="c-52-2"><span class="cell__label">c-52-2</span><span class="cell__value">46.99</span><span class="cell__tint" style="background:#08db4a"></span></div>
        <div class="cell" data-cell="c-52-3"><span class="cell__label">c-52-3</span><span class="cell__value">5.38</span><span class="cell__tint" style="background:#cb9d53"></span></div>
        <div class="cell" data-cell="c-52-4"><span class="cell__label">c-52-4</span><span class="cell__value">98.89</span><span class="cell__tint" style="background:#b549e0"></span></div>
        <div class="cell" data-cell="c-52-5"><span class="cell__label">c-52-5</span><span class="cell__value">41.37</span><span class="cell__tint" style="background:#fab677"></span></div>
        <div class="cell" data-cell="c-52-6"><span class="cell__label">c-52-6</span><span class="cell__value">96.81</span><span class="cell__tint" style="background:#ae76b7"></span></div>
        <div class="cell" data-cell="c-52-7"><span class="cell__label">c-52-7</span><span class="cell__value">1.97</span><span class="cell__tint" style="background:#43ac86"></span></div>
        <div class="cell" data-cell="c-52-8"><span class="cell__label">c-52-8</span><span class="cell__value">86.72</span><span class="cell__tint" style="background:#02f01d"></span></div>
        <div class="cell" data-cell="c-52-9"><span class="cell__label">c-52-9</span><span class="cell__value">81.98</span><span class="cell__tint" style="background:#5c50a8"></span></div>
        <div class="cell" data-cell="c-52-10"><span class="cell__label">c-52-10</span><span class="cell__value">4.54</span><span class="cell__tint" style="background:#4ec31b"></span></div>
        <div class="cell" data-cell="c-52-11"><span class="cell__label">c-52-11</span><span class="cell__value">3.21</span><span class="cell__tint" style="background:#bf629e"></span></div>
        <div class="cell" data-cell="c-52-12"><span class="cell__label">c-52-12</span><span class="cell__value">80.94</span><span class="cell__tint" style="background:#261ed2"></span></div>
        <div class="cell" data-cell="c-52-13"><span class="cell__label">c-52-13</span><span class="cell__value">25.19</span><span class="cell__tint" style="background:#728ef8"></span></div>
        <div class="cell" data-cell="c-52-14"><span class="cell__label">c-52-14</span><span class="cell__value">96.28</span><span class="cell__tint" style="background:#19047b"></span></div>
        <div class="cell" data-cell="c-52-15"><span class="cell__label">c-52-15</span><span class="cell__value">32.82</span><span class="cell__tint" style="background:#4c8905"></span></div>
        <div class="cell" data-cell="c-52-16"><span class="cell__label">c-52-16</span><span class="cell__value">76.46</span><span class="cell__tint" style="background:#13a934"></span></div>
        <div class="cell" data-cell="c-52-17"><span class="cell__label">c-52-17</span><span class="cell__value">62.49</span><span class="cell__tint" style="background:#d7e655"></span></div>
        <div class="cell" data-cell="c-52-18"><span class="cell__label">c-52-18</span><span class="cell__value">48.03</span><span class="cell__tint" style="background:#08f778"></span></div>
        <div class="cell" data-cell="c-52-19"><span class="cell__label">c-52-19</span><span class="cell__value">81.86</span><span class="cell__tint" style="background:#40b490"></span></div>
      </div>
      <div class="row" data-row="r-53">
        <div class="cell" data-cell="c-53-0"><span class="cell__label">c-53-0</span><span class="cell__value">20.54</span><span class="cell__tint" style="background:#0172f0"></span></div>
        <div class="cell" data-cell="c-53-1"><span class="cell__label">c-53-1</span><span class="cell__value">56.31</span><span class="cell__tint" style="background:#8ec0ba"></span></div>
        <div class="cell" data-cell="c-53-2"><span class="cell__label">c-53-2</span><span class="cell__value">80.03</span><span class="cell__tint" style="background:#4ec183"></span></div>
        <div class="cell" data-cell="c-53-3"><span class="cell__label">c-53-3</span><span class="cell__value">21.51</span><span class="cell__tint" style="background:#fc394d"></span></div>
        <div class="cell" data-cell="c-53-4"><span class="cell__label">c-53-4</span><span class="cell__value">50.71</span><span class="cell__tint" style="background:#345ae8"></span></div>
        <div class="cell" data-cell="c-53-5"><span class="cell__label">c-53-5</span><span class="cell__value">52.91</span><span class="cell__tint" style="background:#8f31e3"></span></div>
        <div class="cell" data-cell="c-53-6"><span class="cell__label">c-53-6</span><span class="cell__value">30.98</span><span class="cell__tint" style="background:#fc5085"></span></div>
        <div class="cell" data-cell="c-53-7"><span class="cell__label">c-53-7</span><span class="cell__value">40.68</span><span class="cell__tint" style="background:#d2320e"></span></div>
        <div class="cell" data-cell="c-53-8"><span class="cell__label">c-53-8</span><span class="cell__value">48.00</span><span class="cell__tint" style="background:#302fc5"></span></div>
        <div class="cell" data-cell="c-53-9"><span class="cell__label">c-53-9</span><span class="cell__value">3.81</span><span class="cell__tint" style="background:#f80c1e"></span></div>
        <div class="cell" data-cell="c-53-10"><span class="cell__label">c-53-10</span><span class="cell__value">41.63</span><span class="cell__tint" style="background:#4c8e90"></span></div>
        <div class="cell" data-cell="c-53-11"><span class="cell__label">c-53-11</span><span class="cell__value">92.07</span><span class="cell__tint" style="background:#27c0c7"></span></div>
        <div class="cell" data-cell="c-53-12"><span class="cell__label">c-53-12</span><span class="cell__value">48.33</span><span class="cell__tint" style="background:#d91648"></span></div>
        <div class="cell" data-cell="c-53-13"><span class="cell__label">c-53-13</span><span class="cell__value">60.85</span><span class="cell__tint" style="background:#961bb5"></span></div>
        <div class="cell" data-cell="c-53-14"><span class="cell__label">c-53-14</span><span class="cell__value">30.26</span><span class="cell__tint" style="background:#ee2534"></span></div>
        <div class="cell" data-cell="c-53-15"><span class="cell__label">c-53-15</span><span class="cell__value">41.98</span><span class="cell__tint" style="background:#cd980e"></span></div>
        <div class="cell" data-cell="c-53-16"><span class="cell__label">c-53-16</span><span class="cell__value">79.02</span><span class="cell__tint" style="background:#898e78"></span></div>
        <div class="cell" data-cell="c-53-17"><span class="cell__label">c-53-17</span><span class="cell__value">22.11</span><span class="cell__tint" style="background:#57d316"></span></div>
        <div class="cell" data-cell="c-53-18"><span class="cell__label">c-53-18</span><span class="cell__value">98.62</span><span class="cell__tint" style="background:#d59b5c"></span></div>
        <div class="cell" data-cell="c-53-19"><span class="cell__label">c-53-19</span><span class="cell__value">63.20</span><span class="cell__tint" style="background:#78656e"></span></div>
      </div>
      <div class="row" data-row="r-54">
        <div class="cell" data-cell="c-54-0"><span class="cell__label">c-54-0</span><span class="cell__value">54.71</span><span class="cell__tint" style="background:#9ebf53"></span></div>
        <div class="cell" data-cell="c-54-1"><span class="cell__label">c-54-1</span><span class="cell__value">96.63</span><span class="cell__tint" style="background:#ffef9a"></span></div>
        <div class="cell" data-cell="c-54-2"><span class="cell__label">c-54-2</span><span class="cell__value">10.92</span><span class="cell__tint" style="background:#1cef7a"></span></div>
        <div class="cell" data-cell="c-54-3"><span class="cell__label">c-54-3</span><span class="cell__value">55.33</span><span class="cell__tint" style="background:#e0b61f"></span></div>
        <div class="cell" data-cell="c-54-4"><span class="cell__label">c-54-4</span><span class="cell__value">55.03</span><span class="cell__tint" style="background:#d2ae15"></span></div>
        <div class="cell" data-cell="c-54-5"><span class="cell__label">c-54-5</span><span class="cell__value">12.87</span><span class="cell__tint" style="background:#4417c7"></span></div>
        <div class="cell" data-cell="c-54-6"><span class="cell__label">c-54-6</span><span class="cell__value">21.01</span><span class="cell__tint" style="background:#f27406"></span></div>
        <div class="cell" data-cell="c-54-7"><span class="cell__label">c-54-7</span><span class="cell__value">22.57</span><span class="cell__tint" style="background:#cd12af"></span></div>
        <div class="cell" data-cell="c-54-8"><span class="cell__label">c-54-8</span><span class="cell__value">41.49</span><span class="cell__tint" style="background:#4da56e"></span></div>
        <div class="cell" data-cell="c-54-9"><span class="cell__label">c-54-9</span><span class="cell__value">97.95</span><span class="cell__tint" style="background:#bf6ded"></span></div>
        <div class="cell" data-cell="c-54-10"><span class="cell__label">c-54-10</span><span class="cell__value">68.22</span><span class="cell__tint" style="background:#7591e6"></span></div>
        <div class="cell" data-cell="c-54-11"><span class="cell__label">c-54-11</span><span class="cell__value">19.30</span><span class="cell__tint" style="background:#938618"></span></div>
        <div class="cell" data-cell="c-54-12"><span class="cell__label">c-54-12</span><span class="cell__value">18.43</span><span class="cell__tint" style="background:#0cebb9"></span></div>
        <div class="cell" data-cell="c-54-13"><span class="cell__label">c-54-13</span><span class="cell__value">97.23</span><span class="cell__tint" style="background:#5299e2"></span></div>
        <div class="cell" data-cell="c-54-14"><span class="cell__label">c-54-14</span><span class="cell__value">24.98</span><span class="cell__tint" style="background:#95f80a"></span></div>
        <div class="cell" data-cell="c-54-15"><span class="cell__label">c-54-15</span><span class="cell__value">21.43</span><span class="cell__tint" style="background:#b92d87"></span></div>
        <div class="cell" data-cell="c-54-16"><span class="cell__label">c-54-16</span><span class="cell__value">76.38</span><span class="cell__tint" style="background:#6ed2a7"></span></div>
        <div class="cell" data-cell="c-54-17"><span class="cell__label">c-54-17</span><span class="cell__value">20.23</span><span class="cell__tint" style="background:#b85e7c"></span></div>
        <div class="cell" data-cell="c-54-18"><span class="cell__label">c-54-18</span><span class="cell__value">29.56</span><span class="cell__tint" style="background:#56ec04"></span></div>
        <div class="cell" data-cell="c-54-19"><span class="cell__label">c-54-19</span><span class="cell__value">65.72</span><span class="cell__tint" style="background:#912580"></span></div>
      </div>
      <div class="row" data-row="r-55">
        <div class="cell" data-cell="c-55-0"><span class="cell__label">c-55-0</span><span class="cell__value">90.00</span><span class="cell__tint" style="background:#d589ba"></span></div>
        <div class="cell" data-cell="c-55-1"><span class="cell__label">c-55-1</span><span class="cell__value">37.38</span><span class="cell__tint" style="background:#2c8431"></span></div>
        <div class="cell" data-cell="c-55-2"><span class="cell__label">c-55-2</span><span class="cell__value">90.48</span><span class="cell__tint" style="background:#6acf15"></span></div>
        <div class="cell" data-cell="c-55-3"><span class="cell__label">c-55-3</span><span class="cell__value">10.47</span><span class="cell__tint" style="background:#aa30c3"></span></div>
        <div class="cell" data-cell="c-55-4"><span class="cell__label">c-55-4</span><span class="cell__value">90.43</span><span class="cell__tint" style="background:#036e31"></span></div>
        <div class="cell" data-cell="c-55-5"><span class="cell__label">c-55-5</span><span class="cell__value">65.51</span><span class="cell__tint" style="background:#3710f5"></span></div>
        <div class="cell" data-cell="c-55-6"><span class="cell__label">c-55-6</span><span class="cell__value">44.22</span><span class="cell__tint" style="background:#3d763d"></span></div>
        <div class="cell" data-cell="c-55-7"><span class="cell__label">c-55-7</span><span class="cell__value">72.92</span><span class="cell__tint" style="background:#5b8114"></span></div>
        <div class="cell" data-cell="c-55-8"><span class="cell__label">c-55-8</span><span class="cell__value">24.57</span><span class="cell__tint" style="background:#b84d9d"></span></div>
        <div class="cell" data-cell="c-55-9"><span class="cell__label">c-55-9</span><span class="cell__value">23.95</span><span class="cell__tint" style="background:#ba9526"></span></div>
        <div class="cell" data-cell="c-55-10"><span class="cell__label">c-55-10</span><span class="cell__value">22.83</span><span class="cell__tint" style="background:#aaabdd"></span></div>
        <div class="cell" data-cell="c-55-11"><span class="cell__label">c-55-11</span><span class="cell__value">29.17</span><span class="cell__tint" style="background:#9e1c94"></span></div>
        <div class="cell" data-cell="c-55-12"><span class="cell__label">c-55-12</span><span class="cell__value">18.61</span><span class="cell__tint" style="background:#ae52c6"></span></div>
        <div class="cell" data-cell="c-55-13"><span class="cell__label">c-55-13</span><span class="cell__value">96.60</span><span class="cell__tint" style="background:#71c4d3"></span></div>
        <div class="cell" data-cell="c-55-14"><span class="cell__label">c-55-14</span><span class="cell__value">9.46</span><span class="cell__tint" style="background:#2db7e3"></span></div>
        <div class="cell" data-cell="c-55-15"><span class="cell__label">c-55-15</span><span class="cell__value">98.54</span><span class="cell__tint" style="background:#5211b8"></span></div>
        <div class="cell" data-cell="c-55-16"><span class="cell__label">c-55-16</span><span class="cell__value">40.92</span><span class="cell__tint" style="background:#b0edff"></span></div>
        <div class="cell" data-cell="c-55-17"><span class="cell__label">c-55-17</span><span class="cell__value">66.20</span><span class="cell__tint" style="background:#02e0b2"></span></div>
        <div class="cell" data-cell="c-55-18"><span class="cell__label">c-55-18</span><span class="cell__value">16.95</span><span class="cell__tint" style="background:#940813"></span></div>
        <div class="cell" data-cell="c-55-19"><span class="cell__label">c-55-19</span><span class="cell__value">13.83</span><span class="cell__tint" style="background:#373312"></span></div>
      </div>
      <div class="row" data-row="r-56">
        <div class="cell" data-cell="c-56-0"><span class="cell__label">c-56-0</span><span class="cell__value">46.23</span><span class="cell__tint" style="background:#89d987"></span></div>
        <div class="cell" data-cell="c-56-1"><span class="cell__label">c-56-1</span><span class="cell__value">24.12</span><span class="cell__tint" style="background:#340bf7"></span></div>
        <div class="cell" data-cell="c-56-2"><span class="cell__label">c-56-2</span><span class="cell__value">91.52</span><span class="cell__tint" style="background:#28509c"></span></div>
        <div class="cell" data-cell="c-56-3"><span class="cell__label">c-56-3</span><span class="cell__value">16.83</span><span class="cell__tint" style="background:#897b1d"></span></div>
        <div class="cell" data-cell="c-56-4"><span class="cell__label">c-56-4</span><span class="cell__value">77.71</span><span class="cell__tint" style="background:#88fa6a"></span></div>
        <div class="cell" data-cell="c-56-5"><span class="cell__label">c-56-5</span><span class="cell__value">1.03</span><span class="cell__tint" style="background:#8381cc"></span></div>
        <div class="cell" data-cell="c-56-6"><span class="cell__label">c-56-6</span><span class="cell__value">85.54</span><span class="cell__tint" style="background:#84cf83"></span></div>
        <div class="cell" data-cell="c-56-7"><span class="cell__label">c-56-7</span><span class="cell__value">43.58</span><span class="cell__tint" style="background:#033640"></span></div>
        <div class="cell" data-cell="c-56-8"><span class="cell__label">c-56-8</span><span class="cell__value">15.67</span><span class="cell__tint" style="background:#aed04c"></span></div>
        <div class="cell" data-cell="c-56-9"><span class="cell__label">c-56-9</span><span class="cell__value">38.38</span><span class="cell__tint" style="background:#472e4d"></span></div>
        <div class="cell" data-cell="c-56-10"><span class="cell__label">c-56-10</span><span class="cell__value">66.81</span><span class="cell__tint" style="background:#afc241"></span></div>
        <div class="cell" data-cell="c-56-11"><span class="cell__label">c-56-11</span><span class="cell__value">40.84</span><span class="cell__tint" style="background:#bd56bf"></span></div>
        <div class="cell" data-cell="c-56-12"><span class="cell__label">c-56-12</span><span class="cell__value">49.67</span><span class="cell__tint" style="background:#ef502e"></span></div>
        <div class="cell" data-cell="c-56-13"><span class="cell__label">c-56-13</span><span class="cell__value">38.84</span><span class="cell__tint" style="background:#1fa620"></span></div>
        <div class="cell" data-cell="c-56-14"><span class="cell__label">c-56-14</span><span class="cell__value">95.16</span><span class="cell__tint" style="background:#bea690"></span></div>
        <div class="cell" data-cell="c-56-15"><span class="cell__label">c-56-15</span><span class="cell__value">55.76</span><span class="cell__tint" style="background:#e73413"></span></div>
        <div class="cell" data-cell="c-56-16"><span class="cell__label">c-56-16</span><span class="cell__value">65.72</span><span class="cell__tint" style="background:#22f82c"></span></div>
        <div class="cell" data-cell="c-56-17"><span class="cell__label">c-56-17</span><span class="cell__value">42.15</span><span class="cell__tint" style="background:#3e3ccb"></span></div>
        <div class="cell" data-cell="c-56-18"><span class="cell__label">c-56-18</span><span class="cell__value">59.92</span><span class="cell__tint" style="background:#eb8759"></span></div>
        <div class="cell" data-cell="c-56-19"><span class="cell__label">c-56-19</span><span class="cell__value">25.50</span><span class="cell__tint" style="background:#2fd60c"></span></div>
      </div>
      <div class="row" data-row="r-57">
        <div class="cell" data-cell="c-57-0"><span class="cell__label">c-57-0</span><span class="cell__value">20.34</span><span class="cell__tint" style="background:#f4cac5"></span></div>
        <div class="cell" data-cell="c-57-1"><span class="cell__label">c-57-1</span><span class="cell__value">53.82</span><span class="cell__tint" style="background:#405a2f"></span></div>
        <div class="cell" data-cell="c-57-2"><span class="cell__label">c-57-2</span><span class="cell__value">30.83</span><span class="cell__tint" style="background:#a6e231"></span></div>
        <div class="cell" data-cell="c-57-3"><span class="cell__label">c-57-3</span><span class="cell__value">77.08</span><span class="cell__tint" style="background:#d8b1aa"></span></div>
        <div class="cell" data-cell="c-57-4"><span class="cell__label">c-57-4</span><span class="cell__value">79.49</span><span class="cell__tint" style="background:#f02422"></span></div>
        <div class="cell" data-cell="c-57-5"><span class="cell__label">c-57-5</span><span class="cell__value">48.06</span><span class="cell__tint" style="background:#edd4c3"></span></div>
        <div class="cell" data-cell="c-57-6"><span class="cell__label">c-57-6</span><span class="cell__value">10.05</span><span class="cell__tint" style="background:#f5be0b"></span></div>
        <div class="cell" data-cell="c-57-7"><span class="cell__label">c-57-7</span><span class="cell__value">61.28</span><span class="cell__tint" style="background:#939f07"></span></div>
        <div class="cell" data-cell="c-57-8"><span class="cell__label">c-57-8</span><span class="cell__value">52.64</span><span class="cell__tint" style="background:#7c8314"></span></div>
        <div class="cell" data-cell="c-57-9"><span class="cell__label">c-57-9</span><span class="cell__value">3.92</span><span class="cell__tint" style="background:#640fd3"></span></div>
        <div class="cell" data-cell="c-57-10"><span class="cell__label">c-57-10</span><span class="cell__value">56.67</span><span class="cell__tint" style="background:#0115f6"></span></div>
        <div class="cell" data-cell="c-57-11"><span class="cell__label">c-57-11</span><span class="cell__value">49.51</span><span class="cell__tint" style="background:#69dc99"></span></div>
        <div class="cell" data-cell="c-57-12"><span class="cell__label">c-57-12</span><span class="cell__value">71.68</span><span class="cell__tint" style="background:#0ee87c"></span></div>
        <div class="cell" data-cell="c-57-13"><span class="cell__label">c-57-13</span><span class="cell__value">7.97</span><span class="cell__tint" style="background:#28714d"></span></div>
        <div class="cell" data-cell="c-57-14"><span class="cell__label">c-57-14</span><span class="cell__value">95.45</span><span class="cell__tint" style="background:#e59a47"></span></div>
        <div class="cell" data-cell="c-57-15"><span class="cell__label">c-57-15</span><span class="cell__value">42.09</span><span class="cell__tint" style="background:#9c945e"></span></div>
        <div class="cell" data-cell="c-57-16"><span class="cell__label">c-57-16</span><span class="cell__value">8.98</span><span class="cell__tint" style="background:#2c5600"></span></div>
        <div class="cell" data-cell="c-57-17"><span class="cell__label">c-57-17</span><span class="cell__value">87.52</span><span class="cell__tint" style="background:#7efa7c"></span></div>
        <div class="cell" data-cell="c-57-18"><span class="cell__label">c-57-18</span><span class="cell__value">34.38</span><span class="cell__tint" style="background:#f2a72e"></span></div>
        <div class="cell" data-cell="c-57-19"><span class="cell__label">c-57-19</span><span class="cell__value">46.95</span><span class="cell__tint" style="background:#c09258"></span></div>
      </div>
      <div class="row" data-row="r-58">
        <div class="cell" data-cell="c-58-0"><span class="cell__label">c-58-0</span><span class="cell__value">94.07</span><span class="cell__tint" style="background:#2bab4e"></span></div>
        <div class="cell" data-cell="c-58-1"><span class="cell__label">c-58-1</span><span class="cell__value">43.22</span><span class="cell__tint" style="background:#be8679"></span></div>
        <div class="cell" data-cell="c-58-2"><span class="cell__label">c-58-2</span><span class="cell__value">95.41</span><span class="cell__tint" style="background:#7f7395"></span></div>
        <div class="cell" data-cell="c-58-3"><span class="cell__label">c-58-3</span><span class="cell__value">50.40</span><span class="cell__tint" style="background:#8c7000"></span></div>
        <div class="cell" data-cell="c-58-4"><span class="cell__label">c-58-4</span><span class="cell__value">20.93</span><span class="cell__tint" style="background:#60f246"></span></div>
        <div class="cell" data-cell="c-58-5"><span class="cell__label">c-58-5</span><span class="cell__value">50.90</span><span class="cell__tint" style="background:#4d83fe"></span></div>
        <div class="cell" data-cell="c-58-6"><span class="cell__label">c-58-6</span><span class="cell__value">3.42</span><span class="cell__tint" style="background:#575b3d"></span></div>
        <div class="cell" data-cell="c-58-7"><span class="cell__label">c-58-7</span><span class="cell__value">70.34</span><span class="cell__tint" style="background:#b3df97"></span></div>
        <div class="cell" data-cell="c-58-8"><span class="cell__label">c-58-8</span><span class="cell__value">17.20</span><span class="cell__tint" style="background:#6ddfeb"></span></div>
        <div class="cell" data-cell="c-58-9"><span class="cell__label">c-58-9</span><span class="cell__value">89.69</span><span class="cell__tint" style="background:#1e6421"></span></div>
        <div class="cell" data-cell="c-58-10"><span class="cell__label">c-58-10</span><span class="cell__value">89.87</span><span class="cell__tint" style="background:#772951"></span></div>
        <div class="cell" data-cell="c-58-11"><span class="cell__label">c-58-11</span><span class="cell__value">70.78</span><span class="cell__tint" style="background:#7ec1fa"></span></div>
        <div class="cell" data-cell="c-58-12"><span class="cell__label">c-58-12</span><span class="cell__value">58.29</span><span class="cell__tint" style="background:#ee6beb"></span></div>
        <div class="cell" data-cell="c-58-13"><span class="cell__label">c-58-13</span><span class="cell__value">73.69</span><span class="cell__tint" style="background:#025d2c"></span></div>
        <div class="cell" data-cell="c-58-14"><span class="cell__label">c-58-14</span><span class="cell__value">97.45</span><span class="cell__tint" style="background:#8131f1"></span></div>
        <div class="cell" data-cell="c-58-15"><span class="cell__label">c-58-15</span><span class="cell__value">11.18</span><span class="cell__tint" style="background:#a5cff8"></span></div>
        <div class="cell" data-cell="c-58-16"><span class="cell__label">c-58-16</span><span class="cell__value">10.30</span><span class="cell__tint" style="background:#1adf67"></span></div>
        <div class="cell" data-cell="c-58-17"><span class="cell__label">c-58-17</span><span class="cell__value">14.41</span><span class="cell__tint" style="background:#879bc6"></span></div>
        <div class="cell" data-cell="c-58-18"><span class="cell__label">c-58-18</span><span class="cell__value">19.93</span><span class="cell__tint" style="background:#3b7be1"></span></div>
        <div class="cell" data-cell="c-58-19"><span class="cell__label">c-58-19</span><span class="cell__value">88.52</span><span class="cell__tint" style="background:#b6ee04"></span></div>
      </div>
      <div class="row" data-row="r-59">
        <div class="cell" data-cell="c-59-0"><span class="cell__label">c-59-0</span><span class="cell__value">50.85</span><span class="cell__tint" style="background:#810e43"></span></div>
        <div class="cell" data-cell="c-59-1"><span class="cell__label">c-59-1</span><span class="cell__value">71.97</span><span class="cell__tint" style="background:#1e01f6"></span></div>
        <div class="cell" data-cell="c-59-2"><span class="cell__label">c-59-2</span><span class="cell__value">77.76</span><span class="cell__tint" style="background:#3e546c"></span></div>
        <div class="cell" data-cell="c-59-3"><span class="cell__label">c-59-3</span><span class="cell__value">50.76</span><span class="cell__tint" style="background:#ad5a85"></span></div>
        <div class="cell" data-cell="c-59-4"><span class="cell__label">c-59-4</span><span class="cell__value">77.24</span><span class="cell__tint" style="background:#47c496"></span></div>
        <div class="cell" data-cell="c-59-5"><span class="cell__label">c-59-5</span><span class="cell__value">96.11</span><span class="cell__tint" style="background:#e05336"></span></div>
        <div class="cell" data-cell="c-59-6"><span class="cell__label">c-59-6</span><span class="cell__value">43.60</span><span class="cell__tint" style="background:#985482"></span></div>
        <div class="cell" data-cell="c-59-7"><span class="cell__label">c-59-7</span><span class="cell__value">77.95</span><span class="cell__tint" style="background:#114fa1"></span></div>
        <div class="cell" data-cell="c-59-8"><span class="cell__label">c-59-8</span><span class="cell__value">14.14</span><span class="cell__tint" style="background:#0748e9"></span></div>
        <div class="cell" data-cell="c-59-9"><span class="cell__label">c-59-9</span><span class="cell__value">39.14</span><span class="cell__tint" style="background:#8a33ae"></span></div>
        <div class="cell" data-cell="c-59-10"><span class="cell__label">c-59-10</span><span class="cell__value">93.19</span><span class="cell__tint" style="background:#e7c98d"></span></div>
        <div class="cell" data-cell="c-59-11"><span class="cell__label">c-59-11</span><span class="cell__value">69.03</span><span class="cell__tint" style="background:#f5d5bd"></span></div>
        <div class="cell" data-cell="c-59-12"><span class="cell__label">c-59-12</span><span class="cell__value">34.55</span><span class="cell__tint" style="background:#d56e9a"></span></div>
        <div class="cell" data-cell="c-59-13"><span class="cell__label">c-59-13</span><span class="cell__value">29.11</span><span class="cell__tint" style="background:#fee176"></span></div>
        <div class="cell" data-cell="c-59-14"><span class="cell__label">c-59-14</span><span class="cell__value">99.30</span><span class="cell__tint" style="background:#5df447"></span></div>
        <div class="cell" data-cell="c-59-15"><span class="cell__label">c-59-15</span><span class="cell__value">48.65</span><span class="cell__tint" style="background:#06ed5b"></span></div>
        <div class="cell" data-cell="c-59-16"><span class="cell__label">c-59-16</span><span class="cell__value">57.85</span><span class="cell__tint" style="background:#bb14a4"></span></div>
        <div class="cell" data-cell="c-59-17"><span class="cell__label">c-59-17</span><span class="cell__value">82.92</span><span class="cell__tint" style="background:#72b9a5"></span></div>
        <div class="cell" data-cell="c-59-18"><span class="cell__label">c-59-18</span><span class="cell__value">61.12</span><span class="cell__tint" style="background:#f65d79"></span></div>
        <div class="cell" data-cell="c-59-19"><span class="cell__label">c-59-19</span><span class="cell__value">28.98</span><span class="cell__tint" style="background:#ee3bff"></span></div>
      </div>
      <div class="row" data-row="r-60">
        <div class="cell" data-cell="c-60-0"><span class="cell__label">c-60-0</span><span class="cell__value">37.85</span><span class="cell__tint" style="background:#6d7ccd"></span></div>
        <div class="cell" data-cell="c-60-1"><span class="cell__label">c-60-1</span><span class="cell__value">93.16</span><span class="cell__tint" style="background:#d93ac4"></span></div>
        <div class="cell" data-cell="c-60-2"><span class="cell__label">c-60-2</span><span class="cell__value">44.44</span><span class="cell__tint" style="background:#0e6abb"></span></div>
        <div class="cell" data-cell="c-60-3"><span class="cell__label">c-60-3</span><span class="cell__value">52.60</span><span class="cell__tint" style="background:#91f481"></span></div>
        <div class="cell" data-cell="c-60-4"><span class="cell__label">c-60-4</span><span class="cell__value">67.94</span><span class="cell__tint" style="background:#939408"></span></div>
        <div class="cell" data-cell="c-60-5"><span class="cell__label">c-60-5</span><span class="cell__value">30.82</span><span class="cell__tint" style="background:#846556"></span></div>
        <div class="cell" data-cell="c-60-6"><span class="cell__label">c-60-6</span><span class="cell__value">14.51</span><span class="cell__tint" style="background:#983db5"></span></div>
        <div class="cell" data-cell="c-60-7"><span class="cell__label">c-60-7</span><span class="cell__value">82.27</span><span class="cell__tint" style="background:#e5d02f"></span></div>
        <div class="cell" data-cell="c-60-8"><span class="cell__label">c-60-8</span><span class="cell__value">84.38</span><span class="cell__tint" style="background:#92e515"></span></div>
        <div class="cell" data-cell="c-60-9"><span class="cell__label">c-60-9</span><span class="cell__value">44.03</span><span class="cell__tint" style="background:#567597"></span></div>
        <div class="cell" data-cell="c-60-10"><span class="cell__label">c-60-10</span><span class="cell__value">90.42</span><span class="cell__tint" style="background:#f2c8f0"></span></div>
        <div class="cell" data-cell="c-60-11"><span class="cell__label">c-60-11</span><span class="cell__value">2.69</span><span class="cell__tint" style="background:#cd01d8"></span></div>
        <div class="cell" data-cell="c-60-12"><span class="cell__label">c-60-12</span><span class="cell__value">60.60</span><span class="cell__tint" style="background:#6d594a"></span></div>
        <div class="cell" data-cell="c-60-13"><span class="cell__label">c-60-13</span><span class="cell__value">81.12</span><span class="cell__tint" style="background:#4fdc88"></span></div>
        <div class="cell" data-cell="c-60-14"><span class="cell__label">c-60-14</span><span class="cell__value">69.05</span><span class="cell__tint" style="background:#caa7f3"></span></div>
        <div class="cell" data-cell="c-60-15"><span class="cell__label">c-60-15</span><span class="cell__value">83.96</span><span class="cell__tint" style="background:#9c4e7a"></span></div>
        <div class="cell" data-cell="c-60-16"><span class="cell__label">c-60-16</span><span class="cell__value">23.32</span><span class="cell__tint" style="background:#b94287"></span></div>
        <div class="cell" data-cell="c-60-17"><span class="cell__label">c-60-17</span><span class="cell__value">38.17</span><span class="cell__tint" style="background:#f07670"></span></div>
        <div class="cell" data-cell="c-60-18"><span class="cell__label">c-60-18</span><span class="cell__value">34.30</span><span class="cell__tint" style="background:#cdc6de"></span></div>
        <div class="cell" data-cell="c-60-19"><span class="cell__label">c-60-19</span><span class="cell__value">37.55</span><span class="cell__tint" style="background:#29adfa"></span></div>
      </div>
      <div class="row" data-row="r-61">
        <div class="cell" data-cell="c-61-0"><span class="cell__label">c-61-0</span><span class="cell__value">66.01</span><span class="cell__tint" style="background:#29adf9"></span></div>
        <div class="cell" data-cell="c-61-1"><span class="cell__label">c-61-1</span><span class="cell__value">40.29</span><span class="cell__tint" style="background:#bc6f13"></span></div>
        <div class="cell" data-cell="c-61-2"><span class="cell__label">c-61-2</span><span class="cell__value">90.23</span><span class="cell__tint" style="background:#1ec4e1"></span></div>
        <div class="cell" data-cell="c-61-3"><span class="cell__label">c-61-3</span><span class="cell__value">97.93</span><span class="cell__tint" style="background:#cd5ab6"></span></div>
        <div class="cell" data-cell="c-61-4"><span class="cell__label">c-61-4</span><span class="cell__value">4.11</span><span class="cell__tint" style="background:#ce7d21"></span></div>
        <div class="cell" data-cell="c-61-5"><span class="cell__label">c-61-5</span><span class="cell__value">78.79</span><span class="cell__tint" style="background:#c7b2ea"></span></div>
        <div class="cell" data-cell="c-61-6"><span class="cell__label">c-61-6</span><span class="cell__value">54.12</span><span class="cell__tint" style="background:#7dbe93"></span></div>
        <div class="cell" data-cell="c-61-7"><span class="cell__label">c-61-7</span><span class="cell__value">47.99</span><span class="cell__tint" style="background:#84d229"></span></div>
        <div class="cell" data-cell="c-61-8"><span class="cell__label">c-61-8</span><span class="cell__value">83.17</span><span class="cell__tint" style="background:#ea17fb"></span></div>
        <div class="cell" data-cell="c-61-9"><span class="cell__label">c-61-9</span><span class="cell__value">43.93</span><span class="cell__tint" style="background:#b92c6a"></span></div>
        <div class="cell" data-cell="c-61-10"><span class="cell__label">c-61-10</span><span class="cell__value">16.03</span><span class="cell__tint" style="background:#6b667b"></span></div>
        <div class="cell" data-cell="c-61-11"><span class="cell__label">c-61-11</span><span class="cell__value">21.00</span><span class="cell__tint" style="background:#0864e4"></span></div>
        <div class="cell" data-cell="c-61-12"><span class="cell__label">c-61-12</span><span class="cell__value">2.50</span><span class="cell__tint" style="background:#47be4a"></span></div>
        <div class="cell" data-cell="c-61-13"><span class="cell__label">c-61-13</span><span class="cell__value">38.07</span><span class="cell__tint" style="background:#a3be7c"></span></div>
        <div class="cell" data-cell="c-61-14"><span class="cell__label">c-61-14</span><span class="cell__value">1.52</span><span class="cell__tint" style="background:#ff477a"></span></div>
        <div class="cell" data-cell="c-61-15"><span class="cell__label">c-61-15</span><span class="cell__value">56.27</span><span class="cell__tint" style="background:#ffc57a"></span></div>
        <div class="cell" data-cell="c-61-16"><span class="cell__label">c-61-16</span><span class="cell__value">90.65</span><span class="cell__tint" style="background:#08b97d"></span></div>
        <div class="cell" data-cell="c-61-17"><span class="cell__label">c-61-17</span><span class="cell__value">62.78</span><span class="cell__tint" style="background:#c65bb1"></span></div>
        <div class="cell" data-cell="c-61-18"><span class="cell__label">c-61-18</span><span class="cell__value">40.21</span><span class="cell__tint" style="background:#13a0d8"></span></div>
        <div class="cell" data-cell="c-61-19"><span class="cell__label">c-61-19</span><span class="cell__value">53.66</span><span class="cell__tint" style="background:#77d854"></span></div>
      </div>
      <div class="row" data-row="r-62">
        <div class="cell" data-cell="c-62-0"><span class="cell__label">c-62-0</span><span class="cell__value">61.73</span><span class="cell__tint" style="background:#b5b663"></span></div>
        <div class="cell" data-cell="c-62-1"><span class="cell__label">c-62-1</span><span class="cell__value">32.70</span><span class="cell__tint" style="background:#e9a7ab"></span></div>
        <div class="cell" data-cell="c-62-2"><span class="cell__label">c-62-2</span><span class="cell__value">46.24</span><span class="cell__tint" style="background:#87329d"></span></div>
        <div class="cell" data-cell="c-62-3"><span class="cell__label">c-62-3</span><span class="cell__value">87.29</span><span class="cell__tint" style="background:#790731"></span></div>
        <div class="cell" data-cell="c-62-4"><span class="cell__label">c-62-4</span><span class="cell__value">88.51</span><span class="cell__tint" style="background:#6aeb28"></span></div>
        <div class="cell" data-cell="c-62-5"><span class="cell__label">c-62-5</span><span class="cell__value">83.46</span><span class="cell__tint" style="background:#5f06eb"></span></div>
        <div class="cell" data-cell="c-62-6"><span class="cell__label">c-62-6</span><span class="cell__value">12.37</span><span class="cell__tint" style="background:#8a05dc"></span></div>
        <div class="cell" data-cell="c-62-7"><span class="cell__label">c-62-7</span><span class="cell__value">73.76</span><span class="cell__tint" style="background:#fdee0c"></span></div>
        <div class="cell" data-cell="c-62-8"><span class="cell__label">c-62-8</span><span class="cell__value">76.21</span><span class="cell__tint" style="background:#4a7bc3"></span></div>
        <div class="cell" data-cell="c-62-9"><span class="cell__label">c-62-9</span><span class="cell__value">5.76</span><span class="cell__tint" style="background:#51ab39"></span></div>
        <div class="cell" data-cell="c-62-10"><span class="cell__label">c-62-10</span><span class="cell__value">78.74</span><span class="cell__tint" style="background:#d6f128"></span></div>
        <div class="cell" data-cell="c-62-11"><span class="cell__label">c-62-11</span><span class="cell__value">70.77</span><span class="cell__tint" style="background:#6a9aee"></span></div>
        <div class="cell" data-cell="c-62-12"><span class="cell__label">c-62-12</span><span class="cell__value">5.23</span><span class="cell__tint" style="background:#18b020"></span></div>
        <div class="cell" data-cell="c-62-13"><span class="cell__label">c-62-13</span><span class="cell__value">20.99</span><span class="cell__tint" style="background:#4d0cb6"></span></div>
        <div class="cell" data-cell="c-62-14"><span class="cell__label">c-62-14</span><span class="cell__value">99.30</span><span class="cell__tint" style="background:#0bcf86"></span></div>
        <div class="cell" data-cell="c-62-15"><span class="cell__label">c-62-15</span><span class="cell__value">15.73</span><span class="cell__tint" style="background:#7df746"></span></div>
        <div class="cell" data-cell="c-62-16"><span class="cell__label">c-62-16</span><span class="cell__value">18.66</span><span class="cell__tint" style="background:#6e94a3"></span></div>
        <div class="cell" data-cell="c-62-17"><span class="cell__label">c-62-17</span><span class="cell__value">88.58</span><span class="cell__tint" style="background:#faae4e"></span></div>
        <div class="cell" data-cell="c-62-18"><span class="cell__label">c-62-18</span><span class="cell__value">9.66</span><span class="cell__tint" style="background:#0b5402"></span></div>
        <div class="cell" data-cell="c-62-19"><span class="cell__label">c-62-19</span><span class="cell__value">10.99</span><span class="cell__tint" style="background:#5a9f8d"></span></div>
      </div>
      <div class="row" data-row="r-63">
        <div class="cell" data-cell="c-63-0"><span class="cell__label">c-63-0</span><span class="cell__value">70.50</span><span class="cell__tint" style="background:#d5b0db"></span></div>
        <div class="cell" data-cell="c-63-1"><span class="cell__label">c-63-1</span><span class="cell__value">67.40</span><span class="cell__tint" style="background:#593515"></span></div>
        <div class="cell" data-cell="c-63-2"><span class="cell__label">c-63-2</span><span class="cell__value">85.82</span><span class="cell__tint" style="background:#c78139"></span></div>
        <div class="cell" data-cell="c-63-3"><span class="cell__label">c-63-3</span><span class="cell__value">90.63</span><span class="cell__tint" style="background:#4bd740"></span></div>
        <div class="cell" data-cell="c-63-4"><span class="cell__label">c-63-4</span><span class="cell__value">45.23</span><span class="cell__tint" style="background:#26a4ea"></span></div>
        <div class="cell" data-cell="c-63-5"><span class="cell__label">c-63-5</span><span class="cell__value">42.03</span><span class="cell__tint" style="background:#933f32"></span></div>
        <div class="cell" data-cell="c-63-6"><span class="cell__label">c-63-6</span><span class="cell__value">6.43</span><span class="cell__tint" style="background:#1c180e"></span></div>
        <div class="cell" data-cell="c-63-7"><span class="cell__label">c-63-7</span><span class="cell__value">61.89</span><span class="cell__tint" style="background:#7e1124"></span></div>
        <div class="cell" data-cell="c-63-8"><span class="cell__label">c-63-8</span><span class="cell__value">53.88</span><span class="cell__tint" style="background:#f17b54"></span></div>
        <div class="cell" data-cell="c-63-9"><span class="cell__label">c-63-9</span><span class="cell__value">32.45</span><span class="cell__tint" style="background:#4f6314"></span></div>
        <div class="cell" data-cell="c-63-10"><span class="cell__label">c-63-10</span><span class="cell__value">78.82</span><span class="cell__tint" style="background:#769c2a"></span></div>
        <div class="cell" data-cell="c-63-11"><span class="cell__label">c-63-11</span><span class="cell__value">58.91</span><span class="cell__tint" style="background:#a090ec"></span></div>
        <div class="cell" data-cell="c-63-12"><span class="cell__label">c-63-12</span><span class="cell__value">65.22</span><span class="cell__tint" style="background:#f55f94"></span></div>
        <div class="cell" data-cell="c-63-13"><span class="cell__label">c-63-13</span><span class="cell__value">5.74</span><span class="cell__tint" style="background:#eea623"></span></div>
        <div class="cell" data-cell="c-63-14"><span class="cell__label">c-63-14</span><span class="cell__value">5.40</span><span class="cell__tint" style="background:#2da87b"></span></div>
        <div class="cell" data-cell="c-63-15"><span class="cell__label">c-63-15</span><span class="cell__value">64.84</span><span class="cell__tint" style="background:#8895bb"></span></div>
        <div class="cell" data-cell="c-63-16"><span class="cell__label">c-63-16</span><span class="cell__value">80.35</span><span class="cell__tint" style="background:#35ce97"></span></div>
        <div class="cell" data-cell="c-63-17"><span class="cell__label">c-63-17</span><span class="cell__value">82.47</span><span class="cell__tint" style="background:#9b2277"></span></div>
        <div class="cell" data-cell="c-63-18"><span class="cell__label">c-63-18</span><span class="cell__value">96.62</span><span class="cell__tint" style="background:#0f8d1a"></span></div>
        <div class="cell" data-cell="c-63-19"><span class="cell__label">c-63-19</span><span class="cell__value">90.70</span><span class="cell__tint" style="background:#4c53c7"></span></div>
      </div>
      <div class="row" data-row="r-64">
        <div class="cell" data-cell="c-64-0"><span class="cell__label">c-64-0</span><span class="cell__value">38.24</span><span class="cell__tint" style="background:#677ab1"></span></div>
        <div class="cell" data-cell="c-64-1"><span class="cell__label">c-64-1</span><span class="cell__value">47.25</span><span class="cell__tint" style="background:#0b3f9f"></span></div>
        <div class="cell" data-cell="c-64-2"><span class="cell__label">c-64-2</span><span class="cell__value">39.77</span><span class="cell__tint" style="background:#9dd58e"></span></div>
        <div class="cell" data-cell="c-64-3"><span class="cell__label">c-64-3</span><span class="cell__value">7.67</span><span class="cell__tint" style="background:#571e6a"></span></div>
        <div class="cell" data-cell="c-64-4"><span class="cell__label">c-64-4</span><span class="cell__value">26.85</span><span class="cell__tint" style="background:#7f5596"></span></div>
        <div class="cell" data-cell="c-64-5"><span class="cell__label">c-64-5</span><span class="cell__value">17.71</span><span class="cell__tint" style="background:#fb7851"></span></div>
        <div class="cell" data-cell="c-64-6"><span class="cell__label">c-64-6</span><span class="cell__value">48.79</span><span class="cell__tint" style="background:#46698f"></span></div>
        <div class="cell" data-cell="c-64-7"><span class="cell__label">c-64-7</span><span class="cell__value">50.67</span><span class="cell__tint" style="background:#ff7a29"></span></div>
        <div class="cell" data-cell="c-64-8"><span class="cell__label">c-64-8</span><span class="cell__value">34.72</span><span class="cell__tint" style="background:#64840e"></span></div>
        <div class="cell" data-cell="c-64-9"><span class="cell__label">c-64-9</span><span class="cell__value">5.80</span><span class="cell__tint" style="background:#24fc22"></span></div>
        <div class="cell" data-cell="c-64-10"><span class="cell__label">c-64-10</span><span class="cell__value">36.08</span><span class="cell__tint" style="background:#8382e7"></span></div>
        <div class="cell" data-cell="c-64-11"><span class="cell__label">c-64-11</span><span class="cell__value">41.97</span><span class="cell__tint" style="background:#c5e9ca"></span></div>
        <div class="cell" data-cell="c-64-12"><span class="cell__label">c-64-12</span><span class="cell__value">34.09</span><span class="cell__tint" style="background:#e55f9c"></span></div>
        <div class="cell" data-cell="c-64-13"><span class="cell__label">c-64-13</span><span class="cell__value">28.78</span><span class="cell__tint" style="background:#40be6f"></span></div>
        <div class="cell" data-cell="c-64-14"><span class="cell__label">c-64-14</span><span class="cell__value">35.24</span><span class="cell__tint" style="background:#853ce3"></span></div>
        <div class="cell" data-cell="c-64-15"><span class="cell__label">c-64-15</span><span class="cell__value">36.66</span><span class="cell__tint" style="background:#a04338"></span></div>
        <div class="cell" data-cell="c-64-16"><span class="cell__label">c-64-16</span><span class="cell__value">19.19</span><span class="cell__tint" style="background:#20f0ca"></span></div>
        <div class="cell" data-cell="c-64-17"><span class="cell__label">c-64-17</span><span class="cell__value">45.31</span><span class="cell__tint" style="background:#011434"></span></div>
        <div class="cell" data-cell="c-64-18"><span class="cell__label">c-64-18</span><span class="cell__value">21.12</span><span class="cell__tint" style="background:#8b7a5f"></span></div>
        <div class="cell" data-cell="c-64-19"><span class="cell__label">c-64-19</span><span class="cell__value">17.66</span><span class="cell__tint" style="background:#92d74b"></span></div>
      </div>
      <div class="row" data-row="r-65">
        <div class="cell" data-cell="c-65-0"><span class="cell__label">c-65-0</span><span class="cell__value">66.41</span><span class="cell__tint" style="background:#d1ddd6"></span></div>
        <div class="cell" data-cell="c-65-1"><span class="cell__label">c-65-1</span><span class="cell__value">88.78</span><span class="cell__tint" style="background:#14924a"></span></div>
        <div class="cell" data-cell="c-65-2"><span class="cell__label">c-65-2</span><span class="cell__value">6.14</span><span class="cell__tint" style="background:#0ac335"></span></div>
        <div class="cell" data-cell="c-65-3"><span class="cell__label">c-65-3</span><span class="cell__value">41.36</span><span class="cell__tint" style="background:#897f04"></span></div>
        <div class="cell" data-cell="c-65-4"><span class="cell__label">c-65-4</span><span class="cell__value">14.93</span><span class="cell__tint" style="background:#7b2d62"></span></div>
        <div class="cell" data-cell="c-65-5"><span class="cell__label">c-65-5</span><span class="cell__value">53.07</span><span class="cell__tint" style="background:#61dfe2"></span></div>
        <div class="cell" data-cell="c-65-6"><span class="cell__label">c-65-6</span><span class="cell__value">65.76</span><span class="cell__tint" style="background:#d93651"></span></div>
        <div class="cell" data-cell="c-65-7"><span class="cell__label">c-65-7</span><span class="cell__value">77.23</span><span class="cell__tint" style="background:#6084e3"></span></div>
        <div class="cell" data-cell="c-65-8"><span class="cell__label">c-65-8</span><span class="cell__value">89.41</span><span class="cell__tint" style="background:#d4fc44"></span></div>
        <div class="cell" data-cell="c-65-9"><span class="cell__label">c-65-9</span><span class="cell__value">24.30</span><span class="cell__tint" style="background:#b76a70"></span></div>
        <div class="cell" data-cell="c-65-10"><span class="cell__label">c-65-10</span><span class="cell__value">50.81</span><span class="cell__tint" style="background:#7db1e0"></span></div>
        <div class="cell" data-cell="c-65-11"><span class="cell__label">c-65-11</span><span class="cell__value">10.75</span><span class="cell__tint" style="background:#693bf0"></span></div>
        <div class="cell" data-cell="c-65-12"><span class="cell__label">c-65-12</span><span class="cell__value">13.60</span><span class="cell__tint" style="background:#8922f7"></span></div>
        <div class="cell" data-cell="c-65-13"><span class="cell__label">c-65-13</span><span class="cell__value">21.26</span><span class="cell__tint" style="background:#0e4116"></span></div>
        <div class="cell" data-cell="c-65-14"><span class="cell__label">c-65-14</span><span class="cell__value">80.08</span><span class="cell__tint" style="background:#a5da13"></span></div>
        <div class="cell" data-cell="c-65-15"><span class="cell__label">c-65-15</span><span class="cell__value">91.46</span><span class="cell__tint" style="background:#2ab881"></span></div>
        <div class="cell" data-cell="c-65-16"><span class="cell__label">c-65-16</span><span class="cell__value">2.67</span><span class="cell__tint" style="background:#e1b805"></span></div>
        <div class="cell" data-cell="c-65-17"><span class="cell__label">c-65-17</span><span class="cell__value">55.87</span><span class="cell__tint" style="background:#2f480d"></span></div>
        <div class="cell" data-cell="c-65-18"><span class="cell__label">c-65-18</span><span class="cell__value">31.15</span><span class="cell__tint" style="background:#09f215"></span></div>
        <div class="cell" data-cell="c-65-19"><span class="cell__label">c-65-19</span><span class="cell__value">89.75</span><span class="cell__tint" style="background:#b0253c"></span></div>
      </div>
      <div class="row" data-row="r-66">
        <div class="cell" data-cell="c-66-0"><span class="cell__label">c-66-0</span><span class="cell__value">53.83</span><span class="cell__tint" style="background:#59afbd"></span></div>
        <div class="cell" data-cell="c-66-1"><span class="cell__label">c-66-1</span><span class="cell__value">2.97</span><span class="cell__tint" style="background:#dc30b9"></span></div>
        <div class="cell" data-cell="c-66-2"><span class="cell__label">c-66-2</span><span class="cell__value">45.71</span><span class="cell__tint" style="background:#2085f3"></span></div>
        <div class="cell" data-cell="c-66-3"><span class="cell__label">c-66-3</span><span class="cell__value">74.40</span><span class="cell__tint" style="background:#e772ac"></span></div>
        <div class="cell" data-cell="c-66-4"><span class="cell__label">c-66-4</span><span class="cell__value">7.75</span><span class="cell__tint" style="background:#ea8298"></span></div>
        <div class="cell" data-cell="c-66-5"><span class="cell__label">c-66-5</span><span class="cell__value">51.56</span><span class="cell__tint" style="background:#e8becc"></span></div>
        <div class="cell" data-cell="c-66-6"><span class="cell__label">c-66-6</span><span class="cell__value">75.75</span><span class="cell__tint" style="background:#72b46c"></span></div>
        <div class="cell" data-cell="c-66-7"><span class="cell__label">c-66-7</span><span class="cell__value">54.68</span><span class="cell__tint" style="background:#a63fe7"></span></div>
        <div class="cell" data-cell="c-66-8"><span class="cell__label">c-66-8</span><span class="cell__value">95.84</span><span class="cell__tint" style="background:#00d0a1"></span></div>
        <div class="cell" data-cell="c-66-9"><span class="cell__label">c-66-9</span><span class="cell__value">58.61</span><span class="cell__tint" style="background:#f3d793"></span></div>
        <div class="cell" data-cell="c-66-10"><span class="cell__label">c-66-10</span><span class="cell__value">50.89</span><span class="cell__tint" style="background:#5964b3"></span></div>
        <div class="cell" data-cell="c-66-11"><span class="cell__label">c-66-11</span><span class="cell__value">29.91</span><span class="cell__tint" style="background:#c7cd81"></span></div>
        <div class="cell" data-cell="c-66-12"><span class="cell__label">c-66-12</span><span class="cell__value">27.20</span><span class="cell__tint" style="background:#370a32"></span></div>
        <div class="cell" data-cell="c-66-13"><span class="cell__label">c-66-13</span><span class="cell__value">68.68</span><span class="cell__tint" style="background:#3776f5"></span></div>
        <div class="cell" data-cell="c-66-14"><span class="cell__label">c-66-14</span><span class="cell__value">48.58</span><span class="cell__tint" style="background:#e4daf9"></span></div>
        <div class="cell" data-cell="c-66-15"><span class="cell__label">c-66-15</span><span class="cell__value">24.70</span><span class="cell__tint" style="background:#ea7f60"></span></div>
        <div class="cell" data-cell="c-66-16"><span class="cell__label">c-66-16</span><span class="cell__value">34.08</span><span class="cell__tint" style="background:#9bbb40"></span></div>
        <div class="cell" data-cell="c-66-17"><span class="cell__label">c-66-17</span><span class="cell__value">27.40</span><span class="cell__tint" style="background:#37fe80"></span></div>
        <div class="cell" data-cell="c-66-18"><span class="cell__label">c-66-18</span><span class="cell__value">47.74</span><span class="cell__tint" style="background:#8521b0"></span></div>
        <div class="cell" data-cell="c-66-19"><span class="cell__label">c-66-19</span><span class="cell__value">90.94</span><span class="cell__tint" style="background:#1387a2"></span></div>
      </div>
      <div class="row" data-row="r-67">
        <div class="cell" data-cell="c-67-0"><span class="cell__label">c-67-0</span><span class="cell__value">45.05</span><span class="cell__tint" style="background:#f20b8c"></span></div>
        <div class="cell" data-cell="c-67-1"><span class="cell__label">c-67-1</span><span class="cell__value">8.89</span><span class="cell__tint" style="background:#4aea86"></span></div>
        <div class="cell" data-cell="c-67-2"><span class="cell__label">c-67-2</span><span class="cell__value">36.85</span><span class="cell__tint" style="background:#049060"></span></div>
        <div class="cell" data-cell="c-67-3"><span class="cell__label">c-67-3</span><span class="cell__value">77.44</span><span class="cell__tint" style="background:#7e246f"></span></div>
        <div class="cell" data-cell="c-67-4"><span class="cell__label">c-67-4</span><span class="cell__value">54.03</span><span class="cell__tint" style="background:#e443fe"></span></div>
        <div class="cell" data-cell="c-67-5"><span class="cell__label">c-67-5</span><span class="cell__value">38.17</span><span class="cell__tint" style="background:#6338e5"></span></div>
        <div class="cell" data-cell="c-67-6"><span class="cell__label">c-67-6</span><span class="cell__value">32.60</span><span class="cell__tint" style="background:#51a92f"></span></div>
        <div class="cell" data-cell="c-67-7"><span class="cell__label">c-67-7</span><span class="cell__value">0.36</span><span class="cell__tint" style="background:#cd6945"></span></div>
        <div class="cell" data-cell="c-67-8"><span class="cell__label">c-67-8</span><span class="cell__value">77.43</span><span class="cell__tint" style="background:#389bd0"></span></div>
        <div class="cell" data-cell="c-67-9"><span class="cell__label">c-67-9</span><span class="cell__value">87.77</span><span class="cell__tint" style="background:#d07456"></span></div>
        <div class="cell" data-cell="c-67-10"><span class="cell__label">c-67-10</span><span class="cell__value">25.74</span><span class="cell__tint" style="background:#9a78f7"></span></div>
        <div class="cell" data-cell="c-67-11"><span class="cell__label">c-67-11</span><span class="cell__value">79.40</span><span class="cell__tint" style="background:#8820f1"></span></div>
        <div class="cell" data-cell="c-67-12"><span class="cell__label">c-67-12</span><span class="cell__value">92.00</span><span class="cell__tint" style="background:#9cfc1f"></span></div>
        <div class="cell" data-cell="c-67-13"><span class="cell__label">c-67-13</span><span class="cell__value">65.43</span><span class="cell__tint" style="background:#1c6890"></span></div>
        <div class="cell" data-cell="c-67-14"><span class="cell__label">c-67-14</span><span class="cell__value">61.73</span><span class="cell__tint" style="background:#100dc4"></span></div>
        <div class="cell" data-cell="c-67-15"><span class="cell__label">c-67-15</span><span class="cell__value">98.86</span><span class="cell__tint" style="background:#16f1de"></span></div>
        <div class="cell" data-cell="c-67-16"><span class="cell__label">c-67-16</span><span class="cell__value">51.12</span><span class="cell__tint" style="background:#5d6166"></span></div>
        <div class="cell" data-cell="c-67-17"><span class="cell__label">c-67-17</span><span class="cell__value">36.95</span><span class="cell__tint" style="background:#2dcb79"></span></div>
        <div class="cell" data-cell="c-67-18"><span class="cell__label">c-67-18</span><span class="cell__value">92.78</span><span class="cell__tint" style="background:#0233a1"></span></div>
        <div class="cell" data-cell="c-67-19"><span class="cell__label">c-67-19</span><span class="cell__value">71.42</span><span class="cell__tint" style="background:#0eb3d0"></span></div>
      </div>
      <div class="row" data-row="r-68">
        <div class="cell" data-cell="c-68-0"><span class="cell__label">c-68-0</span><span class="cell__value">86.10</span><span class="cell__tint" style="background:#de1cce"></span></div>
        <div class="cell" data-cell="c-68-1"><span class="cell__label">c-68-1</span><span class="cell__value">17.72</span><span class="cell__tint" style="background:#557a74"></span></div>
        <div class="cell" data-cell="c-68-2"><span class="cell__label">c-68-2</span><span class="cell__value">39.97</span><span class="cell__tint" style="background:#2510c4"></span></div>
        <div class="cell" data-cell="c-68-3"><span class="cell__label">c-68-3</span><span class="cell__value">3.23</span><span class="cell__tint" style="background:#063162"></span></div>
        <div class="cell" data-cell="c-68-4"><span class="cell__label">c-68-4</span><span class="cell__value">55.63</span><span class="cell__tint" style="background:#f10bcf"></span></div>
        <div class="cell" data-cell="c-68-5"><span class="cell__label">c-68-5</span><span class="cell__value">94.73</span><span class="cell__tint" style="background:#29d210"></span></div>
        <div class="cell" data-cell="c-68-6"><span class="cell__label">c-68-6</span><span class="cell__value">64.81</span><span class="cell__tint" style="background:#d47c9d"></span></div>
        <div class="cell" data-cell="c-68-7"><span class="cell__label">c-68-7</span><span class="cell__value">18.60</span><span class="cell__tint" style="background:#79b0f7"></span></div>
        <div class="cell" data-cell="c-68-8"><span class="cell__label">c-68-8</span><span class="cell__value">45.37</span><span class="cell__tint" style="background:#22e771"></span></div>
        <div class="cell" data-cell="c-68-9"><span class="cell__label">c-68-9</span><span class="cell__value">42.19</span><span class="cell__tint" style="background:#a83dbe"></span></div>
        <div class="cell" data-cell="c-68-10"><span class="cell__label">c-68-10</span><span class="cell__value">58.93</span><span class="cell__tint" style="background:#6cebea"></span></div>
        <div class="cell" data-cell="c-68-11"><span class="cell__label">c-68-11</span><span class="cell__value">10.91</span><span class="cell__tint" style="background:#b7c74d"></span></div>
        <div class="cell" data-cell="c-68-12"><span class="cell__label">c-68-12</span><span class="cell__value">63.08</span><span class="cell__tint" style="background:#561683"></span></div>
        <div class="cell" data-cell="c-68-13"><span class="cell__label">c-68-13</span><span class="cell__value">64.87</span><span class="cell__tint" style="background:#d12021"></span></div>
        <div class="cell" data-cell="c-68-14"><span class="cell__label">c-68-14</span><span class="cell__value">53.53</span><span class="cell__tint" style="background:#7d8d6f"></span></div>
        <div class="cell" data-cell="c-68-15"><span class="cell__label">c-68-15</span><span class="cell__value">77.58</span><span class="cell__tint" style="background:#ec55c2"></span></div>
        <div class="cell" data-cell="c-68-16"><span class="cell__label">c-68-16</span><span class="cell__value">50.39</span><span class="cell__tint" style="background:#0c0c25"></span></div>
        <div class="cell" data-cell="c-68-17"><span class="cell__label">c-68-17</span><span class="cell__value">9.59</span><span class="cell__tint" style="background:#a076ea"></span></div>
        <div class="cell" data-cell="c-68-18"><span class="cell__label">c-68-18</span><span class="cell__value">45.58</span><span class="cell__tint" style="background:#8e2887"></span></div>
        <div class="cell" data-cell="c-68-19"><span class="cell__label">c-68-19</span><span class="cell__value">96.14</span><span class="cell__tint" style="background:#73e5f3"></span></div>
      </div>
      <div class="row" data-row="r-69">
        <div class="cell" data-cell="c-69-0"><span class="cell__label">c-69-0</span><span class="cell__value">98.01</span><span class="cell__tint" style="background:#8b2075"></span></div>
        <div class="cell" data-cell="c-69-1"><span class="cell__label">c-69-1</span><span class="cell__value">74.38</span><span class="cell__tint" style="background:#3396a6"></span></div>
        <div class="cell" data-cell="c-69-2"><span class="cell__label">c-69-2</span><span class="cell__value">33.96</span><span class="cell__tint" style="background:#98e380"></span></div>
        <div class="cell" data-cell="c-69-3"><span class="cell__label">c-69-3</span><span class="cell__value">39.39</span><span class="cell__tint" style="background:#1457b8"></span></div>
        <div class="cell" data-cell="c-69-4"><span class="cell__label">c-69-4</span><span class="cell__value">63.90</span><span class="cell__tint" style="background:#867cd8"></span></div>
        <div class="cell" data-cell="c-69-5"><span class="cell__label">c-69-5</span><span class="cell__value">78.74</span><span class="cell__tint" style="background:#c808c2"></span></div>
        <div class="cell" data-cell="c-69-6"><span class="cell__label">c-69-6</span><span class="cell__value">82.17</span><span class="cell__tint" style="background:#ad4c01"></span></div>
        <div class="cell" data-cell="c-69-7"><span class="cell__label">c-69-7</span><span class="cell__value">35.67</span><span class="cell__tint" style="background:#335c02"></span></div>
        <div class="cell" data-cell="c-69-8"><span class="cell__label">c-69-8</span><span class="cell__value">23.28</span><span class="cell__tint" style="background:#e7d4a1"></span></div>
        <div class="cell" data-cell="c-69-9"><span class="cell__label">c-69-9</span><span class="cell__value">45.21</span><span class="cell__tint" style="background:#011f69"></span></div>
        <div class="cell" data-cell="c-69-10"><span class="cell__label">c-69-10</span><span class="cell__value">99.49</span><span class="cell__tint" style="background:#66c5f6"></span></div>
        <div class="cell" data-cell="c-69-11"><span class="cell__label">c-69-11</span><span class="cell__value">76.50</span><span class="cell__tint" style="background:#a6f4eb"></span></div>
        <div class="cell" data-cell="c-69-12"><span class="cell__label">c-69-12</span><span class="cell__value">96.53</span><span class="cell__tint" style="background:#3de2d0"></span></div>
        <div class="cell" data-cell="c-69-13"><span class="cell__label">c-69-13</span><span class="cell__value">52.40</span><span class="cell__tint" style="background:#7434fa"></span></div>
        <div class="cell" data-cell="c-69-14"><span class="cell__label">c-69-14</span><span class="cell__value">32.96</span><span class="cell__tint" style="background:#27af86"></span></div>
        <div class="cell" data-cell="c-69-15"><span class="cell__label">c-69-15</span><span class="cell__value">39.45</span><span class="cell__tint" style="background:#600466"></span></div>
        <div class="cell" data-cell="c-69-16"><span class="cell__label">c-69-16</span><span class="cell__value">18.45</span><span class="cell__tint" style="background:#ee4878"></span></div>
        <div class="cell" data-cell="c-69-17"><span class="cell__label">c-69-17</span><span class="cell__value">69.51</span><span class="cell__tint" style="background:#4d2dd9"></span></div>
        <div class="cell" data-cell="c-69-18"><span class="cell__label">c-69-18</span><span class="cell__value">63.96</span><span class="cell__tint" style="background:#23a923"></span></div>
        <div class="cell" data-cell="c-69-19"><span class="cell__label">c-69-19</span><span class="cell__value">43.21</span><span class="cell__tint" style="background:#836d20"></span></div>
      </div>
      <div class="row" data-row="r-70">
        <div class="cell" data-cell="c-70-0"><span class="cell__label">c-70-0</span><span class="cell__value">93.60</span><span class="cell__tint" style="background:#b94211"></span></div>
        <div class="cell" data-cell="c-70-1"><span class="cell__label">c-70-1</span><span class="cell__value">24.66</span><span class="cell__tint" style="background:#bcd718"></span></div>
        <div class="cell" data-cell="c-70-2"><span class="cell__label">c-70-2</span><span class="cell__value">29.89</span><span class="cell__tint" style="background:#49dbff"></span></div>
        <div class="cell" data-cell="c-70-3"><span class="cell__label">c-70-3</span><span class="cell__value">3.24</span><span class="cell__tint" style="background:#4ba9e5"></span></div>
        <div class="cell" data-cell="c-70-4"><span class="cell__label">c-70-4</span><span class="cell__value">75.55</span><span class="cell__tint" style="background:#3cf061"></span></div>
        <div class="cell" data-cell="c-70-5"><span class="cell__label">c-70-5</span><span class="cell__value">26.09</span><span class="cell__tint" style="background:#f27b3a"></span></div>
        <div class="cell" data-cell="c-70-6"><span class="cell__label">c-70-6</span><span class="cell__value">45.16</span><span class="cell__tint" style="background:#4fb2f0"></span></div>
        <div class="cell" data-cell="c-70-7"><span class="cell__label">c-70-7</span><span class="cell__value">98.55</span><span class="cell__tint" style="background:#d5b89f"></span></div>
        <div class="cell" data-cell="c-70-8"><span class="cell__label">c-70-8</span><span class="cell__value">13.73</span><span class="cell__tint" style="background:#c08981"></span></div>
        <div class="cell" data-cell="c-70-9"><span class="cell__label">c-70-9</span><span class="cell__value">62.64</span><span class="cell__tint" style="background:#1606d0"></span></div>
        <div class="cell" data-cell="c-70-10"><span class="cell__label">c-70-10</span><span class="cell__value">82.51</span><span class="cell__tint" style="background:#44ed60"></span></div>
        <div class="cell" data-cell="c-70-11"><span class="cell__label">c-70-11</span><span class="cell__value">49.71</span><span class="cell__tint" style="background:#81ac48"></span></div>
        <div class="cell" data-cell="c-70-12"><span class="cell__label">c-70-12</span><span class="cell__value">55.21</span><span class="cell__tint" style="background:#2c39c0"></span></div>
        <div class="cell" data-cell="c-70-13"><span class="cell__label">c-70-13</span><span class="cell__value">10.87</span><span class="cell__tint" style="background:#1b1c53"></span></div>
        <div class="cell" data-cell="c-70-14"><span class="cell__label">c-70-14</span><span class="cell__value">56.19</span><span class="cell__tint" style="background:#8c1676"></span></div>
        <div class="cell" data-cell="c-70-15"><span class="cell__label">c-70-15</span><span class="cell__value">11.58</span><span class="cell__tint" style="background:#2845cd"></span></div>
        <div class="cell" data-cell="c-70-16"><span class="cell__label">c-70-16</span><span class="cell__value">65.94</span><span class="cell__tint" style="background:#1e6606"></span></div>
        <div class="cell" data-cell="c-70-17"><span class="cell__label">c-70-17</span><span class="cell__value">66.76</span><span class="cell__tint" style="background:#5913f4"></span></div>
        <div class="cell" data-cell="c-70-18"><span class="cell__label">c-70-18</span><span class="cell__value">72.17</span><span class="cell__tint" style="background:#86c22b"></span></div>
        <div class="cell" data-cell="c-70-19"><span class="cell__label">c-70-19</span><span class="cell__value">68.81</span><span class="cell__tint" style="background:#fd696c"></span></div>
      </div>
      <div class="row" data-row="r-71">
        <div class="cell" data-cell="c-71-0"><span class="cell__label">c-71-0</span><span class="cell__value">30.25</span><span class="cell__tint" style="background:#a875a3"></span></div>
        <div class="cell" data-cell="c-71-1"><span class="cell__label">c-71-1</span><span class="cell__value">86.49</span><span class="cell__tint" style="background:#d2ae39"></span></div>
        <div class="cell" data-cell="c-71-2"><span class="cell__label">c-71-2</span><span class="cell__value">54.41</span><span class="cell__tint" style="background:#3b6a19"></span></div>
        <div class="cell" data-cell="c-71-3"><span class="cell__label">c-71-3</span><span class="cell__value">58.87</span><span class="cell__tint" style="background:#cd1de7"></span></div>
        <div class="cell" data-cell="c-71-4"><span class="cell__label">c-71-4</span><span class="cell__value">11.73</span><span class="cell__tint" style="background:#09ebc1"></span></div>
        <div class="cell" data-cell="c-71-5"><span class="cell__label">c-71-5</span><span class="cell__value">62.52</span><span class="cell__tint" style="background:#d83bfb"></span></div>
        <div class="cell" data-cell="c-71-6"><span class="cell__label">c-71-6</span><span class="cell__value">80.94</span><span class="cell__tint" style="background:#d8f560"></span></div>
        <div class="cell" data-cell="c-71-7"><span class="cell__label">c-71-7</span><span class="cell__value">59.26</span><span class="cell__tint" style="background:#b7edba"></span></div>
        <div class="cell" data-cell="c-71-8"><span class="cell__label">c-71-8</span><span class="cell__value">71.07</span><span class="cell__tint" style="background:#f1a900"></span></div>
        <div class="cell" data-cell="c-71-9"><span class="cell__label">c-71-9</span><span class="cell__value">98.56</span><span class="cell__tint" style="background:#d15943"></span></div>
        <div class="cell" data-cell="c-71-10"><span class="cell__label">c-71-10</span><span class="cell__value">34.92</span><span class="cell__tint" style="background:#ae1cb4"></span></div>
        <div class="cell" data-cell="c-71-11"><span class="cell__label">c-71-11</span><span class="cell__value">90.52</span><span class="cell__tint" style="background:#b7bd7d"></span></div>
        <div class="cell" data-cell="c-71-12"><span class="cell__label">c-71-12</span><span class="cell__value">45.47</span><span class="cell__tint" style="background:#94ba94"></span></div>
        <div class="cell" data-cell="c-71-13"><span class="cell__label">c-71-13</span><span class="cell__value">89.49</span><span class="cell__tint" style="background:#4d0066"></span></div>
        <div class="cell" data-cell="c-71-14"><span class="cell__label">c-71-14</span><span class="cell__value">64.31</span><span class="cell__tint" style="background:#5b3b3d"></span></div>
        <div class="cell" data-cell="c-71-15"><span class="cell__label">c-71-15</span><span class="cell__value">76.91</span><span class="cell__tint" style="background:#ffb3ac"></span></div>
        <div class="cell" data-cell="c-71-16"><span class="cell__label">c-71-16</span><span class="cell__value">73.99</span><span class="cell__tint" style="background:#33e72e"></span></div>
        <div class="cell" data-cell="c-71-17"><span class="cell__label">c-71-17</span><span class="cell__value">81.59</span><span class="cell__tint" style="background:#d04029"></span></div>
        <div class="cell" data-cell="c-71-18"><span class="cell__label">c-71-18</span><span class="cell__value">0.13</span><span class="cell__tint" style="background:#bc5d28"></span></div>
        <div class="cell" data-cell="c-71-19"><span class="cell__label">c-71-19</span><span class="cell__value">16.52</span><span class="cell__tint" style="background:#500aa3"></span></div>
      </div>
      <div class="row" data-row="r-72">
        <div class="cell" data-cell="c-72-0"><span class="cell__label">c-72-0</span><span class="cell__value">92.64</span><span class="cell__tint" style="background:#019f41"></span></div>
        <div class="cell" data-cell="c-72-1"><span class="cell__label">c-72-1</span><span class="cell__value">81.48</span><span class="cell__tint" style="background:#48e653"></span></div>
        <div class="cell" data-cell="c-72-2"><span class="cell__label">c-72-2</span><span class="cell__value">51.56</span><span class="cell__tint" style="background:#62115a"></span></div>
        <div class="cell" data-cell="c-72-3"><span class="cell__label">c-72-3</span><span class="cell__value">85.63</span><span class="cell__tint" style="background:#e44603"></span></div>
        <div class="cell" data-cell="c-72-4"><span class="cell__label">c-72-4</span><span class="cell__value">30.55</span><span class="cell__tint" style="background:#e5a2c6"></span></div>
        <div class="cell" data-cell="c-72-5"><span class="cell__label">c-72-5</span><span class="cell__value">91.65</span><span class="cell__tint" style="background:#8370e3"></span></div>
        <div class="cell" data-cell="c-72-6"><span class="cell__label">c-72-6</span><span class="cell__value">39.91</span><span class="cell__tint" style="background:#b630aa"></span></div>
        <div class="cell" data-cell="c-72-7"><span class="cell__label">c-72-7</span><span class="cell__value">40.25</span><span class="cell__tint" style="background:#2f5f8a"></span></div>
        <div class="cell" data-cell="c-72-8"><span class="cell__label">c-72-8</span><span class="cell__value">39.47</span><span class="cell__tint" style="background:#b76d27"></span></div>
        <div class="cell" data-cell="c-72-9"><span class="cell__label">c-72-9</span><span class="cell__value">37.76</span><span class="cell__tint" style="background:#ad68bd"></span></div>
        <div class="cell" data-cell="c-72-10"><span class="cell__label">c-72-10</span><span class="cell__value">14.43</span><span class="cell__tint" style="background:#d5adb6"></span></div>
        <div class="cell" data-cell="c-72-11"><span class="cell__label">c-72-11</span><span class="cell__value">28.84</span><span class="cell__tint" style="background:#c71ec0"></span></div>
        <div class="cell" data-cell="c-72-12"><span class="cell__label">c-72-12</span><span class="cell__value">3.79</span><span class="cell__tint" style="background:#9e46a2"></span></div>
        <div class="cell" data-cell="c-72-13"><span class="cell__label">c-72-13</span><span class="cell__value">71.95</span><span class="cell__tint" style="background:#47037a"></span></div>
        <div class="cell" data-cell="c-72-14"><span class="cell__label">c-72-14</span><span class="cell__value">19.59</span><span class="cell__tint" style="background:#caaab7"></span></div>
        <div class="cell" data-cell="c-72-15"><span class="cell__label">c-72-15</span><span class="cell__value">88.05</span><span class="cell__tint" style="background:#319cd3"></span></div>
        <div class="cell" data-cell="c-72-16"><span class="cell__label">c-72-16</span><span class="cell__value">36.93</span><span class="cell__tint" style="background:#667354"></span></div>
        <div class="cell" data-cell="c-72-17"><span class="cell__label">c-72-17</span><span class="cell__value">89.36</span><span class="cell__tint" style="background:#486af1"></span></div>
        <div class="cell" data-cell="c-72-18"><span class="cell__label">c-72-18</span><span class="cell__value">60.30</span><span class="cell__tint" style="background:#260f15"></span></div>
        <div class="cell" data-cell="c-72-19"><span class="cell__label">c-72-19</span><span class="cell__value">94.48</span><span class="cell__tint" style="background:#c3d017"></span></div>
      </div>
      <div class="row" data-row="r-73">
        <div class="cell" data-cell="c-73-0"><span class="cell__label">c-73-0</span><span class="cell__value">16.70</span><span class="cell__tint" style="background:#69ee06"></span></div>
        <div class="cell" data-cell="c-73-1"><span class="cell__label">c-73-1</span><span class="cell__value">48.73</span><span class="cell__tint" style="background:#01ee7a"></span></div>
        <div class="cell" data-cell="c-73-2"><span class="cell__label">c-73-2</span><span class="cell__value">17.18</span><span class="cell__tint" style="background:#0c848c"></span></div>
        <div class="cell" data-cell="c-73-3"><span class="cell__label">c-73-3</span><span class="cell__value">25.13</span><span class="cell__tint" style="background:#651c50"></span></div>
        <div class="cell" data-cell="c-73-4"><span class="cell__label">c-73-4</span><span class="cell__value">16.44</span><span class="cell__tint" style="background:#55d3f8"></span></div>
        <div class="cell" data-cell="c-73-5"><span class="cell__label">c-73-5</span><span class="cell__value">2.51</span><span class="cell__tint" style="background:#b1616b"></span></div>
        <div class="cell" data-cell="c-73-6"><span class="cell__label">c-73-6</span><span class="cell__value">13.70</span><span class="cell__tint" style="background:#61ca06"></span></div>
        <div class="cell" data-cell="c-73-7"><span class="cell__label">c-73-7</span><span class="cell__value">40.36</span><span class="cell__tint" style="background:#843dc7"></span></div>
        <div class="cell" data-cell="c-73-8"><span class="cell__label">c-73-8</span><span class="cell__value">39.61</span><span class="cell__tint" style="background:#2bd798"></span></div>
        <div class="cell" data-cell="c-73-9"><span class="cell__label">c-73-9</span><span class="cell__value">81.50</span><span class="cell__tint" style="background:#27c61b"></span></div>
        <div class="cell" data-cell="c-73-10"><span class="cell__label">c-73-10</span><span class="cell__value">42.43</span><span class="cell__tint" style="background:#3452ec"></span></div>
        <div class="cell" data-cell="c-73-11"><span class="cell__label">c-73-11</span><span class="cell__value">55.34</span><span class="cell__tint" style="background:#5d1529"></span></div>
        <div class="cell" data-cell="c-73-12"><span class="cell__label">c-73-12</span><span class="cell__value">59.62</span><span class="cell__tint" style="background:#b04569"></span></div>
        <div class="cell" data-cell="c-73-13"><span class="cell__label">c-73-13</span><span class="cell__value">60.61</span><span class="cell__tint" style="background:#8f1f7d"></span></div>
        <div class="cell" data-cell="c-73-14"><span class="cell__label">c-73-14</span><span class="cell__value">80.09</span><span class="cell__tint" style="background:#c70516"></span></div>
        <div class="cell" data-cell="c-73-15"><span class="cell__label">c-73-15</span><span class="cell__value">67.14</span><span class="cell__tint" style="background:#e2d553"></span></div>
        <div class="cell" data-cell="c-73-16"><span class="cell__label">c-73-16</span><span class="cell__value">9.47</span><span class="cell__tint" style="background:#9c20f3"></span></div>
        <div class="cell" data-cell="c-73-17"><span class="cell__label">c-73-17</span><span class="cell__value">44.59</span><span class="cell__tint" style="background:#b5ee71"></span></div>
        <div class="cell" data-cell="c-73-18"><span class="cell__label">c-73-18</span><span class="cell__value">43.81</span><span class="cell__tint" style="background:#39bd39"></span></div>
        <div class="cell" data-cell="c-73-19"><span class="cell__label">c-73-19</span><span class="cell__value">63.08</span><span class="cell__tint" style="background:#c23bbd"></span></div>
      </div>
      <div class="row" data-row="r-74">
        <div class="cell" data-cell="c-74-0"><span class="cell__label">c-74-0</span><span class="cell__value">86.11</span><span class="cell__tint" style="background:#62ed18"></span></div>
        <div class="cell" data-cell="c-74-1"><span class="cell__label">c-74-1</span><span class="cell__value">39.19</span><span class="cell__tint" style="background:#861780"></span></div>
        <div class="cell" data-cell="c-74-2"><span class="cell__label">c-74-2</span><span class="cell__value">75.84</span><span class="cell__tint" style="background:#9a3f3a"></span></div>
        <div class="cell" data-cell="c-74-3"><span class="cell__label">c-74-3</span><span class="cell__value">34.87</span><span class="cell__tint" style="background:#a05d44"></span></div>
        <div class="cell" data-cell="c-74-4"><span class="cell__label">c-74-4</span><span class="cell__value">60.83</span><span class="cell__tint" style="background:#999e67"></span></div>
        <div class="cell" data-cell="c-74-5"><span class="cell__label">c-74-5</span><span class="cell__value">61.36</span><span class="cell__tint" style="background:#d1fdc0"></span></div>
        <div class="cell" data-cell="c-74-6"><span class="cell__label">c-74-6</span><span class="cell__value">78.69</span><span class="cell__tint" style="background:#9777a8"></span></div>
        <div class="cell" data-cell="c-74-7"><span class="cell__label">c-74-7</span><span class="cell__value">33.66</span><span class="cell__tint" style="background:#449693"></span></div>
        <div class="cell" data-cell="c-74-8"><span class="cell__label">c-74-8</span><span class="cell__value">9.13</span><span class="cell__tint" style="background:#660fcc"></span></div>
        <div class="cell" data-cell="c-74-9"><span class="cell__label">c-74-9</span><span class="cell__value">74.24</span><span class="cell__tint" style="background:#9bf686"></span></div>
        <div class="cell" data-cell="c-74-10"><span class="cell__label">c-74-10</span><span class="cell__value">80.58</span><span class="cell__tint" style="background:#693f21"></span></div>
        <div class="cell" data-cell="c-74-11"><span class="cell__label">c-74-11</span><span class="cell__value">29.11</span><span class="cell__tint" style="background:#788f44"></span></div>
        <div class="cell" data-cell="c-74-12"><span class="cell__label">c-74-12</span><span class="cell__value">82.02</span><span class="cell__tint" style="background:#4c51db"></span></div>
        <div class="cell" data-cell="c-74-13"><span class="cell__label">c-74-13</span><span class="cell__value">0.52</span><span class="cell__tint" style="background:#d99a73"></span></div>
        <div class="cell" data-cell="c-74-14"><span class="cell__label">c-74-14</span><span class="cell__value">27.50</span><span class="cell__tint" style="background:#b3a10c"></span></div>
        <div class="cell" data-cell="c-74-15"><span class="cell__label">c-74-15</span><span class="cell__value">37.55</span><span class="cell__tint" style="background:#efde86"></span></div>
        <div class="cell" data-cell="c-74-16"><span class="cell__label">c-74-16</span><span class="cell__value">59.93</span><span class="cell__tint" style="background:#72bc4a"></span></div>
        <div class="cell" data-cell="c-74-17"><span class="cell__label">c-74-17</span><span class="cell__value">39.75</span><span class="cell__tint" style="background:#f09ddf"></span></div>
        <div class="cell" data-cell="c-74-18"><span class="cell__label">c-74-18</span><span class="cell__value">71.23</span><span class="cell__tint" style="background:#a4534c"></span></div>
        <div class="cell" data-cell="c-74-19"><span class="cell__label">c-74-19</span><span class="cell__value">13.07</span><span class="cell__tint" style="background:#b3b4d3"></span></div>
      </div>
      <div class="row" data-row="r-75">
        <div class="cell" data-cell="c-75-0"><span class="cell__label">c-75-0</span><span class="cell__value">2.30</span><span class="cell__tint" style="background:#1a8c92"></span></div>
        <div class="cell" data-cell="c-75-1"><span class="cell__label">c-75-1</span><span class="cell__value">88.27</span><span class="cell__tint" style="background:#f3a40f"></span></div>
        <div class="cell" data-cell="c-75-2"><span class="cell__label">c-75-2</span><span class="cell__value">75.31</span><span class="cell__tint" style="background:#9ee663"></span></div>
        <div class="cell" data-cell="c-75-3"><span class="cell__label">c-75-3</span><span class="cell__value">25.36</span><span class="cell__tint" style="background:#4437b7"></span></div>
        <div class="cell" data-cell="c-75-4"><span class="cell__label">c-75-4</span><span class="cell__value">65.25</span><span class="cell__tint" style="background:#86edb8"></span></div>
        <div class="cell" data-cell="c-75-5"><span class="cell__label">c-75-5</span><span class="cell__value">14.74</span><span class="cell__tint" style="background:#1ef2a4"></span></div>
        <div class="cell" data-cell="c-75-6"><span class="cell__label">c-75-6</span><span class="cell__value">35.23</span><span class="cell__tint" style="background:#e80bc0"></span></div>
        <div class="cell" data-cell="c-75-7"><span class="cell__label">c-75-7</span><span class="cell__value">28.13</span><span class="cell__tint" style="background:#6a485d"></span></div>
        <div class="cell" data-cell="c-75-8"><span class="cell__label">c-75-8</span><span class="cell__value">91.70</span><span class="cell__tint" style="background:#261793"></span></div>
        <div class="cell" data-cell="c-75-9"><span class="cell__label">c-75-9</span><span class="cell__value">89.31</span><span class="cell__tint" style="background:#8c2a51"></span></div>
        <div class="cell" data-cell="c-75-10"><span class="cell__label">c-75-10</span><span class="cell__value">91.11</span><span class="cell__tint" style="background:#40d2ea"></span></div>
        <div class="cell" data-cell="c-75-11"><span class="cell__label">c-75-11</span><span class="cell__value">60.42</span><span class="cell__tint" style="background:#007047"></span></div>
        <div class="cell" data-cell="c-75-12"><span class="cell__label">c-75-12</span><span class="cell__value">48.79</span><span class="cell__tint" style="background:#bde06b"></span></div>
        <div class="cell" data-cell="c-75-13"><span class="cell__label">c-75-13</span><span class="cell__value">26.19</span><span class="cell__tint" style="background:#4087c9"></span></div>
        <div class="cell" data-cell="c-75-14"><span class="cell__label">c-75-14</span><span class="cell__value">43.27</span><span class="cell__tint" style="background:#d92af9"></span></div>
        <div class="cell" data-cell="c-75-15"><span class="cell__label">c-75-15</span><span class="cell__value">48.20</span><span class="cell__tint" style="background:#75aa62"></span></div>
        <div class="cell" data-cell="c-75-16"><span class="cell__label">c-75-16</span><span class="cell__value">25.96</span><span class="cell__tint" style="background:#045080"></span></div>
        <div class="cell" data-cell="c-75-17"><span class="cell__label">c-75-17</span><span class="cell__value">21.59</span><span class="cell__tint" style="background:#0257c7"></span></div>
        <div class="cell" data-cell="c-75-18"><span class="cell__label">c-75-18</span><span class="cell__value">29.85</span><span class="cell__tint" style="background:#295913"></span></div>
        <div class="cell" data-cell="c-75-19"><span class="cell__label">c-75-19</span><span class="cell__value">60.69</span><span class="cell__tint" style="background:#e8981a"></span></div>
      </div>
      <div class="row" data-row="r-76">
        <div class="cell" data-cell="c-76-0"><span class="cell__label">c-76-0</span><span class="cell__value">88.25</span><span class="cell__tint" style="background:#67030a"></span></div>
        <div class="cell" data-cell="c-76-1"><span class="cell__label">c-76-1</span><span class="cell__value">25.59</span><span class="cell__tint" style="background:#3df411"></span></div>
        <div class="cell" data-cell="c-76-2"><span class="cell__label">c-76-2</span><span class="cell__value">46.58</span><span class="cell__tint" style="background:#8075d9"></span></div>
        <div class="cell" data-cell="c-76-3"><span class="cell__label">c-76-3</span><span class="cell__value">48.71</span><span class="cell__tint" style="background:#3bab4f"></span></div>
        <div class="cell" data-cell="c-76-4"><span class="cell__label">c-76-4</span><span class="cell__value">46.92</span><span class="cell__tint" style="background:#3bcded"></span></div>
        <div class="cell" data-cell="c-76-5"><span class="cell__label">c-76-5</span><span class="cell__value">29.84</span><span class="cell__tint" style="background:#70ff83"></span></div>
        <div class="cell" data-cell="c-76-6"><span class="cell__label">c-76-6</span><span class="cell__value">70.98</span><span class="cell__tint" style="background:#9722e4"></span></div>
        <div class="cell" data-cell="c-76-7"><span class="cell__label">c-76-7</span><span class="cell__value">40.61</span><span class="cell__tint" style="background:#7ce9b9"></span></div>
        <div class="cell" data-cell="c-76-8"><span class="cell__label">c-76-8</span><span class="cell__value">18.66</span><span class="cell__tint" style="background:#264b0c"></span></div>
        <div class="cell" data-cell="c-76-9"><span class="cell__label">c-76-9</span><span class="cell__value">17.19</span><span class="cell__tint" style="background:#fa941f"></span></div>
        <div class="cell" data-cell="c-76-10"><span class="cell__label">c-76-10</span><span class="cell__value">94.64</span><span class="cell__tint" style="background:#c35061"></span></div>
        <div class="cell" data-cell="c-76-11"><span class="cell__label">c-76-11</span><span class="cell__value">88.57</span><span class="cell__tint" style="background:#c9034a"></span></div>
        <div class="cell" data-cell="c-76-12"><span class="cell__label">c-76-12</span><span class="cell__value">47.45</span><span class="cell__tint" style="background:#15a7b5"></span></div>
        <div class="cell" data-cell="c-76-13"><span class="cell__label">c-76-13</span><span class="cell__value">15.93</span><span class="cell__tint" style="background:#c72752"></span></div>
        <div class="cell" data-cell="c-76-14"><span class="cell__label">c-76-14</span><span class="cell__value">81.01</span><span class="cell__tint" style="background:#a7121b"></span></div>
        <div class="cell" data-cell="c-76-15"><span class="cell__label">c-76-15</span><span class="cell__value">8.70</span><span class="cell__tint" style="background:#f5951d"></span></div>
        <div class="cell" data-cell="c-76-16"><span class="cell__label">c-76-16</span><span class="cell__value">4.99</span><span class="cell__tint" style="background:#6776b6"></span></div>
        <div class="cell" data-cell="c-76-17"><span class="cell__label">c-76-17</span><span class="cell__value">7.67</span><span class="cell__tint" style="background:#a88470"></span></div>
        <div class="cell" data-cell="c-76-18"><span class="cell__label">c-76-18</span><span class="cell__value">75.29</span><span class="cell__tint" style="background:#bfd3d2"></span></div>
        <div class="cell" data-cell="c-76-19"><span class="cell__label">c-76-19</span><span class="cell__value">55.73</span><span class="cell__tint" style="background:#9b36ac"></span></div>
      </div>
      <div class="row" data-row="r-77">
        <div class="cell" data-cell="c-77-0"><span class="cell__label">c-77-0</span><span class="cell__value">19.34</span><span class="cell__tint" style="background:#671713"></span></div>
        <div class="cell" data-cell="c-77-1"><span class="cell__label">c-77-1</span><span class="cell__value">34.62</span><span class="cell__tint" style="background:#b23dd7"></span></div>
        <div class="cell" data-cell="c-77-2"><span class="cell__label">c-77-2</span><span class="cell__value">24.57</span><span class="cell__tint" style="background:#5f0742"></span></div>
        <div class="cell" data-cell="c-77-3"><span class="cell__label">c-77-3</span><span class="cell__value">57.49</span><span class="cell__tint" style="background:#414bf0"></span></div>
        <div class="cell" data-cell="c-77-4"><span class="cell__label">c-77-4</span><span class="cell__value">89.62</span><span class="cell__tint" style="background:#fe6dcb"></span></div>
        <div class="cell" data-cell="c-77-5"><span class="cell__label">c-77-5</span><span class="cell__value">87.37</span><span class="cell__tint" style="background:#1a2880"></span></div>
        <div class="cell" data-cell="c-77-6"><span class="cell__label">c-77-6</span><span class="cell__value">93.56</span><span class="cell__tint" style="background:#abfa46"></span></div>
        <div class="cell" data-cell="c-77-7"><span class="cell__label">c-77-7</span><span class="cell__value">35.55</span><span class="cell__tint" style="background:#290248"></span></div>
        <div class="cell" data-cell="c-77-8"><span class="cell__label">c-77-8</span><span class="cell__value">47.78</span><span class="cell__tint" style="background:#c4132b"></span></div>
        <div class="cell" data-cell="c-77-9"><span class="cell__label">c-77-9</span><span class="cell__value">8.18</span><span class="cell__tint" style="background:#a503ed"></span></div>
        <div class="cell" data-cell="c-77-10"><span class="cell__label">c-77-10</span><span class="cell__value">29.00</span><span class="cell__tint" style="background:#79d1f0"></span></div>
        <div class="cell" data-cell="c-77-11"><span class="cell__label">c-77-11</span><span class="cell__value">69.42</span><span class="cell__tint" style="background:#61aae3"></span></div>
        <div class="cell" data-cell="c-77-12"><span class="cell__label">c-77-12</span><span class="cell__value">99.27</span><span class="cell__tint" style="background:#467308"></span></div>
        <div class="cell" data-cell="c-77-13"><span class="cell__label">c-77-13</span><span class="cell__value">60.15</span><span class="cell__tint" style="background:#fdd5aa"></span></div>
        <div class="cell" data-cell="c-77-14"><span class="cell__label">c-77-14</span><span class="cell__value">94.29</span><span class="cell__tint" style="background:#0618ab"></span></div>
        <div class="cell" data-cell="c-77-15"><span class="cell__label">c-77-15</span><span class="cell__value">40.05</span><span class="cell__tint" style="background:#6b4761"></span></div>
        <div class="cell" data-cell="c-77-16"><span class="cell__label">c-77-16</span><span class="cell__value">84.31</span><span class="cell__tint" style="background:#c58b3c"></span></div>
        <div class="cell" data-cell="c-77-17"><span class="cell__label">c-77-17</span><span class="cell__value">13.80</span><span class="cell__tint" style="background:#8fa334"></span></div>
        <div class="cell" data-cell="c-77-18"><span class="cell__label">c-77-18</span><span class="cell__value">84.09</span><span class="cell__tint" style="background:#12213f"></span></div>
        <div class="cell" data-cell="c-77-19"><span class="cell__label">c-77-19</span><span class="cell__value">76.75</span><span class="cell__tint" style="background:#41563f"></span></div>
      </div>
      <div class="row" data-row="r-78">
        <div class="cell" data-cell="c-78-0"><span class="cell__label">c-78-0</span><span class="cell__value">51.34</span><span class="cell__tint" style="background:#ba74eb"></span></div>
        <div class="cell" data-cell="c-78-1"><span class="cell__label">c-78-1</span><span class="cell__value">53.73</span><span class="cell__tint" style="background:#76adf6"></span></div>
        <div class="cell" data-cell="c-78-2"><span class="cell__label">c-78-2</span><span class="cell__value">16.55</span><span class="cell__tint" style="background:#10069e"></span></div>
        <div class="cell" data-cell="c-78-3"><span class="cell__label">c-78-3</span><span class="cell__value">49.82</span><span class="cell__tint" style="background:#d343d3"></span></div>
        <div class="cell" data-cell="c-78-4"><span class="cell__label">c-78-4</span><span class="cell__value">13.90</span><span class="cell__tint" style="background:#5c1a22"></span></div>
        <div class="cell" data-cell="c-78-5"><span class="cell__label">c-78-5</span><span class="cell__value">52.39</span><span class="cell__tint" style="background:#47cfbd"></span></div>
        <div class="cell" data-cell="c-78-6"><span class="cell__label">c-78-6</span><span class="cell__value">96.59</span><span class="cell__tint" style="background:#1ddd25"></span></div>
        <div class="cell" data-cell="c-78-7"><span class="cell__label">c-78-7</span><span class="cell__value">76.84</span><span class="cell__tint" style="background:#05873e"></span></div>
        <div class="cell" data-cell="c-78-8"><span class="cell__label">c-78-8</span><span class="cell__value">59.24</span><span class="cell__tint" style="background:#f9f830"></span></div>
        <div class="cell" data-cell="c-78-9"><span class="cell__label">c-78-9</span><span class="cell__value">47.53</span><span class="cell__tint" style="background:#286dbb"></span></div>
        <div class="cell" data-cell="c-78-10"><span class="cell__label">c-78-10</span><span class="cell__value">92.15</span><span class="cell__tint" style="background:#c2adec"></span></div>
        <div class="cell" data-cell="c-78-11"><span class="cell__label">c-78-11</span><span class="cell__value">1.08</span><span class="cell__tint" style="background:#aeaf63"></span></div>
        <div class="cell" data-cell="c-78-12"><span class="cell__label">c-78-12</span><span class="cell__value">2.03</span><span class="cell__tint" style="background:#7aa8b0"></span></div>
        <div class="cell" data-cell="c-78-13"><span class="cell__label">c-78-13</span><span class="cell__value">59.46</span><span class="cell__tint" style="background:#12e5fc"></span></div>
        <div class="cell" data-cell="c-78-14"><span class="cell__label">c-78-14</span><span class="cell__value">67.54</span><span class="cell__tint" style="background:#d31713"></span></div>
        <div class="cell" data-cell="c-78-15"><span class="cell__label">c-78-15</span><span class="cell__value">93.63</span><span class="cell__tint" style="background:#20669a"></span></div>
        <div class="cell" data-cell="c-78-16"><span class="cell__label">c-78-16</span><span class="cell__value">0.65</span><span class="cell__tint" style="background:#1f70a5"></span></div>
        <div class="cell" data-cell="c-78-17"><span class="cell__label">c-78-17</span><span class="cell__value">15.67</span><span class="cell__tint" style="background:#ed1693"></span></div>
        <div class="cell" data-cell="c-78-18"><span class="cell__label">c-78-18</span><span class="cell__value">43.30</span><span class="cell__tint" style="background:#483acd"></span></div>
        <div class="cell" data-cell="c-78-19"><span class="cell__label">c-78-19</span><span class="cell__value">84.24</span><span class="cell__tint" style="background:#554d92"></span></div>
      </div>
      <div class="row" data-row="r-79">
        <div class="cell" data-cell="c-79-0"><span class="cell__label">c-79-0</span><span class="cell__value">14.63</span><span class="cell__tint" style="background:#e84b58"></span></div>
        <div class="cell" data-cell="c-79-1"><span class="cell__label">c-79-1</span><span class="cell__value">47.50</span><span class="cell__tint" style="background:#71b45f"></span></div>
        <div class="cell" data-cell="c-79-2"><span class="cell__label">c-79-2</span><span class="cell__value">67.08</span><span class="cell__tint" style="background:#4412d8"></span></div>
        <div class="cell" data-cell="c-79-3"><span class="cell__label">c-79-3</span><span class="cell__value">40.74</span><span class="cell__tint" style="background:#800752"></span></div>
        <div class="cell" data-cell="c-79-4"><span class="cell__label">c-79-4</span><span class="cell__value">3.91</span><span class="cell__tint" style="background:#b210cd"></span></div>
        <div class="cell" data-cell="c-79-5"><span class="cell__label">c-79-5</span><span class="cell__value">35.20</span><span class="cell__tint" style="background:#2b9546"></span></div>
        <div class="cell" data-cell="c-79-6"><span class="cell__label">c-79-6</span><span class="cell__value">26.05</span><span class="cell__tint" style="background:#dc2559"></span></div>
        <div class="cell" data-cell="c-79-7"><span class="cell__label">c-79-7</span><span class="cell__value">72.94</span><span class="cell__tint" style="background:#42aec3"></span></div>
        <div class="cell" data-cell="c-79-8"><span class="cell__label">c-79-8</span><span class="cell__value">16.54</span><span class="cell__tint" style="background:#d86576"></span></div>
        <div class="cell" data-cell="c-79-9"><span class="cell__label">c-79-9</span><span class="cell__value">94.83</span><span class="cell__tint" style="background:#fb5ea6"></span></div>
        <div class="cell" data-cell="c-79-10"><span class="cell__label">c-79-10</span><span class="cell__value">2.25</span><span class="cell__tint" style="background:#91439f"></span></div>
        <div class="cell" data-cell="c-79-11"><span class="cell__label">c-79-11</span><span class="cell__value">61.04</span><span class="cell__tint" style="background:#30b0b2"></span></div>
        <div class="cell" data-cell="c-79-12"><span class="cell__label">c-79-12</span><span class="cell__value">2.24</span><span class="cell__tint" style="background:#c1bc6d"></span></div>
        <div class="cell" data-cell="c-79-13"><span class="cell__label">c-79-13</span><span class="cell__value">58.04</span><span class="cell__tint" style="background:#9c890b"></span></div>
        <div class="cell" data-cell="c-79-14"><span class="cell__label">c-79-14</span><span class="cell__value">90.61</span><span class="cell__tint" style="background:#570527"></span></div>
        <div class="cell" data-cell="c-79-15"><span class="cell__label">c-79-15</span><span class="cell__value">10.48</span><span class="cell__tint" style="background:#d2aaa2"></span></div>
        <div class="cell" data-cell="c-79-16"><span class="cell__label">c-79-16</span><span class="cell__value">67.72</span><span class="cell__tint" style="background:#b83825"></span></div>
        <div class="cell" data-cell="c-79-17"><span class="cell__label">c-79-17</span><span class="cell__value">76.49</span><span class="cell__tint" style="background:#9400ed"></span></div>
        <div class="cell" data-cell="c-79-18"><span class="cell__label">c-79-18</span><span class="cell__value">87.52</span><span class="cell__tint" style="background:#1c37ab"></span></div>
        <div class="cell" data-cell="c-79-19"><span class="cell__label">c-79-19</span><span class="cell__value">51.76</span><span class="cell__tint" style="background:#4f3590"></span></div>
      </div>
      <div class="row" data-row="r-80">
        <div class="cell" data-cell="c-80-0"><span class="cell__label">c-80-0</span><span class="cell__value">18.65</span><span class="cell__tint" style="background:#661d3f"></span></div>
        <div class="cell" data-cell="c-80-1"><span class="cell__label">c-80-1</span><span class="cell__value">81.03</span><span class="cell__tint" style="background:#52fc35"></span></div>
        <div class="cell" data-cell="c-80-2"><span class="cell__label">c-80-2</span><span class="cell__value">49.70</span><span class="cell__tint" style="background:#d1f631"></span></div>
        <div class="cell" data-cell="c-80-3"><span class="cell__label">c-80-3</span><span class="cell__value">73.77</span><span class="cell__tint" style="background:#b35799"></span></div>
        <div class="cell" data-cell="c-80-4"><span class="cell__label">c-80-4</span><span class="cell__value">14.25</span><span class="cell__tint" style="background:#f3dff5"></span></div>
        <div class="cell" data-cell="c-80-5"><span class="cell__label">c-80-5</span><span class="cell__value">77.69</span><span class="cell__tint" style="background:#e90f0b"></span></div>
        <div class="cell" data-cell="c-80-6"><span class="cell__label">c-80-6</span><span class="cell__value">92.56</span><span class="cell__tint" style="background:#a9adfa"></span></div>
        <div class="cell" data-cell="c-80-7"><span class="cell__label">c-80-7</span><span class="cell__value">91.86</span><span class="cell__tint" style="background:#d3f299"></span></div>
        <div class="cell" data-cell="c-80-8"><span class="cell__label">c-80-8</span><span class="cell__value">32.19</span><span class="cell__tint" style="background:#5295f5"></span></div>
        <div class="cell" data-cell="c-80-9"><span class="cell__label">c-80-9</span><span class="cell__value">49.59</span><span class="cell__tint" style="background:#4a8275"></span></div>
        <div class="cell" data-cell="c-80-10"><span class="cell__label">c-80-10</span><span class="cell__value">18.26</span><span class="cell__tint" style="background:#881340"></span></div>
        <div class="cell" data-cell="c-80-11"><span class="cell__label">c-80-11</span><span class="cell__value">36.92</span><span class="cell__tint" style="background:#bd6954"></span></div>
        <div class="cell" data-cell="c-80-12"><span class="cell__label">c-80-12</span><span class="cell__value">34.66</span><span class="cell__tint" style="background:#702ebd"></span></div>
        <div class="cell" data-cell="c-80-13"><span class="cell__label">c-80-13</span><span class="cell__value">53.76</span><span class="cell__tint" style="background:#3c5a39"></span></div>
        <div class="cell" data-cell="c-80-14"><span class="cell__label">c-80-14</span><span class="cell__value">4.34</span><span class="cell__tint" style="background:#588a92"></span></div>
        <div class="cell" data-cell="c-80-15"><span class="cell__label">c-80-15</span><span class="cell__value">28.26</span><span class="cell__tint" style="background:#06a6be"></span></div>
        <div class="cell" data-cell="c-80-16"><span class="cell__label">c-80-16</span><span class="cell__value">15.74</span><span class="cell__tint" style="background:#d06d96"></span></div>
        <div class="cell" data-cell="c-80-17"><span class="cell__label">c-80-17</span><span class="cell__value">34.48</span><span class="cell__tint" style="background:#121762"></span></div>
        <div class="cell" data-cell="c-80-18"><span class="cell__label">c-80-18</span><span class="cell__value">2.96</span><span class="cell__tint" style="background:#113d8b"></span></div>
        <div class="cell" data-cell="c-80-19"><span class="cell__label">c-80-19</span><span class="cell__value">35.31</span><span class="cell__tint" style="background:#7e3378"></span></div>
      </div>
      <div class="row" data-row="r-81">
        <div class="cell" data-cell="c-81-0"><span class="cell__label">c-81-0</span><span class="cell__value">18.17</span><span class="cell__tint" style="background:#380fde"></span></div>
        <div class="cell" data-cell="c-81-1"><span class="cell__label">c-81-1</span><span class="cell__value">87.93</span><span class="cell__tint" style="background:#9ae3a7"></span></div>
        <div class="cell" data-cell="c-81-2"><span class="cell__label">c-81-2</span><span class="cell__value">19.97</span><span class="cell__tint" style="background:#a96970"></span></div>
        <div class="cell" data-cell="c-81-3"><span class="cell__label">c-81-3</span><span class="cell__value">77.22</span><span class="cell__tint" style="background:#f91685"></span></div>
        <div class="cell" data-cell="c-81-4"><span class="cell__label">c-81-4</span><span class="cell__value">44.35</span><span class="cell__tint" style="background:#4b5890"></span></div>
        <div class="cell" data-cell="c-81-5"><span class="cell__label">c-81-5</span><span class="cell__value">68.50</span><span class="cell__tint" style="background:#8e2fd3"></span></div>
        <div class="cell" data-cell="c-81-6"><span class="cell__label">c-81-6</span><span class="cell__value">16.39</span><span class="cell__tint" style="background:#1176d0"></span></div>
        <div class="cell" data-cell="c-81-7"><span class="cell__label">c-81-7</span><span class="cell__value">21.13</span><span class="cell__tint" style="background:#47cad5"></span></div>
        <div class="cell" data-cell="c-81-8"><span class="cell__label">c-81-8</span><span class="cell__value">56.18</span><span class="cell__tint" style="background:#4c843d"></span></div>
        <div class="cell" data-cell="c-81-9"><span class="cell__label">c-81-9</span><span class="cell__value">24.26</span><span class="cell__tint" style="background:#8fb7db"></span></div>
        <div class="cell" data-cell="c-81-10"><span class="cell__label">c-81-10</span><span class="cell__value">48.72</span><span class="cell__tint" style="background:#bf5eb2"></span></div>
        <div class="cell" data-cell="c-81-11"><span class="cell__label">c-81-11</span><span class="cell__value">21.90</span><span class="cell__tint" style="background:#d3a0d6"></span></div>
        <div class="cell" data-cell="c-81-12"><span class="cell__label">c-81-12</span><span class="cell__value">13.39</span><span class="cell__tint" style="background:#dc6550"></span></div>
        <div class="cell" data-cell="c-81-13"><span class="cell__label">c-81-13</span><span class="cell__value">95.48</span><span class="cell__tint" style="background:#ec0ae7"></span></div>
        <div class="cell" data-cell="c-81-14"><span class="cell__label">c-81-14</span><span class="cell__value">44.79</span><span class="cell__tint" style="background:#5d9329"></span></div>
        <div class="cell" data-cell="c-81-15"><span class="cell__label">c-81-15</span><span class="cell__value">95.00</span><span class="cell__tint" style="background:#426adb"></span></div>
        <div class="cell" data-cell="c-81-16"><span class="cell__label">c-81-16</span><span class="cell__value">52.22</span><span class="cell__tint" style="background:#56bffd"></span></div>
        <div class="cell" data-cell="c-81-17"><span class="cell__label">c-81-17</span><span class="cell__value">86.93</span><span class="cell__tint" style="background:#caf8c7"></span></div>
        <div class="cell" data-cell="c-81-18"><span class="cell__label">c-81-18</span><span class="cell__value">12.13</span><span class="cell__tint" style="background:#2595bd"></span></div>
        <div class="cell" data-cell="c-81-19"><span class="cell__label">c-81-19</span><span class="cell__value">9.82</span><span class="cell__tint" style="background:#6c6d60"></span></div>
      </div>
      <div class="row" data-row="r-82">
        <div class="cell" data-cell="c-82-0"><span class="cell__label">c-82-0</span><span class="cell__value">69.79</span><span class="cell__tint" style="background:#e5c6f4"></span></div>
        <div class="cell" data-cell="c-82-1"><span class="cell__label">c-82-1</span><span class="cell__value">40.00</span><span class="cell__tint" style="background:#29775f"></span></div>
        <div class="cell" data-cell="c-82-2"><span class="cell__label">c-82-2</span><span class="cell__value">33.76</span><span class="cell__tint" style="background:#3fcb91"></span></div>
        <div class="cell" data-cell="c-82-3"><span class="cell__label">c-82-3</span><span class="cell__value">24.42</span><span class="cell__tint" style="background:#02db07"></span></div>
        <div class="cell" data-cell="c-82-4"><span class="cell__label">c-82-4</span><span class="cell__value">57.47</span><span class="cell__tint" style="background:#a51b6c"></span></div>
        <div class="cell" data-cell="c-82-5"><span class="cell__label">c-82-5</span><span class="cell__value">7.03</span><span class="cell__tint" style="background:#e17800"></span></div>
        <div class="cell" data-cell="c-82-6"><span class="cell__label">c-82-6</span><span class="cell__value">28.37</span><span class="cell__tint" style="background:#958836"></span></div>
        <div class="cell" data-cell="c-82-7"><span class="cell__label">c-82-7</span><span class="cell__value">68.65</span><span class="cell__tint" style="background:#709900"></span></div>
        <div class="cell" data-cell="c-82-8"><span class="cell__label">c-82-8</span><span class="cell__value">83.27</span><span class="cell__tint" style="background:#28a4e9"></span></div>
        <div class="cell" data-cell="c-82-9"><span class="cell__label">c-82-9</span><span class="cell__value">59.62</span><span class="cell__tint" style="background:#005352"></span></div>
        <div class="cell" data-cell="c-82-10"><span class="cell__label">c-82-10</span><span class="cell__value">49.20</span><span class="cell__tint" style="background:#094dde"></span></div>
        <div class="cell" data-cell="c-82-11"><span class="cell__label">c-82-11</span><span class="cell__value">19.94</span><span class="cell__tint" style="background:#76bc10"></span></div>
        <div class="cell" data-cell="c-82-12"><span class="cell__label">c-82-12</span><span class="cell__value">85.09</span><span class="cell__tint" style="background:#b85395"></span></div>
        <div class="cell" data-cell="c-82-13"><span class="cell__label">c-82-13</span><span class="cell__value">87.82</span><span class="cell__tint" style="background:#ac11b3"></span></div>
        <div class="cell" data-cell="c-82-14"><span class="cell__label">c-82-14</span><span class="cell__value">19.80</span><span class="cell__tint" style="background:#55fd93"></span></div>
        <div class="cell" data-cell="c-82-15"><span class="cell__label">c-82-15</span><span class="cell__value">41.45</span><span class="cell__tint" style="background:#0c0842"></span></div>
        <div class="cell" data-cell="c-82-16"><span class="cell__label">c-82-16</span><span class="cell__value">31.43</span><span class="cell__tint" style="background:#a4c0c8"></span></div>
        <div class="cell" data-cell="c-82-17"><span class="cell__label">c-82-17</span><span class="cell__value">89.32</span><span class="cell__tint" style="background:#80c256"></span></div>
        <div class="cell" data-cell="c-82-18"><span class="cell__label">c-82-18</span><span class="cell__value">21.13</span><span class="cell__tint" style="background:#18e91a"></span></div>
        <div class="cell" data-cell="c-82-19"><span class="cell__label">c-82-19</span><span class="cell__value">17.01</span><span class="cell__tint" style="background:#1e3206"></span></div>
      </div>
      <div class="row" data-row="r-83">
        <div class="cell" data-cell="c-83-0"><span class="cell__label">c-83-0</span><span class="cell__value">11.16</span><span class="cell__tint" style="background:#eaa8a1"></span></div>
        <div class="cell" data-cell="c-83-1"><span class="cell__label">c-83-1</span><span class="cell__value">33.48</span><span class="cell__tint" style="background:#53f538"></span></div>
        <div class="cell" data-cell="c-83-2"><span class="cell__label">c-83-2</span><span class="cell__value">18.53</span><span class="cell__tint" style="background:#f1d070"></span></div>
        <div class="cell" data-cell="c-83-3"><span class="cell__label">c-83-3</span><span class="cell__value">76.02</span><span class="cell__tint" style="background:#79a102"></span></div>
        <div class="cell" data-cell="c-83-4"><span class="cell__label">c-83-4</span><span class="cell__value">9.35</span><span class="cell__tint" style="background:#cfea0d"></span></div>
        <div class="cell" data-cell="c-83-5"><span class="cell__label">c-83-5</span><span class="cell__value">67.07</span><span class="cell__tint" style="background:#b3239a"></span></div>
        <div class="cell" data-cell="c-83-6"><span class="cell__label">c-83-6</span><span class="cell__value">84.38</span><span class="cell__tint" style="background:#5a4ec2"></span></div>
        <div class="cell" data-cell="c-83-7"><span class="cell__label">c-83-7</span><span class="cell__value">33.28</span><span class="cell__tint" style="background:#6e2312"></span></div>
        <div class="cell" data-cell="c-83-8"><span class="cell__label">c-83-8</span><span class="cell__value">20.91</span><span class="cell__tint" style="background:#d31e27"></span></div>
        <div class="cell" data-cell="c-83-9"><span class="cell__label">c-83-9</span><span class="cell__value">36.96</span><span class="cell__tint" style="background:#66e403"></span></div>
        <div class="cell" data-cell="c-83-10"><span class="cell__label">c-83-10</span><span class="cell__value">28.33</span><span class="cell__tint" style="background:#a3dc2a"></span></div>
        <div class="cell" data-cell="c-83-11"><span class="cell__label">c-83-11</span><span class="cell__value">80.46</span><span class="cell__tint" style="background:#4fa889"></span></div>
        <div class="cell" data-cell="c-83-12"><span class="cell__label">c-83-12</span><span class="cell__value">39.26</span><span class="cell__tint" style="background:#38ef1b"></span></div>
        <div class="cell" data-cell="c-83-13"><span class="cell__label">c-83-13</span><span class="cell__value">31.37</span><span class="cell__tint" style="background:#1d4309"></span></div>
        <div class="cell" data-cell="c-83-14"><span class="cell__label">c-83-14</span><span class="cell__value">11.08</span><span class="cell__tint" style="background:#888a6c"></span></div>
        <div class="cell" data-cell="c-83-15"><span class="cell__label">c-83-15</span><span class="cell__value">20.42</span><span class="cell__tint" style="background:#12052d"></span></div>
        <div class="cell" data-cell="c-83-16"><span class="cell__label">c-83-16</span><span class="cell__value">25.26</span><span class="cell__tint" style="background:#bf41c8"></span></div>
        <div class="cell" data-cell="c-83-17"><span class="cell__label">c-83-17</span><span class="cell__value">67.25</span><span class="cell__tint" style="background:#0b6069"></span></div>
        <div class="cell" data-cell="c-83-18"><span class="cell__label">c-83-18</span><span class="cell__value">77.39</span><span class="cell__tint" style="background:#fc8d9c"></span></div>
        <div class="cell" data-cell="c-83-19"><span class="cell__label">c-83-19</span><span class="cell__value">71.94</span><span class="cell__tint" style="background:#f9692e"></span></div>
      </div>
      <div class="row" data-row="r-84">
        <div class="cell" data-cell="c-84-0"><span class="cell__label">c-84-0</span><span class="cell__value">21.32</span><span class="cell__tint" style="background:#9a3799"></span></div>
        <div class="cell" data-cell="c-84-1"><span class="cell__label">c-84-1</span><span class="cell__value">93.51</span><span class="cell__tint" style="background:#22ee8e"></span></div>
        <div class="cell" data-cell="c-84-2"><span class="cell__label">c-84-2</span><span class="cell__value">46.20</span><span class="cell__tint" style="background:#f52f57"></span></div>
        <div class="cell" data-cell="c-84-3"><span class="cell__label">c-84-3</span><span class="cell__value">31.68</span><span class="cell__tint" style="background:#c483fd"></span></div>
        <div class="cell" data-cell="c-84-4"><span class="cell__label">c-84-4</span><span class="cell__value">59.70</span><span class="cell__tint" style="background:#ed010d"></span></div>
        <div class="cell" data-cell="c-84-5"><span class="cell__label">c-84-5</span><span class="cell__value">2.11</span><span class="cell__tint" style="background:#2f0e81"></span></div>
        <div class="cell" data-cell="c-84-6"><span class="cell__label">c-84-6</span><span class="cell__value">27.29</span><span class="cell__tint" style="background:#e0bccb"></span></div>
        <div class="cell" data-cell="c-84-7"><span class="cell__label">c-84-7</span><span class="cell__value">64.44</span><span class="cell__tint" style="background:#d8bd22"></span></div>
        <div class="cell" data-cell="c-84-8"><span class="cell__label">c-84-8</span><span class="cell__value">11.79</span><span class="cell__tint" style="background:#6e1d7b"></span></div>
        <div class="cell" data-cell="c-84-9"><span class="cell__label">c-84-9</span><span class="cell__value">86.51</span><span class="cell__tint" style="background:#7f4cf5"></span></div>
        <div class="cell" data-cell="c-84-10"><span class="cell__label">c-84-10</span><span class="cell__value">68.17</span><span class="cell__tint" style="background:#572fa4"></span></div>
        <div class="cell" data-cell="c-84-11"><span class="cell__label">c-84-11</span><span class="cell__value">77.38</span><span class="cell__tint" style="background:#ac4628"></span></div>
        <div class="cell" data-cell="c-84-12"><span class="cell__label">c-84-12</span><span class="cell__value">1.56</span><span class="cell__tint" style="background:#389e04"></span></div>
        <div class="cell" data-cell="c-84-13"><span class="cell__label">c-84-13</span><span class="cell__value">80.66</span><span class="cell__tint" style="background:#9da7ca"></span></div>
        <div class="cell" data-cell="c-84-14"><span class="cell__label">c-84-14</span><span class="cell__value">68.27</span><span class="cell__tint" style="background:#1032fb"></span></div>
        <div class="cell" data-cell="c-84-15"><span class="cell__label">c-84-15</span><span class="cell__value">85.59</span><span class="cell__tint" style="background:#75c09f"></span></div>
        <div class="cell" data-cell="c-84-16"><span class="cell__label">c-84-16</span><span class="cell__value">63.07</span><span class="cell__tint" style="background:#1e0fc0"></span></div>
        <div class="cell" data-cell="c-84-17"><span class="cell__label">c-84-17</span><span class="cell__value">0.16</span><span class="cell__tint" style="background:#c0f9d3"></span></div>
        <div class="cell" data-cell="c-84-18"><span class="cell__label">c-84-18</span><span class="cell__value">25.70</span><span class="cell__tint" style="background:#6b6cf7"></span></div>
        <div class="cell" data-cell="c-84-19"><span class="cell__label">c-84-19</span><span class="cell__value">62.87</span><span class="cell__tint" style="background:#aca327"></span></div>
      </div>
      <div class="row" data-row="r-85">
        <div class="cell" data-cell="c-85-0"><span class="cell__label">c-85-0</span><span class="cell__value">63.90</span><span class="cell__tint" style="background:#76537d"></span></div>
        <div class="cell" data-cell="c-85-1"><span class="cell__label">c-85-1</span><span class="cell__value">30.27</span><span class="cell__tint" style="background:#0ffb5c"></span></div>
        <div class="cell" data-cell="c-85-2"><span class="cell__label">c-85-2</span><span class="cell__value">31.43</span><span class="cell__tint" style="background:#6acf66"></span></div>
        <div class="cell" data-cell="c-85-3"><span class="cell__label">c-85-3</span><span class="cell__value">90.51</span><span class="cell__tint" style="background:#39a6c4"></span></div>
        <div class="cell" data-cell="c-85-4"><span class="cell__label">c-85-4</span><span class="cell__value">88.25</span><span class="cell__tint" style="background:#248d74"></span></div>
        <div class="cell" data-cell="c-85-5"><span class="cell__label">c-85-5</span><span class="cell__value">86.91</span><span class="cell__tint" style="background:#f5c6d6"></span></div>
        <div class="cell" data-cell="c-85-6"><span class="cell__label">c-85-6</span><span class="cell__value">74.19</span><span class="cell__tint" style="background:#eec794"></span></div>
        <div class="cell" data-cell="c-85-7"><span class="cell__label">c-85-7</span><span class="cell__value">83.55</span><span class="cell__tint" style="background:#edde2b"></span></div>
        <div class="cell" data-cell="c-85-8"><span class="cell__label">c-85-8</span><span class="cell__value">4.36</span><span class="cell__tint" style="background:#51ee4c"></span></div>
        <div class="cell" data-cell="c-85-9"><span class="cell__label">c-85-9</span><span class="cell__value">53.66</span><span class="cell__tint" style="background:#8f4c1b"></span></div>
        <div class="cell" data-cell="c-85-10"><span class="cell__label">c-85-10</span><span class="cell__value">16.08</span><span class="cell__tint" style="background:#5635a7"></span></div>
        <div class="cell" data-cell="c-85-11"><span class="cell__label">c-85-11</span><span class="cell__value">99.68</span><span class="cell__tint" style="background:#21d21d"></span></div>
        <div class="cell" data-cell="c-85-12"><span class="cell__label">c-85-12</span><span class="cell__value">42.27</span><span class="cell__tint" style="background:#835188"></span></div>
        <div class="cell" data-cell="c-85-13"><span class="cell__label">c-85-13</span><span class="cell__value">65.70</span><span class="cell__tint" style="background:#a3a991"></span></div>
        <div class="cell" data-cell="c-85-14"><span class="cell__label">c-85-14</span><span class="cell__value">3.11</span><span class="cell__tint" style="background:#232126"></span></div>
        <div class="cell" data-cell="c-85-15"><span class="cell__label">c-85-15</span><span class="cell__value">75.34</span><span class="cell__tint" style="background:#1500ab"></span></div>
        <div class="cell" data-cell="c-85-16"><span class="cell__label">c-85-16</span><span class="cell__value">93.37</span><span class="cell__tint" style="background:#2911d7"></span></div>
        <div class="cell" data-cell="c-85-17"><span class="cell__label">c-85-17</span><span class="cell__value">27.13</span><span class="cell__tint" style="background:#5a5f58"></span></div>
        <div class="cell" data-cell="c-85-18"><span class="cell__label">c-85-18</span><span class="cell__value">36.02</span><span class="cell__tint" style="background:#ab8317"></span></div>
        <div class="cell" data-cell="c-85-19"><span class="cell__label">c-85-19</span><span class="cell__value">97.19</span><span class="cell__tint" style="background:#50d9d1"></span></div>
      </div>
      <div class="row" data-row="r-86">
        <div class="cell" data-cell="c-86-0"><span class="cell__label">c-86-0</span><span class="cell__value">85.39</span><span class="cell__tint" style="background:#fa7fea"></span></div>
        <div class="cell" data-cell="c-86-1"><span class="cell__label">c-86-1</span><span class="cell__value">40.95</span><span class="cell__tint" style="background:#4d7035"></span></div>
        <div class="cell" data-cell="c-86-2"><span class="cell__label">c-86-2</span><span class="cell__value">30.29</span><span class="cell__tint" style="background:#d72f9b"></span></div>
        <div class="cell" data-cell="c-86-3"><span class="cell__label">c-86-3</span><span class="cell__value">51.64</span><span class="cell__tint" style="background:#fe086d"></span></div>
        <div class="cell" data-cell="c-86-4"><span class="cell__label">c-86-4</span><span class="cell__value">56.57</span><span class="cell__tint" style="background:#c6c37e"></span></div>
        <div class="cell" data-cell="c-86-5"><span class="cell__label">c-86-5</span><span class="cell__value">91.82</span><span class="cell__tint" style="background:#3c589c"></span></div>
        <div class="cell" data-cell="c-86-6"><span class="cell__label">c-86-6</span><span class="cell__value">75.58</span><span class="cell__tint" style="background:#afcbd4"></span></div>
        <div class="cell" data-cell="c-86-7"><span class="cell__label">c-86-7</span><span class="cell__value">90.24</span><span class="cell__tint" style="background:#16f066"></span></div>
        <div class="cell" data-cell="c-86-8"><span class="cell__label">c-86-8</span><span class="cell__value">68.29</span><span class="cell__tint" style="background:#c46adc"></span></div>
        <div class="cell" data-cell="c-86-9"><span class="cell__label">c-86-9</span><span class="cell__value">55.94</span><span class="cell__tint" style="background:#fda29d"></span></div>
        <div class="cell" data-cell="c-86-10"><span class="cell__label">c-86-10</span><span class="cell__value">12.68</span><span class="cell__tint" style="background:#d497dd"></span></div>
        <div class="cell" data-cell="c-86-11"><span class="cell__label">c-86-11</span><span class="cell__value">95.58</span><span class="cell__tint" style="background:#cea2ba"></span></div>
        <div class="cell" data-cell="c-86-12"><span class="cell__label">c-86-12</span><span class="cell__value">87.36</span><span class="cell__tint" style="background:#d5a8b0"></span></div>
        <div class="cell" data-cell="c-86-13"><span class="cell__label">c-86-13</span><span class="cell__value">51.69</span><span class="cell__tint" style="background:#e417ab"></span></div>
        <div class="cell" data-cell="c-86-14"><span class="cell__label">c-86-14</span><span class="cell__value">36.20</span><span class="cell__tint" style="background:#6fe5ea"></span></div>
        <div class="cell" data-cell="c-86-15"><span class="cell__label">c-86-15</span><span class="cell__value">73.89</span><span class="cell__tint" style="background:#b6296c"></span></div>
        <div class="cell" data-cell="c-86-16"><span class="cell__label">c-86-16</span><span class="cell__value">47.56</span><span class="cell__tint" style="background:#48f422"></span></div>
        <div class="cell" data-cell="c-86-17"><span class="cell__label">c-86-17</span><span class="cell__value">16.68</span><span class="cell__tint" style="background:#d22039"></span></div>
        <div class="cell" data-cell="c-86-18"><span class="cell__label">c-86-18</span><span class="cell__value">76.90</span><span class="cell__tint" style="background:#b50d43"></span></div>
        <div class="cell" data-cell="c-86-19"><span class="cell__label">c-86-19</span><span class="cell__value">88.08</span><span class="cell__tint" style="background:#dae825"></span></div>
      </div>
      <div class="row" data-row="r-87">
        <div class="cell" data-cell="c-87-0"><span class="cell__label">c-87-0</span><span class="cell__value">5.03</span><span class="cell__tint" style="background:#71ff7e"></span></div>
        <div class="cell" data-cell="c-87-1"><span class="cell__label">c-87-1</span><span class="cell__value">67.73</span><span class="cell__tint" style="background:#ff54fd"></span></div>
        <div class="cell" data-cell="c-87-2"><span class="cell__label">c-87-2</span><span class="cell__value">80.81</span><span class="cell__tint" style="background:#8e372d"></span></div>
        <div class="cell" data-cell="c-87-3"><span class="cell__label">c-87-3</span><span class="cell__value">66.87</span><span class="cell__tint" style="background:#bf81a6"></span></div>
        <div class="cell" data-cell="c-87-4"><span class="cell__label">c-87-4</span><span class="cell__value">82.93</span><span class="cell__tint" style="background:#cb2177"></span></div>
        <div class="cell" data-cell="c-87-5"><span class="cell__label">c-87-5</span><span class="cell__value">18.62</span><span class="cell__tint" style="background:#dfc18a"></span></div>
        <div class="cell" data-cell="c-87-6"><span class="cell__label">c-87-6</span><span class="cell__value">33.26</span><span class="cell__tint" style="background:#f975f7"></span></div>
        <div class="cell" data-cell="c-87-7"><span class="cell__label">c-87-7</span><span class="cell__value">49.95</span><span class="cell__tint" style="background:#b5100f"></span></div>
        <div class="cell" data-cell="c-87-8"><span class="cell__label">c-87-8</span><span class="cell__value">99.01</span><span class="cell__tint" style="background:#b04b56"></span></div>
        <div class="cell" data-cell="c-87-9"><span class="cell__label">c-87-9</span><span class="cell__value">8.16</span><span class="cell__tint" style="background:#9a2349"></span></div>
        <div class="cell" data-cell="c-87-10"><span class="cell__label">c-87-10</span><span class="cell__value">34.16</span><span class="cell__tint" style="background:#5c749f"></span></div>
        <div class="cell" data-cell="c-87-11"><span class="cell__label">c-87-11</span><span class="cell__value">34.72</span><span class="cell__tint" style="background:#7b7360"></span></div>
        <div class="cell" data-cell="c-87-12"><span class="cell__label">c-87-12</span><span class="cell__value">70.08</span><span class="cell__tint" style="background:#2b82b5"></span></div>
        <div class="cell" data-cell="c-87-13"><span class="cell__label">c-87-13</span><span class="cell__value">32.96</span><span class="cell__tint" style="background:#7a7a9a"></span></div>
        <div class="cell" data-cell="c-87-14"><span class="cell__label">c-87-14</span><span class="cell__value">95.07</span><span class="cell__tint" style="background:#deade5"></span></div>
        <div class="cell" data-cell="c-87-15"><span class="cell__label">c-87-15</span><span class="cell__value">8.54</span><span class="cell__tint" style="background:#05edd6"></span></div>
        <div class="cell" data-cell="c-87-16"><span class="cell__label">c-87-16</span><span class="cell__value">1.65</span><span class="cell__tint" style="background:#1a3d1d"></span></div>
        <div class="cell" data-cell="c-87-17"><span class="cell__label">c-87-17</span><span class="cell__value">0.83</span><span class="cell__tint" style="background:#b8ac85"></span></div>
        <div class="cell" data-cell="c-87-18"><span class="cell__label">c-87-18</span><span class="cell__value">81.55</span><span class="cell__tint" style="background:#499ad6"></span></div>
        <div class="cell" data-cell="c-87-19"><span class="cell__label">c-87-19</span><span class="cell__value">10.95</span><span class="cell__tint" style="background:#938862"></span></div>
      </div>
      <div class="row" data-row="r-88">
        <div class="cell" data-cell="c-88-0"><span class="cell__label">c-88-0</span><span class="cell__value">20.39</span><span class="cell__tint" style="background:#0ded34"></span></div>
        <div class="cell" data-cell="c-88-1"><span class="cell__label">c-88-1</span><span class="cell__value">84.13</span><span class="cell__tint" style="background:#906d06"></span></div>
        <div class="cell" data-cell="c-88-2"><span class="cell__label">c-88-2</span><span class="cell__value">68.69</span><span class="cell__tint" style="background:#8a0d8d"></span></div>
        <div class="cell" data-cell="c-88-3"><span class="cell__label">c-88-3</span><span class="cell__value">20.51</span><span class="cell__tint" style="background:#ee73dc"></span></div>
        <div class="cell" data-cell="c-88-4"><span class="cell__label">c-88-4</span><span class="cell__value">28.22</span><span class="cell__tint" style="background:#46c928"></span></div>
        <div class="cell" data-cell="c-88-5"><span class="cell__label">c-88-5</span><span class="cell__value">81.74</span><span class="cell__tint" style="background:#2bad94"></span></div>
        <div class="cell" data-cell="c-88-6"><span class="cell__label">c-88-6</span><span class="cell__value">55.41</span><span class="cell__tint" style="background:#97d862"></span></div>
        <div class="cell" data-cell="c-88-7"><span class="cell__label">c-88-7</span><span class="cell__value">23.85</span><span class="cell__tint" style="background:#1d77a6"></span></div>
        <div class="cell" data-cell="c-88-8"><span class="cell__label">c-88-8</span><span class="cell__value">53.51</span><span class="cell__tint" style="background:#6fe4cf"></span></div>
        <div class="cell" data-cell="c-88-9"><span class="cell__label">c-88-9</span><span class="cell__value">87.36</span><span class="cell__tint" style="background:#a796c8"></span></div>
        <div class="cell" data-cell="c-88-10"><span class="cell__label">c-88-10</span><span class="cell__value">22.88</span><span class="cell__tint" style="background:#b67311"></span></div>
        <div class="cell" data-cell="c-88-11"><span class="cell__label">c-88-11</span><span class="cell__value">47.52</span><span class="cell__tint" style="background:#2b4e77"></span></div>
        <div class="cell" data-cell="c-88-12"><span class="cell__label">c-88-12</span><span class="cell__value">89.98</span><span class="cell__tint" style="background:#10a169"></span></div>
        <div class="cell" data-cell="c-88-13"><span class="cell__label">c-88-13</span><span class="cell__value">16.68</span><span class="cell__tint" style="background:#8beb87"></span></div>
        <div class="cell" data-cell="c-88-14"><span class="cell__label">c-88-14</span><span class="cell__value">87.44</span><span class="cell__tint" style="background:#5a905c"></span></div>
        <div class="cell" data-cell="c-88-15"><span class="cell__label">c-88-15</span><span class="cell__value">92.57</span><span class="cell__tint" style="background:#2266d1"></span></div>
        <div class="cell" data-cell="c-88-16"><span class="cell__label">c-88-16</span><span class="cell__value">56.62</span><span class="cell__tint" style="background:#be6d54"></span></div>
        <div class="cell" data-cell="c-88-17"><span class="cell__label">c-88-17</span><span class="cell__value">28.15</span><span class="cell__tint" style="background:#460409"></span></div>
        <div class="cell" data-cell="c-88-18"><span class="cell__label">c-88-18</span><span class="cell__value">79.36</span><span class="cell__tint" style="background:#f6eb9d"></span></div>
        <div class="cell" data-cell="c-88-19"><span class="cell__label">c-88-19</span><span class="cell__value">87.07</span><span class="cell__tint" style="background:#017e48"></span></div>
      </div>
      <div class="row" data-row="r-89">
        <div class="cell" data-cell="c-89-0"><span class="cell__label">c-89-0</span><span class="cell__value">30.72</span><span class="cell__tint" style="background:#564f09"></span></div>
        <div class="cell" data-cell="c-89-1"><span class="cell__label">c-89-1</span><span class="cell__value">53.51</span><span class="cell__tint" style="background:#a43eae"></span></div>
        <div class="cell" data-cell="c-89-2"><span class="cell__label">c-89-2</span><span class="cell__value">24.39</span><span class="cell__tint" style="background:#6d4ed9"></span></div>
        <div class="cell" data-cell="c-89-3"><span class="cell__label">c-89-3</span><span class="cell__value">88.61</span><span class="cell__tint" style="background:#dafded"></span></div>
        <div class="cell" data-cell="c-89-4"><span class="cell__label">c-89-4</span><span class="cell__value">94.35</span><span class="cell__tint" style="background:#ab4f84"></span></div>
        <div class="cell" data-cell="c-89-5"><span class="cell__label">c-89-5</span><span class="cell__value">94.01</span><span class="cell__tint" style="background:#8b2dac"></span></div>
        <div class="cell" data-cell="c-89-6"><span class="cell__label">c-89-6</span><span class="cell__value">11.48</span><span class="cell__tint" style="background:#42009c"></span></div>
        <div class="cell" data-cell="c-89-7"><span class="cell__label">c-89-7</span><span class="cell__value">28.47</span><span class="cell__tint" style="background:#6c6e5e"></span></div>
        <div class="cell" data-cell="c-89-8"><span class="cell__label">c-89-8</span><span class="cell__value">56.25</span><span class="cell__tint" style="background:#01cb54"></span></div>
        <div class="cell" data-cell="c-89-9"><span class="cell__label">c-89-9</span><span class="cell__value">46.00</span><span class="cell__tint" style="background:#39c677"></span></div>
        <div class="cell" data-cell="c-89-10"><span class="cell__label">c-89-10</span><span class="cell__value">34.30</span><span class="cell__tint" style="background:#e86bf6"></span></div>
        <div class="cell" data-cell="c-89-11"><span class="cell__label">c-89-11</span><span class="cell__value">92.05</span><span class="cell__tint" style="background:#2c6e75"></span></div>
        <div class="cell" data-cell="c-89-12"><span class="cell__label">c-89-12</span><span class="cell__value">92.18</span><span class="cell__tint" style="background:#cc255d"></span></div>
        <div class="cell" data-cell="c-89-13"><span class="cell__label">c-89-13</span><span class="cell__value">3.23</span><span class="cell__tint" style="background:#fcde79"></span></div>
        <div class="cell" data-cell="c-89-14"><span class="cell__label">c-89-14</span><span class="cell__value">48.92</span><span class="cell__tint" style="background:#2a745c"></span></div>
        <div class="cell" data-cell="c-89-15"><span class="cell__label">c-89-15</span><span class="cell__value">57.69</span><span class="cell__tint" style="background:#b25aa8"></span></div>
        <div class="cell" data-cell="c-89-16"><span class="cell__label">c-89-16</span><span class="cell__value">77.04</span><span class="cell__tint" style="background:#09ea1a"></span></div>
        <div class="cell" data-cell="c-89-17"><span class="cell__label">c-89-17</span><span class="cell__value">95.35</span><span class="cell__tint" style="background:#ad2b26"></span></div>
        <div class="cell" data-cell="c-89-18"><span class="cell__label">c-89-18</span><span class="cell__value">11.03</span><span class="cell__tint" style="background:#441125"></span></div>
        <div class="cell" data-cell="c-89-19"><span class="cell__label">c-89-19</span><span class="cell__value">82.93</span><span class="cell__tint" style="background:#83ff08"></span></div>
      </div>
      <div class="row" data-row="r-90">
        <div class="cell" data-cell="c-90-0"><span class="cell__label">c-90-0</span><span class="cell__value">33.03</span><span class="cell__tint" style="background:#c7eb60"></span></div>
        <div class="cell" data-cell="c-90-1"><span class="cell__label">c-90-1</span><span class="cell__value">57.77</span><span class="cell__tint" style="background:#4edcf2"></span></div>
        <div class="cell" data-cell="c-90-2"><span class="cell__label">c-90-2</span><span class="cell__value">6.26</span><span class="cell__tint" style="background:#9524f3"></span></div>
        <div class="cell" data-cell="c-90-3"><span class="cell__label">c-90-3</span><span class="cell__value">88.43</span><span class="cell__tint" style="background:#addfc6"></span></div>
        <div class="cell" data-cell="c-90-4"><span class="cell__label">c-90-4</span><span class="cell__value">87.37</span><span class="cell__tint" style="background:#9e108d"></span></div>
        <div class="cell" data-cell="c-90-5"><span class="cell__label">c-90-5</span><span class="cell__value">89.99</span><span class="cell__tint" style="background:#fd6c85"></span></div>
        <div class="cell" data-cell="c-90-6"><span class="cell__label">c-90-6</span><span class="cell__value">3.76</span><span class="cell__tint" style="background:#e2bc54"></span></div>
        <div class="cell" data-cell="c-90-7"><span class="cell__label">c-90-7</span><span class="cell__value">94.95</span><span class="cell__tint" style="background:#379d64"></span></div>
        <div class="cell" data-cell="c-90-8"><span class="cell__label">c-90-8</span><span class="cell__value">98.24</span><span class="cell__tint" style="background:#9c39ae"></span></div>
        <div class="cell" data-cell="c-90-9"><span class="cell__label">c-90-9</span><span class="cell__value">14.07</span><span class="cell__tint" style="background:#d74836"></span></div>
        <div class="cell" data-cell="c-90-10"><span class="cell__label">c-90-10</span><span class="cell__value">86.72</span><span class="cell__tint" style="background:#9f20eb"></span></div>
        <div class="cell" data-cell="c-90-11"><span class="cell__label">c-90-11</span><span class="cell__value">46.90</span><span class="cell__tint" style="background:#2b894e"></span></div>
        <div class="cell" data-cell="c-90-12"><span class="cell__label">c-90-12</span><span class="cell__value">21.92</span><span class="cell__tint" style="background:#dbaffc"></span></div>
        <div class="cell" data-cell="c-90-13"><span class="cell__label">c-90-13</span><span class="cell__value">76.22</span><span class="cell__tint" style="background:#e3e15d"></span></div>
        <div class="cell" data-cell="c-90-14"><span class="cell__label">c-90-14</span><span class="cell__value">75.51</span><span class="cell__tint" style="background:#73c77b"></span></div>
        <div class="cell" data-cell="c-90-15"><span class="cell__label">c-90-15</span><span class="cell__value">23.51</span><span class="cell__tint" style="background:#71d23e"></span></div>
        <div class="cell" data-cell="c-90-16"><span class="cell__label">c-90-16</span><span class="cell__value">89.49</span><span class="cell__tint" style="background:#d7ced2"></span></div>
        <div class="cell" data-cell="c-90-17"><span class="cell__label">c-90-17</span><span class="cell__value">58.25</span><span class="cell__tint" style="background:#426134"></span></div>
        <div class="cell" data-cell="c-90-18"><span class="cell__label">c-90-18</span><span class="cell__value">70.51</span><span class="cell__tint" style="background:#250ef8"></span></div>
        <div class="cell" data-cell="c-90-19"><span class="cell__label">c-90-19</span><span class="cell__value">94.37</span><span class="cell__tint" style="background:#48129a"></span></div>
      </div>
      <div class="row" data-row="r-91">
        <div class="cell" data-cell="c-91-0"><span class="cell__label">c-91-0</span><span class="cell__value">31.70</span><span class="cell__tint" style="background:#3b51e7"></span></div>
        <div class="cell" data-cell="c-91-1"><span class="cell__label">c-91-1</span><span class="cell__value">39.20</span><span class="cell__tint" style="background:#fa5d36"></span></div>
        <div class="cell" data-cell="c-91-2"><span class="cell__label">c-91-2</span><span class="cell__value">89.29</span><span class="cell__tint" style="background:#45b341"></span></div>
        <div class="cell" data-cell="c-91-3"><span class="cell__label">c-91-3</span><span class="cell__value">0.15</span><span class="cell__tint" style="background:#1a204d"></span></div>
        <div class="cell" data-cell="c-91-4"><span class="cell__label">c-91-4</span><span class="cell__value">41.14</span><span class="cell__tint" style="background:#891896"></span></div>
        <div class="cell" data-cell="c-91-5"><span class="cell__label">c-91-5</span><span class="cell__value">36.75</span><span class="cell__tint" style="background:#bc1bd7"></span></div>
        <div class="cell" data-cell="c-91-6"><span class="cell__label">c-91-6</span><span class="cell__value">84.22</span><span class="cell__tint" style="background:#a8feae"></span></div>
        <div class="cell" data-cell="c-91-7"><span class="cell__label">c-91-7</span><span class="cell__value">87.52</span><span class="cell__tint" style="background:#0b6da5"></span></div>
        <div class="cell" data-cell="c-91-8"><span class="cell__label">c-91-8</span><span class="cell__value">55.80</span><span class="cell__tint" style="background:#b9156b"></span></div>
        <div class="cell" data-cell="c-91-9"><span class="cell__label">c-91-9</span><span class="cell__value">31.24</span><span class="cell__tint" style="background:#94be35"></span></div>
        <div class="cell" data-cell="c-91-10"><span class="cell__label">c-91-10</span><span class="cell__value">23.26</span><span class="cell__tint" style="background:#108959"></span></div>
        <div class="cell" data-cell="c-91-11"><span class="cell__label">c-91-11</span><span class="cell__value">6.77</span><span class="cell__tint" style="background:#3d39e8"></span></div>
        <div class="cell" data-cell="c-91-12"><span class="cell__label">c-91-12</span><span class="cell__value">62.28</span><span class="cell__tint" style="background:#25ec94"></span></div>
        <div class="cell" data-cell="c-91-13"><span class="cell__label">c-91-13</span><span class="cell__value">78.75</span><span class="cell__tint" style="background:#e11860"></span></div>
        <div class="cell" data-cell="c-91-14"><span class="cell__label">c-91-14</span><span class="cell__value">1.58</span><span class="cell__tint" style="background:#21f99f"></span></div>
        <div class="cell" data-cell="c-91-15"><span class="cell__label">c-91-15</span><span class="cell__value">75.20</span><span class="cell__tint" style="background:#5407d9"></span></div>
        <div class="cell" data-cell="c-91-16"><span class="cell__label">c-91-16</span><span class="cell__value">77.14</span><span class="cell__tint" style="background:#5cad69"></span></div>
        <div class="cell" data-cell="c-91-17"><span class="cell__label">c-91-17</span><span class="cell__value">58.09</span><span class="cell__tint" style="background:#2ce45e"></span></div>
        <div class="cell" data-cell="c-91-18"><span class="cell__label">c-91-18</span><span class="cell__value">69.32</span><span class="cell__tint" style="background:#819a54"></span></div>
        <div class="cell" data-cell="c-91-19"><span class="cell__label">c-91-19</span><span class="cell__value">88.53</span><span class="cell__tint" style="background:#14b516"></span></div>
      </div>
      <div class="row" data-row="r-92">
        <div class="cell" data-cell="c-92-0"><span class="cell__label">c-92-0</span><span class="cell__value">14.29</span><span class="cell__tint" style="background:#6536ac"></span></div>
        <div class="cell" data-cell="c-92-1"><span class="cell__label">c-92-1</span><span class="cell__value">85.63</span><span class="cell__tint" style="background:#85b99e"></span></div>
        <div class="cell" data-cell="c-92-2"><span class="cell__label">c-92-2</span><span class="cell__value">52.96</span><span class="cell__tint" style="background:#7f6818"></span></div>
        <div class="cell" data-cell="c-92-3"><span class="cell__label">c-92-3</span><span class="cell__value">57.39</span><span class="cell__tint" style="background:#609956"></span></div>
        <div class="cell" data-cell="c-92-4"><span class="cell__label">c-92-4</span><span class="cell__value">91.19</span><span class="cell__tint" style="background:#09aad6"></span></div>
        <div class="cell" data-cell="c-92-5"><span class="cell__label">c-92-5</span><span class="cell__value">1.57</span><span class="cell__tint" style="background:#257172"></span></div>
        <div class="cell" data-cell="c-92-6"><span class="cell__label">c-92-6</span><span class="cell__value">12.41</span><span class="cell__tint" style="background:#ef32c3"></span></div>
        <div class="cell" data-cell="c-92-7"><span class="cell__label">c-92-7</span><span class="cell__value">75.54</span><span class="cell__tint" style="background:#c763ba"></span></div>
        <div class="cell" data-cell="c-92-8"><span class="cell__label">c-92-8</span><span class="cell__value">57.23</span><span class="cell__tint" style="background:#66cef8"></span></div>
        <div class="cell" data-cell="c-92-9"><span class="cell__label">c-92-9</span><span class="cell__value">97.29</span><span class="cell__tint" style="background:#833e74"></span></div>
        <div class="cell" data-cell="c-92-10"><span class="cell__label">c-92-10</span><span class="cell__value">33.56</span><span class="cell__tint" style="background:#5d2f0c"></span></div>
        <div class="cell" data-cell="c-92-11"><span class="cell__label">c-92-11</span><span class="cell__value">22.70</span><span class="cell__tint" style="background:#810caa"></span></div>
        <div class="cell" data-cell="c-92-12"><span class="cell__label">c-92-12</span><span class="cell__value">62.58</span><span class="cell__tint" style="background:#bb9a36"></span></div>
        <div class="cell" data-cell="c-92-13"><span class="cell__label">c-92-13</span><span class="cell__value">91.86</span><span class="cell__tint" style="background:#e00873"></span></div>
        <div class="cell" data-cell="c-92-14"><span class="cell__label">c-92-14</span><span class="cell__value">7.46</span><span class="cell__tint" style="background:#642d53"></span></div>
        <div class="cell" data-cell="c-92-15"><span class="cell__label">c-92-15</span><span class="cell__value">94.63</span><span class="cell__tint" style="background:#087186"></span></div>
        <div class="cell" data-cell="c-92-16"><span class="cell__label">c-92-16</span><span class="cell__value">2.22</span><span class="cell__tint" style="background:#8b0c52"></span></div>
        <div class="cell" data-cell="c-92-17"><span class="cell__label">c-92-17</span><span class="cell__value">45.15</span><span class="cell__tint" style="background:#6a4190"></span></div>
        <div class="cell" data-cell="c-92-18"><span class="cell__label">c-92-18</span><span class="cell__value">42.95</span><span class="cell__tint" style="background:#06ce4f"></span></div>
        <div class="cell" data-cell="c-92-19"><span class="cell__label">c-92-19</span><span class="cell__value">14.49</span><span class="cell__tint" style="background:#7b7896"></span></div>
      </div>
      <div class="row" data-row="r-93">
        <div class="cell" data-cell="c-93-0"><span class="cell__label">c-93-0</span><span class="cell__value">48.30</span><span class="cell__tint" style="background:#cb0ef8"></span></div>
        <div class="cell" data-cell="c-93-1"><span class="cell__label">c-93-1</span><span class="cell__value">89.46</span><span class="cell__tint" style="background:#cd5373"></span></div>
        <div class="cell" data-cell="c-93-2"><span class="cell__label">c-93-2</span><span class="cell__value">7.10</span><span class="cell__tint" style="background:#1414f1"></span></div>
        <div class="cell" data-cell="c-93-3"><span class="cell__label">c-93-3</span><span class="cell__value">35.94</span><span class="cell__tint" style="background:#dc80fd"></span></div>
        <div class="cell" data-cell="c-93-4"><span class="cell__label">c-93-4</span><span class="cell__value">20.22</span><span class="cell__tint" style="background:#300c8e"></span></div>
        <div class="cell" data-cell="c-93-5"><span class="cell__label">c-93-5</span><span class="cell__value">77.56</span><span class="cell__tint" style="background:#70ba70"></span></div>
        <div class="cell" data-cell="c-93-6"><span class="cell__label">c-93-6</span><span class="cell__value">95.29</span><span class="cell__tint" style="background:#03416e"></span></div>
        <div class="cell" data-cell="c-93-7"><span class="cell__label">c-93-7</span><span class="cell__value">13.04</span><span class="cell__tint" style="background:#a4e3e9"></span></div>
        <div class="cell" data-cell="c-93-8"><span class="cell__label">c-93-8</span><span class="cell__value">70.40</span><span class="cell__tint" style="background:#c22ac3"></span></div>
        <div class="cell" data-cell="c-93-9"><span class="cell__label">c-93-9</span><span class="cell__value">81.00</span><span class="cell__tint" style="background:#a33cc0"></span></div>
        <div class="cell" data-cell="c-93-10"><span class="cell__label">c-93-10</span><span class="cell__value">41.83</span><span class="cell__tint" style="background:#38a8c8"></span></div>
        <div class="cell" data-cell="c-93-11"><span class="cell__label">c-93-11</span><span class="cell__value">64.68</span><span class="cell__tint" style="background:#37b981"></span></div>
        <div class="cell" data-cell="c-93-12"><span class="cell__label">c-93-12</span><span class="cell__value">48.97</span><span class="cell__tint" style="background:#ef16ee"></span></div>
        <div class="cell" data-cell="c-93-13"><span class="cell__label">c-93-13</span><span class="cell__value">89.35</span><span class="cell__tint" style="background:#0f60f9"></span></div>
        <div class="cell" data-cell="c-93-14"><span class="cell__label">c-93-14</span><span class="cell__value">43.65</span><span class="cell__tint" style="background:#d8833c"></span></div>
        <div class="cell" data-cell="c-93-15"><span class="cell__label">c-93-15</span><span class="cell__value">39.69</span><span class="cell__tint" style="background:#2bef43"></span></div>
        <div class="cell" data-cell="c-93-16"><span class="cell__label">c-93-16</span><span class="cell__value">66.28</span><span class="cell__tint" style="background:#b809a8"></span></div>
        <div class="cell" data-cell="c-93-17"><span class="cell__label">c-93-17</span><span class="cell__value">25.99</span><span class="cell__tint" style="background:#cc5efc"></span></div>
        <div class="cell" data-cell="c-93-18"><span class="cell__label">c-93-18</span><span class="cell__value">61.48</span><span class="cell__tint" style="background:#855039"></span></div>
        <div class="cell" data-cell="c-93-19"><span class="cell__label">c-93-19</span><span class="cell__value">90.29</span><span class="cell__tint" style="background:#b9ab67"></span></div>
      </div>
      <div class="row" data-row="r-94">
        <div class="cell" data-cell="c-94-0"><span class="cell__label">c-94-0</span><span class="cell__value">19.05</span><span class="cell__tint" style="background:#3ad7c1"></span></div>
        <div class="cell" data-cell="c-94-1"><span class="cell__label">c-94-1</span><span class="cell__value">17.93</span><span class="cell__tint" style="background:#74bf95"></span></div>
        <div class="cell" data-cell="c-94-2"><span class="cell__label">c-94-2</span><span class="cell__value">80.52</span><span class="cell__tint" style="background:#a6e810"></span></div>
        <div class="cell" data-cell="c-94-3"><span class="cell__label">c-94-3</span><span class="cell__value">57.54</span><span class="cell__tint" style="background:#b58fac"></span></div>
        <div class="cell" data-cell="c-94-4"><span class="cell__label">c-94-4</span><span class="cell__value">86.93</span><span class="cell__tint" style="background:#eba11f"></span></div>
        <div class="cell" data-cell="c-94-5"><span class="cell__label">c-94-5</span><span class="cell__value">10.70</span><span class="cell__tint" style="background:#a977a5"></span></div>
        <div class="cell" data-cell="c-94-6"><span class="cell__label">c-94-6</span><span class="cell__value">74.56</span><span class="cell__tint" style="background:#c7b832"></span></div>
        <div class="cell" data-cell="c-94-7"><span class="cell__label">c-94-7</span><span class="cell__value">14.92</span><span class="cell__tint" style="background:#0d8b52"></span></div>
        <div class="cell" data-cell="c-94-8"><span class="cell__label">c-94-8</span><span class="cell__value">91.94</span><span class="cell__tint" style="background:#7fbe24"></span></div>
        <div class="cell" data-cell="c-94-9"><span class="cell__label">c-94-9</span><span class="cell__value">61.01</span><span class="cell__tint" style="background:#df132a"></span></div>
        <div class="cell" data-cell="c-94-10"><span class="cell__label">c-94-10</span><span class="cell__value">92.34</span><span class="cell__tint" style="background:#d0a631"></span></div>
        <div class="cell" data-cell="c-94-11"><span class="cell__label">c-94-11</span><span class="cell__value">5.12</span><span class="cell__tint" style="background:#049cac"></span></div>
        <div class="cell" data-cell="c-94-12"><span class="cell__label">c-94-12</span><span class="cell__value">48.70</span><span class="cell__tint" style="background:#7fc856"></span></div>
        <div class="cell" data-cell="c-94-13"><span class="cell__label">c-94-13</span><span class="cell__value">9.81</span><span class="cell__tint" style="background:#0bd2ff"></span></div>
        <div class="cell" data-cell="c-94-14"><span class="cell__label">c-94-14</span><span class="cell__value">76.79</span><span class="cell__tint" style="background:#801ad3"></span></div>
        <div class="cell" data-cell="c-94-15"><span class="cell__label">c-94-15</span><span class="cell__value">71.31</span><span class="cell__tint" style="background:#d1d0ee"></span></div>
        <div class="cell" data-cell="c-94-16"><span class="cell__label">c-94-16</span><span class="cell__value">20.73</span><span class="cell__tint" style="background:#0f7863"></span></div>
        <div class="cell" data-cell="c-94-17"><span class="cell__label">c-94-17</span><span class="cell__value">68.60</span><span class="cell__tint" style="background:#96c6f4"></span></div>
        <div class="cell" data-cell="c-94-18"><span class="cell__label">c-94-18</span><span class="cell__value">15.23</span><span class="cell__tint" style="background:#b0f6c9"></span></div>
        <div class="cell" data-cell="c-94-19"><span class="cell__label">c-94-19</span><span class="cell__value">12.72</span><span class="cell__tint" style="background:#0946f8"></span></div>
      </div>
      <div class="row" data-row="r-95">
        <div class="cell" data-cell="c-95-0"><span class="cell__label">c-95-0</span><span class="cell__value">96.03</span><span class="cell__tint" style="background:#593a2f"></span></div>
        <div class="cell" data-cell="c-95-1"><span class="cell__label">c-95-1</span><span class="cell__value">10.35</span><span class="cell__tint" style="background:#5317bd"></span></div>
        <div class="cell" data-cell="c-95-2"><span class="cell__label">c-95-2</span><span class="cell__value">46.22</span><span class="cell__tint" style="background:#40a02b"></span></div>
        <div class="cell" data-cell="c-95-3"><span class="cell__label">c-95-3</span><span class="cell__value">87.90</span><span class="cell__tint" style="background:#cf70d7"></span></div>
        <div class="cell" data-cell="c-95-4"><span class="cell__label">c-95-4</span><span class="cell__value">47.65</span><span class="cell__tint" style="background:#19c657"></span></div>
        <div class="cell" data-cell="c-95-5"><span class="cell__label">c-95-5</span><span class="cell__value">44.24</span><span class="cell__tint" style="background:#31b5f1"></span></div>
        <div class="cell" data-cell="c-95-6"><span class="cell__label">c-95-6</span><span class="cell__value">74.81</span><span class="cell__tint" style="background:#3b312b"></span></div>
        <div class="cell" data-cell="c-95-7"><span class="cell__label">c-95-7</span><span class="cell__value">8.29</span><span class="cell__tint" style="background:#206a2b"></span></div>
        <div class="cell" data-cell="c-95-8"><span class="cell__label">c-95-8</span><span class="cell__value">8.42</span><span class="cell__tint" style="background:#e4fa07"></span></div>
        <div class="cell" data-cell="c-95-9"><span class="cell__label">c-95-9</span><span class="cell__value">13.29</span><span class="cell__tint" style="background:#956863"></span></div>
        <div class="cell" data-cell="c-95-10"><span class="cell__label">c-95-10</span><span class="cell__value">23.09</span><span class="cell__tint" style="background:#bc2df1"></span></div>
        <div class="cell" data-cell="c-95-11"><span class="cell__label">c-95-11</span><span class="cell__value">59.39</span><span class="cell__tint" style="background:#5c5c69"></span></div>
        <div class="cell" data-cell="c-95-12"><span class="cell__label">c-95-12</span><span class="cell__value">55.42</span><span class="cell__tint" style="background:#1bbf7f"></span></div>
        <div class="cell" data-cell="c-95-13"><span class="cell__label">c-95-13</span><span class="cell__value">58.78</span><span class="cell__tint" style="background:#4a9340"></span></div>
        <div class="cell" data-cell="c-95-14"><span class="cell__label">c-95-14</span><span class="cell__value">87.30</span><span class="cell__tint" style="background:#0a4037"></span></div>
        <div class="cell" data-cell="c-95-15"><span class="cell__label">c-95-15</span><span class="cell__value">2.79</span><span class="cell__tint" style="background:#e3c862"></span></div>
        <div class="cell" data-cell="c-95-16"><span class="cell__label">c-95-16</span><span class="cell__value">13.76</span><span class="cell__tint" style="background:#ecdadf"></span></div>
        <div class="cell" data-cell="c-95-17"><span class="cell__label">c-95-17</span><span class="cell__value">52.00</span><span class="cell__tint" style="background:#feeb86"></span></div>
        <div class="cell" data-cell="c-95-18"><span class="cell__label">c-95-18</span><span class="cell__value">41.89</span><span class="cell__tint" style="background:#b56def"></span></div>
        <div class="cell" data-cell="c-95-19"><span class="cell__label">c-95-19</span><span class="cell__value">41.30</span><span class="cell__tint" style="background:#9958b4"></span></div>
      </div>
      <div class="row" data-row="r-96">
        <div class="cell" data-cell="c-96-0"><span class="cell__label">c-96-0</span><span class="cell__value">44.36</span><span class="cell__tint" style="background:#b762c4"></span></div>
        <div class="cell" data-cell="c-96-1"><span class="cell__label">c-96-1</span><span class="cell__value">88.43</span><span class="cell__tint" style="background:#dcbc0c"></span></div>
        <div class="cell" data-cell="c-96-2"><span class="cell__label">c-96-2</span><span class="cell__value">63.49</span><span class="cell__tint" style="background:#300ebf"></span></div>
        <div class="cell" data-cell="c-96-3"><span class="cell__label">c-96-3</span><span class="cell__value">82.66</span><span class="cell__tint" style="background:#cb6976"></span></div>
        <div class="cell" data-cell="c-96-4"><span class="cell__label">c-96-4</span><span class="cell__value">14.45</span><span class="cell__tint" style="background:#695092"></span></div>
        <div class="cell" data-cell="c-96-5"><span class="cell__label">c-96-5</span><span class="cell__value">17.35</span><span class="cell__tint" style="background:#ad7df9"></span></div>
        <div class="cell" data-cell="c-96-6"><span class="cell__label">c-96-6</span><span class="cell__value">18.27</span><span class="cell__tint" style="background:#c99e09"></span></div>
        <div class="cell" data-cell="c-96-7"><span class="cell__label">c-96-7</span><span class="cell__value">51.63</span><span class="cell__tint" style="background:#7f8f5f"></span></div>
        <div class="cell" data-cell="c-96-8"><span class="cell__label">c-96-8</span><span class="cell__value">26.51</span><span class="cell__tint" style="background:#e77754"></span></div>
        <div class="cell" data-cell="c-96-9"><span class="cell__label">c-96-9</span><span class="cell__value">59.80</span><span class="cell__tint" style="background:#dab6c1"></span></div>
        <div class="cell" data-cell="c-96-10"><span class="cell__label">c-96-10</span><span class="cell__value">86.84</span><span class="cell__tint" style="background:#6d1bb7"></span></div>
        <div class="cell" data-cell="c-96-11"><span class="cell__label">c-96-11</span><span class="cell__value">70.93</span><span class="cell__tint" style="background:#73816c"></span></div>
        <div class="cell" data-cell="c-96-12"><span class="cell__label">c-96-12</span><span class="cell__value">93.01</span><span class="cell__tint" style="background:#a01412"></span></div>
        <div class="cell" data-cell="c-96-13"><span class="cell__label">c-96-13</span><span class="cell__value">37.93</span><span class="cell__tint" style="background:#997c0e"></span></div>
        <div class="cell" data-cell="c-96-14"><span class="cell__label">c-96-14</span><span class="cell__value">62.85</span><span class="cell__tint" style="background:#06b7c4"></span></div>
        <div class="cell" data-cell="c-96-15"><span class="cell__label">c-96-15</span><span class="cell__value">47.95</span><span class="cell__tint" style="background:#563bd3"></span></div>
        <div class="cell" data-cell="c-96-16"><span class="cell__label">c-96-16</span><span class="cell__value">38.32</span><span class="cell__tint" style="background:#f6589d"></span></div>
        <div class="cell" data-cell="c-96-17"><span class="cell__label">c-96-17</span><span class="cell__value">35.74</span><span class="cell__tint" style="background:#d17d5b"></span></div>
        <div class="cell" data-cell="c-96-18"><span class="cell__label">c-96-18</span><span class="cell__value">51.75</span><span class="cell__tint" style="background:#79825a"></span></div>
        <div class="cell" data-cell="c-96-19"><span class="cell__label">c-96-19</span><span class="cell__value">39.14</span><span class="cell__tint" style="background:#8fbe15"></span></div>
      </div>
      <div class="row" data-row="r-97">
        <div class="cell" data-cell="c-97-0"><span class="cell__label">c-97-0</span><span class="cell__value">5.21</span><span class="cell__tint" style="background:#6ca5e0"></span></div>
        <div class="cell" data-cell="c-97-1"><span class="cell__label">c-97-1</span><span class="cell__value">85.28</span><span class="cell__tint" style="background:#8032ba"></span></div>
        <div class="cell" data-cell="c-97-2"><span class="cell__label">c-97-2</span><span class="cell__value">68.16</span><span class="cell__tint" style="background:#155708"></span></div>
        <div class="cell" data-cell="c-97-3"><span class="cell__label">c-97-3</span><span class="cell__value">12.01</span><span class="cell__tint" style="background:#bd1b28"></span></div>
        <div class="cell" data-cell="c-97-4"><span class="cell__label">c-97-4</span><span class="cell__value">74.59</span><span class="cell__tint" style="background:#8210a4"></span></div>
        <div class="cell" data-cell="c-97-5"><span class="cell__label">c-97-5</span><span class="cell__value">84.97</span><span class="cell__tint" style="background:#a04b7e"></span></div>
        <div class="cell" data-cell="c-97-6"><span class="cell__label">c-97-6</span><span class="cell__value">54.07</span><span class="cell__tint" style="background:#6a0a04"></span></div>
        <div class="cell" data-cell="c-97-7"><span class="cell__label">c-97-7</span><span class="cell__value">41.57</span><span class="cell__tint" style="background:#b7d7bc"></span></div>
        <div class="cell" data-cell="c-97-8"><span class="cell__label">c-97-8</span><span class="cell__value">90.51</span><span class="cell__tint" style="background:#5bb770"></span></div>
        <div class="cell" data-cell="c-97-9"><span class="cell__label">c-97-9</span><span class="cell__value">84.77</span><span class="cell__tint" style="background:#ecc9fc"></span></div>
        <div class="cell" data-cell="c-97-10"><span class="cell__label">c-97-10</span><span class="cell__value">17.36</span><span class="cell__tint" style="background:#a160b3"></span></div>
        <div class="cell" data-cell="c-97-11"><span class="cell__label">c-97-11</span><span class="cell__value">0.88</span><span class="cell__tint" style="background:#434716"></span></div>
        <div class="cell" data-cell="c-97-12"><span class="cell__label">c-97-12</span><span class="cell__value">99.91</span><span class="cell__tint" style="background:#7d1fb5"></span></div>
        <div class="cell" data-cell="c-97-13"><span class="cell__label">c-97-13</span><span class="cell__value">85.84</span><span class="cell__tint" style="background:#bb8f19"></span></div>
        <div class="cell" data-cell="c-97-14"><span class="cell__label">c-97-14</span><span class="cell__value">7.20</span><span class="cell__tint" style="background:#f686b0"></span></div>
        <div class="cell" data-cell="c-97-15"><span class="cell__label">c-97-15</span><span class="cell__value">93.82</span><span class="cell__tint" style="background:#68fdcc"></span></div>
        <div class="cell" data-cell="c-97-16"><span class="cell__label">c-97-16</span><span class="cell__value">12.08</span><span class="cell__tint" style="background:#68ca98"></span></div>
        <div class="cell" data-cell="c-97-17"><span class="cell__label">c-97-17</span><span class="cell__value">30.06</span><span class="cell__tint" style="background:#b8a2d9"></span></div>
        <div class="cell" data-cell="c-97-18"><span class="cell__label">c-97-18</span><span class="cell__value">80.53</span><span class="cell__tint" style="background:#0731f6"></span></div>
        <div class="cell" data-cell="c-97-19"><span class="cell__label">c-97-19</span><span class="cell__value">25.49</span><span class="cell__tint" style="background:#e7f567"></span></div>
      </div>
      <div class="row" data-row="r-98">
        <div class="cell" data-cell="c-98-0"><span class="cell__label">c-98-0</span><span class="cell__value">74.95</span><span class="cell__tint" style="background:#236218"></span></div>
        <div class="cell" data-cell="c-98-1"><span class="cell__label">c-98-1</span><span class="cell__value">67.27</span><span class="cell__tint" style="background:#24c57b"></span></div>
        <div class="cell" data-cell="c-98-2"><span class="cell__label">c-98-2</span><span class="cell__value">14.52</span><span class="cell__tint" style="background:#03b58e"></span></div>
        <div class="cell" data-cell="c-98-3"><span class="cell__label">c-98-3</span><span class="cell__value">79.43</span><span class="cell__tint" style="background:#229a72"></span></div>
        <div class="cell" data-cell="c-98-4"><span class="cell__label">c-98-4</span><span class="cell__value">52.44</span><span class="cell__tint" style="background:#5521df"></span></div>
        <div class="cell" data-cell="c-98-5"><span class="cell__label">c-98-5</span><span class="cell__value">53.22</span><span class="cell__tint" style="background:#1ed299"></span></div>
        <div class="cell" data-cell="c-98-6"><span class="cell__label">c-98-6</span><span class="cell__value">85.26</span><span class="cell__tint" style="background:#e94b54"></span></div>
        <div class="cell" data-cell="c-98-7"><span class="cell__label">c-98-7</span><span class="cell__value">90.80</span><span class="cell__tint" style="background:#6b7ba9"></span></div>
        <div class="cell" data-cell="c-98-8"><span class="cell__label">c-98-8</span><span class="cell__value">70.02</span><span class="cell__tint" style="background:#61ec59"></span></div>
        <div class="cell" data-cell="c-98-9"><span class="cell__label">c-98-9</span><span class="cell__value">27.50</span><span class="cell__tint" style="background:#19f5a7"></span></div>
        <div class="cell" data-cell="c-98-10"><span class="cell__label">c-98-10</span><span class="cell__value">89.78</span><span class="cell__tint" style="background:#6d80cf"></span></div>
        <div class="cell" data-cell="c-98-11"><span class="cell__label">c-98-11</span><span class="cell__value">69.89</span><span class="cell__tint" style="background:#caa42e"></span></div>
        <div class="cell" data-cell="c-98-12"><span class="cell__label">c-98-12</span><span class="cell__value">94.39</span><span class="cell__tint" style="background:#801d5d"></span></div>
        <div class="cell" data-cell="c-98-13"><span class="cell__label">c-98-13</span><span class="cell__value">56.16</span><span class="cell__tint" style="background:#1b8aed"></span></div>
        <div class="cell" data-cell="c-98-14"><span class="cell__label">c-98-14</span><span class="cell__value">79.76</span><span class="cell__tint" style="background:#7b3564"></span></div>
        <div class="cell" data-cell="c-98-15"><span class="cell__label">c-98-15</span><span class="cell__value">26.92</span><span class="cell__tint" style="background:#fa087f"></span></div>
        <div class="cell" data-cell="c-98-16"><span class="cell__label">c-98-16</span><span class="cell__value">69.77</span><span class="cell__tint" style="background:#1ed4fd"></span></div>
        <div class="cell" data-cell="c-98-17"><span class="cell__label">c-98-17</span><span class="cell__value">94.06</span><span class="cell__tint" style="background:#26c368"></span></div>
        <div class="cell" data-cell="c-98-18"><span class="cell__label">c-98-18</span><span class="cell__value">39.13</span><span class="cell__tint" style="background:#a25221"></span></div>
        <div class="cell" data-cell="c-98-19"><span class="cell__label">c-98-19</span><span class="cell__value">33.13</span><span class="cell__tint" style="background:#a48583"></span></div>
      </div>
      <div class="row" data-row="r-99">
        <div class="cell" data-cell="c-99-0"><span class="cell__label">c-99-0</span><span class="cell__value">57.12</span><span class="cell__tint" style="background:#8f83fd"></span></div>
        <div class="cell" data-cell="c-99-1"><span class="cell__label">c-99-1</span><span class="cell__value">84.21</span><span class="cell__tint" style="background:#a34cae"></span></div>
        <div class="cell" data-cell="c-99-2"><span class="cell__label">c-99-2</span><span class="cell__value">89.64</span><span class="cell__tint" style="background:#f6879f"></span></div>
        <div class="cell" data-cell="c-99-3"><span class="cell__label">c-99-3</span><span class="cell__value">12.79</span><span class="cell__tint" style="background:#6f17b1"></span></div>
        <div class="cell" data-cell="c-99-4"><span class="cell__label">c-99-4</span><span class="cell__value">37.70</span><span class="cell__tint" style="background:#60637b"></span></div>
        <div class="cell" data-cell="c-99-5"><span class="cell__label">c-99-5</span><span class="cell__value">24.27</span><span class="cell__tint" style="background:#0dfe74"></span></div>
        <div class="cell" data-cell="c-99-6"><span class="cell__label">c-99-6</span><span class="cell__value">69.11</span><span class="cell__tint" style="background:#86c3c1"></span></div>
        <div class="cell" data-cell="c-99-7"><span class="cell__label">c-99-7</span><span class="cell__value">14.88</span><span class="cell__tint" style="background:#1eda54"></span></div>
        <div class="cell" data-cell="c-99-8"><span class="cell__label">c-99-8</span><span class="cell__value">61.72</span><span class="cell__tint" style="background:#a2e04a"></span></div>
        <div class="cell" data-cell="c-99-9"><span class="cell__label">c-99-9</span><span class="cell__value">92.03</span><span class="cell__tint" style="background:#27171f"></span></div>
        <div class="cell" data-cell="c-99-10"><span class="cell__label">c-99-10</span><span class="cell__value">45.57</span><span class="cell__tint" style="background:#37dc4c"></span></div>
        <div class="cell" data-cell="c-99-11"><span class="cell__label">c-99-11</span><span class="cell__value">55.74</span><span class="cell__tint" style="background:#839f80"></span></div>
        <div class="cell" data-cell="c-99-12"><span class="cell__label">c-99-12</span><span class="cell__value">62.10</span><span class="cell__tint" style="background:#b668ae"></span></div>
        <div class="cell" data-cell="c-99-13"><span class="cell__label">c-99-13</span><span class="cell__value">6.79</span><span class="cell__tint" style="background:#f1a221"></span></div>
        <div class="cell" data-cell="c-99-14"><span class="cell__label">c-99-14</span><span class="cell__value">82.98</span><span class="cell__tint" style="background:#98bbaf"></span></div>
        <div class="cell" data-cell="c-99-15"><span class="cell__label">c-99-15</span><span class="cell__value">64.52</span><span class="cell__tint" style="background:#056d91"></span></div>
        <div class="cell" data-cell="c-99-16"><span class="cell__label">c-99-16</span><span class="cell__value">9.41</span><span class="cell__tint" style="background:#f28a97"></span></div>
        <div class="cell" data-cell="c-99-17"><span class="cell__label">c-99-17</span><span class="cell__value">22.95</span><span class="cell__tint" style="background:#3424d8"></span></div>
        <div class="cell" data-cell="c-99-18"><span class="cell__label">c-99-18</span><span class="cell__value">45.50</span><span class="cell__tint" style="background:#b46a11"></span></div>
        <div class="cell" data-cell="c-99-19"><span class="cell__label">c-99-19</span><span class="cell__value">30.90</span><span class="cell__tint" style="background:#bd8524"></span></div>
      </div>
      <div class="row" data-row="r-100">
        <div class="cell" data-cell="c-100-0"><span class="cell__label">c-100-0</span><span class="cell__value">15.43</span><span class="cell__tint" style="background:#58b629"></span></div>
        <div class="cell" data-cell="c-100-1"><span class="cell__label">c-100-1</span><span class="cell__value">33.91</span><span class="cell__tint" style="background:#57ab7a"></span></div>
        <div class="cell" data-cell="c-100-2"><span class="cell__label">c-100-2</span><span class="cell__value">98.75</span><span class="cell__tint" style="background:#bc67a3"></span></div>
        <div class="cell" data-cell="c-100-3"><span class="cell__label">c-100-3</span><span class="cell__value">66.36</span><span class="cell__tint" style="background:#da7d86"></span></div>
        <div class="cell" data-cell="c-100-4"><span class="cell__label">c-100-4</span><span class="cell__value">12.52</span><span class="cell__tint" style="background:#ee613f"></span></div>
        <div class="cell" data-cell="c-100-5"><span class="cell__label">c-100-5</span><span class="cell__value">94.60</span><span class="cell__tint" style="background:#6507e5"></span></div>
        <div class="cell" data-cell="c-100-6"><span class="cell__label">c-100-6</span><span class="cell__value">49.88</span><span class="cell__tint" style="background:#f8bcbe"></span></div>
        <div class="cell" data-cell="c-100-7"><span class="cell__label">c-100-7</span><span class="cell__value">18.73</span><span class="cell__tint" style="background:#b6e992"></span></div>
        <div class="cell" data-cell="c-100-8"><span class="cell__label">c-100-8</span><span class="cell__value">8.44</span><span class="cell__tint" style="background:#6f1a74"></span></div>
        <div class="cell" data-cell="c-100-9"><span class="cell__label">c-100-9</span><span class="cell__value">5.88</span><span class="cell__tint" style="background:#289d57"></span></div>
        <div class="cell" data-cell="c-100-10"><span class="cell__label">c-100-10</span><span class="cell__value">30.86</span><span class="cell__tint" style="background:#1a924a"></span></div>
        <div class="cell" data-cell="c-100-11"><span class="cell__label">c-100-11</span><span class="cell__value">36.10</span><span class="cell__tint" style="background:#5d2f19"></span></div>
        <div class="cell" data-cell="c-100-12"><span class="cell__label">c-100-12</span><span class="cell__value">1.15</span><span class="cell__tint" style="background:#5e9008"></span></div>
        <div class="cell" data-cell="c-100-13"><span class="cell__label">c-100-13</span><span class="cell__value">28.95</span><span class="cell__tint" style="background:#196b67"></span></div>
        <div class="cell" data-cell="c-100-14"><span class="cell__label">c-100-14</span><span class="cell__value">53.66</span><span class="cell__tint" style="background:#49369b"></span></div>
        <div class="cell" data-cell="c-100-15"><span class="cell__label">c-100-15</span><span class="cell__value">99.53</span><span class="cell__tint" style="background:#514d63"></span></div>
        <div class="cell" data-cell="c-100-16"><span class="cell__label">c-100-16</span><span class="cell__value">34.01</span><span class="cell__tint" style="background:#c36220"></span></div>
        <div class="cell" data-cell="c-100-17"><span class="cell__label">c-100-17</span><span class="cell__value">39.37</span><span class="cell__tint" style="background:#625b57"></span></div>
        <div class="cell" data-cell="c-100-18"><span class="cell__label">c-100-18</span><span class="cell__value">51.12</span><span class="cell__tint" style="background:#2ee230"></span></div>
        <div class="cell" data-cell="c-100-19"><span class="cell__label">c-100-19</span><span class="cell__value">50.82</span><span class="cell__tint" style="background:#149390"></span></div>
      </div>
      <div class="row" data-row="r-101">
        <div class="cell" data-cell="c-101-0"><span class="cell__label">c-101-0</span><span class="cell__value">65.21</span><span class="cell__tint" style="background:#048b64"></span></div>
        <div class="cell" data-cell="c-101-1"><span class="cell__label">c-101-1</span><span class="cell__value">45.43</span><span class="cell__tint" style="background:#29c16b"></span></div>
        <div class="cell" data-cell="c-101-2"><span class="cell__label">c-101-2</span><span class="cell__value">99.08</span><span class="cell__tint" style="background:#caf90d"></span></div>
        <div class="cell" data-cell="c-101-3"><span class="cell__label">c-101-3</span><span class="cell__value">37.40</span><span class="cell__tint" style="background:#4c186e"></span></div>
        <div class="cell" data-cell="c-101-4"><span class="cell__label">c-101-4</span><span class="cell__value">57.80</span><span class="cell__tint" style="background:#74b24f"></span></div>
        <div class="cell" data-cell="c-101-5"><span class="cell__label">c-101-5</span><span class="cell__value">33.94</span><span class="cell__tint" style="background:#2aa1af"></span></div>
        <div class="cell" data-cell="c-101-6"><span class="cell__label">c-101-6</span><span class="cell__value">10.53</span><span class="cell__tint" style="background:#baebda"></span></div>
        <div class="cell" data-cell="c-101-7"><span class="cell__label">c-101-7</span><span class="cell__value">30.23</span><span class="cell__tint" style="background:#35f6e4"></span></div>
        <div class="cell" data-cell="c-101-8"><span class="cell__label">c-101-8</span><span class="cell__value">82.58</span><span class="cell__tint" style="background:#9a1f39"></span></div>
        <div class="cell" data-cell="c-101-9"><span class="cell__label">c-101-9</span><span class="cell__value">36.91</span><span class="cell__tint" style="background:#d82715"></span></div>
        <div class="cell" data-cell="c-101-10"><span class="cell__label">c-101-10</span><span class="cell__value">67.99</span><span class="cell__tint" style="background:#083f2c"></span></div>
        <div class="cell" data-cell="c-101-11"><span class="cell__label">c-101-11</span><span class="cell__value">23.79</span><span class="cell__tint" style="background:#d1a7e0"></span></div>
        <div class="cell" data-cell="c-101-12"><span class="cell__label">c-101-12</span><span class="cell__value">58.95</span><span class="cell__tint" style="background:#f1b0ab"></span></div>
        <div class="cell" data-cell="c-101-13"><span class="cell__label">c-101-13</span><span class="cell__value">80.34</span><span class="cell__tint" style="background:#862755"></span></div>
        <div class="cell" data-cell="c-101-14"><span class="cell__label">c-101-14</span><span class="cell__value">65.23</span><span class="cell__tint" style="background:#7ec980"></span></div>
        <div class="cell" data-cell="c-101-15"><span class="cell__label">c-101-15</span><span class="cell__value">82.85</span><span class="cell__tint" style="background:#d8ce83"></span></div>
        <div class="cell" data-cell="c-101-16"><span class="cell__label">c-101-16</span><span class="cell__value">74.75</span><span class="cell__tint" style="background:#f0908b"></span></div>
        <div class="cell" data-cell="c-101-17"><span class="cell__label">c-101-17</span><span class="cell__value">15.14</span><span class="cell__tint" style="background:#50f8ad"></span></div>
        <div class="cell" data-cell="c-101-18"><span class="cell__label">c-101-18</span><span class="cell__value">15.75</span><span class="cell__tint" style="background:#b64875"></span></div>
        <div class="cell" data-cell="c-101-19"><span class="cell__label">c-101-19</span><span class="cell__value">15.99</span><span class="cell__tint" style="background:#e86a09"></span></div>
      </div>
      <div class="row" data-row="r-102">
        <div class="cell" data-cell="c-102-0"><span class="cell__label">c-102-0</span><span class="cell__value">25.47</span><span class="cell__tint" style="background:#83ec5e"></span></div>
        <div class="cell" data-cell="c-102-1"><span class="cell__label">c-102-1</span><span class="cell__value">98.37</span><span class="cell__tint" style="background:#6dbc0e"></span></div>
        <div class="cell" data-cell="c-102-2"><span class="cell__label">c-102-2</span><span class="cell__value">67.16</span><span class="cell__tint" style="background:#069296"></span></div>
        <div class="cell" data-cell="c-102-3"><span class="cell__label">c-102-3</span><span class="cell__value">5.03</span><span class="cell__tint" style="background:#eface8"></span></div>
        <div class="cell" data-cell="c-102-4"><span class="cell__label">c-102-4</span><span class="cell__value">49.29</span><span class="cell__tint" style="background:#3c3eba"></span></div>
        <div class="cell" data-cell="c-102-5"><span class="cell__label">c-102-5</span><span class="cell__value">77.78</span><span class="cell__tint" style="background:#8a13dd"></span></div>
        <div class="cell" data-cell="c-102-6"><span class="cell__label">c-102-6</span><span class="cell__value">91.92</span><span class="cell__tint" style="background:#789779"></span></div>
        <div class="cell" data-cell="c-102-7"><span class="cell__label">c-102-7</span><span class="cell__value">55.98</span><span class="cell__tint" style="background:#690eeb"></span></div>
        <div class="cell" data-cell="c-102-8"><span class="cell__label">c-102-8</span><span class="cell__value">89.67</span><span class="cell__tint" style="background:#634cb9"></span></div>
        <div class="cell" data-cell="c-102-9"><span class="cell__label">c-102-9</span><span class="cell__value">55.23</span><span class="cell__tint" style="background:#c0798f"></span></div>
        <div class="cell" data-cell="c-102-10"><span class="cell__label">c-102-10</span><span class="cell__value">80.60</span><span class="cell__tint" style="background:#ba0b55"></span></div>
        <div class="cell" data-cell="c-102-11"><span class="cell__label">c-102-11</span><span class="cell__value">66.65</span><span class="cell__tint" style="background:#85a502"></span></div>
        <div class="cell" data-cell="c-102-12"><span class="cell__label">c-102-12</span><span class="cell__value">50.47</span><span class="cell__tint" style="background:#34e574"></span></div>
        <div class="cell" data-cell="c-102-13"><span class="cell__label">c-102-13</span><span class="cell__value">30.82</span><span class="cell__tint" style="background:#cc5d29"></span></div>
        <div class="cell" data-cell="c-102-14"><span class="cell__label">c-102-14</span><span class="cell__value">52.20</span><span class="cell__tint" style="background:#47ece2"></span></div>
        <div class="cell" data-cell="c-102-15"><span class="cell__label">c-102-15</span><span class="cell__value">55.69</span><span class="cell__tint" style="background:#a99916"></span></div>
        <div class="cell" data-cell="c-102-16"><span class="cell__label">c-102-16</span><span class="cell__value">2.45</span><span class="cell__tint" style="background:#818b8e"></span></div>
        <div class="cell" data-cell="c-102-17"><span class="cell__label">c-102-17</span><span class="cell__value">9.00</span><span class="cell__tint" style="background:#a7c8a1"></span></div>
        <div class="cell" data-cell="c-102-18"><span class="cell__label">c-102-18</span><span class="cell__value">31.21</span><span class="cell__tint" style="background:#d630cb"></span></div>
        <div class="cell" data-cell="c-102-19"><span class="cell__label">c-102-19</span><span class="cell__value">59.43</span><span class="cell__tint" style="background:#ce9a4e"></span></div>
      </div>
      <div class="row" data-row="r-103">
        <div class="cell" data-cell="c-103-0"><span class="cell__label">c-103-0</span><span class="cell__value">29.62</span><span class="cell__tint" style="background:#c63f38"></span></div>
        <div class="cell" data-cell="c-103-1"><span class="cell__label">c-103-1</span><span class="cell__value">14.22</span><span class="cell__tint" style="background:#0a0c5e"></span></div>
        <div class="cell" data-cell="c-103-2"><span class="cell__label">c-103-2</span><span class="cell__value">51.51</span><span class="cell__tint" style="background:#d13864"></span></div>
        <div class="cell" data-cell="c-103-3"><span class="cell__label">c-103-3</span><span class="cell__value">80.09</span><span class="cell__tint" style="background:#6e3b2c"></span></div>
        <div class="cell" data-cell="c-103-4"><span class="cell__label">c-103-4</span><span class="cell__value">82.45</span><span class="cell__tint" style="background:#0a3c2b"></span></div>
        <div class="cell" data-cell="c-103-5"><span class="cell__label">c-103-5</span><span class="cell__value">58.40</span><span class="cell__tint" style="background:#c74d0f"></span></div>
        <div class="cell" data-cell="c-103-6"><span class="cell__label">c-103-6</span><span class="cell__value">18.99</span><span class="cell__tint" style="background:#a8a4e2"></span></div>
        <div class="cell" data-cell="c-103-7"><span class="cell__label">c-103-7</span><span class="cell__value">43.59</span><span class="cell__tint" style="background:#74bfdf"></span></div>
        <div class="cell" data-cell="c-103-8"><span class="cell__label">c-103-8</span><span class="cell__value">53.95</span><span class="cell__tint" style="background:#eca7b4"></span></div>
        <div class="cell" data-cell="c-103-9"><span class="cell__label">c-103-9</span><span class="cell__value">21.23</span><span class="cell__tint" style="background:#fb67c8"></span></div>
        <div class="cell" data-cell="c-103-10"><span class="cell__label">c-103-10</span><span class="cell__value">95.56</span><span class="cell__tint" style="background:#423cf8"></span></div>
        <div class="cell" data-cell="c-103-11"><span class="cell__label">c-103-11</span><span class="cell__value">65.98</span><span class="cell__tint" style="background:#700522"></span></div>
        <div class="cell" data-cell="c-103-12"><span class="cell__label">c-103-12</span><span class="cell__value">37.81</span><span class="cell__tint" style="background:#305375"></span></div>
        <div class="cell" data-cell="c-103-13"><span class="cell__label">c-103-13</span><span class="cell__value">30.43</span><span class="cell__tint" style="background:#6048f6"></span></div>
        <div class="cell" data-cell="c-103-14"><span class="cell__label">c-103-14</span><span class="cell__value">13.16</span><span class="cell__tint" style="background:#58f13d"></span></div>
        <div class="cell" data-cell="c-103-15"><span class="cell__label">c-103-15</span><span class="cell__value">66.45</span><span class="cell__tint" style="background:#110342"></span></div>
        <div class="cell" data-cell="c-103-16"><span class="cell__label">c-103-16</span><span class="cell__value">80.53</span><span class="cell__tint" style="background:#4326b2"></span></div>
        <div class="cell" data-cell="c-103-17"><span class="cell__label">c-103-17</span><span class="cell__value">35.86</span><span class="cell__tint" style="background:#61e554"></span></div>
        <div class="cell" data-cell="c-103-18"><span class="cell__label">c-103-18</span><span class="cell__value">49.22</span><span class="cell__tint" style="background:#ab4b03"></span></div>
        <div class="cell" data-cell="c-103-19"><span class="cell__label">c-103-19</span><span class="cell__value">52.58</span><span class="cell__tint" style="background:#159a46"></span></div>
      </div>
      <div class="row" data-row="r-104">
        <div class="cell" data-cell="c-104-0"><span class="cell__label">c-104-0</span><span class="cell__value">66.10</span><span class="cell__tint" style="background:#23b6d2"></span></div>
        <div class="cell" data-cell="c-104-1"><span class="cell__label">c-104-1</span><span class="cell__value">29.71</span><span class="cell__tint" style="background:#329af8"></span></div>
        <div class="cell" data-cell="c-104-2"><span class="cell__label">c-104-2</span><span class="cell__value">90.94</span><span class="cell__tint" style="background:#01da9f"></span></div>
        <div class="cell" data-cell="c-104-3"><span class="cell__label">c-104-3</span><span class="cell__value">1.65</span><span class="cell__tint" style="background:#9ccc93"></span></div>
        <div class="cell" data-cell="c-104-4"><span class="cell__label">c-104-4</span><span class="cell__value">42.20</span><span class="cell__tint" style="background:#420fb9"></span></div>
        <div class="cell" data-cell="c-104-5"><span class="cell__label">c-104-5</span><span class="cell__value">41.57</span><span class="cell__tint" style="background:#ba71c6"></span></div>
        <div class="cell" data-cell="c-104-6"><span class="cell__label">c-104-6</span><span class="cell__value">77.79</span><span class="cell__tint" style="background:#551bf0"></span></div>
        <div class="cell" data-cell="c-104-7"><span class="cell__label">c-104-7</span><span class="cell__value">81.36</span><span class="cell__tint" style="background:#9c04c8"></span></div>
        <div class="cell" data-cell="c-104-8"><span class="cell__label">c-104-8</span><span class="cell__value">56.45</span><span class="cell__tint" style="background:#3ad4ac"></span></div>
        <div class="cell" data-cell="c-104-9"><span class="cell__label">c-104-9</span><span class="cell__value">18.81</span><span class="cell__tint" style="background:#23b3e8"></span></div>
        <div class="cell" data-cell="c-104-10"><span class="cell__label">c-104-10</span><span class="cell__value">2.61</span><span class="cell__tint" style="background:#d52bff"></span></div>
        <div class="cell" data-cell="c-104-11"><span class="cell__label">c-104-11</span><span class="cell__value">14.88</span><span class="cell__tint" style="background:#77942c"></span></div>
        <div class="cell" data-cell="c-104-12"><span class="cell__label">c-104-12</span><span class="cell__value">89.24</span><span class="cell__tint" style="background:#6664e2"></span></div>
        <div class="cell" data-cell="c-104-13"><span class="cell__label">c-104-13</span><span class="cell__value">38.82</span><span class="cell__tint" style="background:#b59e26"></span></div>
        <div class="cell" data-cell="c-104-14"><span class="cell__label">c-104-14</span><span class="cell__value">5.88</span><span class="cell__tint" style="background:#e84312"></span></div>
        <div class="cell" data-cell="c-104-15"><span class="cell__label">c-104-15</span><span class="cell__value">58.91</span><span class="cell__tint" style="background:#8de89e"></span></div>
        <div class="cell" data-cell="c-104-16"><span class="cell__label">c-104-16</span><span class="cell__value">81.05</span><span class="cell__tint" style="background:#d68111"></span></div>
        <div class="cell" data-cell="c-104-17"><span class="cell__label">c-104-17</span><span class="cell__value">81.89</span><span class="cell__tint" style="background:#bd2a53"></span></div>
        <div class="cell" data-cell="c-104-18"><span class="cell__label">c-104-18</span><span class="cell__value">94.40</span><span class="cell__tint" style="background:#b65fa4"></span></div>
        <div class="cell" data-cell="c-104-19"><span class="cell__label">c-104-19</span><span class="cell__value">66.46</span><span class="cell__tint" style="background:#dbaad3"></span></div>
      </div>
      <div class="row" data-row="r-105">
        <div class="cell" data-cell="c-105-0"><span class="cell__label">c-105-0</span><span class="cell__value">35.82</span><span class="cell__tint" style="background:#189f82"></span></div>
        <div class="cell" data-cell="c-105-1"><span class="cell__label">c-105-1</span><span class="cell__value">6.93</span><span class="cell__tint" style="background:#6ce889"></span></div>
        <div class="cell" data-cell="c-105-2"><span class="cell__label">c-105-2</span><span class="cell__value">25.58</span><span class="cell__tint" style="background:#6b4677"></span></div>
        <div class="cell" data-cell="c-105-3"><span class="cell__label">c-105-3</span><span class="cell__value">30.18</span><span class="cell__tint" style="background:#1dd04e"></span></div>
        <div class="cell" data-cell="c-105-4"><span class="cell__label">c-105-4</span><span class="cell__value">21.67</span><span class="cell__tint" style="background:#6f9f78"></span></div>
        <div class="cell" data-cell="c-105-5"><span class="cell__label">c-105-5</span><span class="cell__value">33.16</span><span class="cell__tint" style="background:#4e3890"></span></div>
        <div class="cell" data-cell="c-105-6"><span class="cell__label">c-105-6</span><span class="cell__value">16.57</span><span class="cell__tint" style="background:#f86fbe"></span></div>
        <div class="cell" data-cell="c-105-7"><span class="cell__label">c-105-7</span><span class="cell__value">94.74</span><span class="cell__tint" style="background:#741e23"></span></div>
        <div class="cell" data-cell="c-105-8"><span class="cell__label">c-105-8</span><span class="cell__value">5.02</span><span class="cell__tint" style="background:#4d092c"></span></div>
        <div class="cell" data-cell="c-105-9"><span class="cell__label">c-105-9</span><span class="cell__value">1.31</span><span class="cell__tint" style="background:#6b6455"></span></div>
        <div class="cell" data-cell="c-105-10"><span class="cell__label">c-105-10</span><span class="cell__value">40.07</span><span class="cell__tint" style="background:#d1d9ae"></span></div>
        <div class="cell" data-cell="c-105-11"><span class="cell__label">c-105-11</span><span class="cell__value">6.90</span><span class="cell__tint" style="background:#976723"></span></div>
        <div class="cell" data-cell="c-105-12"><span class="cell__label">c-105-12</span><span class="cell__value">38.82</span><span class="cell__tint" style="background:#b1ab6b"></span></div>
        <div class="cell" data-cell="c-105-13"><span class="cell__label">c-105-13</span><span class="cell__value">55.32</span><span class="cell__tint" style="background:#df6b49"></span></div>
        <div class="cell" data-cell="c-105-14"><span class="cell__label">c-105-14</span><span class="cell__value">49.76</span><span class="cell__tint" style="background:#5b29f0"></span></div>
        <div class="cell" data-cell="c-105-15"><span class="cell__label">c-105-15</span><span class="cell__value">1.55</span><span class="cell__tint" style="background:#49a240"></span></div>
        <div class="cell" data-cell="c-105-16"><span class="cell__label">c-105-16</span><span class="cell__value">64.91</span><span class="cell__tint" style="background:#ddc382"></span></div>
        <div class="cell" data-cell="c-105-17"><span class="cell__label">c-105-17</span><span class="cell__value">88.98</span><span class="cell__tint" style="background:#c4f682"></span></div>
        <div class="cell" data-cell="c-105-18"><span class="cell__label">c-105-18</span><span class="cell__value">4.69</span><span class="cell__tint" style="background:#afba15"></span></div>
        <div class="cell" data-cell="c-105-19"><span class="cell__label">c-105-19</span><span class="cell__value">7.72</span><span class="cell__tint" style="background:#110a43"></span></div>
      </div>
      <div class="row" data-row="r-106">
        <div class="cell" data-cell="c-106-0"><span class="cell__label">c-106-0</span><span class="cell__value">24.07</span><span class="cell__tint" style="background:#b1e2b5"></span></div>
        <div class="cell" data-cell="c-106-1"><span class="cell__label">c-106-1</span><span class="cell__value">29.37</span><span class="cell__tint" style="background:#84ea7b"></span></div>
        <div class="cell" data-cell="c-106-2"><span class="cell__label">c-106-2</span><span class="cell__value">55.03</span><span class="cell__tint" style="background:#563ff0"></span></div>
        <div class="cell" data-cell="c-106-3"><span class="cell__label">c-106-3</span><span class="cell__value">93.16</span><span class="cell__tint" style="background:#9d4fe6"></span></div>
        <div class="cell" data-cell="c-106-4"><span class="cell__label">c-106-4</span><span class="cell__value">13.58</span><span class="cell__tint" style="background:#cf2ad8"></span></div>
        <div class="cell" data-cell="c-106-5"><span class="cell__label">c-106-5</span><span class="cell__value">77.11</span><span class="cell__tint" style="background:#9a2afe"></span></div>
        <div class="cell" data-cell="c-106-6"><span class="cell__label">c-106-6</span><span class="cell__value">98.20</span><span class="cell__tint" style="background:#05bee7"></span></div>
        <div class="cell" data-cell="c-106-7"><span class="cell__label">c-106-7</span><span class="cell__value">91.68</span><span class="cell__tint" style="background:#d1195f"></span></div>
        <div class="cell" data-cell="c-106-8"><span class="cell__label">c-106-8</span><span class="cell__value">39.12</span><span class="cell__tint" style="background:#add63d"></span></div>
        <div class="cell" data-cell="c-106-9"><span class="cell__label">c-106-9</span><span class="cell__value">85.17</span><span class="cell__tint" style="background:#580c71"></span></div>
        <div class="cell" data-cell="c-106-10"><span class="cell__label">c-106-10</span><span class="cell__value">29.68</span><span class="cell__tint" style="background:#63e60c"></span></div>
        <div class="cell" data-cell="c-106-11"><span class="cell__label">c-106-11</span><span class="cell__value">50.19</span><span class="cell__tint" style="background:#7926cd"></span></div>
        <div class="cell" data-cell="c-106-12"><span class="cell__label">c-106-12</span><span class="cell__value">23.02</span><span class="cell__tint" style="background:#d14afa"></span></div>
        <div class="cell" data-cell="c-106-13"><span class="cell__label">c-106-13</span><span class="cell__value">21.83</span><span class="cell__tint" style="background:#916f8c"></span></div>
        <div class="cell" data-cell="c-106-14"><span class="cell__label">c-106-14</span><span class="cell__value">63.02</span><span class="cell__tint" style="background:#4459ef"></span></div>
        <div class="cell" data-cell="c-106-15"><span class="cell__label">c-106-15</span><span class="cell__value">87.81</span><span class="cell__tint" style="background:#90085a"></span></div>
        <div class="cell" data-cell="c-106-16"><span class="cell__label">c-106-16</span><span class="cell__value">74.91</span><span class="cell__tint" style="background:#e236f4"></span></div>
        <div class="cell" data-cell="c-106-17"><span class="cell__label">c-106-17</span><span class="cell__value">97.72</span><span class="cell__tint" style="background:#566ac8"></span></div>
        <div class="cell" data-cell="c-106-18"><span class="cell__label">c-106-18</span><span class="cell__value">69.47</span><span class="cell__tint" style="background:#3b295c"></span></div>
        <div class="cell" data-cell="c-106-19"><span class="cell__label">c-106-19</span><span class="cell__value">62.89</span><span class="cell__tint" style="background:#32514e"></span></div>
      </div>
      <div class="row" data-row="r-107">
        <div class="cell" data-cell="c-107-0"><span class="cell__label">c-107-0</span><span class="cell__value">45.92</span><span class="cell__tint" style="background:#0706bd"></span></div>
        <div class="cell" data-cell="c-107-1"><span class="cell__label">c-107-1</span><span class="cell__value">48.21</span><span class="cell__tint" style="background:#7662b3"></span></div>
        <div class="cell" data-cell="c-107-2"><span class="cell__label">c-107-2</span><span class="cell__value">22.69</span><span class="cell__tint" style="background:#415d67"></span></div>
        <div class="cell" data-cell="c-107-3"><span class="cell__label">c-107-3</span><span class="cell__value">5.65</span><span class="cell__tint" style="background:#582832"></span></div>
        <div class="cell" data-cell="c-107-4"><span class="cell__label">c-107-4</span><span class="cell__value">9.75</span><span class="cell__tint" style="background:#bf99f2"></span></div>
        <div class="cell" data-cell="c-107-5"><span class="cell__label">c-107-5</span><span class="cell__value">61.69</span><span class="cell__tint" style="background:#1ecff7"></span></div>
        <div class="cell" data-cell="c-107-6"><span class="cell__label">c-107-6</span><span class="cell__value">79.62</span><span class="cell__tint" style="background:#5d3034"></span></div>
        <div class="cell" data-cell="c-107-7"><span class="cell__label">c-107-7</span><span class="cell__value">66.58</span><span class="cell__tint" style="background:#534062"></span></div>
        <div class="cell" data-cell="c-107-8"><span class="cell__label">c-107-8</span><span class="cell__value">89.16</span><span class="cell__tint" style="background:#521151"></span></div>
        <div class="cell" data-cell="c-107-9"><span class="cell__label">c-107-9</span><span class="cell__value">95.76</span><span class="cell__tint" style="background:#35826d"></span></div>
        <div class="cell" data-cell="c-107-10"><span class="cell__label">c-107-10</span><span class="cell__value">22.00</span><span class="cell__tint" style="background:#7a6e21"></span></div>
        <div class="cell" data-cell="c-107-11"><span class="cell__label">c-107-11</span><span class="cell__value">72.43</span><span class="cell__tint" style="background:#a23e5d"></span></div>
        <div class="cell" data-cell="c-107-12"><span class="cell__label">c-107-12</span><span class="cell__value">85.16</span><span class="cell__tint" style="background:#26f77a"></span></div>
        <div class="cell" data-cell="c-107-13"><span class="cell__label">c-107-13</span><span class="cell__value">32.41</span><span class="cell__tint" style="background:#a6315a"></span></div>
        <div class="cell" data-cell="c-107-14"><span class="cell__label">c-107-14</span><span class="cell__value">93.54</span><span class="cell__tint" style="background:#a13fcb"></span></div>
        <div class="cell" data-cell="c-107-15"><span class="cell__label">c-107-15</span><span class="cell__value">68.49</span><span class="cell__tint" style="background:#319cd1"></span></div>
        <div class="cell" data-cell="c-107-16"><span class="cell__label">c-107-16</span><span class="cell__value">35.14</span><span class="cell__tint" style="background:#4a9db2"></span></div>
        <div class="cell" data-cell="c-107-17"><span class="cell__label">c-107-17</span><span class="cell__value">36.70</span><span class="cell__tint" style="background:#94d575"></span></div>
        <div class="cell" data-cell="c-107-18"><span class="cell__label">c-107-18</span><span class="cell__value">33.03</span><span class="cell__tint" style="background:#7f24f4"></span></div>
        <div class="cell" data-cell="c-107-19"><span class="cell__label">c-107-19</span><span class="cell__value">41.81</span><span class="cell__tint" style="background:#35ed47"></span></div>
      </div>
      <div class="row" data-row="r-108">
        <div class="cell" data-cell="c-108-0"><span class="cell__label">c-108-0</span><span class="cell__value">15.58</span><span class="cell__tint" style="background:#4586e5"></span></div>
        <div class="cell" data-cell="c-108-1"><span class="cell__label">c-108-1</span><span class="cell__value">57.78</span><span class="cell__tint" style="background:#f49107"></span></div>
        <div class="cell" data-cell="c-108-2"><span class="cell__label">c-108-2</span><span class="cell__value">86.17</span><span class="cell__tint" style="background:#8974b1"></span></div>
        <div class="cell" data-cell="c-108-3"><span class="cell__label">c-108-3</span><span class="cell__value">36.47</span><span class="cell__tint" style="background:#9dd362"></span></div>
        <div class="cell" data-cell="c-108-4"><span class="cell__label">c-108-4</span><span class="cell__value">33.93</span><span class="cell__tint" style="background:#04a1c0"></span></div>
        <div class="cell" data-cell="c-108-5"><span class="cell__label">c-108-5</span><span class="cell__value">45.41</span><span class="cell__tint" style="background:#3b56a6"></span></div>
        <div class="cell" data-cell="c-108-6"><span class="cell__label">c-108-6</span><span class="cell__value">63.88</span><span class="cell__tint" style="background:#82d529"></span></div>
        <div class="cell" data-cell="c-108-7"><span class="cell__label">c-108-7</span><span class="cell__value">9.55</span><span class="cell__tint" style="background:#e60e4f"></span></div>
        <div class="cell" data-cell="c-108-8"><span class="cell__label">c-108-8</span><span class="cell__value">8.54</span><span class="cell__tint" style="background:#7d39c6"></span></div>
        <div class="cell" data-cell="c-108-9"><span class="cell__label">c-108-9</span><span class="cell__value">11.89</span><span class="cell__tint" style="background:#186e85"></span></div>
        <div class="cell" data-cell="c-108-10"><span class="cell__label">c-108-10</span><span class="cell__value">0.66</span><span class="cell__tint" style="background:#a4de13"></span></div>
        <div class="cell" data-cell="c-108-11"><span class="cell__label">c-108-11</span><span class="cell__value">25.02</span><span class="cell__tint" style="background:#b54ea9"></span></div>
        <div class="cell" data-cell="c-108-12"><span class="cell__label">c-108-12</span><span class="cell__value">46.47</span><span class="cell__tint" style="background:#5a1469"></span></div>
        <div class="cell" data-cell="c-108-13"><span class="cell__label">c-108-13</span><span class="cell__value">99.82</span><span class="cell__tint" style="background:#9d9319"></span></div>
        <div class="cell" data-cell="c-108-14"><span class="cell__label">c-108-14</span><span class="cell__value">41.56</span><span class="cell__tint" style="background:#138614"></span></div>
        <div class="cell" data-cell="c-108-15"><span class="cell__label">c-108-15</span><span class="cell__value">54.07</span><span class="cell__tint" style="background:#04374f"></span></div>
        <div class="cell" data-cell="c-108-16"><span class="cell__label">c-108-16</span><span class="cell__value">46.96</span><span class="cell__tint" style="background:#c6aedc"></span></div>
        <div class="cell" data-cell="c-108-17"><span class="cell__label">c-108-17</span><span class="cell__value">16.12</span><span class="cell__tint" style="background:#c60fc9"></span></div>
        <div class="cell" data-cell="c-108-18"><span class="cell__label">c-108-18</span><span class="cell__value">76.76</span><span class="cell__tint" style="background:#9d5e5f"></span></div>
        <div class="cell" data-cell="c-108-19"><span class="cell__label">c-108-19</span><span class="cell__value">56.51</span><span class="cell__tint" style="background:#16bb9f"></span></div>
      </div>
      <div class="row" data-row="r-109">
        <div class="cell" data-cell="c-109-0"><span class="cell__label">c-109-0</span><span class="cell__value">65.03</span><span class="cell__tint" style="background:#b46709"></span></div>
        <div class="cell" data-cell="c-109-1"><span class="cell__label">c-109-1</span><span class="cell__value">12.57</span><span class="cell__tint" style="background:#669974"></span></div>
        <div class="cell" data-cell="c-109-2"><span class="cell__label">c-109-2</span><span class="cell__value">74.70</span><span class="cell__tint" style="background:#a2bdf3"></span></div>
        <div class="cell" data-cell="c-109-3"><span class="cell__label">c-109-3</span><span class="cell__value">10.23</span><span class="cell__tint" style="background:#3ccb8e"></span></div>
        <div class="cell" data-cell="c-109-4"><span class="cell__label">c-109-4</span><span class="cell__value">29.83</span><span class="cell__tint" style="background:#21b136"></span></div>
        <div class="cell" data-cell="c-109-5"><span class="cell__label">c-109-5</span><span class="cell__value">13.60</span><span class="cell__tint" style="background:#85f258"></span></div>
        <div class="cell" data-cell="c-109-6"><span class="cell__label">c-109-6</span><span class="cell__value">97.65</span><span class="cell__tint" style="background:#56c29f"></span></div>
        <div class="cell" data-cell="c-109-7"><span class="cell__label">c-109-7</span><span class="cell__value">25.26</span><span class="cell__tint" style="background:#fae545"></span></div>
        <div class="cell" data-cell="c-109-8"><span class="cell__label">c-109-8</span><span class="cell__value">67.19</span><span class="cell__tint" style="background:#bbb88a"></span></div>
        <div class="cell" data-cell="c-109-9"><span class="cell__label">c-109-9</span><span class="cell__value">78.60</span><span class="cell__tint" style="background:#6b6194"></span></div>
        <div class="cell" data-cell="c-109-10"><span class="cell__label">c-109-10</span><span class="cell__value">48.66</span><span class="cell__tint" style="background:#e64499"></span></div>
        <div class="cell" data-cell="c-109-11"><span class="cell__label">c-109-11</span><span class="cell__value">48.76</span><span class="cell__tint" style="background:#df0a67"></span></div>
        <div class="cell" data-cell="c-109-12"><span class="cell__label">c-109-12</span><span class="cell__value">10.96</span><span class="cell__tint" style="background:#bd364d"></span></div>
        <div class="cell" data-cell="c-109-13"><span class="cell__label">c-109-13</span><span class="cell__value">48.86</span><span class="cell__tint" style="background:#f991bb"></span></div>
        <div class="cell" data-cell="c-109-14"><span class="cell__label">c-109-14</span><span class="cell__value">96.58</span><span class="cell__tint" style="background:#2f07df"></span></div>
        <div class="cell" data-cell="c-109-15"><span class="cell__label">c-109-15</span><span class="cell__value">6.60</span><span class="cell__tint" style="background:#78fe02"></span></div>
        <div class="cell" data-cell="c-109-16"><span class="cell__label">c-109-16</span><span class="cell__value">37.51</span><span class="cell__tint" style="background:#9f42a3"></span></div>
        <div class="cell" data-cell="c-109-17"><span class="cell__label">c-109-17</span><span class="cell__value">61.04</span><span class="cell__tint" style="background:#a2c4aa"></span></div>
        <div class="cell" data-cell="c-109-18"><span class="cell__label">c-109-18</span><span class="cell__value">50.72</span><span class="cell__tint" style="background:#97214b"></span></div>
        <div class="cell" data-cell="c-109-19"><span class="cell__label">c-109-19</span><span class="cell__value">93.09</span><span class="cell__tint" style="background:#232a2a"></span></div>
      </div>
      <div class="row" data-row="r-110">
        <div class="cell" data-cell="c-110-0"><span class="cell__label">c-110-0</span><span class="cell__value">19.19</span><span class="cell__tint" style="background:#1807e9"></span></div>
        <div class="cell" data-cell="c-110-1"><span class="cell__label">c-110-1</span><span class="cell__value">52.54</span><span class="cell__tint" style="background:#0adb9c"></span></div>
        <div class="cell" data-cell="c-110-2"><span class="cell__label">c-110-2</span><span class="cell__value">39.69</span><span class="cell__tint" style="background:#e663e5"></span></div>
        <div class="cell" data-cell="c-110-3"><span class="cell__label">c-110-3</span><span class="cell__value">23.23</span><span class="cell__tint" style="background:#f8ec94"></span></div>
        <div class="cell" data-cell="c-110-4"><span class="cell__label">c-110-4</span><span class="cell__value">28.94</span><span class="cell__tint" style="background:#32e971"></span></div>
        <div class="cell" data-cell="c-110-5"><span class="cell__label">c-110-5</span><span class="cell__value">67.81</span><span class="cell__tint" style="background:#3ee875"></span></div>
        <div class="cell" data-cell="c-110-6"><span class="cell__label">c-110-6</span><span class="cell__value">33.67</span><span class="cell__tint" style="background:#a8498f"></span></div>
        <div class="cell" data-cell="c-110-7"><span class="cell__label">c-110-7</span><span class="cell__value">87.30</span><span class="cell__tint" style="background:#f58b6c"></span></div>
        <div class="cell" data-cell="c-110-8"><span class="cell__label">c-110-8</span><span class="cell__value">81.99</span><span class="cell__tint" style="background:#719b51"></span></div>
        <div class="cell" data-cell="c-110-9"><span class="cell__label">c-110-9</span><span class="cell__value">82.80</span><span class="cell__tint" style="background:#84eb2e"></span></div>
        <div class="cell" data-cell="c-110-10"><span class="cell__label">c-110-10</span><span class="cell__value">64.35</span><span class="cell__tint" style="background:#f08af7"></span></div>
        <div class="cell" data-cell="c-110-11"><span class="cell__label">c-110-11</span><span class="cell__value">27.10</span><span class="cell__tint" style="background:#81e8a3"></span></div>
        <div class="cell" data-cell="c-110-12"><span class="cell__label">c-110-12</span><span class="cell__value">55.27</span><span class="cell__tint" style="background:#636c5a"></span></div>
        <div class="cell" data-cell="c-110-13"><span class="cell__label">c-110-13</span><span class="cell__value">46.23</span><span class="cell__tint" style="background:#9bd6dd"></span></div>
        <div class="cell" data-cell="c-110-14"><span class="cell__label">c-110-14</span><span class="cell__value">48.87</span><span class="cell__tint" style="background:#09646a"></span></div>
        <div class="cell" data-cell="c-110-15"><span class="cell__label">c-110-15</span><span class="cell__value">88.90</span><span class="cell__tint" style="background:#ff6e09"></span></div>
        <div class="cell" data-cell="c-110-16"><span class="cell__label">c-110-16</span><span class="cell__value">39.52</span><span class="cell__tint" style="background:#b93868"></span></div>
        <div class="cell" data-cell="c-110-17"><span class="cell__label">c-110-17</span><span class="cell__value">78.99</span><span class="cell__tint" style="background:#c6b854"></span></div>
        <div class="cell" data-cell="c-110-18"><span class="cell__label">c-110-18</span><span class="cell__value">97.06</span><span class="cell__tint" style="background:#2b3837"></span></div>
        <div class="cell" data-cell="c-110-19"><span class="cell__label">c-110-19</span><span class="cell__value">17.04</span><span class="cell__tint" style="background:#010df2"></span></div>
      </div>
      <div class="row" data-row="r-111">
        <div class="cell" data-cell="c-111-0"><span class="cell__label">c-111-0</span><span class="cell__value">95.27</span><span class="cell__tint" style="background:#092f7f"></span></div>
        <div class="cell" data-cell="c-111-1"><span class="cell__label">c-111-1</span><span class="cell__value">23.62</span><span class="cell__tint" style="background:#93914d"></span></div>
        <div class="cell" data-cell="c-111-2"><span class="cell__label">c-111-2</span><span class="cell__value">77.11</span><span class="cell__tint" style="background:#beee93"></span></div>
        <div class="cell" data-cell="c-111-3"><span class="cell__label">c-111-3</span><span class="cell__value">42.72</span><span class="cell__tint" style="background:#9b3f5d"></span></div>
        <div class="cell" data-cell="c-111-4"><span class="cell__label">c-111-4</span><span class="cell__value">48.59</span><span class="cell__tint" style="background:#712025"></span></div>
        <div class="cell" data-cell="c-111-5"><span class="cell__label">c-111-5</span><span class="cell__value">85.21</span><span class="cell__tint" style="background:#53562a"></span></div>
        <div class="cell" data-cell="c-111-6"><span class="cell__label">c-111-6</span><span class="cell__value">31.49</span><span class="cell__tint" style="background:#56b109"></span></div>
        <div class="cell" data-cell="c-111-7"><span class="cell__label">c-111-7</span><span class="cell__value">65.83</span><span class="cell__tint" style="background:#1bbc10"></span></div>
        <div class="cell" data-cell="c-111-8"><span class="cell__label">c-111-8</span><span class="cell__value">15.27</span><span class="cell__tint" style="background:#60ed3f"></span></div>
        <div class="cell" data-cell="c-111-9"><span class="cell__label">c-111-9</span><span class="cell__value">25.52</span><span class="cell__tint" style="background:#c1e30e"></span></div>
        <div class="cell" data-cell="c-111-10"><span class="cell__label">c-111-10</span><span class="cell__value">12.46</span><span class="cell__tint" style="background:#e37eab"></span></div>
        <div class="cell" data-cell="c-111-11"><span class="cell__label">c-111-11</span><span class="cell__value">64.84</span><span class="cell__tint" style="background:#fff028"></span></div>
        <div class="cell" data-cell="c-111-12"><span class="cell__label">c-111-12</span><span class="cell__value">93.52</span><span class="cell__tint" style="background:#afd01a"></span></div>
        <div class="cell" data-cell="c-111-13"><span class="cell__label">c-111-13</span><span class="cell__value">40.69</span><span class="cell__tint" style="background:#7ed5e2"></span></div>
        <div class="cell" data-cell="c-111-14"><span class="cell__label">c-111-14</span><span class="cell__value">96.41</span><span class="cell__tint" style="background:#f79391"></span></div>
        <div class="cell" data-cell="c-111-15"><span class="cell__label">c-111-15</span><span class="cell__value">23.50</span><span class="cell__tint" style="background:#4701da"></span></div>
        <div class="cell" data-cell="c-111-16"><span class="cell__label">c-111-16</span><span class="cell__value">13.82</span><span class="cell__tint" style="background:#05ee47"></span></div>
        <div class="cell" data-cell="c-111-17"><span class="cell__label">c-111-17</span><span class="cell__value">30.93</span><span class="cell__tint" style="background:#ae26f0"></span></div>
        <div class="cell" data-cell="c-111-18"><span class="cell__label">c-111-18</span><span class="cell__value">39.00</span><span class="cell__tint" style="background:#27253b"></span></div>
        <div class="cell" data-cell="c-111-19"><span class="cell__label">c-111-19</span><span class="cell__value">89.97</span><span class="cell__tint" style="background:#319f22"></span></div>
      </div>
      <div class="row" data-row="r-112">
        <div class="cell" data-cell="c-112-0"><span class="cell__label">c-112-0</span><span class="cell__value">61.05</span><span class="cell__tint" style="background:#caee6b"></span></div>
        <div class="cell" data-cell="c-112-1"><span class="cell__label">c-112-1</span><span class="cell__value">32.14</span><span class="cell__tint" style="background:#8085f9"></span></div>
        <div class="cell" data-cell="c-112-2"><span class="cell__label">c-112-2</span><span class="cell__value">22.35</span><span class="cell__tint" style="background:#4f8366"></span></div>
        <div class="cell" data-cell="c-112-3"><span class="cell__label">c-112-3</span><span class="cell__value">61.37</span><span class="cell__tint" style="background:#e97738"></span></div>
        <div class="cell" data-cell="c-112-4"><span class="cell__label">c-112-4</span><span class="cell__value">95.12</span><span class="cell__tint" style="background:#596ba1"></span></div>
        <div class="cell" data-cell="c-112-5"><span class="cell__label">c-112-5</span><span class="cell__value">2.78</span><span class="cell__tint" style="background:#49a84e"></span></div>
        <div class="cell" data-cell="c-112-6"><span class="cell__label">c-112-6</span><span class="cell__value">58.66</span><span class="cell__tint" style="background:#bb8c1e"></span></div>
        <div class="cell" data-cell="c-112-7"><span class="cell__label">c-112-7</span><span class="cell__value">14.48</span><span class="cell__tint" style="background:#daf2ff"></span></div>
        <div class="cell" data-cell="c-112-8"><span class="cell__label">c-112-8</span><span class="cell__value">10.26</span><span class="cell__tint" style="background:#cfb52d"></span></div>
        <div class="cell" data-cell="c-112-9"><span class="cell__label">c-112-9</span><span class="cell__value">27.05</span><span class="cell__tint" style="background:#79b142"></span></div>
        <div class="cell" data-cell="c-112-10"><span class="cell__label">c-112-10</span><span class="cell__value">21.68</span><span class="cell__tint" style="background:#cbd1bc"></span></div>
        <div class="cell" data-cell="c-112-11"><span class="cell__label">c-112-11</span><span class="cell__value">22.27</span><span class="cell__tint" style="background:#2f718a"></span></div>
        <div class="cell" data-cell="c-112-12"><span class="cell__label">c-112-12</span><span class="cell__value">17.12</span><span class="cell__tint" style="background:#3ad79f"></span></div>
        <div class="cell" data-cell="c-112-13"><span class="cell__label">c-112-13</span><span class="cell__value">33.17</span><span class="cell__tint" style="background:#a446b1"></span></div>
        <div class="cell" data-cell="c-112-14"><span class="cell__label">c-112-14</span><span class="cell__value">81.58</span><span class="cell__tint" style="background:#e91ed9"></span></div>
        <div class="cell" data-cell="c-112-15"><span class="cell__label">c-112-15</span><span class="cell__value">11.72</span><span class="cell__tint" style="background:#00b7a0"></span></div>
        <div class="cell" data-cell="c-112-16"><span class="cell__label">c-112-16</span><span class="cell__value">38.60</span><span class="cell__tint" style="background:#07203f"></span></div>
        <div class="cell" data-cell="c-112-17"><span class="cell__label">c-112-17</span><span class="cell__value">51.75</span><span class="cell__tint" style="background:#baba3d"></span></div>
        <div class="cell" data-cell="c-112-18"><span class="cell__label">c-112-18</span><span class="cell__value">9.53</span><span class="cell__tint" style="background:#b999d7"></span></div>
        <div class="cell" data-cell="c-112-19"><span class="cell__label">c-112-19</span><span class="cell__value">33.85</span><span class="cell__tint" style="background:#905097"></span></div>
      </div>
      <div class="row" data-row="r-113">
        <div class="cell" data-cell="c-113-0"><span class="cell__label">c-113-0</span><span class="cell__value">39.36</span><span class="cell__tint" style="background:#e9bd32"></span></div>
        <div class="cell" data-cell="c-113-1"><span class="cell__label">c-113-1</span><span class="cell__value">28.48</span><span class="cell__tint" style="background:#ef1996"></span></div>
        <div class="cell" data-cell="c-113-2"><span class="cell__label">c-113-2</span><span class="cell__value">88.22</span><span class="cell__tint" style="background:#0b09e8"></span></div>
        <div class="cell" data-cell="c-113-3"><span class="cell__label">c-113-3</span><span class="cell__value">15.31</span><span class="cell__tint" style="background:#d3e67e"></span></div>
        <div class="cell" data-cell="c-113-4"><span class="cell__label">c-113-4</span><span class="cell__value">26.89</span><span class="cell__tint" style="background:#839b1c"></span></div>
        <div class="cell" data-cell="c-113-5"><span class="cell__label">c-113-5</span><span class="cell__value">5.97</span><span class="cell__tint" style="background:#f590be"></span></div>
        <div class="cell" data-cell="c-113-6"><span class="cell__label">c-113-6</span><span class="cell__value">10.96</span><span class="cell__tint" style="background:#095ec3"></span></div>
        <div class="cell" data-cell="c-113-7"><span class="cell__label">c-113-7</span><span class="cell__value">81.47</span><span class="cell__tint" style="background:#3383e6"></span></div>
        <div class="cell" data-cell="c-113-8"><span class="cell__label">c-113-8</span><span class="cell__value">47.09</span><span class="cell__tint" style="background:#cab080"></span></div>
        <div class="cell" data-cell="c-113-9"><span class="cell__label">c-113-9</span><span class="cell__value">9.53</span><span class="cell__tint" style="background:#bfd103"></span></div>
        <div class="cell" data-cell="c-113-10"><span class="cell__label">c-113-10</span><span class="cell__value">53.84</span><span class="cell__tint" style="background:#682433"></span></div>
        <div class="cell" data-cell="c-113-11"><span class="cell__label">c-113-11</span><span class="cell__value">82.12</span><span class="cell__tint" style="background:#0dea6b"></span></div>
        <div class="cell" data-cell="c-113-12"><span class="cell__label">c-113-12</span><span class="cell__value">99.80</span><span class="cell__tint" style="background:#427477"></span></div>
        <div class="cell" data-cell="c-113-13"><span class="cell__label">c-113-13</span><span class="cell__value">77.15</span><span class="cell__tint" style="background:#7f8dfa"></span></div>
        <div class="cell" data-cell="c-113-14"><span class="cell__label">c-113-14</span><span class="cell__value">1.54</span><span class="cell__tint" style="background:#25aef5"></span></div>
        <div class="cell" data-cell="c-113-15"><span class="cell__label">c-113-15</span><span class="cell__value">50.73</span><span class="cell__tint" style="background:#735ea7"></span></div>
        <div class="cell" data-cell="c-113-16"><span class="cell__label">c-113-16</span><span class="cell__value">35.38</span><span class="cell__tint" style="background:#9b9a47"></span></div>
        <div class="cell" data-cell="c-113-17"><span class="cell__label">c-113-17</span><span class="cell__value">62.84</span><span class="cell__tint" style="background:#d67523"></span></div>
        <div class="cell" data-cell="c-113-18"><span class="cell__label">c-113-18</span><span class="cell__value">42.22</span><span class="cell__tint" style="background:#790f73"></span></div>
        <div class="cell" data-cell="c-113-19"><span class="cell__label">c-113-19</span><span class="cell__value">46.59</span><span class="cell__tint" style="background:#bc8701"></span></div>
      </div>
      <div class="row" data-row="r-114">
        <div class="cell" data-cell="c-114-0"><span class="cell__label">c-114-0</span><span class="cell__value">65.11</span><span class="cell__tint" style="background:#e0890e"></span></div>
        <div class="cell" data-cell="c-114-1"><span class="cell__label">c-114-1</span><span class="cell__value">53.91</span><span class="cell__tint" style="background:#49f2f9"></span></div>
        <div class="cell" data-cell="c-114-2"><span class="cell__label">c-114-2</span><span class="cell__value">59.18</span><span class="cell__tint" style="background:#c3fe03"></span></div>
        <div class="cell" data-cell="c-114-3"><span class="cell__label">c-114-3</span><span class="cell__value">60.11</span><span class="cell__tint" style="background:#20e07b"></span></div>
        <div class="cell" data-cell="c-114-4"><span class="cell__label">c-114-4</span><span class="cell__value">88.47</span><span class="cell__tint" style="background:#935653"></span></div>
        <div class="cell" data-cell="c-114-5"><span class="cell__label">c-114-5</span><span class="cell__value">23.06</span><span class="cell__tint" style="background:#68c671"></span></div>
        <div class="cell" data-cell="c-114-6"><span class="cell__label">c-114-6</span><span class="cell__value">42.02</span><span class="cell__tint" style="background:#78c18e"></span></div>
        <div class="cell" data-cell="c-114-7"><span class="cell__label">c-114-7</span><span class="cell__value">70.20</span><span class="cell__tint" style="background:#4b9000"></span></div>
        <div class="cell" data-cell="c-114-8"><span class="cell__label">c-114-8</span><span class="cell__value">56.80</span><span class="cell__tint" style="background:#47d5b1"></span></div>
        <div class="cell" data-cell="c-114-9"><span class="cell__label">c-114-9</span><span class="cell__value">78.97</span><span class="cell__tint" style="background:#4bab70"></span></div>
        <div class="cell" data-cell="c-114-10"><span class="cell__label">c-114-10</span><span class="cell__value">98.94</span><span class="cell__tint" style="background:#fa31d1"></span></div>
        <div class="cell" data-cell="c-114-11"><span class="cell__label">c-114-11</span><span class="cell__value">24.09</span><span class="cell__tint" style="background:#ff53c9"></span></div>
        <div class="cell" data-cell="c-114-12"><span class="cell__label">c-114-12</span><span class="cell__value">69.39</span><span class="cell__tint" style="background:#3bb20e"></span></div>
        <div class="cell" data-cell="c-114-13"><span class="cell__label">c-114-13</span><span class="cell__value">17.71</span><span class="cell__tint" style="background:#0cc576"></span></div>
        <div class="cell" data-cell="c-114-14"><span class="cell__label">c-114-14</span><span class="cell__value">68.83</span><span class="cell__tint" style="background:#090712"></span></div>
        <div class="cell" data-cell="c-114-15"><span class="cell__label">c-114-15</span><span class="cell__value">35.02</span><span class="cell__tint" style="background:#b9dc44"></span></div>
        <div class="cell" data-cell="c-114-16"><span class="cell__label">c-114-16</span><span class="cell__value">14.69</span><span class="cell__tint" style="background:#3bcaad"></span></div>
        <div class="cell" data-cell="c-114-17"><span class="cell__label">c-114-17</span><span class="cell__value">31.63</span><span class="cell__tint" style="background:#6aaff5"></span></div>
        <div class="cell" data-cell="c-114-18"><span class="cell__label">c-114-18</span><span class="cell__value">88.59</span><span class="cell__tint" style="background:#cb4fd3"></span></div>
        <div class="cell" data-cell="c-114-19"><span class="cell__label">c-114-19</span><span class="cell__value">70.21</span><span class="cell__tint" style="background:#a269b7"></span></div>
      </div>
      <div class="row" data-row="r-115">
        <div class="cell" data-cell="c-115-0"><span class="cell__label">c-115-0</span><span class="cell__value">60.06</span><span class="cell__tint" style="background:#9adbd1"></span></div>
        <div class="cell" data-cell="c-115-1"><span class="cell__label">c-115-1</span><span class="cell__value">2.48</span><span class="cell__tint" style="background:#488c09"></span></div>
        <div class="cell" data-cell="c-115-2"><span class="cell__label">c-115-2</span><span class="cell__value">31.43</span><span class="cell__tint" style="background:#3d0c3c"></span></div>
        <div class="cell" data-cell="c-115-3"><span class="cell__label">c-115-3</span><span class="cell__value">66.09</span><span class="cell__tint" style="background:#8cc9a8"></span></div>
        <div class="cell" data-cell="c-115-4"><span class="cell__label">c-115-4</span><span class="cell__value">43.45</span><span class="cell__tint" style="background:#81a757"></span></div>
        <div class="cell" data-cell="c-115-5"><span class="cell__label">c-115-5</span><span class="cell__value">46.70</span><span class="cell__tint" style="background:#5e632b"></span></div>
        <div class="cell" data-cell="c-115-6"><span class="cell__label">c-115-6</span><span class="cell__value">0.21</span><span class="cell__tint" style="background:#c68c64"></span></div>
        <div class="cell" data-cell="c-115-7"><span class="cell__label">c-115-7</span><span class="cell__value">50.94</span><span class="cell__tint" style="background:#5d8129"></span></div>
        <div class="cell" data-cell="c-115-8"><span class="cell__label">c-115-8</span><span class="cell__value">15.19</span><span class="cell__tint" style="background:#1890fd"></span></div>
        <div class="cell" data-cell="c-115-9"><span class="cell__label">c-115-9</span><span class="cell__value">55.67</span><span class="cell__tint" style="background:#3327ca"></span></div>
        <div class="cell" data-cell="c-115-10"><span class="cell__label">c-115-10</span><span class="cell__value">73.90</span><span class="cell__tint" style="background:#78857f"></span></div>
        <div class="cell" data-cell="c-115-11"><span class="cell__label">c-115-11</span><span class="cell__value">59.14</span><span class="cell__tint" style="background:#b435c8"></span></div>
        <div class="cell" data-cell="c-115-12"><span class="cell__label">c-115-12</span><span class="cell__value">13.76</span><span class="cell__tint" style="background:#d69422"></span></div>
        <div class="cell" data-cell="c-115-13"><span class="cell__label">c-115-13</span><span class="cell__value">26.49</span><span class="cell__tint" style="background:#68eccc"></span></div>
        <div class="cell" data-cell="c-115-14"><span class="cell__label">c-115-14</span><span class="cell__value">63.30</span><span class="cell__tint" style="background:#e08ba6"></span></div>
        <div class="cell" data-cell="c-115-15"><span class="cell__label">c-115-15</span><span class="cell__value">9.44</span><span class="cell__tint" style="background:#6cc191"></span></div>
        <div class="cell" data-cell="c-115-16"><span class="cell__label">c-115-16</span><span class="cell__value">94.03</span><span class="cell__tint" style="background:#bad809"></span></div>
        <div class="cell" data-cell="c-115-17"><span class="cell__label">c-115-17</span><span class="cell__value">80.99</span><span class="cell__tint" style="background:#bb7bd3"></span></div>
        <div class="cell" data-cell="c-115-18"><span class="cell__label">c-115-18</span><span class="cell__value">84.72</span><span class="cell__tint" style="background:#7a6c56"></span></div>
        <div class="cell" data-cell="c-115-19"><span class="cell__label">c-115-19</span><span class="cell__value">52.74</span><span class="cell__tint" style="background:#49707b"></span></div>
      </div>
      <div class="row" data-row="r-116">
        <div class="cell" data-cell="c-116-0"><span class="cell__label">c-116-0</span><span class="cell__value">66.29</span><span class="cell__tint" style="background:#1abb20"></span></div>
        <div class="cell" data-cell="c-116-1"><span class="cell__label">c-116-1</span><span class="cell__value">33.92</span><span class="cell__tint" style="background:#a3994d"></span></div>
        <div class="cell" data-cell="c-116-2"><span class="cell__label">c-116-2</span><span class="cell__value">93.38</span><span class="cell__tint" style="background:#16a0df"></span></div>
        <div class="cell" data-cell="c-116-3"><span class="cell__label">c-116-3</span><span class="cell__value">8.02</span><span class="cell__tint" style="background:#59b3d4"></span></div>
        <div class="cell" data-cell="c-116-4"><span class="cell__label">c-116-4</span><span class="cell__value">24.11</span><span class="cell__tint" style="background:#9aa106"></span></div>
        <div class="cell" data-cell="c-116-5"><span class="cell__label">c-116-5</span><span class="cell__value">27.85</span><span class="cell__tint" style="background:#6341e3"></span></div>
        <div class="cell" data-cell="c-116-6"><span class="cell__label">c-116-6</span><span class="cell__value">28.23</span><span class="cell__tint" style="background:#f9d750"></span></div>
        <div class="cell" data-cell="c-116-7"><span class="cell__label">c-116-7</span><span class="cell__value">79.62</span><span class="cell__tint" style="background:#2a647d"></span></div>
        <div class="cell" data-cell="c-116-8"><span class="cell__label">c-116-8</span><span class="cell__value">19.22</span><span class="cell__tint" style="background:#4638e4"></span></div>
        <div class="cell" data-cell="c-116-9"><span class="cell__label">c-116-9</span><span class="cell__value">21.27</span><span class="cell__tint" style="background:#ba77ce"></span></div>
        <div class="cell" data-cell="c-116-10"><span class="cell__label">c-116-10</span><span class="cell__value">60.14</span><span class="cell__tint" style="background:#2b7dad"></span></div>
        <div class="cell" data-cell="c-116-11"><span class="cell__label">c-116-11</span><span class="cell__value">33.62</span><span class="cell__tint" style="background:#1ff3b0"></span></div>
        <div class="cell" data-cell="c-116-12"><span class="cell__label">c-116-12</span><span class="cell__value">78.00</span><span class="cell__tint" style="background:#c62a1e"></span></div>
        <div class="cell" data-cell="c-116-13"><span class="cell__label">c-116-13</span><span class="cell__value">81.92</span><span class="cell__tint" style="background:#0bfaf4"></span></div>
        <div class="cell" data-cell="c-116-14"><span class="cell__label">c-116-14</span><span class="cell__value">14.34</span><span class="cell__tint" style="background:#849d3f"></span></div>
        <div class="cell" data-cell="c-116-15"><span class="cell__label">c-116-15</span><span class="cell__value">72.39</span><span class="cell__tint" style="background:#f23a2d"></span></div>
        <div class="cell" data-cell="c-116-16"><span class="cell__label">c-116-16</span><span class="cell__value">30.37</span><span class="cell__tint" style="background:#760cdc"></span></div>
        <div class="cell" data-cell="c-116-17"><span class="cell__label">c-116-17</span><span class="cell__value">89.63</span><span class="cell__tint" style="background:#4c2451"></span></div>
        <div class="cell" data-cell="c-116-18"><span class="cell__label">c-116-18</span><span class="cell__value">68.97</span><span class="cell__tint" style="background:#e3deed"></span></div>
        <div class="cell" data-cell="c-116-19"><span class="cell__label">c-116-19</span><span class="cell__value">39.23</span><span class="cell__tint" style="background:#e98f9a"></span></div>
      </div>
      <div class="row" data-row="r-117">
        <div class="cell" data-cell="c-117-0"><span class="cell__label">c-117-0</span><span class="cell__value">35.98</span><span class="cell__tint" style="background:#2ea343"></span></div>
        <div class="cell" data-cell="c-117-1"><span class="cell__label">c-117-1</span><span class="cell__value">57.62</span><span class="cell__tint" style="background:#19b983"></span></div>
        <div class="cell" data-cell="c-117-2"><span class="cell__label">c-117-2</span><span class="cell__value">68.98</span><span class="cell__tint" style="background:#8339c6"></span></div>
        <div class="cell" data-cell="c-117-3"><span class="cell__label">c-117-3</span><span class="cell__value">94.66</span><span class="cell__tint" style="background:#328bbe"></span></div>
        <div class="cell" data-cell="c-117-4"><span class="cell__label">c-117-4</span><span class="cell__value">39.48</span><span class="cell__tint" style="background:#f5a69f"></span></div>
        <div class="cell" data-cell="c-117-5"><span class="cell__label">c-117-5</span><span class="cell__value">31.24</span><span class="cell__tint" style="background:#c82083"></span></div>
        <div class="cell" data-cell="c-117-6"><span class="cell__label">c-117-6</span><span class="cell__value">98.09</span><span class="cell__tint" style="background:#999185"></span></div>
        <div class="cell" data-cell="c-117-7"><span class="cell__label">c-117-7</span><span class="cell__value">80.97</span><span class="cell__tint" style="background:#88aa14"></span></div>
        <div class="cell" data-cell="c-117-8"><span class="cell__label">c-117-8</span><span class="cell__value">49.07</span><span class="cell__tint" style="background:#c1f7b5"></span></div>
        <div class="cell" data-cell="c-117-9"><span class="cell__label">c-117-9</span><span class="cell__value">28.94</span><span class="cell__tint" style="background:#f5d4c6"></span></div>
        <div class="cell" data-cell="c-117-10"><span class="cell__label">c-117-10</span><span class="cell__value">73.93</span><span class="cell__tint" style="background:#294178"></span></div>
        <div class="cell" data-cell="c-117-11"><span class="cell__label">c-117-11</span><span class="cell__value">73.24</span><span class="cell__tint" style="background:#b604eb"></span></div>
        <div class="cell" data-cell="c-117-12"><span class="cell__label">c-117-12</span><span class="cell__value">60.11</span><span class="cell__tint" style="background:#cc6950"></span></div>
        <div class="cell" data-cell="c-117-13"><span class="cell__label">c-117-13</span><span class="cell__value">47.16</span><span class="cell__tint" style="background:#c5896d"></span></div>
        <div class="cell" data-cell="c-117-14"><span class="cell__label">c-117-14</span><span class="cell__value">93.42</span><span class="cell__tint" style="background:#2bd78c"></span></div>
        <div class="cell" data-cell="c-117-15"><span class="cell__label">c-117-15</span><span class="cell__value">82.92</span><span class="cell__tint" style="background:#f2b6ac"></span></div>
        <div class="cell" data-cell="c-117-16"><span class="cell__label">c-117-16</span><span class="cell__value">24.24</span><span class="cell__tint" style="background:#255f74"></span></div>
        <div class="cell" data-cell="c-117-17"><span class="cell__label">c-117-17</span><span class="cell__value">93.85</span><span class="cell__tint" style="background:#1c8292"></span></div>
        <div class="cell" data-cell="c-117-18"><span class="cell__label">c-117-18</span><span class="cell__value">30.51</span><span class="cell__tint" style="background:#518100"></span></div>
        <div class="cell" data-cell="c-117-19"><span class="cell__label">c-117-19</span><span class="cell__value">30.94</span><span class="cell__tint" style="background:#306872"></span></div>
      </div>
      <div class="row" data-row="r-118">
        <div class="cell" data-cell="c-118-0"><span class="cell__label">c-118-0</span><span class="cell__value">63.34</span><span class="cell__tint" style="background:#df167e"></span></div>
        <div class="cell" data-cell="c-118-1"><span class="cell__label">c-118-1</span><span class="cell__value">17.43</span><span class="cell__tint" style="background:#dd9d0b"></span></div>
        <div class="cell" data-cell="c-118-2"><span class="cell__label">c-118-2</span><span class="cell__value">45.46</span><span class="cell__tint" style="background:#a77d42"></span></div>
        <div class="cell" data-cell="c-118-3"><span class="cell__label">c-118-3</span><span class="cell__value">22.90</span><span class="cell__tint" style="background:#783c56"></span></div>
        <div class="cell" data-cell="c-118-4"><span class="cell__label">c-118-4</span><span class="cell__value">96.15</span><span class="cell__tint" style="background:#d8e589"></span></div>
        <div class="cell" data-cell="c-118-5"><span class="cell__label">c-118-5</span><span class="cell__value">17.93</span><span class="cell__tint" style="background:#e1e839"></span></div>
        <div class="cell" data-cell="c-118-6"><span class="cell__label">c-118-6</span><span class="cell__value">72.49</span><span class="cell__tint" style="background:#47101a"></span></div>
        <div class="cell" data-cell="c-118-7"><span class="cell__label">c-118-7</span><span class="cell__value">83.38</span><span class="cell__tint" style="background:#98882e"></span></div>
        <div class="cell" data-cell="c-118-8"><span class="cell__label">c-118-8</span><span class="cell__value">38.45</span><span class="cell__tint" style="background:#23be34"></span></div>
        <div class="cell" data-cell="c-118-9"><span class="cell__label">c-118-9</span><span class="cell__value">50.36</span><span class="cell__tint" style="background:#634b2f"></span></div>
        <div class="cell" data-cell="c-118-10"><span class="cell__label">c-118-10</span><span class="cell__value">95.82</span><span class="cell__tint" style="background:#16758d"></span></div>
        <div class="cell" data-cell="c-118-11"><span class="cell__label">c-118-11</span><span class="cell__value">73.48</span><span class="cell__tint" style="background:#cfc805"></span></div>
        <div class="cell" data-cell="c-118-12"><span class="cell__label">c-118-12</span><span class="cell__value">38.86</span><span class="cell__tint" style="background:#e01caa"></span></div>
        <div class="cell" data-cell="c-118-13"><span class="cell__label">c-118-13</span><span class="cell__value">88.69</span><span class="cell__tint" style="background:#90b6fd"></span></div>
        <div class="cell" data-cell="c-118-14"><span class="cell__label">c-118-14</span><span class="cell__value">49.10</span><span class="cell__tint" style="background:#92c863"></span></div>
        <div class="cell" data-cell="c-118-15"><span class="cell__label">c-118-15</span><span class="cell__value">95.19</span><span class="cell__tint" style="background:#64feac"></span></div>
        <div class="cell" data-cell="c-118-16"><span class="cell__label">c-118-16</span><span class="cell__value">37.55</span><span class="cell__tint" style="background:#55b9f7"></span></div>
        <div class="cell" data-cell="c-118-17"><span class="cell__label">c-118-17</span><span class="cell__value">81.96</span><span class="cell__tint" style="background:#244268"></span></div>
        <div class="cell" data-cell="c-118-18"><span class="cell__label">c-118-18</span><span class="cell__value">69.65</span><span class="cell__tint" style="background:#e3798c"></span></div>
        <div class="cell" data-cell="c-118-19"><span class="cell__label">c-118-19</span><span class="cell__value">18.59</span><span class="cell__tint" style="background:#624ea7"></span></div>
      </div>
      <div class="row" data-row="r-119">
        <div class="cell" data-cell="c-119-0"><span class="cell__label">c-119-0</span><span class="cell__value">90.09</span><span class="cell__tint" style="background:#94300f"></span></div>
        <div class="cell" data-cell="c-119-1"><span class="cell__label">c-119-1</span><span class="cell__value">64.25</span><span class="cell__tint" style="background:#a30974"></span></div>
        <div class="cell" data-cell="c-119-2"><span class="cell__label">c-119-2</span><span class="cell__value">76.92</span><span class="cell__tint" style="background:#a94aad"></span></div>
        <div class="cell" data-cell="c-119-3"><span class="cell__label">c-119-3</span><span class="cell__value">81.77</span><span class="cell__tint" style="background:#e3ac04"></span></div>
        <div class="cell" data-cell="c-119-4"><span class="cell__label">c-119-4</span><span class="cell__value">68.84</span><span class="cell__tint" style="background:#c31b7c"></span></div>
        <div class="cell" data-cell="c-119-5"><span class="cell__label">c-119-5</span><span class="cell__value">58.68</span><span class="cell__tint" style="background:#f0060d"></span></div>
        <div class="cell" data-cell="c-119-6"><span class="cell__label">c-119-6</span><span class="cell__value">91.08</span><span class="cell__tint" style="background:#a0d687"></span></div>
        <div class="cell" data-cell="c-119-7"><span class="cell__label">c-119-7</span><span class="cell__value">85.13</span><span class="cell__tint" style="background:#ad4b41"></span></div>
        <div class="cell" data-cell="c-119-8"><span class="cell__label">c-119-8</span><span class="cell__value">77.01</span><span class="cell__tint" style="background:#ba4aa4"></span></div>
        <div class="cell" data-cell="c-119-9"><span class="cell__label">c-119-9</span><span class="cell__value">27.73</span><span class="cell__tint" style="background:#c7fa1c"></span></div>
        <div class="cell" data-cell="c-119-10"><span class="cell__label">c-119-10</span><span class="cell__value">55.53</span><span class="cell__tint" style="background:#bfa8eb"></span></div>
        <div class="cell" data-cell="c-119-11"><span class="cell__label">c-119-11</span><span class="cell__value">65.26</span><span class="cell__tint" style="background:#c50852"></span></div>
        <div class="cell" data-cell="c-119-12"><span class="cell__label">c-119-12</span><span class="cell__value">78.13</span><span class="cell__tint" style="background:#de64f6"></span></div>
        <div class="cell" data-cell="c-119-13"><span class="cell__label">c-119-13</span><span class="cell__value">99.71</span><span class="cell__tint" style="background:#6a02bb"></span></div>
        <div class="cell" data-cell="c-119-14"><span class="cell__label">c-119-14</span><span class="cell__value">60.83</span><span class="cell__tint" style="background:#47f370"></span></div>
        <div class="cell" data-cell="c-119-15"><span class="cell__label">c-119-15</span><span class="cell__value">27.45</span><span class="cell__tint" style="background:#34b09b"></span></div>
        <div class="cell" data-cell="c-119-16"><span class="cell__label">c-119-16</span><span class="cell__value">22.79</span><span class="cell__tint" style="background:#7e2250"></span></div>
        <div class="cell" data-cell="c-119-17"><span class="cell__label">c-119-17</span><span class="cell__value">88.69</span><span class="cell__tint" style="background:#8baa20"></span></div>
        <div class="cell" data-cell="c-119-18"><span class="cell__label">c-119-18</span><span class="cell__value">38.82</span><span class="cell__tint" style="background:#2ea3ba"></span></div>
        <div class="cell" data-cell="c-119-19"><span class="cell__label">c-119-19</span><span class="cell__value">5.71</span><span class="cell__tint" style="background:#cf0b35"></span></div>
      </div>
      <div class="row" data-row="r-120">
        <div class="cell" data-cell="c-120-0"><span class="cell__label">c-120-0</span><span class="cell__value">81.62</span><span class="cell__tint" style="background:#2217e5"></span></div>
        <div class="cell" data-cell="c-120-1"><span class="cell__label">c-120-1</span><span class="cell__value">62.77</span><span class="cell__tint" style="background:#322216"></span></div>
        <div class="cell" data-cell="c-120-2"><span class="cell__label">c-120-2</span><span class="cell__value">36.36</span><span class="cell__tint" style="background:#5485ce"></span></div>
        <div class="cell" data-cell="c-120-3"><span class="cell__label">c-120-3</span><span class="cell__value">17.76</span><span class="cell__tint" style="background:#e2d44d"></span></div>
        <div class="cell" data-cell="c-120-4"><span class="cell__label">c-120-4</span><span class="cell__value">16.06</span><span class="cell__tint" style="background:#795765"></span></div>
        <div class="cell" data-cell="c-120-5"><span class="cell__label">c-120-5</span><span class="cell__value">44.66</span><span class="cell__tint" style="background:#b1d899"></span></div>
        <div class="cell" data-cell="c-120-6"><span class="cell__label">c-120-6</span><span class="cell__value">72.95</span><span class="cell__tint" style="background:#f621b1"></span></div>
        <div class="cell" data-cell="c-120-7"><span class="cell__label">c-120-7</span><span class="cell__value">62.62</span><span class="cell__tint" style="background:#38df24"></span></div>
        <div class="cell" data-cell="c-120-8"><span class="cell__label">c-120-8</span><span class="cell__value">86.62</span><span class="cell__tint" style="background:#ad68d3"></span></div>
        <div class="cell" data-cell="c-120-9"><span class="cell__label">c-120-9</span><span class="cell__value">33.85</span><span class="cell__tint" style="background:#c54271"></span></div>
        <div class="cell" data-cell="c-120-10"><span class="cell__label">c-120-10</span><span class="cell__value">2.19</span><span class="cell__tint" style="background:#465b68"></span></div>
        <div class="cell" data-cell="c-120-11"><span class="cell__label">c-120-11</span><span class="cell__value">28.24</span><span class="cell__tint" style="background:#323e01"></span></div>
        <div class="cell" data-cell="c-120-12"><span class="cell__label">c-120-12</span><span class="cell__value">88.24</span><span class="cell__tint" style="background:#d46761"></span></div>
        <div class="cell" data-cell="c-120-13"><span class="cell__label">c-120-13</span><span class="cell__value">77.66</span><span class="cell__tint" style="background:#cc3a03"></span></div>
        <div class="cell" data-cell="c-120-14"><span class="cell__label">c-120-14</span><span class="cell__value">85.31</span><span class="cell__tint" style="background:#c4f148"></span></div>
        <div class="cell" data-cell="c-120-15"><span class="cell__label">c-120-15</span><span class="cell__value">57.06</span><span class="cell__tint" style="background:#86c516"></span></div>
        <div class="cell" data-cell="c-120-16"><span class="cell__label">c-120-16</span><span class="cell__value">41.25</span><span class="cell__tint" style="background:#7a9342"></span></div>
        <div class="cell" data-cell="c-120-17"><span class="cell__label">c-120-17</span><span class="cell__value">63.86</span><span class="cell__tint" style="background:#a0fdfb"></span></div>
        <div class="cell" data-cell="c-120-18"><span class="cell__label">c-120-18</span><span class="cell__value">46.04</span><span class="cell__tint" style="background:#2d21f8"></span></div>
        <div class="cell" data-cell="c-120-19"><span class="cell__label">c-120-19</span><span class="cell__value">14.00</span><span class="cell__tint" style="background:#3e9d36"></span></div>
      </div>
      <div class="row" data-row="r-121">
        <div class="cell" data-cell="c-121-0"><span class="cell__label">c-121-0</span><span class="cell__value">37.14</span><span class="cell__tint" style="background:#73b5be"></span></div>
        <div class="cell" data-cell="c-121-1"><span class="cell__label">c-121-1</span><span class="cell__value">43.19</span><span class="cell__tint" style="background:#f5d882"></span></div>
        <div class="cell" data-cell="c-121-2"><span class="cell__label">c-121-2</span><span class="cell__value">87.89</span><span class="cell__tint" style="background:#097eec"></span></div>
        <div class="cell" data-cell="c-121-3"><span class="cell__label">c-121-3</span><span class="cell__value">57.66</span><span class="cell__tint" style="background:#6cfb7f"></span></div>
        <div class="cell" data-cell="c-121-4"><span class="cell__label">c-121-4</span><span class="cell__value">84.21</span><span class="cell__tint" style="background:#af899d"></span></div>
        <div class="cell" data-cell="c-121-5"><span class="cell__label">c-121-5</span><span class="cell__value">52.28</span><span class="cell__tint" style="background:#e82eb7"></span></div>
        <div class="cell" data-cell="c-121-6"><span class="cell__label">c-121-6</span><span class="cell__value">68.45</span><span class="cell__tint" style="background:#e5c091"></span></div>
        <div class="cell" data-cell="c-121-7"><span class="cell__label">c-121-7</span><span class="cell__value">68.40</span><span class="cell__tint" style="background:#7d9921"></span></div>
        <div class="cell" data-cell="c-121-8"><span class="cell__label">c-121-8</span><span class="cell__value">58.44</span><span class="cell__tint" style="background:#58320e"></span></div>
        <div class="cell" data-cell="c-121-9"><span class="cell__label">c-121-9</span><span class="cell__value">99.46</span><span class="cell__tint" style="background:#8971b0"></span></div>
        <div class="cell" data-cell="c-121-10"><span class="cell__label">c-121-10</span><span class="cell__value">83.89</span><span class="cell__tint" style="background:#e15ac5"></span></div>
        <div class="cell" data-cell="c-121-11"><span class="cell__label">c-121-11</span><span class="cell__value">2.70</span><span class="cell__tint" style="background:#aef810"></span></div>
        <div class="cell" data-cell="c-121-12"><span class="cell__label">c-121-12</span><span class="cell__value">96.43</span><span class="cell__tint" style="background:#73b15d"></span></div>
        <div class="cell" data-cell="c-121-13"><span class="cell__label">c-121-13</span><span class="cell__value">46.26</span><span class="cell__tint" style="background:#26b16d"></span></div>
        <div class="cell" data-cell="c-121-14"><span class="cell__label">c-121-14</span><span class="cell__value">72.46</span><span class="cell__tint" style="background:#bc5e51"></span></div>
        <div class="cell" data-cell="c-121-15"><span class="cell__label">c-121-15</span><span class="cell__value">34.81</span><span class="cell__tint" style="background:#4d674f"></span></div>
        <div class="cell" data-cell="c-121-16"><span class="cell__label">c-121-16</span><span class="cell__value">57.63</span><span class="cell__tint" style="background:#895ad3"></span></div>
        <div class="cell" data-cell="c-121-17"><span class="cell__label">c-121-17</span><span class="cell__value">46.73</span><span class="cell__tint" style="background:#0c6a98"></span></div>
        <div class="cell" data-cell="c-121-18"><span class="cell__label">c-121-18</span><span class="cell__value">39.69</span><span class="cell__tint" style="background:#7d1ebf"></span></div>
        <div class="cell" data-cell="c-121-19"><span class="cell__label">c-121-19</span><span class="cell__value">48.48</span><span class="cell__tint" style="background:#63c6d8"></span></div>
      </div>
      <div class="row" data-row="r-122">
        <div class="cell" data-cell="c-122-0"><span class="cell__label">c-122-0</span><span class="cell__value">61.08</span><span class="cell__tint" style="background:#abf72b"></span></div>
        <div class="cell" data-cell="c-122-1"><span class="cell__label">c-122-1</span><span class="cell__value">89.47</span><span class="cell__tint" style="background:#e5b886"></span></div>
        <div class="cell" data-cell="c-122-2"><span class="cell__label">c-122-2</span><span class="cell__value">0.64</span><span class="cell__tint" style="background:#edfd12"></span></div>
        <div class="cell" data-cell="c-122-3"><span class="cell__label">c-122-3</span><span class="cell__value">15.11</span><span class="cell__tint" style="background:#d49c0c"></span></div>
        <div class="cell" data-cell="c-122-4"><span class="cell__label">c-122-4</span><span class="cell__value">73.59</span><span class="cell__tint" style="background:#acb791"></span></div>
        <div class="cell" data-cell="c-122-5"><span class="cell__label">c-122-5</span><span class="cell__value">71.19</span><span class="cell__tint" style="background:#5957ff"></span></div>
        <div class="cell" data-cell="c-122-6"><span class="cell__label">c-122-6</span><span class="cell__value">84.81</span><span class="cell__tint" style="background:#8ca52b"></span></div>
        <div class="cell" data-cell="c-122-7"><span class="cell__label">c-122-7</span><span class="cell__value">1.95</span><span class="cell__tint" style="background:#4a775f"></span></div>
        <div class="cell" data-cell="c-122-8"><span class="cell__label">c-122-8</span><span class="cell__value">73.99</span><span class="cell__tint" style="background:#5c2964"></span></div>
        <div class="cell" data-cell="c-122-9"><span class="cell__label">c-122-9</span><span class="cell__value">9.09</span><span class="cell__tint" style="background:#636bdd"></span></div>
        <div class="cell" data-cell="c-122-10"><span class="cell__label">c-122-10</span><span class="cell__value">72.37</span><span class="cell__tint" style="background:#c6cebb"></span></div>
        <div class="cell" data-cell="c-122-11"><span class="cell__label">c-122-11</span><span class="cell__value">74.56</span><span class="cell__tint" style="background:#436041"></span></div>
        <div class="cell" data-cell="c-122-12"><span class="cell__label">c-122-12</span><span class="cell__value">13.79</span><span class="cell__tint" style="background:#b33e8c"></span></div>
        <div class="cell" data-cell="c-122-13"><span class="cell__label">c-122-13</span><span class="cell__value">8.42</span><span class="cell__tint" style="background:#fc3aa3"></span></div>
        <div class="cell" data-cell="c-122-14"><span class="cell__label">c-122-14</span><span class="cell__value">11.06</span><span class="cell__tint" style="background:#ad7d85"></span></div>
        <div class="cell" data-cell="c-122-15"><span class="cell__label">c-122-15</span><span class="cell__value">21.58</span><span class="cell__tint" style="background:#82e520"></span></div>
        <div class="cell" data-cell="c-122-16"><span class="cell__label">c-122-16</span><span class="cell__value">44.03</span><span class="cell__tint" style="background:#7015bd"></span></div>
        <div class="cell" data-cell="c-122-17"><span class="cell__label">c-122-17</span><span class="cell__value">51.35</span><span class="cell__tint" style="background:#323a5b"></span></div>
        <div class="cell" data-cell="c-122-18"><span class="cell__label">c-122-18</span><span class="cell__value">52.26</span><span class="cell__tint" style="background:#ee3ae3"></span></div>
        <div class="cell" data-cell="c-122-19"><span class="cell__label">c-122-19</span><span class="cell__value">21.03</span><span class="cell__tint" style="background:#e9ed16"></span></div>
      </div>
      <div class="row" data-row="r-123">
        <div class="cell" data-cell="c-123-0"><span class="cell__label">c-123-0</span><span class="cell__value">84.45</span><span class="cell__tint" style="background:#1186ef"></span></div>
        <div class="cell" data-cell="c-123-1"><span class="cell__label">c-123-1</span><span class="cell__value">14.15</span><span class="cell__tint" style="background:#742677"></span></div>
        <div class="cell" data-cell="c-123-2"><span class="cell__label">c-123-2</span><span class="cell__value">84.43</span><span class="cell__tint" style="background:#c97e3a"></span></div>
        <div class="cell" data-cell="c-123-3"><span class="cell__label">c-123-3</span><span class="cell__value">28.07</span><span class="cell__tint" style="background:#ddad76"></span></div>
        <div class="cell" data-cell="c-123-4"><span class="cell__label">c-123-4</span><span class="cell__value">30.61</span><span class="cell__tint" style="background:#a2b065"></span></div>
        <div class="cell" data-cell="c-123-5"><span class="cell__label">c-123-5</span><span class="cell__value">88.51</span><span class="cell__tint" style="background:#acc2ac"></span></div>
        <div class="cell" data-cell="c-123-6"><span class="cell__label">c-123-6</span><span class="cell__value">65.90</span><span class="cell__tint" style="background:#589c7a"></span></div>
        <div class="cell" data-cell="c-123-7"><span class="cell__label">c-123-7</span><span class="cell__value">60.71</span><span class="cell__tint" style="background:#d93a00"></span></div>
        <div class="cell" data-cell="c-123-8"><span class="cell__label">c-123-8</span><span class="cell__value">99.35</span><span class="cell__tint" style="background:#d67a48"></span></div>
        <div class="cell" data-cell="c-123-9"><span class="cell__label">c-123-9</span><span class="cell__value">69.46</span><span class="cell__tint" style="background:#83f759"></span></div>
        <div class="cell" data-cell="c-123-10"><span class="cell__label">c-123-10</span><span class="cell__value">86.58</span><span class="cell__tint" style="background:#2c9449"></span></div>
        <div class="cell" data-cell="c-123-11"><span class="cell__label">c-123-11</span><span class="cell__value">26.07</span><span class="cell__tint" style="background:#bfb431"></span></div>
        <div class="cell" data-cell="c-123-12"><span class="cell__label">c-123-12</span><span class="cell__value">62.79</span><span class="cell__tint" style="background:#67f6fa"></span></div>
        <div class="cell" data-cell="c-123-13"><span class="cell__label">c-123-13</span><span class="cell__value">91.74</span><span class="cell__tint" style="background:#5b5a88"></span></div>
        <div class="cell" data-cell="c-123-14"><span class="cell__label">c-123-14</span><span class="cell__value">58.75</span><span class="cell__tint" style="background:#a5a6d8"></span></div>
        <div class="cell" data-cell="c-123-15"><span class="cell__label">c-123-15</span><span class="cell__value">81.37</span><span class="cell__tint" style="background:#45af1c"></span></div>
        <div class="cell" data-cell="c-123-16"><span class="cell__label">c-123-16</span><span class="cell__value">32.80</span><span class="cell__tint" style="background:#3606bb"></span></div>
        <div class="cell" data-cell="c-123-17"><span class="cell__label">c-123-17</span><span class="cell__value">99.52</span><span class="cell__tint" style="background:#35dfff"></span></div>
        <div class="cell" data-cell="c-123-18"><span class="cell__label">c-123-18</span><span class="cell__value">40.36</span><span class="cell__tint" style="background:#ff911a"></span></div>
        <div class="cell" data-cell="c-123-19"><span class="cell__label">c-123-19</span><span class="cell__value">85.25</span><span class="cell__tint" style="background:#ff9770"></span></div>
      </div>
      <div class="row" data-row="r-124">
        <div class="cell" data-cell="c-124-0"><span class="cell__label">c-124-0</span><span class="cell__value">74.96</span><span class="cell__tint" style="background:#30e622"></span></div>
        <div class="cell" data-cell="c-124-1"><span class="cell__label">c-124-1</span><span class="cell__value">69.10</span><span class="cell__tint" style="background:#0cbf88"></span></div>
        <div class="cell" data-cell="c-124-2"><span class="cell__label">c-124-2</span><span class="cell__value">9.81</span><span class="cell__tint" style="background:#011583"></span></div>
        <div class="cell" data-cell="c-124-3"><span class="cell__label">c-124-3</span><span class="cell__value">79.00</span><span class="cell__tint" style="background:#ab2aca"></span></div>
        <div class="cell" data-cell="c-124-4"><span class="cell__label">c-124-4</span><span class="cell__value">94.05</span><span class="cell__tint" style="background:#ce0d61"></span></div>
        <div class="cell" data-cell="c-124-5"><span class="cell__label">c-124-5</span><span class="cell__value">36.29</span><span class="cell__tint" style="background:#0b6f98"></span></div>
        <div class="cell" data-cell="c-124-6"><span class="cell__label">c-124-6</span><span class="cell__value">42.65</span><span class="cell__tint" style="background:#f239c8"></span></div>
        <div class="cell" data-cell="c-124-7"><span class="cell__label">c-124-7</span><span class="cell__value">9.61</span><span class="cell__tint" style="background:#b25730"></span></div>
        <div class="cell" data-cell="c-124-8"><span class="cell__label">c-124-8</span><span class="cell__value">34.87</span><span class="cell__tint" style="background:#87b389"></span></div>
        <div class="cell" data-cell="c-124-9"><span class="cell__label">c-124-9</span><span class="cell__value">43.90</span><span class="cell__tint" style="background:#572b4b"></span></div>
        <div class="cell" data-cell="c-124-10"><span class="cell__label">c-124-10</span><span class="cell__value">79.90</span><span class="cell__tint" style="background:#a8e9b6"></span></div>
        <div class="cell" data-cell="c-124-11"><span class="cell__label">c-124-11</span><span class="cell__value">77.34</span><span class="cell__tint" style="background:#a99db8"></span></div>
        <div class="cell" data-cell="c-124-12"><span class="cell__label">c-124-12</span><span class="cell__value">39.11</span><span class="cell__tint" style="background:#6fcbd4"></span></div>
        <div class="cell" data-cell="c-124-13"><span class="cell__label">c-124-13</span><span class="cell__value">8.37</span><span class="cell__tint" style="background:#3929ea"></span></div>
        <div class="cell" data-cell="c-124-14"><span class="cell__label">c-124-14</span><span class="cell__value">60.14</span><span class="cell__tint" style="background:#05444c"></span></div>
        <div class="cell" data-cell="c-124-15"><span class="cell__label">c-124-15</span><span class="cell__value">12.40</span><span class="cell__tint" style="background:#50c7e6"></span></div>
        <div class="cell" data-cell="c-124-16"><span class="cell__label">c-124-16</span><span class="cell__value">57.88</span><span class="cell__tint" style="background:#6be9cf"></span></div>
        <div class="cell" data-cell="c-124-17"><span class="cell__label">c-124-17</span><span class="cell__value">64.19</span><span class="cell__tint" style="background:#74f823"></span></div>
        <div class="cell" data-cell="c-124-18"><span class="cell__label">c-124-18</span><span class="cell__value">93.37</span><span class="cell__tint" style="background:#616a13"></span></div>
        <div class="cell" data-cell="c-124-19"><span class="cell__label">c-124-19</span><span class="cell__value">5.52</span><span class="cell__tint" style="background:#86189a"></span></div>
      </div>
      <div class="row" data-row="r-125">
        <div class="cell" data-cell="c-125-0"><span class="cell__label">c-125-0</span><span class="cell__value">62.23</span><span class="cell__tint" style="background:#ce7e32"></span></div>
        <div class="cell" data-cell="c-125-1"><span class="cell__label">c-125-1</span><span class="cell__value">9.59</span><span class="cell__tint" style="background:#ce9944"></span></div>
        <div class="cell" data-cell="c-125-2"><span class="cell__label">c-125-2</span><span class="cell__value">6.73</span><span class="cell__tint" style="background:#a143df"></span></div>
        <div class="cell" data-cell="c-125-3"><span class="cell__label">c-125-3</span><span class="cell__value">39.63</span><span class="cell__tint" style="background:#ed9d3a"></span></div>
        <div class="cell" data-cell="c-125-4"><span class="cell__label">c-125-4</span><span class="cell__value">92.89</span><span class="cell__tint" style="background:#ab75a4"></span></div>
        <div class="cell" data-cell="c-125-5"><span class="cell__label">c-125-5</span><span class="cell__value">66.27</span><span class="cell__tint" style="background:#91c68a"></span></div>
        <div class="cell" data-cell="c-125-6"><span class="cell__label">c-125-6</span><span class="cell__value">32.47</span><span class="cell__tint" style="background:#e05291"></span></div>
        <div class="cell" data-cell="c-125-7"><span class="cell__label">c-125-7</span><span class="cell__value">42.13</span><span class="cell__tint" style="background:#14e5b8"></span></div>
        <div class="cell" data-cell="c-125-8"><span class="cell__label">c-125-8</span><span class="cell__value">47.55</span><span class="cell__tint" style="background:#3364b7"></span></div>
        <div class="cell" data-cell="c-125-9"><span class="cell__label">c-125-9</span><span class="cell__value">11.80</span><span class="cell__tint" style="background:#700e5d"></span></div>
        <div class="cell" data-cell="c-125-10"><span class="cell__label">c-125-10</span><span class="cell__value">58.89</span><span class="cell__tint" style="background:#4259ee"></span></div>
        <div class="cell" data-cell="c-125-11"><span class="cell__label">c-125-11</span><span class="cell__value">68.79</span><span class="cell__tint" style="background:#8ca119"></span></div>
        <div class="cell" data-cell="c-125-12"><span class="cell__label">c-125-12</span><span class="cell__value">59.37</span><span class="cell__tint" style="background:#370c9b"></span></div>
        <div class="cell" data-cell="c-125-13"><span class="cell__label">c-125-13</span><span class="cell__value">39.49</span><span class="cell__tint" style="background:#7b1527"></span></div>
        <div class="cell" data-cell="c-125-14"><span class="cell__label">c-125-14</span><span class="cell__value">53.65</span><span class="cell__tint" style="background:#79991e"></span></div>
        <div class="cell" data-cell="c-125-15"><span class="cell__label">c-125-15</span><span class="cell__value">62.81</span><span class="cell__tint" style="background:#1a77b8"></span></div>
        <div class="cell" data-cell="c-125-16"><span class="cell__label">c-125-16</span><span class="cell__value">86.94</span><span class="cell__tint" style="background:#ab6af2"></span></div>
        <div class="cell" data-cell="c-125-17"><span class="cell__label">c-125-17</span><span class="cell__value">42.89</span><span class="cell__tint" style="background:#33842e"></span></div>
        <div class="cell" data-cell="c-125-18"><span class="cell__label">c-125-18</span><span class="cell__value">86.14</span><span class="cell__tint" style="background:#12ab81"></span></div>
        <div class="cell" data-cell="c-125-19"><span class="cell__label">c-125-19</span><span class="cell__value">41.87</span><span class="cell__tint" style="background:#463df6"></span></div>
      </div>
      <div class="row" data-row="r-126">
        <div class="cell" data-cell="c-126-0"><span class="cell__label">c-126-0</span><span class="cell__value">59.75</span><span class="cell__tint" style="background:#35ffc0"></span></div>
        <div class="cell" data-cell="c-126-1"><span class="cell__label">c-126-1</span><span class="cell__value">95.72</span><span class="cell__tint" style="background:#f0a332"></span></div>
        <div class="cell" data-cell="c-126-2"><span class="cell__label">c-126-2</span><span class="cell__value">66.03</span><span class="cell__tint" style="background:#d42c9c"></span></div>
        <div class="cell" data-cell="c-126-3"><span class="cell__label">c-126-3</span><span class="cell__value">72.57</span><span class="cell__tint" style="background:#075481"></span></div>
        <div class="cell" data-cell="c-126-4"><span class="cell__label">c-126-4</span><span class="cell__value">44.62</span><span class="cell__tint" style="background:#3bcecc"></span></div>
        <div class="cell" data-cell="c-126-5"><span class="cell__label">c-126-5</span><span class="cell__value">54.89</span><span class="cell__tint" style="background:#fea6e4"></span></div>
        <div class="cell" data-cell="c-126-6"><span class="cell__label">c-126-6</span><span class="cell__value">2.37</span><span class="cell__tint" style="background:#ecdf6f"></span></div>
        <div class="cell" data-cell="c-126-7"><span class="cell__label">c-126-7</span><span class="cell__value">49.48</span><span class="cell__tint" style="background:#df400f"></span></div>
        <div class="cell" data-cell="c-126-8"><span class="cell__label">c-126-8</span><span class="cell__value">14.96</span><span class="cell__tint" style="background:#c4d05b"></span></div>
        <div class="cell" data-cell="c-126-9"><span class="cell__label">c-126-9</span><span class="cell__value">1.97</span><span class="cell__tint" style="background:#2c1f86"></span></div>
        <div class="cell" data-cell="c-126-10"><span class="cell__label">c-126-10</span><span class="cell__value">12.96</span><span class="cell__tint" style="background:#c608db"></span></div>
        <div class="cell" data-cell="c-126-11"><span class="cell__label">c-126-11</span><span class="cell__value">51.50</span><span class="cell__tint" style="background:#e961fe"></span></div>
        <div class="cell" data-cell="c-126-12"><span class="cell__label">c-126-12</span><span class="cell__value">76.22</span><span class="cell__tint" style="background:#0d7c1b"></span></div>
        <div class="cell" data-cell="c-126-13"><span class="cell__label">c-126-13</span><span class="cell__value">59.49</span><span class="cell__tint" style="background:#52c6f4"></span></div>
        <div class="cell" data-cell="c-126-14"><span class="cell__label">c-126-14</span><span class="cell__value">80.69</span><span class="cell__tint" style="background:#72a953"></span></div>
        <div class="cell" data-cell="c-126-15"><span class="cell__label">c-126-15</span><span class="cell__value">0.67</span><span class="cell__tint" style="background:#c9f828"></span></div>
        <div class="cell" data-cell="c-126-16"><span class="cell__label">c-126-16</span><span class="cell__value">67.04</span><span class="cell__tint" style="background:#189490"></span></div>
        <div class="cell" data-cell="c-126-17"><span class="cell__label">c-126-17</span><span class="cell__value">62.02</span><span class="cell__tint" style="background:#ab889e"></span></div>
        <div class="cell" data-cell="c-126-18"><span class="cell__label">c-126-18</span><span class="cell__value">71.41</span><span class="cell__tint" style="background:#0d7d06"></span></div>
        <div class="cell" data-cell="c-126-19"><span class="cell__label">c-126-19</span><span class="cell__value">63.71</span><span class="cell__tint" style="background:#d6253c"></span></div>
      </div>
      <div class="row" data-row="r-127">
        <div class="cell" data-cell="c-127-0"><span class="cell__label">c-127-0</span><span class="cell__value">23.53</span><span class="cell__tint" style="background:#1bae11"></span></div>
        <div class="cell" data-cell="c-127-1"><span class="cell__label">c-127-1</span><span class="cell__value">85.47</span><span class="cell__tint" style="background:#c7b282"></span></div>
        <div class="cell" data-cell="c-127-2"><span class="cell__label">c-127-2</span><span class="cell__value">39.38</span><span class="cell__tint" style="background:#d9d4c9"></span></div>
        <div class="cell" data-cell="c-127-3"><span class="cell__label">c-127-3</span><span class="cell__value">16.25</span><span class="cell__tint" style="background:#381057"></span></div>
        <div class="cell" data-cell="c-127-4"><span class="cell__label">c-127-4</span><span class="cell__value">45.68</span><span class="cell__tint" style="background:#f96669"></span></div>
        <div class="cell" data-cell="c-127-5"><span class="cell__label">c-127-5</span><span class="cell__value">96.02</span><span class="cell__tint" style="background:#6e4911"></span></div>
        <div class="cell" data-cell="c-127-6"><span class="cell__label">c-127-6</span><span class="cell__value">58.62</span><span class="cell__tint" style="background:#58f873"></span></div>
        <div class="cell" data-cell="c-127-7"><span class="cell__label">c-127-7</span><span class="cell__value">62.46</span><span class="cell__tint" style="background:#2bc18d"></span></div>
        <div class="cell" data-cell="c-127-8"><span class="cell__label">c-127-8</span><span class="cell__value">61.35</span><span class="cell__tint" style="background:#28e7af"></span></div>
        <div class="cell" data-cell="c-127-9"><span class="cell__label">c-127-9</span><span class="cell__value">42.04</span><span class="cell__tint" style="background:#3fdcff"></span></div>
        <div class="cell" data-cell="c-127-10"><span class="cell__label">c-127-10</span><span class="cell__value">50.50</span><span class="cell__tint" style="background:#4d30d0"></span></div>
        <div class="cell" data-cell="c-127-11"><span class="cell__label">c-127-11</span><span class="cell__value">95.95</span><span class="cell__tint" style="background:#434a21"></span></div>
        <div class="cell" data-cell="c-127-12"><span class="cell__label">c-127-12</span><span class="cell__value">98.04</span><span class="cell__tint" style="background:#b16b33"></span></div>
        <div class="cell" data-cell="c-127-13"><span class="cell__label">c-127-13</span><span class="cell__value">73.86</span><span class="cell__tint" style="background:#3a7f64"></span></div>
        <div class="cell" data-cell="c-127-14"><span class="cell__label">c-127-14</span><span class="cell__value">6.75</span><span class="cell__tint" style="background:#a72472"></span></div>
        <div class="cell" data-cell="c-127-15"><span class="cell__label">c-127-15</span><span class="cell__value">29.47</span><span class="cell__tint" style="background:#a34275"></span></div>
        <div class="cell" data-cell="c-127-16"><span class="cell__label">c-127-16</span><span class="cell__value">26.72</span><span class="cell__tint" style="background:#09ace3"></span></div>
        <div class="cell" data-cell="c-127-17"><span class="cell__label">c-127-17</span><span class="cell__value">36.32</span><span class="cell__tint" style="background:#709c4e"></span></div>
        <div class="cell" data-cell="c-127-18"><span class="cell__label">c-127-18</span><span class="cell__value">24.07</span><span class="cell__tint" style="background:#965749"></span></div>
        <div class="cell" data-cell="c-127-19"><span class="cell__label">c-127-19</span><span class="cell__value">39.07</span><span class="cell__tint" style="background:#60973e"></span></div>
      </div>
      <div class="row" data-row="r-128">
        <div class="cell" data-cell="c-128-0"><span class="cell__label">c-128-0</span><span class="cell__value">63.22</span><span class="cell__tint" style="background:#4c7e71"></span></div>
        <div class="cell" data-cell="c-128-1"><span class="cell__label">c-128-1</span><span class="cell__value">90.12</span><span class="cell__tint" style="background:#7bdf41"></span></div>
        <div class="cell" data-cell="c-128-2"><span class="cell__label">c-128-2</span><span class="cell__value">70.33</span><span class="cell__tint" style="background:#eaec58"></span></div>
        <div class="cell" data-cell="c-128-3"><span class="cell__label">c-128-3</span><span class="cell__value">20.56</span><span class="cell__tint" style="background:#339354"></span></div>
        <div class="cell" data-cell="c-128-4"><span class="cell__label">c-128-4</span><span class="cell__value">35.75</span><span class="cell__tint" style="background:#a31c27"></span></div>
        <div class="cell" data-cell="c-128-5"><span class="cell__label">c-128-5</span><span class="cell__value">26.49</span><span class="cell__tint" style="background:#b794c5"></span></div>
        <div class="cell" data-cell="c-128-6"><span class="cell__label">c-128-6</span><span class="cell__value">79.95</span><span class="cell__tint" style="background:#3c19a9"></span></div>
        <div class="cell" data-cell="c-128-7"><span class="cell__label">c-128-7</span><span class="cell__value">96.49</span><span class="cell__tint" style="background:#609c27"></span></div>
        <div class="cell" data-cell="c-128-8"><span class="cell__label">c-128-8</span><span class="cell__value">37.73</span><span class="cell__tint" style="background:#f48ff8"></span></div>
        <div class="cell" data-cell="c-128-9"><span class="cell__label">c-128-9</span><span class="cell__value">93.06</span><span class="cell__tint" style="background:#992733"></span></div>
        <div class="cell" data-cell="c-128-10"><span class="cell__label">c-128-10</span><span class="cell__value">95.69</span><span class="cell__tint" style="background:#2bfaa3"></span></div>
        <div class="cell" data-cell="c-128-11"><span class="cell__label">c-128-11</span><span class="cell__value">55.21</span><span class="cell__tint" style="background:#5138fc"></span></div>
        <div class="cell" data-cell="c-128-12"><span class="cell__label">c-128-12</span><span class="cell__value">62.42</span><span class="cell__tint" style="background:#4c6252"></span></div>
        <div class="cell" data-cell="c-128-13"><span class="cell__label">c-128-13</span><span class="cell__value">39.47</span><span class="cell__tint" style="background:#740c8a"></span></div>
        <div class="cell" data-cell="c-128-14"><span class="cell__label">c-128-14</span><span class="cell__value">52.96</span><span class="cell__tint" style="background:#cf06a7"></span></div>
        <div class="cell" data-cell="c-128-15"><span class="cell__label">c-128-15</span><span class="cell__value">37.11</span><span class="cell__tint" style="background:#47d20c"></span></div>
        <div class="cell" data-cell="c-128-16"><span class="cell__label">c-128-16</span><span class="cell__value">92.49</span><span class="cell__tint" style="background:#1871eb"></span></div>
        <div class="cell" data-cell="c-128-17"><span class="cell__label">c-128-17</span><span class="cell__value">88.54</span><span class="cell__tint" style="background:#b9593e"></span></div>
        <div class="cell" data-cell="c-128-18"><span class="cell__label">c-128-18</span><span class="cell__value">73.31</span><span class="cell__tint" style="background:#de6005"></span></div>
        <div class="cell" data-cell="c-128-19"><span class="cell__label">c-128-19</span><span class="cell__value">96.63</span><span class="cell__tint" style="background:#191e99"></span></div>
      </div>
      <div class="row" data-row="r-129">
        <div class="cell" data-cell="c-129-0"><span class="cell__label">c-129-0</span><span class="cell__value">53.21</span><span class="cell__tint" style="background:#e928b9"></span></div>
        <div class="cell" data-cell="c-129-1"><span class="cell__label">c-129-1</span><span class="cell__value">14.85</span><span class="cell__tint" style="background:#f6d5a7"></span></div>
        <div class="cell" data-cell="c-129-2"><span class="cell__label">c-129-2</span><span class="cell__value">54.97</span><span class="cell__tint" style="background:#059b25"></span></div>
        <div class="cell" data-cell="c-129-3"><span class="cell__label">c-129-3</span><span class="cell__value">98.07</span><span class="cell__tint" style="background:#15364e"></span></div>
        <div class="cell" data-cell="c-129-4"><span class="cell__label">c-129-4</span><span class="cell__value">49.06</span><span class="cell__tint" style="background:#af4635"></span></div>
        <div class="cell" data-cell="c-129-5"><span class="cell__label">c-129-5</span><span class="cell__value">6.13</span><span class="cell__tint" style="background:#49757b"></span></div>
        <div class="cell" data-cell="c-129-6"><span class="cell__label">c-129-6</span><span class="cell__value">18.51</span><span class="cell__tint" style="background:#425248"></span></div>
        <div class="cell" data-cell="c-129-7"><span class="cell__label">c-129-7</span><span class="cell__value">81.13</span><span class="cell__tint" style="background:#1069b9"></span></div>
        <div class="cell" data-cell="c-129-8"><span class="cell__label">c-129-8</span><span class="cell__value">17.58</span><span class="cell__tint" style="background:#2862bf"></span></div>
        <div class="cell" data-cell="c-129-9"><span class="cell__label">c-129-9</span><span class="cell__value">35.76</span><span class="cell__tint" style="background:#08069e"></span></div>
        <div class="cell" data-cell="c-129-10"><span class="cell__label">c-129-10</span><span class="cell__value">4.46</span><span class="cell__tint" style="background:#d36afa"></span></div>
        <div class="cell" data-cell="c-129-11"><span class="cell__label">c-129-11</span><span class="cell__value">14.82</span><span class="cell__tint" style="background:#4d77e0"></span></div>
        <div class="cell" data-cell="c-129-12"><span class="cell__label">c-129-12</span><span class="cell__value">7.54</span><span class="cell__tint" style="background:#146d56"></span></div>
        <div class="cell" data-cell="c-129-13"><span class="cell__label">c-129-13</span><span class="cell__value">56.05</span><span class="cell__tint" style="background:#51435e"></span></div>
        <div class="cell" data-cell="c-129-14"><span class="cell__label">c-129-14</span><span class="cell__value">96.91</span><span class="cell__tint" style="background:#2216e6"></span></div>
        <div class="cell" data-cell="c-129-15"><span class="cell__label">c-129-15</span><span class="cell__value">34.50</span><span class="cell__tint" style="background:#261fd6"></span></div>
        <div class="cell" data-cell="c-129-16"><span class="cell__label">c-129-16</span><span class="cell__value">11.00</span><span class="cell__tint" style="background:#60d485"></span></div>
        <div class="cell" data-cell="c-129-17"><span class="cell__label">c-129-17</span><span class="cell__value">24.20</span><span class="cell__tint" style="background:#eac2ba"></span></div>
        <div class="cell" data-cell="c-129-18"><span class="cell__label">c-129-18</span><span class="cell__value">56.39</span><span class="cell__tint" style="background:#9c1e7f"></span></div>
        <div class="cell" data-cell="c-129-19"><span class="cell__label">c-129-19</span><span class="cell__value">37.94</span><span class="cell__tint" style="background:#cfe139"></span></div>
      </div>
    </div>
    <Slot v-if="showSlot" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slot from './Slot.vue'
import { config } from '../stores/config'

/** 供脚本块编辑测试使用。 */
const probeTick = 1
const count = ref(0)
const showSlot = config.showSlot
const mountedAt = new Date().toLocaleTimeString()
const hmrLog = ref('')

function bump() {
  count.value += 1
}

// 页面上直接显示最近一次 HMR 事件；被“吞掉”的那次保存不会有任何事件，也不会有任何刷新。
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

.hmr-hint {
  color: #555;
  font-size: 13px;
  max-width: 80ch;
}

.hmr-state {
  font-size: 13px;
}

.hmr-hint code {
  background: #eee;
  padding: 0 3px;
}

.grid {
  margin-top: 8px;
}

.row {
  display: flex;
  gap: 4px;
}

.cell {
  border: 1px solid #ddd;
  padding: 2px 4px;
  font-size: 11px;
}
</style>
