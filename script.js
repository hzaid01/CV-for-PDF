// ========== EVENT 1: DOMContentLoaded ==========
// Fires when HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ EVENT 1: DOMContentLoaded - CV website loaded successfully!');
    
    // Create event display notification
    const notification = document.createElement('div');
    notification.id = 'event-notification';
    notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #1F574F; color: white; padding: 10px 20px; border-radius: 5px; z-index: 1000; display: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);';
    document.body.appendChild(notification);
    
    // Initialize all events after DOM is ready
    initializeAllEvents();
});

// ========== EVENT 2: load ==========
// Fires when the entire page has loaded, including images and stylesheets
window.addEventListener('load', function() {
    console.log('✅ EVENT 2: load - All resources (images, CSS) fully loaded!');
    showNotification('Page Fully Loaded! 🎉');
    
    // Fade-in effect on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Function to show event notifications
function showNotification(message) {
    const notification = document.getElementById('event-notification');
    if (notification) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    }
}

// Initialize all event listeners
function initializeAllEvents() {
    
    // ========== EVENT 3: click ==========
    // Fires when an element is clicked
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            console.log('✅ EVENT 3: click - Profile image clicked!');
            showNotification('Profile Image Clicked! 📸');
            
            // Toggle grayscale filter
            const isGrayscale = this.style.filter.includes('grayscale(100%)');
            this.style.filter = isGrayscale ? 'grayscale(0%)' : 'grayscale(100%)';
            this.style.transition = 'filter 0.5s ease';
        });
    }
    
    // ========== EVENT 4: mouseenter ==========
    // Fires when the mouse pointer enters an element
    const headerBanner = document.querySelector('.header-banner');
    if (headerBanner) {
        headerBanner.addEventListener('mouseenter', function() {
            console.log('✅ EVENT 4: mouseenter - Mouse entered header banner!');
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
            showNotification('Header Hover Active! ✨');
        });
    }
    
    // ========== EVENT 5: mouseleave ==========
    // Fires when the mouse pointer leaves an element
    if (headerBanner) {
        headerBanner.addEventListener('mouseleave', function() {
            console.log('✅ EVENT 5: mouseleave - Mouse left header banner!');
            this.style.boxShadow = '';
            this.style.transform = 'scale(1)';
        });
    }
    
    // ========== EVENT 6: keydown ==========
    // Fires when a key is pressed down
    let keyPressCount = 0;
    document.addEventListener('keydown', function(e) {
        keyPressCount++;
        console.log(`✅ EVENT 6: keydown - Key pressed: ${e.key} (Code: ${e.code}, ASCII: ${e.keyCode})`);
        
        // Special action for Space key
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            showNotification(`Space Pressed! Key Count: ${keyPressCount} ⌨️`);
            
            // Toggle highlight on all headings
            const headings = document.querySelectorAll('h1, h2, h3');
            headings.forEach(heading => {
                const isHighlighted = heading.style.backgroundColor === 'yellow';
                heading.style.backgroundColor = isHighlighted ? '' : 'yellow';
                heading.style.transition = 'background-color 0.3s ease';
            });
        }
    });
    
    // ========== EVENT 7: keyup ==========
    // Fires when a key is released
    document.addEventListener('keyup', function(e) {
        console.log(`✅ EVENT 7: keyup - Key released: ${e.key}`);
        
        // Show ASCII code for released key
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            showNotification(`Key "${e.key}" Released - ASCII: ${e.keyCode} 🔤`);
        }
    });
    
    // ========== EVENT 8: scroll ==========
    // Fires when the document is scrolled
    let scrollCount = 0;
    window.addEventListener('scroll', function() {
        scrollCount++;
        console.log(`✅ EVENT 8: scroll - Page scrolled! Position: ${window.scrollY}px (Count: ${scrollCount})`);
        
        const header = document.querySelector('.header-banner');
        if (header) {
            if (window.scrollY > 50) {
                header.style.opacity = '0.95';
                header.style.transform = 'scale(0.98)';
            } else {
                header.style.opacity = '1';
                header.style.transform = 'scale(1)';
            }
            header.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }
        
        if (scrollCount % 10 === 0) {
            showNotification(`Scrolled ${scrollCount} times! 📜`);
        }
    });
    
    // ========== EVENT 9: resize ==========
    // Fires when the browser window is resized
    window.addEventListener('resize', function() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(`✅ EVENT 9: resize - Window resized to: ${width}x${height}px`);
        showNotification(`Window: ${width}x${height}px 📐`);
        
        const container = document.querySelector('.resume-container');
        if (width < 768) {
            container.style.padding = '10px';
        } else {
            container.style.padding = '';
        }
    });
    
    // ========== EVENT 15: beforeunload ==========
    // Fires before the page is about to be unloaded
    window.addEventListener('beforeunload', function(e) {
        console.log('✅ EVENT 15: beforeunload - User is leaving the page!');
        e.preventDefault();
        e.returnValue = '';
        return '';
    });
    
    // Create demo form for form events
    createDemoForm();
    
    // Initialize drag and drop functionality
    initializeDragDrop();
}

