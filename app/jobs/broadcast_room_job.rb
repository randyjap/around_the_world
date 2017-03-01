class BroadcastRoomJob < ApplicationJob
  queue_as :default

  def perform(room)
    parsed_message = Api::MessagesController.render(
      partial: 'api/rooms/room',
      locals: { room: room }
    )
    ActionCable.server.broadcast(
      "AllRooms", JSON.parse(parsed_message)
    )
  end
end
