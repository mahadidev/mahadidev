import '@uiw/react-textarea-code-editor/dist.css';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const CodeEditor = dynamic(
	() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default),
	{ ssr: false }
);

const CodeSnippet = () => {
	const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
  <html>
    <head>
      <title>Mahadi Dev | Web Developer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <header class="navigation">
        <div class="container">
          <a class="logo" href="mahadidev.vercel.app">MAHADI DEV</a>
          <ul class="menu">
            <li class="menu-item">Home</li>
            <li class="menu-item">Project</li>
            <li class="menu-item">Review</li>
            <li class="menu-item">Contact</li>
          </ul>
          <div class="hamburger-icon">
            <svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="100%" height="10"></rect>
              <rect y="30" width="100%" height="10"></rect>
              <rect y="60" width="100%" height="10"></rect>
            </svg>
          </div>
        </div>
      </header>
      <main class="content">
        <section class="section hero">
          <div class="container">
            <div class="hero-box">
              <h1 class="hero-title">What is Lorem Ipsum?</h1>
              <p class="hero-desc">
                Lorem Ipsum is simply dummied text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's                                 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          </div>
        </section>
        <section class="section experiences">
          <div class="container">
            <h1 class="section-title">EXPERIENCES</h1>
            <div class="box-wrapper">
              <div class="box">
                <h2 class="box-title">clients</h2>
                <p class="box-value">50+</p>
              </div>
              <div class="box">
                <h2 class="box-title">projects</h2>
                <p class="box-value">30+</p>
              </div>
              <div class="box">
                <h2 class="box-title">rating</h2>
                <p class="box-value">30+</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <p class="copyright-text">All rights reserved MAHADI DEV</p>
        </div>
      </footer>
    </body>
  </html>
  `);

	const [cssCode, setCssCode] = useState(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    transition: all 0.2s ease-out;
}
body {
    background: #fafafa;
}
/* class */
.container {
    max-width: 1400px;
    width: 100%;
    margin: auto;
    padding: 0 1rem;
}
.section {
    padding: 7rem 0;
}
.section-title {
    font-size: 1.2rem;
    text-decoration: underline;
    margin-bottom: 1rem;
}
/* class end */

/* navigation */
header {
    background: #fff;
    box-shadow: 0 0 2rem 0.04rem #00000010;
    padding: 1rem 0;
}
header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    color: #374151;
    font-weight: bold;
    text-decoration: none;
}
.menu {
    list-style: none;
    display: flex;
    gap: 1rem;
}
@media only screen and (max-width: 600px) {
    .menu {
        display: none;
    }
}
.menu-item {
    color: #374151;
    cursor: pointer;
}
.menu-item:hover {
    color: #f59e0b;
}

.hamburger-icon {
    display: none;
    cursor: pointer;
}
@media only screen and (max-width: 600px) {
    .hamburger-icon {
        display: block;
    }
}
/* navigation end */
/* hero */
.hero {
    background-image: url("https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg");
    background-size: cover;
    background-position: center center;
}
.hero-box {
    max-width: 700px;
    width: 100%;
    background: #fff;
    margin: auto;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 2rem 0.04rem #00000010;
}
.hero-title {
    font-size: 1.3rem;
    color: #374151;
}
.hero-desc {
    color: #374151;
}
/* hero end */
/* experiences */
.box-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 700px;
    width: 100%;
    margin: auto;
}
@media only screen and (max-width: 768px) {
    .box-wrapper {
        justify-content: center;
    }
}
.box {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 2rem 0.04rem #00000010;
    cursor: pointer;
}
@media only screen and (max-width: 768px) {
    .box {
        width: 40%;
    }
    .box:last-child {
        margin-top: 1rem;
    }
}
@media only screen and (max-width: 600px) {
    .box {
        width: 100%;
        margin-top: 1rem;
    }
}

.box:hover {
    background-color: #f59e0b;
}
.box-title {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}
.box:hover .box-title {
    color: #fff;
}
.box-value {
    font-size: 2rem;
    color: #f59e0b;
}
.box:hover .box-value {
    color: #fff;
}
/* experiences end */
/* footer */
footer {
    background: #fff;
    box-shadow: 0 0 2rem 0.04rem #00000010;
    padding: 1rem 0;
}
.copyright-text {
    text-align: center;
    text-transform: uppercase;
}
/* footer end */
`);

	const Snipper = styled('div')`
		.react-tabs__tab-list {
			margin: 0;
		}

		iframe {
			border: none;
		}
	`;

	const TabContent = styled('div')`
		height: 500px;
		overflow-y: auto;
		overflow-x: auto;
	`;

	const CodeWrapper = styled('div')`
		width: 567px;
		height: 100%;
	`;
	return (
		<Snipper>
			<Tabs>
				<TabList>
					<Tab>index.html</Tab>
					<Tab>style.css</Tab>
					<Tab>OUTPUT</Tab>
				</TabList>

				<TabPanel>
					<TabContent>
						<CodeWrapper>
							<CodeEditor
								value={htmlCode}
								language="html"
								placeholder="Please enter JS code."
								onChange={(evn) => setHtmlCode(evn.target.value)}
								padding={15}
								style={{
									fontSize: 12,
									backgroundColor: '#f5f5f5',
									fontFamily:
										'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
								}}
								readOnly
							/>
						</CodeWrapper>
					</TabContent>
				</TabPanel>
				<TabPanel>
					<TabContent>
						<CodeEditor
							value={cssCode}
							language="css"
							placeholder="Please enter JS code."
							onChange={(evn) => setCssCode(evn.target.value)}
							style={{
								fontSize: 12,
								backgroundColor: '#f5f5f5',
								fontFamily:
									'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
							}}
							readOnly
						/>
					</TabContent>
				</TabPanel>
				<TabPanel>
					<TabContent>
						<Iframe
							url="./code.html"
							width="100%"
							height="100%"
							id=""
							className=""
							display="block"
							position="relative"
						/>
					</TabContent>
				</TabPanel>
			</Tabs>
		</Snipper>
	);
};

export default CodeSnippet;
