Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @Tristine0426 Sign out
0
0 224 Tristine0426/bloc-jams-jquery
forked from Bloc/bloc-jams-jquery-starter
 Code  Pull requests 0  Projects 0  Wiki  Insights  Settings
bloc-jams-jquery/styles/song-list.css
0a24c0a  on Nov 2, 2017
@R-V-S R-V-S add meta tag and pointer cursor for song list

104 lines (86 sloc)  1.45 KB
#song-list {
  border-collapse: collapse;
  clear: both;
  font-weight: 100;
  margin-top: 3rem;
  overflow: hidden;
  width: 100%;
}

#song-number-column {
  width: 40px;
}
#song-duration-column {
  width: 80px;
}

tr {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  background: hsla(0, 0%, 0%, 0.01);
  transition: all 0.2s ease;
}

tr:focus {
  outline: aliceblue;
}

tr:hover .ion-play,
tr.playing .ion-pause,
tr.paused .ion-play {
  display: block;
}

tr .ion-play,
tr .ion-pause,
tr:hover .song-number,
tr.playing .ion-play,
tr.playing .song-number,
tr.paused .ion-pause,
tr.paused .song-number {
  display: none;
}

tr:hover {
  background: hsla(0, 0%, 0%, 0.05);
  cursor: pointer;
}

tr.playing {
  background: hsla(0, 0%, 0%, 0.1);
}

tr:hover .song-title {
  color: hsla(0, 0%, 100%, 1);
}

tr:last-child {
  border: none;
}

td {
  padding: 0.75rem;
}

tr button {
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  padding: 0;
}

tr button:focus {
  outline: none;
  text-shadow: 2px 4px 3px hsla(0,0%,0%,0.25);
}

tr button:focus .song-number {
  display: none;
}
tr button:focus .ion-play {
  display: block;
}

tr.playing button:focus .song-number,
tr.playing button:focus .ion-play {
  display: none;
}
tr.playing button:focus .ion-pause {
  display: block;
}


.song-number {
  color: hsla(0, 0%, 100%, 0.66);
}

.song-title {
  color: hsla(0, 0%, 100%, 0.9);
}

.song-duration {
  color: hsla(0, 0%, 100%, 0.5);
  text-align: right;
}