// Create demo form for form events
function createDemoForm() {
    const formHTML = `
        <div style="position: fixed; bottom: 20px; left: 20px; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; max-width: 300px;">
            <h3 style="margin: 0 0 15px 0; color: #1F574F; font-size: 16px;">🎯 Event Demo Panel</h3>
            
            <form id="demo-form" style="display: flex; flex-direction: column; gap: 10px;">
                <div>
                    <label style="font-size: 12px; color: #666;">Type here (input/focus/blur):</label>
                    <input type="text" id="demo-input" placeholder="Type something..." 
                           style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px;">
                    <div id="char-counter" style="font-size: 11px; color: #666; margin-top: 5px;">Characters: 0</div>
                </div>
                
                <div>
                    <label style="font-size: 12px; color: #666;">Select color (change):</label>
                    <select id="demo-select" style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px;">
                        <option value="">Choose...</option>
                        <option value="red">Red Theme</option>
                        <option value="blue">Blue Theme</option>
                        <option value="green">Green Theme</option>
                    </select>
                </div>
                
                <button type="submit" style="padding: 10px; background: #1F574F; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">
                    Submit Form 🚀
                </button>
            </form>
            
            <div id="drag-drop-area" style="margin-top: 15px; padding: 15px; border: 2px dashed #1F574F; border-radius: 5px; text-align: center; font-size: 12px; background: #f9f9f9;">
                📦 Drag & Drop Zone<br><span style="font-size: 10px; color: #666;">Drag content blocks here</span>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHTML);
    
    // ========== EVENT 10: submit ==========
    const demoForm = document.getElementById('demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('✅ EVENT 10: submit - Form submitted!');
            
            const inputValue = document.getElementById('demo-input').value;
            const selectValue = document.getElementById('demo-select').value;
            
            showNotification(`Form Submitted! ✅`);
            alert(`Form Submitted!\nInput: ${inputValue || 'empty'}\nSelection: ${selectValue || 'none'}`);
            
            this.reset();
            document.getElementById('char-counter').textContent = 'Characters: 0';
        });
    }
    
    // ========== EVENT 11: focus ==========
    const demoInput = document.getElementById('demo-input');
    if (demoInput) {
        demoInput.addEventListener('focus', function() {
            console.log('✅ EVENT 11: focus - Input field focused!');
            showNotification('Input Focused! 🎯');
            this.style.borderColor = '#1F574F';
            this.style.boxShadow = '0 0 8px rgba(31, 87, 79, 0.5)';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        // ========== EVENT 12: blur ==========
        demoInput.addEventListener('blur', function() {
            console.log('✅ EVENT 12: blur - Input field lost focus!');
            showNotification('Input Blurred! 👋');
            this.style.borderColor = '';
            this.style.boxShadow = '';
            this.style.transform = 'scale(1)';
        });
        
        // ========== EVENT 14: input ==========
        const charCounter = document.getElementById('char-counter');
        demoInput.addEventListener('input', function() {
            const length = this.value.length;
            console.log(`✅ EVENT 14: input - Input value changed! Length: ${length}`);
            if (charCounter) {
                charCounter.textContent = `Characters: ${length}`;
            }
            
            if (length % 5 === 0 && length > 0) {
                showNotification(`${length} characters typed! ⌨️`);
            }
        });
    }
    
    // ========== EVENT 13: change ==========
    const selectElement = document.getElementById('demo-select');
    if (selectElement) {
        selectElement.addEventListener('change', function() {
            console.log(`✅ EVENT 13: change - Selection changed to: ${this.value}`);
            showNotification(`Selected: ${this.value} 🔄`);
            
            const colors = {
                'red': '#ffebee',
                'blue': '#e3f2fd',
                'green': '#e8f5e9'
            };
            document.body.style.backgroundColor = colors[this.value] || '#e5e5e5';
            document.body.style.transition = 'background-color 0.5s ease';
        });
    }
}

// Initialize drag and drop functionality
function initializeDragDrop() {
    // Make content blocks draggable
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach((block, index) => {
        block.draggable = true;
        block.style.cursor = 'move';
        
        block.addEventListener('dragstart', function(e) {
            console.log(`✅ DRAG EVENT: dragstart - Started dragging block ${index + 1}`);
            this.style.opacity = '0.5';
            this.style.border = '2px dashed #1F574F';
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
            showNotification('Dragging Content! 🎯');
        });
        
        block.addEventListener('dragend', function() {
            console.log(`✅ DRAG EVENT: dragend - Finished dragging block ${index + 1}`);
            this.style.opacity = '1';
            this.style.border = '';
        });
    });
    
    // Make drop zone accept drops
    const dropZone = document.getElementById('drag-drop-area');
    if (dropZone) {
        dropZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.background = '#e8f5e9';
            this.style.borderColor = '#4caf50';
        });
        
        dropZone.addEventListener('dragleave', function() {
            this.style.background = '#f9f9f9';
            this.style.borderColor = '#1F574F';
        });
        
        dropZone.addEventListener('drop', function(e) {
            e.preventDefault();
            console.log('✅ DROP EVENT: drop - Content dropped in zone!');
            showNotification('Content Dropped! 📦✅');
            
            this.style.background = '#c8e6c9';
            this.innerHTML = '✅ Content Dropped Successfully!<br><span style="font-size: 10px;">Drag another block to try again</span>';
            
            setTimeout(() => {
                this.style.background = '#f9f9f9';
                this.style.borderColor = '#1F574F';
                this.innerHTML = '📦 Drag & Drop Zone<br><span style="font-size: 10px; color: #666;">Drag content blocks here</span>';
            }, 2000);
        });
    }
}

console.log('📋 JavaScript Events Demo Loaded - 15 Events Implemented!');

