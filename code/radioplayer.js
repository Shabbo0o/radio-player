fetch("https://api.sr.se/api/v2/channels/?format=json")
    .then(response => response.json())
    .then(data =>{
        // console.log(data.channels);
        const container = document.getElementById('channels');
        
        data.channels.forEach(item => {
            //container
            const channelContainer = document.createElement("div");
            channelContainer.classList.add('container');
            channelContainer.style.backgroundColor = "#" + item.color;
            //image
            const channelImage = document.createElement('div');
            channelImage.classList.add('image-container');
            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.name;
            channelImage.appendChild(image);
            //NAme
            const channelName = document.createElement('div');
            channelName.classList.add('channel-name');
            channelName.textContent = item.name;
            //Audio
            const channelAudio = document.createElement('div');
            channelAudio.classList.add('channel-audio');
            const audio = document.createElement('audio');
            audio.controls = true;
            const source = document.createElement('source');
            source.src = item.liveaudio.url;
            source.type = 'audio/mpeg';
            audio.appendChild(source);
            channelAudio.appendChild(audio);
            channelContainer.appendChild(channelImage);
            channelContainer.appendChild(channelName);
            channelContainer.appendChild(channelAudio);
            container.appendChild(channelContainer);
        })
    })
    
    .catch(error => console.error('Error fetching data:', error));
