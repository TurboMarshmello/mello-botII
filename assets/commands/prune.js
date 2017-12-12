exports.run = (client, msg, args) => {
if (!msg.channel.permissionsFor(msg.author).hasPermission("MANAGE_MESSAGES")) {
    msg.channel.sendMessage(":wastebasket: | You do not have the required permission to delete messages!").then(msg=>msg.delete(5000));
    return;
  } else if (!msg.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
    msg.channel.sendMessage(":wastebasket: | I do not have the required permission to delete messages. Please check your roles").then(msg=>msg.delete(5000));
    return;
  }
  let messagecount = parseInt(args.join(" "));
    msg.channel.fetchMessages({limit : messagecount}).then(msgs => msg.channel.bulkDelete(msgs));
        msg.channel.sendMessage(':wastebasket: | Messages have been deleted!').then(msg=>msg.delete(5000))
}