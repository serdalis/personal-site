# Thales
In my first job working with real time simulation, I had to discover how to efficiently move data between a desktop computer and an inbuilt processing card which had its own CPU and memory space.  
I had to develop my own checksum / encoding and compression libraries to work with both the Little Endian PC and the Big Endian PowerPC Processor.  
I also implemented a custom RS485 communication layer to transfer data between peripheral devices.
 
The biggest challenge in this job was to develop a snapshot / record and replay system for the simulator, which had to take the current state of the memory on the powerPC card, transfer it to the main PC and send it over UDP to an external computer where it would be time synced with the video and audio... and then doing the exact opposite to replay the simulation state.
 
This doesn't sound incredibly hard, except, the maximum transfer speed between the PC and the PowerPC card was 1.2MB/s, which necessitated very aggressive compression and encoding of the memory.

There was a lot more involved in this job, including designing and procuring the networking hardware, Desktop PC hardware / servers and configuring the base OS, but it's less interesting to talk about.