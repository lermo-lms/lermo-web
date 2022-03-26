import React, { useEffect } from 'react';
import Style from './index.style';

const ErrorPage = () => {
  return (
    <Style>
      <div className="terms-container">
        <div className="terms-content">
          <h1> เงื่อนไขและข้อตกลงในการใช้บริการ </h1>

          <h2> ทั่วไป </h2>

          <p> เงื่อนไขข้อตกลงการใช้งานนี้ (“ข้อตกลงการใช้งาน”) มีผลใช้บังคับตั้งแต่วันที่ 1 มีนาคม 2564 เป็นต้นไป
            <br />จนกว่าจะมีการประกาศแก้ไข เปลี่ยนแปลง เพิ่มเติม หรือมีประกาศเงื่อนไขฉบับใหม่โดยบริษัท เทคสเตอร์ จำกัด (“บริษัท”)
            <br /> เมื่อมีการเปลี่ยนแปลง บริษัทจะทำการแสดงข้อตกลงใช้งานใหม่บนหน้านี้ และถือว่าผู้ใช้งานได้ยินยอมตามข้อตกลงใช้งานใหม่ในทันที
          </p>

          <p> ข้อตกลงการใช้งานจะเป็นข้อตกลงการใช้งานของท่านกับเว็บไซต์ Lermo.io (https://lermo.io/) (“เว็บไซต์”) เท่านั้น
            <br /> ซึ่งกำหนดสิทธิ์ หน้าที่ ความรับผิดชอบที่แต่ละฝ่ายมีระหว่างกันเกี่ยวกับการให้บริการและการใช้บริการทั้งหมดบนเว็บไซต์
          </p>

          <p> การใช้เว็บไซต์ การสร้างบัญชีผู้ใช้งาน หรือเมื่อท่านเริ่มใช้งานเว็บไซต์ด้วยการกดยอมรับข้อตกลงการใช้งานของบริษัทจะถือว่าท่านยอมรับที่จะปฏิบัติตามและอยู่ภายใต้ข้อตกลงการใช้งาน
            <br />รวมถึงยอมรับนโยบายความเป็นส่วนตัวที่บริษัทกำหนด ท่านจะไม่สามารถใช้บริการเว็บไซต์ของบริษัทได้ หากท่านไม่เห็นด้วยกับข้อตกลง หรือนโยบายความเป็นส่วนตัวดังกล่าว
            <br /> และท่านในฐานะผู้ใช้งานจะไม่ทำการใดๆ อันเป็นสิ่งผิดกฎหมาย หรือขัดต่อความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชนผ่านเว็บไซต์โดยเด็ดขาด รวมถึงจะไม่ทำการใดๆ
            <br /> อันขัดต่อข้อตกลงการใช้งาน และยอมรับการใช้ดุลพินิจของบริษัทให้ถือเป็นข้อยุติ
          </p>

          <h2> การใช้บริการของคุณ </h2>

          <p>
            เนื้อหาในบริการรวมถึงวิดีโอ เสียง (เช่น เพลงและเสียงอื่นๆ) กราฟิก รูปภาพ ข้อความ (เช่น ความคิดเห็นและสคริปต์)
            <br />  การแสดงแบรนด์ (รวมถึงชื่อทางการค้า เครื่องหมายการค้า เครื่องหมายการบริการ หรือโลโก้)
            <br /> ฟีเจอร์แบบอินเทอร์แอกทีฟ ซอฟต์แวร์ เมตริก และเนื้อหาอื่นๆ ที่คุณ, Lermo หรือบุคคลที่สามจัดหาให้ (เรียกรวมกันว่า &quot;เนื้อหา &quot;)
            <br /> เนื้อหาเป็นความรับผิดชอบของบุคคลหรือหน่วยงานที่ส่งเนื้อหานั้นๆ ไปยังบริการ โดย Lermo ไม่ได้มีภาระหน้าที่ในการโฮสต์หรือแสดงเนื้อหาแต่อย่างใด
            <br />  หากพบเนื้อหาที่เชื่อว่าไม่เป็นไปตามข้อตกลงนี้และละเมิดหลักเกณฑ์ของชุมชนหรือกฎหมาย โปรดรายงานให้เราทราบ report@lermo.io
          </p>

          <h2> การเก็บข้อมูล </h2>

          <p> เราเก็บเนื้อหาของโพสต์ การติดต่อสื่อสาร และข้อมูลอื่น ๆ ที่คุณใช้งานบน Lermo รวมถึงข้อมูลการลงทะเบียน สร้างหรือแชร์โพสต์ และติดต่อสื่อสารกับผู้อื่นบน Lermo ข้อมูลดังกล่าวครอบคลุมข้อมูลในโพสต์ เช่น ขนาดรูป และข้อมูลส่วนตัวของคุณ เช่น วันเกิด และเพศ</p>
          <p> เราเก็บข้อมูลที่เกี่ยวข้องกับการใช้งาน Lermo ของคุณ เช่น ชนิดของโพสต์ที่คุณเห็น หรือมีส่วนร่วม และระยะเวลาการใช้งาน Lermo ของคุณ เช่น เราบันทึกการใช้งานล่าสุด โพสต์ วิดีโอ พอดแคสต์ และเนื้อหาอื่น ๆ ที่คุณเห็นบน Lermo </p>
          <p> เราเก็บข้อมูลจากอุปกรณ์ที่คุณใช้งาน Lermo รวมถึงข้อมูลที่เกี่ยวข้องกับระบบปฏิบัติการ ฮาร์ดแวร์และเวอร์ชันของซอฟแวร์ รหัสยืนยันตัวตน และรหัสอุปกรณ์ เราเก็บข้อมูลเกี่ยวกับการตั้งค่าอุปกรณ์ที่คุณอนุญาตให้เราเข้าถึง เช่น กล้อง หรือ รูปภาพ </p>

          <h2> นโยบายคุ้มครองข้อมูลส่วนบุคคล </h2>
          “ผู้ใช้บริการ”สามารถอ่านและศึกษานโยบายคุ้มครองข้อมูลส่วนบุคคลได้ที่ <a href="/privacy"> privacy </a>

          <h2> สิทธิ์และข้อจำกัด </h2>
          คุณอาจเข้าถึงและใช้บริการที่มีให้ได้หากปฏิบัติตามข้อตกลงนี้และกฎหมายที่เกี่ยวข้อง นอกจากนี้ คุณยังดูหรือฟังเนื้อหาเพื่อการใช้งานส่วนตัวที่ไม่ใช่การใช้งานเชิงพาณิชย์

          ข้อจำกัดด้านล่างจะมีผลกับการใช้บริการของคุณ โปรดทราบว่าคุณไม่ได้รับอนุญาตให้ดำเนินการต่อไปนี้

          <ol>
            <li> เข้าถึง ทำซ้ำ ดาวน์โหลด เผยแพร่ ส่ง ออกอากาศ แสดง จำหน่าย ให้สัญญาอนุญาต แก้ไข ปรับเปลี่ยน หรือใช้ส่วนหนึ่งส่วนใดของบริการหรือเนื้อหา ยกเว้นกรณีที่ (ก) ได้รับอนุญาตอย่างชัดเจนจากบริการ หรือ (ข) ได้รับอนุญาตอย่างเป็นลายลักษณ์อักษรล่วงหน้าจาก Lermo และผู้ถือสิทธิ์ที่เกี่ยวข้อง (หากมี) </li>
            <li> หลีกเลี่ยง ปิดใช้ มีส่วนร่วมในการฉ้อโกง หรือแทรกแซงส่วนหนึ่งส่วนใดของบริการ (หรือพยายามทำสิ่งเหล่านี้) รวมถึงฟีเจอร์ที่เกี่ยวข้องกับการรักษาความปลอดภัยหรือฟีเจอร์ที่ (ก) ป้องกันหรือจำกัดการคัดลอกหรือการใช้เนื้อหาในรูปแบบอื่นๆ หรือ (ข) จำกัดการใช้บริการหรือเนื้อหา </li>
            <li> เข้าถึงบริการโดยใช้วิธีการแบบอัตโนมัติ (เช่น โรบ็อต บ็อตเน็ต หรือสเครปเปอร์) ยกเว้น (ก) ในกรณีที่ใช้เครื่องมือค้นหาสาธารณะโดยสอดคล้องกับไฟล์ robots.txt ของ Lermo หรือ (ข) ได้รับอนุญาตอย่างเป็นลายลักษณ์อักษรล่วงหน้าจาก Lermo </li>
            <li> รวบรวมหรือเก็บข้อมูลที่อาจระบุตัวบุคคลได้ (เช่น ชื่อผู้ใช้ หรือ หน้า) เว้นแต่จะได้รับอนุญาตจากบุคคลดังกล่าวหรือได้รับอนุญาต </li>
            <li> ใช้บริการเพื่อเผยแพร่เนื้อหาเชิงพาณิชย์หรือเนื้อหาส่งเสริมการขายที่ไม่พึงประสงค์ หรือใช้ในการเชิญชวนคนหมู่มากหรือการเชิญชวนที่ไม่พึงประสงค์ </li>
            <li> ก่อให้เกิดหรือกระตุ้นให้เกิดการวัดการมีส่วนร่วมกับบริการอย่างแท้จริงของผู้ใช้ที่ไม่ถูกต้อง รวมถึงการจ่ายเงินหรือเสนอสิ่งจูงใจให้แก่ผู้ใช้เพื่อเพิ่มยอดดู การกดชอบหรือไม่ชอบวิดีโอ หรือเพิ่มผู้ติดตามของช่อง จนถึงการดัดแปลงเมตริกในลักษณะต่างๆ </li>
            <li> ใช้การรายงาน การแจ้งว่าไม่เหมาะสม การร้องเรียน การโต้แย้ง หรือการอุทธรณ์ในทางที่ผิด รวมถึงการส่งเรื่องโดยไม่มีหลักฐาน ไม่จริงจัง หรือในลักษณะก่อกวน </li>
          </ol>

          <h2> ติดต่อ Lermo </h2>
          หากผู้ใช้งานต้องการเพิกถอนความยินยอมในการใช้ข้อมูลส่วนตัวของท่าน ขอเรียกดูข้อมูลและ/หรือข้อมูลส่วนตัว มีคำถาม ความคิดเห็น ข้อกังวล หรือขอความช่วยเหลือทางด้านเทคนิค หรือเกี่ยวกับโปรแกรมคุกกี้ (cookies) กรุณาติดต่อเราได้ ที่นี่
          อีเมล contact@lermo.io
        </div>
      </div>
    </Style>
  );
};

export default ErrorPage;