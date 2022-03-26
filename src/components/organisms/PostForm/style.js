import styled from 'styled-components';

export default styled.div`
  .save-container {
    width: 60%;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    text-align: start;
  }

  .button-publish {
    height: 48px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
  }

  .button-save {
    margin-left: 16px;
    height: 48px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    background: #BDBDBD;
    &:focus {
      color: black;
      background: #BDBDBD;
      border-color: #BDBDBD;
    }
    &:active {
      color: black;
      background: #BDBDBD;
      border-color: #BDBDBD;
    }
    &:hover {
      color: black;
      background: #BDBDBD;
      border-color: #BDBDBD;
    }
  }

  .button-upload-img {
    background: #333;
    color: #ddd;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
    border-radius: 4px;
  }

  .button:hover, .button:focus {
    /* background: #444; */
    outline: 0; /* reset for :focus */
  }

  .blockType {
    padding: 5px;
    margin: 0;
    border-radius: 18px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
  }

  .App {
    /* font-family: sans-serif; */
    /* text-align: center; */
    display: block;
  }

  blockquote {
    padding-left: 14px;
    box-shadow: inset 3px 0 0 0 rgb(41 41 41);
  }

  @media only screen and (max-width: 420px) {
    .button-save {
      margin-left: 5px;
      font-size: 10px;
      padding: 10px;
    }

    .button-publish {
      font-size: 10px;
      padding: 10px;
    }
  }


  /* Override default */
  /* Override default */
  /* Override default */
  .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .Draftail-block--code-block {
    margin: 0px;
  }

  .Draftail-Toolbar {
    background: transparent !important;
    border: none !important;
    display: none;
  }

  /* Override default */
  .Draftail-Editor {
    border: none !important;
    width: 60% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    height: 80vh;
  }

  /* Override default */
  .public-DraftEditor-content {
    /* font-family: "FC Text" !important; */
    font-size: 16px;
  }

  /* Override default */
  .public-DraftEditorPlaceholder-inner {
    /* font-family: "FC Text" !important; */
  }


  @media only screen and (max-width: 991px) {
    .Draftail-Editor {
      width: 90% !important;
    }

    .save-container {
      width: 90%;
    }

    .p1sbsapy{
      z-index:1000 !important;
      padding:0px !important;
      visibility:visible !important;
      opacity:1 !important;
      -webkit-transition:opacity 0.25s cubic-bezier(0.3,1.2,0.2,1) !important;
      transition:opacity 0.25s cubic-bezier(0.3,1.2,0.2,1) !important;
    }
    .p1sbsapy:hover,.p1sbsapy:hover > div::before,.p1sbsapy[data-show='true']{
      visibility:visible !important;
      opacity:1;
    }

    .p98xzql{
      border:1px solid #ddd;
      background:#fff;
      border-radius:2px;
      box-shadow:0px 1px 3px 0px rgba(220,220,220,1);
      box-sizing:border-box;
      width: 36px !important;
    }

    .b1vm70k4{
      background:#fbfbfb;
      color:#888;
      font-size:10px;
      border:0;
      padding-top:5px;
      vertical-align:bottom;
      height:34px;
      width:34px !important;
    }

    .bloz0n9{
      display: none;
      box-sizing:border-box;
      border:1px solid #ddd;
      background:red;
      padding:0 !important;
      margin:0;
      border-radius:18px;
      cursor:pointer;
      height:36px;
      width:36px;
      line-height:36px;
      text-align:center;
    }

    .a1f9fdzj {
      display: none;
    }
  }
`;
