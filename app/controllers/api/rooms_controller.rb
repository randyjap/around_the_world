class Api::RoomsController < ApplicationController
  def index
    if current_user
      @rooms = Room.all
    else
      render json: ["you are not logged in"], status: 401
    end
  end

  def create
    user = current_user
    name = params[:name]
    @room = Room.new(moderator: user, name: name)
    if @room.save
      RoomMembership.create(guest: user, room: @room)
      render json: @room, status: 200
    else
      render json: ["not saved"], status: 401
    end
  end
end
