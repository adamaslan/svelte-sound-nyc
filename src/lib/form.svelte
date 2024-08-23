<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://form.jotform.com/jsform/72077025484154';
      
      const div1 = document.querySelector('.div1');
      
      if (div1) {
        div1.appendChild(script);
        
        script.onload = () => {
          const iframe = div1.querySelector('iframe');
          
          // Ensure the iframe exists and is an HTMLIFrameElement before applying the style
          if (iframe && iframe instanceof HTMLIFrameElement) {
            iframe.style.background = 'transparent';
          }
        };
      }
    });
  </script>
  
  <div class="div1 shadow-lg rounded-lg p-4">
    <!-- The form will be loaded here by the script -->
  </div>
  
  <style>
    .div1 {
      background: transparent;
    }
  
    /* Additional styling if necessary */
  </style>
  