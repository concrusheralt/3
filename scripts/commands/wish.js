module.exports.config = {
	name: "wish",
	version: "1.0.2",
	permission: 2,
	credits: "nayan",
	prefix: false,
	description: "",
	category: "without prefix",
	usages: "[tag]",
	cooldowns: 5
};

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("বস যে birthday wish করতে চান @ম্যানশন দেন", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("HAPPY BIRTHDAY TO YOU);
setTimeout(() => {a({body: "শুভ জন্মদিন" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "সুন্দর এই পৃথিবীতে সুন্দরতম জীবন হোক তোমার.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "পূরণ হোক প্রতিটি স্বপ্ন প্রতিটি আশা" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "বেঁচে থাকো হাজার বছর ধরে। ~শুভ জন্মদিন~" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "আমি কামনা করছি তোমার জন্মদিন এবং প্রতিটা দিন যেন সূর্যের আলোয় (সুখ এবং সমৃদ্ধি) ভরে থাকে - I wish that your birthday and everyday would be filled with sunshine." + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "A ফর আমি B ফর বলতে C ফর চাই D ফর দারুণ E ফর একটা F ফর ফাটাফাটি G ফর গোপন কথা H ফর হ্যাপি বার্থডে !" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "আল্লাহর আশীর্বাদে তোমার প্রতিটি দিন কাটুক নতুন নতুন সুখের আতিশয্যে আর তোমার চারিপাশে ছড়িয়ে থাকুক খুশির নানান আভাস।" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "জন্মদিনে শুভেচ্ছা নিও যদিও বিলম্বিত বার্থডে ট্রিট পেলে বৎস হবো বড় প্রীত।" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: " happy many many returns of the day " + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "Happy birthday" + " " + name, mentions: arraytag})}, 25000);



  
}
