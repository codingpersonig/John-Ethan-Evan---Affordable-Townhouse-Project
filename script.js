const heroContent = document.getElementById('heroContent');
const home = document.getElementById('home');
const diagrams = document.getElementById('diagrams');
const revitDiagrams = document.getElementById('revit-diagrams');
const summary = document.getElementById('summary');

home.addEventListener('click', () => {
    scrollToTopFunction();
    heroContent.innerHTML = `
        <div class="pageTitle">About the family</div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="9C41C859-40FA-4CEC-8289-D8D86345EF8D.png" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Family Introduction</div>
                    <div class="contentText">Our clients, Chioma Onwuka, and her 3 children, Toby, Adebayo, and Emaka Onwuka along with their dog, Roman. They came from Nigeria to NC to seek a better environment because of conflict in their hometown. The family would need atleast 3 bedrooms, 2 bathrooms, a living room and nursery for the youngest child. They would also like a terrace. We are prepared to provide the needs for this family to our fullest extent.</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Family Introduction</div>
                    <div class="contentText">Include background story and specific needs of your client</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Cultural Information</div>
                    <div class="contentText">Research information about the specific country or geographic area the family is from</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg" style="width: 100%">
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Client Specific Room or Area of House</div>
                    <div class="contentText">Show a part or parts of your house (from Revit) that you designed specifically to meet the needs of your client</div>
                </div>
            </div>
        </div>
        <div class="pageTitle" style="margin-bottom: 20px;">Additional Features</div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg" style="width: 50%">
                <img src="" alt="" class="contentImg" style="width: 50%">
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg" style="width: 50%">
                <img src="" alt="" class="contentImg" style="width: 50%">
            </div>
        </div>
    `;
});

diagrams.addEventListener('click', () => {
    scrollToTopFunction();
    heroContent.innerHTML = `
        <div class="pageTitle">Diagrams</div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="Bubble Diagram 1.jpg" alt="" class="contentImg">
                <img src="Bubble Diagram 2.jpg" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Bubble Diagram</div>
                    <div class="contentText">These are our bubble diagram pictures. These images represent the imagined desires and necessities of our client. Our bubble diagram shows everything our client would need in their townhome.</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Initial Sketches</div>
                    <div class="contentText">Click to edit text</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Opportunity Site Plan</div>
                    <div class="contentText">Click to edit text</div>
                </div>
            </div>
        </div>
        <div class="pageTitle">Final Floorplans</div>
        <div class="pageContent">
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Plumbing Floor 1</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Plumbing Floor 2</h2>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Electrical Floor 1</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Electrical Floor 2</h2>
                </div>
            </div>
        </div>
    `;
});

revitDiagrams.addEventListener('click', () => {
    scrollToTopFunction();
    heroContent.innerHTML = `
        <div class="pageTitle">Revit Diagrams</div>
        <div class="pageContent" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <div class="contentTitle">Dimenstioned Floorplans</div>
            <div class="contentText">Labeled Rooms and Fixtures only</div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Floor 1</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Floor 2</h2>
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                </div>
            </div>
        </div>
        <div class="pageContent" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <div class="contentTitle">Floorplans with furniture</div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Floor 1</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Floor 2</h2>
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                </div>
            </div>
        </div>
        <div class="pageContent" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <div class="contentTitle">3D Views</div>
        </div>
        <div class="pageContent" style="display: flex; gap: 20px;">
            <div class="contentblock" style="display: flex; flex-direction: column; gap: 20px;">
                <img src="" alt="" class="contentImg">
                <img src="" alt="" class="contentImg">
            </div>
            <div class="contentblock">
                <img src="" alt="" class="contentImg" style="height: 100%; width: calc(90vw - 440px)">
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Front to Back Section View</div>
                    <div class="contentText">Click to edit text</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                    <img src="" alt="" class="contentImg" style="width: 50%;">
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Elevation Drawings</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white;">Elevation Drawings</h2>
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                    <h2 style="width: 50%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                </div>
            </div>
        </div>
    `;
});

summary.addEventListener('click', () => {
    scrollToTopFunction();
    heroContent.innerHTML = `
        <div class="pageTitle">Summary</div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Sustainable Design</div>
                    <div class="contentText">Explain how you used the concepts of Green Building and Sustainable Design in your house.</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <img src="" alt="" class="contentImg">
                <div class="contentDetails">
                    <div class="contentTitle">Universal Design</div>
                    <div class="contentText">Explain how you used the concepts of Universal Design and Accessibility in your house.</div>
                </div>
            </div>
        </div>
        <div class="pageContent">
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <img src="" alt="" class="contentImg" style="width: 33.3%;">
                    <img src="" alt="" class="contentImg" style="width: 33.3%;">
                    <img src="" alt="" class="contentImg" style="width: 33.3%;">
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 33.3%; display: flex; justify-content: center; color: white;">Student 1</h2>
                    <h2 style="width: 33.3%; display: flex; justify-content: center; color: white;">Student 2</h2>
                    <h2 style="width: 33.3%; display: flex; justify-content: center; color: white;">Student 3</h2>
                </div>
            </div>
            <div class="contentblock">
                <div style="display: flex; gap: 20px; width: 100%;">
                    <h2 style="width: 33.3%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                    <h2 style="width: 33.3%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                    <h2 style="width: 33.3%; display: flex; justify-content: center; color: white; font-size: 18px; margin-top: -5px;">Click to edit text</h2>
                </div>
            </div>
        </div>
    `
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function scrollToTopFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const style = document.createElement('style');
style.innerHTML = `
    .modal-overlay {
        display: none; position: fixed; z-index: 9999;
        left: 0; top: 0; width: 100%; height: 100%;
        background-color: rgba(0,0,0,0.9); cursor: zoom-out;
        justify-content: center; align-items: center; flex-direction: column;
    }
    .modal-img {
        max-width: 90%; max-height: 80vh;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        transform: scale(0.8); transition: transform 0.3s ease;
        border-radius: 30px;
        animation: scaleIn 0.3s ease;
    }
    .modal-overlay.active { display: flex; }
    .modal-overlay.active .modal-img { transform: scale(1); }
    .modal-caption { color: #ccc; margin-top: 15px; font-family: sans-serif; }
    .contentImg { cursor: pointer; }

    @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Create the Modal Elements
const modal = document.createElement('div');
modal.className = 'modal-overlay';

const modalImg = document.createElement('img');
modalImg.className = 'modal-img';

const modalCaption = document.createElement('div');
modalCaption.className = 'modal-caption';

modal.appendChild(modalImg);
modal.appendChild(modalCaption);
document.body.appendChild(modal);

/**
 * LOGIC
 * Uses Event Delegation to work with your dynamically injected innerHTML
 */
document.addEventListener('click', (e) => {
    // 1. Open if clicking a content image
    if (e.target.classList.contains('contentImg') && e.target.src !== "") {
        modalImg.src = e.target.src;
        modalCaption.innerText = e.target.alt || "";
        modal.classList.add('active');
    } 
    // 2. Close if clicking the background or the image again
    else if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});


